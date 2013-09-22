// 接收矩形区域经纬度,并查车
var timeSize = 100; //条件数





function addTimeArea(startLo,startLa,endLo,endLa,rectId)
{
	var str = "";
	str+="<tr id='"+rectId+"'>";
	str+="<td width='4%' nowrap height='36'><div align='center'>"+rectId+"</div></td>";
	str+="<td width='14%' nowrap height='36'><div align='center'>";
	str+="  <input type='text' id='beginTime"+rectId+"' name='beginTime"+rectId+"' class='inputnone' size='15' value='' />";
	str+=' <img src="Images/time.jpg" width="20" height="23" style="margin-left:2px;" onClick="WdatePicker({firstDayOfWeek:1,isShowWeek:true,el:document.getElementById(\'beginTime'+rectId+'\'),dateFmt:\'yyyy-M-d HH:mm:ss\'})"/>';
	str+="  </div></td>";
	str+="<td width='13%' nowrap><div align='center'>";
	str+="  <input type='text' id='endTime"+rectId+"' name='endTime"+rectId+"' class='inputnone' size='15' value='' />";
	str+=' <img src="Images/time.jpg" width="20" height="23" style="margin-left:2px;" onClick="WdatePicker({firstDayOfWeek:1,isShowWeek:true,el:document.getElementById(\'endTime'+rectId+'\'),dateFmt:\'yyyy-M-d HH:mm:ss\'})"/>';
	str+="  </div></td>";
	str+="<td width='18%' nowrap='nowrap'>";
	str+="  <div align='center'>";
	str+="    <input type='text' id='slon"+rectId+"' name='slon"+rectId+"' class='inputnone' size='10' value='"+startLo+"' readonly='readonly'/>";
	str+=" </div></td>";
	str+=" <td width='17%' nowrap='nowrap'><div align='center'>";
	str+=" <input type='text' id='slat"+rectId+"' name='slat"+rectId+"' class='inputnone' size='10' value='"+startLa+"' readonly='readonly'/>";
	str+="</div></td>";
	str+="<td width='18%' nowrap='nowrap'><div align='center'>";
	str+="  <input type='text' id='elon"+rectId+"' name='elon"+rectId+"' class='inputnone' size='10' value='"+endLo+"' readonly='readonly'/>";
	str+="</div></td>";
	str+="<td width='8%' nowrap='nowrap'><div align='center'>";
	str+="  <input type='text' id='elat"+rectId+"' name='elat"+rectId+"' class='inputnone' size='10' value='"+endLa+"' readonly='readonly'/>";
	str+="</div></td>";
	str+=" <td width='9%' nowrap='nowrap'><div align='center'><a href='javascript:void(0)' onClick='javascript:do_delete(this)'><img src='imgs/remove.gif' alt='删除此查询条件' width='16' height='16' border='0'></a></div></td>";
	str+="</tr>";

    $('#timeTable').append(str);

}




function findTimeArea(areaAround) {
	timeSize--;
	var areaAroundArray = areaAround.split(',');
	var str = "";
	str+="<tr id='"+timeSize+"'>";
	str+="<td width='4%' nowrap height='36'><div align='center'>"+timeSize+"</div></td>";
	str+="<td width='14%' nowrap height='36'><div align='center'>";
	str+="  <input type='text' id='beginTime"+timeSize+"' name='beginTime"+timeSize+"' class='inputnone' size='15' value='' />";
	str+=' <img src="Images/time.jpg" width="20" height="23" style="margin-left:2px;" onClick="WdatePicker({firstDayOfWeek:1,isShowWeek:true,el:document.getElementById(\'beginTime'+timeSize+'\'),dateFmt:\'yyyy-M-d HH:mm:ss\'})"/>';
	str+="  </div></td>";
	str+="<td width='13%' nowrap><div align='center'>";
	str+="  <input type='text' id='endTime"+timeSize+"' name='endTime"+timeSize+"' class='inputnone' size='15' value='' />";
	str+=' <img src="Images/time.jpg" width="20" height="23" style="margin-left:2px;" onClick="WdatePicker({firstDayOfWeek:1,isShowWeek:true,el:document.getElementById(\'endTime'+timeSize+'\'),dateFmt:\'yyyy-M-d HH:mm:ss\'})"/>';
	str+="  </div></td>";
	str+="<td width='18%' nowrap='nowrap'>";
	str+="  <div align='center'>";
	str+="    <input type='text' id='slon"+timeSize+"' name='slon"+timeSize+"' class='inputnone' size='10' value='"+areaAroundArray[0]+"' readonly='readonly'/>";
	str+=" </div></td>";
	str+=" <td width='17%' nowrap='nowrap'><div align='center'>";
	str+=" <input type='text' id='slat"+timeSize+"' name='slat"+timeSize+"' class='inputnone' size='10' value='"+areaAroundArray[1]+"' readonly='readonly'/>";
	str+="</div></td>";
	str+="<td width='18%' nowrap='nowrap'><div align='center'>";
	str+="  <input type='text' id='elon"+timeSize+"' name='elon"+timeSize+"' class='inputnone' size='10' value='"+areaAroundArray[2]+"' readonly='readonly'/>";
	str+="</div></td>";
	str+="<td width='8%' nowrap='nowrap'><div align='center'>";
	str+="  <input type='text' id='elat"+timeSize+"' name='elat"+timeSize+"' class='inputnone' size='10' value='"+areaAroundArray[3]+"' readonly='readonly'/>";
	str+="</div></td>";
	str+=" <td width='9%' nowrap='nowrap'><div align='center'><a href='javascript:void(0)' onClick='javascript:do_delete(this)'><img src='imgs/remove.gif' alt='删除此查询条件' width='16' height='16' border='0'></a></div></td>";
	str+="</tr>";

    $('#timeTable').append(str);
    parent.setMainFrame();
}

