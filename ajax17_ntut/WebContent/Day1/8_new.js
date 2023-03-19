function doFirst(){
    // 跟 HTML 畫面產生關聯
    // loadButton = document.getElementById('loadButton')
    result = document.getElementById('result')

    // 再建事件聆聽功能
    // loadButton.addEventListener('click',function(){
        // step 1 建立 XMLHttpRequest 物件
        xhr = new XMLHttpRequest()
        xhr.addEventListener('readystatechange',callState) 

        // step 2 發出請求並傳送出去  // false: 同步 | true: 非同步
        // xhr.open('method', '可以幫忙處理資料的後端程式', 同步或非同步)

        // GET
        let urlSource = `../XML_JSON_CSV/travellocationCHINESE.xml`
        // let urlSource = `這裡應該放的是API的網址`
        xhr.open('GET', urlSource, true)
        xhr.send()
    // })
}
function callState(){
    if(xhr.readyState == 4){ //傳送是4 // readyState: 0 --> 1 --> 2 --> 3 --> 4 
        if(xhr.status == 200){ //傳回來是200
            //傳回來是XML資料，EX : document <ComFormat(根目錄)> <Section></Section>...
            let xmlData = xhr.responseXML       // ，xmlData 是 XML DOM 物件
            Section = xmlData.querySelectorAll('Section')  // Section 是陣列

            // for(let i = 0; i < 5; i++){
            for(let i = 0; i < Section.length; i++){
                stitle = Section[i].querySelector('stitle').firstChild.nodeValue
                xbody = Section[i].querySelector('xbody').firstChild.nodeValue
                latitude = Section[i].querySelector('latitude').firstChild.nodeValue
                longitude = Section[i].querySelector('longitude').firstChild.nodeValue
                theImage = Section[i].querySelector('file>img').firstChild.nodeValue

                if(Section[i].querySelector('xurl')){ //判斷有沒有xurl
                    theURL = Section[i].querySelector('xurl').firstChild.nodeValue //有的就找到他的值
                }else{
                    theURL = theImage //沒有的話就顯現出圖就好(簡單來說，今天有2張圖片，一張點下去自動可以轉到該圖片的網站，另一張圖可能沒有網站，故只顯現出來照片)
                }
                //上述都是在抓xml裡的東西，要在client單產生「標籤」
                createXMLNodes() //在js呈現出來
            }
        }else{
            result.innerHTML = `${xhr.status}: ${xhr.statusText}`//告訴我錯誤訊息，ex : 404
        }
    }
}
function createXMLNodes(){
    // top div
    let trip = document.createElement('div')
    trip.className = 'tripLocation'

    result.appendChild(trip)

    // left
    let leftDiv = document.createElement('div')
    leftDiv.className = 'left'

    let url = document.createElement('a')
    url.href = theURL

    let image = document.createElement('img')
    image.src = theImage

    url.appendChild(image)
    leftDiv.appendChild(url)
    trip.appendChild(leftDiv)

    // right
    let rightDiv = document.createElement('div')
    rightDiv.className = 'right'

    let theHeader = document.createElement('header')
    theHeader.innerText = stitle

    let coordsDiv = document.createElement('div')
    let coordsSpan = document.createElement('span')
    coordsSpan.innerText = `${latitude} | ${longitude}`

    coordsDiv.appendChild(coordsSpan)

    let hrAlone = document.createElement('hr')

    let theFooter = document.createElement('footer')
    theFooter.innerText = xbody.substring(0, 450)

    rightDiv.appendChild(theHeader)
    rightDiv.appendChild(coordsDiv)
    rightDiv.appendChild(hrAlone)
    rightDiv.appendChild(theFooter)

    trip.appendChild(rightDiv)

    // clear
    let clearDiv = document.createElement('div')
    clearDiv.style.clear = 'both'

    trip.appendChild(clearDiv)
}
window.addEventListener('load',doFirst)