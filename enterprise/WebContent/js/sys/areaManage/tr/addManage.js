//地物点
function savePoint()
{
	var names = $("#name").val();
	var xx = $("#longitude").val();
	var yy = $("#latitude").val();
	 
     
	if (names == "" || xx == "" || yy == "") {
		alert("名称不能为空！！");
		return false;
	} else {

		var lonlatstr=xx+","+yy;
		areaFrame.insertClinetPoint(names,lonlatstr);
	    
		 
	 $("#pointPanel").css("display","none");
	 //$("pointPanel").style.display = 'none';
	
	 //撤销地图点击事件
	 
		return true;
	}
}
//添加线
var lonlat;
function saveLine()
{    
	 var names = $("#lineName").val();
	if (names == "") {
		alert("名称不能为空！！");
		return false;
	} else {
		areaFrame.insertLine(names,lonlat);
		$("#lineName").val("");
		$("#linePanel").css("display","none");
		//$("#linePanel").style.display = 'none';
		
		return true;
	}
}
function linesave(points)
{   
	var lnglat="";
	for(var i=0;i<points.length;i++){
		lnglat+=points[i]+"*";
	  }
	lonlat=lnglat.toString().substring(0,lnglat.length-1);
	$("#linePanel").css("display","block");
	//$("linePanel").style.display = 'block';//显示div层
	//控制显示的位置
	
	$("#linePanel").css("top",event.clientY);
	$("#linePanel").css("left",event.clientX);
	//$("linePanel").style.top = event.clientY;
	//$("linePanel").style.left =event.clientX;
}

//矩形
var reg_lonlat;
function saveReg()
{
	
   var names = $("#regName").val();
	if (names == "") {
		alert("名称不能为空！！");
		return false;
	} else {
		areaFrame.insertAreaOrRoadInfo(names, 1, 0, reg_lonlat);
		$("#regPanel").val("");
		$("#regPanel").css("display","none");
		//$("regPanel").style.display = 'none';
		
		return true;
	}
}

function regSave(points)
{
	reg_lonlat=points;
	$("#regPanel").css("display","block");
	//$("regPanel").style.display = 'block';//显示div层
	//控制显示的位置
	$("#regPanel").css("top",event.clientY);
	$("#regPanel").css("left",event.clientX);
	//$("regPanel").style.top = event.clientY;
	//$("regPanel").style.left =event.clientX;
}
//多边形
var poly_lonlat;
function polySave(points)
{
	var lnglat="";
	for(var i=0;i<points.length;i++){
		lnglat+=points[i]+"*";
	  }
	poly_lonlat=lnglat.toString().substring(0,lnglat.length-1);
	$("#polyPanel").css("display","block");
	//$("polyPanel").style.display = 'block';//显示div层
	//控制显示的位置
	$("#polyPanel").css("top",event.clientY);
	$("#polyPanel").css("left",event.clientX);
	//$("polyPanel").style.top = event.clientY;
	//$("polyPanel").style.left =event.clientX;
}

function savePoly()
{
	var names = $("#polyName").val();
	if (names == "") {
		alert("名称不能为空！！");
		return false;
	} else {
		areaFrame.insertAreaOrRoadInfo(names, 3, 0, poly_lonlat);
		$("#polyName").val("");
		$("#polyPanel").css("display","none");
		//$("polyPanel").style.display = 'none';
		
		return true;
	}
}

//圆
var Round_lonlat;
var round_r;
function roundSave(points,r)
{    
	round_r=r;
	 var round_lnglat="";
	 for(var i=0;i<points.length;i++){
		 round_lnglat+=(points[i].lng/100000)+","+(points[i].lat/100000)+"*";
	 }
	 
	Round_lonlat=round_lnglat.substring(0,round_lnglat.length-1);
	$("#roundPanel").css("display","block");
	//$("roundPanel").style.display = 'block';//显示div层
	//控制显示的位置
	$("#roundPanel").css("top",event.clientY);
	$("#roundPanel").css("left",event.clientX);
	//$("roundPanel").style.top = event.clientY;
	//$("roundPanel").style.left =event.clientX;
}
function saveRound()
{
	var names = $("#roundName").val();
	if (names == "") {
		alert("名称不能为空！！");
		return false;
	} else {
		var temppoint =new Array();
		temppoint=Round_lonlat.toString().split('*');
		var lonlat=temppoint[0]+','+temppoint[1];
		areaFrame.insertAreaOrRoadInfo(names, 2, round_r, lonlat);
		$("#roundPanel").css("display","none");
		//$("roundPanel").style.display = 'none';
		
		return true;
	}
}

function createimg(latlng) {
	var icon;
	var w;
	var h;
	src = "imgs/remove.gif";
	w = 16;
	h = 16;
	var size=new SE.Size(16,16);
	icon = new SE.Icon(src,size);
	icon.removeShadow();
	var newMarker;
	newMarker = new SE.Marker(latlng,icon);
	 
	return newMarker;
}