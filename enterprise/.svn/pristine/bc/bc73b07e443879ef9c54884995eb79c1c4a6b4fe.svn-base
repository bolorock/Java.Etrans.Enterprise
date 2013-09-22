<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ page import="com.etrans.bubiao.sys.Constants"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme() + "://"
		+ request.getServerName() + ":" + request.getServerPort()
		+ path + "/";
String vehicleId=request.getParameter("vehicleId");
%>
<html>
<head>
<base href="<%=basePath%>"></base>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta http-equiv="Pragma" content="no-cache">
<meta http-equiv="Cache-Control" content="no-cache">
<meta http-equiv="Expires" content="0">
<title>实时监控</title>
<link rel="stylesheet" type="text/css" href="<%=basePath%>css/body.css">
<script type="text/javascript" language="javascript" src="<%=Constants.MAP_BASE_URL%>/SE_JSAPI?&uid=<%=Constants.MAP_UID %>"></script>
<script type="text/javascript" src="<%=basePath%>js/jq/jquery-1.7.1.min.js"></script>
<script type="text/javascript" src="<%=basePath%>js/HashMap.js"></script>
<script type="text/javascript" src="<%=basePath%>js/monitorCenter/attention.js"></script>
<script type="text/javascript" src="<%=basePath%>js/monitorCenter/gisHelp.js"></script>
</head>
<body style="overflow-y: hidden;" onload="load('<%=vehicleId%>');">

<div id="cont_box">
<div class="main2">
 <div class="mon_cont2">
 
<%-- 地图--%>
<div id="map"></div>

</div></div></div>
</body>
</html>
