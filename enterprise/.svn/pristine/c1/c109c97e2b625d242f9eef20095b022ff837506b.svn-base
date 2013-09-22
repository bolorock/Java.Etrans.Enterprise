<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ include file="/common/validateHead.jsp"%>
<%@taglib prefix="auth"  uri="/auth-tags"  %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
	<head>
		    <title>用户信息</title>
			<script type="text/javascript" src="${basePath}js/sys/user/userList.js"></script>
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
                <td width="52"><a id="btnSearch" href="javascript:void(0)" class="ser_btn" style="color: white;">查询</a></td><!--
                 <td width="52"><a id="btnAddUserPanel" href="javascript:void(0)" class="ser_btn" style="color: white;">添加</a></td>
              --></tr>
            </table>
            
            <div id="divAddUserPanel" class="wDiv" style="width:100%;display: none;border: 1px solid #d0d0d0;">
        	      <div class="td_title">用户信息新增</div>
  	  				<form id="formAddUser" action="" >
		        	   <table  border="0" cellspacing="0" cellpadding="0">
			              <tr>
			                <td width="100" align="right"><span class="xin_red">*</span>用户名：</td>
			                <td width="240" align="left">
			                 <input id="txtName" name="Name" type="text" 
			                    class="td_input" style="width: 130px;"
								formCheck="true" 
								required="true" requiredError="请输入用户名称！" 
								noSpecialCaracters="true" noSpecialCaractersError="请输入中英文或数字！"
								 />
								<span id="txtNamespan" class="errorMsg" style="display: none"></span>
			                </td>
			                 <td width="100" align="right"><span class="xin_red">*</span>登陆名：</td>
			                <td width="150" align="left">
			                 <input id="txtUserName" name="UserName" type="text" 
			                    class="td_input" style="width: 130px;"
			                    formCheck="true" 
								required="true" requiredError="请输入登陆名！" 
								noSpecialCaracters="true" noSpecialCaractersError="请输入中英文或数字！"
								ajaxAction="sys/user/checkUserName.action" 
								ajaxActionError="已存在此名称，请重新输入！" />
								<span id="txtUserNamespan" class="errorMsg" style="display: none"></span>
			                </td>
			                <td width="200" align="center" rowspan="4" >
			                   <a id="btnAddUser" href="javascript:void(0)" class="ser_btn" style="margin-bottom: 3px;">提交</a>
			                	<br>
			                	<a id="btnAddUserCancle" href="javascript:void(0)" class="ser_btn">取消</a>
			                </td>
			              </tr>
			              <tr>
			                <td width="100" align="right"><span class="xin_red">*</span>密码：</td>
			                <td width="240" align="left">
			                 <input id="txtPassword" name="Password" type="password" 
			                  class="td_input" style="width: 130px;"
			                   formCheck="true" 
							   required="true" requiredError="请输入密码" 
							   textLength="6-10" valLengthError="长度必须在6到10个" />
							   <span id="txtPasswordspan" class="errorMsg" style="display: none"></span>
			                </td>
			                <td width="100" align="right"><span class="xin_red">*</span>确认密码：</td>
			                <td width="150" align="left">
			                 <input id="txtPasswordA" name="PasswordA" type="password" 
			                    class="td_input" style="width: 130px;"
			                    formCheck="true" 
							    required="true" requiredError="请输入密码" 
							    confirmpwd="txtPassword" confirmpwd="两次密码输入不一致！" />
							    <span id="txtPasswordAspan" class="errorMsg" style="display: none"></span>
			                </td>
			                 <td></td>
			              </tr>
			               <tr>
			                <td width="100" align="right"><span class="xin_red">*</span>账户启用时间：</td>
			                <td width="240" align="left">
			                 
			                 	<input id="txtRunTime" name="RunTime" type="text" onFocus="this.blur()" readonly="readonly"
			                 	class="td_input" 
			                 	formCheck="true" 
								required="true" requiredError="请选择账户启用时间！" 
			                 	style="width: 110px;" >
			                 	<img src="Images/time.jpg" width="20" height="23" style=""
							    onClick="WdatePicker({firstDayOfWeek:1,isShowWeek:true,el:document.getElementById('txtRunTime'),dateFmt:'yyyy-MM-dd HH:mm',minDate:'%y-%M-{%d-1}'})"/>
			                 <span id="txtRunTimespan" class="errorMsg" style="display: none"></span>
			                </td>
			                <td width="100" align="right"><span class="xin_red">*</span>账户过期时间：</td>
			                <td width="150" align="left">
			                 
			                 	<input id="txtOverTime" name="OverTime" type="text" onFocus="this.blur()" readonly="readonly"
			                 	class="td_input"
			                 	 formCheck="true" 
								required="true" requiredError="请选择账户过期时间！" 
			                 	 style="width: 110px;" >
			                 	<span id="txtOverTimespan" class="errorMsg" style="display: none"></span>
			                 	  <img src="Images/time.jpg" width="20" height="23" style="margin-top:5px "
							      onClick="WdatePicker({firstDayOfWeek:1,isShowWeek:true,el:document.getElementById('txtOverTime'),dateFmt:'yyyy-MM-dd HH:mm',minDate:'%y-%M-{%d-1}'})"/>
			                 
			                </td>
			                <td></td>
			              </tr>
			               <tr>
			                <td width="100" align="right"><span class="xin_red">*</span>用户类型：</td>
			                <td width="240" align="left">
			                <input type="radio" name="IsSuperUser" value="1">管理员
			                 	<input type="radio" name="IsSuperUser" value="0" checked="checked">普通用户
			                </td>
			                <td width="100" align="right"></td>
			                <td width="150" align="left"></td>
			                 <td></td>
			              </tr>
			              </table>
	            </form>
        	</div>
        	
        	
        	 <div id="divUpdateUserPanel" class="wDivEdit" style="width:100%;display: none;border: 1px solid #d0d0d0;">
        	   <div class="td_title">用户信息编辑</div>
	        	  
		        	<table border="0" cellspacing="10" cellpadding="0" id="editFrom" >
			              <tr>
			                <td width="100" align="right"><span class="xin_red">*</span>用户名：</td>
			                <td width="150" align="left">
			                  <input id="txtUpdateUserId" name="id" type="hidden" />
			                 <input id="txtUpdateName" name="Name" type="text" 
				                 class="td_input" style="width: 130px;"
				                 formCheck="true" 
								 required="true" requiredError="请输入用户名称！" 
								 noSpecialCaracters="true" noSpecialCaractersError="请输入中英文或数字！"
								  />
								 <span id="txtUpdateNamespan" class="errorMsg" style="display: none"></span>
			                </td>
			                 <td width="100" align="right"><span class="xin_red">*</span>登陆名：</td>
			                <td  width="240" align="left">
			                 <input id="txtUpdateUserName" name="UserName" type="text" 
				                 class="td_input" style="width: 130px;"
				                 formCheck="true" 
								 required="true" requiredError="请输入登陆名！" 
								 noSpecialCaracters="true" noSpecialCaractersError="请输入中英文或数字！" 
								 ajaxAction="sys/user/checkUserName.action" 
								 ajaxDataId="txtUpdateUserId" 
								 ajaxActionError="已存在此名称，请重新输入！" />
							  <span id="txtUpdateUserNamespan" class="errorMsg" style="display: none"></span>
			                </td>
			                <td width="200" align="center" rowspan="4" >
			                 
			                   <a id="btnUpdateUser" href="javascript:void(0)" class="ser_btn" style="margin-bottom: 3px;">提交</a>
			                	<br>
			                	<a id="btnUpdateUserCancle" href="javascript:void(0)" class="ser_btn">取消</a>
			                </td>
			              </tr>
			              
			                <tr>
			                <td width="100" align="right"><span class="xin_red">*</span>用户类型：</td>
			                <td width="240" align="left">
			                 
			                 	<input type="radio" name="IsSuperUser1" value="1">管理员
			                 	<input type="radio" name="IsSuperUser1" value="0">普通用户
			                 
			                </td>
			                  <td width="100" align="right"><span class="xin_red">*</span>用户状态：</td>
			                 <td  width="150" align="left">
			                   <input id="" type="radio" name="aStatus" value="0" >正常
			                   <input id="" type="radio" name="aStatus" value="1">失效
			                </td>
			                <td>
			                </td>
			              </tr>
			             <tr>
			                <td width="100" align="right"><span class="xin_red">*</span>账户启用时间：</td>
			                <td width="240" align="left">
			                 
			                 	<input id="txtUpdateRunTime" name="RunTime" type="text"  onFocus="this.blur()"
			                 	class="td_input"
			                 	formCheck="true" 
								required="true" requiredError="请选择账户启用时间！" 
			                 	 style="width: 110px;" >
			                 	 <span id="txtUpdateRunTimespan" class="errorMsg" style="display: none"></span>
			                 	<img src="Images/time.jpg" width="20" height="23" style=""
							    onClick="WdatePicker({firstDayOfWeek:1,isShowWeek:true,el:document.getElementById('txtUpdateRunTime'),dateFmt:'yyyy-MM-dd HH:mm',minDate:'%y-%M-{%d-1}'})"/>
			                 
			                </td>
			                <td width="100" align="right"><span class="xin_red">*</span>账户过期时间：</td>
			                <td width="150" align="left">
			                 	<input id="txtUpdateOverTime" name="OverTime" type="text"  onFocus="this.blur()"
			                 	class="td_input" 
			                 	 formCheck="true" 
								required="true" requiredError="请选择账户过期时间！" 
			                 	style="width: 110px;">
			                 	<span id="txtOverTimespan" class="errorMsg" style="display: none"></span>
			                 	  <img src="Images/time.jpg" width="20" height="23" style="margin-top:5px "
							      onClick="WdatePicker({firstDayOfWeek:1,isShowWeek:true,el:document.getElementById('txtUpdateOverTime'),dateFmt:'yyyy-MM-dd HH:mm',minDate:'%y-%M-{%d-1}'})"/>
			                 
			                </td>
			                <td>
			                </td>
			              </tr>
		            </table>
		        	   
	              
        	</div>
        	
        	
        	<div class="sys_ctr" style="margin-right: 1px;">
			<ul>
			    <auth:authorize operation="createUser">
				<li><a id="btnAddUserPanel" href="javascript:void(0)">新增</a></li>
				</auth:authorize>
				<auth:authorize operation="editUser">
				<li><a id="editBtn" href="javascript:void(0)">编辑</a></li>
				</auth:authorize>
		    </ul>
			</div>
           <table id="tbUsers" style="margin-top: 5px"></table>

