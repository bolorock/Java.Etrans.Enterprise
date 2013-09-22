$(function(){
	setRed(0);
    document.getElementById("status").children[0].style.background="red";	
//	$('#rolebntBack').bind('click', roleBack);
//	$('#rolebntNext').bind('click', roleNext);
	
	$('#userbnt').bind('click', userNext);
	
	$('#vehilceGroupBntBack').bind('click', vehilceGroupBack);
	$('#vehilceGroupBntNext').bind('click', vehilceGroupNext);
	
	$('#authorityBntBack').bind('click', authorityDivBack);
	$('#authorityBnt').bind('click', authorityDiv);
	$('#serA').bind('click', serchUsers);
	
	window.frames['userFrame'].$("#formAddUser").validation();
	//window.frames['roleFrame'].$("#formAddRole").validation();
	
	
	
	
	
});
function setRed(i){
	for(var j=0;j<document.getElementById("status").children.length-1;j++){
		if(i==j){
			document.getElementById("status").children[i].style.background="red";
		}else{
			document.getElementById("status").children[j].style.background="none";
		}
	}
	
}
function serchUsers(){
	document.getElementById("userDiv").style.display="none";
	//document.getElementById("roleDiv").style.display="none";
	document.getElementById("vehilceGroupDiv").style.display="none";
	document.getElementById("authorityDiv").style.display="none";
	if(document.all){
		document.getElementById("showUserInfo").style.height="395px";
	}else {
		
		document.getElementById("showUserInfo").style.height="100%";}
	document.getElementById("showUserInfo").src="sys/userManage/userListInfo.jsp";
	document.getElementById("serchUserInfos").style.display="block";
	
	
	
}
function userNext(){
	
	var userFrame = window.frames['userFrame'];   
	var name = userFrame.$("#txtName").val();
	var userName = userFrame.$("#txtUserName").val(); 
	
	
	var password1 = userFrame.$("#txtPassword1").val(); 
	
	var runTime = userFrame.$("#txtRunTime").val(); 
	var overTime = userFrame.$("#txtOverTime").val(); 
	
	var workUnitId = userFrame.$("#workUnitId").val();
	var workUnitName = userFrame.$("#workUnitIdPram").val(); 
	
	var userId =$("#userId").val();
	var roleId =$("#roleId").val();
	if(roleId==''){
		roleId='0';
	}
	 
	
	var flag = userFrame.$("#formAddUser").beforeSubmit();
	if(flag){
			var jsonParams = {
			userId : userId,
			name : name,
			userName : userName,
			password : password1,
			runTime : runTime,
			overTime : overTime,
			workUnitId : workUnitId,
			roleId : roleId,
			datetimes : new Date()
		};
		$.post("sys/userManage/createUser.action", jsonParams, function(data) {
			if(data!='false' ){
				var strs=data;
				var arry=strs.split("@"); //字符分割      
				$("#userId").val(arry[0]);
				$("#groupId").val(arry[1]);
				$("#roleId").val(arry[2]);
				//$("#userName").val(arry[3]);
				var groupName=arry[3];
				$("#workUnitIds").val(workUnitId);
				$("#workUnitName").val(workUnitName);
				
				userFrame.$("#txtUserId").val(arry[0]);
				
				document.getElementById("userDiv").style.display="none";
				//document.getElementById("roleDiv").style.display="none";
				document.getElementById("vehilceGroupDiv").style.display="block";
				setRed(1);
				document.getElementById("authorityDiv").style.display="none";
				addVehicleTree("selectVehicle",true,groupName);
			}
			
		});
		
	}	
}


//function roleBack(){
//	document.getElementById("userDiv").style.display="block";
//	//document.getElementById("roleDiv").style.display="none";
//	document.getElementById("vehilceGroupDiv").style.display="none";
//	document.getElementById("authorityDiv").style.display="none";
//}

//function roleNext(){
//	var roleFrame = window.frames['roleFrame'];   
//	var name = roleFrame.$("#txtAddRoleName").val();
//	var shortRoleName = roleFrame.$("#shortRoleName").val();
//	var txtRoleId = roleFrame.$("#txtRoleId").val();
//	var workUnitId =$("#workUnitIds").val();
//	var userId =$("#userId").val();
//	
//	var flag = roleFrame.$("#formAddRole").beforeSubmit();
//	if(flag){
//			var jsonParams = {
//			roleId : txtRoleId,
//			name : name,
//			shortRoleName : shortRoleName,
//			workUnitId : workUnitId,
//			userId : userId,
//			datetimes : new Date()
//		};
//		$.post("sys/userManage/createRole.action", jsonParams, function(data) {
//			if(data!='false' ){
//				var id=data;
//				$("#roleId").val(id);
//				$("#workUnitIds").val(workUnitId);
//				roleFrame.$("#txtRoleId").val(id);
//				
//				document.getElementById("userDiv").style.display="none";
//				document.getElementById("roleDiv").style.display="none";
//				document.getElementById("vehilceGroupDiv").style.display="block";
//				document.getElementById("authorityDiv").style.display="none";
//				
//			}
//			
//		});
//		
//	}	
//	
//}

function vehilceGroupBack(){
	setRed(0);
	document.getElementById("userDiv").style.display="block";
	//document.getElementById("roleDiv").style.display="block";
	document.getElementById("vehilceGroupDiv").style.display="none";
	document.getElementById("authorityDiv").style.display="none";
}





