//全局变量
var platformId = -1;// 平台ID
var workUnitId = -1;// 企业ID
var vehicleStr = '';// 所选车辆以,隔开
var customTradeKindId = -1;// 行业ID

$(document).ready(function() {

	   // getPlatform();	

});

function getPlatform(){
 	// 取平台
	customTradeKindId = -1;
	vehicleStr = '';
	$("#platform").html("<img src='imgs/load.gif'>正在加载平台.......");
	$.post("stat/getPlatformList.action", {}, function(data) {
		// 平台
			var platfromList = data.split("ETRANS")[0].split(",");
			var platformStr = "";
			platformStr += "<ul>";

			for ( var f = 0; f < (platfromList.length - 1); f++) {
				platformStr += "<li><a href='javascript:void(0)' onclick='getWorkUnitList(" + platfromList[f].split("=")[0] + ")'>" + platfromList[f].split("=")[1] + "</a></li>";
			}

			platformStr += "</ul>";

			$("#platform").html(platformStr);

			// 行业---------------------------------------------------------------------------------------
			var customTradeKindListStr = "";
			var customTradeKindList = data.split("ETRANS")[1].split(",");
			var customTradeKindListStr = "";
			customTradeKindListStr += "<select name='select' class='listbox' id='customTradeKindListSelect'>";
			customTradeKindListStr += "<option value='0'>--行业类型--</option>";
			for ( var f = 0; f < (customTradeKindList.length - 1); f++) {
				customTradeKindListStr += "<option value='" + customTradeKindList[f].split("=")[0] + "'>" + customTradeKindList[f].split("=")[1] + "</option>";
			}

			customTradeKindListStr += "</select>";

			$("#customTradeKindList").html(customTradeKindListStr);

			$("#customTradeKindListSelect").change(function() {
				customTradeKindId = $("#customTradeKindListSelect").val();
				   getVehicleList(customTradeKindId); // 重新查车
				});
		});		
}

//取企业
function getWorkUnitList(id) {
	customTradeKindId = -1;
	platformId = id;
	vehicleStr = '';
	$("#workUnit").html("<img src='imgs/load.gif'>正在加载企业.......");
	$.post("stat/getWorkUnitList.action", {
		platformId : platformId
	}, function(data) {
		if (data == "") {
			$("#workUnit").html("此平台下没有企业!");
		} else {
			var workUnitList = data.split(",");
			var workUnitStr = "";
			workUnitStr += "<ul>";

			for ( var f = 0; f < (workUnitList.length - 1); f++) {
				workUnitStr += "<li><a href='javascript:void(0)' onclick='getVehicleList(" + workUnitList[f].split("=")[0] + ")'>" + workUnitList[f].split("=")[1] + "</a></li>";
			}

			workUnitStr += "</ul>";

			$("#workUnit").html(workUnitStr);
		}
	});
}


//取车辆
function getVehicleList(id) {
	workUnitId = id;
	vehicleStr = '';
	$("#vehicle").html("<img src='imgs/load.gif'>正在加载车辆.......");
	$.post("stat/getVehilceList.action", {
		platformId : platformId,
		customTradeKindId : customTradeKindId,
		workUnitId : workUnitId
	}, function(data) {
		if (data == "") {
			$("#vehicle").html("此企业下没有接入车辆!");
		} else {
			var vehicleList = data.split(",");
			var vehicleListStr = "";
			vehicleListStr += "<ul>";

			for ( var f = 0; f < (vehicleList.length - 1); f++) {
					vehicleListStr += "<li><input type='checkbox' onClick='checkboxMessage()' name='vehicles' id='vehicles'  value='" + vehicleList[f].split("=")[0] + "'/>" + vehicleList[f].split("=")[1] + "</a></li>";
				
			}
	
			vehicleListStr += "</ul>";

			$("#vehicle").html(vehicleListStr);
		}
	});

	// 全选
	$("#CheckAll").click(function() {
		var flag = $("#CheckAll").attr("checked");
		if(flag){
			$("[name=vehicles]:checkbox").each(function() {
				$(this).attr("checked", true);
			});
			$("#vehiclesspan").closeMessage();
		}else{
			$("[name=vehicles]:checkbox").each(function() {
				$(this).attr("checked",false);
			});
			$("#vehiclesspan").showMessage({
				type : "error",
				closeable : false, 
				text : "请至少选择一个车辆！"});
		}
	});

	// 取所选车辆值
	$("#submitBtn").unbind().click(function() {
		vehicleStr = '';
		$("[name=vehicles]:checkbox").each(function() {
			
			if ($(this).attr("checked") == "checked") {
				
				vehicleStr += $(this).attr("value") + ",";
			}
		});
		vehicleStr = vehicleStr.substr(0, vehicleStr.length - 1);
		ConfigAdd(vehicleStr);
	});
}

