var maplet= null;   // 地图全局变量
var vehicleId ="";// 手机号
var car = new MyObject('0'); //
var carText = new MyObject('0'); //
var carHashMap = new HashMap();
function load(vehicle) {
	vehicleId = vehicle; // 接收页面传来的参数
	maplet= new EzMap(document.getElementById("map"));
	maplet.initialize();
	//显示地图左侧的比例尺
	maplet.showMapControl();
	maplet.showCopyright();//显示地图版权信息
	maplet.showMapScale();//显示地图的比例尺右下角
	//maplet.centerAndZoom(new Point(116.39885,39.96571),4);
	var overview=new OverView();//鹰眼
	overview.width=200;
	overview.height=200;
	maplet.addOverView(overview);
	playTrack();
}



function getHead(head) {
	if ((head >= 0 && head < 22) || (head >= 336)){
		return 3;
		}else if (head >=22 && head <66){
			return 7;
		}else if (head >=66 && head <112){
			return 1;
	    }else if (head >=112 && head <=156){
			return 8;
	    }else if (head >=156 && head <202){
			return 4;
	    }else if (head >=202 && head <= 246){
			return 5;
	    }else if (head >=246 && head <292){
			return 2;
	    }else if (head >=292 && head <336){
			return 6;
	    }
}


