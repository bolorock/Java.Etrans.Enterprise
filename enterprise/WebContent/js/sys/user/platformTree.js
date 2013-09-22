$(function(){
	initPlatForm();
});



function initPlatForm() 
{
	$.ajax({
		url : "getPlatformTree.action",
		type:"post",
		dataType:"text",
		data:{userId :$("#id").val()},
		success:function(result){
			if(result!=null && result.length>0){
				var objs=eval(result);
			    var str="<tr><td>&nbsp;<input type='checkbox' id='allChk' onclick='selAll()'/>全选</td></tr>";
			
			    for(var i=0;i<objs.length;i++){
		    		str+="<tr><td>&nbsp;<input type='checkbox'  name='platformId' id='platformId' onclick='onClickItem()' "+vaildCheck(objs[i])
		    			+" value='"+objs[i]["id"]+"'/>"+objs[i]["text"]+"</td></tr>";
			    }
				$("#tabId").append(str);
				onClickItem();
			}
		}
		
	});

}

function vaildCheck(obj){
	if(obj.checked){
		return "checked";
	}
}

function getAllCheckBox(){
	var ids="";
	$(":checked:not(:checkbox[name='allChk'])").each(function(){
		 ids+=$(this).val()+",";
	 });
	return ids;
}

function selAll(){
	if($("#allChk").attr("checked")){ 
		$(":checkbox[name='platformId']").each(function(){
			 $(this).attr("checked",true);
		 });
	}else{
		$(":checkbox[name='platformId']").each(function(){
			 $(this).attr("checked",false);
		 });
	}
}

function onClickItem(){
	var obj = $(":checkbox[name='platformId']");
	var selObj = $(":checkbox[name='platformId']:checked");
	
	$("#allChk").attr("checked",obj.length==selObj.length);
}

//提交
function functionAssign() 
{
	alert(getAllCheckBox());
	var ids = getAllCheckBox();
	 
	if(ids !='')
	{
		$.ajax({
			url:"platformAssign.action",
			type:"post",
			dataType:"text",
			data:{ids : ids,"id":$("#id").val()},
			success:function(result){
				if(result=="true")
				{
					parent.$("#authDialog").dialog("close");
				}
				else
				{
					alert("分配平台失败");
				}
			}
			
		});
	}else{
		alert('请选择分配平台！');
	}
}

















/**


function initFunctionsTree() 
{
	$('#functionTree').tree({
		url : "getPlatformTree.action?userId=" + $("#id").val(),
		animate : true,
		checkbox:true,
		onClick : function(node){
		},
		onLoadSuccess:function(node){
			if(null == node || undefined == node  || node.length==0)
				$("#tip").show();
				else $("#tip").hide();
			$(".load").hide();
		},
		onLoadError:function(){
			$(".load").hide();
		}
	});

}


//提交
function functionAssign() 
{
	 var nodes = $('#functionTree').tree('getChecked');
	 var ids = '';
	 
	if(nodes.length==0)$.messager.alert('请选择分配平台！','info');
	for ( var i = 0; i < nodes.length; i++) 
	{
		if (ids != '')
			ids += ',';
		ids += nodes[i].id;
	}
	
	if(ids !='')
	{
		$.ajax({
			url:"platformAssign.action",
			type:"post",
			dataType:"text",
			data:{ids : ids,"id":$("#id").val()},
			success:function(result){
				if(result=="true")
				{
					parent.$("#authDialog").dialog("close");
				}
				else
				{
					alert("分配平台失败");
				}
			}
			
		});
	}
}
**/




