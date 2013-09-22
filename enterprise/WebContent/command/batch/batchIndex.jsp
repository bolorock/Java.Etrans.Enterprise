<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@page import="com.etrans.common.util.web.IpUtils"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
			
			String ipType="";//ip类型
			ipType = (String)request.getSession().getAttribute(IpUtils.LOGIN_IP_TYPE);
%>

<html>
<head>
<base href="<%=basePath%>"></base>
<title>车辆监控</title>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta http-equiv="pragma" content="no-cache">
<meta http-equiv="cache-control" content="no-cache">
<meta http-equiv="expires" content="0">
<style type="text/css">
*{margin:0px;}
</style>
</head>
<%--左右分--%>
<frameset cols="285,10,*"  frameborder="NO" border="0" framespacing="0" id="frame">
	<frame src="<%=basePath%>command/batch/batchVehicleLeft.jsp" name="leftFrame" id="leftFrame"  noresize="noresize" marginwidth="0" marginheight="0" frameborder="0" style="height:100%;width:100%" scrolling="no" />
	<frame name="Dycenter" src="<%=basePath%>monitorCenter/MidMenu.jsp"  scrolling="no" border="0" frameborder="NO"  noresize>
	<frame src="<%=basePath%>command/batch/batchCommand.jsp" name="mapFrame" id="mapFrame"  noresize="noresize" marginwidth="0" marginheight="0" frameborder="0" scrolling="no" />  	
  </frameset>
<body>
</body>
</html>
