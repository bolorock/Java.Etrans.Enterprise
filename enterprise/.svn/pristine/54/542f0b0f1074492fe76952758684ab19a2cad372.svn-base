$(function() {
	
		//区域
		initAreaCustom("selArea",null,null);
		//机构
		initOrganzationCustom("selOrganationID",null,null);
		
		initRunFlag("runFlag");
		initEncryptFlag("encryptFlag");
	
		$("#platFormList").flexigrid( {
			url : 'sys/findPlatFormList.action',
			dataType : 'json',
			params : getParam(),
			colModel : [ 
			{
				display : '平台名称',//表头
				name : 'Name',//JSON数据中属性名
				width : 100,// 得加上 要不IE报错
				sortable : true,//此字段是否能排序
				align : 'center'//对齐方式
			}, {
				display : '平台接入码',
				name : 'GnssCenterID',
				width :100,
				sortable : true,
				align : 'center'
			}, {
				display : '所属区域',
				name : 'AreaName',
				width :100,
				sortable : true,
				align : 'center'
			}, {
				display : '行政区划代码',
				name : 'AreaCode',
				width :100,
				sortable : true,
				align : 'center'
			}, {
				display : '平台类型',
				name : 'organzationTypeName',
				width :100,
				sortable : true,
				align : 'center'
			}, {
				display : '归属单位',
				name : 'organzationName',
				width :100,
				sortable : true,
				align : 'center'
			}, {
				display : '登陆帐号',
				name : 'AccountName',
				width :100,
				sortable : true,
				align : 'center'
			}, {
				display : '从链路服务端IP地址',
				name : 'SubIP',
				width :100,
				sortable : true,
				align : 'center'		
			}, {
				display : '从链路服务端端口',
				name : 'SubPort',
				width :100,
				sortable : true,
				align : 'center'		
			}, {
				display : '主链路客户端IP地址',
				name : 'MainIP',
				width :100,
				sortable : true,
				align : 'center'		
			}, {
				display : '主链路客户端端口',
				name : 'MainPort',
				width :100,
				sortable : true,
				align : 'center'		
			}, {
				display : '联系人',
				name : 'ContactPerson',
				width :100,
				sortable : true,
				align : 'center'		
			}, {
				display : '联系电话',
				name : 'ContactTelephone',
				width :100,
				sortable : true,
				align : 'center'		
			}, {
				display : '软件开发单位',
				name : 'SoftwareUnit',
				width :100,
				sortable : true,
				align : 'center'		
			}, {
				display : '技术支持单位',
				name : 'TechnicalUnitsSupport',
				width :100,
				sortable : true,
				align : 'center'
			}, {
				display : '经营许可证',
				name : 'licenseNo',
				width :100,
				sortable : true,
				align : 'center'		
			}, {
				display : '查岗状态',
				name : 'CheckState',
				width :100,
				sortable : true,
				align : 'center'	
			}, {
				display : '操作',
				name : 'Handler',
				handlefunction : 'getHandleColumn',
				paramcolnames : ['ID'],
				width : 200,
				sortable : false,//操作列不能排序
				align : 'center'
			}],	
			sortname : "ID",//第一次加载数据时排序列
			sortorder : "desc",//第一次加载数据时排序类型
			usepager : true,//是否分页，默认为true。
			showTableToggleBtn : true,//是否显示收起/打开按钮,默认不显示。
			useRp : true,//是否可以动态设置每页显示的结果数，默认为false。
			rp : 10,//每页记录数，默认为10
			checkbox : true,//是否要多选框,默认为false。
			rowId : 'ID',// 多选框绑定行的id,只有checkbox : true时才有效。
			singleSelect:false,
			width : 'auto',//表格宽度
			height : 250//表格高度
		});
		
		//初始化验证插件
		$("#editWindow").validation();
		
		//按钮绑定点击事件
		$('#searchBtn').bind('click', toSearch);
	    $('#createBtn').bind('click', toCreate);
	    $('#editBtn').bind('click', toEdit);
	    $('#deleteBtn').bind('click', toDelete);
	    $('#exportBtn').bind('click', toExportExl);
	    $('#cancelBtn').bind('click', hide);
	    $('#adSearchBtn').bind('click', toOpenAds);
	    $('#reSetBtn').bind('click', reSetAddForm);
		
});



function reSetAddForm(){
	resetForm("editWindow");
}

function getParam(){
	
	var name = $("#whereName").val();
	var accountName = $("#whereAccountName").val();
	var accountPassword = $("#whereAccountPassword").val();
	var subIP = $("#whereSubIP").val();
	var subPort = $("#whereSubPort").val();
	
	// alert("---业户名称："+name+"---行业："+customTradeKindID);
	//查询参数
	var params = [{
		name : 'name',
		value : name
	},{
		name : 'accountName',
		value : accountName
	},{
		name : 'accountPassword',
		value : accountPassword
	},{
		name : 'subIP',
		value : subIP
	},{
		name : 'subPort',
		value : subPort
	}];
	return params;
}


