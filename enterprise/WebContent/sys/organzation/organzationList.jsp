<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ include file="/common/validateHead.jsp"%>
<%@taglib prefix="auth"  uri="/auth-tags"  %>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
	<head>
		<title>机构管理</title>
		<script type="text/javascript" src="${basePath}js/sys/organzation/organzationList.js"></script>
	</head>

	<body>
	
		<div style="width: 100%" id="cont_box">
		<div class="main">
		<div class="mon_cont">
			<div class="E_Tit">机构管理</div>
			<div id="adSearch">
				<table border="0" cellspacing="0" cellpadding="0" class="que_tab" style="margin-bottom: 10px;">
					<tr>
						<td width="80" align="right">机构名称:</td>
						<td width="150" align="left">
							<input id="omName" name="omName" type="text"
								class="mon_ser_text" style="width: 130px"
								maxlength="30"
								onchange="value=value.replace(/[^0-9a-zA-Z\u4e00-\u9fa5]/g,'')" 
				                onbeforepaste="clipboardData.setData('text',clipboardData.getData('text').replace(/[^0-9a-zA-Z\u4e00-\u9fa5]/g,''))"/>
						</td>
						<td width="60">
							<a id="searchBtn" href="javascript:void(0)" class="ser_btn" style="color: white;">查询</a>
						</td>
					</tr>
				</table>
			</div>
			<div id="editWindow" class="wDiv" style="width:100%;display: none;border: 1px solid #d0d0d0;">
				<div class="td_title">机构信息编辑</div>
				<table width="100%">
					<tr>
						<td align="right"><span class="xin_red">*</span>机构类别：</td>
						<td align="left">
							<select id="organzationTypeId"></select>
						</td>
						<td align="right"><span class="xin_red">*</span>机构名称：</td>
						<td align="left">
							<input type="hidden" id="organzationId" value=""/>
							<input type="text" name="organzationName" id="organzationName" size="30" class="td_input"
								formCheck="true" 
								required="true" requiredError="请输入机构名称！" 
								noSpecialCaracters="true" noSpecialCaractersError="请输入中英文或数字！"
								ajaxAction="sys/getOrganzationByName.action" 
								ajaxDataId="organzationId" 
								ajaxActionError="已存在此名称的机构，请重新输入！">
							<span id="organzationNamespan" class="errorMsg" style="display: none"></span>
						</td>
						
						<td rowspan="10" align="center" width="200">
							<a id="submitBtn" href="javascript:void(0)" class="ser_btn" style="margin-bottom: 3px;">提交</a>
							<br>
							<a id="cancelBtn" href="javascript:void(0)" class="ser_btn">取消</a>
						</td>
						
					</tr>
					<tr>
						<td align="right"><span class="xin_red">*</span>联系人：</td>
						<td align="left">
							<input type="text" name="contactPerson" id="contactPerson" size="30" class="td_input"
								formCheck="true" 
								required="true" requiredError="请输入联系人！" 
								noSpecialCaracters="true" noSpecialCaractersError="请输入中英文或数字！"/>
							<span id="contactPersonspan" class="errorMsg" style="display: none"></span>
						</td>
						<td align="right"><span class="xin_red">*</span>联系电话：</td>
						<td align="left">
							<input type="text" name="contactPhone" id="contactPhone" size="30" class="td_input"
								formCheck="true" 
								required="true" requiredError="请输入联系电话！"
								phone="true" phoneError="请输入有效电话号码！"/>
							<span id="contactPhonespan" class="errorMsg" style="display: none"></span>
						</td>
					</tr>
					<tr>
						<td align="right">地址：</td>
						<td align="left">
							<input type="text" name="address" id="address" class="td_input" size="50"/>
						</td>
						<td align="right">状态：</td>
						<td align="left">
							<select id="flag"></select>
						</td>
					</tr>
				</table>
			</div>
				
			<div class="sys_ctr" style="margin-right: 1px;">
            	<ul>
            		<auth:authorize operation="createOrganzation">
            			<li><a id="createBtn" href="javascript:void(0)">新增</a></li>
            		</auth:authorize>
            		<auth:authorize operation="updateOrganzation">
            			<li><a id="editBtn" href="javascript:void(0)">编辑</a></li>
            		</auth:authorize>
            		<auth:authorize operation="deleteOrganzation">
            			<li><a id="deleteBtn" href="javascript:void(0)">删除</a></li>
            		</auth:authorize>
            		<auth:authorize operation="exportOrganzation">
            			<li><a id="exportBtn" href="javascript:void(0)">导出</a></li>
            		</auth:authorize>
                </ul>
            </div>
			
			<table id="organzationList" style="display: none"></table>
		</div>
		</div>
		</div>
	</body>
</html>
