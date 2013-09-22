<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>

<html>
<head>

	<!--  
    <link rel="stylesheet" type="text/css"	href="${pageContext.request.contextPath}/js/easyui/themes/default/tree.css">
    <script type="text/javascript"	src="${pageContext.request.contextPath}/js/easyui/plugins/jquery.tree.js"></script>
    -->
	
	<script type="text/javascript"  src="${pageContext.request.contextPath}/js/jq/jquery-1.7.1.min.js"></script>
	<script type="text/javascript" src="${pageContext.request.contextPath}/js/util.js" ></script>
	
	<script type="text/javascript"	src="${pageContext.request.contextPath}/js/sys/role/functionMenu.js"></script>				
	
	<style type="text/css">
	.dl{
		
	}
	
		.dl dt 
		{
		 background:#508AC5;
		 width: 100%;
		 height: 32px;
		 line-height: 32px;
		 padding-left: 10px;
		 margin-bottom: 1px;
		}
		.dl dt a
		{
		 color:#fff; 
		 font-weight:600;
		 text-decoration: none;
		 font-size: 15px;
		}
		
		.dl dd
		{
			margin-left: -20px;
		}
		.dl dd ul
		{
			list-style: none;
			margin-left: -20px;
		}
		
		.authUl li
		{
			border-bottom:1px dashed #000;
		    height: 30px;
		    line-height: 30px;
		}
		.auth li
		{
			float: left;
			margin-right: 10px;
			height: 30px;
			line-height: 30px;
			border:none;
			font-size: 13px;
		}
		
		.auth li input
		{
			margin-left: 2px;
		}
		
		.auth .title
		{
		 color:#000; 
		 font-weight:600;
		 margin-right: 10px;
		}
		
		.load
		{
			position: absolute;
			left: 50%;
			height: 30%;
		}
	</style>
	
	
</head>


<body>

		
		<dl id="divContent" class="dl"></dl>
		
		<div id="tip" style="display: none;">无数据</div>
		<input type="hidden" id="id" value="<%=request.getParameter("id") %>">
		<div class="load" style="height: 32px; line-height: 32px">
			<img alt="" src="../../imgs/load.gif">请耐心等待...
		</div> 
		
		
		
		
</body>
</html>