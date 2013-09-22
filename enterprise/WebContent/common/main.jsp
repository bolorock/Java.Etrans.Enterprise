<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@taglib prefix="auth" uri="/auth-tags"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path + "/";

	request.setAttribute("basePath", basePath);
%>
<!DOCTYPE html>
<html>
<base href="${basePath}"></base>
<head>
<title>首页</title>
<script type="text/javascript">
	var basePath = '<%=basePath%>';
</script>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<!-- Bootstrap -->

<link href="${basePath}js/bootstrap/css/bootstrap.min.css"
	rel="stylesheet" media="screen">

<style type="text/css">
body {
	font-size: 12px;
}
.anchorBL{
display:none;
}
.box .box-title .icon {
	float: right;
	width: 20px;
	height: 20px;
	top: 50%;
	margin-right: 5px;
	cursor: pointer;
	font-size: 14px;
}

.box .box-title {
	padding: 5px 15px 5px 10px;
	margin: 0px;
	background-color: #f5f5f5;
}

.box {
	margin-bottom: 15px;
	overflow: visible;
	position: relative;
	padding: 0px;
	background-color: white;
}

.box .box-content {
	padding: 10px 15px 15px;
}

p {
	margin: 0 0 10.5px;
}

#setMyMenu .modal-body {
	max-height: 800px;
}

#setMyMenu {
	top: 3%;
	width: 900px;
	height: 450px;
	left: 38%;
}

#divWin {
	top: 1%;
	width: 100%;
	height: 450px;
	left: 20%;
}

.container {
	margin-top: 5px;
}
.row-fluid a{
text-align: center;
}

#setAlarm{
top: 3%;
width: 800px;
margin-left: -400px;//为宽度的一半才居中
}

</style>


