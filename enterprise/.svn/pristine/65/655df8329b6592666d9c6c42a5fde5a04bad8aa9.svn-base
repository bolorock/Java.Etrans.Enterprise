$(function() {
	if(isBsRoot){
	  initGrid();
	}
	else{
	  initGridData();	
	}
	// 初始化验证插件
	$("#editWindow").validation();
	// 按钮绑定点击事件
	$('#searchBtn').bind('click', toSearch);
	
		$('#createBtn').bind('click', toCreate);
		$('#editBtn').bind('click', toEdit);
		$('#deleteBtn').bind('click', toDelete);

	$('#cancelBtn').bind('click', hide);
	// $('#reSetBtn').bind('click', reSetAddForm);

});

function initGrid() {
	$("#systemNoticeList").flexigrid( {
		url : 'systemNotice/systemNoticeList.action',
		dataType : 'json',
		colModel : [ {
			display : '标题',
			name : 'title',
			width : 220,
			sortable : true,
			align : 'center'
		}, {
			display : '内容',
			name : 'newContents',
			width : 350,
			sortable : false,
			align : 'left',
			height : 400
		}, {
			display : '发布时间',
			name : 'releaseDate',
			width : 180,
			sortable : true,
			align : 'center'
		}, {
			display : '操作',
			name : 'Handler',
			handlefunction : 'getHandleColumn',
			paramcolnames : [ 'id', 'isDefault' ],
			width : 150,
			sortable : false,// 操作列不能排序
			align : 'center'
		} ],

		sortname : "id",// 第一次加载数据时排序列
		sortorder : "desc",// 第一次加载数据时排序类型
		usepager : true,// 是否分页，默认为true。
		showTableToggleBtn : true,// 是否显示收起/打开按钮,默认不显示。
		useRp : true,// 是否可以动态设置每页显示的结果数，默认为false。
		rp : 8,// 每页记录数，默认为10
		// checkbox : true,//是否要多选框,默认为false。
		rowId : 'ID',// 多选框绑定行的id,只有checkbox : true时才有效。
		singleSelect : false,
		width : 'auto',// 表格宽度
		height : getNormalHeight()-20
	// 表格高度
			});

};

function initGridData() {
	$("#systemNoticeList").flexigrid( {
		url : 'systemNotice/systemNoticeList.action',
		dataType : 'json',
		colModel : [ {
			display : '标题',
			name : 'title',
			width : 220,
			sortable : true,
			align : 'center'
		}, {
			display : '内容',
			name : 'newContents',
			width : 350,
			sortable : false,
			align : 'left',
			height : 400
		}, {
			display : '发布时间',
			name : 'releaseDate',
			width : 180,
			sortable : true,
			align : 'center'
		}],

		sortname : "id",// 第一次加载数据时排序列
		sortorder : "desc",// 第一次加载数据时排序类型
		usepager : true,// 是否分页，默认为true。
		showTableToggleBtn : true,// 是否显示收起/打开按钮,默认不显示。
		useRp : true,// 是否可以动态设置每页显示的结果数，默认为false。
		rp : 8,// 每页记录数，默认为10
		// checkbox : true,//是否要多选框,默认为false。
		rowId : 'ID',// 多选框绑定行的id,只有checkbox : true时才有效。
		singleSelect : false,
		width : 'auto',// 表格宽度
		height : getNormalHeight()-20
	// 表格高度
			});

};

/**
 * 组装操作列显示内容
 * 
 * @param id
 * @returns {String}
 */
function getHandleColumn(id, isDefault) {

	var editStr = "";
	var deleteStr = "";
	var setStr = "";
	// 变量resources为用户的所有资源权限 格式
	if (resources != null) {
		// 判断ACTION的访问权限
		if (resources.indexOf("|updateSystemNoticeSet|") != -1) {
			editStr = '<a href="javascript:void(0)" onclick="doEdit(' + id + ')">编辑</a>'
		}
		if (resources.indexOf("|deleteSystemNoticeSet|") != -1) {
			deleteStr = '<a href="javascript:void(0)" onclick="doDelete(' + id + ')">删除</a>'
		}
	}
	return editStr + '&nbsp;&nbsp;' + deleteStr + '&nbsp;&nbsp;' + setStr;

}

/**
 * 查询方法
 */
function toSearch() {

	var title = $("#sname").val();
	// 查询参数
	var params = [ {
		name : 'title',
		value : title
	} ];
	// 重置表格的某些参数
	$("#systemNoticeList").flexOptions( {
		newp : 1,// 设置起始页
		params : params
	// 设置查询参数
			}).flexReload();// 重新加载

}

/**
 * 新增加方法入口
 */
function toCreate() {
	$("#titleInfo").html("新增系统公告设置");
	$("#submitBtn").unbind("click");
	clearForm("editWindow");
	resetForm("editWindow");
	$("#systemNoticeContent").val("");
	showEditForm();
	$('#submitBtn').bind('click', doCreate);
}

