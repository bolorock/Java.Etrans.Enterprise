<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ include file="/common/flexHead.jsp"%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
        <title>车辆超速行驶统计</title>
        <script  type="text/javascript" src="${basePath}js/datepicker/WdatePicker.js"></script>
        <%--页面抽取js--%>
	    <script type="text/javascript" src="${basePath}js/query/stat/securityManager/vehicleOSTimesStat.js"></script>
		<%--时间帮助js--%>
        <script type="text/javascript" src="${basePath}js/common/dateutil.js"></script>
        <%--报表js--%>
<%--		<script type="text/javascript" src="${basePath}fusionCharts/JSClass/FusionCharts.js"></script>--%>
		<%--初始化时间js--%>
        <script type="text/javascript" src="${basePath}js/query/stat/initSelectsDate.js"></script>
        <%--历史时间js--%>
        <script type="text/javascript" src="${basePath}js/query/stat/historydate.js"></script>
        
         <script type="text/javascript"	src="${basePath}js/sys/tree/tree.js"></script>	

		 	<%--【自动补全】begin--%>
        <script type="text/javascript" src="${basePath}js/common/autoComplete.js"></script>
        <link rel="stylesheet" type="text/css" href="${basePath}css/autoComplete.css">
          	<%--【自动补全】end--%>
</head>

<%--onclickAll 【自动补全】--%>
<body onclick="onclickAll();">
	<%--【自动补全】begin--%>
    <div style="position:absolute; overflow:auto; scroll;height: 143px; width: 120px;" id="popup">
        <table  id="name_table" bgcolor="#FFFAFA" border="0" cellspacing="0" cellpadding="0"/>            
            <tbody id="name_table_body" style="font-size: 13px;"></tbody>
        </table>
    </div>
	<%--【自动补全】end--%> 
<div id="cont_box">
	<div class="main">
        <div class="mon_cont">
        	<div class="E_Tit">车辆超速行驶统计</div>
        	   <table border="0" cellspacing="0" cellpadding="0" class="que_tab">
	              <tr>
	                 <td width="80" align="right">企业名称:</td>
		                <td width="130" align="left">
		                <input   id="workUnitNameParam" ondblclick="showWorkUnitTree()"
		                 name="workUnitName" type="text"  class="mon_ser_text" style="width: 130;"
		                		maxlength="30" 
				                onchange="value=value.replace(/[^0-9a-zA-Z\u4e00-\u9fa5]/g,'')" 
				                onbeforepaste="clipboardData.setData('text',clipboardData.getData('text').replace(/[^0-9a-zA-Z\u4e00-\u9fa5]/g,''))" /></td>
	                <td width="80" align="right">车牌号码:</td>
							<td width="150" align="left">
								<%--【自动补全】车牌号码--%>
								<input id="registrationNo" name="registrationNo" type="text"
									class="mon_ser_text"  style="width:120px" 
									onkeyup="doAutoComplete('registrationNo','name_table','popup','name_table_body')" 
									onchange="value=value.replace(/[^0-9a-zA-Z\u4e00-\u9fa5]/g,'')" 
				                    onbeforepaste="clipboardData.setData('text',clipboardData.getData('text').replace(/[^0-9a-zA-Z\u4e00-\u9fa5]/g,''))" />
							</td>
					<td width="80" align="right">统计方式：</td>		
					<td width="50">
						<select id="statTypeSelect">
							<option value="Week">周</option>
						</select>
					</td>
					<td width="200">
							<%--时间--%>
							<select id="slBeginWeek" style="width:220px"></select>
						
					</td>
	                 <td width="200"> 
	                 <a id="searchBtn" href="javascript:void(0)" class="ser_btn" style="color: white;">查询</a>
<!--		             <a id="showBtn" href="javascript:void(0)" class="ser_btn" style="color: white;">图表</a>-->
		             <a id="exportBtn" href="javascript:void(0)" class="ser_btn" style="color: white;">导出</a>
	                 <td></td>
	              </tr>
               </table>
        	

		  <%--列表--%>
          <div id="findVehicleOSTimesStat">
               <table id="findVehicleOSTimesStatList" style="display: none"></table>
          </div> 
<!--          <div id="uplinePercentChart" style="display: none;width: 1020px; height: 345px; border: 1px outset #EEEEEE; padding-top: 2px; overflow-y: scroll; overflow-x: scroll;"></div> -->
      </div>
</div>
</div>

<div id="dialogs" class="hiddiv" style="display: none;padding:5px;top:10px;">
			<iframe src="" id="dialogFrame" name="dialogFrame" width="100%"  height="100%" frameborder="0" scrolling="auto"></iframe>
		</div>
</body>
</html>
