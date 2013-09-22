$(function() {
	    var params=getparams();
		$("#lineAwayConfigList").flexigrid( {
			url : 'monitorCenter/findLineAwayConfigList.action',
			dataType : 'json',
			params : params,
			colModel : [ 
			{
				display : '线路偏移设置名称',
				name : 'Name',
				width : 400,
				sortable : true,
				align : 'left'
			},{
				display : '最大偏移值',
				name : 'AllowMaxAway',
				width : 250,
				sortable : true,
				align : 'left'
			},{
				display : '操作',
				name : 'Handler',
				handlefunction : 'getHandleColumn',
				paramcolnames : ['ID'],
				width : 200,
				sortable : false,
				align : 'center'
			}],	
			sortname : "ID",
			sortorder : "desc",
			usepager : true,
			showTableToggleBtn : true,
			useRp : true,
			rp :8,
			checkbox : false,
			singleSelect:false,
			width : 'auto',
			height : getNormalHeight()
		});
		
		//初始化验证插件
		$("#editWindow").validation();
		
		//按钮绑定点击事件
		$('#searchBtn').bind('click', toSearch);
		$('#createBtn').bind('click', toCreate);
		$('#cancelBtn').bind('click', hide);
		$('#closeBtn').bind('click', hideView);
		
		//设置下拉框不可用
		$('#workingDays').attr("disabled","disabled");
});

/**
 * 组装操作列显示内容
 * @param id
 * @returns {String}
 */
function getHandleColumn(id){
	var editStr = "";
	var deleteStr = "";
	if(resources!=null){
		 if(resources.indexOf("|getLineAwayConfigById|")!=-1){
		    editStr = '<a href="javascript:void(0)" title="查看"  onclick="doView(' + id + ')">查看</a>';
		 }
		 if(resources.indexOf("|deleteLineAwayConfig|")!=-1){
		   deleteStr = '<a href="javascript:void(0)" title="删除"  onclick="doDelete(' + id + ')">删除</a>';
	     }
	}
	return editStr + '&nbsp;&nbsp;' + deleteStr;
}

//获取查询参数
function getparams(){
	var configName = $("#configName").val();
	var params = [{
		name : 'name',
		value : configName
	}];
	return params;
}


/**
* 查询方法
*/
function toSearch(){
	var params= getparams();
	$("#lineAwayConfigList").flexOptions({
			newp : 1,
			params : params
		}).flexReload();
}

/**
 * 新增加方法入口
 */
function toCreate(){
	
	$("#submitBtn").unbind("click");
	//清空DIV中包含的所有表单的值
	clearForm("editWindow");
	//初始化是否报警下拉框
	initYersOrNo("isAlarm");
	//设置默认时间
	initTime_Value("beginDate","00:00:00","endDate","23:59:59");
	//初始化线路
	initAjaxSelect("lineId","sys/getCustomLine.action",0);
	//加载检测时间类型列表
	initAjaxSelect("dateTypeId","sys/initDateTypes.action",0);
	findVehicleList();
	
	showEditForm();
	$('#submitBtn').bind("click",ConfigAdd); 

}

/**
 * 新增方法
 */
