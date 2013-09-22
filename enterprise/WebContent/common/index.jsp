<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ page import="com.etrans.bubiao.sys.Constants"%>
<%@ page import="com.etrans.bubiao.auth.SessionUser"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme() + "://"
		+ request.getServerName() + ":" + request.getServerPort()
		+ path + "/";
	SessionUser user = new SessionUser(); //用户
	user = (SessionUser)request.getSession().getAttribute(Constants.LOGIN_USER);
	if(user == null)
	{
		response.sendRedirect("../");
	}
%>
<html>
<head>
<title>道路运输车辆卫星定位企业平台</title>
<meta http-equiv=Content-Type content=text/html;charset=utf-8>
<link rel="shortcut icon" href="<%=basePath%>favicon.ico" mce_href="<%=basePath%>favicon.ico" type="image/x-icon">
</head>
<frameset rows="*" marginheight="0" marginwidth="0" topmargin="0" leftmargin="0">
       <frame name="divframe" src="index2.jsp" marginheight="0" marginwidth="0" topmargin="0" leftmargin="0" noresize scrolling="no"/>
</frameset>
 <body>
 </body>
</html>
