<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>JavaScript Ajax Demo</title>

<style type="text/css"> 
input, button, select {
    margin-bottom: 10px;
}
</style>
</head>
<body>

<script type="text/JavaScript">
function jsonHandler(data){
	alert(data[0].name);
}
</script>
<script type="text/JavaScript"
   src='http://192.168.1.105:8080/ajax/ajax_JSONP.jsp?callback=jsonHandler'
>

</script>

</body>
</html>