var CONST = {}; // 常量对象
CONST.ROOT_NODE_ID = 1; // 默认根节点ID
var parentNodeId = CONST.ROOT_NODE_ID; // 父节点(功能)ID

$(function(){
	initTree();
});

function initTree() {
		//车牌颜色
		$('#vehicleRColorTree').tree({
			url : "sys/tree/getRegistrationNoColorTreeList.action",
			animate : true,
			onClick : function(node) {
			  var ids=node.id;
			  var strs=ids.split("|"); //字符分割      
			  window.parent.document.getElementById("registrationNoColorId").value =strs[0];
		      window.parent.document.getElementById("registrationNoColorName").value =node.text;
		      var oInput = window.parent.document.getElementById("registrationNoColorName");
		      oInput.focus();//验证时获取到鼠标焦点
		      window.parent.closeDialog();
			}
		});	
}

