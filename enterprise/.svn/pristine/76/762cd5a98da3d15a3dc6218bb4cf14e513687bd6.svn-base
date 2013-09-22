<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ include file="/common/flexHead.jsp"%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
        <title>车辆在线率统计</title>
        <script  type="text/javascript" src="${basePath}js/datepicker/WdatePicker.js"></script>
	    <script type="text/javascript" src="${basePath}js/query/stat/vehicleOnLineStat.js"></script>
        <script type="text/javascript" src="${basePath}js/common/dateutil.js"></script>
		<script type="text/javascript" src="${basePath}fusionCharts/JSClass/FusionCharts.js"></script>
        <script type="text/javascript" src="${basePath}js/query/stat/initSelectsDate.js"></script>
        <script type="text/javascript" src="${basePath}js/query/stat/historydate.js"></script>
</head>

<body>
<div id="cont_box">
	<div class="main">
        <div class="mon_cont">
        	<div class="E_Tit">车辆在线率统计</div>
        	   <table border="0" cellspacing="0" cellpadding="0" class="que_tab">
	              <tr>
	               <td width="80" align="right">车牌号码:</td>
							<td width="150" align="left">
								<input id="registrationNo" name="registrationNo" type="text"
			  						class="mon_ser_text"  style="width:120px" 
									onchange="value=value.replace(/[^0-9a-zA-Z\u4e00-\u9fa5]/g,'')" 
				                    onbeforepaste="clipboardData.setData('text',clipboardData.getData('text').replace(/[^0-9a-zA-Z\u4e00-\u9fa5]/g,''))" />
							</td>
	                 <td width="80" align="right">业户名称:</td>
		                <td width="130" align="left"><input id="workUnitName" name="workUnitName" type="text"  class="mon_ser_text" style="width: 130;"
		                		maxlength="30" 
				                onchange="value=value.replace(/[^0-9a-zA-Z\u4e00-\u9fa5]/g,'')" 
				                onbeforepaste="clipboardData.setData('text',clipboardData.getData('text').replace(/[^0-9a-zA-Z\u4e00-\u9fa5]/g,''))" /></td>
	               
					<td width="80" align="right">统计方式：</td>		
					<td width="50">
						<select id="statTypeSelect">
							<option value="Week">周</option>
						</select>
					</td>
					<td width="200">
					
						
							<select id="slBeginWeek" style="width:220px"></select>
						
						
					</td>
<!--	                <td width="70" align="right">开始时间：</td>-->
<!--	                <td width="150" align="left">-->
<!--	                  <input id="RecdayStart" type="text" class="mon_ser_text" onFocus="this.blur()"/>-->
<!--	                   <img src="Images/time.jpg" width="20" height="23" style="margin-left:2px;" -->
<!--								onClick="WdatePicker({firstDayOfWeek:1,isShowWeek:true,el:document.getElementById('RecdayStart'),dateFmt:'yyyy-MM-dd',maxDate:'%y-%M-{%d-1}'})"/>-->
<!--	                  </td>-->
<!--	                <td width="70" align="right">结束时间：</td>-->
<!--	                <td width="150" align="left">-->
<!--	                <input id="RecdayEnd"  type="text" class="mon_ser_text"   onFocus="this.blur()"/>-->
<!--	                <img src="Images/time.jpg" width="20" height="23" style="margin-left:2px;"-->
<!--							onClick="WdatePicker({firstDayOfWeek:1,isShowWeek:true,el:document.getElementById('RecdayEnd'),dateFmt:'yyyy-MM-dd',maxDate:'%y-%M-{%d-1}'})"/>-->
<!--	                -->
<!--	                </td>-->
	                
	                 <td width="200"> 
	                 <a id="searchBtn" href="javascript:void(0)" class="ser_btn" style="color: white;">查询</a>
<!--		             <a id="showBtn" href="javascript:void(0)" class="ser_btn" style="color: white;">图表</a>-->
		             <a id="exportBtn" href="javascript:void(0)" class="ser_btn" style="color: white;">导出</a>
<!--		             <a style="display: none;" id="adSearchBtn" href="javascript:void(0)"   style="margin-left:8px;">高级搜索</a></td>-->
	                 <td></td>
	              </tr>
               </table>
        	

      
           
          <div id="findVehicleOnline">
               <table id="findVehicleOnlineList" style="display: none"></table>
          </div> 
<!--          <div id="uplinePercentChart" style="display: none;width: 1020px; height: 345px; border: 1px outset #EEEEEE; padding-top: 2px; overflow-y: scroll; overflow-x: scroll;"></div> -->
      </div>
</div>
</div>
</body>
</html>
