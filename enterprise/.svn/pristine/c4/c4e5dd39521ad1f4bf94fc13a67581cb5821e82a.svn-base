$(function() {

	initGrid();

	// 初始化验证插件
	$("#editWindow").validation();
	initSelects();
	//按钮绑定点击事件
	$('#adSearchBtn').bind('click', toOpenAds);
	$('#searchBtn').bind('click', toSearch);
    $('#exportBtn').bind('click', toExportExl);

});

function initGrid() {
	var sendTimeStart = $("#sendTimeStart").val();//发送开始时间
	var sendTimeEnd = $("#sendTimeEnd").val();//发送结束时间
	
	var params = [{
		name : 'sendTimeStart',
		value : sendTimeStart
	},{
		name : 'sendTimeEnd',
		value : sendTimeEnd
	}];
	
	$("#logCommandList").flexigrid({
		url : 'sys/logCommandList.action',
		dataType : 'json',
		params : params,
		colModel : [ /* 指令、终端类型、车牌号码、发送内容、发送时间、接收内容、接收时间、用户 */
         {
 			display : '车牌号码',
 			name : 'REGISTRATIONNO',
 			width : 100,
 			sortable : false,
 			align : 'center'
 		},
 		{
 			display : '车牌颜色',
 			name : 'RegistrationNOColor',
 			width : 100,
 			sortable : false,
 			align : 'center'
 		},{
			display : '指令',// 表头
			name : 'PC_NAME',// JSON数据中属性名
			width : 150,// 得加上 要不IE报错
			sortable : true,// 此字段是否能排序
			align : 'center'// 对齐方式
		}, {
			display : '终端类型',
			name : 'PTK_NAME',
			width : 100,
			sortable : true,
			align : 'center'
		},{
			display : '发送内容',
			name : 'SENDCONTENT',
			width : 100,
			sortable : false,
			align : 'center'
		}, {
			display : '发送时间',
			name : 'SENDTIME',
			width : 120,
			sortable : true,
			align : 'center'
		}, {
			display : '接收内容',
			name : 'RECEIVECONTENT',
			width : 150,
			sortable : false,
			align : 'center'
		}, {
			display : '接收时间',
			name : 'RECEIVETIME',
			width : 120,
			sortable : true,
			align : 'center'
		}, {
			display : '用户',
			name : 'PU_NAME',
			width : 100,
			sortable : true,
			align : 'center'
		} ],
		sortname : "ID",// 第一次加载数据时排序列
		sortorder : "asc",// 第一次加载数据时排序类型
		usepager : true,// 是否分页，默认为true。
		useRp : true,// 是否可以动态设置每页显示的结果数，默认为false。
		rp : 8,// 每页记录数，默认为10
		//checkbox : true,// 是否要多选框,默认为false。
		rowId : 'ID',// 多选框绑定行的id,只有checkbox : true时才有效。
		singleSelect : false,
		width : 'auto',// 表格宽度
		height : getNormalHeight()-15// 表格高度
	});
	
};

/**
 * 查询方法
 */
function toSearch() {

	var REGISTRATIONNO = $("#REGISTRATIONNO").val();//车牌号码
	var PTK_NAME = $("#PTK_NAME").val();//终端类型
	var PC_NAME = $("#PC_NAME").val();//指令
	var sendTimeStart = $("#sendTimeStart").val();//发送开始时间
	var sendTimeEnd = $("#sendTimeEnd").val();//发送结束时间
	var vehicleIds=$("#vehicleIds").val();
	
	// 查询参数
	var params = [ {
		name : 'REGISTRATIONNO',
		value : REGISTRATIONNO
	},{
		name : 'PTK_NAME',
		value : PTK_NAME
	},{
		name : 'PC_NAME',
		value : PC_NAME
	},{
		name : 'sendTimeStart',
		value : sendTimeStart
	},{
		name : 'sendTimeEnd',
		value : sendTimeEnd
	},{
		name : 'vehicleIds',
		value : vehicleIds
	}];
	// 重置表格的某些参数
	$("#logCommandList").flexOptions( {
		newp : 1,// 设置起始页
		params : params
	// 设置查询参数
			}).flexReload();// 重新加载
	document.getElementsByName("vehicleIds")[0].value="";
	document.getElementsByName("REGISTRATIONNO")[0].value="";
}


/**
 *初始化终端信息管理界面下拉框
 */
function initSelects(){
	
	initAjaxSelect("PTK_NAME","sys/initTerminalKind.action","1");
}

/**
 * 显示错误信息
 */
function showError() {
	showWarning('服务器忙，请重试！');
}
/**
 * 打开高级搜索框
 */
function toOpenAds(){
	var adSearch=$("#adSearch");
	adSearch.animate({height: 'toggle', opacity: 'toggle'}, 10);
	var adSearchBtn=$("#adSearchBtn");
	if(adSearchBtn.html()=='高级搜索'){
		adSearchBtn.html("收起高级搜索");
	}else{
		adSearchBtn.html("高级搜索");
	}
}
/**
 * 显示提示信息
 */
function showWarning(str) {
	$.messager.alert('提示信息', str, 'info');
}
/**
 * 导出方法入口
 */
function toExportExl() {
	exportExl('logCommandList', 'sys/exportLogCommand.action');
}
