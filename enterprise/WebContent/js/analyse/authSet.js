$(function(){
	initTree();
	$("#saveBtn").click(doNode);
	$("#cancelBtn").click(canDialog);
});
/**
 * 初始化车辆组树形结构
 */
function initTree() {
	try{
	// 功能权限
	$('#fnctionAuthTree').tree({
		url : "sys/role/findMenusByParentTA.action?roleId="+roleId,
		data:{roleId:roleId},
		checkbox:true,
		animate : true
	
	});

	}catch(e){}
}
function doNode(){
	var roleType= $("#roleType").val();
    var c="";
    var p="";
    $(".tree-checkbox1").parent().children('.tree-title').each(function(){
      c+=$(this).parent().attr('node-id')+",";
    });
     $(".tree-checkbox2").parent().children('.tree-title').each(function(){
    	 p+=$(this).parent().attr('node-id')+",";
    });
    var str=(c+p);
    str=str.substring(0,str.length-1);
    $.ajax({
	    type : "POST",
	    url : "sys/role/saveRoleAuth.action",
	    data : {roleType:roleType,roleId:roleId,auths:str},
	    dataType : "JSON",
	    success : function(data) {
	    	if(data){
	    		$.messager.alert('提示信息','分配成功！','info');
	    		parent.$('#dialogTAs').dialog('close');
	    		parent.$("#dialogTAFrame").removeAttr("src");
	    	}
	    },
	    error : function(data) {
	    }
    });
}

function canDialog(){
	window.close();
}
