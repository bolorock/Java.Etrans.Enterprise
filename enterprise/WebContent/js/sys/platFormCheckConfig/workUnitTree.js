$(function(){
	initFunctionsTree();
});




function initFunctionsTree() 
{
	$('#functionTree').tree({
		url : "../../command/getWorkUnitTree.action?flatId=" + $("#id").val() +"&isTransit=" + $("#isTransit").val(),
		animate : true,
		checkbox:true,
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






