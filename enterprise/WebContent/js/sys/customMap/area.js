$(function() {
	var CustomType =$.query.get("CustomType");
	var LngLat =$.query.get("LngLat");
	var OriginLngLat =$.query.get("OriginLngLat");
	var Radius =$.query.get("Radius");
	
	$("#CustomType").val(CustomType);
	$("#LngLat").val(LngLat);
	$("#OriginLngLat").val(OriginLngLat);
	$("#Radius").val(Radius);
	
	$('#CPBtn').bind('click', savaCMP);
	
	$('#CoseBtn').bind('click', coseCMP);
	
	
});


function savaCMP(){
   var name=$("#name").val();
   var CustomType= $("#CustomType").val();
   var LngLat= $("#LngLat").val();
   var OriginLngLat= $("#OriginLngLat").val();
   var Radius= $("#Radius").val();
   
   if(name!=''){
	   var jsonParams = {
				name : name,
				MapIconID : "0",
				LngLat : LngLat,
				OriginLngLat : OriginLngLat,
				CustomType : CustomType,
				MapType : "1",
				Radius : Radius,
				datetimes : new Date()
			};
			$.post("customMapPoint/addEntCustomMap.action", jsonParams, function(data) {
				if(data!='false' ){
					var strs=data;
					var arry=strs.split("@");
					var id=arry[0];
					var name=arry[1];
					//alert("id-->:"+id+"name-->:"+name);
					window.parent.closeDialog();
					window.parent.$("#customMapList").flexReload();
					var LngLats=LngLat.split(",");
					//alert(LngLats[0]+"=="+LngLats[1]);
					window.parent.addLabel(LngLats[0],LngLats[1],id,name);   
				}else{
						alert('添加失败,请确认是否有同名！');
				}
				
			});
   }else{
	   alert('名称不能为空');
   }
   
}


function coseCMP(){
	window.parent.closeDialogMap();
	
}





