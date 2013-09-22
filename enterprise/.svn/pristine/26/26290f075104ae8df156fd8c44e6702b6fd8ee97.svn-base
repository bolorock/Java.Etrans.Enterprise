var CONST = {}; // 常量对象
CONST.ROOT_NODE_ID = 1; // 默认根节点ID
var parentNodeId = CONST.ROOT_NODE_ID; // 父节点(功能)ID

$(function(){
	initTree();
	$("#submitBtn").click(toSearch);
});

var workUnitId2=null;
function initTree() {
	
	// 终端
	 var workUnitId=window.parent.document.getElementById("workUnitID1").value;
	 workUnitId2=workUnitId;
		$('#terminalTree').tree({
			url : "sys/tree/getTerminalTree.action?workUnitId="+workUnitId,
			animate : true,
			
			onClick : function(node) {
			  var ids=node.id;
			  var strs=ids.split("|"); //字符分割      
			  window.parent.document.getElementById("terminalId").value =strs[0];
		      window.parent.document.getElementById("terminalName").value =node.text;
		      var oInput = window.parent.document.getElementById("terminalName");
		      oInput.focus();//验证时获取到鼠标焦点
		      window.parent.closeDialog();
			}
		});	
}

function toSearch(){
	
	var terminalNames = $("#terminalNames").val();
	
	if(terminalNames.length>0){
		   $('#terminalTree').tree({
				url : "sys/tree/getTerminalTree.action?workUnitId="+workUnitId2+"&terminalNames="+terminalNames,
				animate : true,
				onClick : function(node) {
				  var ids=node.id;
				  var strs=ids.split("|"); //字符分割      
				  window.parent.document.getElementById("terminalId").value =strs[0];
			      window.parent.document.getElementById("terminalName").value =node.text;
			      var oInput = window.parent.document.getElementById("terminalName");
			      oInput.focus();//验证时获取到鼠标焦点
			      window.parent.closeDialog();
				}
			});	
	}else{
		$('#terminalTree').tree({
			url : "sys/tree/getTerminalTree.action?workUnitId="+workUnitId2,
			animate : true,
			onClick : function(node) {
			  var ids=node.id;
			  var strs=ids.split("|"); //字符分割      
			  window.parent.document.getElementById("terminalId").value =strs[0];
		      window.parent.document.getElementById("terminalName").value =node.text;
		      var oInput = window.parent.document.getElementById("terminalName");
		      oInput.focus();//验证时获取到鼠标焦点
		      window.parent.closeDialog();
			}
		});	
}   
}


