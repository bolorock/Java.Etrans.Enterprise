$(function() {
	
	initGrid();
	
	//初始化验证插件
	$("#editWindow").validation();
	
	//按钮绑定点击事件
	$('#searchBtn').bind('click', toSearch);
    $('#createBtn').bind('click', toCreate);
    $('#exportBtn').bind('click', toExportExl);
    $('#cancelBtn').bind('click', hide);
	    
});

/**
 * 初始化表格
 */
function initGrid(){
	$("#driverList").flexigrid( {
		url : 'sys/driverList.action',
		dataType : 'json',
		colModel : [
		{
			display : '企业名称',
			name : 'WorkUnitName',
			width : 200,
			sortable : true,
			align : 'center'
		},{
			display : '司机名称',
			name : 'Name',
			width : 100,
			sortable : true,
			align : 'center'
		},{
			display : '联系电话',
			name : 'PhoneNO',
			width : 100,
			sortable : true,
			align : 'center'
		},{
			display : '驾驶证号',
			name : 'DrivingLicence',
			width : 150,
			sortable : true,
			align : 'center'
		},{
			display : 'IC卡号',
			name : 'WorkLicenceNO',
			width : 100,
			sortable : true,
			align : 'center'
		},{
			display : '身份证号',
			name : 'IdentityCard',
			width : 150,
			sortable : true,
			align : 'center'
		},{
			display : '司机工号',
			name : 'DriverNO',
			width : 100,
			sortable : true,
			align : 'center'
		},{
			display : '司机编码',
			name : 'DriverCode',
			width : 100,
			sortable : true,
			hide: true, 
			align : 'center'
		},{
			display : '驾驶证有效期(月)',
			name : 'LicenseNoEffective',
			width : 150,
			sortable : true,
			hide: true, 
			align : 'center'
		},{
			display : '驾驶证年审日期',
			name : 'YearCheckTime',
			width : 150,
			sortable : true,
			hide: true, 
			align : 'center'
		},{
			display : '准入证',
			name : 'AdmittanceCertificate',
			width : 100,
			sortable : true,
			hide: true, 
			align : 'center'
		},{
			display : '准入证有效期(月)',
			name : 'AdmittanceEffective',
			width : 150,
			sortable : true,
			hide: true, 
			align : 'center'
		},{
			display : '准入证审验日期',
			name : 'AdmittanceCheckDate',
			width : 150,
			sortable : true,
			hide: true, 
			align : 'center'
		},{
			display : '资格证到期日期',
			name : 'WorkCertificateExpiryDate',
			width : 150,
			sortable : true,
			hide: true, 
			align : 'center'
		},{
			display : '操作',
			name : 'Handler',
			handlefunction : 'getHandleColumn',
			paramcolnames : ['ID'],
			width : 120,
			sortable : false,
			align : 'center'
		}],
		
		sortname : "ID",
		sortorder : "desc",
		usepager : true,
		showTableToggleBtn : true,
		useRp : true,
		rp : 8,
		singleSelect:false,
		width : 'auto',
		height : getNormalHeight()-20
	});
}

/**
 * 组装操作列显示内容
 * @param id
 * @returns {String}
 */
function getHandleColumn(id,workStatusInt){
	
	var handleStr = "";
	
	var editStr = "";
	var deleteStr = "";
	//变量resources为用户的所有资源权限 
	if(resources!=null){
		//判断ACTION的访问权限
		if(resources.indexOf("|updateDriver|")!=-1){
			editStr = '<a href="javascript:void(0)" onclick="doEdit(' + id + ')">编辑</a>';
		}
		if(resources.indexOf("|deleteDriver|")!=-1){
			deleteStr = '<a href="javascript:void(0)" onclick="doDelete(' + id + ')">删除</a>';
		}
	}
	
	handleStr = editStr + '&nbsp;&nbsp;' + deleteStr ;
	return handleStr;
	
}

/**
 * 条件查询
 */
function toSearch(){
	
	var name = $("#dNameParam").val();
	var unitName = $("#workUnitNameParam").val();
	//查询参数
	var params = [{
		name : 'name',
		value : name
	},{
		name : 'unitName',
		value : unitName
	}];
	// 重置表格的某些参数
	$("#driverList").flexOptions({
			newp : 1,// 设置起始页
			params : params// 设置查询参数
		}).flexReload();// 重新加载
}

/**
 * 新增加方法入口
 */
function toCreate(){
	
	$("#titleInfo").html("新增司机信息");
	
	$("#submitBtn").unbind("click");
	initSelects();
	resetForm("editWindow");
	showEditForm();
	$('#submitBtn').bind('click', doCreate);
}

/**
 * 初始化FORM表单
 */
function initSelects(){
//	initAjaxSelect("workUnitId","sys/initWorkUnits.action");
}

/**
 * 获取表单数据
 * @returns 
 */
