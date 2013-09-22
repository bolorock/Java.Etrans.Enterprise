<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ include file="/common/validateHead.jsp"%>
<%@taglib prefix="auth"  uri="/auth-tags"  %>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
	<head>
		<title>机构类型</title>
		<script type="text/javascript" src="${basePath}js/sys/organzationType/organzationTypeList.js"></script>
	</head>
	
	<body>
		<div style="width: 100%" id="cont_box">
		<div class="main">
		<div class="mon_cont">
			<div class="E_Tit">机构类型</div>
			<div id="adSearch">
				<table border="0" cellspacing="0" cellpadding="0" class="que_tab" style="margin-bottom: 10px">
					<tr>
						<td width="100" align="right">机构类别名称:</td>
						<td width="150" align="left">
							<input id="otName" name="otName" type="text" class="mon_ser_text" style="width: 130px;"
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
				<div class="td_title">机构类别信息编辑</div>
				<form id="addForm" method="post" action="">
				<table align="center">
					<tr>
						<td width="120" align="right"><span class="xin_red">*</span>机构类别名称：</td>
						<td width="250" align="left">
							<input type="hidden" id="organzationTypeId" value=""/>
							<input type="text" name="organzationTypeName" id="organzationTypeName" size="50"  class="td_input" style="width: 130px;"
								formCheck="true" 
								required="true" requiredError="请输入机构类别名称！" 
								noSpecialCaracters="true" noSpecialCaractersError="请输入中英文或数字！"
								ajaxAction="sys/getOrganzationTypeByName.action" 
								ajaxDataId="organzationTypeId" 
								ajaxActionError="已存在此名称的机构类别，请重新输入！">
							<span id="organzationTypeNamespan" class="errorMsg" style="display: none"></span>
						</td>
						<td align="center" width="200">
							<a id="submitBtn" href="javascript:void(0)" class="ser_btn" style="margin-bottom: 3px;">提交</a>
							<br>
							<a id="cancelBtn" href="javascript:void(0)" class="ser_btn">取消</a>
						</td>
					</tr>
				</table>
				</form>
			</div>
			<div class="sys_ctr" style="margin-right: 1px;">
            	<ul>
            		<auth:authorize operation="createOrganzationType">
            			<li><a id="createBtn" href="javascript:void(0)">新增</a></li>
            		</auth:authorize>
            		<auth:authorize operation="updateOrganzationType">
            			<li><a id="editBtn" href="javascript:void(0)">编辑</a></li>
            		</auth:authorize>
            		<auth:authorize operation="deleteOrganzationType">
            			<li><a id="deleteBtn" href="javascript:void(0)">删除</a></li>
            		</auth:authorize>
            		<auth:authorize operation="exportOrganzationType">
            			<li><a id="exportBtn" href="javascript:void(0)">导出</a></li>
            		</auth:authorize>
                </ul>
                <span id="gridMsg"></span>
            </div>
            
            <table id="organzationTypeList" style="display: none"></table>
		</div>
		</div>
		</div>
	</body>
</html>
