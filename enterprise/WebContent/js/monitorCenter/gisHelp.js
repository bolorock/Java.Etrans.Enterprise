
/***************************地图弹出框快捷按钮begin****************************************/

/**
 * 得到标题快捷按钮
 * no 车牌号码
 * vehicleId 车辆id
 * type 1表示要单车跟踪按钮，2标示不要单车跟踪按钮
 * **/
function getTitleDiv(no,vehicleId,type){
	
	/**********标题begin**********/
	var div='<tr><td>'+no+'</td>'+'<td>';
		if(type==1){//要单车跟踪快捷按钮
			div+='&nbsp;&nbsp;&nbsp;<a href=javascript:goGroup_attention_gis(\''+vehicleId+'\')><img src="Images/ico/onVehicl.png"  title="单车跟踪" align="middle" no-repeat 4px 5px/></a>';
		}
		div+='&nbsp;&nbsp;&nbsp;<a href=javascript:gotoTrack_Gis(\''+vehicleId+'\')><img src="Images/ico/map_btn_03.jpg"  title="轨迹回放" align="middle" no-repeat 4px 5px/></a>';
		div+='&nbsp;&nbsp;&nbsp;<a href=javascript:gotoControl_Gis(\''+vehicleId+'\')><img src="Images/ico/carzl.jpg"  title="指令" align="middle" no-repeat 4px 5px/></a>';
		div+='&nbsp;&nbsp;&nbsp;<a href=javascript:gotoVehicleInfo_Gis(\''+vehicleId+'\')><img src="Images/ico/map_btn_02.gif"  title="车辆信息" align="middle" no-repeat 4px 5px/></a>';
	
	if(popedomBool(vehicleId,"44")){//有拍照权限
		div+='&nbsp;&nbsp;&nbsp;<a href=javascript:gotoPhoto_Gis(\''+vehicleId+'\')><img src="Images/ico/map_btn_01.gif"  title="拍照" align="middle" no-repeat 4px 5px/></a>';
	}
	if(popedomBool(vehicleId,"55")){//有视频权限
		div+='&nbsp;&nbsp;&nbsp;<a href=javascript:govideo_Gis(\''+vehicleId+'\')><img src="Images/ico/video.gif"  title="视频监控" align="middle" no-repeat 4px 5px/></a>';
	}
	if(popedomBool(vehicleId,"66")){//有文本下发的权限
		div+='&nbsp;&nbsp;&nbsp;<a href=javascript:quicklyPubCommandCode_Gis(\''+vehicleId+'\')><img src="Images/ico/map_btn_05.gif"  title="文本下发" align="middle" no-repeat 4px 5px/></a>';
	}
	div+='</td></tr>';
	
	
	return div;
	/**********标题end**********/
	
}



/**
 * 跳转到单车跟踪入口
 **/
function goGroup_attention_gis(vehicleId){
	
	//得到leftiframe对象
	var win=parent.parent.frames["leftFrame"].window;
	
	win.goGroup_attention(vehicleId);
	
}

/**
 * 轨迹回放入口
 * @param vehicleId 车辆id
 **/
function gotoTrack_Gis(vehicleId){
	//取参数的key
	var key = String(vehicleId)+"_1";
	//得到leftiframe对象
	var win=parent.parent.frames["leftFrame"].window;
	var selectWhere = win.selectWhere;
	//参数值
	var whereValueStr = selectWhere[key];
	var whereValue = [];
	whereValue= whereValueStr.split(",");
	
	
	var str1 = "";
	var str2 = "";
	if(whereValue.length>1){
		str1 = whereValue[0];
		if(whereValue.length==2)
		str2 = whereValue[1];
	}
	
	/**轨迹回放入口**/
	win.gotoTrack(str1,str2);
}
/**
 * 指令入口
 * @param vehicleId 车辆id
 * @return
 */
function gotoControl_Gis(vehicleId){
	//取参数的key
	var key = String(vehicleId)+"_2";
	//得到leftiframe对象
	var win=parent.parent.frames["leftFrame"].window;
	var selectWhere = win.selectWhere;
	//参数值
	var whereValueStr = selectWhere[key];
	var whereValue = [];
	whereValue= whereValueStr.split(",");
	
	var str1 = "";
	var str2 = "";
	var str3 = "";
	var str4 = "";
	if(whereValue.length>1){
		str1 = whereValue[0];
		if(whereValue.length>1)
		str2 = whereValue[1];
		if(whereValue.length>2)
		str3=whereValue[2];
		if(whereValue.length>3)
		str4=whereValue[3];
	}
	
	/**指令入口**/
	win.gotoControl(str1,str2,str3,str4);
	
}

