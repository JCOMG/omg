<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%
  System.out.println("此程式執行中");
  String callback = request.getParameter("callback");
  out.print(callback + "([{name:'John', age:19}, {name:'Mary', age:20}])");
%>