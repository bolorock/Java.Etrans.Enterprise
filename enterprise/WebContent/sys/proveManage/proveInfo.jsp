<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@page import="org.apache.commons.lang.time.DateFormatUtils"%>
<%@ include file="/common/validateHead.jsp"%>
<%@taglib prefix="auth"  uri="/auth-tags"  %>
<style>
<!--
<%--		background-color:#ace;--%>
	a:hover {color:blue;text-decoration:underline; }
	.td_inputcss{width:180px; border:1px solid #CCC; height:22px; line-height: 22px;}
	.td_selcss{width:180px; border:1px solid #CCC; height:22px; line-height: 22px;}
-->
</style>

							<%--证件信息表管理--%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>

<%
	String proveBackID = "";//证件过期数据id
	if(request.getParameter("proveBackID")!=null){
		proveBackID=request.getParameter("proveBackID");
	}
	request.setAttribute("proveBackID",proveBackID);
%>
<script type="text/javascript">

	var proveBackID = '${proveBackID}'; //证件过期数据id
	
</script>


	<head>
		<title>道路运输车辆卫星定位监管平台-广州亿程交通信息有限公司</title>
		<script type="text/javascript" src="${basePath}js/sys/proveManage/proveInfo.js"></script>
		<script type="text/javascript" src="${basePath}js/datepicker/WdatePicker.js"></script>
		<script type="text/javascript" src="${basePath}js/common/dateutil.js"></script>
		<script type="text/javascript"	src="${basePath}js/sys/tree/vehicleMaintree.js"></script>
		<script type="text/javascript"	src="${basePath}js/sys/tree/vehicleTree.js"></script>
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
        	<div class="E_Tit">证件信息管理</div>
            <table border="0" cellspacing="0" cellpadding="0" class="que_tab">
				<tr>
					<%------车牌------%>
					<td width="80" align="right">车牌号码：</td>
					<td width="100" align="left">
					<%--【自动补全】车牌号码--%>
					<input id="vehicleIds" type="hidden" name="vehicleIds"/>
					<input id="registrationNo" name="registrationNo" type="text"
					       class="mon_ser_text" style="width: 130;"
							maxlength="50"
<%--							ondblclick="showVehicleTree('registrationNo')"--%>
							onkeyup="doAutoComplete('registrationNo','name_table','popup','name_table_body')" 
			               />
				    </td>
				    <%------证件名称------%>
				    <td width="80" align="right">证件名称：</td>
				    <td width="100" align="left">
				    	<select id="proveName" class="mon_ser_text" onchange="javascript:toSearch();" style="width: 130;">
						</select>
				    </td>
					<%----办证时间begin--%>
					<td width="90" align="right">办证开始时间：</td>
	                 <td width="170" align="left">
	                 <input id="startTime" name="startTime" type="text" class="mon_ser_text" style="width:130px" onFocus="this.blur()" readonly="readonly" value="<%=DateFormatUtils.format(new Date(new Date().getYear(),new Date().getMonth(),new Date().getDate()), "yyyy-MM-dd HH:mm:ss") %>"/>
	                 <img src="Images/time.jpg" width="20" height="23" style="margin-left:2px;"
								onClick="WdatePicker({firstDayOfWeek:1,isShowWeek:true,el:document.getElementById('startTime'),dateFmt:'yyyy-MM-dd HH:mm:ss',maxDate:'%y-%M-%d'})"/>
	                 
	                 </td>
	                <td width="90" align="right">办证结束时间：</td>
	                <td width="170" align="left">
	                <input type="text" id="endTime" name="endTime" onFocus="this.blur()" style="width:130px" class="mon_ser_text"  readonly="readonly" value="<%=DateFormatUtils.format(new Date(), "yyyy-MM-dd HH:mm:ss") %>"/>
							   <img src="Images/time.jpg" width="20" height="23" style="margin-left:2px;"
									onclick="WdatePicker({firstDayOfWeek:1,isShowWeek:true,el:document.getElementById('endTime'),dateFmt:'yyyy-MM-dd HH:mm:ss',minDate:'#F{$dp.$D(\'startTime\')}'})"/>
	                </td>
	                <%----办证时间end--%>
					<%------查询------%>
					<td width="150" align="center">
						<a id="searchBtn" href="javascript:void(0)" class="ser_btn" style="color: white;">查询</a>
						<%--权限控制--%>
						<auth:authorize operation="addProveInfo">
						<a id="createBtn" href="javascript:void(0)" class="ser_btn" style="color: white;">新增</a>
						</auth:authorize>
					</td>
				</tr>
			</table>

			<!-- 新增,修改 --> 
			<div id="editWindow" class="wDiv" style="width:100%;display: none;border: 1px solid #d0d0d0;height:270px;overflow-y:auto;">
				<div id="vehicleTitle" class="td_title">证件信息新增</div>
				<%--隐藏域--%>
				<input type="hidden" name="id" id="id"/>
				<table width="100%" align="center">
				<%--第一行--%>
					<tr>
						<td  width="150" align="right"><span class="xin_red">*</span>车牌号码：</td>
						<td  width="160" align="left">
								<input type="text" id="registrationVhicleNo"  name="registrationVhicleNo"  
										class="td_inputcss"
								      	formCheck="true" required="true"
								      	onclick="showRegistrationVhicleTree1();"  
								      	readonly="readonly" requiredError="不能为空！"/> 
	                      			<input type="hidden" name="registrationVehicleId" id="registrationVehicleId" />
	                      			<span id="registrationVhicleNospan" class="errorMsg" style="display: none"></span>
						</td>
						<td  width="150" align="right"><span class="xin_red">*</span>证件名称：</td>
						<td  width="160" align="left">
							<select id="proveNameID" name="proveNameID" class="td_selcss"
							formCheck="true"
							required="true" 
							requiredError="必选项!"
							noselect="true" 
							></select>
							<span id="proveNameIDspan" class="errorMsg" style="display: none"></span>
						</td>
						<td  rowspan="6" width="200" align="center">
							<span id="vehiclesspan" class="errorMsg" style="display: none;vertical-align: top;"></span>
							<br/>
							<br/>
							<br/>
							<a id="submitBtn" href="javascript:void(0)" class="ser_btn" style="margin-bottom: 3px;">提交</a>
							<br> 
							<a id="cancelBtn" href="javascript:void(0)" class="ser_btn">取消</a>
						</td>
					</tr>
					<%--第二行--%>
					<tr>
					<td  width="150" align="right"><span class="xin_red">*</span>办证时间：</td>
						<td  width="200" align="left">
							<input id="startTime_value" name="startTime_value" type="text" 
								style="border:1px solid #CCC; height:22px; line-height: 22px;width:155px"
								formCheck="true" readonly="readonly" 
								required="true" requiredError="请选择办证时间！" 
								value="<%=DateFormatUtils.format(new Date(new Date().getYear(),new Date().getMonth(),new Date().getDate()), "yyyy-MM-dd HH:mm:ss") %>"/>
	                 		<img src="Images/time.jpg" width="20" height="23" style="margin-left:2px;"
								onClick="WdatePicker({firstDayOfWeek:1,isShowWeek:true,el:document.getElementById('startTime_value'),dateFmt:'yyyy-MM-dd HH:mm:ss',maxDate:'%y-%M-%d'})"/>
							<span id="startTime_valuespan" class="errorMsg" style="display: none"></span>
						</td>
					<td   width="150" align="right"><span class="xin_red">*</span>到期时间：</td>
						<td  id="qyValue" width="200" align="left">
							<input id="endTime_value" name="endTime_value" type="text" 
							style="border:1px solid #CCC; height:22px; line-height: 22px;width:155px" onFocus="this.blur()"
							formCheck="true" readonly="readonly" 
							required="true" requiredError="请选择办证时间！" 
							value="<%=DateFormatUtils.format(new Date(new Date().getYear(),new Date().getMonth(),new Date().getDate()), "yyyy-MM-dd HH:mm:ss") %>"/>
	                 		 <img src="Images/time.jpg" width="20" height="23" style="margin-left:2px;"
									onclick="WdatePicker({firstDayOfWeek:1,isShowWeek:true,el:document.getElementById('endTime_value'),dateFmt:'yyyy-MM-dd HH:mm:ss',minDate:'#F{$dp.$D(\'startTime_value\')}'})"/>
							<span id="endTime_valuespan" class="errorMsg" style="display: none"></span>
						</td>
					</tr>
					
					<%--第三行--%>
					<tr>
						<td width="150" align="right"><span class="xin_red">*</span>办证人：</td>
						<td type="text" align="left" >
							<input type="text" class="td_input" id="proveHumanValue" name="proveHumanValue"    
									formCheck="true" 
									required="true" 
									requiredError="办证人不能为空！"
									textLength="1-100"
									valLengthError="长度必须在100个字符内"/>
									<span id="proveHumanValuespan" class="errorMsg" style="display: none"></span>
						</td>
						<td width="150" align="right"><span class="xin_red">*</span>责任人：</td>
						<td type="text" align="left" >
							<input type="text" class="td_input" id="principalValue" name="principalValue"    
									formCheck="true" 
									required="true" 
									requiredError="责任人不能为空！"
									textLength="1-100"
									valLengthError="长度必须在100个字符内"/>
									<span id="principalValuespan" class="errorMsg" style="display: none"></span>
						</td>
					</tr>
					<%--行--%>
					<tr id="vehicleNa">
						<td width="150" align="right"><span class="xin_red">*</span>办证费用：</td>
						<td type="text" align="left" >
							<input type="text" class="td_input" id="proveRateValue" name="proveRateValue"   
									formCheck="true" 
									required="true" 
									requiredError="办证费用不能为空！" 
									textLength="1-50"
									valLengthError="长度必须在50个字符内"
									/>
									<span id="proveRateValuespan" class="errorMsg" style="display: none"></span>
						</td>
						<td width="150"  align="right"><span class="xin_red">*</span>提前提醒天数：</td>
						<td align="left">
							    <input type="text" name="warnTime" id="warnTime"
							     formCheck="true" 
								 required="true" 
								 requiredError="提前提醒天数不能为空！" 
								 integer="true"
							     class="td_input" size="50"/>
							     <span id="warnTimespan" class="errorMsg" style="display: none"></span>
							</td>
						
					</tr>
					<%--行--%>
					<tr>
							<td width="150" align="right">办证地点：</td>
							<td width="160" align="left">
								<input type="text" class="td_input" id="proveAddressValue" name="proveAddressValue" 
									style="width: 180px; border:1px solid #CCC; height:22px; line-height: 22px;" 
									textLength="1-250" 
									valLengthError="长度必须在250个字符内" 
								/>
								<span id="proveAddressValuespan" class="errorMsg" style="display: none"></span>
							</td>
							<td width="150"  align="right">备注：</td>
							<td align="left">
							    <input type="text" name="memo" id="memo" class="td_input" size="50"/>
							</td>
					</tr>
					<tr>
					 <td width="150" align="right">所辖机构：</td>
						<td type="text" align="left" >
							<input type="text" class="td_input" id="manageAreaValue" name="manageAreaValue"    
									textLength="1-250"
									valLengthError="长度必须在250个字符内"/>
									<span id="manageAreaValuespan" class="errorMsg" style="display: none"></span>
						</td>
							
				    </tr>
					<%--行【为了样式】--%>
					<tr id="hihi">
						<td width="150" align="right" valign="top"></td>
						<td width="250" colspan="3" align="left">
							<%--table--%>
							<table width="100%"
								style="border: 1px outset #EEEEEE; padding-top: 2px; overflow-x: hidden; overflow-y: hidden;">
							</table>
						</td>
						<td></td>
					</tr>
					
				</table>
			</div>

			
			 <%--列表--%>
			 <div><table id="ProveInfoList" style="display: none"></table></div>
		</div> 
    </div>
	</div>
<%--    <div id="dialogs" class="hiddiv" style="display: none;padding:5px;top:10px;">--%>
<%--			<iframe src="" id="dialogFrame" name="dialogFrame" width="100%"  height="100%" frameborder="0" scrolling="auto"></iframe>--%>
<%--		</div>--%>
		<%--弹出--%>
 		<div id="dialogs" class="hiddiv" style="display: none;padding:5px;top:10px;">
			<iframe src="" id="dialogFrame" name="dialogFrame" width="100%"  height="100%" frameborder="0" scrolling="auto"></iframe>
		</div>
	</body>
</html>
