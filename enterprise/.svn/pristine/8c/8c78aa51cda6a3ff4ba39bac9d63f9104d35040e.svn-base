/**
 * 展开
 */
function show(){
	$(".wDiv").animate({height: 'show', opacity: 'show'}, 400);
}

/**
 * 收起
 */
function hide(){
	$(".wDiv").animate({height: 'hide', opacity: 'hide'}, 400);
}


/**
 * 编辑展开
 */
function showEdit(){
	$(".wDivEdit").animate({height: 'show', opacity: 'show'}, 400);
}

/**
 * 编辑收起
 */
function hideEdit(){
	$(".wDivEdit").animate({height: 'hide', opacity: 'hide'}, 400);
}

/**
 * 清空DIV中包含的所有表单的值
 * @param divId
 */
function clearForm(divId){
	$("#" + divId + " input:not(:button)").each(function(i){
			$(this).val("");
		});
	$("#" + divId + " select").each(function(i){
			$(this).empty();
		});
}
function clearSpan(id){
	$("#"+id).html("");
}

/**
 * 重置DIV中包含的所有表单的值
 * @param divId
 */
function resetForm(divId){
	$("#" + divId + " input:not(:button)").each(function(i){
			$(this).val("");
		});
	$("#" + divId + " select").each(function(i){
			$(this).get(0).selectedIndex = 0;
		});
}
/**
 * 导出表格数据
 * @param gridId
 * @param url
 */
function exportExl(gridId,url){
	
	var options = $("#" + gridId).getOptions();
	var total = options.total;
	var pages = options.pages;
	
	if (total == 0) {
		alert("无数据存在！");
	} else {
		var dialogmsg = "";
		var dialogDiv = '<div id="dd" class="dd" icon="icon-save"><form id="ddform" name="ddform"></form></div>';
		$(document.body).append(dialogDiv);
		$('#dd').css("display","block");
		
		$('#ddform').html('页数：<input id="frompagenum" name="fromPage" maxlength="6" size="6" value="1">' 
				+ '&nbsp;到:&nbsp;&nbsp;&nbsp;<input id="topagenum" name="toPage" maxlength="6" size="6" value="'+ pages +'">'
				+ '<div id="dialogmsgtd">' + dialogmsg + '</div>');
		$("#ddform").attr("action", url);
		$("#ddform").attr('method','post');
		//打开对话框
		$('#dd').dialog({
			title : '导出',
			buttons:[{
				text:'确定',
				handler:function(){
				     
					//获取开始和结束页数
					var frompagenum = $('#frompagenum','#dd').val();
					
					var topagenum = $('#topagenum','#dd').val();
					
					//检查是否为正整数
					var newPar = /^[0-9]+$/;
					if(!newPar.test(frompagenum) || !newPar.test(topagenum)){
						dialogmsg = "请输入正确的导出页数！";
						$("#dialogmsgtd","#ddform").html(dialogmsg);
						return;
					}
					if (parseInt(frompagenum) > parseInt(topagenum)){
						dialogmsg = "开始页数大于结束页数，请输入正确的导出页数！";
						$("#dialogmsgtd","#ddform").html(dialogmsg);
						return;
					}else{
						var pagesize = options.rp;
						if(total > 10000 && (topagenum - frompagenum + 1) * pagesize > 10000){
							dialogmsg = "最多只能导出10000条数据,请输入正确的导出页数！";
							$("#dialogmsgtd","#ddform").html(dialogmsg);
							return;
						}
					}
						
					if(frompagenum > 0){
						var input = $("<input type='hidden' name='frompage'/>");
				        input.attr('value',frompagenum);
				        $("#ddform").append(input);
					}
					if(topagenum > 0){
						var input = $("<input type='hidden' name='topage'/>");
				        input.attr('value',topagenum);
				        $("#ddform").append(input);
					}
					
//					var param = {page:options.newp, pageSize: options.rp, sortName: options.sortname, sortOrder:options.sortorder};
//					param.whereparams = p.params;
//					var paramsGrid = $.toJSON(param);
					//组装列表查询时的参数
					var exportParams = options.exportParams;
					var input = $("<input type='hidden' name='paramsGrid'/>");
			        input.attr('value',exportParams);
			        $("#ddform").append(input);
			        
					$("#ddform").submit();
					$('#dd').dialog('close');
					$('#dd').remove();
				}
			},{
				text:'取消',
				handler:function(){
					$('#dd').dialog('close');
					$('#dd').remove();
				}
			}]
		});
	}
}

