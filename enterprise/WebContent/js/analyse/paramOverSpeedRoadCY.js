$(function() {
		$("#recordList").flexigrid( {
			url : 'analyse/findRecordList.action',
			dataType : 'json',
			params : getParam(),
			colModel : [ 
			{
					display : '道路类型',//表头
					name : 'Name',//JSON数据中属性名
					width : 107,// 得加上 要不IE报错
					sortable : true,//此字段是否能排序
					align : 'left'//对齐方式
				},{
					display : '所属分析器',
					name : 'AnalyseName',
					width : 107,
					sortable : true,
					align : 'left'
				} ,{
					display : '速度门限(km/h)',
					name : 'BounceOverSpeed',
					width : 120,
					sortable : true,
					align : 'left'
				},{
					display : '时间门限(秒)',
					name : 'BounceOverSpeedTime',
					width : 120,
					sortable : true,
					align : 'left'
				},{
					display : '预报警速度门限(km/h)',
					name : 'ForewarnSpeed',
					width : 135,
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
		  //  $('#reSetBtn').bind('click', reSetAddFormTAGo);//重置
		    
			//初始化
		    load();
});

//表名
var tableName = "ANA_ParamOverSpeedRoad_CY";
//编辑权限
var editAction = "editParamOverSpeedRoadCY";
//删除权限
var delAction = "deleteParamOverSpeedRoadCY";

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
	
	
	var name = $("#name").val();//道路类型
	var analyseID = $("#analyseID").val(); //所属分析器
	var bounceOverSpeed = $("#bounceOverSpeed").val();//速度门限(km/h)
	var bounceOverSpeedTime = $("#bounceOverSpeedTime").val();//时间门限(秒)
	var forewarnSpeed = $("#forewarnSpeed").val();//预报警速度门限(km/h)
	
	
	 var setParam = new QueryParam();
	
	 setParam.put("@name",name);
	 setParam.put("@analyseID",analyseID);
	 setParam.put("@bounceOverSpeed",bounceOverSpeed);
	 setParam.put("@bounceOverSpeedTime",bounceOverSpeedTime);
	 setParam.put("@forewarnSpeed",forewarnSpeed);
	
	
	return setParam;
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
		//所属分析器-道路超速报警(长运)选择框
		initAjaxSelect_Ansynce("analyseID","sys/getOverSpeedRoadCY.action",0,false);
	

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
