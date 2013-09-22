
var map;

//var rectMap = new HashMap();
var rectId=0;
var control=null;
function loadMap()
{
	map=new SE.Map("map");
	   map.centerAndZoom(new SE.LngLat(108.91137,34.30758),10);//西安
	 //map.centerAndZoom(new SE.LngLat(114.49811,38.03464),10);//石家庄
	 //map.centerAndZoom(new SE.LngLat(108.33469,22.80656),10);//南宁
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
	control = new SE.RectTool(map);
}


//鼠标画矩形
function rectLine(){
	var points=new Array();
	control.close();
	control = new SE.RectTool(map);   
	control.autoClear=true;
 	SE.Event.addListener(control, "draw", function(point,rect){
		// var Polygon = new SE.Rect( point );   
        // map.addOverLay( Polygon );
			 var b1=point.getSouthWest();
			 var b2=point.getNorthEast();
			//$("tmpList").value=(b1.lng/100000)+","+(b1.lat/100000)+","+(b2.lng/100000)+","+(b2.lat/100000);
			 
			// rectMap.put(rectId++, Polygon);
			 
			 timeAreaFrame.addTimeArea((b1.lng/100000),(b1.lat/100000),(b2.lng/100000),(b2.lat/100000),rectId++);
			 control.close();
	
	});   
 	control.open();    
}

//删除所有
function mapClearAll(){
	map.clearOverLays(true);

}
function setMainFrame() {
	var mainhei = 0, lefthei = 0;
	mainhei = timeAreaFrame.document.body.scrollHeight;
	// lefthei = leftFrame.document.body.scrollHeight;
   // alert("------>"+mainhei);
	if (mainhei < 500) {
		mainhei = 500;
	}
	if (lefthei < 500) {
		lefthei = 500;
	}
	if (lefthei < mainhei) {
		$("#leftFrame").height(mainhei);
	} else {
		$("#leftFrame").height(lefthei);
	}
	$("#timeAreaFrame").height(mainhei);
}
