var CONST = {}; // 常量对象
CONST.ROOT_NODE_ID = 1; // 默认根节点ID
var parentNodeId = CONST.ROOT_NODE_ID; // 父节点(功能)ID

$(function(){
	initTree();
});

function initTree() {
	
	// 车牌颜色
	
		$('#registionNoColorTree').tree({
			url : "getRegistrationNoColorTreeList.action",
			animate : true,
			//checkbox : true,    //复选框
			onClick : function(node) {
			  var parWin= window.dialogArguments;
//			  parWin.document.getElementById("registrationNOColorId").value =node.id;
//		      parWin.document.getElementById("rnoColor").value =node.text;
//			  window.close();
			  
			  window.parent.document.getElementById("registrationNOColorId").value =node.id;
		      window.parent.document.getElementById("rnoColor").value =node.text;
		      window.parent.closeDialog();
			
			}
		});

	
	
}


