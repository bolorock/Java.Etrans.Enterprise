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
		<script type="text/javascript" src="<%=basePath%>js/jq/jquery.Query.js"></script>
		<script src="<%=basePath%>js/command/batch/special/511.js" type="text/javascript"></script>
		<script  type="text/javascript" src="<%=basePath%>js/datepicker/WdatePicker.js"></script>
	    <style type="text/css">
<!--
.STYLE1 {color: #003366}
-->
        </style>
</head>

	<body>
	 <table width="100%" cellpadding="0" cellspacing="0" border="0">
			<tr>
			  <td width="100%" align="center">
				  <fieldset style="border-Color:#80CAEA;width: 98%;"><legend>提问下发：指令参数</legend>
				  		<table width="100%" cellpadding="0" cellspacing="1">
				            <tr>
				              <td>&nbsp;</td>
				              <td width="269">&nbsp;</td>
				              <td width="30">&nbsp;</td>
				              <td width="16">&nbsp;</td>
				              <td>&nbsp;</td>
				              <td width="3" rowspan="3" background="imgs/commandbg.gif">.</td>
				              <td>&nbsp;</td>
				              <td colspan="2">&nbsp;</td>
				            </tr>
				            <tr>
				              <td width="3">&nbsp;</td>
				              <td colspan="3" valign="top"><table width="100%" border="0" cellspacing="0" cellpadding="0">
				                
				                <tr>
                                  <td width="9%" height="25" nowrap="nowrap"><div align="right">是否紧急：</div></td>
				                   <td valign="top" nowrap="nowrap"><select name="params1" id="params1">
				                   		<option value="0">否</option>
                                        <option value="1">是</option>
                                  </select></td>
                                     
				           <td height="25" nowrap="nowrap"><div align="right">是否终端TTS播读：</div></td>
				                  <td valign="top" nowrap="nowrap"><select name="params2" id="params2">
				                  <option value="0">否</option>
                                      <option value="1">是</option>
                                      
                                  </select></td>
			                    </tr>
				              
				                <tr>
				                  <td height="25" nowrap="nowrap"><div align="right">是否广告屏显示：</div></td>
				                  <td valign="top" nowrap="nowrap"><select name="params3" id="params3">
				                    <option value="0">否</option>
				                    <option value="1">是</option>
				                    
                                                                    </select></td>
                                  <td height="25" nowrap="nowrap"><div align="right">问题：</div></td>
				                   <td colspan="1" valign="middle" nowrap="nowrap">
                                      <input name="params4" 
											   id="params4" 
											   type="text" 
											   size="40"
											   maxlength="255"
											   value=""
											  /></td>
				                </tr>
				              </table>
				              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
				              <td width="16">&nbsp;</td>
<%--				              <td width="184"><a href="javascript:void(0)" onClick="sendMessage();"><img src="imgs/command.gif"  border="0"></a><a  href="javascript:void(0)" class="ser_btn" onClick="parent.hideSpecial();"><img src="imgs/cancel.gif"  border="0"></a><div id="result"></div></td>--%>
<%--				              <td width="685"><div id="back" class="hiddiv" style="display: none;"><img alt="正在发送指令" src="imgs/load.gif">正在发送指令......</div></td>--%>
				              <td width="685">&nbsp;</td>
				              
				           </tr>
							  <tr>
				              <td colspan="11" align="left">答案内容总数：<input id="eventCount" size="5"/>&nbsp;&nbsp;<input id="okButon" type="button" value="确定" onclick="addEvent()"/></td>
				            </tr>
		          		</table>
				  </fieldset>
			  </td>
			</tr>
			<%--按钮--%>
			<tr>
				<td valign="top"><a href="javascript:void(0)" onClick="sendMessage();"><img src="imgs/command.gif"  border="0"></a><a  href="javascript:void(0)" class="ser_btn" onClick="parent.hideSpecial();"><img src="imgs/cancel.gif"  border="0"></a></td>
				<td width="685"><div id="back" class="hiddiv" style="display: none;"><img alt="正在发送指令" src="imgs/load.gif">正在发送指令......</div></td>				
			</tr>
			<tr>
				<td width="685"><div   id="result"></div></td>
			</tr>
			<tr>
				<td width="685"><div  id="result2"></div></td>
			</tr>
		</table>
		 <table width="100%" border="0" cellspacing="0" cellpadding="0" background="#EBF2FA">
          <tr background="#EBF2FA">
                    <td style="border-top:1px solid #1FFFF;">
                     <table id="list"  class="form">
			    <thead>
				<tr>
				    <th>答案内容</th>
				</tr>
			</thead>
			</table>
                    </td>
                  </tr>
         </table>
	</body>
</html>