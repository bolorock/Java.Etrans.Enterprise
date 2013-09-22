var CONST = {}; // 常量对象
CONST.ROOT_NODE_ID = 1; // 默认根节点ID
var parentNodeId = CONST.ROOT_NODE_ID; // 父节点(功能)ID

$(function(){
	initTree();
	$("#submitBtn").click(toSearch);
});

function initTree() {
	
	
	$('#vehicleRCKindTree').tree({
			url : "sys/tree/getRegistrationNoKindTree.action",
			animate : true,
			onClick : function(node) {
			  var ids=node.id;
			  var strs=ids.split("|"); //字符分割      
			  window.parent.document.getElementById("registrationNoKindId").value =strs[0];
		      window.parent.document.getElementById("registrationNoKindName").value =node.text;
		      var oInput = window.parent.document.getElementById("registrationNoKindName");
		      oInput.focus();//验证时获取到鼠标焦点
		      window.parent.closeDialog();
			}
		});	
}

function toSearch(){
	
	var vehicleRCKinds = $("#vehicleRCKinds").val();
	
	if(vehicleRCKinds.length>0){
		   $('#vehicleRCKindTree').tree({
				url : "sys/tree/getRegistrationNoKindTree.action?vehicleRCKinds="+vehicleRCKinds,
				animate : true,
				onClick : function(node) {
				  var ids=node.id;
				  var strs=ids.split("|"); //字符分割      
				  window.parent.document.getElementById("registrationNoKindId").value =strs[0];
			      window.parent.document.getElementById("registrationNoKindName").value =node.text;
			      var oInput = window.parent.document.getElementById("registrationNoKindName");
			      oInput.focus();//验证时获取到鼠标焦点
			      window.parent.closeDialog();
				}
			});	
	}else{
		$('#vehicleRCKindTree').tree({
			url : "sys/tree/getRegistrationNoKindTree.action",
			animate : true,
			onClick : function(node) {
			  var ids=node.id;
			  var strs=ids.split("|"); //字符分割      
			  window.parent.document.getElementById("registrationNoKindId").value =strs[0];
		      window.parent.document.getElementById("registrationNoKindName").value =node.text;
		      var oInput = window.parent.document.getElementById("registrationNoKindName");
		      oInput.focus();//验证时获取到鼠标焦点
		      window.parent.closeDialog();
			}
		});	
}   
}






