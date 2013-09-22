<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ include file="/common/validateHead.jsp"%>
<%@taglib prefix="auth"  uri="/auth-tags"  %>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
	<head>
		<title>设备厂商信息管理</title>
		<script type="text/javascript" src="${basePath}js/videoManage/vehicleDeviceVendor.js"></script>
	</head>

	<body>
	
		<div style="width: 100%" id="cont_box">
		<div class="main">
		<div class="mon_cont">
			<div class="E_Tit" >设备厂商信息管理</div>
				<table border="0" cellspacing="0" cellpadding="0" class="que_tab">
					<tr>
						<td width="80" align="right">设备厂商名称:</td>
						<td width="120" align="left">
							<input id="ParamName" name="ParamName" type="text"
								class="mon_ser_text" style="width: 130px"
								maxlength="30"
								onkeyup="this.value=this.value.replace(/\D/g,'')" 
								onafterpaste="this.value=this.value.replace(/\D/g,'')"
				                />
						</td>
						
						<td width="120">
							<a id="searchBtn" href="javascript:void(0)" class="ser_btn" style="color: white;">查询</a>
						</td>
						<td width="60">
						 <a href="javascript:void(0)" id="exportBtn" class="ser_btn" style="color: white;">导出</a>
						</td>
						<td width="60">
						 <a href="javascript:void(0)" id="createBtn" class="ser_btn" style="color: white;">新增</a>
						</td>
						
						
					</tr>
				</table>
				
		
			<div id="editWindow" class="wDiv" style="width:100%;display: none;border: 1px solid #d0d0d0;">
				<div class="td_title" id="titleInfo">设备厂商信息编辑</div>
				<table width="100%">
					<tr>
					    <input type="hidden" name="id" id="id" class="td_input" size="50"/>
					    <td align="right"><span class="xin_red">*</span>名称：</td>
						<td align="left">
						<input type="text" name="Name" id="Name" size="30" class="td_input"
								formCheck="true" required="true" requiredError="请输入设备厂商名称！"
								ajaxAction="videoManage/checkVehicleDeviceVendorName.action"
								ajaxDataId="id"
								ajaxActionError="已存在此设备厂商名称，请重新输入！"
								/>
							<span id="Namespan" class="errorMsg" style="display: none"></span>
						</td>
						
						<td align="right">代码：</td>
						<td align="left">
						    <input type="text" name="Code" id="Code" class="td_input" size="50"/>
						</td>
						<td rowspan="10" align="center" width="200">
							<a id="submitBtn" href="javascript:void(0)" class="ser_btn" style="margin-bottom: 3px;">提交</a><br>
							<a id="reSetBtn" href="javascript:void(0)" class="ser_btn" style="margin-bottom: 3px;">重置</a><br/>
							<a id="cancelBtn" href="javascript:void(0)" class="ser_btn">取消</a>
						</td>
						
					</tr>
					
					<tr>
						<td align="right">备注：</td>
						<td align="left">
							 <input type="text" name="Memo" id="Memo" class="td_input" size="50"/>
						</td>
					</tr>	
				</table>
			</div>
			<table id="vehicleDeviceVendorList" style="display: none"></table>
	    </div>
		</div>
		</div>
	</body>
</html>