/**
 * 导出表格数据
 * @param gridId
 * @param url
 */
function exportExlWithPic(gridId,url){
	
	var options = $("#" + gridId).getOptions();
	var total = options.total;
	var pages = options.pages;
	
	if (total == 0) {
		alert("无数据存在！");
	} else {
		var dialogmsg = "";
		var dialogDiv = '<div id="dd" class="dd" icon="icon-save"><form id="ddform" name="ddform"></form></div>';
		$(document.body).append(dialogDiv);
		$('#dd').css("display","block");
		
		$('#ddform').html('页数：<input id="frompagenum" name="fromPage" maxlength="6" size="6" value="1">' 
				+ '&nbsp;到:&nbsp;&nbsp;&nbsp;<input id="topagenum" name="toPage" maxlength="6" size="6" value="'+ pages +'">'
				+ '<br/><br/>'
				+'图片宽度:<input id="picWidth" name="picWidth" maxlength="6" size="6" value="200">'
				+ '&nbsp;&nbsp;图片高度:&nbsp;&nbsp;<input id="picHeight" name="picHeight" maxlength="6" size="6" value="120">'
				+ '<div id="dialogmsgtd">' + dialogmsg + '</div>');
		$("#ddform").attr("action", url);
		$("#ddform").attr('method','post');
		//打开对话框
		$('#dd').dialog({
			title : '导出',
			buttons:[{
				text:'确定',
				handler:function(){
				     
					//获取开始和结束页数
					var frompagenum = $('#frompagenum','#dd').val();
					
					var topagenum = $('#topagenum','#dd').val();
					
					//图片大小
					var picWidth=$("#picWidth").val();
					var picHeight=$("#picHeight").val();
					
					//检查是否为正整数
					var newPar = /^[0-9]+$/;
					if(!newPar.test(frompagenum) || !newPar.test(topagenum)){
						dialogmsg = "请输入正确的导出页数！";
						$("#dialogmsgtd","#ddform").html(dialogmsg);
						return;
					}
					if (parseInt(frompagenum) > parseInt(topagenum)){
						dialogmsg = "开始页数大于结束页数，请输入正确的导出页数！";
						$("#dialogmsgtd","#ddform").html(dialogmsg);
						return;
					}else{
						var pagesize = options.rp;
						if(total > 10000 && (topagenum - frompagenum + 1) * pagesize > 10000){
							dialogmsg = "最多只能导出10000条数据,请输入正确的导出页数！";
							$("#dialogmsgtd","#ddform").html(dialogmsg);
							return;
						}
					}
					
					if(!newPar.test(picWidth)){
						dialogmsg = "请输入正确的宽度！";
						$("#dialogmsgtd","#ddform").html(dialogmsg);
						return;
					}else{
						if (picWidth>600){
							dialogmsg = "宽度最大不能超过600！";
							$("#dialogmsgtd","#ddform").html(dialogmsg);
							return;
						}
					}
					
					if(!newPar.test(picHeight)){
						dialogmsg = "请输入正确的高度！";
						$("#dialogmsgtd","#ddform").html(dialogmsg);
						return;
					}else{
						if (picHeight>450){
							dialogmsg = "高度最大不能超过450！";
							$("#dialogmsgtd","#ddform").html(dialogmsg);
							return;
						}
					}
						
					if(frompagenum > 0){
						var input = $("<input type='hidden' name='frompage'/>");
				        input.attr('value',frompagenum);
				        $("#ddform").append(input);
					}
					if(topagenum > 0){
						var input = $("<input type='hidden' name='topage'/>");
				        input.attr('value',topagenum);
				        $("#ddform").append(input);
					}
					
					if(picWidth > 0){
						var input = $("<input type='hidden' name='picWidth'/>");
				        input.attr('value',picWidth);
				        $("#ddform").append(input);
					}
					
					if(picHeight > 0){
						var input = $("<input type='hidden' name='picHeight'/>");
				        input.attr('value',picHeight);
				        $("#ddform").append(input);
					}
					
//					var param = {page:options.newp, pageSize: options.rp, sortName: options.sortname, sortOrder:options.sortorder};
//					param.whereparams = p.params;
//					var paramsGrid = $.toJSON(param);
					//组装列表查询时的参数
					var exportParams = options.exportParams;
					var input = $("<input type='hidden' name='paramsGrid'/>");
			        input.attr('value',exportParams);
			        $("#ddform").append(input);
			        
					$("#ddform").submit();
					$('#dd').dialog('close');
					$('#dd').remove();
				}
			},{
				text:'取消',
				handler:function(){
					$('#dd').dialog('close');
					$('#dd').remove();
				}
			}]
		});
	}
}



