
/********************【初始化和查询】【begin】***********************/
$(function() {
	    var params=getparams();
		$("#DeviceSetupList").flexigrid( {
			url : 'deviceManage/findVehicleDeviceSetupList.action',
			dataType : 'json',
			params : params,
			colModel : [ 
			{
				display : '车牌号码',
				name : 'registrationNo',
				width : 100,
				sortable : true,
				align : 'center'
			},{
				display : '企业名称',
				name : 'w_name',
				width : 120,
				sortable : true,
				align : 'center'
			},{
				display : '外设类型',
				name : 'type_name',
				width : 100,
				sortable : true,
				align : 'center'
			},{
				display : '外设型号',
				name : 'model_name',
				width : 100,
				sortable : true,
				align : 'center'
			},{
				display : '外设参数',
				name : 'paramValue',
				width : 530,
				sortable : true,
				align : 'center'
			},{
				display : '安装位置',
				name : 'ps_name',
				width : 100,
				sortable : true,
				align : 'center'
			},{
				display : '外设状态',
				name : 'state',
				width : 60,
				sortable : true,
				align : 'center'
			},{
				display : '备注',
				name : 'memo',
				width : 80,
				sortable : true,
				align : 'center'
			},{
				display : '操作',
				name : 'Handler',
				handlefunction : 'getHandleColumn',
				paramcolnames : ['id'],
				width : 100,
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
			height : getNormalHeight()-20
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
	var registrationNo = $("#registrationNo").val();
	var params = [{
		name : 'registrationNo',
		value : registrationNo
	}];
	return params;
}

/**
* 查询方法
*/
function toSearch(){
	var params= getparams();
	$("#DeviceSetupList").flexOptions({
			newp : 1,
			params : params
		}).flexReload();
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
		 if(resources.indexOf("|updVehicleDeviceSetupInfo|")!=-1){
			 editStr = '<a href="javascript:void(0)"  title="编辑" onclick="doEdit(' + id + ')">编辑</a>';
		 }
		 if(resources.indexOf("|delVehicleDeviceSetupInfo|")!=-1){
			 deleteStr = '<a href="javascript:void(0)" title="删除" onclick="doDelete(' + id + ')">删除</a>';
		 }
	}
	return '&nbsp;&nbsp;' +editStr + '&nbsp;&nbsp;' + deleteStr;
}


/**
 * 加载车辆树
 * @return
 */
var noinf=0;
function findVehicleList_tree(op){
	try{
		$('#imgSelectVehicle').show();//显示
		$('#vehicleListTree').tree({
			url : "deviceManage/findVehilceListByUserType_Tree_D.action?vehicledevicesetupid="+op,
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

/********************【初始化和查询】【end】***********************/


/********************【新增】【begin】***********************/
/**
 * 新增加方法入口
 */
function toCreate(){
	$("#vehicleTitle").html("车辆外设新增");
	//关闭详细
	hideView();
	//清除点击事件
	$("#submitBtn").unbind("click");
	//清空DIV中包含的所有表单的值
	clearForm("editWindow");
	//清除树
	clearSpan("vehicleListTree");
	
	//加载车辆树
	findVehicleList_tree('');
	
	/**下拉框可编辑【外设类型】**/
	$('#type_name').removeAttr("disabled");
	
	/**控件可用不可用【显示和隐藏】**/
	trDisabled("vehicleNa",0);
	trDisabled("vehicleTr",1);
	/**加载下拉框**/
	initAjaxSelect_Ansynce("type_name","deviceManage/findVehicledeViceTypeList.action",0,false);
	initAjaxSelect_Ansynce("position_name","deviceManage/findVehicleSetupPositionList.action",0,false);
	initAjaxSelect_Ansynce("model_name","deviceManage/findVehicleDeviceModelList.action",0,false);
	initIsstate("state");
	/**打开新增**/
	showEditForm();
	//提交
	$('#submitBtn').bind("click",ConfigAdd); 
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
	var flag = $("#editWindow").beforeSubmit();
	if(flag){
		/**保存参数**/
		var vehicleDeviceSetupInfo = getParams();
		var idStr = vehicleStr;
		var paramValue = $("#paramValue").val();
		$.ajax({
		    type : "POST",
		    url : "deviceManage/addVehicleDeviceSetupInfo.action",
		    data : {vehicleDeviceSetupInfo:vehicleDeviceSetupInfo,idStr:idStr,paramValue:paramValue},
		    dataType : "JSON",
		    async:false,
		    success : function(data) {
		    	if(data == '1'){
		    		 hide();
		    		 //刷新查询列表
		    		$("#DeviceSetupList").flexReload();
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
	var c="";
    var p="";
    $(".tree-checkbox1").parent().children('.tree-title').each(function(){
      c+=$(this).parent().attr('node-id')+",";
    });
    var str=c;
    str=str.substring(0,str.length-1);
	return str;
}

/**
 * 验证是否选中了车辆
 * @param op
 * @return
 */
function treeVehicleMessage(op){
	var type=$("#type_name").val();
	var type_name=$("#type_name").find("option:selected").text();
	//alert(type_name);
	var vehicleIds = op.split("vv");
	if(vehicleIds.length==1) {
		$("#vehiclesspan").showMessage({
			type : "error",
			closeable : false, 
			text : "请至少选择一辆车！"});
		return false;
	}

	else if(vehicleIds.length!=2 && type_name=="视频"){
		$("#vehiclesspan").showMessage({
			type : "error",
			closeable : false, 
			text : "只能选择一辆车！"});
		return false;
	}
	else{
		$("#vehiclesspan").closeMessage();
		return true;
	}
}

function typeChange(){
	 var type_name=$("#type_name").find("option:selected").text();
	 if(type_name=="视频"){
		    $("#paramValue").attr("disabled",false);
		    $("#paramValue").val("");
		  
	}else{
		   $("#paramValue").attr("disabled",true);
	       $("#paramValue").val(type_name);
	}
}

/**
 * 保存参数
 */
function getParams(){
	var type_name = $("#type_name").val();//外设类型
	var model_name = $("#model_name").val();//外设型号
	var id = $("#id").val(); //id
	var position_name = $("#position_name").val();//安装位置
	var state = $("#state").val();//外设状态 
	var description = $("#description").val();//备注
	
	var vehicleDeviceSetupInfo  = "{'type_name':'" + type_name+"'"
	+",'model_name':" + "'"+model_name+"'"
	+",'id':" + "'"+id+"'"
	+",'position_name':" + "'"+position_name+"'"
	+",'state':" + "'"+state+"'"
	+",'description':" + "'"+description+"'";
	
	
	vehicleDeviceSetupInfo = vehicleDeviceSetupInfo+"}";
	return vehicleDeviceSetupInfo;
}



/********************【下拉框】***********************/
/**
 * 初始化外设状态下拉框
 */
function initIsstate(elementId){
	var unit = $("#" + elementId).get(0);
	if(unit.options.length == 0){
		unit.options.add(new Option("是","1"));
		unit.options.add(new Option("否","0"));
	}
}

/********************【修改】***********************/
/**
 * 修改
 * @return
 */
function doEdit(id){
	$("#vehicleTitle").html("车辆外设编辑");
	hide();
	closeMeasageAll();
	if(id != null && id != ''){
		clearForm("editWindow");
		//相关车辆
		//clearSpan("vehicleListTree");
		//打开查看
		showView(1);
		/**加载下拉框**/
		initAjaxSelect_Ansynce("type_name","deviceManage/findVehicledeViceTypeList.action",0,false);
		initAjaxSelect_Ansynce("position_name","deviceManage/findVehicleSetupPositionList.action",0,false);
		initAjaxSelect_Ansynce("model_name","deviceManage/findVehicleDeviceModelList.action",0,false);
		initIsstate("state");
		/**下拉框不可编辑【外设类型】**/
		$('#type_name').attr("disabled","disabled");
		
		/**控件可用不可用【显示和隐藏】**/
		trDisabled("vehicleNa",1);
		trDisabled("vehicleTr",0);
		
		$.post("deviceManage/findVehicleDeviceSetupInfos.action", {id : id}, function(data){
			var config = data.data;
			//$("#id").val(id);
			//设置input
			$("#editWindow input:not(:button)").each(function(i) {
				$(this).val(config[$(this).attr("name")]);
			});
			//设置下拉列表
			$("#editWindow select").each(function(i) {
				$(this).val(config[$(this).attr("name")]);
			});
			
		});
		$("#submitBtn").unbind("click");
		//提交
		$('#submitBtn').bind("click",UpdateInfo); 
		
	}
}

/**
 * 保存修改【直接修改】
 * @param str
 * @return
 */
function UpdateInfo(){
	if (id != null || id.length > 0) {
		/**保存参数**/
		var vehicleDeviceSetupInfo = getParams();
		var paramValue = $("#paramValue").val();
		$.ajax({
		    type : "POST",
		    url : "deviceManage/updVehicleDeviceSetupInfo.action",
		    data : {id:id.toString(),vehicleDeviceSetupInfo:vehicleDeviceSetupInfo,paramValue:paramValue},
		    dataType : "JSON",
		    async:false,
		    success : function(data) {
		    	//删除成功了再保存
		    	if(data.code=="1"){
		    		hide();
		    		$("#DeviceSetupList").flexReload();
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

/********************【删除】***********************/
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
				    url : "deviceManage/delVehicleDeviceSetupInfo.action",
				    data : {id:ids.toString()},
				    dataType : "JSON",
				    async:false,
				    success : function(data) {
				    	if(data.code == '1'){
				    		hide();
				    		$("#DeviceSetupList").flexReload();
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




/********************【辅助】***********************/

//删除左右两端的空格   
function lrtrim_analyeseGroup(str){   
 return str.replace(/(^\s*)|(\s*$)/g, "");   
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
 * 关闭所有错误提示
 * @return
 */
function closeMeasageAll(){
	$("#type_namespan").closeMessage();
	$("#model_namespan").closeMessage();
	$("#position_namespan").closeMessage();
	$("#statespan").closeMessage();
	$("#paramValuespan").closeMessage();
	$("#descriptionspan").closeMessage();
	
}

/**
 * 设置控件【隐藏和显示】
 * id 控件id
 * type 1可用，0不可用
 */
function trDisabled(id,type){
	if(type==0){
		$('#'+id).removeAttr("disabled");
		$('#'+id).hide();
	}else{
		//$('#'+id).attr("disabled","disabled");
		$('#'+id).show();
	}
}

/**
 * 设置控件div的高度
 * @param id
 * @return
 */
function divCss(id,value){
	$(id).css("height",value);
}


////////没用到///////
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

function showError(){
	showWarning('服务器忙，请重试！');
}