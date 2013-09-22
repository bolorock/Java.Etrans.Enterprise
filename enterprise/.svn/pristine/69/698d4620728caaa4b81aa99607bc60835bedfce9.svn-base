var  map,drawingManager;
var pointHashMap = new HashMap();
var lableHashMap = new HashMap();
var _overlay;

//偏移
var lngOffset = 0.010439549;
var latOffset = 0.003489415;

var styleOptions = {
	    strokeColor: "red",    //边线颜色。
	    fillColor: "red",      //填充颜色。当参数为空时，圆形将没有填充效果。
	    strokeWeight: 3,       //边线的宽度，以像素为单位。
	    strokeOpacity: 0.8,    //边线透明度，取值范围0 - 1。
	    fillOpacity: 0.5,      //填充的透明度，取值范围0 - 1。
	    strokeStyle: 'solid' //边线的样式，solid或dashed。
	};

$(function() {
	
	initGrid();

	

    //初始化自定义类型
	initCustomType('nameType');
	
	//显示地图 
    showMap();
 
	//按钮绑定点击事件
	$('#btnSearch').bind('click', toSearch);
    $('#deleteBtn').bind('click', toDelete);
    $('#cancelBtn').bind('click', hide); 
  //初始化验证插件
	$("#editWindow").validation();
	
	

        
});

function showMap(){
	
	$('#cpMap').css("width", getMapWidth() -550+"px");
	$('#cpMap').css("height",getMapHeight() -108+ "px");
	map = new BMap.Map("cpMap");
	var point = new BMap.Point(116.39885,39.96571);    // 创建点坐标
	map.centerAndZoom(point,4);                     // 初始化地图,设置中心点坐标和地图级别。
	map.enableScrollWheelZoom();                            //启用滚轮放大缩小
	map.addControl(new BMap.NavigationControl());
	map.addControl(new BMap.ScaleControl());  
	map.addControl(new BMap.OverviewMapControl()); 
	    
	//实例化鼠标绘制工具
    drawingManager = new BMapLib.DrawingManager(map, {
        isOpen: false, //是否开启绘制模式
        enableDrawingTool: true, //是否显示工具栏
        drawingToolOptions: {
            anchor: BMAP_ANCHOR_TOP_LEFT, //位置
            offset: new BMap.Size(100, 5), //偏离值
            scale: 0.8 //工具栏缩放比例
        },
        circleOptions: styleOptions, //圆的样式
       // polylineOptions: styleOptions, //线的样式
        polygonOptions: styleOptions, //多边形的样式
        rectangleOptions: styleOptions //矩形的样式
    });
    
    //添加鼠标绘制工具监听事件，用于获取绘制结果
    drawingManager.addEventListener('overlaycomplete', overlaycomplete);
    
    BMap.Overlay.prototype.DataId = null;
    BMap.Overlay.prototype.InfoWindowPoint = null;
    
    
    var name = $("#txName").val();
	var nameType = $("#nameType").val();
	
    //显示自定义信息
    showList(name,nameType);
    
    
}


//回调获得覆盖物信息
var overlaycomplete = function (e) {
    var LngLat = "";
    var OriginLngLat = "";
    //点1
//    if (e.drawingMode == BMAP_DRAWING_MARKER) {
//    	  LngLat = e.overlay.getPosition().lng + ',' + e.overlay.getPosition().lat;
//        OriginLngLat = (e.overlay.getPosition().lng - lngOffset).toFixed(9) + ',' + (e.overlay.getPosition().lat - latOffset).toFixed(9);
//        showInfo(OriginLngLat, 0, e.overlay, 1, LngLat);  
//    }
    
    //圆2
    if (e.drawingMode == BMAP_DRAWING_CIRCLE) {
    	var lng=e.overlay.getCenter().lng;
    	var lat=e.overlay.getCenter().lat;
    	LngLat = lng + ',' + lat;
    	OriginLngLat += (lng - lngOffset).toFixed(9) + "," + (lat - latOffset).toFixed(9);
    	
    	showArea(OriginLngLat, e.overlay.getRadius(), e.overlay, 2, LngLat);
    }
    //线3、多边形4、矩形5
    if (e.drawingMode == BMAP_DRAWING_POLYLINE || e.drawingMode == BMAP_DRAWING_POLYGON || e.drawingMode == BMAP_DRAWING_RECTANGLE) {
        var points = "";
        LngLat = "";
        for (var i = 0; i < e.overlay.getPath().length; i++) {
        	LngLat += e.overlay.getPath()[i].lng + ',' + e.overlay.getPath()[i].lat + ',';
            points += (e.overlay.getPath()[i].lng - lngOffset).toFixed(9) + "," + (e.overlay.getPath()[i].lat - latOffset).toFixed(9) + ",";
        }

        overlayType = e.drawingMode == BMAP_DRAWING_POLYLINE ? 3 : (e.drawingMode == BMAP_DRAWING_POLYGON ? 4 : 5);

        showArea(points.substring(0, points.length - 1), 0, e.overlay, overlayType, LngLat.substring(0, LngLat.length - 1));
    }

};

