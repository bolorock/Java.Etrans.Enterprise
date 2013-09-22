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

<link href="<%=basePath%>css/body.css" rel="stylesheet" type="text/css" />

<script type='text/javascript' src='https://www.google.com/jsapi'></script>
<script type="text/javascript" src="<%=basePath%>js/query/homePageIframe.js"></script>

</head>
 <body style="background-color: #fff">
    <div class="cont_box">
    	<table id="home_tab">
   		 	<tr><td align="center"><div id='chart_div_left'></div></td><td align="center"><div id='chart_div_right'></div></td></tr>
    		<tr><td align="center" id="home_platForm">0/0</td><td align="center" id="home_vehicle">0/0</td></tr>
   			<tr><td align="center">在线平台数/接入平台数&nbsp;&nbsp;&nbsp;&nbsp;</td><td align="center">&nbsp;&nbsp;&nbsp;&nbsp;在线车辆总数/车辆入网总数</td></tr>
   		</table>
	</div>
 </body>
</html>
