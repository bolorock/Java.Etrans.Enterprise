$(function() {
		$("#recordList").flexigrid( {
			url : 'analyse/findRecordList.action',
			dataType : 'json',
			params : getParam(),
			colModel : [ 
			{
					display : '轨迹分析组',//表头
					name : 'AnalyseGroupName',//JSON数据中属性名
					width : 107,// 得加上 要不IE报错
					sortable : true,//此字段是否能排序
					align : 'left'//对齐方式
				},{
					display : '名称',
					name : 'Name',
					width : 107,
					sortable : true,
					align : 'left'
				} ,{
					display : '是否报警',
					name : 'IsAlert',
					width : 100,
					sortable : true,
					align : 'left'
				},{
					display : '检测类型',
					name : 'checkTimeTypeName',
					width : 107,
					sortable : true,
					align : 'left'
				},{
					display : '检测日期',
					name : 'CheckTimeValue',
					width : 100,
					sortable : true,
					align : 'left'
				},{
					display : '开始检查时间',
					name : 'CheckTimeBegin',
					width : 107,
					sortable : true,
					align : 'left'
				},{
					display : '结束检查时间',
					name : 'CheckTimeEnd',
					width : 100,
					sortable : true,
					align : 'left'
				}, {
					display : '疲劳距离(米)',
					name : 'BounceOverDistance',
					width : 100,
					sortable : true,
					align : 'left'
				},{
					display : '疲劳时间(秒)',
					name : 'BounceOverTime',
					width : 107,
					sortable : true,
					align : 'left'
				},{
					display : '允许最长停车时间(秒)',
					name : 'AllowMaxStopTime',
					width : 107,
					sortable : true,
					align : 'left'
				},{
					display : '播报内容',
					name : 'SoundContent',
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
			$('#searchBtn').bind('click', toSearch);//查询【reSetAddFormTA方法在base.js文件里面】
		    $('#createBtn').bind('click', toCreate);//新增
		    $('#cancelBtn').bind('click', hide);//取消 【reSetAddFormTA方法在window.js文件里面】
		    $('#reSetBtn').bind('click', reSetAddFormTAGo);//重置
		    
			//初始化
		    load();
});

//表名
var tableName = "ANA_AnalyserDriverOverTime";
//编辑权限
var editAction = "editDriverOverTime";
//删除权限
var delAction = "deleteDriverOverTime";

var DXMTypeName="";

/**
 * 查询参数
 */
function getParam(){
	
	var name = $("#whereName").val();
	
	//查询参数
	var params = [{
		name : 'name',
		value : name
	},{
		name : 'tableName',
		value : tableName
	}];
	return params;
}

/**
 * 保存表单数据
 */
function getAddForm(){
	
	var name = $("#name").val();//名称
	var analyseGroupID = $("#analyseGroupID").val(); //分析组id
	var isAlert = $("#isAlert").val();//是否报警
	var checkTimeTypeId = $("#checkTimeTypeId").val();//检测类型id
	var checkTimeValue = $("#checkTimeValue").val();//检测日期
	var checkTimeBegin = $("#checkTimeBegin").val();//检测开始时间
	var checkTimeEnd = $("#checkTimeEnd").val();//检测结束时间
	var bounceOverDistance = $("#bounceOverDistance").val();//疲劳距离(米)
	var bounceOverTime = $("#bounceOverTime").val();//疲劳时间(秒)
	var allowMaxStopTime = $("#allowMaxStopTime").val();//允许最长停车时间
	var soundContent = $("#soundContent").val();//播报内容
	
	 var setParam = new QueryParam();
	 setParam.put("@name",name);
	 setParam.put("@analyseGroupID",analyseGroupID);
	 setParam.put("@isAlert",isAlert);
	 setParam.put("@checkTimeTypeId",checkTimeTypeId);
	 setParam.put("@checkTimeValue",checkTimeValue);
	 setParam.put("@checkTimeBegin","'"+checkTimeBegin+"'");
	 setParam.put("@checkTimeEnd","'"+checkTimeEnd+"'");
	 setParam.put("@bounceOverDistance",bounceOverDistance);
	 setParam.put("@bounceOverTime",bounceOverTime);
	 setParam.put("@allowMaxStopTime",allowMaxStopTime);
	 setParam.put("@soundContent",soundContent);
	
	return setParam;
}

/**
 * 重置方法入口
 */
function reSetAddFormTAGo(){
	//重置【reSetAddFormTA方法在base.js文件里面】
	reSetAddFormTA("editWindow","checkTimeValue","checkTimeBegin","checkTimeBegin_go","checkTimeEnd","checkTimeEnd_go");
}

/**
 * 新增方法入口
 */
function toCreate(){
	
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
	$('#submitBtn').bind('click', doCreate);
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
		//初始化是否报警选择框
		initAjaxSelect_Ansynce("checkTimeTypeId","sys/getCheckTimeType.action",0,false);
		//初始化是否报警选择框
		initAnnunciator("isAlert");
		
/**调用initSelects.js文件里面的方法end**/
}


/**
 * 编辑方法入口
 * @param id
 * @return
 */
function doEditGo(id){
	//重置按钮不可用
	controlYesOrNo("reSetBtn","no");
	//初始化
	load();
	//【方法在base.js文件里面】
	doEdit(id);
}


/**
 * 删除方法入口
 * @return
 */
function doDeleteGo(id){
	//【方法在base.js文件里面】
	doDelete(id);

}
