
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
	clearSpan("vehicleListTree");
	
	$('#qy').html('');//隐藏
	$('#qyValue').html('');//隐藏
	
	//查询当前用户权限下的车辆【方法在initSelects.js文件里面】
//	findVehicleListTA(1,1);
	findVehicleListTA_tree('');
	
	showEditForm();
	//提交
	$('#submitBtn').bind("click",ConfigAdd); 

}


/**
 * 加载车辆树
 * @return
 */
var noinf=0;
function findVehicleListTA_tree(op){
	try{
		$('#imgSelectVehicle').show();//显示
		$('#vehicleListTree').tree({
			url : "analyse/findVehilceListByUserType_Tree.action?analyseGroupid="+op,
			checkbox:true,//定义是否在每个节点前边显示 checkbox 
			animate : true, //定义当节点展开折叠时是否显示动画效果
			onlyLeafCheck:false,  //定义是否级联检查
			onLoadSuccess:function(success){
				
				var child=$("#vehicleListTree").children().length; 
				noinf++;
				if(noinf>1)
				{ 
					if(child==0){
						$.messager.alert('提示', '没有可选车辆！', 'Info'); 
						$('#imgSelectVehicle').hide();//隐藏
					}else{
						$('#imgSelectVehicle').hide();//隐藏
					}
				}
				
			}
		});
	}catch(e){}
}


/**
 * 新增方法
 */
function ConfigAdd(){
	//获得选中的车辆id组合
//	var vehicleStr = getVehicleStrIinfo();
	
	/**验证是否选中车辆**/
	var vehicleStr=doNode();
	var re=treeVehicleMessage(vehicleStr);
	if(re==false){return;}
	
//	$("#id").val('');
//	alert(vehicleStr);
	var flag = $("#editWindow").beforeSubmit();
	if(flag){
		// 复选框验证
//		checkboxMessage();
//		var disp = $("#vehiclesspan").css('display');
//		if(disp != 'none'){
//			return ;
//		}
		//保存参数
		var analyseGroupsInfo = getParams();
		var idStr = vehicleStr;
		
		$.ajax({
		    type : "POST",
		    url : "analyse/addAnalyesGroupTree.action",
		    data : {analyseGroupsInfo:analyseGroupsInfo,idStr:idStr},
		    dataType : "JSON",
		    async:false,
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

//得到选中的车辆id
function  doNode(){
//	//车辆id组合以,隔开
//	var vehicleStr = '';
	
	var c="";
    var p="";
    $(".tree-checkbox1").parent().children('.tree-title').each(function(){
      c+=$(this).parent().attr('node-id')+",";
    });
//     $(".tree-checkbox2").parent().children('.tree-title').each(function(){
//    	 p+=$(this).parent().attr('node-id')+",";
//    });
//    alert("c:"+c);
//    alert("p:"+p);
//    var str=(c+p);
    var str=c;
    str=str.substring(0,str.length-1);
//    alert("结果："+str);
	return str;
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
	var id = $("#id").val(); //id
	var description = $("#description").val();//说明
	var analyseGroupsInfo  = "{'name':'" + name+"'"
	+",'description':" + "'"+description+"'"
	+",'id':" + "'"+id+"'";
	analyseGroupsInfo = analyseGroupsInfo+"}";
	return analyseGroupsInfo;
}



/**
 * 修改
 * @return
 */
function doEdit(id){
	hide();
	closeMeasageAll();
	if(id != null && id != ''){
		clearForm("editWindow");
		//相关车辆
		clearSpan("vehicleListTree");
		//名称
//		$("#nameView").val("");
		//打开查看
		showView(1);
		
		/**查询名称和企业**/
		$('#qy').html('所属企业：');//显示
		$('#qyValue').html("<input type='text' class='td_input' id='workName' name='workName' disabled='disabled' />");//显示
		$.post("analyse/getAnalyesGroupByIdTree.action", {id : id}, function(data){
			var config = data.data;
			$("#id").val(id);
			$("#name").val(lrtrim_analyeseGroup(config.Name));
			$("#description").val(lrtrim_analyeseGroup(config.Description));
			$("#workName").val(lrtrim_analyeseGroup(config.workUnitName));
		});
		
		/**查询车辆树**/
		findVehicleListTA_tree(id);
		
		$("#submitBtn").unbind("click");
		//提交
		$('#submitBtn').bind("click",deleteOrUpdate); 
		
	}
	
}

/**
 * 保存修改【先删除，再保存】
 * @param str
 * @return
 */
function deleteOrUpdate(){
	var id = $("#id").val();
	
	/**验证是否选中车辆**/
	var vehicleStr=doNode();
	var re=treeVehicleMessage(vehicleStr);
	if(re==false){return;}
	
	//先删除
	if (id != null || id.length > 0) {
		$.ajax({
		    type : "POST",
		    url : "analyse/delAnalyesGroup.action",
		    data : {id:id.toString()},
		    dataType : "JSON",
		    async:false,
		    success : function(data) {
		    	//删除成功了再保存
		    	if(data.code == '1'){
		    		//保存
		    		ConfigAdd();
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
				    async:false,
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


/**
 * 验证是否选中了车辆
 * @param op
 * @return
 */
function treeVehicleMessage(op){
	
	var vehicleIds = op.split("vv");
	
//	alert(vehicleIds.length);
	
	if(vehicleIds.length==1) {
		$("#vehiclesspan").showMessage({
			type : "error",
			closeable : false, 
			text : "请至少选择一个车辆！"});
		return false;
	}else{
		$("#vehiclesspan").closeMessage();
		return true;
	}
}

/**
 * 关闭所有错误提示
 * @return
 */
function closeMeasageAll(){
	$("#namespan").closeMessage();
	$("#vehiclesspan").closeMessage();
	$("#descriptionspan").closeMessage();
	
}


