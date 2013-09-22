var CONST = {}; // 常量对象
CONST.ROOT_NODE_ID = 1; // 默认根节点ID
var parentNodeId = CONST.ROOT_NODE_ID; // 父节点(功能)ID

$(function(){
	initTree();
	if(document.all){
		document.getElementById("serchInput").onpropertychange=serch;
	}else{
		
		document.getElementById("serchInput").addEventListener("input",serch,false);
		
	}
	
});

function initTree() {
	// 区域树
		var iss=true;
		$('#workUnitTree').tree({
			url : "sys/tree/getWorkUnitTreeList.action",
			animate : true,
			//checkbox : true,    //复选框
			onLoadSuccess:function(node,data){
				if(data.length>0){
					serStore=serStore.concat(data);
				}
				if(iss)
					setTimeout(function(){
						var roots=$('#workUnitTree').tree('getRoots');
						for(var i=0;i<roots.length;i++){
							var root=roots[i];
							$('#workUnitTree').tree('expandAll',root.target);
						}
						document.getElementById("serchInput").disabled=false;
					},2000);
				iss=false;
			},
			onClick : function(node) {
			  window.parent.document.getElementById("workUnitNameParam").value =node.text;
			  window.parent.closeDialog();
			}
		});	
		
		
}
//var result=new Array();
var serStore=new Array();
var serkey=new String();
var selectLen=0;
var selectId="";
var count=0;
function serch(){
	if(document.getElementById("serchInput").value.replace(/^\s+|\s+$/g,"")=="")return;
	if(serkey==document.getElementById("serchInput").value.replace(/^\s+|\s+$/g,"")) return;
	$("#result").html("共有0搜索结果");
	serkey=document.getElementById("serchInput").value.replace(/^\s+|\s+$/g,"");
	//result=new Array();
	$("div [node-id]").each(function(){
		$(this).css("background","none");
	});
	count=0;
	selectLen=0;
	document.getElementById("workUnitTree").scrollTop=0;
	serching(serStore,serkey);
	if(selectId.length<=0){
		return;
	}
	document.getElementById("workUnitTree").scrollTop=$("div [node-id='"+selectId+"']").offset().top-$("#workUnitTree").offset().top;
	$("#result").html("共有"+count+"搜索结果");
}
function findNodeById(id){
	var divs=document.getElementsByTagName("div");
	for(var div in divs){
		if(!div.getAttribute("node-id"))continue;
		if(div.getAttribute("node-id")==id) return div;else continue;
	}
}
function serching(a,ser){
	for(var i=0;i<a.length;i++){
		if (a[i].text.indexOf(ser)!=-1){
			++count;
			$("div [node-id='"+a[i].id+"']").css("background","#CCCCCC");
			//var obj={id:a[i].id,text:a[i].text}
			//result.push(obj);
			if(selectLen==0){
				selectLen=a[i].text.length;
				selectId=a[i].id;
			}else if(a[i].text.length<selectLen){
				selectLen=a[i].text.length;
				selectId=a[i].id;
			}
		}
		if(!a[i].children) continue;
		serching(a[i].children)
	}
}
