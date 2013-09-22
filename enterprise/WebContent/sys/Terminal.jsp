<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ include file="/common/validateHead.jsp"%>
<%@taglib prefix="auth"  uri="/auth-tags"  %>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
	<head>
		<title>终端信息管理</title>
		<script type="text/javascript" src="${basePath}js/sys/terminal.js"></script>
		<script type="text/javascript"	src="${basePath}js/sys/tree/treeWorkUnitNameIdQuery.js"></script>
		<script type="text/javascript"	src="${basePath}js/sys/tree/vehicleTree.js"></script>
		
	</head>

	<body>
	
		<div style="width: 100%" id="cont_box">
		<div class="main">
		<div class="mon_cont">
			<div class="E_Tit">终端信息管理</div>
				<table border="0" cellspacing="0" cellpadding="0" class="que_tab">
					<tr>
						<td width="80" align="right">通信号:</td>
						<td width="120" align="left">
							<input id="CommNOs" name="CommNOs" type="text"
								class="mon_ser_text" style="width: 130px"
								maxlength="30"
								onkeyup="this.value=this.value.replace(/\D/g,'')" 
								onafterpaste="this.value=this.value.replace(/\D/g,'')"
				                />
						</td>
						<td align="right" width="120">状态：</td>
						<td align="left">
							<select id="useflags" class="mon_ser_text" style="width: 130;">
							  <option id="useflags" value="-1" label="请选择"></option>
							  <option id="useflags" value="1" label="开户" ></option>
							  <option id="useflags" value="0" label="停用"></option>
							</select>
						</td>
						
						<td width="160">
							<a id="searchBtn" href="javascript:void(0)" class="ser_btn" style="color: white;">查询</a>
						</td>
						<auth:authorize operation="exportTerminal">
						<td width="60">
						 <a href="javascript:void(0)" id="exportBtn" class="ser_btn" style="color: white;">导出</a>
						</td>
						</auth:authorize>
						<auth:authorize operation="createTerminal">
						<td width="60">
						 <a href="javascript:void(0)" id="createBtn" class="ser_btn" style="color: white;">新增</a>
						</td>
						</auth:authorize>
						
						<td width="80">
						 <a href="javascript:void(0)" id="adSearchBtn" style="margin-left:8px;">高级搜索</a>
						</td>
					</tr>
				</table>
				<div id="adSearch" style="display: none;">
				<table border="0" cellspacing="0" cellpadding="0" style="margin-bottom: 10px;">
					<tr>
						<td width="80" align="right">SIM卡号：</td>
						<td width="120" align="left">
							<input type="text" id="simParam" name="simParam" class="mon_ser_text" style="width: 130;"
							onkeyup="this.value=this.value.replace(/\D/g,'')" 
							onafterpaste="this.value=this.value.replace(/\D/g,'')"/>
						</td>
						<td width="120" align="right">企业名称：</td>
						<td width="280" align="left">
                           <input type="text"  readonly="readonly"
						    id="workUnitIdPram" onclick="showWorkUnitNameIdTree()"
						    name="uNameParam" class="mon_ser_text" style="width: 130;"
							maxlength="30" 
			               />
			      		  <input type="hidden" id="workUnitId" />
			      		 </td>
						<td colspan="2"></td>
					</tr>
				</table>
			</div>
			<div id="editWindow" class="wDiv" style="width:100%;display: none;border: 1px solid #d0d0d0;">
				<div class="td_title" id="titleInfo">终端信息编辑</div>
				<table width="100%">
					<tr>
					    <input type="hidden" name="id" id="id" value="" class="td_input" size="50"/>
					    <td align="right"><span class="xin_red">*</span>通信号：</td>
						<td align="left">
						<input type="text" name="CommNO" id="CommNO" size="30" class="td_input"  maxlength="11"
								formCheck="true" required="true" requiredError="请输入通信号码！"
								onlyNumber="true" onlyNumberError="请输入有效数字！" 
								ajaxAction="sys/checkCommNo.action"
								ajaxDataId="id"
								ajaxActionError="已存在此通讯号，请重新输入！"
								/>
							<span id="CommNOspan" class="errorMsg" style="display: none"></span>
						</td>
						<td align="right"><span class="xin_red">*</span>终端类型：</td>
