<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@page import="org.apache.commons.lang.time.DateFormatUtils"%>
<%@ include file="/common/validateHead.jsp"%>
<%@taglib prefix="auth" uri="/auth-tags"%>
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
		<title>历史报警督办报表</title>
		<script type="text/javascript" src="${basePath}js/sys/historyAlarmHandling.js"></script>
		<script type="text/javascript" src="${basePath}js/datepicker/WdatePicker.js"></script>
		<script type="text/javascript" src="<%=basePath%>js/common/StringUtil.js"></script>
		
		 <script type="text/javascript"	src="${basePath}js/sys/tree/vehicleMaintree.js"></script>
		<%--【自动补全】begin--%>
        <script type="text/javascript" src="${basePath}js/common/autoComplete.js"></script>
        <link rel="stylesheet" type="text/css" href="${basePath}css/autoComplete.css">
        <%--【自动补全】end--%>
	</head>

<%--onclickAll 【自动补全】--%>
<body onclick="onclickAll();">
	<%--【自动补全】begin--%>
    <div style="position:absolute; overflow:auto; scroll;height: 143px; width: 120px;" id="popup">
        <table  id="name_table" bgcolor="#FFFAFA" border="0" cellspacing="0" cellpadding="0"/>            
            <tbody id="name_table_body" style="font-size: 13px;"></tbody>
        </table>
    </div>
	<%--【自动补全】end--%> 
		<div style="width: 100%" id="cont_box">
			<div class="main">
			<div class="mon_cont">
					<div class="E_Tit">
						历史报警督办
					</div>
					<table border="0" cellspacing="0" cellpadding="0" class="que_tab">
						<tr>
							<td width="80" align="right">
								车牌号码:
							</td>
							<td width="150" align="left">
								<%--【自动补全】车牌号码--%>
								<input id="vehicleIds" type="hidden" name="vehicleIds"/>
								<input id="RegistrationNopram" name="RegistrationNopram" type="text"
									class="mon_ser_text"  style="width:120px"  
									ondblclick="showVehicleTree('RegistrationNopram')"
									onkeyup="doAutoComplete('RegistrationNopram','name_table','popup','name_table_body')" 
									onchange="value=value.replace(/[^0-9a-zA-Z\u4e00-\u9fa5]/g,'')" 
				                    onbeforepaste="clipboardData.setData('text',clipboardData.getData('text').replace(/[^0-9a-zA-Z\u4e00-\u9fa5]/g,''))" />
							</td>
						 <td width="70" align="right">开始时间：</td>
	                     <td width="170" align="left">
	                         <input type="text" id="OverSeeingDateStart"  name="OverSeeingDateStart" onFocus="this.blur()" style="width:130px" readonly="readonly" class="mon_ser_text" value="<%=DateFormatUtils.format(new Date(new Date().getYear(),new Date().getMonth(),new Date().getDate()), "yyyy-MM-dd HH:mm:ss") %>"/>
							<img src="Images/time.jpg" width="20" height="23" style="margin-left:2px;"
									onclick="WdatePicker({firstDayOfWeek:1,isShowWeek:true,el:document.getElementById('OverSeeingDateStart'),dateFmt:'yyyy-MM-dd HH:mm:ss',maxDate:'#F{$dp.$D(\'OverSeeingDateEnd\')}'})"/>
	                     </td>
						 <td width="72" align="right">结束时间：</td>
	                     <td width="170" align="left">
						<input type="text" id="OverSeeingDateEnd"  name="OverSeeingDateEnd" onFocus="this.blur()" style="width:130px" class="mon_ser_text"  readonly="readonly" value="<%=DateFormatUtils.format(new Date(), "yyyy-MM-dd HH:mm:ss") %>"/>
							   <img src="Images/time.jpg" width="20" height="23" style="margin-left:2px;"
									onclick="WdatePicker({firstDayOfWeek:1,isShowWeek:true,el:document.getElementById('OverSeeingDateEnd'),dateFmt:'yyyy-MM-dd HH:mm:ss',minDate:'#F{$dp.$D(\'OverSeeingDateStart\')}'})"/>
					   </td>

						<td width="200">
							<a id="searchBtn" href="javascript:void(0)" class="ser_btn"
								style="color: white;">查询</a>
					
							<a href="javascript:void(0)" id="exportBtn" class="ser_btn"
								style="color: white;">导出</a>
						
						  <a href="javascript:void(0)" id="adSearchBtn" style="margin-left:8px;">高级搜索</a>
						</td>
						</tr>
					</table>
					<div id="adSearch" style="display: none;">
					
				<table border="0" cellspacing="0" cellpadding="0" >
					<tr>
						<td align="right" width="80">报警类型:</td>
						<td width="150" align="left">
							<select id="alarmTypepram" class="ser_sel" style="width:120px"></select>
						</td>
						<!--  
						<td align="right" width="70">督办方式：</td>
						<td width="170" align="left">
							<select id="OverSeeingTypepram" class="ser_sel" style="width:130px"></select>
						</td>
						-->
					</tr>
				</table>
			
				</div>
					<div id="editWindow" class="wDiv"
						style="width: 100%; display: block; border: 1px solid #d0d0d0;">
						<table id="historyAlarmHandlingList" style="display: none"></table>
					</div>
				</div>
				</div>
			</div>
			<div id="dialogs" class="hiddiv" style="display: none;padding:5px;top:10px;">
			<iframe src="" id="dialogFrame" name="dialogFrame" width="100%"  height="100%" frameborder="0" scrolling="auto"></iframe>
		</div>
	</body>
</html>

