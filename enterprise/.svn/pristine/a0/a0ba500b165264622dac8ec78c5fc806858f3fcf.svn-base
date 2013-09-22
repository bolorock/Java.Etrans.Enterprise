<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ include file="/common/validateHead.jsp"%>
<%@taglib prefix="auth"  uri="/auth-tags"  %>
<%
	String vehicleId = request.getParameter("vehicleId");
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
	<head>

		<title>车辆更换终端</title>
		
		<script type="text/javascript">
			var vehicleId = '<%=vehicleId%>';
		</script>
		
		<script type="text/javascript" src="${basePath}js/sys/vehicle/terminalChange.js"></script>
		
	</head>

	<body>
		<div id="cont_box" style="font-size:12px;">
			<table style="width:100%;font-size:12px;border:0;cellpadding:0;cellspacing:0;margin-top: 10px;">
				<tr>
				  	<td align="right">
				  		车牌号码：
				  	</td>
				  	<td align="left">
				  		<input type="hidden" id="vehicleId" value=""/>
				  		<input type="text" id="registrationNo" class="td_input" disabled="disabled">
				  	</td>
		    	</tr>
				<tr>
				  	<td align="right">
				  		终端通信号：
				  	</td>
				  	<td align="left">
				  		<select id="terminalId" class="td_sel"></select>
				  	</td>
		    	</tr>
		    	<tr><td colspan="2"><br></td></tr>
		    	<tr>
		    		<td colspan="2" align="center">
		    			<a id="submitBtn" href="javascript:void(0)" class="ser_btn">提交</a>
						<a id="cancelBtn" href="javascript:void(0)" class="ser_btn" style="margin-left: 10px;">取消</a>
		    		</td>
		    	</tr>
			</table>
		</div>
	</body>
</html>