</div>
</div>
</div>


		<div id="roleDlg" style="display: none;">
		        <table border="0" cellspacing="10" cellpadding="0"  id="roleTab">
		          <tr>
		             <td width="100" align="right" style="font-size: 15px;">请选择角色：</td>
		             <td width="150" align="left">
		                 <select id="slRoles" style="width: 180px"
		                    formCheck="true" required="true" 
		                    noselect="-1" requiredError="必须选择"></select>
		                 <span id="slRolesspan" class="errorMsg" style="display: none"></span>
		             </td>
		          </tr>
		          <tr>
		              <td colspan="2" align="center">
		                    <input id="txtUID" type="hidden">
			                <a id="btnUpdateRole" href="javascript:void(0)" class="btn" style="color: white;font-size: 12px;">确定</a>
				            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				    	    <a href="javascript:void(0)" class="btn" onclick="$('#roleDlg').dialog('close');" style="color: white;font-size: 12px;">取消</a>
			    	 </td>
		          </tr>
		        </table>
		</div>


<!-- 分配平台 -->
 	<div id="authDialog" style="display: none;overflow-y:auto;">
			<iframe src="#" id="roleFrame" name="roleFrame" width="300"  height="300" frameborder="0" scrolling="yes"></iframe>
		<div style="background-color: #f9f9f9;height: 30px; width=100%;margin-bottom:1px; padding-top: 10px; text-align: center;" >
			<a href="javascript:void(0)" class="btn" style="color: white;" onclick="roleFrame.window.functionAssign()">确定</a>
	        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
	    	<a href="javascript:void(0)" class="btn" onclick="$('#authDialog').dialog('close');">取消</a>
		</div>
      </div>
</body>
</html>