function getFormParams(){
	
	var driverId = $("#driverId").val();
	var name = $("#name").val();
	var phoneNo = $("#phoneNo").val();
	var drivingLicence = $("#drivingLicence").val();
	var workLicenceNo = $("#workLicenceNo").val();
	var identityCard = $("#identityCard").val();
	var workUnitId = $("#workUnitID1").val();
	var licenseNoEffective = $("#licenseNoEffective").val();
	var driverNo = $("#driverNo").val();
	var driverCode = $("#driverCode").val();
	var yearCheckTime = $("#yearCheckTime").val();
	var admittanceCertificate = $("#admittanceCertificate").val();
	var admittanceEffective = $("#admittanceEffective").val();
	var admittanceCheckDate = $("#admittanceCheckDate").val();
	var workCertificateExpiryDate = $("#workCertificateExpiryDate").val();
	
	//表单参数
	var params = {
		driverId : driverId,
		name : name,
		phoneNo : phoneNo,
		drivingLicence : drivingLicence,
		workLicenceNo : workLicenceNo,
		identityCard : identityCard,
		workUnitId : workUnitId,
		licenseNoEffective : licenseNoEffective,
		driverNo : driverNo,
		driverCode : driverCode,
		yearCheckTime : yearCheckTime,
		admittanceCertificate : admittanceCertificate,
		admittanceEffective : admittanceEffective,
		admittanceCheckDate : admittanceCheckDate,
		workCertificateExpiryDate : workCertificateExpiryDate
	};
	
	return params;
}

/**
 * 执行后台方法新增数据
 */
function doCreate(){
	
	var canSubmit = $("#editWindow").beforeSubmit();
	if(canSubmit){
		var params = getFormParams();
		$.ajax({
		    type : "POST",
		    url : "sys/createDriver.action",
		    data : {params : $.toJSON(params)},
		    dataType : "JSON",
		    success : function(data) {
		    	if(data.code == '1'){
		    		hide();
		    		$("#driverList").flexReload();
		    	}else{
		    		showError();
		    	}
		    },
		    error : function(data) {
		    	showError();
		    }
		});
	}
}


/**
 * 进入编辑页面
 * @param id
 */
function doEdit(id){
	if(id != null && id != ''){
		
		$("#titleInfo").html("编辑司机信息");
		
		$("#submitBtn").unbind("click");
		
		initSelects();
		resetForm("editWindow");
		showEditForm();
		
		$.ajax({
		    type : "POST",
		    url : "sys/getDriverById.action",
		    data : {id:id},
		    dataType : "JSON",
		    success : function(data) {
		    	if(data.code == '1'){
		    		var vInfo = data.data;
		    		if(vInfo){
		    			
		    			$("#driverId").val(vInfo.ID);
		    			$("#name").val(vInfo.Name);
		    			$("#phoneNo").val(vInfo.PhoneNO);
		    			$("#drivingLicence").val(vInfo.DrivingLicence);
		    			$("#workLicenceNo").val(vInfo.WorkLicenceNO);
		    			$("#identityCard").val(vInfo.IdentityCard);
		    			$("#workUnitID1").val(vInfo.WorkUnitID);
		    			$("#workUnitIDName").val(vInfo.workUnitIDName);
		    			$("#licenseNoEffective").val(vInfo.LicenseNoEffective);
		    			$("#driverNo").val(vInfo.DriverNO);
		    			$("#driverCode").val(vInfo.DriverCode);
		    			$("#yearCheckTime").val(vInfo.YearCheckTime);
		    			$("#admittanceCertificate").val(vInfo.AdmittanceCertificate);
		    			$("#admittanceEffective").val(vInfo.AdmittanceEffective);
		    			$("#admittanceCheckDate").val(vInfo.AdmittanceCheckDate);
		    			$("#workCertificateExpiryDate").val(vInfo.WorkCertificateExpiryDate);
		    			
		    			$('#submitBtn').bind('click', doUpdate);
		    		}
		    	}else{
		    		showError();
		    	}
		    },
		    error : function(data) {
		    	showError();
		    }
	    });
	}
}

/**
 * 执行后台方法更新数据
 */
function doUpdate(){
	
	var canSubmit = $("#editWindow").beforeSubmit();
	if(canSubmit){
		
		var params = getFormParams();
		$.ajax({
		    type : "POST",
		    url : "sys/updateDriver.action",
		    data : {params : $.toJSON(params)},
		    dataType : "JSON",
		    success : function(data) {
		    	if(data.code == '1'){
		    		hide();
		    		$("#driverList").flexReload();
		    	}else{
		    		showError();
		    	}
		    },
		    error : function(data) {
		    	showError();
		    }
		});
	}
}

/**
 * 打开编辑窗口
 */
function showEditForm(){
	show();
	$("#editWindow .errorMsg").closeMessage();
}

/**
 * 显示错误信息
 */
function showError(){
	showWarning('服务器忙，请重试！');
}

/**
 * 显示提示信息
 */
function showWarning(str){
	$.messager.alert('提示信息',str,'info');
}

/**
 * 执行后台方法删除数据
 * @param id
 * @returns {Boolean}
 */
function doDelete(id){
	
	if (id) {
		if (!confirm("确定删除此司机信息?")) {
			return false;
		} else {
			$.ajax({
			    type : "POST",
			    url : "sys/deleteDriver.action",
			    data : {id:id},
			    dataType : "JSON",
			    success : function(data) {
			    	if(data.code == '1'){
			    		$("#driverList").flexReload();
			    	}else{
			    		showError();
			    	}
			    },
			    error : function(data) {
			    	showError();
			    }
		    });
			return true;
		}
	}
}

/**
 * 导出方法入口
 */
function toExportExl(){
	exportExl('driverList','sys/driverExport.action');
}

