var baseDir = "../mapgis/TileAjax/js";	
var ImageBaseDir = "../mapgis/TileAjax/images/";
function include(src) {
	HTMLCode = '<script language="javascript" src="' + src + '"></script>';
	document.write(HTMLCode);
}

include(baseDir + "/Prototype.js");
include(baseDir + "/Map.js");
include(baseDir + "/HashMap.js");
include(baseDir + "/Util.js");
include(baseDir + "/model/MapModel.js");
include(baseDir + "/model/MapType.js");
include(baseDir + "/model/Tile.js");
include(baseDir + "/model/Zoom.js");

include(baseDir + "/geoObject/Bound.js");
include(baseDir + "/geoObject/Coordinate.js");
include(baseDir + "/geoObject/Point.js");
include(baseDir + "/geoObject/Rectangle.js");

include(baseDir + "/overLayer/OverLayer.js");
include(baseDir + "/overLayer/Polyline.js");
include(baseDir + "/overLayer/Poly_line.js");
include(baseDir + "/overLayer/polygon.js");
include(baseDir + "/overLayer/Marker.js");
include(baseDir + "/overLayer/CarMarker.js");
include(baseDir + "/overLayer/Tipinfo.js");

include(baseDir + "/control/Control.js");
include(baseDir + "/control/OvMapControl.js");
include(baseDir + "/control/NavControl.js");
include(baseDir + "/control/ScaleControl.js");
include(baseDir + "/control/MapControl.js");

include(baseDir + "/toolBar/ToolBar.js");
include(baseDir + "/toolBar/Tool.js");
include(baseDir + "/toolBar/Command.js");
include(baseDir + "/toolBar/ext/ToolExt.js");
include(baseDir + "/toolBar/ext/CommandExt.js");

include(baseDir + "/Ajax/AjaxProxy.js");
include(baseDir + "/Ajax/AjaxMonitor.js");
include(baseDir + "/Ajax/AjaxResult.js");

