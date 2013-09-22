<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ include file="/common/validateHead.jsp"%>
<%@taglib prefix="auth"  uri="/auth-tags"  %>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
	<head>
		<title>终端类型信息管理</title>
		<script type="text/javascript" src="${basePath}js/sys/terminalKind.js"></script>
		
	</head>

	<body>
	
		<div style="width: 100%" id="cont_box">
		<div class="main">
		<div class="mon_cont">
			<div class="E_Tit">终端类型信息管理</div>
				<table border="0" cellspacing="0" cellpadding="0" class="que_tab">
					<tr>
						<td width="80" align="right">类型名称:</td>
						<td width="120" align="left">
							<input id="namePram" name="namePram" type="text" 
								class="mon_ser_text" style="width: 130px"
								maxlength="30"
								onchange="value=value.replace(/[^0-9a-zA-Z\u4e00-\u9fa5]/g,'')" 
								onbeforepaste="clipboardData.setData('text',clipboardData.getData('text').replace(/[^0-9a-zA-Z\u4e00-\u9fa5]/g,''))"
				                />
						</td>
						
						<td width="160">
							<a id="searchBtn" href="javascript:void(0)" class="ser_btn" style="color: white;">查询</a>
						</td>
						<td width="60">
						 <a href="javascript:void(0)" id="createBtn" class="ser_btn" style="color: white;">新增</a>
						</td>
						
						
						
					</tr>
				</table>
				
			<div id="editWindow" class="wDiv" style="width:100%;display: none;border: 1px solid #d0d0d0;">
				<div class="td_title" id="titleInfo">终端类型信息编辑</div>
				<table width="100%">
					<tr>
					    <input type="hidden" name="id" id="id" value="" class="td_input" size="50"/>
					    <td align="right"><span class="xin_red">*</span>类型名称：</td>
						<td align="left">
						<input type="text" name="name" id="name" size="30" class="td_input" 
								formCheck="true" required="true" requiredError="请输入终端类型名称！"
								ajaxAction="sys/checkName.action"
								ajaxDataId="id"
								ajaxActionError="已存在此终端类型名称，请重新输入！"
								/>
							<span id="namespan" class="errorMsg" style="display: none"></span>
						</td>
						
						<td align="right"><span class="xin_red">*</span>类型编号：</td>
						<td align="left">
						<input type="text" name="Kind" id="Kind" size="30" class="td_input" 
								formCheck="true" required="true" requiredError="请输入终端类型编号！"
								ajaxAction="sys/checkKind.action"
								ajaxDataId="id"
								ajaxActionError="已存在此终端类型编号，请重新输入！"
								/>
							<span id="Kindspan" class="errorMsg" style="display: none"></span>
						</td>
						

						<td rowspan="10" align="center" width="200">
							<a id="submitBtn" href="javascript:void(0)" class="ser_btn" style="margin-bottom: 3px;">提交</a><br>
							<a id="reSetBtn" href="javascript:void(0)" class="ser_btn" style="margin-bottom: 3px;">重置</a><br/>
							<a id="cancelBtn" href="javascript:void(0)" class="ser_btn">取消</a>
						</td>
						
					</tr>
					
					
				</table>
			</div>
			<table id="terminalKindList" style="display: none"></table>
	    </div>
		</div>
		</div>
		 <div id="dialogs" class="hiddiv" style="display: none;padding:5px;top:10px;">
			<iframe src="" id="dialogFrame" name="dialogFrame" width="100%"  height="100%" frameborder="0" scrolling="auto"></iframe>
		</div>
	</body>
</html>