function vehilceGroupNext(){
	 setRed(2);
	var vehilceGroupFrame = window.frames['vehilceGroupFrame'];   
	if(vehilceGroupFrame.$("#vehicleName").val()==null || vehilceGroupFrame.$("#vehicleName").val()==""){
		vehilceGroupFrame.$("#vehicleNamespan").showMessage({
				type : "error",
				closeable : false, 
				text : "名称不能为空！"});
		    return;
	}
    var workId =  $("#workUnitIds").val();
    var groupId = $("#groupId").val();
    var roleId = $("#roleId").val();
    var vehicleGroupId= $("#vehicleGroupId").val();
    var c="";
   
    vehilceGroupFrame.$(".tree-checkbox1").parent().children('.tree-title').each(function(){
      c+=$(this).parent().attr('node-id')+",";
    });
    var str=(c);
    str=str.substring(0,str.length-1);
    
	$.ajax({
	type:"POST",
	url:"sys/userManage/createVehicleGroup.action",
	data:{
		"vehicleGroupBean.fullId":null,
		"vehicleGroupBean.parentGroupId":groupId,
		"vehicleGroupBean.isLeaf":1,
		"vehicleGroupBean.level":2,
		"vehicleGroupBean.name":vehilceGroupFrame.$("#vehicleName").val(),
		"vehicleGroupBean.workUnitId":workId,
		"vehicleGroupBean.authorizedGroupId":0,
		"vehicleGroupBean.kind":4,
		"vehicleGroupBean.isSourceVisible":0,
		"vehicleGroupBean.privilegeFlag":0,
		"vehicles":str,
		"roleId":roleId,
		"vehicleGroupId":vehicleGroupId
	},
	dataType:"JSON",
	success:function(data){
		if(data!='false'){
			$("#vehicleGroupId").val(data);
			document.getElementById("userDiv").style.display="none";
			//document.getElementById("roleDiv").style.display="none";
			document.getElementById("vehilceGroupDiv").style.display="none";
			document.getElementById("authorityDiv").style.display="block";
			
			authorityTree();
		}
	},
	error:function(data){
		
	}
	
});
    
	
}

function authorityDivBack(){
	setRed(1);
	document.getElementById("userDiv").style.display="none";
	//document.getElementById("roleDiv").style.display="none";
	document.getElementById("vehilceGroupDiv").style.display="block";
	document.getElementById("authorityDiv").style.display="none";
}

function authorityDiv(){
	
	var roleId = $("#roleId").val();
	var authorityFrame = window.frames['authorityFrame']; 
    var c="";
    var p="";
    authorityFrame.$(".tree-checkbox1").parent().children('.tree-title').each(function(){
      c+=$(this).parent().attr('node-id')+",";
    });
    authorityFrame.$(".tree-checkbox2").parent().children('.tree-title').each(function(){
    	 p+=$(this).parent().attr('node-id')+",";
    });
    var str=(c+p);
    str=str.substring(0,str.length-1);
   
    $.ajax({
	    type : "POST",
	    url : "sys/userManage/saveAuthority.action",
	    data : {roleId:roleId,auths:str},
	    dataType : "JSON",
	    success : function(data) {
	    	if(data!='false'){
	    		//window.parent
	    		//$.messager.alert('提示信息','恭喜你！用户信息成功注册','info');
	    		document.getElementById("userDiv").style.display="none";
	    		document.getElementById("vehilceGroupDiv").style.display="none";
	    		document.getElementById("authorityDiv").style.display="none";
	    		
	    		document.getElementById("serchUserInfos").style.display="block";
	    	}
    		
	    },
	    error : function(data) {
	    }
    });
    
	
}


function addVehicleTree(TreeId,isAdd,groupName) {
	try{
		
		var vehilceGroupFrame = window.frames['vehilceGroupFrame'];   
		vehilceGroupFrame.$("#vehicleName").val(groupName+"车组");
		//车组权限
		vehilceGroupFrame.$("#"+TreeId).html('<img src="imgs/load.gif" />');
		
		vehilceGroupFrame.$("#addTheirCustomer").val($("#workUnitName").val());
		var workId = $("#workUnitIds").val();
		var groupId = $("#groupId").val();
		var id=-1;
		$.ajax({
		    type : "POST",
		    url : "sys/userManage/getWorkUnitVehicleList.action",
		    data : {nodeId:id,workId:workId,groupId:groupId},
		    dataType : "JSON",
		    success : function(data) {
		    	vehilceGroupFrame.$('#'+TreeId).tree({
		    		data:data,
		    		checkbox:true,
		    		animate : true,
		    		onlyLeafCheck:false   
		    	});
		    }
	    });
	}catch(e){}
}



function authorityTree(){
	 var roleId = $("#roleId").val();
	var authorityFrame = window.frames['authorityFrame'];   
	authorityFrame.$("#fnctionAuthTree").html('<img src="imgs/load.gif" />');
	$.ajax({
	    type : "POST",
	    url : "sys/role/findMenusByParent_new.action",
	    data : {roleId:roleId},
	    dataType : "JSON",
	    success : function(data) {
	    	authorityFrame.$('#fnctionAuthTree').tree({
	    		data:data,
	    		checkbox:true,
	    		animate : true
	    	});
	    }
    });
	
	
	authorityFrame.$("#configCommandRole").html('<img src="imgs/load.gif" />');
	$.ajax({
	    type : "POST",
	    url : "sys/role/findCommandMenu.action",
	    data : {roleId:roleId},
	    dataType : "JSON",
	    success : function(data) {
	    	authorityFrame.$('#commandAuthTree').tree({
	    		data:data,
	    		checkbox:true,
	    		animate : true
	    	});
	    }
    });

}




function saveAuthority(){
	
}