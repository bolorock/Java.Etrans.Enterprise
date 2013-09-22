
var time; // 定时器



$(function(){
	
	initTableDate();
});

var commandCode={};
commandCode.code7104="平台查岗请求";
commandCode.code7105="下发平台报文请求";
commandCode.code7106="报警督办请求";
commandCode.code7107="报警预警";
commandCode.code7108="实时交换报警";
commandCode.code7109="交换车辆静态信息";
commandCode.code7110="启动车辆定位信息交换请求";
commandCode.code7111="结束车辆定位信息交换请求";
commandCode.code7112="交换车辆实时定位信息";
commandCode.code7113="车辆定位信息交换补发";

//alert(commandCode["code7107"]);

function initTableDate()
{
	
	var tbody="";
	
	$.ajax({
		url:"monitorCenter/getPlatFormInfo.action",
		type:"POST",
		dataType:"json",
		success:function(data){
		$("#alarmList tr:gt(0)").remove();
		$(data).each(function(i,n){
			var message=n.split("|");//指令代码|描述@回复指令参数1#回复指令参数2#回复指令参数3|接受时间   
			var commandParam = message[1].split("@@@");
			
			/****************组装列表********************/
				tbody +="<tr>"
					+"<td nowrap=nowrap>"+commandCode["code"+message[0]]+"</td>"//业务类型
					+"<td nowrap=nowrap>"+message[2]+"</td>"//时间
					+"<td align='left'>"+commandParam[0]+"</td>";//描述
				
				
					if(message[0]=="7106")// 报警督办
					{
						tbody+="<td nowrap=nowrap><a href='javascript:void(0)' onclick='reDuban(\""+commandParam[1]+"\")'>应答报警督办</a></td>";
					}
					else if(message[0]=="7104")// 查岗
					{
						tbody+="<td nowrap=nowrap><a href='javascript:void(0)' onclick='reChagang(\""+commandParam[1]+"\")'>应答查岗</a></td>";	
					}
					else if(message[0]=="7105")// 报文
					{
						tbody+="<td nowrap=nowrap><a href='javascript:void(0)'>无需处理</a></td>";	
					}
					else
					{
						tbody+="<td nowrap=nowrap><a href='javascript:void(0)'>无需处理</a></td>";	
					}
					tbody+="</tr>";
				/*********END*******组装列表********************/
		});
		
		$("#alarmList").append(tbody);
		$("#alarmList tr:odd").addClass("odd");
		$("#alarmList tr:even").addClass("even");
		
	   }
		
	});
	
//	setTimeout('initTableDate()', 5000);

}


function reDuban(msg)
{  
	$("#txtDuban").html(msg);
	showDiaoLog("reDubanDialog");
}


function reChagang(msg)
{
	resetChaGang();
	$("#txtchagang").html(msg);
	showDiaoLog("reChagangDialog");
}

function resetChaGang(){
	$("#chagangTip").html("");
	$("#chagangnr").val("");
	hideDiaoLog("reChagangDialog");
}

function chagang()
{
	var jsonParams = {
			commandContentStr : $("#txtchagang").html(),
			datetimes : new Date(),
			answerStr: $("#chagangnr").val(),
			getTimeCaGang:"no"//查岗接收时间
	};	 
	$.post("command/chagangBackCommand.action", jsonParams, function(data) {
			if (data == 'true') {
				$("#chagangTip").html('发送成功!');
			} else {
				$("#chagangTip").html('发送失败!');
			}
		});
}
function duban()
{
//	800,1224,13453,1
//	（解释：
//	终端通讯类型：800
//	车辆ID：1224
//	报警督办ID：13453
//	报警处理结果：已处理完毕(16进制)
//	)

	var result = $("#paramDuban").val();
	
	//$("#txtDuban").css("display", "block");
	var jsonParams = {
		commandContentStr : $("#txtDuban").html(),
		result : result,
		datetimes : new Date(),
		getTimeDuBan:"no" //督办接收时间
	};
	$.post("command/dubanBackCommand.action", jsonParams, function(data) {
			if (data == 'true') {
				$("#dubanTip").html('发送成功!');
			} else {
				$("#dubanTip").html('发送失败!');
			}
		});
	
}

function showDiaoLog(id){
	$("#"+id).animate({height: 'show', opacity: 'show'}, 10);
}
	
function hideDiaoLog(id){
$("#"+id).animate({height: 'hide', opacity: 'hide'}, 10);
}

