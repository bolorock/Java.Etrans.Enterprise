<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ include file="/common/validateHead.jsp"%>
<html>
	<head>
	<base href="<%=basePath%>"></base>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		<title>指令发送</title>
		<link href="<%=basePath%>css/command.css" type="text/css" rel="stylesheet" />
		<script language="javascript" type="text/javascript" src="<%=basePath%>js/common/jsjava-2.0.js"></script>
		<script language="javascript" type="text/javascript" src="<%=basePath%>js/command/neibu/base2.js"></script>
		<script type="text/javascript" src="<%=basePath%>js/jq/jquery.Query.js"></script>
		 <script type="text/javascript">
			function getParam()
			{
				return {"electronicBillContent":$('#electronicBillContent').val()};
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
				   <fieldset style="border-Color:#80CAEA;width: 98%;"><legend>主动上报车辆电子运单:指令参数</legend>
				  		<table width="100%" cellpadding="0" cellspacing="1">
				            <tr>
				              <td width="3">&nbsp;</td>
				              <td width="181">
				              <table width="100%" border="0" cellspacing="0" cellpadding="0">
				               <tr>
				                  <td nowrap="nowrap"><div align="right">电子运单内容：</div></td>
				                  <td>
				                  		<textarea rows="5" cols="60" id="electronicBillContent" name="electronicBillContent"></textarea>
								 </td>
				                </tr>
				       	 	  </table>
				</td>
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
		 <td valign="top"><a href="javascript:void(0)" onClick="parent.sendMessage2(getParam());">&nbsp;&nbsp;&nbsp;<img src="imgs/command.gif"  border="0"></a><a  href="javascript:void(0)" class="ser_btn" onClick="parent.hide();"><img src="imgs/cancel.gif"  border="0"></a>
	   </td>
		</table>
	</body>
</html>