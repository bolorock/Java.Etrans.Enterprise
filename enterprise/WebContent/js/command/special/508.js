var vehicleId='';
$(function() {
	
	var mainFrame = window.dialogArguments; // 接收Left页面传来的参数
	vehicleId=$.query.get("vehicleId");//mainFrame[1];
	// 取结果
	getCommandResult();

	// 读取区域
        var reurl="command/getCommandLineSel.action";
	
        $("#area").bind('change', function(){
        	getPoint();
         });
	$.ajax({
		type : "POST",
		dataType : "json",
		url : reurl,
		success : function(data) {
		    var area = $("#area").get(0);
	    	area.options.add(new Option("请选择路线","-1"));
			$(data).each(function(i, n) {
				area.options.add(new Option(n.name,n.val));
			});
		},
		error : function(msg) {
			alert("因网络不畅,数据加载未完成,请刷新页面!");
		}
	});
});

// 取点
function getPoint() {
	var  selectArea = $('#area').val();
	if (selectArea != '-1') {
		var tbody="";
		$("#list tr:gt(0)").remove();
		var lonLngArray=selectArea.split(";");//纬度,经度;纬度,经度
		var lonlngCount=lonLngArray.length;
		for(var i=0;i<lonLngArray.length;i++){
			var lonLng=lonLngArray[i].split(",");//纬度,经度
			tbody +="<tr class='odd'>"
				+"<td ' align='left'><input id='gd"+i+"' size='2' /></td>"
				+"<td align='left'><input id='ld"+i+"' size='2' /></td>"
				+"<td align='left'><input id='lon"+i+"' value='"+lonLng[0]+"' size='6' /></td>"
				+"<td align='left'><input id='lng"+i+"' value='"+lonLng[1]+"' size='6' /></td>"
				+"<td align='left'><input id='ldk"+i+"' size='2' /></td>"
				+"<td align='left'><select id='time"+i+"'><option value='0'>没有</option><option value='1'>行驶时间</option></select></td>"
				+"<td align='left'><select id='speed"+i+"'><option value='0'>没有</option><option value='1'>限速</option></select></td>"
				+"<td align='left'><select id='lont"+i+"'><option value='0'>北纬</option><option value='1'>南纬</option></select></td>"
				+"<td align='left'><select id='lngt"+i+"'><option value='0'>东经</option><option value='1'>西经</option></select></td>"
				+"<td align='left'><input id='ldpass"+i+"' size='2' /></td>"
				+"<td align='left'><input id='ldless"+i+"' size='2' /></td>"
				+"<td align='left'><input id='speedH"+i+"' size='2' /></td>"
				+"<td align='left'><input id='speedT"+i+"' size='2' /></td>";
				tbody+="</tr>";
			
		}
		 $("#param5").val(lonlngCount);
		 $("#list").append(tbody);
	}
}

function sendMessage(){
	  var params="";
	  var param1=$("#param1").val();
	  var param2=$("#params2-1").val()+"1"+$("#params2-2").val()+$("#params2-3").val()+$("#params2-4").val()+$("#params2-5").val()+"1";//路段属性
	  var param3=$("#param3").val();
	   if(param3==''){
		   param3="0";
	   }
	  var param4=$("#param4").val();
	  if(param4==''){
		  param4="0";
	  }
	  var param5=$("#param5").val();
	  params=param1+";"+param2+";"+param3+";"+param4+";"+param5+";";
	  var params6="";
	  for(var i=0;i<param5;i++){
		  var gd=$("#gd"+i).val();
		  var ld=$("#ld"+i).val();
		  var lon=$("#lon"+i).val();
		  var lng=$("#lng"+i).val();
		  var ldk=$("#ldk"+i).val();
		  var time=$("#time"+i).val();
		  var speed=$("#speed"+i).val();
		  var lont=$("#lont"+i).val();
		  var lngt=$("#lngt"+i).val();
		  var ldpass=$("#ldpass"+i).val();
		  var ldless=$("#ldless"+i).val();
		  var speedH=$("#speedH"+i).val();
		  var speedT=$("#speedT"+i).val();
		  var paramsLD=time+speed+lont+lngt;
			  if(i==0){
				  params6=gd+","+ld+","+lng+","+lon+","+ldk+","+paramsLD+","+ldpass+","+ldless+","+speedH+","+speedT;
			  }else{
				  params6=params6+";"+gd+","+ld+","+lng+","+lon+","+ldk+","+paramsLD+","+ldpass+","+ldless+","+speedH+","+speedT;
			  }
	  }
	  params=params+params6;
	    var commandName ="设置路线";
		var commandId ="508";
		var vehicleId= $.query.get('vehicleId');
		var jsonParams = {
			commandCode :"8606",
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


//取结果
function getCommandResult() {
	var vehicleId= $.query.get('vehicleId');
	var jsonParams = {
		vehicleId : "8606|"+vehicleId,
		datetimes : new Date().getTime()
	};
	$.post("command/findCommandResult.action", jsonParams, function(data) {
	if (data != 'false' && data!='') {
	     var resultObj = $("#result");
	 	resultObj.html("回复结果："+data);
	}
	setTimeout('getCommandResult()', 5000);
}	);
}
