<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ include file="/common/validateHead.jsp"%>
<%@taglib prefix="auth"  uri="/auth-tags"  %>


<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
	<head>
		<title>区域报警设置</title>
		<script type="text/javascript" src="${basePath}js/monitorCenter/areaAlarmConfig/areaAlarmConfigList.js"></script>
		<script type="text/javascript" src="${basePath}js/datepicker/WdatePicker.js"></script>
	</head>

	<body>
	<div style="width: 100%" id="cont_box">
	<div class="main">
        <div class="mon_cont">
        	<div class="E_Tit">区域报警设置</div>
            <table border="0" cellspacing="0" cellpadding="0" class="que_tab">
				<tr>
					<td width="50" align="right">名称：</td>
					<td width="150" align="left"><input id="configName" name="configName" type="text"
					        style="width: 130px;"
							maxlength="50"
							onchange="value=value.replace(/[^0-9a-zA-Z\u4e00-\u9fa5]/g,'')" 
			                onbeforepaste="clipboardData.setData('text',clipboardData.getData('text').replace(/[^0-9a-zA-Z\u4e00-\u9fa5]/g,''))"/>
				    </td>
					<td width="100" >
						<a id="searchBtn" href="javascript:void(0)" class="ser_btn" style="color: white;">查询</a>
						<auth:authorize operation="createAreaAlarmConfig">
							<a id="createBtn" href="javascript:void(0)" class="ser_btn" style="color: white;">新增</a>
						</auth:authorize>
					</td>
				</tr>
			</table>

			<!-- 新增 -->
			<div id="editWindow" class="wDiv" style="width:100%;display: none;border: 1px solid #d0d0d0;height:320px;overflow-y:auto;">
				<div class="td_title">区域报警设置新增</div>
				<table width="100%" align="center">
					<tr>
						<td width="150" align="right"><span class="xin_red">*</span>名称：</td>
						<td width="160" align="left">
							<input type="text"
								class="td_input" maxlength="20"
								id="name" name="name" formCheck="true"
								required="true" requiredError="请输入名称！"
								noSpecialCaracters="true" noSpecialCaractersError="请输入中英文或数字！"
								ajaxAction="monitorCenter/checkAreaConfigName.action"
								ajaxActionError="已存在此名称，请重新输入！" />
							<span id="namespan" class="errorMsg" style="display: none"></span>
						</td>
						<td width="150" align="right"></td>
						<td width="160" align="left"></td>
						<td rowspan="6" width="200" align="center">
							<a id="submitBtn" href="javascript:void(0)" class="ser_btn" style="margin-bottom: 3px;">提交</a>
							<br> 
							<a id="cancelBtn" href="javascript:void(0)" class="ser_btn">取消</a>
						</td>
					</tr>
					<tr>
						<td width="150" align="right"><span class="xin_red">*</span>选择区域：</td>
						<td width="160" align="left">
					         <select id="areaId" name="areaId" style="width: 180px"
							      formCheck="true" 
							      required="true" 
							      requiredError="必须输入项!"  
							      noselect="true" 
							      requiredError="请选择一项">
						    <select>
					        <span id="areaIdspan" class="errorMsg" style="display: none"></span>
						  </td>
						  
						<td width="150" align="right"><span class="xin_red">*</span>是否报警：</td>
						<td width="160" align="left">
							<select id="isAlarm" class="td_sel"></select>
						</td>
					</tr>
					<tr>
						<td width="150" align="right"><span class="xin_red">*</span>检测类型：</td>
						<td width="160" align="left">
							<!-- 参数解释 在dateTypeIDSelOnchange方法头部有--> 
							<select
								id="dateTypeId" class="td_sel"
								onchange="dateTypeIDSelOnchange('dateTypeId','beginDate_go','endDate_go','workingDays','begin_time','end_time');">
							</select>
						</td>
						<td width="150" align="right">检测日期：</td>
						<td width="160">
							<select id="workingDays" class="td_sel"></select>
						</td>
					</tr>
					<tr>
						<td width="150" align="right"><div id="begin_time">检测开始时间：</div>
						</td>
						<td width="200" align="left">
							<input type="text" id="beginDate" name="beginDate" class="td_input" onFocus="this.blur()" readonly="readonly"  style="width:155px" />
							<img id="beginDate_go" src="Images/time.jpg" width="20" height="23" style="margin-left: 2px;"
							onClick="WdatePicker({isShowClear:false,firstDayOfWeek:1,isShowWeek:true,el:document.getElementById('beginDate'),dateFmt:'HH:mm:ss'})" />
						</td>
						<td width="150" align="right"><div id="end_time">检测结束时间：</div>
						</td>
						<td width="200" align="left">
							<input type="text" id="endDate" name="endDate" class="td_input" onFocus="this.blur()" readonly="readonly"  style="width:155px" />
							<img id="endDate_go" src="Images/time.jpg" width="20" height="23" style="margin-left: 2px;"
							onClick="WdatePicker({isShowClear:false,firstDayOfWeek:1,isShowWeek:true,el:document.getElementById('endDate'),dateFmt:'HH:mm:ss'})" />
						</td>
					</tr>

					<tr>
						<td width="150" align="right"><span class="xin_red">*</span>车辆选择：</td>
						<td width="250" colspan="3" align="left">
							<table width="100%"
								style="border: 1px outset #EEEEEE; padding-top: 2px; overflow-x: hidden; overflow-y: hidden;">
								<tr>
									<td>车牌号码: 
										<input name="searchValue" type="text" id="searchValue" size="10" /> 
										<a href="javascript:void(0)" onclick="findVehicleList()"><img src="<%=basePath%>imgs/serach.gif" width="16" height="16" border=0/></a>
										<input type="checkbox" id="CheckAll" />全选
										<span id="vehiclesspan" class="errorMsg" style="display: none"></span>
									</td>
								</tr>
								<tr>
									<td colspan="2">
										<div align="left" id="vehicle"
											style="width: 550px; height: 100px; border: 1px outset #EEEEEE; padding-top: 2px; overflow-x: hidden; overflow-y: scroll;"></div>
									</td>
								</tr>
							</table></td>
						<td></td>
					</tr>
				</table>
			</div>
			
			<div id="viewWindow" style="width:100%;display: none;border: 1px solid #d0d0d0;height:320px;overflow-y:auto;">
				<div class="td_title">区域报警设置详情</div>
				<table width="100%" align="center">
					<tr>
						<td width="150" align="right">名称：</td>
						<td width="160" align="left">
							<input type="text" class="td_input" id="nameView" name="nameView" readonly="readonly"/>
						</td>
						<td width="150" align="right">是否报警：</td>
						<td width="160" align="left">
							<select id="isAlarmView" class="td_sel" disabled="disabled"></select>
						</td>
						<td rowspan="6" width="200" align="center">
							<a id="closeBtn" href="javascript:void(0)" class="ser_btn">关闭</a>
						</td>
					</tr>
					<tr>
						<td width="150" align="right">检测类型：</td>
						<td width="160" align="left">
							<select id="dateTypeIdView" class="td_sel" disabled="disabled"></select>
						</td>
						<td width="150" align="right">检测日期：</td>
						<td width="160">
							<input type="text" class="td_input" id="workingDaysView" name="workingDaysView" readonly="readonly"/>
						</td>
					</tr>
					<tr>
						<td width="150" align="right">检测开始时间：
						</td>
						<td width="200" align="left">
							<input type="text" id="beginDateView" name="beginDate" class="td_input" readonly="readonly"/>
						</td>
						<td width="150" align="right"><div id="end_time">检测结束时间：</div>
						</td>
						<td width="200" align="left">
							<input type="text" id="endDateView" name="endDate" class="td_input" readonly="readonly"/>
						</td>
					</tr>

					<tr>
						<td width="150" align="right">相关车辆：</td>
						<td width="250" align="left">
							<div align="left" id="vehicleView"
								style="width: 180px; height: 100px; border: 1px outset #EEEEEE; padding-top: 2px; overflow-x: hidden; overflow-y: scroll;"></div>
						</td>
						<td width="150" align="right">相关区域点：</td>
						<td width="200" align="left">
							<div align="left" id="areaView"
								style="width: 180px; height: 100px; border: 1px outset #EEEEEE; padding-top: 2px; overflow-x: hidden; overflow-y: scroll;"></div>
						</td>
					</tr>
				</table>
			</div>
			<table><tr><td></td></tr></table>
			<table id="areaAlarmConfigList" style="display: none"></table>
		</div> 
    </div>
	</div>

	</body>
</html>
