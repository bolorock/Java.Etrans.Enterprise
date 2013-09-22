$(function() {
	
	initGrid();
	
});

/**
 * 初始化表格
 */
function initGrid(){
	
	var params = [{
		name : 'vehicleId',
		value : vehicleId
	}];
	
	$("#terminalParamList").flexigrid( {
		url : 'sys/terminalParamList.action',
		dataType : 'json',
		colModel : [ 
		{
			display : '参数名称',
			name : 'ParamName',
			width : 150,
			sortable : true,
			align : 'center'
		},{
			display : '参数值',
			name : 'ParamValue',
			width : 150,
			sortable : true,
			align : 'center'
		},{
			display : '最后修改时间',
			name : 'ModifyDatetime',
			width : 150,
			sortable : true,
			align : 'center'
		}],
		
		sortname : "ID",
		sortorder : "asc",
		params : params,
		usepager : true,
		showTableToggleBtn : true,
		useRp : true,
		rp : 8,
		singleSelect:true,
		width : 'auto',
		height : 250
	});
}

function getHandleColumn(IsAnswerBack){
	
	if(IsAnswerBack && IsAnswerBack == 1){
		return "是";
	}else{
		return "否";
	}
}


