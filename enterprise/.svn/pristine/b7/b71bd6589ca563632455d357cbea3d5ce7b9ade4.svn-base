<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@page import="org.apache.commons.lang.time.DateFormatUtils"%>
<%@page import="java.util.*"%>
<%@ include file="/common/validateHead.jsp"%>
<%@taglib prefix="auth"  uri="/auth-tags"  %>
<%
			 Calendar calendar=Calendar.getInstance();
				TimeZone timeZoneChina = TimeZone.getTimeZone("Asia/Shanghai");// 获取中国的时区
				calendar.setTimeZone(timeZoneChina);
				calendar.setTimeZone(timeZoneChina);
				calendar.add(Calendar.DAY_OF_MONTH, 1);
%>
<!--[if IE 8]>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<![endif]--> 
<html>
	<head>
		<title>历史报警查询</title>
		<link rel="stylesheet" type="text/css" href="<%=basePath%>css/body.css">
		<script type="text/javascript" src="<%=basePath%>js/datepicker/WdatePicker.js"></script>
		<script type="text/javascript" src="<%=basePath%>js/query/alarmMsgInfo/alarmMsgInfo.js"></script>
		<script type="text/javascript" src="<%=basePath%>js/common/StringUtil.js"></script>
	    <script type="text/javascript"	src="${basePath}js/sys/tree/tree.js"></script>	
	    
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
	
		<div style="width: 100%;" id="cont_box">
			<div class="main">
        <div class="mon_cont">
			<div class="E_Tit">历史报警查询 </div>
       <table border="0" cellspacing="0" cellpadding="0" class="que_tab">
				<tr>
				 <td  width="80" align="right">车牌号码：</td>
				 	<td width="120" align="left">
				 		<%--【自动补全】车牌号码--%>
				 		<input id="vehicleIds" type="hidden" name="vehicleIds"/>
						<input type="text" id="registrationNO" name="registrationNO" class="mon_ser_text"
						       onkeyup="doAutoComplete('registrationNO','name_table','popup','name_table_body')" 
						       style="width:120px"
						       ondblclick="showVehicleTree('registrationNO')"
						       onchange="value=value.replace(/[^0-9a-zA-Z\u4e00-\u9fa5]/g,'')" 
							   onbeforepaste="clipboardData.setData('text',clipboardData.getData('text').replace(/[^0-9a-zA-Z\u4e00-\u9fa5]/g,''))"/>
					</td>
			        <td width="80" align="right">开始时间：</td>
	                 <td width="170" align="left">
	                 <input id="startDate" type="text" class="mon_ser_text" style="width:130px" onFocus="this.blur()" readonly="readonly" value="<%=DateFormatUtils.format(new Date(new Date().getYear(),new Date().getMonth(),new Date().getDate()), "yyyy-MM-dd HH:mm:ss") %>"/>
	                 <img src="Images/time.jpg" width="20" height="23" style="margin-left:2px;"
								onClick="WdatePicker({firstDayOfWeek:1,isShowWeek:true,el:document.getElementById('startDate'),dateFmt:'yyyy-MM-dd HH:mm:ss',maxDate:'%y-%M-%d'})"/>
	                 
	                 </td>
	                <td width="80" align="right">结束时间：</td>
	                <td width="170" align="left">
	                <input type="text" id="endDate"  name="endDate" onFocus="this.blur()" style="width:130px" class="mon_ser_text"  readonly="readonly" value="<%=DateFormatUtils.format(new Date(), "yyyy-MM-dd HH:mm:ss") %>"/>
							   <img src="Images/time.jpg" width="20" height="23" style="margin-left:2px;"
									onclick="WdatePicker({firstDayOfWeek:1,isShowWeek:true,el:document.getElementById('endDate'),dateFmt:'yyyy-MM-dd HH:mm:ss',minDate:'#F{$dp.$D(\'startDate\')}'})"/>
	                </td>
					<td width="200" align="right">
				    <a id="searchBtn" href="javascript:void(0)" class="ser_btn" style="color: white;">查询</a>
						<a id="exportBtn" href="javascript:void(0)" class="ser_btn" style="color: white;">导出</a>
							<a href="javascript:void(0)" id="adSearchBtn" style="margin-left:8px;">高级搜索</a>
				    </td>
				
				</tr>
				</table>
					<div id="adSearch" style="display: none;">
					 <table border="0" cellspacing="0" cellpadding="0">
					<tr>
					<td  width="80" align="right">所属单位：</td>
				 	<td width="120" align="left">
				 	<input type="text" 
				 	       id="workUnitNameParam" ondblclick="showWorkUnitTree()"
				 	       name="workunitName" class="mon_ser_text"  style="width:120px"
				 	       onchange="value=value.replace(/[^0-9a-zA-Z\u4e00-\u9fa5]/g,'')" 
						   onbeforepaste="clipboardData.setData('text',clipboardData.getData('text').replace(/[^0-9a-zA-Z\u4e00-\u9fa5]/g,''))" />
				    </td>
				<!--&nbsp;&nbsp;&nbsp;&nbsp;-->
				  <td  width="80" align="right">报警类型：</td>
				 <td width="170" align="left">
				 <select id="alarmTypeSelect" class="ser_sel" style="width:130px">
				  </select>
				 </td>
				 <td  width="80" align="right">报警来源：</td>
				 <td width="170" align="left">
				 <select id="sourceSelect" class="ser_sel" style="width:130px">
				  </select>
				 </td>	
			    <td width="80" align="right">报警处理：</td>   
				<td width="200" align="left">&nbsp;
						        <input type="radio" name="isDoWith" value="-1" checked="checked"> 全部
	        					<input type="radio" name="isDoWith" id="handle" value="1" > 已处理
	        					<input type="radio" name="isDoWith" value="0"> 未处理
					</td>
				</tr>
			</table>
			</div>
			<div id="editWindow" class="wDiv" style="width:100%;display: none;border: 1px solid #d0d0d0;">
			<form id="addForm" method="post" action="">
				<div class="td_title">报警处理</div>
				<table width="100%">
					<tr>
						<td align="right">处警结果 :</td>
						<td align="left">
						<select id="content" style="width:200px">
						  <option value="0">处理中</option>
						  <option value="1">已处理完毕</option>
						  <option value="2">不做处理</option>
						  <option value="3">将来处理</option>
						</select>
						</td>
						<td align="right">处警内容 :</td>
						<td align="left">
						<textarea id="handleConent" style="width:200px"></textarea>
						</td>
						<td rowspan="3" align="left" width="200">
							<a id="submitBtn" href="javascript:void(0)" class="ser_btn" style="margin-bottom: 3px;">提交</a>
							<br>
							<a id="cancelBtn" href="javascript:void(0)" class="ser_btn">取消</a>
						</td>
					</tr>
				</table>
					</form>
			</div>
					<div class="sys_ctrAlarm" style="margin-right: 1px;">
            	<ul>

                <auth:authorize operation="handleAlarm">
                  <li><a id="btnHandleAlarm" href="javascript:void(0)">处理报警</a></li>
                  </auth:authorize>
                </ul>
               <span id="msgDel"></span>
            </div>
			<table id="alarmMsgInfoList" style="display: none"></table>
		</div>
  </div>
  </div>
  
  <div id="dialogs" class="hiddiv" style="display: none;padding:5px;top:10px;">
			<iframe src="" id="dialogFrame" name="dialogFrame" width="100%"  height="100%" frameborder="0" scrolling="auto"></iframe>
		</div>
		
	</body>
</html>
