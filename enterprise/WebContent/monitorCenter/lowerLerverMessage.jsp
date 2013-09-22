<%@ page language="java" contentType="text/html; charset=gbk" pageEncoding="gbk"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>

  <head>
   <title>终端信息</title>
   <base href="<%=basePath%>"></base>
	<link href="<%=basePath%>css/command.css" type="text/css" rel="stylesheet" />
	 <script type="text/javascript" src="<%=basePath%>js/jq/jquery-1.7.1.min.js"></script>
	<script language="javascript" type="text/javascript" src="<%=basePath%>js/common/jsjava-2.0.js"></script>
	<script type="text/javascript" src="<%=basePath%>js/monitorCenter/lowerLerverMessage.js"></script>
	<style type="text/css">
		.input{width: 150px; height: 22px;font-size: 12px; color: #000;line-height: 22px}
	</style>
	
  </head>
  
  <body style="margin-left: 10px">
  
  
		       <table cellpadding="0" cellspacing="0" class="form" id="alarmList">
		       		<tr>
			       		 <th nowrap="nowrap">车牌号</th>
			       		  <th nowrap="nowrap">时间</th>
			       		 <th>描述</th>
		       		</tr>
		       		
		       </table>
   
   
  </body>
</html>
