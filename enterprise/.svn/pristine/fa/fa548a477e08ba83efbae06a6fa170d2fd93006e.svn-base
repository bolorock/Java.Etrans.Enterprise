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
		    <title>普通用户管理</title>
		    <link rel="stylesheet" type="text/css" href="${basePath}css/style.css">
		    
				
	
	</head>
	
<body>


<div style="width: 100%" id="cont_box">
	<div class="main">
		<div class="mon_cont">
           
            
                 <div class="td_title"><strong>2.</strong>新建角色</div>
  	  				<form  action="">
		        	   <table align="center" id="formAddRole">
			              <tr>
			                <td width="200" align="right"><span class="xin_red">*</span>角色名称：</td>
			                <td width="200" align="left">
			                 <input id="txtRoleId" name="id" type="hidden" >
			                 <input id="txtAddRoleName" name="txtAddRoleName" type="text"  size="50"
			                    class="td_input" style="width: 130px;"
								formCheck="true" 
								required="true" requiredError="请输入角色名称！" 
								noSpecialCaracters="true" noSpecialCaractersError="请输入中英文或数字！"
								ajaxAction="sys/role/checkRoleName.action" 
								ajaxDataId="roleId" 
								ajaxActionError="已存在此名称，请重新输入！" />
								<span id="txtAddRoleNamespan" class="errorMsg" style="display: none"></span>
			                </td>
			                
			                 </tr>
			                 
			                <tr>
			                <td width="200" align="right"><span class="xin_red">*</span>角色简称：</td>
			                <td width="200" align="left">
			                 <input id="shortRoleName" name="shortRoleName" type="text"  size="50"
			                    class="td_input" style="width: 130px;"
								formCheck="true" 
								required="true" 
								requiredError="请输入角色简称！" 
								 />
								<span id="shortRoleNamespan" class="errorMsg" style="display: none"></span>
			                </td>
			               
			                 </tr>
			               
		            </table>
	            </form>
        	</div>
        	
        	
		        	   
	              
        	</div>
        
          
		
</div>

 

</html>