/**
 * 车辆信息入口
 * @param vehicleId 车辆id
 * @return
 */
function gotoVehicleInfo_Gis(vehicleId){
	//取参数的key
	var key = String(vehicleId)+"_3";
	//得到leftiframe对象
	var win=parent.parent.frames["leftFrame"].window;
	var selectWhere = win.selectWhere;
	//参数值
	var whereValueStr = selectWhere[key];
	var whereValue = [];
	whereValue= whereValueStr.split(",");
	
	var str1 = "";
	var str2 = "";
	if(whereValue.length>1){
		str1 = whereValue[0];
		if(whereValue.length==2)
		str2 = whereValue[1];
	}
	
	/**车辆信息入口**/
	win.gotoVehicleInfo(str1,str2);
}

/**
 * 拍照入口
 * @param vehicleId 车辆id
 * @return
 */
function gotoPhoto_Gis(vehicleId){
	//取参数的key
	var key = String(vehicleId)+"_4";
	//得到leftiframe对象
	var win=parent.parent.frames["leftFrame"].window;
	var selectWhere = win.selectWhere;
	//参数值
	var whereValueStr = selectWhere[key];
	var whereValue = [];
	whereValue= whereValueStr.split(",");
	
	var str1 = "";
	var str2 = "";
	var str3 = "";
	var str4 = "";
	if(whereValue.length>1){
		str1 = whereValue[0];
		if(whereValue.length>1)
		str2 = whereValue[1];
		if(whereValue.length>2)
		str3=whereValue[2];
		if(whereValue.length>3)
		str4=whereValue[3];
	}
	
	/**拍照入口**/
	win.gotoPhoto(str1,str2,str3,str4);
}


/**
 * 视频入口
 * @param vehicleId 车辆id
 * @return
 */
function govideo_Gis(vehicleId){
	//取参数的key
	var key = String(vehicleId)+"_5";
	//得到leftiframe对象
	var win=parent.parent.frames["leftFrame"].window;
	var selectWhere = win.selectWhere;
	//参数值
	var whereValueStr = selectWhere[key];
	var whereValue = [];
	whereValue= whereValueStr.split(",");
	
	var str1 = "";
	var str2 = "";
	if(whereValue.length>1){
		str1 = whereValue[0];
		if(whereValue.length==2)
		str2 = whereValue[1];
	}
	
	/**视频入口**/
	win.govideo(str1,str2);
}


/**
 * 文本下发入口
 * @param vehicleId 车辆id
 * @return
 */
function quicklyPubCommandCode_Gis(vehicleId){
	//取参数的key
	var key = String(vehicleId)+"_6";
	//得到leftiframe对象
	var win=parent.parent.frames["leftFrame"].window;
	var selectWhere = win.selectWhere;
	//参数值
	var whereValueStr = selectWhere[key];
	var whereValue = [];
	whereValue= whereValueStr.split(",");
	
	var str1 = "";
	var str2 = "";
	var str3 = "";
	var str4 = "";
	if(whereValue.length>1){
		str1 = whereValue[0];
		if(whereValue.length>1)
		str2 = whereValue[1];
		if(whereValue.length>2)
		str3=whereValue[2];
		if(whereValue.length>3)
		str4=whereValue[3];
	}
	
	/**文本下发入口**/
	win.quicklyPubCommandCode(str1,str2,str3,str4);
	
}

/**
 * 权限判断
 * @param vehicleId 车辆id
 * @param type 取值类型，44拍照权限，55视频权限，66文本下发权限
 **/
function  popedomBool(vehicleId,type){
	var result = false;
	//取参数的key
	var key ="";
	if(type=="44"){
		key=String(vehicleId)+"_44"
	}else if(type=="55"){
		key=String(vehicleId)+"_55"
	}else if(type=="66"){
		key=String(vehicleId)+"_66"
	}
	
	//得到leftiframe对象
	var win=parent.parent.frames["leftFrame"].window;
	var selectWhere = win.selectWhere;
	//参数值
	var whereValueStr = selectWhere[key];
	
	if(whereValueStr=="true"){
		result = true;
	}else{
		result = false;
	}
	
	return result;
	
}




/***************************地图弹出框快捷按钮end****************************************/