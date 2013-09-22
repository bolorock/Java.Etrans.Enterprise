<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ include file="/common/validateHead.jsp"%>
<%@taglib prefix="auth"  uri="/auth-tags"  %>
<%
	String vehicleId = request.getParameter("vehicleId");
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
	<head>

		<title>车辆终端参数</title>
		
		<script type="text/javascript">
			var vehicleId = '<%=vehicleId%>';
		</script>
		
		<script type="text/javascript" src="${basePath}js/sys/vehicle/terminalParams.js"></script>
		
	</head>

	<body>
		<table id="terminalParamList" style="display: none"></table>
	</body>
</html>
