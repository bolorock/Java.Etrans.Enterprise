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
		<script language="javascript" type="text/javascript" src="<%=basePath%>js/common/jsjava-2.0.js"></script>
		<script language="javascript" type="text/javascript" src="<%=basePath%>js/command/neibu/base2.js"></script>
		 <script type="text/javascript">
		
			function getParam()
			{
				return {
					"alarmWord":$('#alarmWord').val(),
					"longitude":$('#longitude').val(),
					"latitude":$('#latitude').val(),
					"positioningSpeed":$('#positioningSpeed').val()};
			}
		
		</script>
	</head>

	<body>
	
      <br/>
	<input type="hidden" id="commandCode" name="commandCode" value="GuoBiao_PF_Down_REQ_VehicleText"/>
	 <table width="100%" cellpadding="0" cellspacing="0" border="0">
			<tr>
			  <td width="100%" align="center">
				   <fieldset style="border-Color:#80CAEA;width: 98%;"><legend>实时上传定位信息:指令参数</legend>
				  		<table width="100%" cellpadding="0" cellspacing="1">
				            <tr>
				              <td width="3">&nbsp;</td>
				              <td width="181"><table width="100%" border="0" cellspacing="0" cellpadding="0">
				               <tr>
				                  <td nowrap="nowrap"><div align="right">报警字：</div></td>
				                  <td>
				                  		<select name="alarmWord" id="alarmWord" >
				                  		    <option value="01">超速报警</option>
											<option value="02">疲劳驾驶</option>
											<option value="04">预警</option>
										</select>
								  </td>
				                </tr>
				                <tr>
				                  <td nowrap="nowrap"><div align="right">经度：</div></td>
				                  <td><input type="text" size=30 id="longitude" name="longitude"/></td>
				                </tr>
				                <tr>
				                  <td nowrap="nowrap"><div align="right">纬度：</div></td>
				                  <td><input type="text" size=30 id="latitude" name="latitude"/></td>
				                </tr>
				                <tr>
				                  <td nowrap="nowrap"><div align="right">定位速度：</div></td>
				                  <td><input type="text" size=30 id="positioningSpeed" name="positioningSpeed"/>（KM/S）</td>
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