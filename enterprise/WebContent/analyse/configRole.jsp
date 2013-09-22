<%@ page language="java" contentType="text/html; charset=Utf-8"
	pageEncoding="Utf-8"%>
<%@ include file="/common/validateHead.jsp"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=Utf-8">
<title>Insert title here</title>
<%String roleId = request.getParameter("roleId"); %>
<script type="text/javascript">
	var roleId = <%=roleId%>;
</script>
<script type="text/javascript" src="${basePath}/js/jq/jquery.Query.js"></script>
<script type="text/javascript" src="${basePath}/js/analyse/authSet.js"></script>
<link href="<%=basePath%>css/body.css" rel="stylesheet" type="text/css" />
<link rel="stylesheet" type="text/css" href="${basePath}css/style.css">
</head>
<body>
<div id="cont_box">
	<div id="authDialog" align="center">
		<table class="maintable" width="100%">
			<tr>
				<td valign="top" width="33%">
					<fieldset>
						<legend>功能权限</legend>
						<div align="left" id="leftTd"
							style="height:295;width:240;OVERFLOW-Y: auto; OVERFLOW-X: hidden;padding-top: 0;vertical-align: top;">
							<ul id="fnctionAuthTree">
							</ul>
							<input type="hidden" value="2" id="roleType" />
						</div>
					</fieldset>
				</td>
				
			</tr>
			<tr>
				<td colspan="3" align="right" valign="top" style="padding-top: 0" height="25">
					<a id="saveBtn" href="javascript:void(0)" class="ser_btn" style="color: white;">保存</a>
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
					<a  href="javascript:void(0)" class="ser_btn" onclick="parent.$('#dialogTAs').dialog('close');" style="color: white;">取消</a>
				</td>
			</tr>
		</table>
	</div>
	</div>
</body>
</html>

