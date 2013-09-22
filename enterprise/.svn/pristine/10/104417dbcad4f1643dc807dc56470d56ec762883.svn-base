<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ include file="/common/validateHead.jsp"%>
<%@taglib prefix="auth"  uri="/auth-tags"  %>

<style>
<!--
<%--		background-color:#ace;--%>
	a:hover {color:blue;text-decoration:underline; }
-->
</style>

							<%--轨迹分析组管理--%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
	<head>
		<title>道路运输车辆卫星定位监管平台-广州亿程交通信息有限公司</title>
		<script type="text/javascript" src="${basePath}js/analyse/addAnalyseGroupTree.js"></script>
		<script type="text/javascript" src="${basePath}js/datepicker/WdatePicker.js"></script>
	</head>

	<body>
	<div style="width: 100%" id="cont_box">
	<div class="main">
        <div class="mon_cont">
        	<div class="E_Tit">轨迹分析组管理</div>
            <table border="0" cellspacing="0" cellpadding="0" class="que_tab">
				<tr>
					<td width="50" align="right">名称：</td>
					<td width="150" align="left"><input id="configName" name="configName" type="text"
					        style="width: 130px;"
							maxlength="50"
							onchange="value=value.replace(/[^0-9a-zA-Z\u4e00-\u9fa5]/g,'')" 
			                onbeforepaste="clipboardData.setData('text',clipboardData.getData('text').replace(/[^0-9a-zA-Z\u4e00-\u9fa5]/g,''))"/>
				    </td>
					<td width="100">
						<a id="searchBtn" href="javascript:void(0)" class="ser_btn" style="color: white;">查询</a>
							<%--权限控制--%>
							<auth:authorize operation="addGroup">
						<a id="createBtn" href="javascript:void(0)" class="ser_btn" style="color: white;">新增</a>
							</auth:authorize>
					</td>
				</tr>
			</table>

			<!-- 新增,修改 --> 
			<div id="editWindow" class="wDiv" style="width:100%;display: none;border: 1px solid #d0d0d0;height:403px;overflow-y:auto;">
				<div class="td_title">轨迹分析组新增</div>
				<input type="hidden" name="id" id="id"/>
				<table width="100%" align="center">
					<tr>
						<td width="150" align="right"><span class="xin_red">*</span>名称：</td>
						<td width="160" align="left">
							<input type="text"
								class="td_input" maxlength="20"
								id="name" name="name" formCheck="true"
								required="true" requiredError="请输入名称！"
								noSpecialCaracters="true" noSpecialCaractersError="请输入中英文或数字！"
								ajaxAction="analyse/checkName.action"
								ajaxActionError="已存在此名称，请重新输入！" 
								ajaxDataId="id"/>
							<span id="namespan" class="errorMsg" style="display: none"></span>
						</td>
						<td id="qy" width="150" align="right">所属企业：</td>
						<td id="qyValue" width="160" align="left">
							<input type="text" class="td_input" id="workName" name="workName" disabled="disabled" />
						</td>
						<td rowspan="6" width="200" align="left">
							<a id="submitBtn" href="javascript:void(0)" class="ser_btn" style="margin-bottom: 3px;">提交</a>
							<br> 
							<a id="cancelBtn" href="javascript:void(0)" class="ser_btn">取消</a>
						</td>
					</tr>
					
					<tr>
						<td width="150" align="right" valign="top"><span class="xin_red">*</span>车辆选择：</td>
						<td width="250" colspan="3" align="left">
							<%--table--%>
							<table width="100%"
								style="border: 1px outset #EEEEEE; padding-top: 2px; overflow-x: hidden; overflow-y: hidden;">
								<tr>
									<td id="vehi"><div id="imgSelectVehicle" style="height: 30px;"><img src='imgs/load.gif'>正在查询车辆.......</div></td>
								</tr>
								<tr>
								<td>
									<%--车辆树--%>
									<div align="left" id="vehicle"
									style="height:295;width:240;OVERFLOW-Y: auto; OVERFLOW-X: hidden;padding-top: 0;vertical-align: top;">
									<ul id="vehicleListTree">
									</ul>
									</div>
								</td>
									<td><span id="vehiclesspan" class="errorMsg" style="display: none;vertical-align: top;"></span>
									</td>
								</tr>
							</table>
						</td>
						<td></td>
					</tr>
					
					<tr>
							<td width="150" align="right">说明：</td>
							<td width="160" align="left" colspan="4">
								<input type="text" class="td_input" id="description" name="description" 
									style="width: 525px; border:1px solid #CCC; height:22px; line-height: 22px;" 
									maxlength="100"
									textLength="1-100" valLengthError="长度必须在100个字符内" 
								/>
								<span id="descriptionspan" class="errorMsg" style="display: none"></span>
							</td>