/**
 * 封装界面表单属性参数
 */
function getAddForm() {
	var title = $("#systemNoticeName").val();
	var id = $("#id").val();
	var contents = $("#systemNoticeContent").val();
	var  cons=contents.split("\n");
	var newcontents="";
	var contentsText="";
	var strContent="";
    for(var j=0; j<cons.length; j++){
    	//当前每行数据超过27个字符是就换行
    	    if(cons[j].length>27){ 
    	       strContent=getLinefeed(cons[j]);
    	    }else{
    	       strContent=cons[j];
    	    }
    	    newcontents = newcontents+strContent+'\n';
	}
     contentsText=newcontents.substring(0, newcontents.length-1);
	// 表单参数
	var params = {
		id : id,
		title : title,
		contents : contentsText
	};
	return params;
}

/***取自动换行符*/
function getLinefeed(contentStr){
	 var cols=52;
	 var str=contentStr;
	 var str1="";
	 var len=0;
	 var contents="";
	 for(var i=0;i<str.length;i++){
	 if(str.charCodeAt(i)>128){
		 if(len==(cols-1)){
			 len=2;
			 str1+="\n";
		 }else{
			 len=len+2;
		 }
	 }else{   
		 len=len+1;
	 }
		 str1+=str.charAt(i);
		 if(len==cols){
				 str1+="\n";
				 len=0;
		 }
	 }
	 return str1;
	 
	 }

/**
 * 执行后台方法新增数据
 */
function doCreate() {

	var canSubmit = $("#editWindow").beforeSubmit();
	if (canSubmit) {
		var params = getAddForm();
		$.ajax( {
			type : "POST",
			url : "systemNotice/createSystemNoticeSet.action",
			data : {
				params : $.toJSON(params)
			},
			dataType : "JSON",
			success : function(data) {
				if (data != null) {
					hide();
					$("#systemNoticeList").flexReload();
				} else {
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
function toEdit() {
	var checkedIds = $("#systemNoticeList").getCheckedRows();
	alert(checkedIds);
	if (checkedIds.length < 1) {
		showWarning("请选择一行后进行编辑操作！");
		return;
	}
	if (checkedIds.length > 1) {
		showWarning("只能选择一行进行编辑操作！");
		return;
	}
	if (checkedIds.length == 1) {
		doEdit(checkedIds[0]);
	}
}

/**
 * 查询机构信息显示在编辑窗口
 * 
 * @param id
 */
function doEdit(id) {
	$("#titleInfo").html("编辑系统公告设置");
	if (id != null && id != '') {
		$("#submitBtn").unbind("click");
		clearForm("editWindow");

		showEditForm();

		$.ajax( {
			type : "POST",
			url : "systemNotice/getSystemNoticeSetById.action",
			data : {
				id : id
			},
			dataType : "JSON",
			success : function(data) {
				if (data != null) {
					var otInfo = eval("(" + data + ")");
					if (otInfo.length > 0) {
						$("#id").val(otInfo[0].id);
						$("#systemNoticeName").val(otInfo[0].title);
						$("#systemNoticeContent").val(otInfo[0].contents);
						$('#submitBtn').bind('click', doUpdate);
					}
				} else {
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
function doUpdate() {

	var canSubmit = $("#editWindow").beforeSubmit();

	if (canSubmit) {
		var params = getAddForm();
		$.ajax( {
			type : "POST",
			url : "systemNotice/updateSystemNoticeSet.action",
			data : {
				params : $.toJSON(params)
			},
			dataType : "JSON",
			success : function(data) {
				if (data != null) {
					hide();
					$("#systemNoticeList").flexReload();
				} else {

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
function showEditForm() {
	show();
	$("#editWindow .errorMsg").closeMessage();
}

/**
 * 显示错误信息
 */
function showError() {
	showWarning('服务器忙，请重试！');
}

/**
 * 显示提示信息
 */
function showWarning(str) {
	$.messager.alert('提示信息', str, 'info');
}

/**
 * 删除方法入口
 */
function toDelete() {
	var checkedIds = $("#systemNoticeList").getCheckedRows();
	if (checkedIds.length < 1) {
		showWarning("请选择一行后进行删除操作！");
		return;
	}
	doDelete(checkedIds);
}

/**
 * 表单重置方法入口
 */
function reSetAddForm() {
	resetForm("editWindow");
}
/**
 * 执行后台方法删除数据
 * 
 * @param ids
 * @returns {Boolean}
 */
function doDelete(ids) {

	if (ids != null || ids.length > 0) {
		if (!confirm("确定删除选中的系统公告的信息?")) {
			return false;
		} else {
			$.ajax( {
				type : "POST",
				url : "systemNotice/deleteSystemNoticeSet.action",
				data : {
					ids : ids.toString()
				},
				dataType : "JSON",
				success : function(data) {
					if (data != null) {
						$("#systemNoticeList").flexReload();
					} else {
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
