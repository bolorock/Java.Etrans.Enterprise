<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ include file="/common/validateHead.jsp"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">

<html>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta http-equiv="pragma" content="no-cache">
<meta http-equiv="cache-control" content="no-cache">
<meta http-equiv="expires" content="0">
<head>

<link rel="stylesheet" type="text/css" href="${basePath}css/body.css">
<link rel="stylesheet" type="text/css" href="${basePath}js/easyui/themes/default/easyui.css">
<link rel="stylesheet" type="text/css" href="${basePath}js/easyui/themes/icon.css">

<script type="text/javascript" src="${basePath}js/jq/jquery-1.7.1.min.js"></script>
<script type="text/javascript" src="${basePath}js/easyui/jquery.easyui.min.js"></script>
<script type="text/javascript"	src="${basePath}js/sys/tree/areaTree.js"></script>	

<style type="text/css">
	.load{width: 100px; height: 16px; position: absolute; left: 20px; top: 80px  }
</style>
</head>

<body style="background-color: #fff;">
<%-- <div>--%>
<%--   <input type="text" id="areaNames" name="areaNames"/>--%>
<%--   <a id="submitBtn" href="javascript:void(0)" class='common_btn' style="margin-bottom: 3px;">查询</a> --%>
<%--</div>     --%>
 <div id="areaTree" style="background-color:#FFFAFA;WIDTH: 365; HEIGHT: 290;overflow-x: hidden; OVERFLOW: scroll;"></div>
		   	
</body>
</html>