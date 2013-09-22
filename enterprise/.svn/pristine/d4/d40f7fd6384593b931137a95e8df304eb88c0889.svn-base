<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ include file="/common/validateHead.jsp"%>
<%@taglib prefix="auth"  uri="/auth-tags"%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
	<head>
		<title>区域管理</title>
		<script type="text/javascript" src="${basePath}js/easyui/plugins/jquery.tree.js"></script>
		<script type="text/javascript" src="${basePath}js/sys/area/areaList.js"></script>
	</head>

	<body>
		<div style="width: 100%" id="cont_box">
		<div class="main">
		<div class="mon_cont">
			<div class="E_Tit">区域管理</div>
			<table style="width: 100%;">
				<tr>
					<td width="30%" style="vertical-align: top;border: 1px solid #1D82D2; border-collapse: collapse;padding: 5px 10px;">
						<div align="left" style="height:350px; margin-top: 10px;OVERFLOW-Y:auto;OVERFLOW-X:hidden;">
							<ul id="areaMenulist">
							</ul>
						</div>
					</td>
					<td>
						<div id="adSearch" style="width: 100%">
							<table border="0" cellspacing="0" cellpadding="0" class="que_tab" style="margin-bottom: 10px">
								<tr>
									<td width="40" align="right">名称:</td>
									<td width="150">
										<input id="otName" name="otName" type="text"
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
						<div id="editWindow" class="wDiv" style="display:none;border: 1px solid #d0d0d0;width: 100%;">
							<div class="td_title">区域编辑</div>
							<table align="center">
								<tr>
									<td width="80" align="right"><span class="xin_red">*</span>区域代码：</td>
									<td width="260" align="left">
										<input type="hidden" id="areaId" value=""/>
										<input type="text" name="areaCode" id="areaCode" size="30" class="td_input"
											formCheck="true" 
											required="true" requiredError="请输入区域代码！" 
											noSpecialCaracters="true" noSpecialCaractersError="请输入中英文或数字！"
											ajaxAction="sys/getAreaByCode.action" 
											ajaxDataId="areaId" 
											ajaxActionError="已存在此代码的区域，请重新输入！">
										<span id="areaCodespan" class="errorMsg" style="display: none"></span>
									</td>
									<td rowspan="10" width="200" align="center">
										<a id="submitBtn" href="javascript:void(0)" class="ser_btn" style="margin-bottom: 3px;">提交</a>
										<br>
										<a id="cancelBtn" href="javascript:void(0)" class="ser_btn">取消</a>
									</td>
								</tr>
								<tr>
									<td width="80" align="right"><span class="xin_red">*</span>区域名称：</td>
									<td align="left">
										<input type="text" name="areaName" id="areaName" size="30" class="td_input"
											formCheck="true" 
											required="true" requiredError="请输入区域名称！" 
											noSpecialCaracters="true" noSpecialCaractersError="请输入中英文或数字！"
											ajaxAction="sys/getAreaByName.action" 
											ajaxDataId="areaId" 
											ajaxActionError="已存在此名称的区域，请重新输入！">
										<span id="areaNamespan" class="errorMsg" style="display: none"></span>
									</td>
								</tr>
								<tr>
									<td align="right"><span class="xin_red">*</span>上级名称：</td>
									<td>
										<select id="parentArea"></select>
									</td>
								</tr>
								
							</table>
						</div>
						<div class="sys_ctr" style="margin-right: 1px;">
			            	<ul>
			            		<auth:authorize operation="createArea">
			            			<li><a id="createBtn" href="javascript:void(0)">新增</a></li>
			            		</auth:authorize>
			            		<auth:authorize operation="updateArea">
			            			<li><a id="editBtn" href="javascript:void(0)">编辑</a></li>
			            		</auth:authorize>
			            		<auth:authorize operation="deleteArea">
			            			<li><a id="deleteBtn" href="javascript:void(0)">删除</a></li>
			            		</auth:authorize>
			                </ul>
			            </div>
			            
			            <table id="areaList" style="display: none"></table>
					</td>
				</tr>
			</table>
			<!-- 区域查看-->
			<div id="lookforAreaDialog" icon="icon-save" class="hiddiv" style="display: none;padding:5px;">
				<iframe src="#" id="lookforAreaDialogFrame" name="lookforAreaDialogFrame" width="100%"  height="100%" frameborder="0" scrolling="yes"></iframe>
			</div>
		</div>
		</div>
		</div>
	</body>
</html>
