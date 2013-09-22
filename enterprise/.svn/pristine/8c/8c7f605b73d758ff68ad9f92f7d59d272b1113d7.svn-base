
$(function() {
     
	    initWeek2Date("slBeginWeek");

		$("#findVehicleSpeedList").datagrid( {
			url : 'query/stat/findVehicleSpeedList.action',
//			dataType : 'json',
			queryParams : getparams(),
			columns : [ [
			{
				title : '车牌号码',//表头
				field : 'registrationNo',//JSON数据中属性名
				rowspan: 3,
				width : 120,// 得加上 要不IE报错
				sortable : true,//此字段是否能排序
				align : 'left'//对齐方式
			},{
				title : '本周累计',
				field : 'WeekAveSpeed',
				rowspan: 3,
				width :120,
				sortable : true,
				align : 'left'
			},{
				title : '本月累计',
				field : 'MonthAveSpeed',
				rowspan: 3,
				width :120,
				sortable : true,
				align : 'left'
			},{
				title : '本年累计',
				field : 'YearAveSpeed',
				rowspan: 3,
				width :120,
				sortable : true,
				align : 'left'
			},
			{
				title:'同期',
				colspan:6
				
			}],[
					{
						title:'上周',colspan:2
					} ,
					{
						title:'上月',colspan:2
					},{
						title:'上年',colspan:2
					}
			    ],[
			
			{
				title : '数量',
				field : 'WeekAveSpeed_oWeek',
				width :100,
				sortable : true,
				align : 'left'
			},{
				title : '本周比上周%',
				field : 'WeekNumber',
				width :100,
				sortable : true,
				align : 'left'
			}, {
				title : '数量',
				field : 'DayAveSpeed_oMonth',
				width :100,
				sortable : true,
				align : 'left'
			}, {
				title : '本月比上月%',
				field : 'MonthNumber',
				width :100,
				sortable : true,
				align : 'left'
			},{
				title : '数量',
				field : 'DayAveSpeed_oYear',
				width :100,
				sortable : true,
				align : 'left'
			}, {
				title : '本年比上年%',
				field : 'YearNumber',
				width :100,
				sortable : true,
				align : 'left'
			}]],	
			sortName : "ID",//第一次加载数据时排序列
			sortOrder : "asc",//第一次加载数据时排序类型
			pagination : true,//是否分页，默认为true。
			nowrap : false,
			striped: true, 
		
			pageSize: 8,//每页显示的记录条数，默认为10
	        pageList: [8,10, 15, 20, 25, 50, 100],//可以设置每页记录条数的列表  
			loadMsg:'加载数据.....请稍后',
			singleSelect : false,
			width : 'auto',//表格宽度
			height : getNormalHeight()+60//表格高度
		});
		
		var p = $('#findVehicleSpeedList').datagrid('getPager');  

	    $(p).pagination({  
	        pageNumber: 1,

	        beforePageText: '第',//页数文本框前显示的汉字  

	        afterPageText: '页    共 {pages} 页',  

	        displayMsg: '显示 {from}到{to} 条， 共 {total} 条'  

	    }); 
	    
	  //按钮绑定点击事件
		$('#searchBtn').bind('click', toSearch);
		$('#showBtn').bind('click', chartGraphic);
		$('#exportBtn').bind('click', toExportExl);

});

//条形图
function chartGraphic() {
	$("#uplinePercent").hide();
	var workUnitNameWhere = $("#workUnitNameParam").val();
	var startDate = $("#startDate").val()+" 00:00:00";
	var endDate = $("#endDate").val()+" 23:59:59";
	var chart = new FusionCharts("fusionCharts/Charts/Column3D.swf", "barsChart", "800", "400"); 
	
	chart.setJSONUrl("query/stat/getUplinePercentCharts.action?startDate="+startDate+"&endDate="+endDate+"&workUnitNameWhere="+workUnitNameWhere);
	chart.render("uplinePercentChart");
	$("#uplinePercentChart").show();
}



/**
 * 查询参数
 * @return
 */
function getparams(){
	var workUnitName = $("#workUnitNameParam").val();
	//workUnitName=lrtrim(workUnitName);
	var registrationNo =$("#registrationNo").val();
	//registrationNo=lrtrim(registrationNo);
	 var weekVal = $("#slBeginWeek").val();
		var yearWeekNum = weekVal.split("@");
	//	alert("yearWeekNum"+yearWeekNum[3]);
		var yearstr=yearWeekNum[3].split("-");
		var year=yearWeekNum[0];
		var month=yearstr[1];
		var day=yearstr[2];
		var week=yearWeekNum[1];
        var  isSection = 2;
		//查询参数
		var params = {
		    workUnitName : workUnitName,
		    year : year,
		    month : month,
			day : day,
			week : week,
			registrationNo : registrationNo,
			isSection:isSection
		};
	  return params;
}

/**
* 查询方法
*/
function toSearch(){
//	$("#uplinePercentChart").hide();
	//查询参数
	var params=getparams();
	// 重置表格的某些参数
	$("#findVehicleSpeedList").datagrid({
			newp : 1,// 设置起始页
			queryParams : params// 设置查询参数
		});
	 var p = $('#findVehicleSpeedList').datagrid('getPager');     
	       $(p).pagination({     
	           pageSize: 8,//每页显示的记录条数，默认为10     
	           pageList: [8,10, 15, 20, 25, 50, 100],//可以设置每页记录条数的列表     
	           beforePageText: '第',//页数文本框前显示的汉字     
	           afterPageText: '页    共 {pages} 页',     
	          displayMsg: '显示 {from}到{to} 条，   共 {total} 条'   
	     }); 

	
}


/**
 * 导出方法入口
 */
function toExportExl() {
	var options= $('#findVehicleSpeedList').datagrid('options');
	var page = options.pageNumber;
	var rows = options.pageSize;
	var workUnitName = $("#workUnitNameParam").val();
	//workUnitName=lrtrim(workUnitName);
	var registrationNo =$("#registrationNo").val();
	//registrationNo=lrtrim(registrationNo);
	 var weekVal = $("#slBeginWeek").val();
		var yearWeekNum = weekVal.split("@");
		var yearstr=yearWeekNum[3].split("-");
		var year=yearWeekNum[0];
		var month=yearstr[1];
		var day=yearstr[2];
		var week=yearWeekNum[1];
		var  isSection = 2;
	exportExlEasyui('findVehicleSpeedList', 'query/stat/VehicleSpeedListExportExl.action?workUnitName='+workUnitName+'&year='+year+
			'&month='+month+'&day='+day+'&week='+week+'&registrationNo='+registrationNo+'&page='+page+'&rows='+rows+'&isSection='+isSection);
			
}


