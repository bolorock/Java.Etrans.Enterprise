$(function() {
	
});


///////////////////////////////////////////////////////列表初始化begin/////////////////////////////////////////////////////////
/**
 * 重置内容
 * @return
 */
function reSetAddForm(){
	resetForm("editWindow");
}


/**
* 列表查询方法
*/
function toSearch(){
	
	var params = getParam();
	
	// 重置表格的某些参数
	$("#recordList").flexOptions({
			newp : 1,// 设置起始页
			params : params// 设置查询参数
		}).flexReload();// 重新加载
}

/**
 * 组装操作列显示内容
 * @param id 修改记录ID
 * @param editAction 编辑ACTION名
 * @param deleteAction 删除ACTION名
 * @returns {String}
 */
function getHandleColumn(id){
	
	var editStr = "";
	var deleteStr = "";
	//变量resources为用户的所有资源权限 格式：|findrecordList||createPlatForm||updatePlatForm||deletePlatForm|
	if(resources!=null){
		//判断ACTION的访问权限
		 if(resources.indexOf("|"+editAction+"|")!=-1){
			 editStr = '<a href="javascript:void(0)"  title="编辑" onclick="doEditGo(' + id + ')"><img src="Images/sys_01.png" width="14" height="16"></a>';
		 }
		 if(resources.indexOf("|"+delAction+"|")!=-1){
			 deleteStr = '<a href="javascript:void(0)" title="删除" onclick="doDeleteGo(' + id + ')"><img src="Images/sys_02.png" width="14" height="16"></a>';
		 }
	}
	return '&nbsp;&nbsp;' +editStr + '&nbsp;&nbsp;' + deleteStr;
}
////////////////////////////////////////////////////////列表初始化end/////////////////////////////////////////////////////


////////////////////////////////////////////////////////新增begin/////////////////////////////////////////////////////////

/**
 * 执行后台方法新增数据
 */
function doCreate(){
	var flag = $("#editWindow").beforeSubmit();
	if(flag){
		var setParam = getAddForm();
		saveRecord(setParam, tableName);
	}
}

/**
 * 新增记录
 * 例子：
 * 	 var setParam = new QueryParam();
 *   setParam.put("@CheckingNo","");
 *   setParam.put("@CheckTime","''");
 * @param setParam 插入字段集合  
 * @param tableName 表名
 * @return
 */
function saveRecord(setParam,tableName){

	 var mapParams = new QueryParam();
	 mapParams.put("@setParam",setParam.toJSON());
	 mapParams.put("@tableName",tableName);
	 
	 analyseSave(mapParams.toJSON());
}

/**
 * 新增记录向后台提交
 * @param mapParams
 * @return
 */
function analyseSave(mapParams){
//后台查询数据
$.ajax({
    type : "POST",
    url : "analyse/analyseSave.action",
    data :"paramStr="+mapParams,
    success : doCreateSucc,
    error : function(data) {
    	$.messager.alert('提示信息','服务器忙，请重试！','info');
    }
});
}
/**
 * 新增成功
 * @param result
 * @return
 */
function doCreateSucc(result){
	if(result!=null && result == '0'){
		hide();
		$.messager.alert('提示信息','新增记录成功！','info');
		$("#recordList").flexReload();
	}else{
		if(result=="2"){
			$.messager.alert('提示信息','名称必须唯一！','info');
		}else{
			$.messager.alert('提示信息','服务器忙，请重试！','info'); 
		}
	}
		
	
}
////////////////////////////////////////////////////////新增end/////////////////////////////////////////////////////////


////////////////////////////////////////////////////////删除begin///////////////////////////////////////////////////////

/**
 * 删除方法入口【复选框入口】
 */
function toDelete(){
	var checkedIds = $("#recordList").getCheckedRows();
	if(checkedIds.length<1){
		$.messager.alert('提示信息','请选择一行后进行删除操作！','info');
		return;
	}
	doDelete((checkedIds+"").replace(new RegExp(/(row)/g),''));
} 

/**
 * 执行后台方法删除数据
 * @param ids
 * @returns {Boolean}
 */
function doDelete(ids){
	if (ids != null || ids.length > 0) {
	$.messager.confirm('删除设置',"确定删除选中的设置?",function(result){
		if(result){
			var url = "analyse/analyseDelete.action";
			var params = {ids:ids.toString()};
			deleteRecord(ids,tableName);
		}
		
		});
	}
}


/**
 * 删除记录
 * @param ids 删除记录id  格式：XX,XXX
 * @param tableName
 * @return
 */
function deleteRecord(ids,tableName){

	 
	 var whereParam = new QueryParam();
	 whereParam.put("@id","'"+ids+"'");
	 
	 var mapParams = new QueryParam();
	 mapParams.put("@whereParam",whereParam.toJSON());
	 mapParams.put("@tableName",tableName);
	 
	 analyseDelete(mapParams.toJSON());
}

/**
 * 向后台提交删除
 * @param mapParams
 * @return
 */
function analyseDelete(mapParams){
//后台查询数据
$.ajax({
    type : "POST",
    url : "analyse/analyseDelete.action",
    data :"paramStr="+mapParams,
    success :doDeleteSucc,
    error : function(data) {
    	$.messager.alert('提示信息','服务器忙，请重试！','info');
    }
    
});
}
/**
 * 删除成功
 * @param result
 * @return
 */
