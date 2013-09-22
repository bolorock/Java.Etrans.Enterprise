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
			url : 'analyse/findOverSpeedPolyList.action',
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
 				display : '区域',
 				name : 'PolyName',
 				width : 100,
 				sortable : true,
 				align : 'left'
 			},{
 				display : '区域超速速度门限',
 				name : 'RoundSpeedMax',
 				width : 120,
 				sortable : true,
 				align : 'left'
 			},{
 				display : '区域超速提醒距离',
 				name : 'WarningDistance',
 				width : 120,
 				sortable : true,
 				align : 'left'
 			},{
 				display : '连续超速的点个数',
 				name : 'ContinuousPoints',
 				width : 120,
 				sortable : true,
 				align : 'left'
 			},{
 				display : '预警间隔(分)',
 				name : 'WaringTimeOut',
 				width : 120,
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
		 if(resources.indexOf("|updateOverSpeedPoly|")!=-1){
			 editStr = '<a href="javascript:void(0)" onclick="doEdit(' + id + ')"><img src="Images/sys_01.png" width="14" height="16"></a>';
		 }
		 if(resources.indexOf("|delOverSpeedPoly|")!=-1){
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
			controlYesOrNo("polyID","no");
			var params = {"id":id};
			
			var url="analyse/getOverSpeedPolyById.action";
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
				if($(this).attr("id")=="polyID"){
					initSelectDXM("polyID",recordInfo[0]["polyName"]);
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
		    url : "analyse/updateOverSpeedPoly.action",
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
	
	controlYesOrNo("polyID","yes");
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
		var url = "analyse/createOverSpeedPoly.action";
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
	
		//初始化轨迹分析组选择框
		initAjaxSelect_Ansynce("analyseGroupID","sys/getAnalyseGroup.action",0);
	
	
		//初始化区域名称
		initAjaxSelect_Ansynce("polyID","sys/getCustomArea.action",0);
		
		
/**调用initSelects.js文件里面的方法end**/
}



function getAddForm() {
	var name = $("#name").val();//名称
	var analyseGroupID = $("#analyseGroupID").val();//分析组 
	var roundSpeedMax = $("#roundSpeedMax").val();//区域超速速度门限
	var warningDistance = $("#warningDistance").val();//区域超速提醒距离
	var continuousPoints = $("#continuousPoints").val();//连续超速的点个数
	var waringTimeOut = $("#waringTimeOut").val();//预警间隔(分)
	var polyID = $("#polyID").val();//区域
	
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
		name : 'roundSpeedMax',
		value : roundSpeedMax
	}, {
		name : 'warningDistance',
		value : warningDistance
	}, {
		name : 'continuousPoints',
		value : continuousPoints
	}, {
		name : 'waringTimeOut',
		value : waringTimeOut
	}, {
		name : 'polyID',
		value : polyID
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
			    url : "analyse/delOverSpeedPoly.action",
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
