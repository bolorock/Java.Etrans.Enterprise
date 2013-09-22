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
				return {
					"alarmType":$('#alarmType').val(),
					"desc":$('#desc').val()
					};
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
				   <fieldset style="border-Color:#80CAEA;width: 98%;"><legend>上报报警信息:指令参数</legend>
				  		<table width="100%" cellpadding="0" cellspacing="1">
				            <tr>
				              <td width="3">&nbsp;</td>
				              <td width="181">
				              <table width="100%" border="0" cellspacing="0" cellpadding="0">
				               <tr>
				                  <td nowrap="nowrap"><div align="right">报警类型：</div></td>
				                  <td>
									<select id="alarmType" name="alarmType">
										<option value="0001">超速报警</option>
										<option value="0002">疲劳驾驶报警</option>
										<option value="0003">紧急报警</option>
										<option value="0004">进入指定区域报警</option>
										<option value="0005">离开指定区域报警</option>
										<option value="0006">路段堵塞报警</option>
										<option value="0007">危险路段报警</option>
										<option value="0008">越界报警</option>
										<option value="0009">盗警</option>
										<option value="0010">劫警</option>
										<option value="0011">偏离路线报警</option>
										<option value="0012">车辆移动报警</option>
										<option value="0013">超时驾驶报警</option>
										<option value="0014">其他报警</option>
									</select>						
	 							 </td>
				                </tr>
				                 <tr>
				                  <td nowrap="nowrap"><div align="right">信息描述：</div></td>
				                  <td>
									<input type="text" id="desc" name="desc" size="100" />
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