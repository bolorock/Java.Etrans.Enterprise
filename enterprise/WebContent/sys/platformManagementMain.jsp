<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>

<base href="<%=basePath%>"></base>

<title>道路运输车辆卫星定位企业平台</title>

<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta http-equiv="pragma" content="no-cache">
<meta http-equiv="cache-control" content="no-cache">
<meta http-equiv="expires" content="0">

<script src="<%=basePath%>js/jq/jquery-1.7.1.min.js" type="text/javascript"></script>

<link href="<%=basePath%>css/body.css" rel="stylesheet" type="text/css"/>
<% 
	String parentId=request.getParameter("parentId"); //模块父id
	request.setAttribute("parentId",parentId);
	
	//**********作用与证件过期连接跳转begin******************
	String moduleName2="";
	String moduleName3URL="";
	String id = "";
	if(request.getParameter("moduleName2")!=null){//左边二级菜单名称
		moduleName2 = new String(request.getParameter("moduleName2").getBytes("ISO-8859-1"),"utf-8");//模块名称，比如  "基础管理"
	}
	request.setAttribute("moduleName2",moduleName2);
	if(request.getParameter("moduleName3URL")!=null){//左边三级级菜单名称
		moduleName3URL = new String(request.getParameter("moduleName3URL").getBytes("ISO-8859-1"),"utf-8");//模块名称，比如  "基础管理"
	}
	request.setAttribute("moduleName3URL",moduleName3URL);
	if(request.getParameter("id")!=null){//证件过期数据id
		id=request.getParameter("id");
	}
	request.setAttribute("id",id);
	//**********作用与证件过期连接跳转end******************

%>
<script type="text/javascript">
$(function() {
	
	/**设置宽度**/
	var width = $("#count").width();
	var rightDivWidth = parseFloat(width)-250;
	$("#rightdiv").width(rightDivWidth+"px");
	
});

<%--alert("parentId:"+'${parentId}');--%>
<%--alert("moduleName2:"+'${moduleName2}');--%>
<%--alert("moduleName3URL:"+'${moduleName3URL}');--%>
<%--alert("id:"+'${id}');--%>
	
</script>

</head>
<%--框架版本--%>
<%--  <frameset cols="250,*"  frameborder="NO" border="0" framespacing="0">--%>
<%--	有三级菜单用platformMaLeftMenu2.jsp页面，二级菜单用platformMaLeftMenu2.jsp页面并且修改数据库菜单【top的算一级菜单】--%>
<%--	<frame src="<%=basePath%>sys/platformMaLeftMenu2.jsp?parentId=${parentId}" name="leftFrame" id="leftFrame"  noresize="noresize" marginwidth="0" marginheight="0" frameborder="0" style="height:100%;width:100%" scrolling="no" />--%>
<%--	<frame src="" name="rightFrame" id="rightFrame"  noresize="noresize" marginwidth="0" marginheight="0" frameborder="0" scrolling="no" />--%>
<%--  </frameset>--%>
 <body>
 
<%--div版本--%>
<div id="count" style="width: 100%; height: 100%;">
	<div style="width:250px; height: 100%; float:left;">
		<%--有三级菜单用platformMaLeftMenu2.jsp页面，二级菜单用platformMaLeftMenu2.jsp页面并且修改数据库菜单【top的算一级菜单】--%>
		<iframe src="<%=basePath%>sys/platformMaLeftMenu2.jsp?parentId=${parentId}&moduleName2=${moduleName2}&moduleName3URL=${moduleName3URL}&id=${id}" id="leftFrame" name="leftFrame" width=100% style="border: 0px;" height="100%;" marginwidth="0" frameborder="0" scrolling="no" ></iframe>
	</div>
	<div id="rightdiv" style="height: 100%; float:left;">
		<iframe src="" id="rightFrame" name="rightFrame" width=100% style="border: 0px;" height="100%;" marginwidth="0" frameborder="0" scrolling="no" ></iframe>
	</div>
</div>
 	
 </body>
</html>
