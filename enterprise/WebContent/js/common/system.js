$(function(){
   var showUpdwonLineVehicle=$.cookie("showUpdwonLineVehicle");
   var showUrgentAlarm=$.cookie("showUrgentAlarm");
   var showProveBack = $.cookie("showProveBack"); //证件过期提醒设置值
   if(showUpdwonLineVehicle=="false"){
	   $("#showUpdwonLineVehicle").attr("checked",'true');
   }
   if(showUrgentAlarm=="false"){
	   $("#showUrgentAlarm").attr("checked",'true');
   }
   if(showProveBack=="false"){ //选中证件过期提醒设置
	   $("#showProveBack").attr("checked",'true');
   }
   if(showUrgentAlarm=="false"&&showUpdwonLineVehicle=="false"&&showProveBack=="false"){
	   $("#checkAll").attr("checked",'true');
   }
   $('#checkAll').bind('click', checkAll);
})

function clickParams(params){
	var jqCheckBox=$(params);
	var id=jqCheckBox.attr("id");
	if(jqCheckBox.attr('checked')){
		$.cookie(id,"false",{"expires":30,"path":"/"});
	}else{{
		$.cookie(id,"true",{"expires":30,"path":"/"});
	}}
}

function checkAll(){
	var isCheckAll=$("#checkAll");
	if (isCheckAll.attr('checked')=="checked") {//全选
		$(":checkbox:gt(0)").each(function() {
		  var id=this.id;
		  $.cookie(id,"false",{"expires":30,"path":"/"});
		  $("#"+id).attr("checked",'true');
		});
	}else{//全不选
		$(":checkbox:gt(0)").each(function() {
			  var id=this.id;
			  $.cookie(id,"true",{"expires":30,"path":"/"});
			  $("#"+id).attr("checked",false);
			});
	}
	
}

