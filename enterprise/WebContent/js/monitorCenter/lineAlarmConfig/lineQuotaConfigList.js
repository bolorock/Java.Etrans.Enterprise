var errorName="服务器忙，请重试";

//url : 'monitorCenter/findLineOffsetConfigList.action',
$(function() {
	    var params=getparams();
	    $("#lineQuotaConfigList").flexigrid( {
	    	url : 'monitorCenter/findLineQuotaConfigList.action',
			dataType : 'json',
			params : params,
			colModel : [ 
			{
				display : '路线名称',
				name : 'name',
				width : 400,
				sortable : true,
				align : 'center'
			}, {
				display : '速度上限(km/h)',
				name : 'maxSpeed',
				width : 250,
				sortable : true,
				align : 'center'
			}, {
				display : '操作',
				name : 'Handler',
				handlefunction : 'getHandleColumn',
				paramcolnames : ['id'],
				width : 200,
				sortable : false,//操作列不能排序
				align : 'center'
			}],	
			sortname : "id",//第一次加载数据时排序列
			sortorder : "desc",//第一次加载数据时排序类型
			usepager : true,//是否分页，默认为true。
			showTableToggleBtn : true,//是否显示收起/打开按钮,默认不显示。
			useRp : true,//是否可以动态设置每页显示的结果数，默认为false。
			rp : 8,//每页记录数，默认为10
			singleSelect:false,
			width : 'auto',//表格宽度
			height : getNormalHeight()//表格高度
		});
	    
	    
		//初始化验证插件
		$("#addForm").validation();
		//$("#editFrom").validation();
		
		//按钮绑定点击事件
		$('#searchBtn').bind('click', toSearch);//查询
		$('#createBtn').bind('click', toCreate); //新增 
		$('#cancelBtn').bind('click', hide);//取消
		$('#closeBtn').bind('click', hideView);//详情关闭
		
		//设置下拉框不可用
		$('#workingDaysSel').attr("disabled","disabled");
});

function getparams(){
	var lineName = $("#lineName").val();
	
	//查询参数
	var params = [{
		name : 'lineName',
		value : lineName
	}];
	
	return params;
}


/**
* 查询方法
*/
function toSearch(){
	//查询参数
	var params= getparams();
	
	// 重置表格的某些参数
	$("#lineQuotaConfigList").flexOptions({
			newp : 1,// 设置起始页
			params : params// 设置查询参数
		}).flexReload();// 重新加载
}


/**
 * 组装操作列显示内容
 * @param id
 * @returns {String}
 */
function getHandleColumn(id){
	var editStr = "";
	var deleteStr = "";
	if(resources!=null){
		 if(resources.indexOf("|lineQuota_view|")!=-1){
			  editStr = '<a href="javascript:void(0)" onclick="doView(' + id + ')">查看</a>';
		}
		 if(resources.indexOf("|lineQuota_delete|")!=-1){
			  deleteStr = '<a href="javascript:void(0)" onclick="doDelete(' + id + ')">删除</a>';
		}
	}
	return editStr + '&nbsp;&nbsp;' + deleteStr;
}


/**
 * 显示层(这个方法没用到)
 * @param divs 需要显示的层id（多个以，号隔开如：ni,ta,wo）
 * @return typ 显示类型（1表示显示，2表示隐藏）
 */
function blockDiv(divs,typ){
	var names = new Array();
	names=divs.split(",");
	for(var i = 0;i<names.length;i++){
		var id = "#"+names[i];
		if(typ==1){
			$(id).css("display","block");	
		}else if(typ==2){
			$(id).css("display","none");
		}
	}	
}

/**
 * 新增方法入口
 */
function toCreate(){
	$("#submitBtn").unbind("click");
	//清空DIV中包含的所有表单的值
	clearForm("editWindow");
	//初始化是否报警下拉框
	initYersOrNo("isAlarmSel");
	//设置默认时间
	initTime_Value("beginDate","00:00:00","endDate","23:59:59");
	//加载线路列表
	initAjaxSelect("lineIdSel","sys/initLinKinds.action",0);
	//加载检测时间类型列表
	initAjaxSelect("dateTypeIDSel","sys/initDateTypes.action",0);
	
	//showEditForm();
	showAdd();
	//查询车辆列表
	findVehicleList();
	$("#submitBtn").bind("click",ConfigAdd); 

}


//获得车辆id组合
function getVehicleStrIinfo(){
		//车辆id组合以,隔开
		var vehicleStr = '';
		$("[name=vehicles]:checkbox").each(function() {
			
			if ($(this).attr("checked") == "checked") {
				
				vehicleStr += $(this).attr("value") + ",";
			}
		});
		vehicleStr = vehicleStr.substr(0, vehicleStr.length - 1);
		return vehicleStr;
}