</head>
<body>
	<div class="container">
		<div class="row">
			<div class="span6 column ui-sortable">
				<div class="box well ">
					<h6 class="box-title">
						<!-- <i class="icon chevron icon-chevron-up"></i> --> <i id="setMenu"
							class="icon icon-wrench pull-right"></i> 导航工具
					</h6>
					<div id="myMenu" class="box-content " style="display: block;"></div>
				</div>
			</div>

			<div class="span6 column ui-sortable">
				<div class="box well ">
					<h6 class="box-title">
						<!-- <i class="icon chevron icon-chevron-up"></i> -->
						<i class="icon icon-wrench pull-right" data-toggle="modal"
							data-target="#setAlarm"></i> 报警统计
					</h6>
					<div class="box-content " style="display: block;">
						<div id="chartAlarm"
							style="min-width: 165px; height: 153px; margin: 0 auto"></div>
					</div>
				</div>
			</div>

			<div class="span6 column ui-sortable">
				<div class="box well ">
					<h6 class="box-title">
						<!-- <i class="icon chevron icon-chevron-up"></i> --> 图层信息
					</h6>
					<div class="box-content " id="mainMap" style="display: block;"></div>
				</div>
			</div>

			<div class="span6 column ui-sortable">
				<div class="box well ">
					<h6 class="box-title">
						<!-- <i class="icon chevron icon-chevron-up"></i> -->
						<i class="icon icon-wrench pull-right" data-toggle="modal"
							data-target="#setTa"></i> TA统计
					</h6>
					<div class="box-content " style="display: block;">
						<div id="chartTa"
							style="min-width: 175px; height: 163px; margin: 0 auto"></div>
					</div>
				</div>
			</div>
		</div>
	</div>
	
	<div class="modal hide fade" tabindex="-1" role="dialog" id="divWin"
		style="display: none;" aria-hidden="true">
			<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
		<iframe id="frWin" src="" name="dialogFrame"
			width="100%" height="100%" frameborder="0" scrolling="auto"></iframe>
	</div>

	<div class="modal hide fade" tabindex="-1" role="dialog" id="setMyMenu"
		style="display: none;" aria-hidden="true">
		<button type="button" class="close" data-dismiss="modal"
			aria-hidden="true">&times;</button>
		<iframe id="frModal" src="" name="dialogFrame"
			width="100%" height="100%" frameborder="0" scrolling="auto"></iframe>
	</div>

	<div class="modal hide fade" tabindex="-1" role="dialog" id="setAlarm"
		style="display: none;" aria-hidden="true">
		<div class="modal-header">
			<button type="button" class="close" data-dismiss="modal">×</button>
			<h3>设置报警类型</h3>
		</div>
		<div class="modal-body">
			<div class="row-fluid">
				<div class="span4">
					<div class="control-group">
						<div class="controls">
							<label class="checkbox"> <input id="ckb_1_2" type="checkbox" checked="checked" alarmId="2">超速报警</label>
							<label class="checkbox"> <input id="ckb_1_3" type="checkbox" checked="checked"  alarmId="3">疲劳驾驶报警</label>
							<label class="checkbox"> <input id="ckb_1_1" type="checkbox" checked="checked"  alarmId="1">紧急报警</label>
							<label class="checkbox"> <input id="ckb_1_4" type="checkbox"  alarmId="4">预警</label>
							<label class="checkbox"> <input id="ckb_1_5" type="checkbox"  alarmId="5">GNSS模块发生故障</label>
							<label class="checkbox"> <input id="ckb_1_6" type="checkbox"  alarmId="6">GNSS天线未接或被剪断</label>
							<label class="checkbox"> <input id="ckb_1_7" type="checkbox"  alarmId="7">GNSS天线短路</label>
							<label class="checkbox"> <input id="ckb_1_8" type="checkbox"  alarmId="8">终端主电源欠压</label>
							<label class="checkbox"> <input id="ckb_1_9" type="checkbox"  alarmId="9">终端主电源掉电</label>
							<label class="checkbox"> <input id="ckb_1_10" type="checkbox"  alarmId="10">终端LCD或显示器故障</label>
							<label class="checkbox"> <input id="ckb_1_21" type="checkbox" alarmId="21">车辆被盗</label> 
							<label class="checkbox"> <input  id="ckb_1_22" type="checkbox" alarmId="22">车辆非法点火</label> 
						</div>
					</div>
				</div>
				<div class="span4">
					<div class="control-group">
						<div class="controls">
							<label class="checkbox"> <input id="ckb_1_11" type="checkbox" alarmId="11">TTS模块故障</label> 
							<label class="checkbox"> <input  id="ckb_1_12" type="checkbox" alarmId="12">摄像头故障</label> 
							<label class="checkbox"> <input id="ckb_1_13" type="checkbox" alarmId="13">当天累计驾驶超时</label>
							<label class="checkbox"> <input id="ckb_1_14" type="checkbox" checked="checked" alarmId="14">超时停车</label>
							<label class="checkbox"> <input id="ckb_1_15" type="checkbox" checked="checked" alarmId="15">进出区域</label>
							<label class="checkbox"> <input id="ckb_1_16" type="checkbox" checked="checked" alarmId="16">进出路线</label>
							<label class="checkbox"> <input id="ckb_1_17" type="checkbox" alarmId="17">路段行驶时间不足/过长</label>
							<label class="checkbox"> <input id="ckb_1_18" type="checkbox" alarmId="18">路线偏离报警</label>
							<label class="checkbox"> <input id="ckb_1_19" type="checkbox" alarmId="19">车辆VSS故障</label>
							<label class="checkbox"> <input id="ckb_1_20" type="checkbox" alarmId="20">车辆油量异常</label>
							<label class="checkbox"> <input id="ckb_1_325" type="checkbox" alarmId="325">规定时间未到达指定地点报警(平台)</label>
							<label class="checkbox"> <input id="ckb_1_326" type="checkbox" alarmId="326">规定时间未离开指定地点报警(平台)</label>
						</div>
					</div>
				</div>
				<div class="span3">
					<div class="control-group">
						<div class="controls">
							
							<label class="checkbox"> <input id="ckb_1_23" type="checkbox" alarmId="23">车辆非法位移</label>
							<label class="checkbox"> <input id="ckb_1_24" type="checkbox" alarmId="24">碰撞侧翻报警</label>
							<label class="checkbox"> <input id="ckb_1_315" type="checkbox" alarmId="315">超速报警(平台)</label>
							<label class="checkbox"> <input id="ckb_1_316" type="checkbox" alarmId="316">疲劳驾驶报警(平台)</label>
							<label class="checkbox"> <input id="ckb_1_317" type="checkbox" alarmId="317">地点超时停车报警(平台)</label>
							<label class="checkbox"> <input id="ckb_1_318" type="checkbox" alarmId="318">进出地点报警(平台)</label>
							<label class="checkbox"> <input id="ckb_1_319" type="checkbox" alarmId="319">进出区域报警(平台)</label>
							<label class="checkbox"> <input id="ckb_1_320" type="checkbox" alarmId="320">路段偏离报警(平台)</label>
							
							<label class="checkbox"> <input id="ckb_1_321" type="checkbox" alarmId="321">夜间行车报警(平台)</label>
							<label class="checkbox"> <input id="ckb_1_322" type="checkbox" alarmId="322">分路段超速报警(平台)</label>
							<label class="checkbox"> <input id="ckb_1_323" type="checkbox" alarmId="323">进入指定区域报警(平台)</label>
							<label class="checkbox"> <input id="ckb_1_324" type="checkbox" alarmId="324">离开指定区域报警(平台)</label>
							
							
					   </div>
					</div>
				</div>
			</div>

		</div>
		<div class="modal-footer">
			<button class="btn" data-dismiss="modal">关闭</button>
			<input id="btnAlarmSet" class="btn btn-primary" type="submit" value="保存">
		</div>
	</div>
	
	<div class="modal hide fade" tabindex="-1" role="dialog" id="setTa"
		style="display: none;" aria-hidden="true">
		<div class="modal-header">
			<button type="button" class="close" data-dismiss="modal">×</button>
			<h3>设置TA统计类型</h3>
		</div>
		<div class="modal-body">
			<div class="row-fluid">
			<label class="control-label "> 请选择：</label>
				<div class="span4">
					<div id="div_id_title" class="control-group">
						<div class="controls">
							<label class="checkbox"> <input id="ckb_2_1" type="checkbox" checked="checked" taId="1" taName='SpeedNum'>超速统计
							</label> <label class="checkbox"> <input id="ckb_2_2" type="checkbox" checked="checked" taId="2" taName='TireNum'>疲劳驾驶
							</label> <label class="checkbox"> <input id="ckb_2_3" type="checkbox" checked="checked" taId="3" taName='OvertimeNum'>超时停车
							</label>
						</div>
					</div>
				</div>
				<div class="span4">
					<div class="control-group">
						<div class="controls">
							<label class="checkbox"> <input id="ckb_2_4" type="checkbox" checked="checked" taId="4" taName='localeNum'>进出地点
							</label> <label class="checkbox"> <input id="ckb_2_5" type="checkbox" checked="checked" taId="5" taName='AreaNum'>进出区域
							</label> <label class="checkbox"> <input id="ckb_2_6" type="checkbox" checked="checked" taId="6" taName='RoadNum'>路段偏离
							</label>
						</div>
					</div>
				</div>
				
				<div class="span3">
					<div class="control-group">
						<div class="controls">
							<label class="checkbox"> <input id="ckb_2_7" type="checkbox"  taId="7" taName='NightNum'>夜间行车报警
							</label> <label class="checkbox"> <input id="ckb_2_8" type="checkbox"  taId="8" taName='RoadSpeedNum'>分路段超速报警
							</label>
						</div>
					</div>
				</div>
			</div>

		</div>
		<div class="modal-footer">
			<button class="btn" data-dismiss="modal">关闭</button>
			<input  id="btnTaSet" class="btn btn-primary" type="submit" value="保存">
		</div>
	</div>

	<div id="defaultMenu" style="display: none;">
		<div class="row-fluid">
			<a href="javascript:void(0)" onClick="javascript:openWin('${basePath}monitorCenter/monitor.jsp')" class="span3">
				<img src="${basePath}imgs/menu/menu_4.png">
				<p>车辆监控</p>
			</a> <a href="javascript:void(0)" onClick="javascript:openWin('${basePath}sys/vehicle/vehicle.jsp')" class="span3"> <img
				src="${basePath}imgs/menu/menu_19.png">
				<p>车辆信息管理</p>
			</a> <a href="javascript:void(0)" onClick="javascript:openWin('${basePath}sys/workUnit/workUnitManage.jsp')" class="span3"> <img
				src="${basePath}imgs/menu/menu_8.png">
				<p>企业信息管理</p>
			</a> <a
				href="javascript:void(0)" onClick="javascript:openWin('${basePath}query/alarmMsgInfo/alarmMsgInfo.jsp')"
				class="span3"> <img src="${basePath}imgs/menu/menu_15.png">
				<p>历史报警查询</p>
			</a>
		</div>
		<div class="row-fluid">
			<a href="javascript:void(0)" onClick="javascript:openWin('${basePath}sys/historyImageSelect.jsp')"
				class="span3"> <img src="${basePath}imgs/menu/menu_9.png">
				<p>历史图片查询</p>
			</a> <a
				href="javascript:void(0)" onClick="javascript:openWin('${basePath}query/stat/VehicleAlarmstatList.jsp')"
				class="span3"> <img src="${basePath}imgs/menu/menu_17.png">
				<p>车辆报警统计</p>
			</a>
			<a
				href="javascript:void(0)" onClick="javascript:openWin('${basePath}basicBlue/usermanage/enterUserList.jsp')"
				class="span3"> <img src="${basePath}imgs/menu/menu_5.png">
				<p>企业用户管理</p>
			</a>
						<a
				href="javascript:void(0)" onClick="javascript:openWin('${basePath}sys/customMap/customMap.jsp')"
				class="span3"> <img src="${basePath}imgs/menu/menu_6.png">
				<p>图层管理</p>
			</a>
		</div>
	</div>

	<script type="text/javascript"
		src="${basePath}js/jq/jquery-1.7.1.min.js"></script>
	<script type="text/javascript"
		src="${basePath}js/bootstrap/js/bootstrap.min.js"></script>
	<script type="text/javascript"
		src="${basePath}js/highcharts/highcharts.js"></script>
	<script type="text/javascript" src="${basePath}/js/common/HashMap.js"></script>
	<script type="text/javascript" src="${basePath}/js/common/main.js"></script>
	<script type="text/javascript" src="http://api.map.baidu.com/api?v=1.4"></script>
</body>
</html>
