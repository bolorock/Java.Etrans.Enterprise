var CONST = {}; // 常量对象
CONST.ROOT_NODE_ID = 1; // 默认根节点ID
var parentNodeId = CONST.ROOT_NODE_ID; // 父节点(功能)ID

$(function(){
	initTree();
	$("#submitBtn").click(toSearch);
});

function initTree() {
	
	// 行业类型
		$('#vehiclKindTree').tree({
			url : "sys/tree/getVehicleKindTree.action",
			animate : true,
			onClick : function(node) {
			  var ids=node.id;
			  var strs=ids.split("|"); //字符分割      
			  window.parent.document.getElementById("kindId").value =strs[0];
		      window.parent.document.getElementById("kindName").value =node.text;
		      var oInput = window.parent.document.getElementById("kindName");
		      oInput.focus();//验证时获取到鼠标焦点
		      window.parent.closeDialog();
			}
		});	
}

function toSearch(){
	
	var kindNames = $("#kindNames").val();
	
	if(kindNames!=null){
//		   alert("kindNames:"+kindNames);
		   $('#vehiclKindTree').tree({
				url : "sys/tree/getVehicleKindTree.action?kindNames="+kindNames,
				animate : true,
				onClick : function(node) {
				  var ids=node.id;
				  var strs=ids.split("|"); //字符分割      
				  window.parent.document.getElementById("kindId").value =strs[0];
			      window.parent.document.getElementById("kindName").value =node.text;
			      var oInput = window.parent.document.getElementById("kindName");
			      oInput.focus();//验证时获取到鼠标焦点
			      window.parent.closeDialog();
				}
			});	
	}else{
		$('#vehiclKindTree').tree({
			url : "sys/tree/getVehicleKindTree.action",
			animate : true,
			onClick : function(node) {
			  var ids=node.id;
			  var strs=ids.split("|"); //字符分割      
			  window.parent.document.getElementById("kindId").value =strs[0];
		      window.parent.document.getElementById("kindName").value =node.text;
		      var oInput = window.parent.document.getElementById("kindName");
		      oInput.focus();//验证时获取到鼠标焦点
		      window.parent.closeDialog();
			}
		});	
}   
}