function getHeadDes(head) {
	if ((head >= 0 && head < 22)||(head >= 336)){
		return "北向";
	}else if(head >= 22 && head <66){
		return "东北向";
	}else if(head>=66&&head<112){
		return "东向";
	}else if(head>=112&&head<156){
		return "东南向";
	}else if(head>=156&&head<202){
		return "南向";
	}else if(head>=202&&head<246){
		return "西南向";
	}else if(head>=246&&head<292){
		return "西向";
	}else if(head>=292&&head<336){
		return "西北向";
	}
	
		
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

function createInfoWindow(obCar) {
	var div = '<div><table width="260" border="0" cellspacing="2" cellpadding="0"><tr bgcolor="#e6eaea">';
	div += '<td colspan="2" height="30">' + obCar.gs + '</td></tr>' 
	    + '<tr><td height="18">速度：' + obCar.sd + '公里/小时</td>' + '<td >方向：' + getHeadDes(obCar.hd) + '</td></tr>'
	    + '<tr bgcolor="#e6eaea"><td height="18">经度：' + obCar.lon+ '</td>' + '<td >纬度：' + obCar.lat + '</td></tr>' 
	   + '<tr ><td height="18">所属行业：' + obCar.kindName+ '</td>' + '<td >所属业户：' + obCar.workunitName + '</td></tr>' 
	   + '<tr bgcolor="#e6eaea"><td height="18" colspan="2" >电子运单：' + obCar.bill+ '</td></tr>' 
	    +'<tr><td><a href="javascript:void(0)" onclick=getDriverMessage("'+obCar.sim+ '")> 查看司机信息</a></td><td><a href="javascript:void(0)" onclick=getLocationInfo2("' + obCar.sim + '","' + obCar.lon + '","' + obCar.lat + '")>显示位置</a></td></tr>'
	   +'<tr bgcolor="#e6eaea"><td colspan="2"  height="50" id="message">&nbsp;</td></tr></table></div>';
			
	div = div
			+ "<table width='250px' height='12px' cellspacing='0' cellpadding='0'><tr><td><span style='color:#0000cc;cursor:pointer;text-decoration:underline;font-size:12px;' onclick='javascript:map.closeInfoWindow();'></span></td>";
	div = div + "<td style='font-size:12px;' align='right'>定位时间:" + obCar.gt + "</td></tr></table>";
	return div;
}

//弹出窗口,取中文地址
function getLocationInfo2(sim,lon,lat) {
	$("#locationInfo").html('<img src="imgs/load.gif" />正在加载数据......');
	  var url="monitorCenter/getAddressRepeat.action";
	   var param={
    		 date:new Date(),
             lnglat:lon+","+lat	 
             }
	  url = encodeURI(url); 
	 	$.ajax({
		url:url,
		type:"POST",
		dataType:"json",
		data: param,
		success:function(data){
		try{  
			   if(data.status=="ok"){
					$("#message").html(data.result.address);
				}else{
					$("#message").html(data.result.error);
				}
	     }catch(exception){
	    	 $("#message").html('服务器忙,请稍后再试!');
	   }
		
	} 
		
	});
}
/**
 * 获取车辆最新驾驶员信息
 * @param {} vehicleId
 */
function getDriverMessage(vehicleId){
$("#message").html('<img src="imgs/load.gif" />正在加载数据......');
   var jsonParams = {
		vehicleId : vehicleId,
		de : new Date()
	};
	
	 	$.ajax({
		url:"monitorCenter/getNewestDriverMessage.action",
		type:"POST",
		data: jsonParams,
		success: function(data){
		    if (data != ''&&data!='null'&& data!=null) {
		    	var name=data.name;
		    	var identityCard=data.identityCard;
		    	var drivingLicence=data.drivingLicence;
		    	var workCertificate=data.workCertificate;
			    var message="姓名:"+data.name;
			    if(identityCard!=''){
			     message+="&nbsp;身份证:"+identityCard;
			    }
			    if(drivingLicence!=''){
			    message+="&nbsp;驾驶证号码:"+drivingLicence;
			    	
			    }
			     if(workCertificate!=''){
			    message+="&nbsp;从业资格证号:"+workCertificate;
			    }
		   $("#message").html(message);
		}else{
			$("#message").html("当前没有司机信息");
		  }
		}
		
	});
	
} 
// 删车
function oneCar(carsim) {
	car = new MyObject(carsim);
	//carText = new MyObject("text" + carsim);
	
	var newMarker = carHashMap.get(car);
	//var txtMarker= carHashMap.get(carText);
	
	// 清空地图图标
	if(newMarker!=null){
		maplet.removeOverlay(newMarker);// 删除车
		//maplet.removeOverlay(txtMarker);
	}
	// 清空HashMap
	carHashMap.remove(car); // 删除车
	//carHashMap.remove(carText);
}

//文字标注
function txtMaker(LngLat,name){
	var title=new Title(name,12,5,"宋体","white","#015190");
	 title.setPoint(LngLat);
	return title;
}
// 定位车辆
function MakerCar(obCar) {

	var state = 0;
	var head=getHead(obCar.hd);
	if (obCar.sd > 0) {
		state = 1;
	}
	car = new MyObject(obCar.sim);
	var IconPath;
	var IconInfo;
	var icon;
	var w;
	var h;
	var src;
	
	
	if (state == 0) {
		src = "imgs/car/carBlue" + head + ".gif";
	} else if (state == 1) {
		src = "imgs/car/car" + head + ".gif";
	} else if (state == 2) {
		src = "imgs/car/carYellow" + head + ".gif";
	}else {
		src = "imgs/car/red" + head + ".gif";
	}
	icon=new Icon();
	if (head == 1 || head == 2) {
		w = 20;
		h = 20;
	}else if (head == 3 || head == 4) {
		w = 20;
		h = 20;
	} else {
		w = 22;
		h = 22;
	}
	icon.heigth=h;
	icon.width=w;
	icon.image=src;
	var point=new Point(obCar.sHlon,obCar.sHlat);
	 var carNo=obCar.no;//车牌号
	 var infowindow=createInfoWindow(obCar);
alert(1)
	var newMarker = new Marker(point,icon,new Title(carNo,12,7,"宋体",null,null,"red","2"));
alert(11)
	  // var newMarker = new Marker(point,icon,carNo);
	 if (carHashMap.containsKey(car)) {
		oneCar(obCar.sim);
	}
	 maplet.addOverlay(newMarker);
	alert(111)
	 carHashMap.put(car, newMarker);
	//   carHashMap.put("text"+car, textMarker);
	// 清空
	point = null;
	car = null;
	//carMarker = null;
	
}

var lastPoint=null;
var firstPoint=true;
//播放轨迹
function playTrack() {
	var jsonParams = {
		vehicleIdStr:vehicleId,
		datetimes : new Date()
	};
	$.ajax({
		url:"monitorCenter/getGpsInfos.action",
		type:"POST",
		dataType:"json",
		data:jsonParams,
		success:function(msg){
			alert(5858)
			var pos = new Array(); // 轨迹点数组
	         var xy = msg[0];
	         if(!firstPoint){
		    	 pos.push(lastPoint);
		     }
	         MakerCar(xy);
			 alert(1111)
	         var point=new Point(xy.sHlon, xy.sHlat);
		       pos.push(point);
		       lastPoint=point;
		     
		  // 画轨迹线
				try{
					alert(99)
					var pline = new Polyline(pos,"#330099",2,0.5);
					maplet.addOverlay(pline);
				}catch(e){}
				if (firstPoint) {
					maplet.centerAndZoom(pos[0],15);
				}
				firstPoint=false;
	   }
		
	});
	alert(9999999)
		setTimeout("playTrack()",10000);
}

