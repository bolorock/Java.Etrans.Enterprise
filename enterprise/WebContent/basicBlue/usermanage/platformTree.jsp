<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
			
   request.setAttribute("basePath",basePath);	
%>
<html>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta http-equiv="pragma" content="no-cache">
<meta http-equiv="cache-control" content="no-cache">
<meta http-equiv="expires" content="0">
<head>

<link rel="stylesheet" type="text/css" href="${basePath}css/body.css">
<link rel="stylesheet" type="text/css" href="${basePath}js/easyui/themes/icon.css">
<link rel="stylesheet" type="text/css" href="${basePath}js/easyui/themes/default/easyui.css">

<script type="text/javascript" src="${basePath}js/jq/jquery-1.7.1.min.js"></script>
<script type="text/javascript"	src="${basePath}js/sys/user/platformTree.js"></script>	
<script type="text/javascript" src="${basePath}js/easyui/jquery.easyui.min.js"></script>

<style type="text/css">
	.load{width: 100px; height: 16px; position: absolute; left: 20px; top: 80px  }
</style>
</head>

<body style="background-color: #fff;">
		<input type="hidden" id="id" value="<%=request.getParameter("uId") %>">
		<div style="text-align: left;">
			<table border="0" id="tabId"></table>
		</div>
</body>
</html>