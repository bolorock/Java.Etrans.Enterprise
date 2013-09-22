<%@ page language="java" pageEncoding="UTF-8"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <title>点线区域管理</title>
    <base href="<%=basePath%>"></base>
    <link rel="stylesheet" type="text/css" href="<%=basePath%>css/body.css">
	<link href="<%=basePath%>css/style.css" type="text/css" rel="stylesheet" />
	<script type="text/javascript" src="<%=basePath%>js/jq/jquery-1.7.1.min.js"></script>
	
	<script type="text/javascript" src="<%=basePath%>js/sys/areaManage/tr/areaManageList.js"></script>
	<style type="text/css">
		html,body{margin:0;padding:0;background-color:#fff;}
		table.form th {background-color:#e4e4e4;}
		table.form tbody td {border-color:#ddd;}
	</style>
  </head>
  <body>
  <table width="100%" border="0" cellspacing="0" cellpadding="0"> 
    <tr>
      <td valign="top">
      	<div id="pointTable"></div>
	  </td>
      <td valign="top">&nbsp;</td>
      <td valign="top">
      	<div id="routeTable"></div>
      </td>
      <td valign="top">&nbsp;</td>
      <td valign="top">
      	<div id="rectangleTable"></div>
      </td>
      <td valign="top">&nbsp;</td>
      <td valign="top">
      	<div id="roundTable"></div>
      </td>
      <td valign="top">&nbsp;</td>
      <td valign="top">
      	<div id="polygonTable"></div>
     </td>
    </tr>
  </table>
  </body>
</html>
