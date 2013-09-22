<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ include file="/common/flexHead.jsp"%>
<%@taglib prefix="auth"  uri="/auth-tags"  %>

<html>
<head>

<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>道路运输车辆卫星定位监管平台-广州亿程交通信息有限公司</title>

<script type="text/javascript" src="${basePath}js/analyse/driving/drivingBase.js"></script>
<script type="text/javascript" src="${basePath}js/analyse/driving/drivingInOutPlaceReport.js"></script>
<script type="text/javascript" src="${basePath}js/datepicker/WdatePicker.js"></script>
<script type="text/javascript" src="${basePath}js/common/dateutil.js"></script>
<script type="text/javascript" src="${basePath}js/common/historytime.js"></script>


</head>

<body>
<div style="width: 100%" id="cont_box">
	<div class="main">
		<div class="mon_cont">
			<div class="E_Tit">进出站点报表</div>
				<table border="0" cellspacing="0" cellpadding="0" class="que_tab">
		           <tr>
	                <td width="80" align="right">起始日期：</td>
	                <td width="150" align="left">
	                <input id="beginTime" type="text" class="mon_ser_text" onFocus="this.blur()" readonly="readonly" />
	                <img src="Images/time.jpg" width="20" height="23" style="margin-left:2px;"
								onClick="WdatePicker({firstDayOfWeek:1,isShowWeek:true,el:document.getElementById('beginTime'),dateFmt:'yyyy-MM-dd',maxDate:'%y-%M-%d'})"/>
	                
	                </td>
	                <td width="80" align="right">终止日期：</td>
	                <td width="150" align="left">
	                <input id="endTime"  type="text" class="mon_ser_text" onFocus="this.blur()" readonly="readonly" />
	                 <img src="Images/time.jpg" width="20" height="23" style="margin-left:2px;"
							onClick="WdatePicker({firstDayOfWeek:1,isShowWeek:true,el:document.getElementById('endTime'),dateFmt:'yyyy-MM-dd',maxDate:'%y-%M-%d'})"/>
	                </td>
	                 <td width="80" align="right">分析组：</td>
		            <td width="150" align="left"><select id="analyseGroupID" name="analyseGroupID" class="td_sel"></select></td>
	                <td width="80" align="right">车牌号码：</td>
	                <td width="150" align="left"><input id="registrationNO" name="registrationNO" type="text" class="mon_ser_text" style="width: 130;"
	                                        maxlength="30"
											onchange="value=value.replace(/[^0-9a-zA-Z\u4e00-\u9fa5]/g,'')" 
							                onbeforepaste="clipboardData.setData('text',clipboardData.getData('text').replace(/[^0-9a-zA-Z\u4e00-\u9fa5]/g,''))"></td>
	                <td width="200" align="left">
		                	<a id="searchBtn" href="javascript:void(0)" class="ser_btn" style="color: white;">查询</a>
		                	<auth:authorize operation="findDrivingInOutPolyExportExl">
		                	<a id="exportBtn" href="javascript:void(0)" class="ser_btn" style="color: white;">导出</a>
		                	</auth:authorize>
		            </td>
	                 <td></td>
	              	</tr>
		           </table>
          <div><table id="recordList" style="display: none"></table></div> 
    </div>
</div>
</div>

<div id="dialogs"  class="hiddiv" style="display: none;padding:5px;top:10px;">
		<iframe src="" id="dialogFrame" name="dialogFrame" width="100%"  height="100%" frameborder="0" scrolling="auto"></iframe>
</div>

</body>
</html>
