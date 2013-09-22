$(function() {
	var width= getWidth();
	  var height=getHeight();
		$("#platFormCheckConfigList").flexigrid( {
			url : 'sys/getPlatFormCheckConfigByUserId.action',
			dataType : 'json',
			colModel : [ 
			{
				display : '编号',//表头
				name : 'id',//JSON数据中属性名
				width :80,// 得加上 要不IE报错
				hide:true,
				sortable : true,//此字段是否能排序
				align : 'center'//对齐方式
			},
			{
				display : '创建用户',//表头
				name : 'userName',//JSON数据中属性名
				width : 120,// 得加上 要不IE报错
				sortable : true,//此字段是否能排序
				align : 'center'//对齐方式
			}, {
				display : '发送平台',
				name : 'platFormName',
				width : 120,
				sortable : true,
				align : 'center'
			}, {
				display : '发送类型',
				name : 'TargetType',
				handlefunction : 'getTargetTypeStrColumn',
			  paramcolnames : ['TargetType'],
				width : 120,
				sortable : false,
				align : 'center'
			}, {
				display : '发送数据',
				name : 'CheckData',
				width : 150,
				sortable : false,
				align : 'center'
			}, {
				display : '发送时间',
				name : 'sendTime',
				width : 150,
				sortable : true,
				align : 'center'
			}, {
				display : '最后发送时间',
				name : 'LastCheckTime',
				width : 150,
				sortable : true,
				align : 'center'
			}, {
				display : '查岗类型',
				handlefunction:'getSourceColumn',
				name : 'source',
				paramcolnames : ['source'],
				width : 100,
				sortable : true,
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
			width : width-260,//表格宽度
			height :height-470//表格高度
		});
		
		//按钮绑定点击事件
	    $('#createBtn').bind('click', toCreate);
	    $('#deleteBtn').bind('click', toDelete);
	    $('#cancelBtn').bind('click', hide);
	    	//初始化验证插件
		$("#addForm").validation();
});
function getTargetTypeStrColumn(TargetType) {
	var targetTypeStr='';
	if(TargetType=='1'){
		targetTypeStr="当前连接的下级平台";
	}else if(TargetType=='2'){
		targetTypeStr="下级平台所属单一业户";
	}else{
		targetTypeStr="下级平台所属所有业户";
	}
	return targetTypeStr;
}

function getSourceColumn(source) {
	var sourceText='';
	if(source=='1'){
		sourceText="自动查岗配置";
	}else{
		sourceText="手工查岗配置";
	}
	return sourceText;
}


var newTransportationPermit='';
/**
 * 新增加方法入口
 */
function toCreate(){
	$("#submitBtn").unbind("click");
	clearForm("editWindow");
  clearSpan("msgDiv");
	initTableDate();
  initransportationType('param1');
  $("#param1").change(params1Change);
	show();
	$('#submitBtn').bind('click', doCreate);
}

/**
 * 执行后台方法新增数据
 */
function doCreate(){
		var flag = $("#addForm").beforeSubmit();
		if(flag){
	 if($("#param1").val()=="2")//下级平台所属单一业户
	{
		var nodes = treeframe.$('#functionTree').tree('getChecked');
		if(nodes.length==0)
		{
			$.messager.alert('提示信息','请选择一个对象(运输企业)！','info'); 
			return;
		}
		else if(nodes.length>1)
		{
			$.messager.alert('提示信息','只能选择一个对象(运输企业)！','info'); 
			flag=false;
			return;
		}
		
		var transportationPermit=nodes[0].id;//运输许可证
		
		if(transportationPermit.indexOf("T_") == -1)
		{
			$.messager.alert('提示信息','只能选择运输企业,而不是平台！','info'); 
			return;
		}
		
		transportationPermit = transportationPermit.replace("T_","");
		newTransportationPermit=transportationPermit;
		transportationPermit = stringToAsicc(transportationPermit);
		transportationPermit =transportationPermit+"000000000000000000000000".substring(0,(24-transportationPermit.length));
		$("#param2").val(transportationPermit);
	}
	var param = getParams_chagang();
  var paramMeassag=param.paramMeassage;
  var ids=param.commandTarget;
  ids=ids.substring(0,ids.length-1);
	var commandCode="GuoBiao_PF_Down_REQ_PostQuery";
	var targetType=$("#param1").val();// 查岗对象编号
	var checkData=$("#param3").val();
  var sendTime=$("#param8").val();
  var answer=$("#param7").val();
		$.ajax({
		    type : "POST",
		    url : "sys/addPlatFormCheckConfig.action",
		   data: {"commandCode":commandCode,"TransportationPermit":newTransportationPermit,"paramMeassage":paramMeassag,"commandTarget":ids,"targetType":targetType,"checkData":checkData,"sendTime":sendTime,"answer":answer},
		    dataType : "JSON",
		    success : function(data) {
		    	if(data.code == '0'){
		    		hide();
		    		$("#platFormCheckConfigList").flexReload();
		    	}else{
		    			showTip("msgDiv","服务器忙，请重试");
		    	}
		    },
		    error : function(data) {
		    		showTip("msgDiv","服务器忙，请重试");
		    }
	    });
		}
	
}

/**
 * 删除方法入口
 */
function toDelete(){
	var checkedIds = $("#platFormCheckConfigList").getCheckedRows();
	if(checkedIds.length<1){
	$.messager.alert('提示信息','请至少选择一行后进行删除操作！','info'); 
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
		
			$.messager.confirm('','确定删除选中的配置?',function(result){
		  if(result){
		    	$.ajax({
				    type : "POST",
				    url : "sys/delPlatFormCheckConfig.action",
				    data : {ids:ids.toString()},
				    dataType : "JSON",
				    success : function(data) {
				    	if(data.code == '0'){
				    		$("#platFormCheckConfigList").flexReload();
				    	}else{
				    			$.messager.alert('提示信息','因网络不畅，操作失败 ，请稍后再试！','info'); 
				    	}
				    },
				    error : function(data) {
				    			$.messager.alert('提示信息','因网络不畅，操作失败 ，请稍后再试！','info'); 
				    }
			    });
		  }
		})
	}
}

	function params1Change()
			{
				$("#divTree").hide();
				var val = $(this).val();
				switch(val)
				{
					case "1":
						var flat =getChekcedFlat();
						if(null ==flat){
							$.messager.alert('提示信息','请选择平台！','info'); 
						}
						else
						{
							var areaId=stringToAsicc(flat.areaCode);
							var gnssCenterId=stringToAsicc(flat.gnssCenterId);
							
							var param =areaId+gnssCenterId;

							areaId ="000000000000".substring(0,(12-areaId.length)) +areaId;

							gnssCenterId =gnssCenterId+"000000000000".substring(0,(12-gnssCenterId.length));
							
							param =areaId +gnssCenterId;
							    
							$("#param2").val(param);
						}
						break;
					case "2":
						var flat =getChekcedFlat();
							if(null ==flat){
						showTip("msgDiv","请选择平台)");
						}else{
								$("#divTree").show();
							var flat =getChekcedFlat();
							$("#treeframe").attr("src","sys/platFormCheckConfig/workUnit.jsp?id="+flat.flatformId +"&isTransit=true");
						}
						break;
					case "3":
						$("#param2").val("000000000000000000000000");
						break;
					default:
						break;
				}
}
function initTableDate()
{
	
	var tbody="";
	
	$.ajax({
		url:"command/findCommandPlatform.action",
		type:"POST",
		dataType:"json",
		success:function(data){
		$("#flatformList tr:gt(0)").remove();
				
		$(data).each(function(i,n){
			var checked="";
			if(i==0){
				checked="checked"
			}else{
				checked=""
			}
			tbody +="<tr>"
				+"<td width='60px'> <input type='radio' noselect='true'	 name='platformGroup' gnssCenterId='"+n.GnssCenterID+"'  flatformId='"+n.Id+"' areaCode='"+n.AreaCode+"' "+checked+"  class='ck' onclick='ck(this)' /> </td>"
				+"<td>"+n.Name+"</td>";
				tbody+="</tr>";
		});
		$("#flatformList").append(tbody);
		$("#flatformList tr:odd").addClass("odd");
		$("#flatformList tr:even").addClass("even");
		$(".load").hide();
	   }
		
	});
}
function ck(obj)
{
	var isChecked =$(obj).attr("checked");
	if(isChecked)
	{
		$("#param1").attr("disabled",false);
	}
	else
	{
		$("#param1").attr("disabled",true);
	}
}


/**
 * 获取选择的平台
 */
function getChekcedFlat()
{
	var ck=$(".ck:checked");
	if(ck.length==1)
	{
		return {"flatformId":$(ck[0]).attr("flatformId"),"gnssCenterId":$(ck[0]).attr("gnssCenterId"),"areaCode":$(ck[0]).attr("areaCode")};
	}
	else
		return null;
}



function getParams_chagang()
{
	var ids='';
	var cks = $(".ck:checked");
	$(cks).each(function(i,n){
		ids +=$(n).attr("gnssCenterId")+"_" +$(n).attr("flatformId") +",";
	});
	var param1=$("#param1").val();// 查岗对象编号
	
	//1字节16进制
	param1 = Integer.toHexString(param1).toUpperCase();
	param1 ="00".substring(0,(2-param1.length)) +param1;
	
	//查岗对象ID字串（=12字节）ASCII码
	var param2 = $("#param2").val();
	
	
	//查岗消息,ASCII码
	var param3=$("#param3").val();
	
	//查岗信息长度4字节16进制
	var msgLength = Integer.toHexString(StringLength(param3)).toUpperCase();
	msgLength ="00000000".substring(0,(8-msgLength.length)) +msgLength;
	
	param3 = stringToAsicc(param3);
	
	//msg =msgLength +","+ msg;*/
	
	
	//  查岗对象编号，查岗对象ID字串，查岗信息ID ，查岗信息长度，查岗消息
	var params = param1 + "," +param2+",checkingId," +msgLength + "," +param3;
	
	
	return {"paramMeassage":params,"commandTarget":ids};
}


function showTip(id,message){
	$("#" + id).showMessage({type:"error",closeable:true,text:message});
}
