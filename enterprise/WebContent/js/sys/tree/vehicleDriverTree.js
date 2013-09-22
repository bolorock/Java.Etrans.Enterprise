var CONST = {}; // 常量对象
CONST.ROOT_NODE_ID = 1; // 默认根节点ID
var parentNodeId = CONST.ROOT_NODE_ID; // 父节点(功能)ID

$(function(){
	
	initTree();
	
	$("#submitBtn").click(toSearch);
	
});

var workUnitId2=null;
function initTree() {
	
	// 司机
	         var workUnitId=window.parent.document.getElementById("workUnitID1").value;
//	         alert(workUnitId);
	         workUnitId2=workUnitId;
	         
				$('#driverTree').tree({
					url : "sys/tree/getDriverTree.action?workUnitId="+workUnitId,
					animate : true,
					onClick : function(node) {
					  var ids=node.id;
					  var strs=ids.split("|"); //字符分割      
					  window.parent.document.getElementById("firstDriverId").value =strs[0];
				      window.parent.document.getElementById("firstDriverName").value =node.text;
				      var oInput = window.parent.document.getElementById("firstDriverName");
				      oInput.focus();//验证时获取到鼠标焦点
				      window.parent.closeDialog();
					}
				});	
		}

function toSearch(){
			
			var dirver = $("#dirver").val();
			
			if(dirver!=null){
//				   alert("workUnitId:"+workUnitId2+"dirver:"+dirver);
					$('#driverTree').tree({
						url : "sys/tree/getDriverTree.action?workUnitId="+workUnitId2+"&dirver="+dirver,
						animate : true,
						onClick : function(node) {
						  var ids=node.id;
						  var strs=ids.split("|"); //字符分割      
						  window.parent.document.getElementById("firstDriverId").value =strs[0];
					      window.parent.document.getElementById("firstDriverName").value =node.text;
					      var oInput = window.parent.document.getElementById("firstDriverName");
					      oInput.focus();//验证时获取到鼠标焦点
					      window.parent.closeDialog();
						}
					});	
			}else{
					$('#driverTree').tree({
						url : "sys/tree/getDriverTree.action?workUnitId="+workUnitId2,
						animate : true,
						onClick : function(node) {
						  var ids=node.id;
						  var strs=ids.split("|"); //字符分割      
						  window.parent.document.getElementById("firstDriverId").value =strs[0];
					      window.parent.document.getElementById("firstDriverName").value =node.text;
					      var oInput = window.parent.document.getElementById("firstDriverName");
					      oInput.focus();//验证时获取到鼠标焦点
					      window.parent.closeDialog();
						}
					});	
		}   
}

