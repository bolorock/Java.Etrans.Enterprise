<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
%>
<html>
<head>
   <link rel="stylesheet" type="text/css"	href="<%=basePath%>js/easyui/themes/default/tree.css">
		<script type="text/javascript" src="<%=basePath%>js/jq/jquery-1.7.1.min.js"></script>
	<script type="text/javascript"	src="<%=basePath%>js/easyui/plugins/jquery.tree.js"></script>
		<script type="text/javascript" src="<%=basePath%>js/sys/platFormCheckConfig/workUnitTree.js"></script>
	
	<style type="text/css">
		.load{width: 100px; height: 16px; position: absolute; left: 20px; top: 80px  }
	</style>
	
</head>

<body>
		<div id="tip" style="display: none;">无数据</div>
		<input type="hidden" id="id" value="<%=request.getParameter("id") %>">
		<input type="hidden" id="isTransit" value="<%=request.getParameter("isTransit") %>">
		<div style="text-align: left;">
		
		<ul id="functionTree"></ul>
		</div>
		<div class="load">
			<img alt="" src="../../imgs/load.gif">
			正在加载...
		</div>
</body>
</html>