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
		$("#eventList").html("<thead><tr id='trhead'><th>信息类型</th><th>信息名称	</th></tr></thead>");
	}
}

function addEvent(){
	var eventCount=$("#eventCount").val();
	var tbody="";
	$("#eventList tr:gt(0)").remove();
	for(var i=0;i<eventCount;i++){
		tbody +="<tr class='odd'>"
			+"<td align='left'>信息类型"+(i+1)+"<input id='eventID"+i+"'/></td>"
			+"<td align='left'>信息名称"+(i+1)+"<input width='100' id='eventValue"+i+"'/></td>";
			tbody+="</tr>";
	}
	  $("#eventList").append(tbody);
}

function sendMessage(){
	var params='';
	var eventType=$("#eventType").val();
	var paramsCount=$("#eventCount").val();
	if(eventType!=0){
	for(var i=0;i<paramsCount;i++){
		 var eventId=$("#eventID"+i).val();
		 var eventValue = $("#eventValue"+i).val();
		  if(eventId!=''){
			  if(params==""){
				  params=params+eventId+","+eventValue;
			  }else{
				  params=params+";"+eventId+","+eventValue;
			  }
		  }
	}
	params=eventType+";"+paramsCount+";"+params;
	var commandName ="信息点播菜单设置";
	var commandId ="568";
	var aryCar = parent.parent.leftFrame.getSelectedCarList();
	if(aryCar==null || aryCar.length==0){
		alert("请选择车辆！");
		return;
	}
	getResultVehicle = aryCar;
	for(var i=0;i<aryCar.length;i++){
		vehicleId= aryCar[i];
		var jsonParams = {
			commandCode :"7303",
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
			var aryCar = parent.parent.leftFrame.getSelectedCarList();
			if(aryCar==null || aryCar.length==0){
				alert("请选择车辆！");
				return;
			}
			getResultVehicle = aryCar;
			for(var i=0;i<aryCar.length;i++){
				vehicleId= aryCar[i];
				var commandId ="365";
				var jsonParams = {
				commandCode :"8303",
				commandTarget : vehicleId,
				paramMeassage : "",
				commandName : "删除信息点播菜单",
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
		vehicleId : "8303|"+vehicleId,
		datetimes : new Date().getTime()
	};
	$.post("command/findCommandResult.action", jsonParams, function(data) {
	if (data != 'false' && data!='') {
	     var resultObj = $("#result");
	 	resultObj.html("回复结果："+data);
	}
	
}	);
		}}
	setTimeout('getCommandResult()', 5000);
}

