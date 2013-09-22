
/**页面加载执行**/
$(function() {
		//加载时间选择
	    initWeek2Date("slBeginWeek");
	    
	    //加载列表
		$("#findVehicleDOTTimesStatList").datagrid( {
			url : 'query/stat/findvehicleDOTTimesStatList.action',
			queryParams : getparams(),
			columns : [ [
			{
				title : '车牌号码',//表头
				field : 'RegistrationNo',//JSON数据中属性名
				rowspan: 3,//表明一个单元格跨几行
				width : 150,// 得加上 要不IE报错
				sortable : true,//此字段是否能排序
				align : 'left'//对齐方式
			},{
				title : '本周',
				field : 'WeekDOTTimes',
				rowspan: 3,
				width : 150,
				sortable : true,
				align : 'left'
			},{
				title : '本月止累计',
				field : 'MonthDOTTimes',
				rowspan: 3,
				width :150,
				sortable : true,
				align : 'left'
			}
			,{
				title : '本年止累计',
				field : 'YearDOTTimes',
				rowspan: 3,
				width :150,
				sortable : true,
				align : 'left'
			},
			{
				title:'同期',
				colspan:6,	//表明一个单元格跨几列
				width:480
			}],[
					{
						title:'上周',colspan:2,width:160
					} ,
					{
						title:'上月',colspan:2,width:160
					},{
						title:'上年',colspan:2,width:160
					}
			    ],[
			
			{
				title : '数量',
				field : 'WeekDOTTimes_oWeek',
				width :80,
				sortable : true,
				align : 'left'
			},{
				title : '本周比上周%',
				field : 'WeekNumber',
				width :80,
				sortable : true,
				align : 'left'
			}, {
				title : '数量',
				field : 'DayDOTTimes_oMonth',
				width :80,
				sortable : true,
				align : 'left'
			}, {
				title : '本月比上月%',
				field : 'MonthNumber',
				width :80,
				sortable : true,
				align : 'left'
			},{
				title : '数量',
				field : 'DayDOTTimes_oYear',
				width :80,
				sortable : true,
				align : 'left'
			}, {
				title : '本年比上年%',
				field : 'YearNumber',
				width :80,
				sortable : true,
				align : 'left'
			}]],	
			sortName : "ID",//第一次加载数据时排序列
			sortOrder : "asc",//第一次加载数据时排序类型
			pagination : true,//是否分页，默认为true。
			nowrap : false,//设置为true，当数据长度超出列宽时将会自动截取
			striped: true, //设置为true将交替显示行背景
			remoteSort:false, //定义是否通过远程服务器对数据排序
			pageSize: 5,//每页显示的记录条数，默认为10
	        pageList: [8,10, 15, 20, 25, 50, 100],//可以设置每页记录条数的列表  
			loadMsg:'加载数据.....请稍后',//当从远程站点载入数据时，显示的一条快捷信息。
			singleSelect : false,//设置为true将只允许选择一行
			width : 'auto',//表格宽度
			height : getNormalHeight()+60//表格高度
		});
		
		//设置分页控件
		setPageControl();
		
	    //按钮绑定点击事件
		$('#searchBtn').bind('click', toSearch); //查询
//		$('#showBtn').bind('click', chartGraphic);//图表
		$('#exportBtn').bind('click', toExportExl);//导出

});


/**
* 查询方法
*/
function toSearch(){
	//查询参数
	var params=getparams();
	
//	// 重置表格的某些参数
//	$("#findVehicleDOTTimesStatList").datagrid({
//			newp : 1,// 设置起始页
//			queryParams : params// 设置查询参数
//		});
	
	//载入并显示第一页的记录
	$('#findVehicleDOTTimesStatList').datagrid('load',params);
	
	//设置分页控件
	setPageControl();
}


//功能类型1表示车辆统计【后台调用按策车辆统计的存储过程】
var functionType="2"; 
/**
 * 查询参数
 * @return
 */
function getparams(){
	var workUnitName = $("#workUnitNameParam").val(); //企业名称
	var registrationNo =$("#registrationNo").val();//车牌号码
	var weekVal = $("#slBeginWeek").val();//例如：2013@15@2013-04-08@2013-04-14
	 //alert("疲劳驾驶--》参数："+weekVal);
		var yearWeekNum = weekVal.split("@");
		var yearstr=yearWeekNum[3].split("-");
		var year=yearWeekNum[0];
		var month=yearstr[1];
		var day=yearstr[2];
		var week=yearWeekNum[1];
//		var year=2012;
//		var month=8;
//		var day=8;
//		var week=34;
		//查询参数
		var params = {
			functionType:functionType,
		    workUnitName : workUnitName,
		    year : year,
		    month : month,
			day : day,
			week : week,
			registrationNo : registrationNo
		};
	  return params;
}

/**
 * 设置分页组件datagrid
 * @return
 */
function setPageControl(){
	
	/**设置分页组件datagrid**/
	var p = $('#findVehicleDOTTimesStatList').datagrid('getPager');  
    $(p).pagination({  
        pageNumber: 1,//当分页创建完毕时显示当前页码
        beforePageText: '第',//页数文本框前显示的汉字  【在输入框之前显示】
        afterPageText: '页    共 {pages} 页',  //在输入框之后显示
        displayMsg: '显示 {from}到{to} 条， 共 {total} 条'  //在插件右上方显示分页信息
    }); 
}


/**
 * 导出
 * @return
 */
function toExportExl(){
	var options= $('#findVehicleDOTTimesStatList').datagrid('options');
	var page = options.pageNumber;
	var rows = options.pageSize;
	var workUnitName = $("#workUnitNameParam").val();//企业名称
	var registrationNo =$("#registrationNo").val();//车牌号码
	var weekVal = $("#slBeginWeek").val();//周时间
	var yearWeekNum = weekVal.split("@");
	var yearstr=yearWeekNum[3].split("-");
	var year=yearWeekNum[0];
	var month=yearstr[1];
	var day=yearstr[2];
	var week=yearWeekNum[1];
//	var year=2012;
//	var month=8;
//	var day=8;
//	var week=34;
	
	//alert("《疲劳驾驶》"+"企业名称："+workUnitName+"year:"+year+"month:"+month+"day:"+day+"week:"+week+"registrationNo:"+registrationNo+"page:"+page+"rows:"+rows);
	exportExlEasyui('findVehicleDOTTimesStatList', 'query/stat/doVehicleDOTTimesStatListExportExl.action?workUnitName='+workUnitName+'&year='+year+
			'&month='+month+'&day='+day+'&week='+week+'&registrationNo='+registrationNo+'&page='+page+'&rows='+rows+'&functionType='+functionType);
	
}


/**
 * 验证统计方式格式准确性【占时没用】
 */
function valudateP(weekVal){
	var result=false;
	
}


