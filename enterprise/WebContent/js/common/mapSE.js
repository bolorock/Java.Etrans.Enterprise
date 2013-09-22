   var map ;

	function loadMap(){
		
		/*var divMap =document.getElementById("mapPanel");
		alert(getMapWidth()  +"== " + getMapHeight());
		divMap.style.width = getMapWidth() + "px";
		divMap.style.height = getMapHeight() - 151 + "px";*/

		
	map=new SE.Map("mapPanel");
	map.centerAndZoom(new SE.LngLat(116.39885,39.96571),4);
	// 添加标准控件，骨头棒
	map.addControl(new SE.MapControl());
	// 添加 卫图, 矢量 和 融合控件
	var switchControl=new SE.MapTypeControl();
	map.addControl(switchControl);
	map.removeMapType(SE.Traffic_MAP);
	switchControl.setRight(5);
	// 比例尺
	var scale = new SE.ScaleControl();
	scale.setLeft(20);
	scale.setBottom(30);
	map.addControl(scale);
	// 鼠标滚动
	map.handleMouseScroll(true);
	// 键盘事件
	map.handleKeyboard();
	
	// 创建位置Marker标记
	/* var marker=new SE.Marker(new SE.LngLat(116.39885,39.96571));
	map.addOverLay(marker);
    var infoWin=marker.openInfoWinHtml("欢迎使用地图API");  
    infoWin.setTitle("地图API");  */
}
	
	
function setCenter(lo,la,level)
{
	if(map)
	map.centerAndZoom(new SE.LngLat(lo,la),level);
}
	
	function getMapWidth() {
		var width;
		if (window.innerWidth)
			width = window.innerWidth;
		else
			width = document.body.offsetWidth;

		return width;
	}
	function getMapHeight() {
		var height;
		height = document.body.clientHeight;
		return height;
	}