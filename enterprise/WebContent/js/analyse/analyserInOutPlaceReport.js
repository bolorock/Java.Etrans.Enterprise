$(function() {
	
	initGrid();
	 
	 //初始化验证插件
	 $("#editWindow").validation();
	 
	 $('#searchBtn').bind('click', toSearch);//查询
	 $('#createBtn').bind('click', toCreate);//新增
	 $('#cancelBtn').bind('click', hide);//取消
	 
	 
	//初始化
	load();
	    
});

function initGrid(){
		$("#recordList").flexigrid( {
			url : 'analyse/findInOutPolyList.action',
			dataType : 'json',
			colModel : [ //通信号、终端类型、出厂批次、平台唯一编号、终端厂商唯一编号、型号、SIM卡、签权码、使用状态、操作（编辑  删除）
             {
  				display : '轨迹分析组',
  				name : 'AnalyseGroupName',
  				width : 100,
  				sortable : true,
  				align : 'left'
  			},{
 				display : '名称',
 				name : 'Name',
 				width : 100,
 				sortable : true,
 				align : 'left'
 			},{
 				display : '是否报警',
 				name : 'IsAlert',
 				width : 100,
 				sortable : true,
 				align : 'left'
 			},{
 				display : '地点组',
 				name : 'PlaceName',
 				width : 100,
 				sortable : true,
 				align : 'left'
 			},{
 				display : '检测类型',
 				name : 'checkTimeTypeName',
 				width : 100,
 				sortable : true,
 				align : 'left'
 			},{
 				display : '检测日期',
 				name : 'CheckTimeValue',
 				width : 100,
 				sortable : true,
 				align : 'left'
 			},{
 				display : '检测开始时间 ',
 				name : 'CheckTimeBegin',
 				width : 100,
 				sortable : true,
 				align : 'left'
 			},{
 				display : '检测结束时间',
 				name : 'CheckTimeEnd',
 				width : 100,
 				sortable : true,
 				align : 'left'
 			},{
 				display : '时间门限(秒)',
 				name : 'BounceTime',
 				width : 100,
 				sortable : true,
 				align : 'left'
 			},{
 				display : '地点范围(米)',
 				name : 'BounceDistance',
 				width : 100,
 				sortable : true,
 				align : 'left'
 			}, {
 				display : '操作',
 				name : 'Handler',
 				handlefunction : 'getHandleColumn',
 				paramcolnames : ['id'],
 				width : 150,
 				sortable : false,//操作列不能排序
 				align : 'center'	
 			}],
			
			sortname : "id",//第一次加载数据时排序列
			sortorder : "desc",//第一次加载数据时排序类型
			usepager : true,//是否分页，默认为true。
			showTableToggleBtn : true,//是否显示收起/打开按钮,默认不显示。
			useRp : true,//是否可以动态设置每页显示的结果数，默认为false。
			rp : 8,//每页记录数，默认为10
			//checkbox : true,//是否要多选框,默认为false。
			rowId : 'id',// 多选框绑定行的id,只有checkbox : true时才有效。
			singleSelect:false,
			width : 'auto',//表格宽度
			height : getNormalHeight()//表格高度
		});  
};

/**
 * 组装操作列显示内容
 * @param id
 * @returns {String}
 */
function getHandleColumn(id){
	var editStr = "";
	var deleteStr = "";
	if(resources!=null){
		//判断ACTION的访问权限
		 if(resources.indexOf("|updateInOutPoly|")!=-1){
			 editStr = '<a href="javascript:void(0)" onclick="doEdit(' + id + ')"><img src="Images/sys_01.png" width="14" height="16"></a>';
		 }
		 if(resources.indexOf("|delInOutPoly|")!=-1){
			 deleteStr = '<a href="javascript:void(0)" onclick="doDelete(' + id + ')"><img src="Images/sys_02.png" width="14" height="16"></a>';
		 }
		
	}
	return editStr + '&nbsp;&nbsp;' + deleteStr+'&nbsp;&nbsp;';
}





/**
 * 查询平台信息显示在编辑窗口
 * @param id
 */
function doEdit(id){
		if(id != null && id != ''){
			show();
			$("#submitBtn").unbind("click");
			controlYesOrNo("placeTypeID","no");
			var params = {"id":id};
			
			var url="analyse/getInOutPolyById.action";
		    jsUtil.useAjaxDef(url,params, false, toEditSucc);
	}
}

//删除左右两端的空格   
function lrtrim(str){   
 return str.replace(/(^\s*)|(\s*$)/g, "");   
}  

/**
 * 注：查询结果列名必须与页面表单元素名相同
 * 查询信息显示在编辑窗口(成功返回)
 * @param id
 */
function toEditSucc(recordInfo){
	
	if(recordInfo!=null){
		if(recordInfo.length > 0){
			$("#editWindow input:not(:button)").each(function(i){
				$(this).val(lrtrim(recordInfo[0][$(this).attr("name")]+""));
			});
			
			$("#editWindow select").each(function(i){
				$(this).val(recordInfo[0][$(this).attr("name")]);
				//点线面下拉框赋值，并且不可用
				if($(this).attr("id")=="placeTypeID"){
					//alert(recordInfo[0]["placeName"]);
					initSelectDXM("placeTypeID",recordInfo[0]["placeName"]);
				}
			});
			$('#submitBtn').bind('click', doUpdate);
		}
	}else{
		$.messager.alert('提示信息','服务器忙，请重试','info');
	}
}

