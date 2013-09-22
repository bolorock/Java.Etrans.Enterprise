$(function() {
	    var params=getparams();
		$("#AnalyseGroupList").flexigrid( {
			url : 'analyse/findAnalyseGroupList.action',
			dataType : 'json',
			params : params,
			colModel : [ 
			{
				display : '分析组名称',
				name : 'name',
				width : 350,
				sortable : true,
				align : 'left'
			},{
				display : '所属企业',
				name : 'workUnitName',
				width : 180,
				sortable : true,
				align : 'left'
			},{
				display : '说明',
				name : 'description',
				width : 180,
				sortable : true,
				align : 'left'
			},{
				display : '操作',
				name : 'Handler',
				handlefunction : 'getHandleColumn',
				paramcolnames : ['id'],
				width : 180,
				sortable : false,//操作列不能排序
				align : 'center'
			}],	
			sortname : "id",//第一次加载数据时排序列
			sortorder : "desc",//第一次加载数据时排序类型
			usepager : true,//是否分页，默认为true
			showTableToggleBtn : true,//是否显示收起/打开按钮,默认不显示。
			useRp : true,//是否可以动态设置每页显示的结果数，默认为false。
			rp :8,//每页记录数，默认为10
			checkbox : false,//是否要多选框,默认为false。
			//rowId : 'ID',// 多选框绑定行的id,只有checkbox : true时才有效。
			singleSelect:false,
			width : 'auto',//表格宽度
			height : getHandleHeight()
		});
		
		//初始化验证插件
		$("#editWindow").validation();
		//按钮绑定点击事件
		$('#searchBtn').bind('click', toSearch);//查询
		$('#createBtn').bind('click', toCreate);//新增
		$('#cancelBtn').bind('click', hide);//取消
		$('#closeBtn').bind('click', hideView);//关闭
});



//获取查询参数
function getparams(){
	var configName = $("#configName").val();
	var params = [{
		name : 'name',
		value : configName
	}];
	return params;
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
//		//判断ACTION的访问权限
		 if(resources.indexOf("|updateGroup|")!=-1){
			 editStr = '<a href="javascript:void(0)"  title="编辑" onclick="doEdit(' + id + ')"><img src="Images/sys_01.png" width="14" height="16"></a>';
		 }
		 if(resources.indexOf("|deleteGroup|")!=-1){
			 deleteStr = '<a href="javascript:void(0)" title="删除" onclick="doDelete(' + id + ')"><img src="Images/sys_02.png" width="14" height="16"></a>';
		 }
	}
	return '&nbsp;&nbsp;' +editStr + '&nbsp;&nbsp;' + deleteStr;
}


/**
* 查询方法
*/
function toSearch(){
	var params= getparams();
	$("#AnalyseGroupList").flexOptions({
			newp : 1,
			params : params
		}).flexReload();
}

/**
 * 新增加方法入口
 */
function toCreate(){
	//关闭详细
	hideView();
	//清除点击事件
	$("#submitBtn").unbind("click");
	//清空DIV中包含的所有表单的值
	clearForm("editWindow");
	
	//查询当前用户权限下的车辆【方法在initSelects.js文件里面】
	findVehicleListTA(1,1);
	
	showEditForm();
	//提交
	$('#submitBtn').bind("click",ConfigAdd); 

}

/**
 * 新增方法
 */
