$(function() {
		$("#recordList").flexigrid( {
			url : 'analyse/findAnalyserLiveList.action',
			dataType : 'json',
			params : getParam(),
			colModel : [ 
			{
					display : '轨迹分析组',//表头
					name : 'groupName',//JSON数据中属性名
					width : 107,// 得加上 要不IE报错
					sortable : true,//此字段是否能排序
					align : 'left'//对齐方式
				},{
					display : '名称',
					name : 'name',
					width : 107,
					sortable : true,
					align : 'left'
				} ,{
					display : '是否报警',
					name : 'isAlert',
					width : 100,
					sortable : true,
					align : 'left'
				},{
					display : '地点',
					name : 'typeName',
					width : 107,
					sortable : true,
					align : 'left'
				},{
					display : '检查类型',
					name : 'checkTimeTypeName',
					width : 107,
					sortable : true,
					align : 'left'
				},{
					display : '检查日期',
					name : 'checkTimeValue',
					width : 107,
					sortable : true,
					align : 'left'
				},{
					display : '检查开始时间',
					name : 'checkTimeBegin',
					width : 107,
					sortable : true,
					align : 'left'
				},{
					display : '检查结束时间',
					name : 'checkTimeEnd',
					width : 100,
					sortable : true,
					align : 'left'
				}, {
					display : '规定休息时长(分钟)',
					name : 'breakTimeLen',
					width : 100,
					sortable : true,
					align : 'left'
				},{
					display : '范围门限(米)',
					name : 'rangeValue',
					width : 107,
					sortable : true,
					align : 'left'
				},{
					display : '进入休息区语音 ',
					name : 'hintVoice',
					width : 107,
					sortable : true,
					align : 'left'
				},{
					display : '停车时间过短语音',
					name : 'coss',
					width : 107,
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
				rp : 10,//每页记录数，默认为10
				checkbox : false,//是否要多选框,默认为false。
//				rowId : 'ID',// 多选框绑定行的id,只有checkbox : true时才有效。
				singleSelect:false,
				width : 'auto',//表格宽度
				height : getHandleHeight()//表格高度
			});
			
			//初始化验证插件
			$("#editWindow").validation();
			
			//按钮绑定点击事件
			$('#searchBtn').bind('click', toSearch);//查询【toSearch方法在base.js文件里面】
		    $('#createBtn').bind('click', toCreate);//新增
		    $('#cancelBtn').bind('click', hide);//取消 【hide方法在window.js文件里面】
//		    $('#reSetBtn').bind('click', reSetAddFormTAGo);//重置
		    
			//初始化
		    load();
});

//表名
var tableName = "ANA_AnalyserLive";
//编辑权限
var editAction = "editLive";
//删除权限
var delAction = "deleteLive";

var DXMTypeName="typeName";
/**
 * 查询参数
 */
function getParam(){
	
	var name = $("#whereName").val();
	
	//查询参数
	var params = [{
		name : 'name',
		value : name
	}];
	return params;
}






///**
// * 重置方法入口
// */
//function reSetAddFormTAGo(){
//	//重置【reSetAddFormTA方法在base.js文件里面】
//	reSetAddFormTA("editWindow","checkTimeValue","checkTimeBegin","checkTimeBegin_go","checkTimeEnd","checkTimeEnd_go");
//}


/**
 * 新增方法入口
 */
function toCreate(){
	//点下拉框可用
	controlYesOrNo("typeName","yes");
	
	$("#titleInfo").html("新增设置");
	//移除点击事件
	$("#submitBtn").unbind("click");
	//清空
	clearForm("editWindow");
	//初始化
	load();
	//打开页面
	show();
	//重新添加点击事件【doCreate方法在base.js文件里面】
	$('#submitBtn').bind('click', ConfigAdd);
}

/**
 * 新增方法
 */
function ConfigAdd(){
	var flag = $("#editWindow").beforeSubmit();
	
	if(flag){
		//保存参数
		var analyserLiveInfo = getParams();
		
		$.ajax({
		    type : "POST",
		    url : "analyse/addAnalyserLive.action",
		    data : {analyserLiveInfo:analyserLiveInfo},
		    dataType : "JSON",
		    success : function(data) {
		    	if(data.code == '1'){
		    		 hide();
		    		 //刷新查询列表
		    		$("#recordList").flexReload();
		    	}else if(data.code == '2'){
		    		alert("名称已存在!");
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



//修改参数
function getAddForm(){
	
	var name = $("#name").val();//名称
	var analyseGroupID = $("#analyseGroupID").val(); //分析组id
	var isAlert = $("#isAlert").val();//是否报警
//	var typeName = $("#typeName").val();//地点名称
	var checkTimeTypeId = $("#checkTimeTypeId").val();//检测类型id
	var checkTimeValue = $("#checkTimeValue").val();//检测日期
	var checkTimeBegin = $("#checkTimeBegin").val();//检测开始时间
	var checkTimeEnd = $("#checkTimeEnd").val();//检测结束时间
	var breakTimeLen = $("#breakTimeLen").val();//规定休息时长(分钟)
	var rangeValue = $("#rangeValue").val();//范围门限(米)
	var hintVoice = $("#hintVoice").val();//进入休息区语音
	var coss = $("#coss").val();//停车时间过短语音
	
	 var setParam = new QueryParam();
	 setParam.put("@name",name);
	 setParam.put("@analyseGroupID",analyseGroupID);
	 setParam.put("@isAlert",isAlert);
//	 setParam.put("@typeNameId",typeNameId);
	 setParam.put("@checkTimeTypeId",checkTimeTypeId);
	 setParam.put("@checkTimeValue",checkTimeValue);
	 setParam.put("@checkTimeBegin","'"+checkTimeBegin+"'");
	 setParam.put("@checkTimeEnd","'"+checkTimeEnd+"'");
	 setParam.put("@breakTimeLen",breakTimeLen);
	 setParam.put("@rangeValue",rangeValue);
	 setParam.put("@hintVoice",hintVoice);
	 setParam.put("@coss",coss);
	
	return setParam;
	
}

//保存参数
function getParams(){
	
	var name = $("#name").val();//名称
	var analyseGroupID = $("#analyseGroupID").val(); //分析组id
	var isAlert = $("#isAlert").val();//是否报警
	//alert($("#typeName").find("option:selected").text());
	var typeName = $("#typeName").find("option:selected").text();//地点名称
	var typeNameId =  $("#typeName").val();//地点id
	var checkTimeTypeId = $("#checkTimeTypeId").val();//检测类型id
	var checkTimeValue = $("#checkTimeValue").val();//检测日期
	var checkTimeBegin = $("#checkTimeBegin").val();//检测开始时间
	var checkTimeEnd = $("#checkTimeEnd").val();//检测结束时间
	var breakTimeLen = $("#breakTimeLen").val();//规定休息时长(分钟)
	var rangeValue = $("#rangeValue").val();//范围门限(米)
	var hintVoice = $("#hintVoice").val();//进入休息区语音
	var coss = $("#coss").val();//停车时间过短语音
	
	
	
	var analyserLiveInfo  = "{'name':'" + name+"'"
	+",'analyseGroupID':" + "'"+analyseGroupID+"'"
	+",'isAlert':" + "'"+isAlert+"'"
	+",'typeName':" + "'"+typeName+"'"
	+",'typeNameId':" + "'"+typeNameId+"'"
	+",'checkTimeTypeId':" + "'"+checkTimeTypeId+"'"
	+",'checkTimeValue':" + "'"+checkTimeValue+"'"
	+",'checkTimeBegin':" + "'"+checkTimeBegin+"'"
	+",'checkTimeEnd':" + "'"+checkTimeEnd+"'"
	+",'breakTimeLen':" + "'"+breakTimeLen+"'"
	+",'rangeValue':" + "'"+rangeValue+"'"
	+",'hintVoice':" + "'"+hintVoice+"'"
	+",'coss':" + "'"+coss+"'";
	
	analyserLiveInfo = analyserLiveInfo+"}";
	return analyserLiveInfo;
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
		initAjaxSelect_Ansynce("analyseGroupID","sys/getAnalyseGroup.action",0,false);
		//初始化检测类型
		initAjaxSelect_Ansynce("checkTimeTypeId","sys/getCheckTimeType.action",0,false);
		//初始化是否报警选择框
		initAnnunciator("isAlert");
		//初始化地点选择框
		initAjaxSelect_Ansynce("typeName","sys/getPoints.action",0,false);
/**调用initSelects.js文件里面的方法end**/
}






/**
 * 编辑方法入口
 * @param id
 * @return
 */
function doEditGo(id){
	//初始化
	//load();
	//【方法在base.js文件里面】
	doEdit(id);
	
	//点下拉框不可用
	controlYesOrNo("typeName","no");
}


/**
 * 删除方法入口
 * @return
 */
function doDeleteGo(ids){
	if (ids != null || ids.length > 0) {
		if (!confirm("确定删除选中的设置?")) {
			return false;
		} else {
				$.ajax({
				    type : "POST",
				    url : "analyse/delAnalyserLive.action",
				    data : {id:ids.toString()},
				    dataType : "JSON",
				    success : function(data) {
				    	if(data.code == '1'){
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
