<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ include file="/common/validateHead.jsp"%>
<%@taglib prefix="auth"  uri="/auth-tags"%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
	<head>
		<title>功能菜单管理</title>
		<link rel="stylesheet" type="text/css" href="${basePath}css/style.css">
		<script type="text/javascript" src="${basePath}js/easyui/plugins/jquery.tree.js"></script>
		<script type="text/javascript" src="${basePath}js/sys/functionMenu/functionMenuList.js"></script>
	</head>

	<body>
	
		<div style="width: 100%" id="cont_box">
		<div class="main">
		<div class="mon_cont" style= "overflow-y:auto;">
			<div class="E_Tit">功能菜单管理</div>
            
            <table width="100%">
			<tbody>
				<tr class="odd">
					<td width="40%" height="410" class="even" valign="top">
						<div style= "overflow-y:auto;height:410px;width: 100%">
						<table class="form" height="410">
							<tbody>
								<tr class="odd">
									<td width="50%" class="even" valign="top">
										<div align="left" id="leftTd" style= "OVERFLOW-Y:auto;OVERFLOW-X:hidden;">
											<ul id="functionTree">
											</ul>
										</div>
									</td>
								</tr>
							</tbody>
						</table>
						</div>
					</td>
					<td width="60%" class="even" valign="top" height="410">
						<div id="formTable" style= "overflow-y:auto;height:410px;width: 100%">
						<table class="form" height="410">
							<tr>
								<td width="25%" class="tdLeft" nowrap="nowrap">
									<div align="right">
										<span class="mustfill">*</span>功能名称：
									</div>
								</td>
								<td width="75%" class="tdRight">
									<div align="left">
										<input type="text" id="functionName" name="functionName" size="35" maxlength="100"
											formCheck="true" 
											required="true" requiredError="请输入功能名称！"
											textLength="0-32" valLengthError="功能名称过长, 请重新输入!"/>
										<span id="functionNamespan" class="errorMsg" style="display: none"></span>
									</div>
								</td>
							</tr>
							<tr>
								<td class="tdLeft" nowrap="nowrap">
									<div align="right">
										<span class="mustfill">*</span>功能代码：
									</div>
								</td>
								<td class="tdRight">
									<div align="left">
										<input type="text" id="functionCode"  name="functionCode" size="35" maxlength="100"
											formCheck="true" 
											required="true" requiredError="请输入功能代码！"
											textLength="0-64" valLengthError="功能代码过长, 请重新输入!"/>
										<span id="functionCodespan" class="errorMsg" style="display: none"></span>
									</div>
								</td>
							</tr>
							<tr>
								<td class="tdLeft" nowrap="nowrap">
									<div align="right">
										功能图标：
									</div>
								</td>
								<td class="tdRight">
									<div align="left">
										<input type="text" id="functionImg"  name="functionImg" size="35" maxlength="200"/>
									</div>
								</td>
							</tr>
							<tr>
								<td class="tdLeft" nowrap="nowrap">
									<div align="right">
										<span class="mustfill">*</span>功能类型：
									</div>
								</td>
								<td class="tdRight">
									<div align="left">
										<select name="functionType" id="functionType">
											<option value="MENU">
												菜单
											</option>
											<option value="RESOURCE">
												资源
											</option>
										</select>
									</div>
								</td>
							</tr>
							<tr>
								<td class="tdLeft" nowrap="nowrap" rowspan="2">
									<div align="right">
										<span class="mustfill">*</span>程序集：
									</div>
								</td>
								<td class="tdRight">
									<div align="center" style="color: #0167B2; padding-bottom: 2px">
										<div align="left">
											当前程序集列表
											<span id="assemblyNameListspan" class="errorMsg" style="display: none"></span>
										</div>
									</div>
									<div id="assemblyNameList" align="left"></div>
								</td>
							</tr>
							<tr>
								<td class="tdRight">
									<div align="left">
										<input type="text" name="" size="35" maxlength="200" id="assemblyName" class="inputnone" />
										&nbsp;
										<input type="button" value="添加" class="btn_customer" id="assemblyBut" style="height:22px;line-height:22px;"/>
									</div>
								</td>
							</tr>
							<tr>
								<td class="tdLeft" nowrap="nowrap">
									<div align="right">
										<span class="mustfill">*</span>显示序号：
									</div>
								</td>
								<td class="tdRight">
									<div align="left">
										<input type="text" name="" size="8" maxlength="4"
											id="ordering" class="inputnone"
											formCheck="true" 
											required="true" requiredError="请输入显示序号！"
											integer="true" integerError="请输入整数！"/>
										<span id="orderingspan" class="errorMsg" style="display: none"></span>
									</div>
								</td>
							</tr>
							<tr>
								<td class="tdLeft" nowrap="nowrap">
									<div align="right">
										<span class="mustfill">*</span>状态：
									</div>
								</td>
								<td class="tdRight">
									<div align="left">
										<select name="" id="state" class="selectnone">
											<option value="ENABLED">
												有效
											</option>
											<option value="DISABLED">
												无效
											</option>
										</select>
									</div>
								</td>
							</tr>
							<tr>
								<td class="tdLeft" nowrap="nowrap">
									<div align="right">
										描述：
									</div>
								</td>
								<td class="tdRight">
									<div align="left">
										<textarea name="" cols="50" rows="3" id="remark"></textarea>
										<input type="hidden" id="parentFuncId" />
									</div>
								</td>
							</tr>
							<tr>
								<td colspan="2" class="tdButton" align="center">
									<div align="center">
										<auth:authorize operation="insertFunctionsMenu">
											<input type="button" value="插入" class="btn_customer" id="insertBut" />
											&nbsp;&nbsp;&nbsp;
										</auth:authorize>
										<auth:authorize operation="updateFunctionsMenu">
											<input type="button" value="编辑" class="btn_customer" id="modifyBut" />
											&nbsp;&nbsp;&nbsp;
										</auth:authorize>
										<auth:authorize operation="deleteFunctionsMenu">
											<input type="button" value="删除" class="btn_customer" id="deleteBut" />
											&nbsp;&nbsp;&nbsp;
										</auth:authorize>
										<input type="button" value="保存" class="btn_customer" id="saveBut" />
										&nbsp;&nbsp;&nbsp;
										<input type="button" value="取消" class="btn_customer" id="cancelBut" />
										&nbsp;&nbsp;&nbsp;
										<auth:authorize operation="insertFunctionsMenu">
											<input type="button" value="添加顶级功能" class="btn_customer" id="addTopFuncBut" style="width: 100px;"/>
										</auth:authorize>
									</div>
								</td>
							</tr>
						</table>
						</div>
					</td>
				</tr>
			</tbody>
		</table>
            
		</div>
		</div>
		</div>
	</body>
</html>
