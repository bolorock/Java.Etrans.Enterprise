var CONST = {}; // 常量对象
CONST.ROOT_NODE_ID = 1; // 默认根节点ID
var parentNodeId = CONST.ROOT_NODE_ID; // 父节点(功能)ID

$(function(){
	initTree();
	$("#submitBtn").click(toSearch);
});

function initTree() {
	
	// 用途
		$('#vehicleUsagesTree').tree({
			url : "sys/tree/getUsagesTree.action",
			animate : true,
			onClick : function(node) {
			  var ids=node.id;
			  var strs=ids.split("|"); //字符分割      
			  window.parent.document.getElementById("usageId").value =strs[0];
		      window.parent.document.getElementById("usageName").value =node.text;
		      var oInput = window.parent.document.getElementById("usageName");
		      oInput.focus();//验证时获取到鼠标焦点
		      window.parent.closeDialog();
			}
		});	
}

function toSearch(){
	
	var vehicleUsages = $("#vehicleUsages").val();
	
	if(vehicleUsages.length>0){
		   $('#vehicleUsagesTree').tree({
				url : "sys/tree/getUsagesTree.action?vehicleUsages="+vehicleUsages,
				animate : true,
				onClick : function(node) {
				  var ids=node.id;
				  var strs=ids.split("|"); //字符分割      
				  window.parent.document.getElementById("usageId").value =strs[0];
			      window.parent.document.getElementById("usageName").value =node.text;
			      var oInput = window.parent.document.getElementById("usageName");
			      oInput.focus();//验证时获取到鼠标焦点
			      window.parent.closeDialog();
				}
			});	
	}else{
		$('#vehicleUsagesTree').tree({
			url : "sys/tree/getUsagesTree.action",
			animate : true,
			onClick : function(node) {
			  var ids=node.id;
			  var strs=ids.split("|"); //字符分割      
			  window.parent.document.getElementById("usageId").value =strs[0];
		      window.parent.document.getElementById("usageName").value =node.text;
		      var oInput = window.parent.document.getElementById("usageName");
		      oInput.focus();//验证时获取到鼠标焦点
		      window.parent.closeDialog();
			}
		});	
}   
}


