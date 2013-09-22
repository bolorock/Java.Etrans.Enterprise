<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ include file="/common/validateHead.jsp"%>

<html xmlns:v="urn:schemas-microsoft-com:vml">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
	<meta http-equiv="Content-Type" content="text/css; charset=UTF-8" />
	<meta http-equiv="Content-Type" content="text/javascript; charset=UTF-8" />
	<link rel="stylesheet" type="text/css" href="${basePath}css/main.css">
	<title>地图示例</title>
	<style type="text/css">
		<!--
			v\: * { Behavior: url(#default#VML); }
		-->
	</style>
	<link rel="stylesheet" type="text/css" href="${basePath}css/body.css">
	
    <script type="text/javascript" language="javascript" src="<%=Constants.MAP_BASE_URL%>/SE_JSAPI?&uid=<%=Constants.MAP_UID %>"></script>	
	
	<script type="text/javascript" src="<%=basePath%>js/jq/jquery-1.7.1.min.js"></script>
	
	<script type="text/javascript" language="javascript" src="${basePath}js/sys/areaManage/tr/main.js"></script>
	<script type="text/javascript" language="javascript" src="${basePath}js/sys/areaManage/tr/addManage.js"></script>
	<script type="text/javascript" language="javascript" src="${basePath}js/localcars.js"></script>
 	
</head>
	<body style="overflow-x: hidden;" onload="loadMap()">
	<div id="cont_box">
	<div class="main">
        <div class="mon_cont">
        	<div class="E_Tit">点线区域管理</div>
	 <table cellpadding="0" cellspacing="0" width="100%" border="0" height="100%"><tr><td>
	 <!-- 地图区域存放面板容器 -->
		<div id="tool" style="overflow:hidden; z-index:1;">
		   <table border="0" cellpadding="0" cellspacing="0">
			  <tr>
			    <td><a href="javascript:;" target="_top" onclick="AllMap();MM_nbGroup('down','group1','AllMapnor','mapgis/TileAjax/images/mapTools/AllMap_key.gif',1)" onmouseover="MM_nbGroup('over','AllMapnor','mapgis/TileAjax/images/mapTools/AllMap_key.gif','',1)" onmouseout="MM_nbGroup('out')"><img src="mapgis/TileAjax/images/mapTools/AllMap_nor.gif" alt="" name="AllMapnor" width="56" height="27" border="0" id="AllMapnor" onload="" /></a></td>
			    <td><a href="javascript:;" target="_top" onclick="mZoom(0);MM_nbGroup('down','group1','Maxnor','mapgis/TileAjax/images/mapTools/Max_key.gif',1)" onmouseover="MM_nbGroup('over','Maxnor','mapgis/TileAjax/images/mapTools/Max_key.gif','',1)" onmouseout="MM_nbGroup('out')"><img src="mapgis/TileAjax/images/mapTools/Max_nor.gif" alt="" name="Maxnor" width="56" height="27" border="0" id="Maxnor" onload="" /></a></td>
			    <td><a href="javascript:;" target="_top" onclick="mZoom(1);MM_nbGroup('down','group1','Minnor','mapgis/TileAjax/images/mapTools/Min_key.gif',1)" onmouseover="MM_nbGroup('over','Minnor','mapgis/TileAjax/images/mapTools/Min_key.gif','',1)" onmouseout="MM_nbGroup('out')"><img src="mapgis/TileAjax/images/mapTools/Min_nor.gif" alt="" name="Minnor" width="56" height="27" border="0" id="Minnor" onload="" /></a></td>
			    <td><a href="javascript:;" target="_top" onclick="ePoint();MM_nbGroup('down','group1','bznor','mapgis/TileAjax/images/mapTools/bz_key.gif',1)" onmouseover="MM_nbGroup('over','bznor','mapgis/TileAjax/images/mapTools/bz_key.gif','',1)" onmouseout="MM_nbGroup('out')"><img src="mapgis/TileAjax/images/mapTools/bz_nor.gif" alt="" name="bznor" width="56" height="27" border="0" id="bznor" onload="" /></a></td>
			    <td><a href="javascript:;" target="_top" onclick="ePolyLine();MM_nbGroup('down','group1','linenor','mapgis/TileAjax/images/mapTools/line_key.gif',1)" onmouseover="MM_nbGroup('over','linenor','mapgis/TileAjax/images/mapTools/line_key.gif','',1)" onmouseout="MM_nbGroup('out')"><img src="mapgis/TileAjax/images/mapTools/line_nor.gif" alt="" name="linenor" width="56" height="27" border="0" id="linenor" onload="" /></a></td>
			    <td><a href="javascript:;" target="_top" onclick="ePolygon();MM_nbGroup('down','group1','dbnor','mapgis/TileAjax/images/mapTools/db_key.gif',1)" onmouseover="MM_nbGroup('over','dbnor','mapgis/TileAjax/images/mapTools/db_key.gif','',1)" onmouseout="MM_nbGroup('out')"><img src="mapgis/TileAjax/images/mapTools/db_nor.gif" alt="" name="dbnor" width="56" height="27" border="0" id="dbnor" onload="" /></a></td>
			    <td><a href="javascript:;" target="_top" onclick="rectLine();MM_nbGroup('down','group1','Regnor','mapgis/TileAjax/images/mapTools/Reg_key.gif',1)" onmouseover="MM_nbGroup('over','Regnor','mapgis/TileAjax/images/mapTools/Reg_key.gif','',1)" onmouseout="MM_nbGroup('out')"><img src="mapgis/TileAjax/images/mapTools/Reg_nor.gif" alt="" name="Regnor" width="56" height="27" border="0" id="Regnor" onload="" /></a></td>
			    <td><a href="javascript:;" target="_top" onclick="eCircle();MM_nbGroup('down','group1','Cinor','mapgis/TileAjax/images/mapTools/ci_key.gif',1)" onmouseover="MM_nbGroup('over','Cinor','mapgis/TileAjax/images/mapTools/ci_key.gif','',1)" onmouseout="MM_nbGroup('out')"><img src="mapgis/TileAjax/images/mapTools/Ci_nor.gif" alt="" name="Cinor" width="56" height="27" border="0" id="Cinor" onload="" /></a></td>
			  </tr>
			</table>
		</div>
     </td></tr><tr><td height="220">
	 <div id="mapPanel"></div>
	  </td></tr><tr><td valign="top">
		 	<iframe src="<%=basePath%>sys/areaManage/areaManageListTr.jsp" id="areaFrame" name="areaFrame" width="100%" style="height:100px;" frameborder="0" scrolling="yes"  scrolling="auto"></iframe>
			<div id="pointPanel" style=" background:#FFFFFF;border:#e1f2ff 1px;font-size:12px;position:absolute;top:0px;left:0px;width:175px; height:110px;z-index:9909;display:none; class="infobar">
			  <table sytle="font-size:12px;" width="175" height="98" border="0" cellpadding="0" cellspacing="1">
			    <tr>
			      <td height="21" colspan="2" background="<%=basePath%>imgs/tree/topbg.gif"><table width="100%" border="0" cellspacing="0" cellpadding="0">
			        <tr  style="font-weight:bold;color:#FFFFFF;font-size:12px;">
			          <td width="80%">兴趣点</td>
			          <td width="20%"><a href="javascript:void(0)" onClick="$('#pointPanel').css('display','none');">关闭</a></td>
			        </tr>
			      </table></td>
			    </tr>
			    <tr style="font-size:12px;">
				  <td width="8">&nbsp;</td>
			      <td width="164"> 名称：<input id="name" name="name" size="14"/></td>
			      
			    </tr>
			    <tr style="font-size:12px;">
				  <td>&nbsp;</td>
			      <td colspan="2"> 经度：<input id="longitude" name="longitude" size="14" /></td>
			    </tr>
			    <tr style="font-size:12px;">
				  <td>&nbsp;</td>
			      <td colspan="2"> 纬度：<input id="latitude" name="latitude" size="14"/></td>
			    </tr>
				<tr>
			      <td colspan="2"><div style="float:right"><input type="image" src="<%=basePath%>imgs/tree/save.gif" value=" 提 交 " onClick="savePoint();" /></div></td>
			    </tr>
			  </table>
			</div>
	</td></tr></table>


<div id="linePanel" style=" background:#FFFFFF;border:#e1f2ff 1px;font-size:12px;position:absolute;top:0px;left:0px;width:175px; height:60px;z-index:9909;display:none; class="infobar">
  <table sytle="font-size:12px;" width="175" height="60" border="0" cellpadding="0" cellspacing="1">
    <tr>
      <td height="21" colspan="2" background="<%=basePath%>imgs/tree/topbg.gif"><table width="100%" border="0" cellspacing="0" cellpadding="0">
        <tr  style="font-weight:bold;color:#FFFFFF;font-size:12px;">
          <td width="80%">线路设置</td>
          <td width="20%"><a href="javascript:void(0)" onClick="$('#linePanel').css('display','none');">关闭</a></td>
        </tr>
      </table></td>
    </tr>
    <tr style="font-size:12px;">
	  <td width="8">&nbsp;</td>
      <td width="164"> 名称：<input id="lineName" name="lineName" size="14"/></td>
    </tr>
	<tr>
      <td colspan="2"><div style="float:right"><input type="image" src="<%=basePath%>imgs/tree/save.gif" value=" 提 交 " onClick="saveLine();" /></div></td>
    </tr>
  </table>
</div>

<div id="regPanel" style=" background:#FFFFFF;border:#e1f2ff 1px;font-size:12px;position:absolute;top:0px;left:0px;width:175px; height:60px;z-index:9909;display:none; class='infobar' ">
  <table sytle="font-size:12px;" width="175" height="60" border="0" cellpadding="0" cellspacing="1">
    <tr>
      <td height="21" colspan="2" background="<%=basePath%>imgs/tree/topbg.gif"><table width="100%" border="0" cellspacing="0" cellpadding="0">
        <tr  style="font-weight:bold;color:#FFFFFF;font-size:12px;">
          <td width="80%">矩形设置</td>
          <td width="20%"><a href="javascript:void(0)" onClick="$('#regPanel').css('display','none');">关闭</a></td>
        </tr>
      </table></td>
    </tr>
    <tr style="font-size:12px;">
	  <td width="8">&nbsp;</td>
      <td width="164"> 名称：<input id="regName" name="regName" size="14"/></td>
    </tr>
	<tr>
      <td colspan="2"><div style="float:right"><input type="image" src="<%=basePath%>imgs/tree/save.gif" value=" 提 交 " onClick="saveReg();" /></div></td>
    </tr>
  </table>
</div>
<div id="polyPanel" style=" background:#FFFFFF;border:#e1f2ff 1px;font-size:12px;position:absolute;top:0px;left:0px;width:175px; height:60px;z-index:9909;display:none; class="infobar">
  <table sytle="font-size:12px;" width="175" height="60" border="0" cellpadding="0" cellspacing="1">
    <tr>
      <td height="21" colspan="2" background="<%=basePath%>imgs/tree/topbg.gif"><table width="100%" border="0" cellspacing="0" cellpadding="0">
        <tr  style="font-weight:bold;color:#FFFFFF;font-size:12px;">
          <td width="80%">多边形设置</td>
          <td width="20%"><a href="javascript:void(0)" onClick="$('#polyPanel').css('display','none');">关闭</a></td>
        </tr>
      </table></td>
    </tr>
    <tr style="font-size:12px;">
	  <td width="8">&nbsp;</td>
      <td width="164"> 名称：<input id="polyName" name="polyName" size="14"/></td>
    </tr>
	<tr>
      <td colspan="2"><div style="float:right"><input type="image" src="<%=basePath%>imgs/tree/save.gif" value=" 提 交 " onClick="savePoly();" /></div></td>
    </tr>
  </table>
</div>

<div id="roundPanel" style=" background:#FFFFFF;border:#e1f2ff 1px;font-size:12px;position:absolute;top:0px;left:0px;width:175px; height:60px;z-index:9909;display:none; class="infobar">
  <table sytle="font-size:12px;" width="175" height="60" border="0" cellpadding="0" cellspacing="1">
    <tr>
      <td height="21" colspan="2" background="<%=basePath%>imgs/tree/topbg.gif"><table width="100%" border="0" cellspacing="0" cellpadding="0">
        <tr  style="font-weight:bold;color:#FFFFFF;font-size:12px;">
          <td width="80%">圆形设置</td>
          <td width="20%"><a href="javascript:void(0)" onClick="$('#roundPanel').css('display','none');">关闭</a></td>
        </tr>
      </table></td>
    </tr>
    <tr style="font-size:12px;">
	  <td width="8">&nbsp;</td>
      <td width="164"> 名称：<input id="roundName" name="roundName" size="14"/></td>
    </tr>
	<tr>
      <td colspan="2"><div style="float:right"><input type="image" src="<%=basePath%>imgs/tree/save.gif" value=" 提 交 " onClick="saveRound();" /></div></td>
    </tr>
  </table>
</div>
</div>
</div>
</div>
	</body>
<input id="tmpList" type="hidden" name="tmpList" value="" type="text" />
<input id="Circle" type="hidden" name="Circle" value="" type="text" />
<input id="radius" type="hidden" name="radius" value="" type="text" />
</html>
