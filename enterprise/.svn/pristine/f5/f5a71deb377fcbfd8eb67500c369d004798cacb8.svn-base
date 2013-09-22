var CONST = {}; // 常量对象
CONST.ROOT_NODE_ID = 1; // 默认根节点ID
var parentNodeId = CONST.ROOT_NODE_ID; // 父节点(功能)ID

$(function(){
	initTree();
	$("#submitBtn").click(toSearch);
});

var workUnitId2=null;
function initTree() {
	
	
	 var workUnitId=window.parent.document.getElementById("workUnitID1").value;
	 workUnitId2=workUnitId;
		$('#secondDriverTree').tree({
			url : "sys/tree/getSecondDriverTree.action?workUnitId="+workUnitId,
			animate : true,
			
			onClick : function(node) {
			  var ids=node.id;
			  var strs=ids.split("|"); //字符分割      
			  window.parent.document.getElementById("secondDriverId").value =strs[0];
		      window.parent.document.getElementById("secondDriverName").value =node.text;
		      var oInput = window.parent.document.getElementById("secondDriverName");
		      oInput.focus();//验证时获取到鼠标焦点
		      window.parent.closeDialog();
			}
		});	
}

function toSearch(){
	
	var secondDriver = $("#secondDriver").val();
	
	if(secondDriver.length>0){
		   $('#secondDriverTree').tree({
				url : "sys/tree/getSecondDriverTree.action?workUnitId="+workUnitId2+"&secondDriver="+secondDriver,
				animate : true,
				onClick : function(node) {
				  var ids=node.id;
				  var strs=ids.split("|"); //字符分割      
				  window.parent.document.getElementById("secondDriverId").value =strs[0];
			      window.parent.document.getElementById("secondDriverName").value =node.text;
			      var oInput = window.parent.document.getElementById("secondDriverName");
			      oInput.focus();//验证时获取到鼠标焦点
			      window.parent.closeDialog();
				}
			});	
	}else{
		$('#secondDriverTree').tree({
			url : "sys/tree/getSecondDriverTree.action?workUnitId="+workUnitId2,
			animate : true,
			onClick : function(node) {
			  var ids=node.id;
			  var strs=ids.split("|"); //字符分割      
			  window.parent.document.getElementById("secondDriverId").value =strs[0];
		      window.parent.document.getElementById("secondDriverName").value =node.text;
		      var oInput = window.parent.document.getElementById("secondDriverName");
		      oInput.focus();//验证时获取到鼠标焦点
		      window.parent.closeDialog();
			}
		});	
}   
}