function addMarker(lng,lat,id,name){  // 创建图标对象    
	var point = new BMap.Point(lng,lat); 
	
	var basePath = getRootPath();
	var imageURL=$("#imageURL").val();
	//var imageURL="/imgs/ioc/xuexiao.png";
	var url= basePath+imageURL;
	
	var myIcon = new BMap.Icon(url, new BMap.Size(32, 42), {     
		// 指定定位位置。    
		// 当标注显示在地图上时，其所指向的地理位置距离图标左上     
		// 角各偏移10像素和25像素。您可以看到在本例中该位置即是    
	   // 图标中央下端的尖角位置。     
	   offset: new BMap.Size(10, 25),     
	   // 设置图片偏移。    
	   // 当您需要从一幅较大的图片中截取某部分作为标注图标时，您    
	   // 需要指定大图的偏移位置，此做法与css sprites技术类似。     
	   imageOffset: new BMap.Size(0, 0 * 25)   // 设置图片偏移     
	 });  
	
	// 创建标注对象并添加到地图    
	 var marker = new BMap.Marker(point, {icon: myIcon});     
	 map.addOverlay(marker); 
	 var label = new BMap.Label(name,{offset:new BMap.Size(18,18)});
	 label.setStyle({
        borderColor:"#808080",
        color:"#333"
		});
	 marker.setLabel(label);

	 pointHashMap.put(id,marker);

} 

function showPoint(lng, lat){
	var LngLat =lng+','+lat;
	var OriginLngLat = (lng - lngOffset).toFixed(9) + ',' + (lat - latOffset).toFixed(9);
	var basePath = getRootPath();
	var  url=basePath+'/sys/customMap/point.jsp?LngLat='+LngLat+'&OriginLngLat='+OriginLngLat+'&lng='+lng+'&lat='+lat;
    var X = $(dialogs).offset().left;
    var Y = $(dialogs).offset().top;
	openDialog1(url, 220, 210,"兴趣点",X,Y);
	
}


function showArea(OriginLngLat, radius, overlay, CustomType, LngLat){
	//alert("radius:"+radius);
	var basePath = getRootPath();
	var  url=basePath+'/sys/customMap/area.jsp?LngLat='+LngLat+'&OriginLngLat='+OriginLngLat+'&CustomType='+CustomType+'&Radius='+radius;
    var X = $(dialogs).offset().left;
    var Y = $(dialogs).offset().top;
    _overlay=overlay;
	openDialog1(url, 220, 210,"区域面",X,Y);
}

function addLabel(lng,lat,id,name){
	var point = new BMap.Point(lng,lat); 
	var opts = {
			  position : point,    // 指定文本标注所在的地理位置
			  offset   : new BMap.Size(8, 8)    //设置文本偏移量
			};
	var label = new BMap.Label(name, opts);  // 创建文本标注对象
	label.setStyle({
		 borderColor:"#808080",
		 color:"#333",
		 fontSize : "12px",
		 height : "20px",
		 lineHeight : "20px",
		 fontFamily:"微软雅黑"
	 });
   map.addOverlay(label); 
   
   lableHashMap.put(id,label);
}

function initGrid(){
	var name = $("#txName").val();
	
	//查询参数
	var params = [{
		name : 'name',
		value : name
	}];
		$("#customMapList").flexigrid( {
			url : 'customMapPoint/getEntCustomMapList.action',
			dataType : 'json',
			params : params,
			colModel : [ 
             {
				display : '名称',
				name : 'name',
				width : 100,
				sortable : true,
				align : 'center'
			},
			{
				display : '图层类型',
				name : 'CustomType',
				handlefunction : 'getCustomType',
				paramcolnames : ['CustomType'],
				width : 100,
				sortable : true,
				align : 'center'
			},
			{
				display : '经纬度',
				name : 'LonLat',
				width : 200,
				sortable : true,
				align : 'left'
			},{
				display : '操作',
				name : 'Handler',
				handlefunction : 'getHandleColumn',
				paramcolnames : ['id'],
				width : 100,
				sortable : false,//操作列不能排序
				align : 'center'
			}],
			
			sortname : "id",//第一次加载数据时排序列
			sortorder : "desc",//第一次加载数据时排序类型
			usepager : true,//是否分页，默认为true。
			showTableToggleBtn : true,//是否显示收起/打开按钮,默认不显示。
			useRp : true,//是否可以动态设置每页显示的结果数，默认为false。
			rp : 8,//每页记录数，默认为10
			checkbox : true,//是否要多选框,默认为false。
			rowId : 'id',// 多选框绑定行的id,只有checkbox : true时才有效。
			singleSelect:false,
			width : 'auto',//表格宽度
			height: getNormalHeight()-20///表格高度
		});
	    
};