/**
 * 打开高级搜索框
 */
function toOpenAds(){
	$("#gao_ser").animate({height: 'toggle', opacity: 'toggle'}, 400);
}


/**
* 查询方法
*/
function toSearch(){
	
	var params = getParam();
	
	// 重置表格的某些参数
	$("#platFormList").flexOptions({
			newp : 1,// 设置起始页
			params : params// 设置查询参数
		}).flexReload();// 重新加载
}


/**
 * 导出方法入口
 */
function toExportExl(){
	exportExl("platFormList",'sys/findPlatFormExportExl.action');
}

/**
 * 组装操作列显示内容
 * @param id
 * @returns {String}
 */
function getHandleColumn(id){
	
	var editStr = "";
	var deleteStr = "";
	//变量resources为用户的所有资源权限 格式：|findPlatFormList||createPlatForm||updatePlatForm||deletePlatForm|
	if(resources!=null){
		//判断ACTION的访问权限
		 if(resources.indexOf("|updatePlatForm|")!=-1){
			 editStr = '<a href="javascript:void(0)"  title="编辑" onclick="doEdit(' + id + ')"><img src="Images/sys_01.png" width="14" height="16"></a>';
		 }
		 if(resources.indexOf("|deletePlatForm|")!=-1){
			 deleteStr = '<a href="javascript:void(0)" title="删除" onclick="doDelete(' + id + ')"><img src="Images/sys_02.png" width="14" height="16"></a>';
		 }
	}
	return editStr + '&nbsp;&nbsp;' + deleteStr;
}


/**
 * 新增加方法入口
 */
function toCreate(){
	
	$("#titleInfo").html("平台信息新增");
	$("#submitBtn").unbind("click");
	clearForm("editWindow");
	
	//初始化默认值
	$("#checkState").val(1);
	$("#fatherId").val(0);
	$("#isOnline").val(0);
	$("#level").val(1);
	
	initRunFlag("runFlag");
	initEncryptFlag("encryptFlag");
	//区域
	initAreaCustom("selArea",null,null);
	//机构
	initOrganzationCustom("selOrganationID",null,null);
	
	show();
	$('#submitBtn').bind('click', doCreate);
}

/**
 * 执行后台方法新增数据
 */
function doCreate(){
	var flag = $("#editWindow").beforeSubmit();
	if(flag){
		
		var url="sys/createPlatForm.action";
		var params = getAddForm();
		jsUtil.useAjaxDefault(url, params, doCreateSucc);
	}
}
function getAddForm(){

	var areaID = $("#selArea").val();
	var organzationID = $("#selOrganationID").val();
	var gnssCenterID = $("#gnssCenterID").val();
	var accountName = $("#accountName").val();
	var name = $("#name").val();
	var accountPassword = $("#accountPassword").val();
	var subIP = $("#subIP").val();
	var subPort = $("#subPort").val();
	var mainIP = $("#mainIP").val();
	var mainPort = $("#mainPort").val();
	var encryptFlag = $("#encryptFlag").val();
	var runFlag = $("#runFlag").val();
	var contactPerson = $("#contactPerson").val();
	var contactTelephone = $("#contactTelephone").val();
	var softwareUnit = $("#softwareUnit").val();
	var technicalUnitsSupport = $("#technicalUnitsSupport").val();
	var keyM1 = $("#keyM1").val();
	var keyIA1 = $("#keyIA1").val();
	var keyIC1 = $("#keyIC1").val();
	var checkState = $("#checkState").val();
	var fatherId = $("#fatherId").val();
	var isOnline = $("#isOnline").val();
	var level = $("#level").val();
	var id = $("#id").val();
	var licenseNo = $("#licenseNo").val();
	
	//查询参数
	var params = [{
		name : 'areaID',
		value : areaID
	},{
		name : 'organzationID',
		value : organzationID
	},{
		name : 'gnssCenterID',
		value : gnssCenterID
	},{
		name : 'accountName',
		value : accountName
	},{
		name : 'name',
		value : name
	},{
		name : 'accountPassword',
		value : accountPassword
	},{
		name : 'subIP',
		value : subIP
	},{
		name : 'subPort',
		value : subPort
	},{
		name : 'mainIP',
		value : mainIP
	},{
		name : 'mainPort',
		value : mainPort
	},{
		name : 'encryptFlag',
		value : encryptFlag
	},{
		name : 'runFlag',
		value : runFlag
	},{
		name : 'contactPerson',
		value : contactPerson
	},{
		name : 'contactTelephone',
		value : contactTelephone
	},{
		name : 'softwareUnit',
		value : softwareUnit
	},{
		name : 'technicalUnitsSupport',
		value : technicalUnitsSupport
	},{
		name : 'keyM1',
		value : keyM1
	},{
		name : 'keyIA1',
		value : keyIA1
	},{
		name : 'keyIC1',
		value : keyIC1
	},{
		name : 'checkState',
		value : checkState
	},{
		name : 'fatherId',
		value : fatherId
	},{
		name : 'isOnline',
		value : isOnline
	},{
		name : 'level',
		value : level
	},{
		name : 'licenseNo',
		value : licenseNo
	},{
		name : 'id',
		value : id
	}];
	return params;
}
function doCreateSucc(result){
	
	if(result!=null && result["code"] == '0'){
		hide();
		$.messager.alert('提示信息','新增记录成功！','info');
		$("#platFormList").flexReload();
	}else{
		$.messager.alert('提示信息','服务器忙，请重试！','info');
	}
}
/**
 * 编辑方法入口
 */
