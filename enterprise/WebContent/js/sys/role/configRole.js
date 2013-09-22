$(function(){
	
	roleId = $.query.get('roleId');
	initRoleAuthority();
});
var roleId;

function initRoleAuthority(){
	jsUtil.useAjaxDefault("sys/role/configRoleFunction.action?role.id="+roleId, null, initRoleAuthoritySucc);
}

function initRoleAuthoritySucc(data){
	var tab=$("#authDialog");
	var str="<table border='1' style='background-color:#fff;'>";
	$.each(data,function(i,item0){
	    var chboxId = "chbox"+i;//区分对应四级菜单的checkBox
	    var chboxAllId = "chkAll"+i;//区分对应全选checkBox
	    
	    str+="<tr>"  //第一行TR开始
	    +"<td rows='"+this.size+"' width='140'><input type='checkbox' id='"+chboxAllId+"' name='chkAll' onClick='javascript:selAll(\""+chboxId+"\",this)' "+(this.checkItemSize==this.size?"checked":"")+"/>"+this.name+"</td>";//第一列TD
	    
	    str+="<td><table id='outTab' border='0'>";//第二列TD开始  内置表格outTab开始
	    $.each(this.resources,function(j,item1){
	     str+="<tr>"        //内置表格outTab首行开始
	         +"<td width='150'>"+this.name+"</td>"//首列
	         +"<td><table id='innerTab' border='0'><tr>";//第二列开始 内置表格innerTab开始
	     $.each(this.children,function(q,item2){
	         str+= "<td><input type='checkbox' onclick='onClickItem(\""+chboxId+"\",\""+chboxAllId+"\")'  name='"+chboxId+"' id='"+chboxId+"' value='"+this.id+"' "+(this.checkState==true?"checked":"")+"  />"+ this.name +"</td>";//用户权限
	     });
	     
	     
	     str+="</tr></table></td>"//第二列结束 内置表格innerTab结束
	             +"</tr>";//内置表格outTab首行结束
	    });
	    
	    str+="</table></td>"     //第二列结束 内置表格outTa结束
	         +"</tr>";//第一行TR结束
	    
	    
	});
	str+="<tr><td colspan=2 align='center'><a id='submitBtn' href='javascript:void(0)' class='common_btn' onclick='doCreate()'>提交</a>&nbsp;&nbsp;&nbsp;"
	      +"<a id='cancelBtn' href='javascript:void(0)' class='common_btn' onclick='parent.$(\"#dialogs\").dialog(\"close\");'>取消</a></td></tr>";
	str+="</table>";
//	alert(str)
    tab.append(str);
		
}

function onClickItem(id,chboxAllId){
	var obj = $(":checkbox[name='"+id+"']");
	var selObj = $(":checkbox[name='"+id+"']:checked");
	
	$("#"+chboxAllId).attr("checked",obj.length==selObj.length);
}

function doCreate(){
	var url="sys/role/assignRoleFunction.action";
	var params  = getParam();
	jsUtil.useAjaxDefault(url, params, doCreateSucc);
}
function doCreateSucc(result){
	if(result!=null && result["code"] == '0'){
//		$.messager.alert('提示信息','配置权限成功！','info');
	}else{
//		$.messager.alert('提示信息','服务器忙，请重试！','info');
	}
	parent.$('#dialogs').dialog('close');
	parent.$("#dialogFrame").removeAttr("src");
}
function getParam(){
	var funcIds = getAllCheckBox();
	
	var param = [
	             {
	              name : "funcIds",
	              value : funcIds	 
	             },
	             {
	              name : "roleId",
	              value : roleId	 
	             }
	             ];
	return param;
}

function getAllCheckBox(){
	var ids="";
	$(":checked:not(:checkbox[name='chkAll'])").each(function(){
		 ids+=$(this).val()+",";
	 });
	return ids;
}

function selAll(id,obj){
	if(obj.checked){ 
		$(":checkbox[name='"+id+"']").each(function(){
			 $(this).attr("checked",true);
		 });
	}else{
		$(":checkbox[name='"+id+"']").each(function(){
			 $(this).attr("checked",false);
		 });
	}
}