function getCustomType(CustomType){
	if(CustomType=="1"){
		return "兴趣点";
	}
	if(CustomType=="2"){
		return "圆形";
	}
//	if(CustomType=="3"){
//		return "线路";
//	}
	if(CustomType=="4"){
		return "多边形";
	}
	if(CustomType=="5"){
		return "矩形";
	}
	
}

/**
 * 组装操作列显示内容
 * @param id
 * @returns {String}
 */
function getHandleColumn(id){
	var deleteStr = "";
	var editStr = "";
	//变量resources为用户的所有资源权限 格式
	if(resources!=null){
		//判断ACTION的访问权限
		
		 if(resources.indexOf("|deleteEntCustomMap|")!=-1){
			 deleteStr ='<a href="javascript:void(0)" title="删除" onclick="doDelete(' + id + ')">删除</a>';
		 }
		 if(resources.indexOf("|editEntCustomMap|")!=-1){
			 editStr ='<a href="javascript:void(0)" title="编辑"  onclick="doEdit(' + id + ')">编辑</a>';
		 }
		
	}
	return   editStr + '&nbsp;&nbsp;' +deleteStr;
	
}

/**
 * 查询方法
 */
function toSearch(){
	  
		var name = $("#txName").val();
		var nameType = $("#nameType").val();
		//查询参数
		var params = [{
			name : 'name',
			value : name
		},
		{
			name : 'nameType',
			value : nameType
		}];
		// 重置表格的某些参数
		$("#customMapList").flexOptions({
				newp : 1,// 设置起始页
				params : params// 设置查询参数
			}).flexReload();// 重新加载
		
		showList(name,nameType);
}

function doEdit(id){
	if(id != null && id != ''){
		$("#submitBtn").unbind("click");
		clearForm("editWindow");
		showEditForm();
		
		$.ajax({
		    type : "POST",
		    url : "customMapPoint/getEntCustomMapById.action",
		    data : {id:id},
		    dataType : "JSON",
		    success : function(data) {
		    	if(data!= null){
		    		var otInfo =  eval("("+data+")");
		    		if(otInfo.length > 0){
		    			var CustomType=otInfo[0].CustomType;
		    			var typeNmae="";
		    			if(CustomType=="1"){
		    				typeNmae="兴趣点";
		    			}
		    			if(CustomType=="2"){
		    				typeNmae= "圆形";
		    			}
//		    			if(CustomType=="3"){
//		    				typeNmae= "线路";
//		    			}
		    			if(CustomType=="4"){
		    				typeNmae= "多边形";
		    			}
		    			if(CustomType=="5"){
		    				typeNmae= "矩形";
		    			}
		    			
		    			$("#id").val(otInfo[0].ID);
		    			$("#txtName").val(otInfo[0].Name);
		    			$("#txtTypeNmae").val(typeNmae);
		    			$("#CustomType").val(CustomType);
		    			//$("#LonLat").val(otInfo[0].LonLat);
		    			
		    			$('#submitBtn').bind('click', doUpdate);
		    		}
		    	}else{
		    		showError();
		    	}
		    },
		    error : function(data) {
		    	showError();
		    }
	    });
	}
}


/**
 * 执行后台方法更新数据
 */
function doUpdate(){
	
	var canSubmit = $("#editWindow").beforeSubmit();
	
	if(canSubmit){
		var id = $("#id").val();
		var name = $("#txtName").val();
		var CustomType = $("#CustomType").val();
		var params = {
				id : id,
				name : name	
		};
		$.ajax({
		    type : "POST",
		    url : "customMapPoint/editEntCustomMap.action",
		    data : {params : $.toJSON(params)},
		    dataType : "JSON",
		    success : function(data) {
		    	if(data!= null){
		    		hide();
		    		deleteMarkerList(id);
		    		addMapPoint(name,CustomType);
		    		$("#customMapList").flexReload();
		    	}else{
		    		
		    		showError();
		    	}
		    },
		    error : function(data) {
		    	showError();
		    }
	    });
	}
}