function doDeleteSucc(result){
	if(result!=null && result == '0'){
			$.messager.alert('提示信息','删除记录成功！','info');
			$("#recordList").flexReload();
		}else{
			$.messager.alert('提示信息','删除不成功！','info');		
		}
		
	clearForm("editWindow");
}
////////////////////////////////////////////////////////删除end/////////////////////////////////////////////////////////


////////////////////////////////////////////////////////编辑begin/////////////////////////////////////////////////////////

/**
 * 编辑方法入口【复选框入口】
 */
function toEdit(){
	$("#titleInfo").html("编辑设置");
	var checkedIds = $("#recordList").getCheckedRows();
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
			clearForm("editWindow");
			load();
			show();
			$("#submitBtn").unbind("click");
			var params = {"id":id,"tableName":tableName};
			
			var url="analyse/getRecordById.action";
		jsUtil.useAjaxDef(url,params, false, toEditSucc);
	}
}

//删除左右两端的空格   
function lrtrim(str){   
 return str.replace(/(^\s*)|(\s*$)/g, "");   
}  

/**
 * 注：查询结果列名必须与页面表单元素名相同
 * 查询信息显示在编辑窗口(成功返回)
 * @param id
 */
function toEditSucc(recordInfo){
	if(recordInfo!=null){
		if(recordInfo.length > 0){
			$("#editWindow input:not(:button)").each(function(i){
				$(this).val(lrtrim(recordInfo[0][$(this).attr("name")]+""));
			});
			
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
		var setParam = getAddForm();
		updateRecord(setParam,$("#id").val(),tableName);
	}
}

/**
 * 更新记录
 * 例子：
 * 	 var setParam = new QueryParam();
 *   setParam.put("@CheckingNo","");
 *   setParam.put("@CheckTime","''");
 * @param setParam 更新记录结果集
 * @param id       修改记录ID
 * @param tableName 表名
 * @return
 */
function updateRecord(setParam,id,tableName){

	 var whereParam = new QueryParam();
	 whereParam.put("@id",id);
	 
	 var mapParams = new QueryParam();
	 mapParams.put("@setParam",setParam.toJSON());
	 mapParams.put("@whereParam",whereParam.toJSON());
	 mapParams.put("@tableName",tableName);
	 
	 analyseUpdate(mapParams.toJSON());
}

/**
 * 提交修改
 * @param mapParams
 * @return
 */
function analyseUpdate(mapParams){
//后台查询数据
$.ajax({
    type : "POST",
    url : "analyse/analyseUpdate.action",
    data :"paramStr="+mapParams,
    success : doUpdateSucc,
    error : function(data) {
    	$.messager.alert('提示信息','服务器忙，请重试！','info');
    }
});
}
/**
 * 修改成功
 * @param result
 * @return
 */
function doUpdateSucc(result){
	if(result==0){
		hide();
		$.messager.alert('提示信息','更新记录成功！','info');
		$("#recordList").flexReload();
	}else{
		if(result=="2"){
			$.messager.alert('提示信息','名称必须唯一！','info');
		}else{
			$.messager.alert('提示信息','服务器忙，请重试！','info'); 
		}
	}
}
////////////////////////////////////////////////////////编辑end/////////////////////////////////////////////////////////





/////////////////////////////////////////////////////////辅助/////////////////////////////////////////////////////////////
//校验是否整数
function IsInteger(snum){
	var slen;
	slen=snum.length;
	for (i=0; i<slen; i++){
		cc = snum.charAt(i);
		if (cc <"0" || cc >"9")
		{
			flag=false;
			return false;
		}
	}
	flag = true;
	return true;
}


/**
 * MAP类
 * var params = new QueryParam();
 * params.put("param1","value1");
 * params.put("param2",Object.toJSON());
 */
QueryParam = function(jsonStr){
this.isConvert = jsonStr == null;
this.values = jsonStr != null ? jsonStr : new Array();
/**
 *	设置参数值

 */
this.put = function(paramName,paramValue){
	this.values[paramName] = paramValue;
};

/**
 *	根据参数取值

 */
this.get = function(paramName){
	return typeof(this.values[paramName]) != "undefined" ? this.values[paramName] : "";
};

this.containsKey = function(paramName){
	for (var key in this.values){
		if (key == paramName){
			return true;
		}
	}
	return false;
};

this.clear = function(){
	this.values = new Array();
};

this.toJSON = function(){
	if (this.values != null){
		if(this.isConvert){
			var jstr = "";
			for (var key in this.values){
				if(key.indexOf("@")>-1){
					var val = this.values[key];
					
					if(val!=null && val.length>0){
						var strVal = this.values[key];
						if(IsInteger(strVal)){
							strVal = "'"+this.values[key]+"'";
						}
							
						jstr += key.substr(1) + "=" + strVal + ",";
					}else{
						jstr += key.substr(1) + "='',";
					}
				}
			}
			if (jstr != ""){
				jstr = jstr.substr(0,jstr.length - 1);
				return "{"+jstr+"}";
			}
		}else{
			
			return this.values;
		}
	}
	return "{}";
};
};