<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ page import="com.etrans.bubiao.sys.Constants"%>
<%@ page import="com.etrans.bubiao.auth.SessionUser"%>
<%
String pathRedirect ="";
String path = request.getContextPath();
String basePath = request.getScheme() + "://"
		+ request.getServerName() + ":" + request.getServerPort()
		+ path + "/";
	SessionUser user = new SessionUser(); //用户
	user = (SessionUser)request.getSession().getAttribute(Constants.LOGIN_USER);
	if(user == null)
	{
		response.sendRedirect("../");
	}else{
		pathRedirect = basePath+"pub/loginAnalyse.action?username="+user.getUserName()+"&password="+user.getPassword();
	}
%>
<html>
<head>
<title>道路运输车辆卫星定位企业平台</title>
<meta http-equiv=Content-Type content=text/html;charset=utf-8>
<script type="text/javascript">

 var feature="dialogWidth:1420px;dialogHeight:1200px;status:no;help:no";   
 window.showModalDialog("<%=pathRedirect %>",null,feature);

</script>
</head>
 <body >
 <div id="dialogs"  class="hiddiv" style="display: none;padding:5px;top:10px;">
		<iframe src="" id="dialogFrame" name="dialogFrame" width="100%"  height="100%" frameborder="0" scrolling="auto"></iframe>
</div>
 </body>
</html>
