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
	}else{
		$("#eventCountId").css("visibility","visible");
		$("#eventCount").css("visibility","visible");
		$("#okButon").css("visibility","visible");
	}
	$("#result").html('');
}

function addEvent(){
	var eventCount=$("#eventCount").val();
	var tbody="";
	$("#eventList tr:gt(0)").remove();
	for(var i=0;i<eventCount;i++){
		tbody +="<tr class='odd'>"
			+"<td align='left'><select id='flag"+i+"'><option value='1'>呼入</option><option value='2'>呼出</option><option value='3'>呼入/呼出</option></select></td>"
			+"<td align='left'>电话号码"+(i+1)+"<input id='eventID"+i+"'/></td>"
			+"<td align='left'>联系人"+(i+1)+"<input width='100' id='eventValue"+i+"'/></td>";
			tbody+="</tr>";
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
	
	if(eventType==0){
		var commandName ="删除电话本";
		var commandId ="369";
		for(var i=0;i<aryCar.length;i++){
			vehicleId= aryCar[i];
			var jsonParams = {
			commandCode :"8401",
			commandTarget : vehicleId,
			paramMeassage : "",
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
		var paramsCount=$("#eventCount").val();
		for(var i=0;i<paramsCount;i++){
			 var flag=$("#flag"+i).val();
			 var eventId=$("#eventID"+i).val();
			 var eventValue = $("#eventValue"+i).val();
			  if(eventId!=''){
				  if(params==""){
					  params=flag+","+eventId+","+eventValue;
				  }else{
					  params=params+";"+flag+","+eventId+","+eventValue;
				  }
			  }
		}
		  params=eventType+";"+paramsCount+";"+params;
		    var commandName ="设置电话本";
			var commandId ="564";
			for(var i=0;i<aryCar.length;i++){
				vehicleId= aryCar[i];
				var jsonParams = {
					commandCode :"7401",
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
}

//取结果
function getCommandResult() {
	if(getResultVehicle!=null && getResultVehicle.length>0){
		for(var i=0;i<getResultVehicle.length;i++){
			var vehicleId= getResultVehicle[i];
			var jsonParams = {
				vehicleId : "8401|"+vehicleId,
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