function ConfigAdd(){
	//获得选中的车辆id组合
	var vehicleStr = getVehicleStrIinfo();
//	alert(vehicleStr);
	var flag = $("#editWindow").beforeSubmit();
	if(flag){
		// 复选框验证
		checkboxMessage();
		var disp = $("#vehiclesspan").css('display');
		if(disp != 'none'){
			return ;
		}
		//保存参数
		var analyseGroupsInfo = getParams();
		var idStr = vehicleStr;
		
		$.ajax({
		    type : "POST",
		    url : "analyse/addAnalyesGroup.action",
		    data : {analyseGroupsInfo:analyseGroupsInfo,idStr:idStr},
		    dataType : "JSON",
		    success : function(data) {
		    	if(data.code == '1'){
		    		 hide();
		    		 //刷新查询列表
		    		$("#AnalyseGroupList").flexReload();
		    	}else if(data.code == '2'){
		    		alert("分析组名称已存在!");
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

//获得车辆id组合
function getVehicleStrIinfo(){
		//车辆id组合以,隔开
		var vehicleStr = '';
		$("[name=vehicles]:checkbox").each(function() {
			
			if ($(this).attr("checked") == "checked") {
				
				vehicleStr += $(this).attr("value") + ",";
			}
		});
		vehicleStr = vehicleStr.substr(0, vehicleStr.length - 1);
		return vehicleStr;
}


//保存参数
function getParams(){
	var name = $("#name").val();//轨迹分析组名称
	var description = $("#description").val();//说明
	var analyseGroupsInfo  = "{'name':'" + name+
	"','description':" + "'"+description+"'";
	analyseGroupsInfo = analyseGroupsInfo+"}";
	return analyseGroupsInfo;
}



/**
 * 查看
 * @return
 */
function doEdit(id){
	hide();
	if(id != null && id != ''){
		clearForm("viewWindow");
		
		//相关车辆
		$("#vehicleView").html("");
		//名称
		$("#nameView").val("");
		//打开查看
		showView(2);
		
		$.post("analyse/getAnalyesGroupById.action", {id : id}, function(data){
			
			var config = data.data;
			
			$("#nameView").val(lrtrim_analyeseGroup(config.Name));
			$("#descriptionView").val(lrtrim_analyeseGroup(config.Description));
			$("#workNameView").val(lrtrim_analyeseGroup(config.workUnitName));
			
			//车牌号
			var vehicleList = config.vehicles;
			var vehicleStr = "";
			vehicleStr += "<ul>";
			if(vehicleList && vehicleList.length>0){
				for ( var i = 0; i < vehicleList.length ; i++) {
					vehicleStr += "<li>" +vehicleList[i].registrationNo+"</li>";
				}
			}
			vehicleStr += "</ul>";
			$("#vehicleView").html(vehicleStr);
			
		});
		
	}
	
}

//删除左右两端的空格   
function lrtrim_analyeseGroup(str){   
 return str.replace(/(^\s*)|(\s*$)/g, "");   
}  


/**
 * 执行后台方法删除数据
 * @param ids
 * @returns {Boolean}
 */
function doDelete(ids){
//	alert(ids);
	if (ids != null || ids.length > 0) {
		if (!confirm("确定删除?")) {
			return false;
		} else {
				$.ajax({
				    type : "POST",
				    url : "analyse/delAnalyesGroup.action",
				    data : {id:ids.toString()},
				    dataType : "JSON",
				    success : function(data) {
				    	if(data.code == '1'){
				    		$("#AnalyseGroupList").flexReload();
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
 * 关闭详细框
 */
function hideView(){
	$("#viewWindow").animate({height: 'hide', opacity: 'hide'}, 400);
}

/**
 * 打开编辑窗口
 */
function showEditForm(){
	showView(1);
	$("#editWindow .errorMsg").closeMessage();
}

/**
 * 打开【编辑窗口】或者【详细框】
 */
function showView(op){
	//编辑窗口
	if(op==1){
		$("#editWindow").animate({height: 'show', opacity: 'show'}, 400);
	}
	//详细框
	else if(op==2){
		$("#viewWindow").animate({height: 'show', opacity: 'show'}, 400);
	}
}

/**
 * 更多
 * @return
 */
function gdGo(){
	
	if($("#hshidden").val()=="0"){
		alert("没有更多数据了！")
		return;
	}
	var pageNo = $("#pageNo").val();
	pageNo=Number(pageNo)+1;
	//调用查询方法
	findVehicleListTA(2,pageNo);
}




