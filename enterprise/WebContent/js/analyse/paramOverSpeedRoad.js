$(function() {
		$("#recordList").flexigrid( {
			url : 'analyse/findRecordList.action',
			dataType : 'json',
			params : getParam(),
			colModel : [ 
			   {
					display : '道路类型',
					name : 'name',
					width : 107,
					sortable : true,
					align : 'left'
				} ,{
					display : '速度门限',
					name : 'speed',
					width : 100,
					sortable : true,
					align : 'left'
				},{
					display : '所属分析器',
					name : 'analyseName',
					width : 100,
					sortable : true,
					align : 'left'
				},{
					display : '标记间隔',
					name : 'markIntralNum',
					width : 107,
					sortable : true,
					align : 'left'
				},{
					display : '超速时间门限',
					name : 'bounceOverSpeed',
					width : 100,
					sortable : true,
					align : 'left'
				},{
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
		  
		    
			//初始化
		    load();
});

//表名
var tableName = "ANA_ParamOverSpeedRoad";
//编辑权限
var editAction = "editParamOverSpeedRoad";
//删除权限
var delAction = "deleteParamOverSpeedRoad";

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
	var speed = $("#speed").val(); //速度门限
	var analyseId = $("#analyseId").val();//所属分析器
	var markIntralNum = $("#markIntralNum").val();//标记间隔
	var bounceOverSpeed = $("#bounceOverSpeed").val();//超速时间门限
	

	
	//表单参数
	 var setParam = new QueryParam();
		
	 setParam.put("@name",name);
	 setParam.put("@speed",speed);
	 setParam.put("@analyseId",analyseId);
	 setParam.put("@markIntralNum",markIntralNum);
	 setParam.put("@bounceOverSpeed",bounceOverSpeed);
	 
	return setParam;
}



/**
 * 新增方法入口
 */
function toCreate(){
	//重置按钮可用
	controlYesOrNo("reSetBtn","yes");
	
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
	//初始化所属分析器选择框
	initAjaxSelect_Ansynce("analyseId","sys/getAnalyseNames.action",0,false);

}


/**
 * 编辑方法入口
 * @param id
 * @return
 */
function doEditGo(id){
	//重置按钮不可用
	//controlYesOrNo("reSetBtn","no");
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
