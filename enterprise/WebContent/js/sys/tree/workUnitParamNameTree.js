var CONST = {}; // 常量对象
CONST.ROOT_NODE_ID = 1; // 默认根节点ID
var parentNodeId = CONST.ROOT_NODE_ID; // 父节点(功能)ID

$(function(){
	initTree();
});

function initTree() {
	
	// 区域树
		$('#treeWorkunit').tree({
			url : "sys/tree/getWorkUnitTreeList.action",
			animate : true,
			//checkbox : true,    //复选框
			onClick : function(node) {
			  var ids=node.id;
			  var parWin= window.dialogArguments;
			  var strs=ids.split("|"); //字符分割      
			  window.parent.document.getElementById("workUnitId").value =strs[0];
		      window.parent.document.getElementById("workUnitIdPram").value =node.text;
		      window.parent.closeDialog();
			}
		});	
}


