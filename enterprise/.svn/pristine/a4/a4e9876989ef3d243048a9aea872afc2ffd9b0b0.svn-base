<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ include file="/common/validateHead.jsp"%>
<%@taglib prefix="auth"  uri="/auth-tags"  %>
<%@ taglib prefix="s" uri="/struts-tags" %>
<%@page import="com.etrans.bubiao.sys.UserContext" %>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
	<head>			
			<%
			request.setAttribute("isSuper",String.valueOf(((SessionUser) request.getSession().getAttribute(Constants.LOGIN_USER)).getIsSuperUser()));
				boolean isRoot = UserContext. isBsRootUser();
			%>
		    <title>用户信息</title>
		    <link rel="stylesheet" type="text/css" href="${basePath}css/style.css">
		    
			<script type="text/javascript" src="${basePath}js/sys/user/userList.js"></script>
			<script type="text/javascript" src="${basePath}js/sys/user/buildHtmlUtil.js"></script>
			<script type="text/javascript" src="${basePath}js/sys/user/userRole.js"></script>
			<script type="text/javascript" src="${basePath}js/datepicker/WdatePicker.js"></script>
			<script type="text/javascript"	src="${basePath}js/sys/tree/treeWorkunit.js"></script>
		    <script type="text/javascript"	src="${basePath}js/sys/tree/treeAddWorkunit.js"></script>	
	
	</head>
	
<body>


<div style="width: 100%" id="cont_box">
	<div class="main">
		<div class="mon_cont">
                 <div class="td_title"><strong>第三步：</strong>分配权限</div>
                
					<div id="authDialog" align="center">
						<table class="maintable" width="100%">
							<tr>
								<td valign="top" width="50%">
									<fieldset>
										<legend>功能权限</legend>
										<div align="left" id="leftTd"
											style="height:295;width:230;OVERFLOW-Y: auto; OVERFLOW-X: hidden;padding-top: 0;vertical-align: top;">
											<ul id="fnctionAuthTree">
											</ul>
											<input type="hidden" value="1" id="roleType" />
										</div>
									</fieldset>
								</td>
								<td valign="top" width="50%">
									<fieldset>
										<legend>指令权限</legend>
										<div align="left" id="leftTd"
											style="height:295;width:230;OVERFLOW-Y: auto; OVERFLOW-X: hidden;padding-top: 0;vertical-align: top;">
										    <ul id="commandAuthTree">
											</ul>
										</div>
									</fieldset>	
								</td>
							</tr>
						</table>
					</div>
	      </div>		
     </div>              
 </div>
        
          
		
 

</html>