/**
 * 导出表格数据
 * @param gridId
 * @param url
 */
function exportExlEasyui(gridId,url){
	var options = $("#" + gridId).datagrid('getData');
	var grid = $("#" + gridId).datagrid('options');
	var total = options.total;
	var pages = options.page;
	if (total == 0) {
		alert("无数据存在！");
	} else {
		var dialogmsg = "";
		var dialogDiv = '<div id="dd" class="dd" icon="icon-save"><form id="ddform" name="ddform"></form></div>';
		$(document.body).append(dialogDiv);
		$('#dd').css("display","block");
		
		$('#ddform').html('页数：<input id="frompagenum" name="fromPage" maxlength="6" size="6" value="1">' 
				+ '&nbsp;到:&nbsp;&nbsp;&nbsp;<input id="topagenum" name="toPage" maxlength="6" size="6" value="'+ pages +'">'
				+ '<div id="dialogmsgtd">' + dialogmsg + '</div>');
	   	url=encodeURI(url);
		$("#ddform").attr("action", url);
		$("#ddform").attr('method','post');
		//打开对话框
		$('#dd').dialog({
			title : '导出',
			buttons:[{
				text:'确定',
				handler:function(){
				     
					//获取开始和结束页数
					var frompagenum = $('#frompagenum','#dd').val();
					
					var topagenum = $('#topagenum','#dd').val();
					//检查是否为正整数
					var newPar = /^[0-9]+$/;
					if(!newPar.test(frompagenum) || !newPar.test(topagenum)){
						dialogmsg = "请输入正确的导出页数！";
						$("#dialogmsgtd","#ddform").html(dialogmsg);
						return;
					}
					if (parseInt(frompagenum) > parseInt(topagenum)){
						dialogmsg = "开始页数大于结束页数，请输入正确的导出页数！";
						$("#dialogmsgtd","#ddform").html(dialogmsg);
						return;
					}else{
						var pagesize = options.rows.length;
						if(total > 10000 && (topagenum - frompagenum + 1) * pagesize > 10000){
							dialogmsg = "最多只能导出10000条数据,请输入正确的导出页数！";
							$("#dialogmsgtd","#ddform").html(dialogmsg);
							return;
						}
					}
						
					if(frompagenum > 0){
						var input = $("<input type='hidden' name='frompage'/>");
				        input.attr('value',frompagenum);
				        $("#ddform").append(input);
					}
					if(topagenum > 0){
						var input = $("<input type='hidden' name='topage'/>");
				        input.attr('value',topagenum);
				        $("#ddform").append(input);
					}
					
//					var param = {page:options.newp, pageSize: options.rp, sortName: options.sortname, sortOrder:options.sortorder};
//					param.whereparams = p.params;
//					var paramsGrid = $.toJSON(param);
					//组装列表查询时的参数
					var exportParams = grid.queryParams;
					var input = $("<input type='hidden' name='paramsGrid'/>");
			        input.attr('value',exportParams);
			        $("#ddform").append(input);
			        
					$("#ddform").submit();
					$('#dd').dialog('close');
					$('#dd').remove();
				}
			},{
				text:'取消',
				handler:function(){
					$('#dd').dialog('close');
					$('#dd').remove();
				}
			}]
		});
	}
}


/**
 * 导出表格数据（TA）
 * @param gridId 
 * @param url 请求URL
 * @param setParam 导出字段
 * @param tableName 表名
 * @param exportFileName 导出文件名
 */