function toEdit(){
	$("#titleInfo").html("平台信息编辑");
	var checkedIds = $("#platFormList").getCheckedRows();
	if(checkedIds.length<1){
		$.messager.alert('提示信息','请选择一行后进行编辑操作！','info');
		hide();
		return;
	}
	if(checkedIds.length>1){
		$.messager.alert('提示信息','只能选择一行进行编辑操作！','info');
		hide();
		return;
	}
	if(checkedIds.length == 1){
		doEdit(checkedIds[0]);
	}
}

/**
 * 查询平台信息显示在编辑窗口
 * @param id
 */
function doEdit(id){
		if(id != null && id != ''){
			show();
			$("#submitBtn").unbind("click");
			var params = {"id":id};
			var url="sys/getPlatFormById.action";
		jsUtil.useAjaxDef(url,params, false, toEditSucc);
	}
}
/**
 * 查询平台信息显示在编辑窗口(成功返回)
 * @param id
 */
function toEditSucc(result){
	if(result!=null && result["code"] == '0'){
		var recordInfo = result.data;
		
		if(recordInfo.length > 0){
			$("#editWindow input:not(:button)").each(function(i){
				$(this).val(recordInfo[0][$(this).attr("name")]);
			});
			$("#repassword").val($("#accountPassword").val());
			
			$("#editWindow select").each(function(i){
				$(this).val(recordInfo[0][$(this).attr("name")]);
			});
			$('#submitBtn').bind('click', doUpdate);
		}
	}else{
		$.messager.alert('提示信息','服务器忙，请重试','info');
	}
}
/**
 * 执行后台方法更新数据
 */
function doUpdate(){
	var flag = $("#editWindow").beforeSubmit();
	if(flag){
		var url = "sys/updatePlatForm.action";
		jsUtil.useAjaxDef(url, getAddForm(), false, doUpdateSucc);
	}
}
function doUpdateSucc(result){
	if(result!=null && result["code"] == '0'){
		hide();
		$.messager.alert('提示信息','更新记录成功！','info');
		$("#platFormList").flexReload();
	}else{
		$.messager.alert('提示信息','服务器忙，请重试！','info');
	}
}

/**
 * 删除方法入口
 */
function toDelete(){
	var checkedIds = $("#platFormList").getCheckedRows();
	if(checkedIds.length<1){
		$.messager.alert('提示信息','请选择一行后进行删除操作！','info');
		return;
	}
	doDelete(checkedIds);
} 

/**
 * 执行后台方法删除数据
 * @param ids
 * @returns {Boolean}
 */
function doDelete(ids){
	
	if (ids != null || ids.length > 0) {
		if (confirm("确定删除选中的平台?")) {
			var url = "sys/deletePlatForm.action";
			var params = {ids:ids.toString()};
			jsUtil.useAjaxDef(url, params, false, doDeleteSucc);
		}
	}
}

function doDeleteSucc(result){
	if(result!=null && result["code"] == '0'){
		var msgCode = result["data"][0]["msgCode"];
		if(msgCode== 0){
			$.messager.alert('提示信息','删除记录成功！','info');
			$("#platFormList").flexReload();
		}else{
			switch(msgCode){
				case '1':$.messager.alert('提示信息','执行此操作前，\n请先删除与本平台相关联的车辆！','info');
						break;
				default:$.messager.alert('提示信息','删除平台不成功！','info');		
			}
		}
	}else{
		$.messager.alert('提示信息','服务器忙，请重试！','info');
	}
	clearForm("editWindow");
	
	initRunFlag("runFlag");
	initEncryptFlag("encryptFlag");
	//区域
	initAreaCustom("selArea",null,null);
	//机构
	initOrganzationCustom("selOrganationID",null,null);
}
