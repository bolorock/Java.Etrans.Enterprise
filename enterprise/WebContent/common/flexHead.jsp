<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
			
   request.setAttribute("basePath",basePath);			
%>
<html xmlns="http://www.w3.org/1999/xhtml">

<base href="${basePath}"></base>

<link rel="stylesheet" type="text/css" href="${basePath}css/body.css">
<!--[if IE 6]>
<link rel="stylesheet" type="text/css" href="Css/ie6_hack.css">
<![endif]--> 

<head>

<title>道路运输车辆卫星定位企业平台-广州亿程交通信息有限公司</title>
      
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta http-equiv="pragma" content="no-cache">
<meta http-equiv="cache-control" content="no-cache">
<meta http-equiv="expires" content="0">

<link rel="stylesheet" type="text/css" href="${basePath}css/body.css">
<link rel="stylesheet" href="${basePath}js/flexigrid/flexigrid.css" type="text/css">
<link rel="stylesheet" type="text/css" href="${basePath}js/easyui2/themes/default/easyui.css">
<link rel="stylesheet" type="text/css" href="${basePath}js/easyui2/themes/icon.css">

<script type="text/javascript" src="${basePath}js/util.js"></script>
<script type="text/javascript" src="${basePath}js/jq/jquery-1.7.1.min.js"></script>
<script type="text/javascript" src="${basePath}js/easyui2/jquery.easyui.min.js"></script>
<script type="text/javascript" src="${basePath}js/flexigrid/flexigrid.js"></script>
<script type="text/javascript" src="${basePath}js/common/window.js"></script>
<script type="text/javascript" src="${basePath}js/common/initSelects.js"></script>

</head>

<body/>

</html>

