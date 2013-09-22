<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ page import="com.etrans.bubiao.sys.Constants"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme() + "://"+ request.getServerName() + ":" + request.getServerPort() + path +"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN">
<html xmlns:v="urn:schemas-microsoft-com:vml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta http-equiv="Pragma" content="no-cache">
<meta http-equiv="Cache-Control" content="no-cache">
<meta http-equiv="Expires" content="0">
<title>区域管理</title>

<style type="text/css">
v\:* {
	behavior: url(#default#VML);
}

body,table,td {
	font-size: 12px
}

.sortable {
	table-layout: fixed
}

.sortable tr {
	height: 20px
}

.sortheader {
	color: #fff;
	text-decoration: none
}
/*超出单元格隐藏内容*/
.sortable th,.sortable td {
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis
}

.head th {
	background: #1078b5;
	color: #fff;
}

.list th {
	color: #000;
	font-weight: normal;
	border-top: 0px solid #fff
}

.list td {
	border-top: 0px solid #fff;
	border-left: 0px solid #fff
}
/*拖动单元格*/
.resizeDiv {
	width: 2px;
	overflow: hidden;
	float: right;
	cursor: col-resize
}

.sortarrow {
	color: #ffc;
	font-weight: normal
}
</style>

	<link href="<%=basePath%>css/main.css" rel="stylesheet" type="text/css" />
	
	<script type="text/javascript" language="javascript" src="<%=Constants.MAP_BASE_URL%>/SE_JSAPI?&uid=<%=Constants.MAP_UID %>"></script> 
	
	<script type="text/javascript" src="<%=basePath%>js/common/HashMap.js"></script>
	<script type="text/javascript" src="<%=basePath%>js/common/Prototype.js"></script>
	<script type="text/javascript" src="<%=basePath%>js/jq/jquery-1.7.1.min.js"></script>
	<script type="text/javascript" src="<%=basePath%>js/common/localcars.js" ></script>
	<script type="text/javascript" src="<%=basePath%>js/sys/area/lookforArea.js" ></script>


<script>
var $j = jQuery.noConflict();
var dragenable = false;
var x;
var y;
var w;
var h;
var obj;
function init() {
	x = event.clientX + document.body.scrollLeft; // 获取x坐标
	obj = event.srcElement; // 获取鼠标触发的元素
	w = event.srcElement.offsetWidth; // 对象的宽度
	obj.setCapture(); // 接受鼠标消息
	if (x > event.srcElement.offsetLeft + w - 5 && x < event.srcElement.offsetLeft + w) {// 鼠标移动到对象边界时
		dragenable = true;
		obj.style.cursor = 'e-resize';
	}// 改变鼠标的样式-左右拖动型
}
function drag() {
	if (event.clientX + document.body.scrollLeft > event.srcElement.offsetLeft + event.srcElement.offsetWidth - 5 && event.clientX + document.body.scrollLeft < event.srcElement.offsetLeft + event.srcElement.offsetWidth) {
		event.srcElement.style.cursor = 'e-resize';
	} // 改变鼠标的样式-左右拖动型
	else
		event.srcElement.style.cursor = 'default';// 改变鼠标的样式-默认型
	if (dragenable == true) {
		if (event.clientX + document.body.scrollLeft - x + w > 0) {
			var i = obj.cellIndex;
			var j;
			for (j = 0; j < obj.parentNode.parentNode.rows.length; j++) { // 更改表格的宽度
				obj.parentNode.parentNode.rows[j].cells[i].width = event.clientX + document.body.scrollLeft - x + w;
			}
		} else {
			var i = obj.cellIndex;
			var j;
			for (j = 0; j < obj.parentNode.parentNode.rows.length; j++) {
				obj.parentNode.parentNode.rows[j].cells[i].width = 1; // 最小也要保持宽度为1
			}
		}
	}
}
function end() // 结束更改
	{
		dragenable = false;
		obj.releaseCapture(); // 释放鼠标的捕获
		obj.style.cursor = 'default'; // 更改鼠标的样式为默认
	}

</script>
</head>
<body style="overflow-y: hidden;" onload="load();">
	<div id="bar" style="line-height: 28px; text-decoration: none;">
		<a href="###" onclick="AllMap()"><img border="0" alt="全图"
			src="../../mapgis/TileAjax/images/mapTools/AllMap_nor.gif" />
		</a> <a href="###" onclick="mZoom(0)"><img border="0" alt="放大"
			src="../../mapgis/TileAjax/images/mapTools/Max_nor.gif" />
		</a> <a href="###" onclick="mZoom(1)"><img alt="缩小" border="0"
			src="../../mapgis/TileAjax/images/mapTools/Min_nor.gif"> </a> <a
			href="###" onclick="ePolygon()"><img border="0" alt="重新定义"
			src="../../mapgis/TileAjax/images/mapTools/db_nor.gif" />
		</a>
	</div>
	<div id="map"></div>
	<div
		style="float: left; overflow-x: scroll; overflow-y: scroll; height: 151px; width: 100%">
	</div>

	<div id="downloadPanel"
		style="background-image: url(../../Images/bzbg.gif); position: absolute; top: 0px; left: 0px; width: 183px; height: 164px; z-index: 9909; display: none;"
		class="infobar">
		<div
			style="padding-right: 5px; float: right; background-image: url(../../Images/bzclose.gif);">
			<a href="###" onClick="$('downloadPanel').style.display = 'none';"><img
				src="../../Images/bzclose.gif" width="47" height="21" border=0 />
			</a>
		</div>
	</div>
</body>
<input type="hidden" value='<%=request.getParameter("id") %>' name="areaId" id="areaId"/>
<input id="maptype" value="bmap" type="hidden" name="hiddenField" />
<script>
	var $jq = jQuery.noConflict();
	$jq(document).ready(
			function() {
				var pointStr = "";//经纬度字符串
				var areaid = $jq("#areaId").val();

				$jq.ajax({
					type : "post",
					url : "lookForArea.action",
					data : {
						"id" : areaid
					},
					success : function(data) {
						var result = eval(data);
						if ('' == data) {
							//alert("该区域为设置范围");
						} else {
							for ( var i = 0; i < result.length; i++) {
								pointStr += result[i]["PointLon"] + ","
										+ result[i]["Pointlat"] + "*";
							}
							pointStr = pointStr.substring(0,
									pointStr.length - 1);
							addPolygon(pointStr);
						}
					},
					error : function() {
						alert("程序有异常请重新刷新一次");
					}
				});
			});
		
</script>
</html>
