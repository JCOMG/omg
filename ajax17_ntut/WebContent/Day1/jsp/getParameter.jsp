<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">

<%
	String name = request.getParameter("name");
	String age = request.getParameter("age");
	
	out.println("Your name: <span style='color:#abc'>" + name + "</span><br>");
	out.println("Your age: <span style='color:#cba'>" + age + "</span><br>");
%>