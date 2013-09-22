
$(function() {
	   
	$("#statTypeSelect").get(0).options[0].selected=true;
     initWeek2Date("slBeginWeek");
     
		$("#findVehicleSectionUplineList").flexigrid( {
			url : 'query/stat/findVehicleUplineList.action',
			dataType : 'json',
			params : getparams(),
			colModel : [ 
			{
				display : '企业名称',
				name : 'unitname',
				width :200,
				sortable : true,
				align : 'left'
			},  {
				display : '上线车辆数',
				name : 'vehicleCount',
				width :100,
				sortable : true,
				align : 'left'
			},{
				display : '上传数',
				name : 'sum_Vilide',
				width :100,
				sortable : true,
				align : 'left'
			}, {
				display : '每分钟上传数',
				name : 'timeNumber',
				width :150,
				sortable : true,
				align : 'left'
			}, {
				display : '最新时间',
				name : 'gps_time',
				width :200,
				sortable : true,
				align : 'left'
			},  {
				display : '车辆数',
				name : 'VehicleSum',
				width :80,
				sortable : true,
				align : 'left'
			},{
				display : '上线率',
				name : 'vilideRate',
				width :80,
				sortable : true,
				align : 'left'
			}],	
			sortname : "workunitId",//第一次加载数据时排序列
			sortorder : "asc",//第一次加载数据时排序类型
			usepager : true,//是否分页，默认为true。
			showTableToggleBtn : true,//是否显示收起/打开按钮,默认不显示。
			useRp : true,//是否可以动态设置每页显示的结果数，默认为false。
			rp : 8,//每页记录数，默认为10
			singleSelect:false,
			width : 'auto',//表格宽度
			height : getNormalHeight()//表格高度
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
 * 打开高级搜索框
 */
function toOpenAds(){
	$("#adSearch").animate({height: 'toggle', opacity: 'toggle'}, 400);
}


/**
 * js格式化当前时间为yyyy-mm-dd形式 
 * @return CurrentDate
 */
function getNowFormatDate() 
{ 
	var day = new Date(); 
	var Year = 0; 
	var Month = 0; 
	var Day = 0; 
	var CurrentDate = ""; 
	//初始化时间 
	Year= day.getFullYear();//ie火狐下都可以 
	Month= day.getMonth()+1; 
	Day = day.getDate(); 
	CurrentDate += Year + "-"; 
	if (Month >= 10 ) 
	{ 
	CurrentDate += Month + "-"; 
	} 
	else 
	{ 
	CurrentDate += "0" + Month + "-"; 
	} 
	if (Day >= 10 ) 
	{ 
	CurrentDate += Day ; 
	} 
	else 
	{ 
	CurrentDate += "0" + Day ; 
	} 
	return CurrentDate; 
} 

/**
 * 查询参数
 * @return
 */
function getparams(){
	var workUnitName = $("#workUnitNameParam").val();
	//workUnitName=lrtrim(workUnitName);
	 var weekVal = $("#slBeginWeek").val();
	 //当前时间
		var yearWeekNum = weekVal.split("@");
		var yearstr=yearWeekNum[3].split("-");
		var year=yearWeekNum[0];
		var month=yearstr[1];
		var day=yearstr[2];
		var week=yearWeekNum[1];
	//判断当前是否是部门统计
	 var isSection = 1;
		//查询参数
		var params = [{
			name : '@workUnitName',
			value : workUnitName
		},{
			name : '@year',
			value : year
		} ,{
			name : '@month',
			value : month
		},{
			name : '@day',
			value : day
		},{
			name : '@week',
			value : week
		},{
			name: '@registrationNo',
			value : null
		},{
			name: '@isSection',
			value : isSection
		}];
	
	
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
	$("#findVehicleSectionUplineList").flexOptions({
			newp : 1,// 设置起始页
			params : params// 设置查询参数
		}).flexReload();// 重新加载
	
}


/**
 * 导出方法入口
 */
function toExportExl() {
	exportExl('findVehicleSectionUplineList', 'query/stat/VehicleSectionUplineListExportExl.action');
}


