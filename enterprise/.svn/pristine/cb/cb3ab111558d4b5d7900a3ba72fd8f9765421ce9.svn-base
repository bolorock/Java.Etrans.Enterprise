$(function() {
		$("#organzationTypeList").flexigrid( {
			url : 'sys/organzationTypeList.action',
			dataType : 'json',
			colModel : [ 
			{
				display : '机构类别名称',
				name : 'name',
				width : 300,
				sortable : true,
				align : 'center'
			}, {
				display : '操作',
				name : 'Handler',
				handlefunction : 'getHandleColumn',
				paramcolnames : ['id'],
				width : 200,
				sortable : false,//操作列不能排序
				align : 'center'
			}],
			
			sortname : "id",//第一次加载数据时排序列
			sortorder : "asc",//第一次加载数据时排序类型
			usepager : true,//是否分页，默认为true。
			showTableToggleBtn : true,//是否显示收起/打开按钮,默认不显示。
			useRp : true,//是否可以动态设置每页显示的结果数，默认为false。
			rp : 10,//每页记录数，默认为10
			checkbox : true,//是否要多选框,默认为false。
			rowId : 'id',// 多选框绑定行的id,只有checkbox : true时才有效。
			singleSelect:false,
			width : 'auto',//表格宽度
			height : 250//表格高度
		});
		
		//初始化验证插件
		$("#addForm").validation();
		
		//按钮绑定点击事件
		$('#searchBtn').bind('click', toSearch);
	    $('#createBtn').bind('click', toCreate);
	    $('#editBtn').bind('click', toEdit);
	    $('#deleteBtn').bind('click', toDelete);
	    $('#exportBtn').bind('click', toExportExl);
	    $('#cancelBtn').bind('click', hide);
	    
});

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
		 if(resources.indexOf("|updateOrganzationType|")!=-1){
			 editStr = '<a href="javascript:void(0)" title="编辑" onclick="doEdit(' + id + ')"><img src="Images/sys_01.png" width="14" height="16"></a>';
		 }
		 if(resources.indexOf("|deleteOrganzationType|")!=-1){
			 deleteStr = '<a href="javascript:void(0)" title="删除" onclick="doDelete(' + id + ')"><img src="Images/sys_02.png" width="14" height="16"></a>';
		 }
	}
	return editStr + '&nbsp;&nbsp;' + deleteStr;
	
}

/**
 * 查询方法
 */
function toSearch(){
	
	var name = $("#otName").val();
	//查询参数
	var params = [{
		name : 'name',
		value : name
	} ];
	// 重置表格的某些参数
	$("#organzationTypeList").flexOptions({
			newp : 1,// 设置起始页
			params : params// 设置查询参数
		}).flexReload();// 重新加载
}

/**
 * 新增加方法入口
 */
function toCreate(){
	$("#submitBtn").unbind("click");
	clearForm("editWindow");
	showEditForm();
	$('#submitBtn').bind('click', doCreate);
	
}

/**
 * 执行后台方法新增数据
 */
function doCreate(){
		
	var flag = $("#addForm").beforeSubmit();
	if(flag){
		var otName = $("#organzationTypeName").val();
		
		$.ajax({
		    type : "POST",
		    url : "sys/createOrganzationType.action",
		    data : {name:otName},
		    dataType : "JSON",
		    success : function(data) {
		    	if(data.code == '0'){
		    		hide();
		    		$("#organzationTypeList").flexReload();
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
 * 编辑方法入口
 */
function toEdit(){
	var checkedIds = $("#organzationTypeList").getCheckedRows();
	if(checkedIds.length<1){
		showWarning("请选择一行后进行编辑操作！");
		return;
	}
	if(checkedIds.length>1){
		showWarning("只能选择一行进行编辑操作！");
		return;
	}
	if(checkedIds.length == 1){
		doEdit(checkedIds[0]);
	}
}

/**
 * 查询机构类别信息显示在编辑窗口
 * @param id
 */
function doEdit(id){
	if(id != null && id != ''){
		
		showEditForm();
		$("#submitBtn").unbind("click");
		
		$.ajax({
		    type : "POST",
		    url : "sys/getOrganzationTypeById.action",
		    data : {id:id},
		    dataType : "JSON",
		    success : function(data) {
		    	if(data.code == '0'){
		    		var otInfo = data.data;
		    		if(otInfo.length > 0){
		    			$("#organzationTypeId").val(otInfo[0].id);
		    			$("#organzationTypeName").val(otInfo[0].name);
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
	var otId = $("#organzationTypeId").val();
	var otName = $("#organzationTypeName").val();
	var flag = $("#addForm").beforeSubmit();
	if(flag){
		$.ajax({
		    type : "POST",
		    url : "sys/updateOrganzationType.action",
		    data : {id:otId,name:otName},
		    dataType : "JSON",
		    success : function(data) {
		    	if(data.code == '0'){
		    		hide();
		    		$("#organzationTypeList").flexReload();
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
	$("#addForm .errorMsg").closeMessage();
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
 * 删除方法入口
 */
function toDelete(){
	var checkedIds = $("#organzationTypeList").getCheckedRows();
	if(checkedIds.length<1){
		showWarning('请选择一行后进行删除操作！');
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
		if (!confirm("确定删除选中的机构类别?")) {
			return false;
		} else {
			var isDelete = canDelete(ids);
			if(isDelete){
				$.ajax({
				    type : "POST",
				    url : "sys/deleteOrganzationType.action",
				    data : {ids:ids.toString()},
				    dataType : "JSON",
				    success : function(data) {
				    	if(data.code == '0'){
				    		$("#organzationTypeList").flexReload();
				    	}else{
				    		showError();
				    	}
				    },
				    error : function(data) {
				    	showError();
				    }
			    });
			}
			return true;
		}
	}
}

/**
 * 检查是否存在关联此机构类别的机构
 * @param ids
 * @returns {Boolean}
 */
function canDelete(ids){
	
	var isDelete = false;
	
	$.ajax({
	    type : "POST",
	    async : false,
	    url : "sys/getOrganzationsCountByIds.action",
	    data : {ids:ids.toString()},
	    dataType : "JSON",
	    success : function(data) {
	    	if(data.code == '0'){
	    		var cnt = data.data[0];
	    		if(cnt != null && cnt == 0){
	    			isDelete = true;
	    		}
	    		if(cnt != null && cnt > 0){
	    			showWarning('请先删除与选中的机构类别相关联的机构后再删除!');
	    		}
	    	}else{
	    		showError();
	    	}
	    },
	    error : function(data) {
	    	showError();
	    }
    });
	return isDelete;		
}

/**
 * 导出方法入口
 */
function toExportExl(){
	exportExl('organzationTypeList','sys/exportOrganzationType.action');
}

