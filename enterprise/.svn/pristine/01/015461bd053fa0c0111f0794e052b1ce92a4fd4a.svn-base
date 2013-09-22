$(function() {
	$("#beginTime").val(dateutil.formatDate(new Date(dateutil.setDateBefore(new Date(),0)),dateutil.FORMAT_DATE_LONG));
	$("#endTime").val(dateutil.formatDate(new Date(dateutil.setDateBefore(new Date(),0)),dateutil.FORMAT_DATE_LONG));
	
	load(); 
	
		$("#recordList").flexigrid( {
			url : 'driving/findDrivingRecordList.action',
			dataType : 'json',
			params : getParam(),
			colModel : [ 
			     {
					display : '车牌号',//表头
					name : 'registrationNo',//JSON数据中属性名
					width : 107,// 得加上 要不IE报错
					sortable : true,//此字段是否能排序
					align : 'left'//对齐方式
			     },{
		    		 display : '轨迹分析组',//表头
		    		 name : 'groupName',//JSON数据中属性名
		    		 width : 107,// 得加上 要不IE报错
		    		 sortable : true,//此字段是否能排序
		    		 align : 'left'//对齐方式
			     },{
			    	 display : '记录生成时间',//表头
			    	 name : 'generateTime',//JSON数据中属性名
			    	 width : 107,// 得加上 要不IE报错
			    	 sortable : true,//此字段是否能排序
			    	 align : 'left'//对齐方式
			     },{
			    	 display : '区域',//表头
			    	 name : 'placeTypeName',//JSON数据中属性名
			    	 width : 107,// 得加上 要不IE报错
			    	 sortable : true,//此字段是否能排序
			    	 align : 'left'//对齐方式
			     },{
			    	 display : '进出时间',//表头
			    	 name : 'timePlaceInOut',//JSON数据中属性名
			    	 width : 107,// 得加上 要不IE报错
			    	 sortable : true,//此字段是否能排序
			    	 align : 'left'//对齐方式
			     },{
			    	 display : '进出区域方式',//表头
			    	 name : 'isOut',//JSON数据中属性名
			    	 width : 107,// 得加上 要不IE报错
			    	 sortable : true,//此字段是否能排序
			    	 align : 'left'//对齐方式
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
			
			//按钮绑定点击事件
			$('#searchBtn').bind('click', toSearch);//查询【reSetAddFormTA方法在base.js文件里面】
			$('#exportBtn').bind('click', exportExl);
		    
			//初始化
		    load();
});

//表名
var tableName = "ANA_DrivingInOutPoly";

/**
 * 查询参数
 */
function getParam(){
	var beginTime = $("#beginTime").val();//起始日期
	var endTime = $("#endTime").val();//终止日期
	var analyseGroupID = $("#analyseGroupID").val();//轨迹分析组
	var registrationNO = $("#registrationNO").val();//车牌号码
	//alert(beginTime+"="+endTime+"="+analyseGroupID+"="+registrationNO);
	
	//查询参数
	var params = [{
		name : 'beginTime',
		value : beginTime+ ' 00:00:00'
	},{
		name : 'endTime',
		value : endTime+ ' 23:59:59'
	},{
		name : 'analyseGroupID',
		value : analyseGroupID
	},{
		name : 'registrationNO',
		value : registrationNO
	},{
		name : 'tableName',
		value : tableName
	}];
	return params;
}

/**
 * 导出列表字段
 */
function exportColumn(){
	
	 var setParam = new QueryParam();
	 setParam.put("@车牌号","registrationNo");
	 setParam.put("@轨迹分析组","groupName");
	 setParam.put("@记录生成时间","generateTime");
	 setParam.put("@区域","placeTypeName");
	 setParam.put("@进出时间","timePlaceInOut");
	 setParam.put("@进出区域方式","isOut");
	
	return setParam;
}

/**
 * 导出方法入口
 */
function exportExl() {
	var str = exportColumn().toStr();
//	alert(str);
	exportDrivingExl('recordList', 'driving/findDrivingExportExl.action',str,'ANA_DrivingInOutPoly','ANA_DrivingInOutPoly');
}


/**
 * 初始化
 * @return
 */
function load(){
	initAjaxSelect_Ansynce("analyseGroupID","sys/getAnalyseGroup.action",2,false);
}
