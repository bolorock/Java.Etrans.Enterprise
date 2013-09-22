<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ page import="com.etrans.bubiao.sys.Constants"%>
<%@ page import="com.etrans.bubiao.auth.SessionUser"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
			
   request.setAttribute("basePath",basePath);	
   
   SessionUser user = new SessionUser(); //用户
   user = (SessionUser)request.getSession().getAttribute(Constants.LOGIN_USER);
   //用户资源权限
   String resources = "";
   try{
   if(user!=null){
	   resources = user.getResources();
   }
   }catch(Exception e){e.printStackTrace();}
   
   request.setAttribute("resources",resources);	
%>


<html xmlns="http://www.w3.org/1999/xhtml">

<base href="${basePath}"></base>

<link rel="stylesheet" type="text/css" href="${basePath}css/body.css">

<head>

<title>道路运输车辆卫星定位企业平台-广州亿程交通信息有限公司</title>
      
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta http-equiv="pragma" content="no-cache">
<meta http-equiv="cache-control" content="no-cache">
<meta http-equiv="expires" content="0">

<script type="text/javascript" src="${basePath}js/jq/jquery-1.7.1.min.js"></script>

<%--<link rel="stylesheet" type="text/css" href="${basePath}css/body.css">--%>
<link rel="stylesheet" href="${basePath}js/flexigrid/flexigrid.css" type="text/css">
<link rel="stylesheet" type="text/css" href="${basePath}js/easyui/themes/default/easyui.css">
<link rel="stylesheet" type="text/css" href="${basePath}js/easyui/themes/icon.css">
<link rel="stylesheet" href="${basePath}js/formvalidator/jquery.formValidator.css" type="text/css">
		
<script type="text/javascript" src="${basePath}js/formvalidator/jquery.formValidator.js"></script>
<script type="text/javascript" src="${basePath}js/util.js"></script>
<script type="text/javascript" src="${basePath}js/easyui/jquery.easyui.min.js"></script>
<script type="text/javascript" src="${basePath}js/flexigrid/flexigrid.js"></script>
<script type="text/javascript" src="${basePath}js/common/window.js"></script>
<script type="text/javascript" src="${basePath}js/common/initSelects.js"></script>

<!--[if IE 6]>
<link rel="stylesheet" type="text/css" href="Css/ie6_hack.css">
<![endif]--> 

<script type="text/javascript">
var resources='${resources}';
</script>

</head>

<body/>

</html>

