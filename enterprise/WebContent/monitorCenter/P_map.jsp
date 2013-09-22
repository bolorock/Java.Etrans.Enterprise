<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ page import="com.etrans.bubiao.sys.Constants"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
%>
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml">
<head>
<base href="<%=basePath%>"></base>
<title>企业中心</title>
<meta http-equiv=Content-Type content=text/html;charset=utf-8>
<meta http-equiv="pragma" content="no-cache">
<meta http-equiv="cache-control" content="no-cache">
<meta http-equiv="expires" content="0">
<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
<meta http-equiv="description" content="企业中心">	
<link rel="stylesheet" type="text/css" href="<%=basePath%>css/body.css"> 
<script type="text/javascript" charset="GB2312"	src="http://10.184.2.215:7001/PGIS_S_TileMap/js/EzMapAPI.js"></script>
<script type="text/javascript" src="<%=basePath%>js/jq/jquery-1.7.1.min.js"></script>
<script type="text/javascript" src="<%=basePath%>js/HashMap.js"></script>
<script type="text/javascript" src="<%=basePath%>js/monitorCenter/PGis.js"></script>
<script type="text/javascript" src="<%=basePath%>js/easyui/jquery.easyui.min.js"></script>
<link rel="stylesheet" type="text/css" href="${basePath}js/easyui/themes/default/easyui.css">
<style>
 v\:*{
    BEHAVIOR:url(#default#VML)
 }
</style>
</head>
<body onLoad="load()">
<div id="cont_box">
<div class="main">
 <div class="mon_cont">
            <div class="map_list">
            	<ul>
                	<li class="map_g_01"  title="放大" onclick="mZoom(0)">放大</li>
                    <li class="map_g_02"  title="缩小" onclick="mZoom(1)">缩小</li>
                    <li class="map_g_03"  title="打印" onclick="printMap()">打印</li>
                    <li class="map_g_04" title="测量"  onclick="measure(1)">测量</li>
                    <li class="map_g_05" title="清除"  onclick="mapClearAll()">清除</li>
                    <li class="map_g_06" title="查看全图" onclick="AllMap()">全图</li>
                    <li class="map_g_07" title="区域查车" onclick="findRectangleAreaCar()">查车</li>
                    <li class="map_g_08" onclick="manyou()">漫游</li>
                    <li class="map_g_09" title="全屏" id="allScreen">全屏</li>
                </ul>
            </div>
           <div id="map" style="width:100%;height: 500px"></div>
           <div style="overflow-x: scroll; overflow-y: scroll; height: 131px; width: 100%;">
            <table width="100%" border="0" cellspacing="0" cellpadding="0" id="mytable" class="mon_t_infor">
              <tr class="mon_t_01">
                <td class="m_t" nowrap="nowrap">车牌</td>
                <td class="m_t" nowrap="nowrap">车牌颜色</td>
                <td class="m_t" nowrap="nowrap" title="GPS速度(Km/h)">速度1</td>
                <td class="m_t" nowrap="nowrap" title="行驶记录速度(Km/h)">速度2</td>
                <td class="m_t" nowrap="nowrap">精度</td>
                 <td class="m_t" nowrap="nowrap" title="(Km)">里程</td>
                <td class="m_t" nowrap="nowrap">详细信息</td>
                <td class="m_t" nowrap="nowrap">地址</td>
                <td class="m_t" nowrap="nowrap">定位时间</td>
                <td nowrap="nowrap">操作</td>
              </tr>
            </table>
            </div>
  </div>
 </div>
 </div>
		
</body>
</html>
