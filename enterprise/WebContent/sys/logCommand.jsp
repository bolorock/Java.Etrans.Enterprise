<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@page import="org.apache.commons.lang.time.DateFormatUtils"%>
<%@ include file="/common/validateHead.jsp"%>
<%@taglib prefix="auth"  uri="/auth-tags"  %>
<%
			 Calendar calendar=Calendar.getInstance();
				TimeZone timeZoneChina = TimeZone.getTimeZone("Asia/Shanghai");// 获取中国的时区
				calendar.setTimeZone(timeZoneChina);
				calendar.setTimeZone(timeZoneChina);
				calendar.add(Calendar.DAY_OF_MONTH, 1);
%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
	<head>
		<title>指令日志</title>
		<script type="text/javascript" src="${basePath}js/sys/logCommand.js"></script>
		<script type="text/javascript" src="${basePath}js/datepicker/WdatePicker.js"></script>
		
		 <script type="text/javascript"	src="${basePath}js/sys/tree/vehicleMaintree.js"></script>
		<%--【自动补全】begin--%>
        <script type="text/javascript" src="${basePath}js/common/autoComplete.js"></script>
        <link rel="stylesheet" type="text/css" href="${basePath}css/autoComplete.css">
        <%--【自动补全】end--%>
	</head>

<%--onclickAll 【自动补全】--%>
<body onclick="onclickAll();">
	<%--【自动补全】begin--%>
    <div style="position:absolute; overflow:auto;overflow-x: hidden; scroll;height: 143px; width: 120px;" id="popup">
        <table  id="name_table" bgcolor="#FFFAFA" border="0" cellspacing="0" cellpadding="0"/>            
            <tbody id="name_table_body" style="font-size: 13px;"></tbody>
        </table>
    </div>
	<%--【自动补全】end--%> 
	
		<div style="width: 100%" id="cont_box">
		<div class="main">
			<div class="mon_cont">
			<div class="E_Tit">指令日志</div>
				<table border="0" cellspacing="0" cellpadding="0" class="que_tab" >
					<tr>
					
					    <td width="70" align="right">车牌号码:</td>
					    <%--【自动补全】车牌号码--%>
				 		<input id="vehicleIds" type="hidden" name="vehicleIds"/>
						<td width="150" align="left">
							<input id="REGISTRATIONNO" name="REGISTRATIONNO" type="text"
								class="mon_ser_text" style="width: 130px"
								maxlength="30"
								ondblclick="showVehicleTree('REGISTRATIONNO')"
								onkeyup="doAutoComplete('REGISTRATIONNO','name_table','popup','name_table_body')" 
								onchange="value=value.replace(/[^0-9a-zA-Z\u4e00-\u9fa5]/g,'')" 
				                onbeforepaste="clipboardData.setData('text',clipboardData.getData('text').replace(/[^0-9a-zA-Z\u4e00-\u9fa5]/g,''))"/>
						</td>
						<td width="70" align="right">开始时间:</td>
	                     <td width="170" align="left">
	                         <input type="text" id="sendTimeStart" class="mon_ser_text" name="sendTimeStart" onFocus="this.blur()" readonly="readonly" style="width: 130px" value="<%=DateFormatUtils.format(new Date(new Date().getYear(),new Date().getMonth(),new Date().getDate()), "yyyy-MM-dd HH:mm:ss") %>"/>
							<img src="Images/time.jpg" width="18" height="23" style="margin-left:2px;"
								onclick="WdatePicker({firstDayOfWeek:1,isShowWeek:true,el:document.getElementById('sendTimeStart'),dateFmt:'yyyy-MM-dd HH:mm:ss',maxDate:'#F{$dp.$D(\'sendTimeEnd\')}'})"/>
	                     </td>
						 <td width="60" align="right">结束时间:</td>
	                     <td width="170" align="left">
						<input type="text" id="sendTimeEnd" class="mon_ser_text" name="sendTimeEnd" onFocus="this.blur()" readonly="readonly" value="<%=DateFormatUtils.format(new Date(), "yyyy-MM-dd HH:mm:ss") %>" style="width: 130px"/>
						    <img src="Images/time.jpg" width="18" height="23" style="margin-left:2px;"
								onclick="WdatePicker({firstDayOfWeek:1,isShowWeek:true,el:document.getElementById('sendTimeEnd'),dateFmt:'yyyy-MM-dd HH:mm:ss',minDate:'#F{$dp.$D(\'sendTimeStart\')}'})"/>
					   </td>
						<td width="50">
							<a id="searchBtn" href="javascript:void(0)" class="ser_btn" style="color: white;">查询</a>
						</td>
						<td width="50">
						    <a id="exportBtn" href="javascript:void(0)" class="ser_btn" style="color: white;">导出</a>
						</td>
						<td>
						  <a href="javascript:void(0)" id="adSearchBtn" style="margin-left:8px;">高级搜索</a>
						</td>
					</tr>
				</table>
				
				<div id="adSearch" style="display: none;">
				<table border="0" cellspacing="0" cellpadding="0" >
					<tr>
					
					 <td width="70" align="right">指令:</td>
						<td width="150" align="left">
							<input type="text" id="PC_NAME" name="PC_NAME" class="mon_ser_text" style="width: 130px"/>
						</td>
						<td align="right" width="75">终端类型：</td>
						<td align="left">
							<select id="PTK_NAME" class="td_sel" style="width: 130px"></select>
						</td>
					
					</tr>
				</table>
			
				</div>
			
				<div id="editWindow"  class="wDiv" style="width:100%;display: block;border: 1px solid #d0d0d0;">
					<table id="logCommandList" style="display: none"></table>
				</div>
		    </div>
		    </div>
		  </div>
		  <div id="dialogs" class="hiddiv" style="display: none;padding:5px;top:10px;">
			<iframe src="" id="dialogFrame" name="dialogFrame" width="100%"  height="100%" frameborder="0" scrolling="auto"></iframe>
		</div>
	</body>
</html>
