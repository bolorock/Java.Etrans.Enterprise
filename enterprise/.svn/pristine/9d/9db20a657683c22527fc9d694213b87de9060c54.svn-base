<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ include file="/common/flexHead.jsp"%>


 <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
        <title></title>
        <script type="text/javascript" src="${basePath}js/analyse/driving/speedGZSJWResult.js"></script>
		<script  type="text/javascript" src="${basePath}js/datepicker/WdatePicker.js"></script>
        <script type="text/javascript" src="${basePath}js/common/dateutil.js"></script>
        


</head>

<body>
<div id="cont_box">
	<div class="main">
        <div class="mon_cont" id="gridBox">
        	<div class="E_Tit">行驶速度超速报表(交委)</div>
        	   <table  border="0" cellspacing="0" cellpadding="0" class="que_tab">
	              <tr>
	               
	                <td width="80" align="right">开始时间：</td>
	                <td width="150" align="left">
	                <input id="startDate" type="text" class="mon_ser_text"  onFocus="this.blur()" readonly="readonly" />
	                  <img src="Images/time.jpg" width="20" height="23" style="margin-left:2px;"
								onClick="WdatePicker({firstDayOfWeek:1,isShowWeek:true,el:document.getElementById('startDate'),dateFmt:'yyyy-MM-dd',maxDate:'%y-%M-%d'})"/>
	                
	                </td>
	                <td width="80" align="right">结束时间：</td>
	                <td width="150" align="left">
	                <input id="endDate"  type="text" class="mon_ser_text" onFocus="this.blur()" readonly="readonly" />
	                <img src="Images/time.jpg" width="20" height="23" style="margin-left:2px;"
							onClick="WdatePicker({firstDayOfWeek:1,isShowWeek:true,el:document.getElementById('endDate'),dateFmt:'yyyy-MM-dd',maxDate:'%y-%M-%d'})"/>
	                
	                </td>
	                
	                  <%-- 分析组--%>
	                <td width="80" align="right">分析组：</td>
		            <td width="150" align="left"><select id="analyseGroupID" name="analyseGroupID" class="td_sel"></select></td>
	                
	                
	                <%-- 车牌号码--%>
	                 <td width="80" align="right">车牌号码：</td>
	                <td width="150" align="left"><input id="registrationNO" name="registrationNO" type="text" class="mon_ser_text" style="width: 130;"
	                                              maxlength="30"
											      onchange="value=value.replace(/[^0-9a-zA-Z\u4e00-\u9fa5]/g,'')" 
							                      onbeforepaste="clipboardData.setData('text',clipboardData.getData('text').replace(/[^0-9a-zA-Z\u4e00-\u9fa5]/g,''))"></td>
	               
	                
	                <td width="200" align="left"> 
		                <a id="searchBtn" href="javascript:void(0)" class="ser_btn" style="color: white;">查询</a>
			            <a id="exportBtn" href="javascript:void(0)" class="ser_btn" style="color: white;">导出</a>
		             <td></td>
		            </tr>
	                  
               </table>
             
             <div><table id="speedGZSJWResultList" style="display: none"></table></div> 
          
    </div>
</div>
</div>
</body>
</html>