function addMapPoint(name,CustomType){
	 var jsonParams = {
				name : name,
				customType : CustomType,
				datetimes : new Date()
			};
	 
	 $.post("customMapPoint/getEntCustomMapByUserList.action", jsonParams, function(data) {
		 if (data != 'false') {
				var arrlist = data ;
				for ( var a = 0; a < arrlist.length; a++) {
					var id =arrlist[a].id;
					var name =arrlist[a].name;
					var LonLat =arrlist[a].LonLat;
					var CustomType =arrlist[a].CustomType;
					var Radius =arrlist[a].Radius;
					var imageURL =arrlist[a].imageURL;
					var nameType=arrlist[a].nameType;
					if(CustomType=="1"){
				    	var LonLats=LonLat.split(",");
						var lng=LonLats[0];
						var lat=LonLats[1];
						addMarkerList(lng,lat,imageURL,id,name,nameType);
				    }else{
				    	showAreaList(id,name,LonLat,CustomType,Radius);
				    }
				}
		  }
	 });
}

/**
 * 删除方法入口
 */
function toDelete(){
	var checkedIds = $("#customMapList").getCheckedRows();
	if(checkedIds.length<1){
		showWarning("请选择一行后进行删除操作！");
		return;
	}
	
	doDelete(checkedIds);
}


/**
 * 执行后台方法删除数据
 * @param ids
 * @returns {Boolean}
 */
function doDelete(ids){
	if (ids != null || ids.length > 0) {
		if (!confirm("确定删除选中的信息?")) {
			return false;
		} else {
			$.ajax({
			    type : "POST",
			    url : "customMapPoint/deleteEntCustomMap.action",
			    data : {ids:ids.toString()},
			    dataType : "JSON",
			    success : function(data) {
			    	if(data!=null){
			    		deleteMarkerList(ids.toString());
			    		$("#customMapList").flexReload();
			    		
			    	}else{
			    		showError();
			    	}
			    },
			    error : function(data) {
			    	showError();
			    }
		    });
		return true;
		}
	}
}



//显示自定义信息
function showList(name,type){
	 map.clearOverlays();
	 var jsonParams = {
				name : name,
				customType : type,
				datetimes : new Date()
			};
	 
	 $.post("customMapPoint/getEntCustomMapByUserList.action", jsonParams, function(data) {
		 if (data != 'false') {
				var arrlist = data ;
				for ( var a = 0; a < arrlist.length; a++) {
					var id =arrlist[a].id;
					var name =arrlist[a].name;
					var LonLat =arrlist[a].LonLat;
					var CustomType =arrlist[a].CustomType;
					var Radius =arrlist[a].Radius;
					var imageURL =arrlist[a].imageURL;
					var nameType=arrlist[a].nameType;
					if(CustomType=="1"){
				    	var LonLats=LonLat.split(",");
						var lng=LonLats[0];
						var lat=LonLats[1];
						addMarkerList(lng,lat,imageURL,id,name,nameType);
				    }else{
				    	showAreaList(id,name,LonLat,CustomType,Radius);
				    }
				}
		  }
	 });
}



var _opts = { enableAutoPan: false, width: 0, height: 0 };

function showAreaList(id,name,LonLat,CustomType,Radius){
	 var pointList = LonLat.split(',');
     var pointArray = [];
     var i = 0;
     while (i < pointList.length) {
         pointArray.push(new BMap.Point(pointList[i], pointList[i + 1]));
         i += 2;
     }
	var overLay;
	switch (CustomType) {
    case 2:
    	overLay = new BMap.Circle(pointArray[0], Radius, styleOptions);
	    addLabelList(pointArray[0],id,name);
        break;
    case 4:
    	overLay = new BMap.Polygon(pointArray, styleOptions);
    	addLabelList(pointArray[0],id,name);
        break;
    case 5:
    	overLay = new BMap.Polygon(pointArray, styleOptions);
    	addLabelList(pointArray[0],id,name);
        break;
    }
	 map.addOverlay(overLay);
	 pointHashMap.put(id,overLay);
}