function doUpdate(){
	
	var canSubmit = $("#editWindow").beforeSubmit();
	if(canSubmit){
		var params = getAddForm();
		$.ajax({
		    type : "POST",
		    url : "analyse/updateInOutPoly.action",
		    data : params,
		    dataType : "JSON",
		    success : function(data) {
		    	if(data!= null){
		    		hide();
		    		$("#recordList").flexReload();
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

function showError(){
	showWarning('服务器忙，请重试！');
}
/**
 * 打开编辑窗口
*/
function showEditForm(){
		show();
		$("#editWindow .errorMsg").closeMessage();
	}



//获取查询参数
function getparams(){
	var name = $("#whereName").val();
	var params = [{
		name : 'name',
		value : name
	}];
	return params;
}

function toSearch(){
	var params= getparams();
	$("#recordList").flexOptions({
			newp : 1,
			params : params
		}).flexReload();
}

/**
 * 新增方法入口
 */
function toCreate(){
	controlYesOrNo("placeTypeID","yes");
	
	$("#titleInfo").html("新增设置");
	//移除点击事件
	$("#submitBtn").unbind("click");
	//清空
	clearForm("editWindow");
	//初始化
	load();
	//打开页面
	show();
	
	$('#submitBtn').bind('click', doCreatedo);
}

function doCreatedo() {
	var flag = $("#editWindow").beforeSubmit();
	if(flag){
		var url = "analyse/createInOutPoly.action";
		var params = getAddForm();
		jsUtil.useAjaxDefault(url, params, doCreateSucc);
	}
}

function doCreateSucc(result) {
	
	if (result != null) {
		hide();
		$.messager.alert('提示信息','新增记录成功！','info');
		$("#recordList").flexReload();
	} else {
		$.messager.alert('提示信息','新增失败！','info');
	}
}


/**
 * 初始化
 * @return
 */
function load(){
	/**调用initSelects.js文件里面的方法begin**/
	/**其它报警设置相同业务【指有检测时间类型业务更这个相同的】必须复制begin**/
	    //控件可用或者不可用【参数解释可以看initSelects.js文件里面的initolad方法头部】
		jspControlYesOrNo("checkTimeValue","checkTimeBegin","checkTimeBegin_go","checkTimeEnd","checkTimeEnd_go","no");
		//检测时间业务初始化控件属性
		initControlSetup("checkTimeValue","checkTimeBegin","checkTimeEnd");
	/**其它报警设置相同业务【指有时间类型业务更这个相同的】必须复制begin**/
		//初始化轨迹分析组选择框
		//initAnalyseGroup("analyseGroupID");
		initAjaxSelect_Ansynce("analyseGroupID","sys/getAnalyseGroup.action",0);
		//初始化是否报警选择框
		initAjaxSelect_Ansynce("checkTimeTypeId","sys/getCheckTimeType.action",0);
		//初始化是否报警选择框
		initAnnunciator("isAlert");
		//初始化区域名称
		initAjaxSelect_Ansynce("placeTypeID","sys/getPoints.action",0);
		
	
		
		
/**调用initSelects.js文件里面的方法end**/
}



function getAddForm() {
	var name = $("#name").val();//名称
	var analyseGroupID = $("#analyseGroupID").val();//分析组 
	var isAlert = $("#isAlert").val();//是否报警 
	
	
	var checkTimeTypeID = $("#checkTimeTypeId").val();//检测类型
	var checkTimeValue = $("#checkTimeValue").val();//检测日期
	var checkTimeBegin = $("#checkTimeBegin").val();//检测开始时间
	var checkTimeEnd = $("#checkTimeEnd").val();//检测结束时间 
	var placeTypeID = $("#placeTypeID").val();//地点组
	var bounceTime = $("#bounceTime").val();//时间门限(秒) 
	var bounceDistance = $("#bounceDistance").val();//地点范围(米)
	var id = $("#id").val();//id
	
	
	// 查询参数
	var params = [ {
		name : 'id',
		value : id
	}, {
		name : 'name',
		value : name
	}, {
		name : 'analyseGroupID',
		value : analyseGroupID
	}, {
		name : 'isAlert',
		value : isAlert
	}, {
		name : 'bounceDistance',
		value : bounceDistance
	}, {
		name : 'bounceTime',
		value : bounceTime
	}, {
		name : 'checkTimeTypeID',
		value : checkTimeTypeID
	}, {
		name : 'checkTimeValue',
		value : checkTimeValue
	}, {
		name : 'checkTimeBegin',
		value : checkTimeBegin
	}, {
		name : 'checkTimeEnd',
		value : checkTimeEnd
	}, {
		name : 'placeTypeID',
		value : placeTypeID
	}];
	return params;
}

function doDelete(ids){
	
	if (ids != null || ids.length > 0) {
		if (!confirm("确定删除选中的信息?")) {
			return false;
		} else {
			$.ajax({
			    type : "POST",
			    url : "analyse/delInOutPoly.action",
			    data : {ids:ids.toString()},
			    dataType : "JSON",
			    success : function(data) {
			    	if(data!=null){
			    		$("#recordList").flexReload();
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
