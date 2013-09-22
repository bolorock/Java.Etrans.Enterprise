<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ include file="/common/validateHead.jsp"%>
<%@taglib prefix="auth"  uri="/auth-tags"  %>
<%@ taglib prefix="s" uri="/struts-tags" %>
<%@page import="com.etrans.bubiao.sys.UserContext" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
	<head>			
			<%
			request.setAttribute("isSuper",String.valueOf(((SessionUser) request.getSession().getAttribute(Constants.LOGIN_USER)).getIsSuperUser()));
				boolean isRoot = UserContext. isBsRootUser();
			%>
		    <title>用户信息</title>
		    <link rel="stylesheet" type="text/css" href="${basePath}css/style.css">
		    <script type="text/javascript">
		    	var isBsRoot = <%=isRoot%>;
		    </script>
			<script type="text/javascript" src="${basePath}js/analyse/userList.js"></script>
			<script type="text/javascript" src="${basePath}js/sys/user/buildHtmlUtil.js"></script>
			<script type="text/javascript" src="${basePath}js/analyse/userRole.js"></script>
			<script type="text/javascript" src="${basePath}js/datepicker/WdatePicker.js"></script>
	
	</head>
	
<body>
<div id="cont_box">
	<div class="main">
		<div class="mon_cont">
        	<div class="E_Tit">用户信息</div>
            <table border="0" cellspacing="0" cellpadding="0" class="que_tab" style="margin-bottom: 10px">
              <tr>
                <td width="100" align="right">用户名：</td>
                <td width="150" align="left">
                <input id="txtQueryUserName"  type="text" class="mon_ser_text" 
	                style="width: 130px"
	                maxlength="50"
					onchange="value=value.replace(/[^0-9a-zA-Z\u4e00-\u9fa5]/g,'')" 
	                onbeforepaste="clipboardData.setData('text',clipboardData.getData('text').replace(/[^0-9a-zA-Z\u4e00-\u9fa5]/g,''))"/>
                </td>
                <td width="120">
                	<a id="btnSearch" href="javascript:void(0)" class="ser_btn" style="color: white;">查询</a>&nbsp;&nbsp;
                 <auth:authorize operation="createUser">

				 </auth:authorize>
                </td><!--
                 <td width="52"><a id="btnAddUserPanel" href="javascript:void(0)" class="ser_btn" style="color: white;">添加</a></td>
              --></tr>
            </table>
            
          
        	
           <table id="tbUsers" style="margin-top: 5px"></table>

</div>
</div>
</div>
<div id="roleDlg" style="display: none;">
	<div class='flexigrid'>
		<table id='roleList' cellpadding='0' cellspacing='0'>
		</table>
	</div>
</div>
</body>
</html>