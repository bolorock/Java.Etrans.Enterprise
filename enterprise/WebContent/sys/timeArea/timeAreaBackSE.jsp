<%@ page contentType="text/html; charset=UTF-8"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
%>
<html>
	<head>
		<title>定时定区域查车</title>
		 <base href="<%=basePath%>"></base>
		<link href="<%=basePath%>/css/style.css" type="text/css" rel="stylesheet" />
		<script  type="text/javascript" src="<%=basePath%>js/datepicker/WdatePicker.js"></script>
		<script type="text/javascript" src="<%=basePath%>js/jq/jquery-1.7.1.min.js"></script>
		<script type="text/javascript" src="<%=basePath%>/js/sys/timeArea/timeAreaBackSE.js"></script>
	    <style type="text/css">
			<!--
			.STYLE1 {color: #FF0000}
			.STYLE2 {color: #0000FF}
			#timeTable th{background-color:#e4e4e4;}
			#timeTable td {border-color:#ddd;}
			body{margin-left:0;margin-right:0;margin-top:0;}
			table.form th {background-color:#e4e4e4;}
		    table.form tbody td {border-color:#ddd;}
			-->
        </style>
</head>

	<body>
		    <table border="0" align="center" cellpadding="0" cellspacing="0" width="100%"  bgcolor="#e4e4e4">
				<tr>
					<td width="70%" height="32" nowrap="nowrap"><div align="left">&nbsp;&nbsp;(<span class="STYLE1">*</span><span class="STYLE2">&nbsp;先在地图上用矩形查车选定区域,再选择时间段,即可直接查询该时段该区域内的车辆,可多时段多区域联合查询</span>&nbsp;<span class="STYLE1">*</span>)</div></td>
				    <td width="30%" nowrap="nowrap"><div align="left"><a href="javascript:void(0)" onclick="findTimeAreas();"><img src="<%=basePath%>imgs/look_up.gif" border="0"></a></div></td>
				</tr>
			</table>
			<div id="back" class="hiddiv" style="display: none;">
				<img alt="正在发送指令" src="<%=basePath%>imgs/load.gif">
				正在分析历史数据,请稍等......
			</div>
				<table id="timeTable" class="form" width="100%" >
					<tr>
					  <th nowrap height="36"><div align="center">区域</div></th>
					  <th nowrap height="36"><div align="center">开始时间</div></th>
					  <th nowrap><div align="center">结束时间</div></th>
					  <th nowrap="nowrap"><div align="center">开始经度</div></th>
					  <th nowrap="nowrap"><div align="center">开始纬度</div></th>
					  <th nowrap="nowrap"><div align="center">结束经度</div></th>
				      <th nowrap="nowrap"><div align="center">结束纬度</div></th>
				      <th nowrap="nowrap"><div align="center">删除</div></th>
				  </tr>
				  <tr><td colspan="8"><div id="divTd"></div></td></tr>
				</table>
			<div id="timeAreaTable" ></div> 
			
	</body>
</html>
