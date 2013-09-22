<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ include file="/common/validateHead.jsp"%>
<%@taglib prefix="auth"  uri="/auth-tags"  %>

<<style>
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
		<script type="text/javascript" src="${basePath}js/analyse/addAnalyseGroup.js"></script>
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

			<!-- 新增 --> 
			<div id="editWindow" class="wDiv" style="width:100%;display: none;border: 1px solid #d0d0d0;height:280px;overflow-y:auto;">
				<div class="td_title">轨迹分析组新增</div>
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
								ajaxActionError="已存在此名称，请重新输入！" />
							<span id="namespan" class="errorMsg" style="display: none"></span>
						</td>
						<td width="150" align="right"></td>
						<td width="160" align="left">
						</td>
						<td rowspan="6" width="200" align="center">
							<a id="submitBtn" href="javascript:void(0)" class="ser_btn" style="margin-bottom: 3px;">提交</a>
							<br> 
							<a id="cancelBtn" href="javascript:void(0)" class="ser_btn">取消</a>
						</td>
					</tr>
					
					<tr>
							<td width="150" align="right">说明：</td>
							<td width="160" align="left">
								<input type="text" class="td_input" id="description" name="description" colspan="3"
									style="width: 558px; border:1px solid #CCC; height:22px; line-height: 22px;" 
									maxlength="100"
									textLength="1-100" valLengthError="长度必须在100个字符内" 
								/>
								<span id="descriptionspan" class="errorMsg" style="display: none"></span>
							</td>
							<td width="150" align="right"></td>
							<td width="160">
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
										<a href="javascript:void(0)" onclick="findVehicleListTA('1','1')"><img src="<%=basePath%>imgs/serach.gif" width="16" height="16" border=0/></a>
										<input type="checkbox" id="CheckAll" />全选
										<span id="vehiclesspan" class="errorMsg" style="display: none"></span>
									</td>
								</tr>
								<tr>
									<td colspan="2">
										<%--车辆列表--%>
										<div align="left" id="vehicle"
											style="width: 550px; height: 105px; border: 1px outset #EEEEEE; padding-top: 2px; overflow-x: hidden; overflow-y: scroll;"></div>
									</td>
								</tr>
								
								<tr style="height: 20px;">
									<td style="text-align:right; padding-right: 20px;">
										总共
										<label id="count" style="color: red"></label>
										辆车
										&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
										目前显示
										<label id="xs" style="color: red"></label>
										辆车
										&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
										还剩
										<label id="hs"  style="color: red"></label>
										辆车没显示
										&nbsp;&nbsp;&nbsp;
										<a id="gd"  href="javascript:void(0);">更多...</a>
										<%--当前页--%>
										<input type="hidden" name="pageNo" id="pageNo"/>
										<%--还剩多少条数据--%>
										<input type="hidden" name="hshidden" id="hshidden"/>
									</td>
								</tr>
							</table></td>
						<td></td>
					</tr>
				</table>
			</div>
			
			<%--查看--%>
			<div id="viewWindow" style="width:100%;display: none;border: 1px solid #d0d0d0;height:200px;overflow-y:auto;">
				<div class="td_title">轨迹分析组详情</div>
				<table width="100%" align="center">
					<tr>
						<td width="150" align="right">名称：</td>
						<td width="160" align="left">
							<input type="text" class="td_input" id="nameView" name="nameView" readonly="readonly" disabled="disabled"/>
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
					<tr>
						<td width="150" align="right">相关车辆：</td>
						<td width="160" align="left">
							<div align="left" id="vehicleView"
								style="width: 180px; height: 100px; border: 1px outset #EEEEEE; padding-top: 2px; overflow-x: hidden; overflow-y: scroll;"></div>
						</td>
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
