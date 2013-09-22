<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme() + "://"
		+ request.getServerName() + ":" + request.getServerPort()
		+ path + "/";
%>
<html>
	<head>
	<base href="<%=basePath%>"></base>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		<title>指令发送</title>
		<link href="<%=basePath%>css/command.css" type="text/css" rel="stylesheet" />
	        <script type="text/javascript" src="<%=basePath%>js/jq/jquery-1.7.1.min.js"></script>
		 <script type="text/javascript">
		
			function getParam()
			{
				return {"closedReason":$("#closedReason").val()};
			}
		
		</script>
	</head>

	<body>
	
      <br/>
	<input type="hidden" id="commandCode" name="commandCode" value="GuoBiao_PF_Down_REQ_VehicleText"/>
	 <table width="100%" cellpadding="0" cellspacing="0" border="0">
			<tr><td height="20">&nbsp;</td></tr>
			<tr>
			  <td width="100%" align="center">
				   <fieldset style="border-Color:#80CAEA;width: 98%;"><legend>主动关闭主从链路通知:指令参数</legend>
				  		<table width="100%" cellpadding="0" cellspacing="1">
				            <tr>
				              <td width="3">&nbsp;</td>
				              <td width="181"><table width="100%" border="0" cellspacing="0" cellpadding="0">
				              
				               <tr>
				                  <td nowrap="nowrap"><div align="right">关闭原因：</div></td>
				                  <td>
				                  		<select id="closedReason" name="closedReason">
				                  			<option value="0">网关重启</option>
				                  			<option value="1">其他原因</option>
				                  		</select>
				                  </td>
				                </tr>
				              </table></td>
				            </tr> 
		          		</table>
				  </fieldset>
			  </td>
			</tr>
				<tr>
	<td>
	<div id="tip"></div>
	</td>
		</tr>
		 <tr>
		 <td valign="top"><a href="javascript:void(0)" onClick="parent.sendMessage2(getParam());">&nbsp;&nbsp;&nbsp;<img src="imgs/command.gif"  border="0"></a>
	   </td>
		</table>
	</body>
</html>