/**
 * 
 * 复选框验证
 */
function checkboxMessage(){
	if($("input[name='vehicles']:checked").size() == 0) {
		$("#vehiclesspan").showMessage({
			type : "error",
			closeable : false, 
			text : "请至少选择一个车辆！"});
	}else{
		$("#vehiclesspan").closeMessage();
	}
	
}

//搜索
function findIt() {
	var queryValue = $("#searchValue").val();
	var serachType = $("#serachType").val();
	if (serachType == 'registrationNO') {// 车牌查询
		$("#vehicle").html("<img src='imgs/load.gif'>正在查询车辆,将只列表最近的50条记录,请缩小查询范围.......");
		$.post("stat/getVehilceList.action", {
			platformId : -1,
			workUnitId : -1,
			customTradeKindId : -1,
			registrationNO : queryValue
		}, function(data) {
			if (data == "") {
				$("#vehicle").html("未找到符合条件的车辆!");
			} else {
				var vehicleList = data.split(",");
				var vehicleListStr = "";
				vehicleListStr += "<ul>";

				for ( var f = 0; f < (vehicleList.length - 1); f++) {
					vehicleListStr += "<li><input type='checkbox'  name='vehicles' id='vehicles' value='" + vehicleList[f].split("=")[0] + "'/>" + vehicleList[f].split("=")[1] + "</a></li>";
				}
				vehicleListStr += "</ul>";

				$("#vehicle").html(vehicleListStr);
			}
		});
		
		// 全选
		$("#CheckAll").unbind().click(function() {
			var flag = $("#CheckAll").attr("checked");
			if(flag){
				$("[name=vehicles]:checkbox").each(function() {
					$(this).attr("checked", true);
				});
			}else{
				$("[name=vehicles]:checkbox").each(function() {
					$(this).attr("checked",false);
				});
			}
		});

		// 取所选车辆值
		$("#submitBtn").unbind().click(function() {
			vehicleStr = '';
			$("[name=vehicles]:checkbox").each(function() {
				if ($(this).attr("checked") == "checked") {
					vehicleStr += $("#vehicles").attr("value") + ",";
				}
			});
			vehicleStr = vehicleStr.substr(0, vehicleStr.length - 1);
		
			ConfigAdd(vehicleStr);
		});
	} else {
		// 企业查询
		$("#workUnit").html("<img src='imgs/load.gif'>正在查询企业,将只列表最近的50条记录,请缩小查询范围.......");
		$.post("stat/getWorkUnitList.action", {
			platformId : -1,
			workUnitName : queryValue
		}, function(data) {
			if (data == "") {
				$("#workUnit").html("未找到符合条件的企业!");
			} else {
				var workUnitList = data.split(",");
				var workUnitStr = "";
				workUnitStr += "<ul>";

				for ( var f = 0; f < (workUnitList.length - 1); f++) {
					workUnitStr += "<li><a href='javascript:void(0)' onclick='getVehicleList(" + workUnitList[f].split("=")[0] + ")'>" + workUnitList[f].split("=")[1] + "</a></li>";
				}
				workUnitStr += "</ul>";
				$("#workUnit").html(workUnitStr);
			}
		});
	}
}

/**
 * 初始化查询条件
 * @param elementId
 * @return
 */
function initSerachType(elementId) {
	var unit = $("#" + elementId).get(0);
	unit.options.add(new Option("车牌号码", "registrationNO"));
	unit.options.add(new Option("企业名称", "workUnitName"));
}



