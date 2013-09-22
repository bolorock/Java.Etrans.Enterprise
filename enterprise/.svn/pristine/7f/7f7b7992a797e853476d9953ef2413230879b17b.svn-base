<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ include file="/common/flexHead.jsp"%>
<%@page import="org.apache.commons.lang.time.DateFormatUtils"%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>

        <title>电子运单</title>
        <script  type="text/javascript" src="${basePath}js/datepicker/WdatePicker.js"></script>
	    <script type="text/javascript" src="${basePath}js/query/Electronic.js"></script>
		<script type="text/javascript" src="${basePath}js/common/dateutil.js"></script>

</head>

<body>
<div id="cont_box">
	<div class="main">
        <div class="mon_cont">
        	<div class="E_Tit">电子运单</div>
        	   <table border="0" cellspacing="0" cellpadding="0" class="que_tab">
	              <tr>
	                <td width="80" align="right">车牌号码：</td>
	                <td width="150" align="left"><input id="registrationNO" name="registrationNO" type="text" class="mon_ser_text"
	                                              style="width: 130;"
	                                              maxlength="30"
											      onchange="value=value.replace(/[^0-9a-zA-Z\u4e00-\u9fa5]/g,'')" 
							                      onbeforepaste="clipboardData.setData('text',clipboardData.getData('text').replace(/[^0-9a-zA-Z\u4e00-\u9fa5]/g,''))"></td>
					<td width="80" align="right">开始时间：</td>
					<td width="170" align="left">
						<input type="text" id="startDate" name="startDate" class="mon_ser_text" style="width: 120px" readonly="readonly" value="<%=DateFormatUtils.format(new Date(new Date().getYear(),new Date().getMonth(),new Date().getDate()), "yyyy-MM-dd") %>"/>
						<img src="Images/time.jpg" width="20" height="23" style="margin-left:2px;"
							onClick="WdatePicker({firstDayOfWeek:1,isShowWeek:true,el:document.getElementById('startDate'),dateFmt:'yyyy-MM-dd',maxDate:'%y-%M-%d'})"/>
					</td>
					<td width="80" align="right">结束时间：</td>
	                <td width="170" align="left">
	                <input type="text" id="endDate" name="endDate" class="mon_ser_text" style="width: 120px" readonly="readonly" value="<%=DateFormatUtils.format(new Date(), "yyyy-MM-dd HH:mm:ss") %>" />
						<img src="Images/time.jpg" width="20" height="23" style="margin-left:2px;"
							onClick="WdatePicker({firstDayOfWeek:1,isShowWeek:true,el:document.getElementById('endDate'),dateFmt:'yyyy-MM-dd',maxDate:'%y-%M-%d'})"/>
	                </td>

<!--	                <td  align="right" colspan="2">开始时间：-->
<!--						<input type="text" id="startDate" name="startDate" class="mon_ser_text" style="width: 120px" readonly="readonly" value="<%=DateFormatUtils.format(new Date(new Date().getYear(),new Date().getMonth(),new Date().getDate()), "yyyy-MM-dd") %>"/>-->
<!--						<img src="Images/time.jpg" width="20" height="23" style="margin-left:2px;"-->
<!--							onClick="WdatePicker({firstDayOfWeek:1,isShowWeek:true,el:document.getElementById('startDate'),dateFmt:'yyyy-MM-dd',maxDate:'%y-%M-%d'})"/>-->
<!--						结束时间：<input type="text" id="endDate" name="endDate" class="mon_ser_text" style="width: 120px" readonly="readonly" value="<%=DateFormatUtils.format(new Date(), "yyyy-MM-dd HH:mm:ss") %>" />-->
<!--						<img src="Images/time.jpg" width="20" height="23" style="margin-left:2px;"-->
<!--							onClick="WdatePicker({firstDayOfWeek:1,isShowWeek:true,el:document.getElementById('endDate'),dateFmt:'yyyy-MM-dd',maxDate:'%y-%M-%d'})"/>-->
<!--					</td>-->
	                
	                 <td width="200" align="left"> 
	                 <a id="searchBtn" href="javascript:void(0)" class="ser_btn" style="color: white;">查询</a>
		             <a id="exportBtn" href="javascript:void(0)" class="ser_btn" style="color: white;">导出</a></td>
	                 <td></td>
	              </tr>
               </table>
          <div><table id="ElectronicList" style="display: none"></table></div> 
    </div>
</div>
</div>
</body>
</html>