function ConfigAdd(){
	//获得选中的车辆id组合
	var vehicleStr = getVehicleStrIinfo();
	var flag = $("#addForm").beforeSubmit();
	if(flag){
		// 复选框验证
		checkboxMessage();
		var disp = $("#vehiclesspan").css('display');
		if(disp != 'none'){
			return ;
		}		
		var lineQuotaConfig = getParams();
		var idStr = vehicleStr;
		$.ajax({
		    type : "POST",
		    //createLineOffsetConfig
		    url : "monitorCenter/createQuotaConfig.action",
		    data : {lineQuotaConfig:lineQuotaConfig,idStr:idStr},
		    dataType : "JSON",
		    success : function(data) {
		    	if(data.code == '0'){
		    		 hide();
		    		$("#lineQuotaConfigList").flexReload();
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

//包装参数
function getParams(){
	
	var lineNameTxt = $("#lineNameTxt").val();//线路名称
	var maxSpeed = $("#maxSpeed").val();//速度上线
	var lineIdSel = $("#lineIdSel").val();//线路id
	var isAlarmSel = $("#isAlarmSel").val();//是否报警
	var dateTypeIDSel = $("#dateTypeIDSel").val();//检测类型id
	var workingDaysSel = $("#workingDaysSel").val();//检测日期
	var beginDate = $("#beginDate").val();//检测开始时间
	var endDate = $("#endDate").val();//检测结束时间
		
	//参数
	var lineOffsetConfig = "{'lineNameTxt':'" + lineNameTxt +
	"','maxSpeed':'" + maxSpeed + 
	"','lineIdSel':" + lineIdSel + 
	",'isAlarmSel':" + isAlarmSel + 
	",'dateTypeIDSel':" + dateTypeIDSel +
	",'workingDaysSel':'" + workingDaysSel;
	//如果是时间
	if(dateTypeIDSel==name1||dateTypeIDSel==name3){
		lineOffsetConfig=lineOffsetConfig+
		"','beginTime':'" + beginDate +
		"','endTime':'" + endDate+"'";
	}
	//日期
	else{
		lineOffsetConfig=lineOffsetConfig+
		"','beginDate':'" + beginDate +
		"','endDate':'" + endDate+"'";
	}
	lineOffsetConfig = lineOffsetConfig+"}";
	return lineOffsetConfig;
}

/**
 * 打开编辑窗口
 */
function showEditForm(){
	show();
	$("#addForm .errorMsg").closeMessage();
}


/**
 * 执行后台方法删除数据
 * @param ids
 * @returns {Boolean}
 */
function doDelete(ids){
	//alert(ids);
	if (ids != null || ids.length > 0) {
		if (!confirm("确定删除线路?")) {
			return false;
		} else {
				$.ajax({
				    type : "POST",
				    url : "monitorCenter/updateQuotaConfig.action",
				    data : {id:ids.toString()},
				    dataType : "JSON",
				    success : function(data) {
				    	if(data.code == '0'){
				    		$("#lineQuotaConfigList").flexReload();
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
 * 查看
 * @param id
 * @return
 */
function doView(id){
	hide();
	if(id != null && id != ''){
		clearForm("viewWindow");
		//初始化是否报警下拉框
		initYersOrNo("isAlarmView");
		//加载检测时间类型列表
		initAjaxSelect("dateTypeIdView","sys/initDateTypes.action",0);
		//相关车辆
		$("#vehicleView").html("");
		//相关区域点
		$("#areaView").html("");
		showView();
		
		$.post("monitorCenter/getQuotaConfigById.action", {id : id}, function(data){
			if(data.code == '1'){
				
				var config = data.data;
				
				$("#nameView").val(config.Name);
				$("#areaIdView").val(config.GeographyID);
				$("#maxSpeedView").val(config.MaxSpeed);
				var isAlarm = config.IsAlarm;
				if(isAlarm && (isAlarm == true || isAlarm == 1)){
					$("#isAlarmView").val(1);
				}
				
				$("#workingDaysView").val(config.WorkingDays == 'null' ? "" : config.WorkingDays);
				
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
				var lineQuotaPointList = config.lineQuotaPoints;
				var areaStr = "";
				areaStr += "<ul>";
				if(lineQuotaPointList && lineQuotaPointList.length>0){
					for ( var i = 0; i < lineQuotaPointList.length ; i++) {
						areaStr += "<li>" + lineQuotaPointList[i].Longitude + "," + lineQuotaPointList[i].Latitude + "</li>";
					}
				}
				areaStr += "</ul>";
				$("#areaView").html(areaStr);
				
			}
			
		});
		
		
	}
	
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
	$("#viewWindow").animate({height: 'hide', opacity: 'hide'}, 250);
}

/**
 * 打开新增
 */
function showAdd(){
	$("#editWindow").animate({height: 'show', opacity: 'show'}, 350);
	$("#editWindow .errorMsg").closeMessage();
}

/**
 * 关闭详新增
 */
function hideAdd(heigth){
	$("#editWindow").animate({height: 'hide', opacity: 'hide'}, 350);
}



function isDigit(){ 
	var test_value=document.getElementById("maxSpeed").value;
	var patrn=/^([1-9]\d*|0)(\.\d*[1-9])?$/; 
	if (!patrn.exec(test_value)){
		$("#maxSpeedspan").showMessage({
			type : "error",
			closeable : false, 
			text : "请输入有效正整数！"});
		}else{
			 $("#maxSpeedspan").closeMessage();
		}
	} 













