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
		$('#vehicleTeamTree').tree({
			url : "sys/tree/getVehicleTeamTree.action?workUnitId="+workUnitId,
			animate : true,
			
			onClick : function(node) {
			  var ids=node.id;
			  var strs=ids.split("|"); //字符分割      
			  window.parent.document.getElementById("vehicleTeamId").value =strs[0];
		      window.parent.document.getElementById("vehicleTeamName").value =node.text;
		      var oInput = window.parent.document.getElementById("vehicleTeamName");
		      oInput.focus();//验证时获取到鼠标焦点
		      window.parent.closeDialog();
			}
		});	
}

function toSearch(){
	
	var teamNames = $("#teamNames").val();
	
	if(teamNames.length>0){
		   $('#vehicleTeamTree').tree({
				url : "sys/tree/getVehicleTeamTree.action?workUnitId="+workUnitId2+"&teamNames="+teamNames,
				animate : true,
				onClick : function(node) {
				  var ids=node.id;
				  var strs=ids.split("|"); //字符分割      
				  window.parent.document.getElementById("vehicleTeamId").value =strs[0];
			      window.parent.document.getElementById("vehicleTeamName").value =node.text;
			      var oInput = window.parent.document.getElementById("vehicleTeamName");
			      oInput.focus();//验证时获取到鼠标焦点
			      window.parent.closeDialog();
				}
			});	
	}else{
		$('#vehicleTeamTree').tree({
			url : "sys/tree/getVehicleTeamTree.action?workUnitId="+workUnitId2,
			animate : true,
			onClick : function(node) {
			  var ids=node.id;
			  var strs=ids.split("|"); //字符分割      
			  window.parent.document.getElementById("vehicleTeamId").value =strs[0];
		      window.parent.document.getElementById("vehicleTeamName").value =node.text;
		      var oInput = window.parent.document.getElementById("vehicleTeamName");
		      oInput.focus();//验证时获取到鼠标焦点
		      window.parent.closeDialog();
			}
		});	
}   
}