//删除条件
function do_delete(ob){
	 var id=$(ob);
	 id.parents("tr").remove();
}

//多时段多区域查车
function findTimeAreas(areaAround) {
	var flag = true;
	
	$("tr[id]").each(function(idx1) {
		var id = this.id;
		var xx = $("#beginTime" + id).val(); // 开始时间
		var yy = $("#endTime" + id).val(); // 结束时间
		
		
		if (xx == '' || yy == '') {
			alert('查询时间段不能为空');
			flag = false;
			return false;
		}
	});
	
	if(flag){
		$("#timeAreaTable").html('');
		
		var timeNum1 = 0;
		var timeNum2 = 0;
		
		$("tr[id]").each(function(idx1) {
			timeNum1++;
			$("#back").css("display", "block");
			var id = this.id;
			var xx = $("#beginTime" + id).val().split(/[-\s:]/); // 开始时间
			var yy = $("#endTime" + id).val().split(/[-\s:]/); // 结束时间
			
			var beginTime = (new Date(xx[0], xx[1] - 1, xx[2], xx[3], xx[4], xx[5])).valueOf(); // 把时间转换成毫秒数
			var endTime = (new Date(yy[0], yy[1] - 1, yy[2], yy[3], yy[4], yy[5])).valueOf(); // 把时间转换成毫秒数
			
			var jsonParams = {
				beginTime : beginTime,
				endTime : endTime,
				leftLatLon : ($("#slon" + id).val() + '|' + $("#slat" + id).val()),
				rightLatLon : ($("#elon" + id).val() + '|' + $("#elat" + id).val())
			};
			$.post("sys/findTimeAreaVehicle.action", jsonParams, function(data) {
				timeNum2++;
				$("#back").css("display", "none");
					if (data != 'false') {
						var arrlist = data ;
						var t = "";
						t += "<table class='form'>";
						t += "<tr>";
						t += "<th>区域</th>";
						t += "<th>车牌号</th>";
						t += "<th>最后停留区域时间</th>";
						t += "<th>状态</th>";
						t += "<th>位置</th>";
						t += "</tr>";
						t += "<tbody>";
		
						for ( var a = 0; a < arrlist.length; a++) {
							t += "<tr id='" + a + "'>";
							t += "<td nowrap><div align='center'>" +id + "</div></td>";
							t += "<td nowrap><div align='center'>" + arrlist[a].registrationNO + "</div></td>";
							t += "<td nowrap><div align='center'>" + arrlist[a].gpsTime.replace('T',' ') + "</div></td>";
							t += "<td nowrap><div align='center'>" + arrlist[a].speedstr + "</div></td>";
							t += "<td nowrap><div align='center'><a href='javascript:void(0)' onClick='getLocationInfo("+arrlist[a].vehicleID + ","
									+ arrlist[a].latitude + "," + arrlist[a].longitude + ")'> 查看地址 </a></div><div id='"
									+ arrlist[a].vehicleID + "'></div></td>";
							t += "</tr>";
						}
						t += "</tbody>";
						t += "</table>";
						
						$("#timeAreaTable").html($("#timeAreaTable").html() + t);
						$("div tbody tr:even").addClass("even");
						$("div tbody tr:odd").addClass("odd");
						//parent.setMainFrame();
					} else {
							$("#divTd").html($("#divTd").html() + "<br/>区域"+id+" ,没有查到符合要求的数据!!!");
							parent.setMainFrame();
						}

					if(timeNum2 == timeNum1){
						$("#back").css("display", "none");
					}
				});
		});
	}
}

/**
 * 中文地址转换
 */
// 弹出窗口,取中文地址
function getLocationInfo(sim, lat, lon) {
	
	document.getElementById(sim).innerHTML = '<img src="imgs/load.gif" />正在加载数据......';
	var jsonParams = {
		 date:new Date(),
         lnglat:lon+","+lat	 
	};
	$.post("monitorCenter/getAddressRepeat.action", jsonParams, function(back) {
        var data=back;//back.responseXML;
        if(data.status=="ok"){
        	document.getElementById(sim).innerHTML=data.result.district_text;
		}else{
			$document.getElementById(sim).innerHTML=data.result.error;
		}
	},"json");
}
