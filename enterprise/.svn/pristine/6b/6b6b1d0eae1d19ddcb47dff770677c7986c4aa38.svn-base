var CONST = {}; // 常量对象
CONST.ROOT_NODE_ID = 1; // 默认根节点ID
var parentNodeId = CONST.ROOT_NODE_ID; // 父节点(功能)ID

$(function(){
	initTree();
	$("#submitBtn").click(toSearch);
});

function initTree() {
	
	// 区域树
	
		$('#areaTree').tree({
			url : "sys/tree/getAreaTreeList.action",
			animate : true,
			//checkbox : true,    //复选框
			onClick : function(node) {
			  var ids=node.id;
			  var parWin= window.dialogArguments;
			  var strs=ids.split("|"); //字符分割   
			  window.parent.document.getElementById("areaId").value =strs[0];
			  window.parent.document.getElementById("areaName").value =node.text;
			  window.parent.closeDialog();
			 
			
			}
		});
	
}

function toSearch(){
	
	var areaNames = $("#areaNames").val();
	alert("areaNames:"+areaNames+"长度："+areaNames.length);
	if(areaNames.length>0){
		  
		$('#areaTree').tree({
			url : "sys/tree/getAreaTreeLists.action?areaNames="+areaNames,
			animate : true,
			//checkbox : true,    //复选框
			onClick : function(node) {
			  var ids=node.id;
			  var parWin= window.dialogArguments;
			  var strs=ids.split("|"); //字符分割   
			  window.parent.document.getElementById("areaId").value =strs[0];
			  window.parent.document.getElementById("areaName").value =node.text;
			  window.parent.closeDialog();
			 
			
			}
		});
	}else{
		$('#areaTree').tree({
			url : "sys/tree/getAreaTreeList.action",
			animate : true,
			//checkbox : true,    //复选框
			onClick : function(node) {
			  var ids=node.id;
			  var parWin= window.dialogArguments;
			  var strs=ids.split("|"); //字符分割   
			  window.parent.document.getElementById("areaId").value =strs[0];
			  window.parent.document.getElementById("areaName").value =node.text;
			  window.parent.closeDialog();
			 
			
			}
		});
   }   
}


