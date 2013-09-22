<%@page contentType="text/html; charset=utf-8" %>
<%@ include file="/common/validateHead.jsp"%>
<%@ page import="com.etrans.bubiao.sys.Constants"%>
<%@taglib prefix="s" uri="/struts-tags" %>



<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<meta http-equiv="Content-Type" content="text/css; charset=UTF-8" />
	<meta http-equiv="Content-Type" content="text/javascript; charset=UTF-8" />

<title>多时区多时段查询</title>

  <style type="text/css">
		v\:* { behavior:url(#default#VML); }
		#maparea{width: 100%;height: 300px}
		#map{height: 270px}	
		#bar a{text-decoration: none}
				
  </style>   
   
    <script type="text/javascript" language="javascript" src="<%=Constants.MAP_BASE_URL%>/SE_JSAPI?&uid=<%=Constants.MAP_UID %>"></script>
  	<script type="text/javascript" src="${basePath}/js/HashMap.js"></script>
  	<script type="text/javascript" src="${basePath}js/jq/jquery-1.7.1.min.js"></script>
    <script type="text/javascript" src="${basePath}/js/sys/timeArea/timeAreaSE.js"></script>



</head>
<body  style="overflow-x: hidden;" onLoad="loadMap()" >

<div style="width: 100%" id="cont_box" >
	<div class="main">
        <div class="mon_cont">
        	<div class="E_Tit">定时定区域查车</div> 
        	<div id=maparea>
				<div id=bar style="line-height: 28px;text-decoration: none; ">
					<a href="javascript:void(0)" onclick="rectLine()" style="margin-left: 20px">
					 <img alt="矩形查车" src="<%=basePath%>imgs/areaFindVehicle.jpg"></a> 
				</div>
				<div id=map></div>
			 </div>
			 <iframe src="<%=basePath%>sys/timeArea/timeAreaBackSE.jsp" id="timeAreaFrame" name="timeAreaFrame" width="100%"  style="max-height:115px; height:115px; overflow-y: scroll;" frameborder="0" scrolling="yes"  scrolling="auto"></iframe>
		</div>
  </div>
</div>
</body>
</html>