<%--							<td width="150" align="right"></td>--%>
<%--							<td width="160">--%>
<%--							</td>--%>
					</tr>
					
					
				</table>
			</div>
			
			<%--查看--%>
			<div id="viewWindow" style="width:100%;display: none;border: 1px solid #d0d0d0;height:403px;overflow-y:auto;">
				<div class="td_title">轨迹分析组详情</div>
				<table width="100%" align="center">
					<tr>
						<td width="150" align="right"><span class="xin_red">*</span>名称：</td>
						<td width="160" align="left">
<%--						nameView--%>
<%--							<input type="text"--%>
<%--								class="td_input" maxlength="20"--%>
<%--								id="nameView" name="nameView" formCheck="true"--%>
<%--								required="true" requiredError="请输入名称！"--%>
<%--								noSpecialCaracters="true" noSpecialCaractersError="请输入中英文或数字！"--%>
<%--								ajaxAction="analyse/checkName.action"--%>
<%--								ajaxActionError="已存在此名称，请重新输入！" />--%>
<%--							<span id="nameViewspan" class="errorMsg" style="display: none"></span>--%>
						</td>
						
						<td width="150" align="right">
							所属企业：
						</td>
						<td width="160" align="left">
							<%--readonly="readonly"--%>
							<input type="text" class="td_input" id="workNameView" name="workNameView" disabled="disabled" />
						</td>
						<td rowspan="2" width="200" align="left">
							<a id="closeBtn" href="javascript:void(0)" class="ser_btn">关闭</a>
						</td>
					</tr>
					<%--车辆列表--%>
					<tr>
						<td width="150" align="right" valign="top"><span class="xin_red">*</span>车辆选择：</td>
						<td width="250" colspan="3" align="left">
							<%--table--%>
							<table width="100%"
								style="border: 1px outset #EEEEEE; padding-top: 2px; overflow-x: hidden; overflow-y: hidden;">
								<tr>
									<td id="vehi"><div id="imgSelectVehicleView" style="height: 30px;"><img src='imgs/load.gif'>正在查询车辆.......</div></td>
								</tr>
								<tr>
								<td>
									<%--车辆树--%>
									<div align="left" id="vehicleView"
									style="height:295;width:240;OVERFLOW-Y: auto; OVERFLOW-X: hidden;padding-top: 0;vertical-align: top;">
									<ul id="vehicleListTreeView">
									</ul>
									</div>
								</td>
								</tr>
							</table>
						</td>
						<td></td>
					</tr>


					<tr>
						<td width="150" align="right">说明：</td>
						<td width="160" colspan="3" align="left">
							<input type="text" class="td_input" id="descriptionView" name="descriptionView" disabled="disabled"
									style="width:  670px; border:1px solid #CCC; height:22px; line-height: 22px;" 
								/>
						</td>
					</tr>
				</table>
			</div>
			<table><tr><td></td></tr></table>
			
				<%--列表--%>
			 <div><table id="AnalyseGroupList" style="display: none"></table></div>
		</div> 
    </div>
	</div>

	</body>
</html>
