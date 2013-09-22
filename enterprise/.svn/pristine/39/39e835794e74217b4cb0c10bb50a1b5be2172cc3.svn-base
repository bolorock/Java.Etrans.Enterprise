$(function(){
	initRegistrationNOColorTree();
});



function initRegistrationNOColorTree() 
{
	
	$.ajax({
		url : "getRegistrationNoColorTreeList.action",
		type:"post",
		dataType:"text",
		success:function(result){
			if(result!=null && result.length>0){
				var objs=eval(result);
			    var str="<tr><td>&nbsp;车牌颜色</td></tr>";
			
			    for(var i=0;i<objs.length;i++){
		    		str+="<tr><td>&nbsp;<input type='checkbox'  name='registrationNOColorId' id='registrationNOColorId' onclick='onClickItem()' "+vaildCheck(objs[i])
		    			+" value='"+objs[i]["id"]+"|"+objs[i]["text"]+"'/>"+objs[i]["text"]+"</td></tr>";
			    }
			    str+="<tr><td align='center'><a id='submitBtn' href='javascript:void(0)' class='common_btn' onclick='functionAssign()'>提交</a>&nbsp;&nbsp;&nbsp;"
				      +"<a id='cancelBtn' href='javascript:void(0)' class='common_btn' onclick='window.close();'>取消</a></td></tr>";
				$("#tabId").append(str);
				onClickItem();
			}
		}
		
	});

}

function vaildCheck(obj){
	if(obj.checked){
		return "checked";
	}
}

function getAllCheckBox(){
	var ids="";
	$(":checked:not(:checkbox[name='allChk'])").each(function(){
		 ids+=$(this).val()+",";
	 });
	return ids;
}



function onClickItem(){
	var obj = $(":checkbox[name='registrationNOColorId']");
	var selObj = $(":checkbox[name='registrationNOColorId']:checked");
	
	$("#allChk").attr("checked",obj.length==selObj.length);
}

//提交
function functionAssign() {
	var selObj = $(":checkbox[name='registrationNOColorId']:checked");
	var ids = getAllCheckBox();
	var reg=/,$/gi;
	ids=ids.replace(reg,"");
	
	if(ids !=''){
		if(selObj.length>1){
			alert('只能选择一个进行操作！');
		}else{
			// 接收父窗口传过的 window对象.
			var parWin= window.dialogArguments;
			var strs=ids.split("|"); //字符分割      
			parWin.document.getElementById("registrationNOColorId").value =strs[0];
	    	parWin.document.getElementById("rnoColor").value =strs[1];
			window.close();
		}
	}else{
		alert('请选择车牌颜色！');
	}
	
}
