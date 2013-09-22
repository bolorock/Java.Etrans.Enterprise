var CONST = {}; // 常量对象
CONST.ROOT_NODE_ID = 1; // 默认根节点ID
var parentNodeId = CONST.ROOT_NODE_ID; // 父节点(功能)ID

$(function(){
	initTree();
});

function initTree() {
	
	// 行业类型
		$('#tradeTree').tree({
			url : "sys/tree/getTradeKindTreeList.action",
			animate : true,
			onClick : function(node) {
			  var ids=node.id;
			  var strs=ids.split("|"); //字符分割      
			  window.parent.document.getElementById("tradeKindId").value =strs[0];
		      window.parent.document.getElementById("tradeKindName").value =node.text;
		      var oInput = window.parent.document.getElementById("tradeKindName");
		      oInput.focus();//验证时获取到鼠标焦点
		      window.parent.closeDialog();
			}
		});	
}

