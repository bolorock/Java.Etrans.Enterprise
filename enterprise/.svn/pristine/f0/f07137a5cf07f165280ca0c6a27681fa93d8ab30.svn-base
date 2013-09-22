



$(function(){
	
	initFunctionsTree();
	
});





function initFunctionsTree() 
{
	$.ajax({
		url:"findMenuTree.action",
		type:"JSON",
		data:{"roleId":$("#id").val()},
		dataType:"JSON",
		success:renderTree,
		complete:completeRender
	});
}



/**
 * 渲染树后加载二级菜单
 * @param xhr
 * @param ts
 */
function completeRender(xhr,ts)
{
	if(ts!="success")
	{}
	else
	{
		$(".fname").each(function(i,n){
			
			var curObj = $(this);
			var roleId = $("#id").val();
			
			$.ajax({
					url:"findMenuTree.action",
					data:{"parentId":curObj.attr("id"),"roleId":roleId},
					dataType:"JSON",
					type:"POST",
					async:false,
					success:function(d)
					{
						var html="";
						$(d).each(function(i,n){
							html+="<dd>"
							+"<ul class='authUl'>"
							+"<li>"
							+"<ul class='auth'>"
							+"<li class='title'>"+n.menuName+"</li>";
							
							$(n.childs).each(function(i,n){
								html+="<li>"+n.menuName+"<input name='ckmenu' type='checkbox' value='"+n.id +"' ";
								if(n.checked)
								{
									html+="checked='"+n.checked+"'";
								}
								html+="/></li>";
								
							});
							html+="</ul>"
							+"</li>"
							+"</ul>"
							+"</dd>";
							
						});
						
						curObj.after(html);
					}
			});	
		});
	}
	
	$("dd").hide();
	$("dt:first").nextUntil("dt").slideDown("slow");
//	$("dt:not(:first)").hide();
	$("dt a").click(function(){
		$("dd:visible").slideUp("slow");
		$(this).parent().nextUntil("dt").slideDown("slow");
		return false;
	});
	
	$(".load").hide();
}



/**
 * 渲染功能列表
 * @param data
 */
function renderTree(data)
{
	if(data!=null && data.length > 0)
	 {
		var centext = $("#divContent");
		centext.html();
		var html = "";
		$(data).each(function(i,n){
			
			html+="<dt class='fname' id='"+n.ID+"'>"
			  +"<a href='javascript:void(0)'>"+n.functionName+"</a>"
			  +"</dt>";
		});
		centext.html(html);
	 }
	else
	{
		$("#tip").show();
	}
}




/**
 * 分配功能菜单给角色
 */
function menuAssign()
{
	var ids="";

	 $(":checkbox[name='ckmenu']:checked").each(function(){
		 ids+=$(this).val()+",";
	 });
	 
	 $(".load").show();
	 
	 $.ajax({
		 
		 url:"assignMenu.action",
		 type:"POST",
		 data:{"menuIds":ids,"roleId":$("#id").val()},
		 dataType:"TEXT",
		 success:menuAssignSuccess,
		 error:function(){alert("分配失败");}
	 });
			 
		
	
}

function menuAssignSuccess(msg)
{
	 $(".load").hide();

	 if(msg=="SUCCESS")
	 {
		 parent.$("#authDialog").dialog("close");
	 }
	 else
	 {
	  alert("分配失败");
	 }
}

