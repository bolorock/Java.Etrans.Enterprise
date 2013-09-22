
$(function() {
		
	 initWeek2Date("slBeginWeek");
	    
	   $("#findWorkUnitMileageInfoList").datagrid( {
			url : 'query/stat/findWorkUnitMileageInfo.action',
			queryParams : getparams(),
			columns :  [[
			              {
							title : '企业名称',//表头
							field : 'unitname',//JSON数据中属性名
							rowspan: 3,
							width : 120,// 得加上 要不IE报错
							sortable : true,//此字段是否能排序
							align : 'left'//对齐方式
						},{
							title : '本周止累计',
							field : 'WeekMileage',
							rowspan: 3,
							width :120,
							sortable : true,
							align : 'left'
						},{
							title : '本月止累计',
							field : 'MonthMileage',
							rowspan: 3,
							width :120,
							sortable : true,
							align : 'left'
						},{
							title : '本年止累计',
							field : 'YearMileage',
							rowspan: 3,
							width :120,
							sortable : true,
							align : 'left'
						},{
							title:'同期',colspan:6
						}],[
								{
									title:'上周',colspan:2
								},{
									title:'上月',colspan:2
								},{
									title:'上年',colspan:2
								}
						    ],[
						
						{
							title : '数量',
							field : 'WeekMileage_oWeek',
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
							field : 'DayMileage_oMonth',
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
							field : 'DayMileage_oYear',
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
						sortName : "unitname",//第一次加载数据时排序列
						sortOrder : "asc",//第一次加载数据时排序类型
						pagination : true,//是否分页，默认为true。
						nowrap : false,
						striped: true, 
						remoteSort:false, 
						pageSize: 5,//每页显示的记录条数，默认为10
				        pageList: [8,10,15,20,25,50,100],//可以设置每页记录条数的列表  
						loadMsg:'加载数据.....请稍后',
						singleSelect : false,
						width : 'auto',//表格宽度
						height : getNormalHeight()+60//表格高度
					});
	   
		var p = $('#findWorkUnitMileageInfoList').datagrid('getPager');  
	    $(p).pagination({  
	        pageNumber: 1,
	        beforePageText: '第',//页数文本框前显示的汉字  
	        afterPageText: '页    共 {pages} 页',  
	        displayMsg: '显示 {from}到{to} 条， 共 {total} 条' 
	    });
	    
	  //按钮绑定点击事件
		$('#searchBtn').bind('click', toSearch);
		$('#exportBtn').bind('click', toExportExl);
});

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
	 var weekVal = $("#slBeginWeek").val();
		var yearWeekNum = weekVal.split("@");
		var yearstr=yearWeekNum[3].split("-");
		var year=yearWeekNum[0];
		var month=yearstr[1];
		var day=yearstr[2];
		var week=yearWeekNum[1];
		var flag = 0;
		
		//查询参数
		var params = {
		    workUnitName : workUnitName,
		    year : year,
		    month : month,
			day : day,
			week : week,
			flag : flag
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
	$("#findWorkUnitMileageInfoList").datagrid({
			newp : 1,// 设置起始页
			queryParams : params// 设置查询参数
		});
	 var p = $('#findWorkUnitMileageInfoList').datagrid('getPager');     
	       $(p).pagination({     
	           pageSize: 8,//每页显示的记录条数，默认为10     
	           pageList: [8,10,15,20,25,50,100],//可以设置每页记录条数的列表     
	           beforePageText: '第',//页数文本框前显示的汉字     
	           afterPageText: '页    共 {pages} 页',     
	          displayMsg: '显示 {from}到{to} 条，   共 {total} 条'   
	     }); 

}


/**
 * 导出方法入口
 */
function toExportExl() {
	var options = $("#findWorkUnitMileageInfoList").datagrid('options');
	var page = options.pageNumber;
	var rows = options.pageSize;
	var workUnitName = $("#workUnitNameParam").val();
	 var weekVal = $("#slBeginWeek").val();
		var yearWeekNum = weekVal.split("@");
		var yearstr=yearWeekNum[3].split("-");
		var year=yearWeekNum[0];
		var month=yearstr[1];
		var day=yearstr[2];
		var week=yearWeekNum[1];
		var flag = 1;
		//查询参数
		var params = {
		    workUnitName : workUnitName,
		    year : year,
		    month : month,
			day : day,
			week : week
			
		};
	exportExlEasyui('findWorkUnitMileageInfoList', 'query/stat/WorkUnitMileageExportExl.action?workUnitName='+workUnitName+'&year='+year+
			'&month='+month+'&day='+day+'&week='+week+'&page='+page+'&rows='+rows+'&flag='+flag);
			
}