function addMarkerList(lng,lat,imageURL,id,name){  // 创建图标对象    
	var point = new BMap.Point(lng,lat); 
	
	var basePath = getRootPath();
	var url= basePath+imageURL;
	var myIcon = new BMap.Icon(url, new BMap.Size(32, 42), {     
		// 指定定位位置。    
		// 当标注显示在地图上时，其所指向的地理位置距离图标左上     
		// 角各偏移10像素和25像素。您可以看到在本例中该位置即是    
	   // 图标中央下端的尖角位置。     
	   offset: new BMap.Size(10, 25),     
	   // 设置图片偏移。    
	   // 当您需要从一幅较大的图片中截取某部分作为标注图标时，您    
	   // 需要指定大图的偏移位置，此做法与css sprites技术类似。     
	   imageOffset: new BMap.Size(0, 0 * 25)   // 设置图片偏移     
	 });  
	
	// 创建标注对象并添加到地图    
	 var marker = new BMap.Marker(point, {icon: myIcon});     
	 map.addOverlay(marker); 
	 
	 var label = new BMap.Label(name,{offset:new BMap.Size(10,-10)});
		label.setStyle({
         borderColor:"#808080",
         color:"#333",
         cursor:"pointer"
		});
	 marker.setLabel(label);
    
	pointHashMap.put(id,marker);

}

function addLabelList(point,id,name){
	var opts = {
			  position : point,    // 指定文本标注所在的地理位置
			  offset   : new BMap.Size(8, 8)    //设置文本偏移量
			};
	var label = new BMap.Label(name, opts);  // 创建文本标注对象
	label.setStyle({
		 borderColor:"#808080",
		 color:"#333",
		 fontSize : "12px",
		 height : "20px",
		 lineHeight : "20px",
		 fontFamily:"微软雅黑"
	 });
   map.addOverlay(label); 
   
   lableHashMap.put(id,label);
}


//删标注
function deleteMarkerList(ids) {
	if (ids != null || ids.length > 0){
		var id=ids.toString();
		var idList = id.split(',');
		for(var i=0;i<idList.length;i++){
			var newMarker = pointHashMap.get(idList[i]);
			var newlable = lableHashMap.get(idList[i]);
			try {
				// 清空地图图标
				if (newMarker != null) {
					map.removeOverlay(newMarker);// 删标注
					map.removeOverlay(newlable);// 删标注
				}
			} catch (e) {
			}
			pointHashMap.remove(idList[i]); // 删标注
			lableHashMap.remove(idList[i]); // 删标注
		}
	}
}


function closeDialog(){
	$('#dialogs').dialog('close');
}

function closeDialogMap(){
	$('#dialogs').dialog('close');
	map.removeOverlay(_overlay);
}

/**
 * 打开编辑窗口
 */
function showEditForm(){
	show();
	$("#editWindow .errorMsg").closeMessage();
}

/**
 * 显示错误信息
 */
function showError(){
	showWarning('服务器忙，请重试！');
}

/**
 * 显示提示信息
 */
function showWarning(str){
	$.messager.alert('提示信息',str,'info');
}

function queryById(id){
	if(id != null && id != ''){
		
		$.ajax({
		    type : "POST",
		    url : "customMapPoint/getEntCustomMapIconById.action",
		    data : {id:id},
		    dataType : "JSON",
		    success : function(data) {
		    	if(data!= null){
		    		var otInfo =  eval("("+data+")");
		    		if(otInfo.length > 0){
		    			var imageURL=otInfo[0].imageURL;
		    			$("#imageURL").val(imageURL);
		    			
		    		}
		    	}else{
		    		showError();
		    	}
		    	
		    },
		    error : function(data) {
		    	showError();
		    }
		   
	    });
		
	}

}


function openDialog1(src, width, height, title,X,Y) {
	  
	$("#dialogs").css("display", "block");
	$("#dialogFrame").attr("src", src);
	
 
	
	$("#dialogs").dialog({
		width : width,
		height : height,
		title : title,
		maximizable : false,
		inline : true,
		position:[X,Y],   // 赋值弹出坐标位置
		hide:'fold',      // 窗口关闭动画
        show:'fold' ,     // 窗口显示动画
        closable:false,
        onClose:function(){}

	});
}



function getRootPath(){    
	//获取当前网址，如： http://192.168.2.133:8080/bubiaoQdn/sys/vehicle/vehicleModifyHistory.jsp    
	var curWwwPath=window.document.location.href;    
	//获取主机地址之后的目录，如：bubiaoQdn/sys/vehicle/vehicleModifyHistory.jsp
	var pathName=window.document.location.pathname;   
	var pos=curWwwPath.indexOf(pathName);    
	//获取主机地址，如：http://192.168.2.133:8080 
	var localhostPaht=curWwwPath.substring(0,pos);    
	//获取带"/"的项目名，如：/bubiaoQdn    
	var projectName=pathName.substring(0,pathName.substr(1).indexOf('/')+1);    
	return(localhostPaht+projectName);
	
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

