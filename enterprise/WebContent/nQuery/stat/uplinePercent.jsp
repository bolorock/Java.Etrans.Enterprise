<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ include file="/common/flexHead.jsp"%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>

        <title>企业车辆上线率统计</title>
        <script  type="text/javascript" src="${basePath}js/datepicker/WdatePicker.js"></script>
	    <script type="text/javascript" src="${basePath}js/query/stat/uplinePercent.js"></script>
		<script type="text/javascript" src="${basePath}js/common/dateutil.js"></script>
		<script type="text/javascript" src="${basePath}fusionCharts/JSClass/FusionCharts.js"></script>



</head>

<body>
<div id="cont_box">
	<div class="main">
        <div class="mon_cont">
        	<div class="E_Tit">企业车辆上线率统计</div>
        	   <table border="0" cellspacing="0" cellpadding="0" class="que_tab">
	              <tr>
	                 <td width="80" align="right">业户名称:</td>
		                <td width="150" align="left"><input id="workUnitName" name="workUnitName" type="text"  class="mon_ser_text" style="width: 130;"
		                		maxlength="30" 
				                onchange="value=value.replace(/[^0-9a-zA-Z\u4e00-\u9fa5]/g,'')" 
				                onbeforepaste="clipboardData.setData('text',clipboardData.getData('text').replace(/[^0-9a-zA-Z\u4e00-\u9fa5]/g,''))" /></td>
	                <td width="80" align="right">开始时间：</td>
	                <td width="150" align="left">
	                  <input id="startDate" type="text" class="mon_ser_text" onFocus="this.blur()" readonly="readonly"/>
	                   <img src="Images/time.jpg" width="20" height="23" style="margin-left:2px;" 
								onClick="WdatePicker({firstDayOfWeek:1,isShowWeek:true,el:document.getElementById('startDate'),dateFmt:'yyyy-MM-dd',maxDate:'%y-%M-{%d-1}'})"/>
	                  </td>
	                <td width="80" align="right">结束时间：</td>
	                <td width="150" align="left">
	                <input id="endDate"  type="text" class="mon_ser_text"   onFocus="this.blur()" readonly="readonly" />
	                <img src="Images/time.jpg" width="20" height="23" style="margin-left:2px;"
							onClick="WdatePicker({firstDayOfWeek:1,isShowWeek:true,el:document.getElementById('endDate'),dateFmt:'yyyy-MM-dd',maxDate:'%y-%M-{%d-1}'})"/>
	                
	                </td>
	                
	                 <td width="200"> 
	                 <a id="searchBtn" href="javascript:void(0)" class="ser_btn" style="color: white;">查询</a>
		             <a id="showBtn" href="javascript:void(0)" class="ser_btn" style="color: white;">图表</a>
		             <a id="exportBtn" href="javascript:void(0)" class="ser_btn" style="color: white;">导出</a>
		             <a style="display: none;" id="adSearchBtn" href="javascript:void(0)"   style="margin-left:8px;">高级搜索</a></td>
	                 <td></td>
	              </tr>
               </table>
        	
        	<div id="adSearch" style="display: none;">
        	   <table border="0" cellspacing="0" cellpadding="0" style="margin-bottom: 10px">
                     <tr>
		                <td width="80" align="right">所属平台：</td>
		                <td width="150" align="left">
		                <select id="flatformSel" class="sel_w"></select></td>
		                <td width="80" align="right">所属业户：</td>
		                <td width="150" align="left">
		                <input id="workUnitName" name="workUnitName" type="text" class="mon_ser_text" style="width: 130;"
	                                        maxlength="30"
											onchange="value=value.replace(/[^0-9a-zA-Z\u4e00-\u9fa5]/g,'')" 
							                onbeforepaste="clipboardData.setData('text',clipboardData.getData('text').replace(/[^0-9a-zA-Z\u4e00-\u9fa5]/g,''))"></td>
		                <td width="80" align="right">行业类别：</td>
		                <td width="150" align="left">
		                <select id="tradeKindSel" class="sel_w"></select></td>
		                 <td colspan="2"></td>
		          </tr>
		          <tr>
		                <td width="80" align="right">所属区域：</td>
		                <td width="150" align="left">
		                <select id="areaSel" class="sel_w"></select></td>
		                 <td colspan="6"></td>
		          </tr>       	   
        	   </table>
        	</div>
      
           
          <div id="uplinePercent"><table id="uplinePercentList" style="display: none"></table></div> 
          <div id="uplinePercentChart" style="display: none;width: 1020px; height: 345px; border: 1px outset #EEEEEE; padding-top: 2px; overflow-y: scroll; overflow-x: scroll;"></div> 
    </div>
</div>
</div>
</body>
</html>
