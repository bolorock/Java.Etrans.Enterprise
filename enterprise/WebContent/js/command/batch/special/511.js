var vehicleId='';
var getResultVehicle;
$(function() {
	
	var mainFrame = window.dialogArguments; // 接收Left页面传来的参数
	vehicleId=$.query.get("vehicleId");//mainFrame[1];
	// 取结果
	getCommandResult();
	getCommandResult2();
});

function addEvent(){
	var eventCount=$("#eventCount").val();
	  if(eventCount==null || eventCount==0){
		  alert("请输入答案内容总数");
		  return  ;
	  }
	var tbody="";
	$("#list tr:gt(0)").remove();
	for(var i=0;i<eventCount;i++){
		$("#list").append("<tr class='odd'><td ' align='left'>答案内容"+(i+1)+"：<input id='content"+i+"' size='20' /></td></tr>");
	}
}

	function sendMessage(){
		var params="";
		params+="0,"+$("#params1").val()+",3,"+$("#params2").val()+",4,"+$("#params3").val()+","+$("#params4").val();
		var paramsCount=$("#eventCount").val();
		if(paramsCount==null || paramsCount==0){
			alert("请确定答案内容总数");
			return  ;
		}
		for(var i=0;i<paramsCount;i++){
			var eventValue=$("#content"+i).val();
			if(eventValue!=''){
			  params+=","+eventValue;
			 }
		}
	    var commandName ="提问下发";
		var commandId ="364";
		
		var aryCar = parent.parent.leftFrame.getSelectedCarList();
		if(aryCar==null || aryCar.length==0){
			alert("请选择车辆！");
			return;
		}
		getResultVehicle = aryCar;
		for(var i=0;i<aryCar.length;i++){
			vehicleId= aryCar[i];
			var jsonParams = {
					commandCode :"8302",
					commandTarget : vehicleId,
					paramMeassage : params,
					commandName : commandName,
					commandId   : commandId,
					datetimes : new Date()
			};
			$.post("command/sendSpecialCommand.action", jsonParams, function(data) {
				if (data== 'true') {
						$("#result").html('发送成功!');
				} else {
					$("#result").html('发送失败!');
				}
			});
		}
}

	//取结果
	function getCommandResult() {
		if(getResultVehicle!=null && getResultVehicle.length>0){
			for(var i=0;i<getResultVehicle.length;i++){
				var vehicleId= getResultVehicle[i];
				var jsonParams = {
					vehicleId : "8302|"+vehicleId,
					datetimes : new Date().getTime()
				};
				$.post("command/findCommandResult.action", jsonParams, function(data) {
					if (data != 'false' && data!='') {
		    			var resultObj = $("#result");
		 				resultObj.html("回复结果："+data);
					}
				});
		}}
		setTimeout('getCommandResult()', 5000);
	}
 
	//取结果
	function getCommandResult2() {
		if(getResultVehicle!=null && getResultVehicle.length>0){
			for(var i=0;i<getResultVehicle.length;i++){
				var vehicleId= getResultVehicle[i];
				var jsonParams = {
					vehicleId : "0302||"+vehicleId,
					datetimes : new Date().getTime()
				};
				$.post("command/findCommandResult.action", jsonParams, function(data) {
					if (data != 'false' && data!='') {
		    			var resultObj = $("#result2");
		 				resultObj.html("回复结果："+data);
					}
				});
		}}
		setTimeout('getCommandResult()', 5000);
	}

