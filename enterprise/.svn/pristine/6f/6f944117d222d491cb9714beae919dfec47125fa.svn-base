<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@page import="org.apache.commons.lang.time.DateFormatUtils"%>
<%@ include file="/common/flexHead.jsp"%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
	<head>
		<title>登录日志</title>
		<script type="text/javascript" src="${basePath}js/datepicker/WdatePicker.js"></script>
		<script type="text/javascript" src="${basePath}js/query/log/loginLog.js"></script>
		<script type="text/javascript" src="${basePath}js/common/dateutil.js"></script>
	</head>
	
<!--	<script type="text/javascript">-->
<!--		function onssss(){-->
<!--			alert(1);-->
<!--		}-->
<!--	</script>-->
	<body>
	
		<div style="width: 100%;" id="cont_box">
		<div class="main">
		<div class="mon_cont">
			<div class="E_Tit">登录日志</div>
			<table border="0" cellspacing="0" cellpadding="0" class="que_tab" >
				<tr>
					<!--<td width="80" align="right">开始时间：</td>
					<td width="150" align="left">
						<input type="text" id="startDate" name="startDate" class="mon_ser_text" onFocus="this.blur()" readonly="readonly"/>
						<img src="Images/time.jpg" width="20" height="23" style="margin-left:2px;"
							onClick="WdatePicker({firstDayOfWeek:1,isShowWeek:true,el:document.getElementById('startDate'),dateFmt:'yyyy-MM-dd',maxDate:'%y-%M-%d'})"/>
					</td>
					<td width="80" align="right">结束时间：</td>
					<td width="150" align="left">
						<input type="text" id="endDate" name="endDate" class="mon_ser_text" onFocus="this.blur()" readonly="readonly"/>
						<img src="Images/time.jpg" width="20" height="23" style="margin-left:2px;"
							onClick="WdatePicker({firstDayOfWeek:1,isShowWeek:true,el:document.getElementById('endDate'),dateFmt:'yyyy-MM-dd',maxDate:'%y-%M-%d'})"/>
					</td>
					-->
					<td width="80" align="right">用户名：</td>
					<td width="150" align="left">
						<input type="text" id="loginName" name="loginName" class="mon_ser_text" style="width: 130;"
							maxlength="30"
							onchange="value=value.replace(/[^0-9a-zA-Z\u4e00-\u9fa5]/g,'')" 
			                onbeforepaste="clipboardData.setData('text',clipboardData.getData('text').replace(/[^0-9a-zA-Z\u4e00-\u9fa5]/g,''))"/>
					</td>
					
					<td width="80" align="right">开始时间：</td>
	                 <td width="170" align="left">
	                 <input id="startDate" name="startDate" type="text" class="mon_ser_text" style="width:130px" onFocus="this.blur()" readonly="readonly" value="<%=DateFormatUtils.format(new Date(new Date().getYear(),new Date().getMonth(),new Date().getDate()), "yyyy-MM-dd HH:mm:ss") %>"/>
	                 <img src="Images/time.jpg" width="20" height="23" style="margin-left:2px;"
								onClick="WdatePicker({firstDayOfWeek:1,isShowWeek:true,el:document.getElementById('startDate'),dateFmt:'yyyy-MM-dd HH:mm:ss',maxDate:'%y-%M-%d'})"/>
	                 
	                 </td>
	                <td width="80" align="right">结束时间：</td>
	                <td width="170" align="left">
	                <input type="text" id="endDate" name="endDate" onFocus="this.blur()" style="width:130px" class="mon_ser_text"  readonly="readonly" value="<%=DateFormatUtils.format(new Date(), "yyyy-MM-dd HH:mm:ss") %>"/>
							   <img src="Images/time.jpg" width="20" height="23" style="margin-left:2px;"
									onclick="WdatePicker({firstDayOfWeek:1,isShowWeek:true,el:document.getElementById('endDate'),dateFmt:'yyyy-MM-dd HH:mm:ss',minDate:'#F{$dp.$D(\'startDate\')}'})"/>
	                </td>
	                
					
					<td width="150" >
						<a id="searchBtn" href="javascript:void(0)" class="ser_btn" style="color: white;">查询</a>
					    <a id="exportBtn" href="javascript:void(0)" class="ser_btn" style="color: white;">导出</a>
					</td>
				</tr>
			</table>
			
			<table id="loginDataLog" style="display: none"></table>
		</div>
		</div>
		</div>
	</body>
</html>
