var CONST = {}; // 常量对象
CONST.ROOT_NODE_ID = 1; // 默认根节点ID
var parentNodeId = CONST.ROOT_NODE_ID; // 父节点(功能)ID

$(function(){
	initTree();
});

function initTree() {
	
	// 品牌
		$('#vehicleBandTree').tree({
			url : "sys/tree/getBandTree.action",
			animate : true,
			onClick : function(node) {
			  var ids=node.id;
			  var strs=ids.split("|"); //字符分割      
			  window.parent.document.getElementById("bandId").value =strs[0];
		      window.parent.document.getElementById("bandName").value =node.text;
		      var oInput = window.parent.document.getElementById("bandName");
		      oInput.focus();//验证时获取到鼠标焦点
		      window.parent.closeDialog();
			}
		});	
}

