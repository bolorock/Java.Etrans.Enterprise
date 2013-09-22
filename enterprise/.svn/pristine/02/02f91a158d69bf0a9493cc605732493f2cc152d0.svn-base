<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ page import="com.etrans.bubiao.sys.Constants"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
	String vehicleId=request.getParameter("vehicleId");
	//String registrationNo=request.getParameter("registrationNo");
	String registrationNo = new String(request.getParameter("registrationNo").getBytes("ISO-8859-1"),"utf-8");
%>
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml">
<head>
<base href="<%=basePath%>"></base>
<title>企业中心</title>
<meta http-equiv=Content-Type content=text/html;charset=utf-8>
<meta http-equiv="pragma" content="no-cache">
<meta http-equiv="cache-control" content="no-cache">
<meta http-equiv="expires" content="0">
<meta http-equiv="description" content="企业中心">	
<link rel="stylesheet" type="text/css" href="<%=basePath%>css/body.css">
<script type="text/javascript" charset="GB2312"	src="http://10.184.2.215:7001/PGIS_S_TileMap/js/EzMapAPI.js"></script>
<script type="text/javascript" src="<%=basePath%>js/jq/jquery-1.7.1.min.js"></script>
<script type="text/javascript" src="<%=basePath%>js/monitorCenter/P_trackBack.js"></script>
<script type="text/javascript" src="<%=basePath%>js/datepicker/WdatePicker.js"></script>

</head>
<body onload="load('<%=vehicleId %>');">

<div id="cont_box">
<div class="main">
 <div class="mon_cont">
           <div id="map"></div>
           <table border="0" align="center" cellpadding="0" cellspacing="0" width="100%">
				<tr>
					<td colspan="3" valign="bottom" nowrap="nowrap">
					<table width="100%" border="0" cellspacing="0" cellpadding="0" class="mon_t_01">
							<tr >
							<td nowrap height="36">回放车辆：<%=registrationNo %></td>
								<td width="14%" nowrap height="36">
									&nbsp;&nbsp; 开始：
									<input type="text" id="beginTime" name="beginTime" class="inputnone" size="20" onFocus="this.blur()" readonly="readonly" />
									<img onClick="WdatePicker({firstDayOfWeek:1,isShowWeek:true,el:document.getElementById('beginTime'),dateFmt:'yyyy-M-d H:m:s',maxDate:'%y-%M-%d'})"
										src="Images/time.jpg" width="17" height="22" align="absmiddle">
								</td>
								<td width="13%" nowrap>
									&nbsp;&nbsp;结束：
									<input type="text" id="endTime" name="endTime" class="inputnone" size="20" onFocus="this.blur()" readonly="readonly" />
									<img onClick="WdatePicker({firstDayOfWeek:1,isShowWeek:true,el:document.getElementById('endTime'),dateFmt:'yyyy-M-d H:m:s',maxDate:'%y-%M-%d'})"
										src="Images/time.jpg" width="17" height="22" align="absmiddle">
								</td>
								<td width="19%" nowrap="nowrap">
								<div align="center">
							    &nbsp;&nbsp; 回放速度：
										<select id="playRate" name="playRate">
										<option value="200">0.2秒</option>
										<option value="500">0.5秒</option>
										<option value="1000">1秒</option>
										<option value="2000">2秒</option>
										</select>
								</div>
								</td>
								<td>
								<div align="left">
								  <input type="button" id="playback" class="btn_map" onClick="findPlayBackTrack();" value="播放"/> 	
								  <input type="button"  class="btn_map" onClick="backMonitor('<%=basePath%>');" value="返回监控"/> 	
								   <input type="button"  class="btn_map" onClick="exportTrack('<%=basePath%>');" value="导出"/> 	
								</div>
								</td>
							</tr>
						</table>
					</td>
				</tr>
				<tr>
				<td align="center">
 	        <div id="back"  style="display: none; ">
				 <img alt="正在分析轨迹数据" src="<%=basePath %>imgs/load.gif">
				正在分析轨迹数据,请稍等......
		   	</div>
	     	<div id="finish">
		 	</div></td>
				</tr>
			</table>
  </div>
 </div>
 </div>
 
</body>
</html>