function ConfigAdd(){
	var flag = $("#editWindow").beforeSubmit();
	if(flag){
		checkboxMessage();
		var disp = $("#vehiclesspan").css('display');
		if(disp != 'none'){
			return ;
		}
		
		var vehicleStr = '';
		
		// 取所选车辆值
		$("[name=vehicles]:checkbox").each(function() {
			if ($(this).attr("checked") == "checked") {
				vehicleStr += $(this).attr("value") + ",";
			}
		});
		vehicleStr = vehicleStr.substr(0, vehicleStr.length - 1);
		
		var name = $("#name").val();
		var lineId = $("#lineId").val();
		var allowMaxAway = $("#allowMaxAway").val();
		var isAlarm = $("#isAlarm").val();
		var dateTypeId = $("#dateTypeId").val();
		var workingDays = $("#workingDays").val();
		workingDays = workingDays == null ? "" : workingDays;
		var beginDate = $("#beginDate").val();
		var endDate = $("#endDate").val();

		var params = {
			name : name,
			lineId : lineId,
			allowMaxAway : allowMaxAway,
			vehicleIds : vehicleStr,
			dateTypeId : dateTypeId,
			workingDays : workingDays,
			isAlarm : isAlarm
		};
		if(dateTypeId == 2){
			params.beginDate = beginDate;
			params.endDate = endDate;
		}else{
			params.beginTime = beginDate;
			params.endTime = endDate;
		}
		
		$.ajax({
		    type : "POST",
		    url : "monitorCenter/createLineAwayConfig.action",
		    data : params,
		    dataType : "JSON",
		    success : function(data) {
		    	if(data.code == '1'){
		    		 hide();
		    		$("#lineAwayConfigList").flexReload();
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


function doView(id){
	
	hide();
	
	if(id != null && id != ''){
		
		clearForm("viewWindow");
		
		initYersOrNo("isAlarmView");
		initAjaxSelect("dateTypeIdView","sys/initDateTypes.action",0);
		
		$("#vehicleView").html("");
		$("#pointView").html("");
		showView();
		
		$.post("monitorCenter/getLineAwayConfigById.action", {id : id}, function(data){
			if(data.code == '1'){
				
				var config = data.data;
				
				$("#nameView").val(config.Name);
				$("#allowMaxAwayView").val(config.AllowMaxAway);
				
				var isAlarm = config.IsAlarm;
				if(isAlarm && (isAlarm == true || isAlarm == 1)){
					$("#isAlarmView").val(1);
				}
				
				$("#workingDaysView").val(config.WorkingDays == null ? "" : config.WorkingDays);
				
				var dateTypeId = config.DateTypeID;
				$("#dateTypeIdView").val(dateTypeId);
				if(dateTypeId == 2){
					$("#beginDateView").val(config.BeginDate);
					$("#endDateView").val(config.EndDate);
				}else{
					$("#beginDateView").val(config.BeginTime);
					$("#endDateView").val(config.EndTime);
				}
				
				//车牌号
				var vehicleList = config.vehicles;
				var vehicleStr = "";
				vehicleStr += "<ul>";
				if(vehicleList && vehicleList.length>0){
					for ( var i = 0; i < vehicleList.length ; i++) {
						vehicleStr += "<li>" +vehicleList[i].registrationNo+"</li>";
					}
				}
				vehicleStr += "</ul>";
				$("#vehicleView").html(vehicleStr);
				
				//相关区域点
				var pointList = config.points;
				var pointStr = "";
				pointStr += "<ul>";
				if(pointList && pointList.length>0){
					for ( var i = 0; i < pointList.length ; i++) {
						pointStr += "<li>" + pointList[i].Longitude + "," + pointList[i].Latitude + "</li>";
					}
				}
				pointStr += "</ul>";
				$("#pointView").html(pointStr);
				
			}
		});	
	}
}


/**
 * 执行后台方法删除数据
 * @param ids
 * @returns {Boolean}
 */
function doDelete(id){
	if (id != null) {
		if (!confirm("确定删除此路线偏移设置?")) {
			return false;
		} else {
				$.ajax({
				    type : "POST",
				    url : "monitorCenter/deleteLineAwayConfig.action",
				    data : {id:id.toString()},
				    dataType : "JSON",
				    success : function(data) {
				    	if(data.code == '1'){
				    		$("#lineAwayConfigList").flexReload();
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

/**
 * 打开详细框
 */
function showView(){
	$("#viewWindow").animate({height: 'show', opacity: 'show'}, 400);
}

/**
 * 关闭详细框
 */
function hideView(){
	$("#viewWindow").animate({height: 'hide', opacity: 'hide'}, 400);
}
 

function isDigit(){ 
var test_value=document.getElementById("allowMaxAway").value;
var patrn=/^([1-9]\d*|0)(\.\d*[1-9])?$/; 
if (!patrn.exec(test_value)){
	$("#allowMaxAwayspan").showMessage({
		type : "error",
		closeable : false, 
		text : "请输入有效正整数！"});
	}else{
		 $("#allowMaxAwayspan").closeMessage();
	}
} 
