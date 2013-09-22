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
  <title>上级信息</title>
    <base href="<%=basePath%>"></base>
	<link href="<%=basePath%>css/command.css" type="text/css" rel="stylesheet" />
  <script type="text/javascript" src="<%=basePath%>js/jq/jquery-1.7.1.min.js"></script>
   <script type="text/javascript" src="<%=basePath%>js/datepicker/WdatePicker.js"></script>
   	<script language="javascript" type="text/javascript" src="<%=basePath%>js/common/StringUtil.js"></script>
	<script type="text/javascript" src="<%=basePath%>js/monitorCenter/higherLevelMessage.js"></script>
		<script language="javascript" type="text/javascript" src="<%=basePath%>js/common/jsjava-2.0.js"></script>
	
	<style type="text/css">
		.input{width: 150px; height: 22px;font-size: 12px; color: #000;line-height: 22px}
	</style>
  </head>
  
  <body style="margin-left: 10px">
   <div id="reDubanDialog" style="display: none;padding:5px;top:10px;">
   
    <table cellpadding="0" cellspacing="4" class="form" >
   		<tr class="odd">
   			<td>
   			 <div id="txtDuban" style="display: none;font-size: 14px"></div>
   			</td>
   		</tr>	
   		<tr class="even">
   			<td>
   			报警处理结果
   				<select id="paramDuban" style="width:300px">
   					<option value="0">处理中</option>
					<option value="1" >已处理完毕</option>
					<option value="2" >不作处理</option>
					<option value="3" >将来处理</option>
   				</select>
   				
   			</td>
   		</tr>
   		 <tr class="even">
		 <td ><label id="dubanTip"></label><a href="javascript:void(0)" onClick="duban();"><img src="imgs/command.gif"  border="0"></a><a  href="javascript:void(0)" class="ser_btn" onClick="hideDiaoLog('reDubanDialog');"><img src="imgs/cancel.gif"  border="0"></a>
	   </td>
		 </tr>
   	</table>
   
   
   </div>
   
   
   
   <div id="reChagangDialog" style="display: none;padding:5px;top:10px;">
   
    <table cellpadding="0" cellspacing="4" class="form" >
   		<tr class="odd">
   			<td>
   			 <div id="txtchagang" style="display:none ;font-size: 14px"></div>
   			</td>
   		</tr>	
   		<tr class="even">
   			<td>
   			应答信息
   					<textarea id="chagangnr" rows="" cols="" style="width: 100%;height: 40px">
   					</textarea>
   				
   			</td>
   		</tr>
   		
   		<tr class="even">
   			 <td valign="top"><label id="chagangTip"></label><a href="javascript:void(0)" onClick="chagang();"><img src="imgs/command.gif"  border="0"></a><a  href="javascript:void(0)" class="ser_btn" onClick="hideDiaoLog('reChagangDialog');"><img src="imgs/cancel.gif"  border="0"></a>
   			</td>
   		</tr>	
   	</table>
   
   
   </div>
  
		       <table cellpadding="0" cellspacing="0" class="form" id="alarmList">
		       		<tr>
			       		 <th nowrap="nowrap">业务类型</th>
			       		 <th>时间</th>
			       		 <th nowrap="nowrap">业务描述</th>
			       		 <th nowrap="nowrap">操作</th></tr>
		       		
		       </table>
   
  
  
   
  </body>
</html>