<!--						<td align="left">-->
<!--							<select id="TerminalKindID" class="td_sel" -->
<!--							   formCheck="true" required="true" requiredError="必须输入项!"  noselect="true" requiredError="请选择一项"></select>-->
<!--							   <span id="TerminalKindIDspan" class="errorMsg" style="display: none"></span>-->
<!--						</td>-->
						<td align="left" width="240">
							<input type="text" id="TerminalKindIDName" name="TerminalKindIDName"   
								   class="td_input"
								   required="true" formCheck="true"    requiredError="请选择一项"
								    readonly="readonly"/> 
			      		    <input type="hidden" id="TerminalKindID" />
							<span id="TerminalKindIDNamespan" class="errorMsg" style="display: none"></span>
							<a  href="javascript:void(0)" onclick="showTerminalKindIDTree()"    class="ser_btn">请选择</a>
						</td>

						<td rowspan="10" align="center" width="200">
							<a id="submitBtn" href="javascript:void(0)" class="ser_btn" style="margin-bottom: 3px;">提交</a><br>
							<a id="reSetBtn" href="javascript:void(0)" class="ser_btn" style="margin-bottom: 3px;">重置</a><br/>
							<a id="cancelBtn" href="javascript:void(0)" class="ser_btn">取消</a>
						</td>
						
					</tr>
					<tr>
					    <td align="right"><span class="xin_red">*</span>工作单位：</td>
					    <td align="left">
<%--						   <select id="WorkUnitID" class="td_sel" formCheck="true" required="true" requiredError="必须输入项!"
                                     noselect="true" requiredError="请选择一项"></select>--%>
						    
						       <input type="text" id="workUnitIDName"  formCheck="true"  onclick="showWorkUnitAddTree()" class="td_input"
								required="true" requiredError="必须输入项!" noselect="true" requiredError="请选择一项"
								readonly="readonly"/> 
			      		       <input type="hidden" id="workUnitID1" />
						       <span id="workUnitIDNamespan" class="errorMsg" style="display: none"></span>
						       <a  href="javascript:void(0)" onclick="showWorkUnitAddTree()"  class="ser_btn">请选择</a>
						</td>
					    <td align="right"><span class="xin_red">*</span>SIM卡：</td>
<!--					    <td align="left">-->
<!--						    <select id="SimID" class="td_sel" formCheck="true" required="true" requiredError="必须输入项!"  noselect="true" requiredError="请选择一项"></select>-->
<!--						    <span id="SimIDspan" class="errorMsg" style="display: none"></span>-->
<!--						</td>-->

						<td align="left" width="240">
							<!--<select id="terminalId" class="td_sel"></select>-->
							<input type="text" id="simName" name="simName"   
								   class="td_input"
								   required="true" formCheck="true"    requiredError="请选择一项"
								    readonly="readonly"/> 
			      		    <input type="hidden" id="SimID" />
							<span id="simNamespan" class="errorMsg" style="display: none"></span>
							<a  href="javascript:void(0)" onclick="showSimTree()"    class="ser_btn">请选择</a>
						</td>
						
						
					</tr>
					
					<tr>
					    <td align="right">使用状态：</td>
					    <td align="left">
						   <select id="UseFlag" class="td_sel"></select>
						</td>
						<td align="right">签权码：</td>
						<td align="left">
							 <input type="text" name="SignCode" id="SignCode" class="td_input" size="50" onfocus="false"/>
						</td>
						
					</tr>	
					<tr>
						<td align="right">出厂批次：</td>
						<td align="left">
						    <input type="text" name="BatchNO" id="BatchNO" class="td_input" size="50"/>
						</td>
						<td align="right">平台唯一编号：</td>
						<td align="left">
						    <input type="text" name="PlatformTerminalID" id="PlatformTerminalID" class="td_input" size="50"/>
						</td>
						
					</tr>
					<tr>
						<td align="right">终端厂商唯一编号：</td>
						<td align="left">
						    <input type="text" name="ManufacturerTerminalID" id="ManufacturerTerminalID" class="td_input" size="50"/>
						</td>
						<td align="right">型号：</td>
						<td align="left">
						    <input type="text" name="Model_Type" id="Model_Type" class="td_input" size="50"/>
						</td>
					</tr>
					
				</table>
			</div>
			<table id="terminalList" style="display: none"></table>
	    </div>
		</div>
		</div>
		 <div id="dialogs" class="hiddiv" style="display: none;padding:5px;top:10px;">
			<iframe src="" id="dialogFrame" name="dialogFrame" width="100%"  height="100%" frameborder="0" scrolling="auto"></iframe>
		</div>
	</body>
</html>
