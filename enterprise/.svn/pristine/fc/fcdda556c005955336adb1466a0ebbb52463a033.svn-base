<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ include file="/common/validateHead.jsp"%>
<html>
<head>
<link rel="stylesheet" type="text/css" href="${basePath}css/style.css">
<style type="text/css">
.input {
	width: 150px;
	height: 22px;
	font-size: 12px;
	color: #000;
	line-height: 22px
}
</style>
<script type="text/javascript" src="${basePath}/js/sys/user/passwrodUpdate.js"></script>
<script type="text/javascript" src="${basePath}/js/sys/user/formValidator.js"></script>
<base target="_self" />
</head>

<body>
	<form method="post" id="addForm" name="addForm">
	<div id="formTable" style= "overflow-y:auto;">
		<table width="100%" border="0" align="center" cellpadding="0" cellspacing="0" class="form">
			<tr class="even">
				<td class="tdLeft" style="width: 120px"><div align="right"><span class="mustfill">*</span>旧密码：</div></td>
				<td class="tdRight">
					<input type="password" name="oddPasswrod" id="txtOddPassword" class="input"> 
					 <span id="txtOddPasswordTip" style="color: red;"></span>
				</td>
			</tr>
			<tr class="odd">
				<td class="tdLeft"><div align="right"><span class="mustfill">*</span>新密码 ：</div></td>
				<td class="tdRight">
				<input type="password" name="password" id="txtPassword" 
					class="input"> 
					<span id="txtPasswordTip" style="color: red;"></span>
				</td>
			</tr>
			<tr class="even">
				<td class="tdLeft"><div align="right"><span class="mustfill">*</span>确认密码：</div></td>
				<td class="tdRight"><input type="password" name="password2" id="txtPassword2" 
				 	class="input" > 
					<span id="txtPassword2Tip" style="color: red;"></span>
				</td>
			</tr>
	    <tr class="odd">
	    	<td colspan="2" align="center">
	    	
	    		<input type="submit" value="保存" class="btn_customer" id="saveBut" />
										&nbsp;&nbsp;&nbsp;
				<input type="button" value="取消" class="btn_customer" onclick="parent.$('#dialogs').dialog('close');" id="cancelBut" />
										&nbsp;&nbsp;&nbsp;
	    	</td>
	    </tr>
		</table>
		</div>
	</form>
	
</body>
</html>