function exportDrivingExl(gridId,url,setParam,tableName,exportFileName){
	
	var options = $("#" + gridId).getOptions();
	var total = options.total;
	var pages = options.pages;
	
	if (total == 0) {
		alert("无数据存在！");
	} else {
		var dialogmsg = "";
		var dialogDiv = '<div id="dd" class="dd" icon="icon-save"><form id="ddform" name="ddform"></form></div>';
		$(document.body).append(dialogDiv);
		$('#dd').css("display","block");
		
		$('#ddform').html('页数：<input id="frompagenum" name="fromPage" maxlength="6" size="6" value="1">' 
				+ '&nbsp;&nbsp;到:&nbsp;&nbsp;<input id="topagenum" name="toPage" maxlength="6" size="6" value="'+ pages +'">'
				+ '<div id="dialogmsgtd">' + dialogmsg + '</div>');
		$("#ddform").attr("action", url);
		$("#ddform").attr('method','post');
		//打开对话框
		$('#dd').dialog({
			title : '导出',
			buttons:[{
				text:'确定',
				handler:function(){
					
					//获取开始和结束页数
					var frompagenum = $('#frompagenum','#dd').val();
					var topagenum = $('#topagenum','#dd').val();
					//检查是否为正整数
					var newPar = /^[0-9]+$/;
					if(!newPar.test(frompagenum) || !newPar.test(topagenum)){
						dialogmsg = "请输入正确的导出页数！";
						$("#dialogmsgtd","#ddform").html(dialogmsg);
						return;
					}
					if (parseInt(frompagenum) > parseInt(topagenum)){
						dialogmsg = "开始页数大于结束页数，请输入正确的导出页数！";
						$("#dialogmsgtd","#ddform").html(dialogmsg);
						return;
					}else{
						var pagesize = options.rp;
						if(total > 10000 && (topagenum - frompagenum + 1) * pagesize > 10000){
							dialogmsg = "最多只能导出10000条数据,请输入正确的导出页数！";
							$("#dialogmsgtd","#ddform").html(dialogmsg);
							return;
						}
					}
						
					if(frompagenum > 0){
						var input = $("<input type='hidden' name='frompage'/>");
				        input.attr('value',frompagenum);
				        $("#ddform").append(input);
					}
					if(topagenum > 0){
						var input = $("<input type='hidden' name='topage'/>");
				        input.attr('value',topagenum);
				        $("#ddform").append(input);
					}
					//导出字段集合
					var setParamInput = $("<input type='hidden' name='setParam'/>");
					setParamInput.attr('value',setParam);
			        $("#ddform").append(setParamInput);
			        //导出文件名
			        var exportFileNameInput = $("<input type='hidden' name='exportFileName'/>");
			        exportFileNameInput.attr('value',exportFileName);
			        $("#ddform").append(exportFileNameInput);
					
//					var param = {page:options.newp, pageSize: options.rp, sortName: options.sortname, sortOrder:options.sortorder};
//					param.whereparams = p.params;
//					var paramsGrid = $.toJSON(param);
					//组装列表查询时的参数
					var exportParams = options.exportParams;
					var input = $("<input type='hidden' name='paramsGrid'/>");
			        input.attr('value',exportParams);
			        $("#ddform").append(input);
			        
			        
			        //alert($("#ddform").html());
					$("#ddform").submit();
					$('#dd').dialog('close');
					$('#dd').remove();
				}
			},{
				text:'取消',
				handler:function(){
					$('#dd').dialog('close');
					$('#dd').remove();
				}
			}]
		});
	}
}

function getWidth() {
	var width;
		width = window.screen.availWidth;

	return width;
}
function getHeight() {
	var height;
	height =document.body.clientHeight;//window.screen.availHeight;
	return height;
}

function getExplorerType(){
	  var Sys = {};
      var ua = navigator.userAgent.toLowerCase();
      if (window.ActiveXObject)
          Sys.ie =true;
      else if (navigator.userAgent.indexOf("Firefox")>0)
          Sys.firefox =true;
      else if (window.MessageEvent && !document.getBoxObjectFor)
          Sys.chrome =true
      else if (window.opera)
          Sys.opera =true
      else if (window.openDatabase)
          Sys.safari = true
	return Sys;
}


function getHandleHeight(){
	 var height=getHeight();
	 var sys=getExplorerType();
	 if(sys.ie){
		 height=height-193;
	 }else if(sys.firefox){
		 height=height-210;
	 }else if(sys.chrome){
		 height=height-200;
	 }
	 return height;
}

function getBaseHeight(){
	var height=getHeight();
	 var sys=getExplorerType();
	 if(sys.ie){
		 height=height-178;
	 }else if(sys.firefox){
		 height=height-190;
	 }else if(sys.chrome){
		 height=height-188;
	 }
	 return height;
}


function getNormalHeight(){
	var height=getHeight();
	 var sys=getExplorerType();
	 if(sys.ie){
		 height=height-150;
	 }else if(sys.firefox){
		 height=height-160;
	 }else if(sys.chrome){
		 height=height-160;
	 }
	 return height;
}

