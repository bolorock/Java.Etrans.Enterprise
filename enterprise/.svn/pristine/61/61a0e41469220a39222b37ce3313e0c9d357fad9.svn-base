   var map ;

	function loadMap(){
		
		
	map=new SE.Map("mapPanel");
	
    map.centerAndZoom(new SE.LngLat(114.49811,38.03464),14); //石家庄
	//map.centerAndZoom(new SE.LngLat(108.33469,22.80656),14); //南宁
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
	
	 SE.Event.addListener(map, "click",mapClick);
}
	

function mapClick(e)
{
	
	var  type= $("#selectedType").val();
	if(type=="start")// 获取起点位置
	{
		var point = map.fromContainerPixelToLatLng(e);    
		getStart((point.getLongitude()/100000) +"," + (point.getLatitude()/100000));
	}
	else if(type=="end")
	{
		var point = map.fromContainerPixelToLatLng(e);  
		getEnd((point.getLongitude()/100000) +"," + (point.getLatitude()/100000));
	}
}


/**
 * 在地图上添加标注
 * @param lo
 * @param la
 * @param title
 * @param cententData
 */
function drawMarker(lo,la,title,cententData)
{
	 var marker=new SE.Marker(new SE.LngLat(lo,la));
	 marker.setTitle(title);
	 map.addOverLay(marker);
	 
	   SE.Event.addListener(marker,"click",function(){
		 		var infowin = marker.openInfoWinHtml(cententData);
		      	infowin.setTitle(title);
		  });
}

/**
 * 画线
 * @param points
 */
function drawLine(points)
{
	if(map)
	{
	 var polyLine = new SE.PolyLine( points );   
     map.addOverLay(polyLine); 
     
	}

}


function clear()
{
	if(map)
	{
		map.clearOverLays();
	}
}


/**
 * 设置地图中心点
 * @param lo
 * @param la
 * @param level
 */	
function setCenter(lo,la,level)
{
	if(map)
	map.centerAndZoom(new SE.LngLat(lo,la),level);
}
