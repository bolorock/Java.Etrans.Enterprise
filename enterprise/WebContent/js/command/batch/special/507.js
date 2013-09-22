var vehicleId='';
var getResultVehicle;
$(function() {
	var mainFrame = window.dialogArguments; // 接收Left页面传来的参数
	vehicleId=$.query.get("vehicleId");//mainFrame[1];
	getCommandResult();
});

function changeEventType(){
	$("#eventCount").val("");
	$("#eventList tr:gt(0)").remove();
	if($("#eventType").val()==0){
		$("#eventCountId").css("visibility","hidden");
		$("#eventCount").css("visibility","hidden");
		$("#okButon").css("visibility","hidden");
		$("#eventList").html("");
	}else{
		$("#eventCountId").css("visibility","visible");
		$("#eventCount").css("visibility","visible");
		$("#okButon").css("visibility","visible");
		if($("#eventType").val()==4){
			$("#eventList").html("<thead><tr id='trhead'><th>事件id</th></tr></thead>");
		}else{
			$("#eventList").html("<thead><tr id='trhead'><th>事件id</th><th>事件内容	</th></tr></thead>");		
		}
		
	}
	$("#result").html('');
}

function addEvent(){
	var eventCount=$("#eventCount").val();
	var tbody="";
	$("#eventList tr:gt(0)").remove();
	for(var i=0;i<eventCount;i++){
		if($("#eventType").val()!=4){
			tbody +="<tr class='odd'>"
				+"<td align='left'>事件ID"+"："+"<input id='eventID"+i+"'/></td>"
				+"<td align='left'>事件内容"+"："+"<input width='100' id='eventValue"+i+"'/></td>";
				tbody+="</tr>";
		}else{
			tbody +="<tr class='odd'>"
				+"<td align='left'>事件ID"+"："+"<input id='eventID"+i+"'/></td>";
				tbody+="</tr>";
		}
	}
	  $("#eventList").append(tbody);
}

function sendMessage(){
	var params='';
	var eventType=$("#eventType").val();
	var aryCar = parent.parent.leftFrame.getSelectedCarList();
	if(aryCar==null || aryCar.length==0){
		alert("请选择车辆！");
		return;
	}
	getResultVehicle = aryCar;
	if(eventType!=0){
		var paramsCount=$("#eventCount").val();
		for(var i=0;i<paramsCount;i++){
			 var eventId=$("#eventID"+i).val();
			 var eventValue = $("#eventValue"+i).val();
			  if(eventId!=''){
				  if(params==""){
					  params=params+eventId+","+eventValue;
				  }else{
					  params=params+","+eventId+","+eventValue;
				  }
			  }
		}
		if(eventType==4){
			params="3,"+eventType+","+params;
		}else{
			params="2,"+eventType+","+params;
		}
		
		var commandName ="事件设置";
		var commandId ="362";
		if(eventType==0 ||'0'==eventType){
		    commandId="361";
		}else if(eventType==4 ||'4'==eventType){
		    commandId="363";
	    }else{
		    commandId ="362";
		}
		for(var i=0;i<aryCar.length;i++){
			vehicleId= aryCar[i];
			var jsonParams = {
				commandCode :"8301",
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
	}else{
		for(var i=0;i<aryCar.length;i++){
			vehicleId= aryCar[i];
			var commandId ="361";
			var jsonParams = {
				commandCode :"8301",
				commandTarget : vehicleId,
				paramMeassage : "",
				commandName : "删除所有事件",
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
}
//取结果
function getCommandResult() {
	if(getResultVehicle!=null && getResultVehicle.length>0){
		for(var i=0;i<getResultVehicle.length;i++){
			var vehicleId= getResultVehicle[i];
			var jsonParams = {
				vehicleId : "8301|"+vehicleId,
				datetimes : new Date().getTime()
			};
			$.post("command/findCommandResult.action", jsonParams, function(data) {
			if (data != 'false' && data!='') {
	    		var resultObj = $("#result");
	 			resultObj.html("回复结果："+data);
			}
		}	
		);
		}
	}
	setTimeout('getCommandResult()', 5000);
}

