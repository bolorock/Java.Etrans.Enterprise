<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ include file="/common/validateHead.jsp"%>
<%@taglib prefix="auth"  uri="/auth-tags"  %>

<html>
<head>

<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>道路运输车辆卫星定位监管平台-广州亿程交通信息有限公司</title>

<script type="text/javascript" src="${basePath}js/analyse/base3.js"></script>
<script type="text/javascript" src="${basePath}js/analyse/analyseRoadSpeed.js"></script>
<script type="text/javascript" src="${basePath}js/datepicker/WdatePicker.js"></script>


</head>

<body>
<div style="width: 100%" id="cont_box">
	<div class="main">
		<div class="mon_cont">
			<div class="E_Tit">路段速度报警设置</div>
				<table border="0" cellspacing="0" cellpadding="0" class="que_tab">
		           <tr>
		                <td width="50" align="right">名称:</td>
		                <td width="150" align="left">
		                	<input id="whereName" name="name" type="text" class="mon_ser_text" style="width: 130;"
		                		maxlength="50" 
				                onchange="value=value.replace(/[^0-9a-zA-Z\u4e00-\u9fa5]/g,'')" 
				                onbeforepaste="clipboardData.setData('text',clipboardData.getData('text').replace(/[^0-9a-zA-Z\u4e00-\u9fa5]/g,''))" /></td>
		                <td width="100">
		                	<a id="searchBtn" href="javascript:void(0)" class="ser_btn" style="color: white;">查询</a>
		                	<a id="createBtn" href="javascript:void(0)" class="ser_btn" style="color: white;">新增</a>
		                </td>
		                <td></td>
		           </tr>
		           </table>
        	
        	 <!-- 新增 或者编辑-->
      		<div id="editWindow" class="wDiv" style="display:none;border: 1px solid #d0d0d0;width: 100%;height:300px;overflow-y:auto;">
      			<div class="td_title" id="titleInfo">编辑设置</div>
      			<input type="hidden" name="id" id="id"/>
				<table width="100%" border="0" cellspacing="0" cellpadding="0" style="margin:10px 0; font-size:12px;">
				   <!--第一行-->
				   <tr>
				      <td align="right"><span class="xin_red">*</span>名称：</td>
				      <td width="200">
				       	<input type="text" name="name" id="name" class="td_input" maxlength="20"
				      			formCheck="true"
				      			required="true" requiredError="必须输入项"  
				      			textLength="1-40" valLengthError="长度必须在40个字符内" 
				      			ajaxAction="analyse/checkName4Form.action?tableName=ANA_AnalyserRoadSpeed" 
								ajaxDataId="id">
								<span id="namespan" class="errorMsg" style="display: none"></span>
				      </td>
				      <td align="right" class="td_te"><span class="xin_red">*</span>轨迹分析组：</td> 
				      <td >
				       		<select id="analyseGroupID" name="analyseGroupID" class="td_sel" formCheck="true" required="true" noselect="true" requiredError="请选择一项"> </select>
			 	            <span id="analyseGroupIDspan" class="errorMsg" style="display: none"></span>
			 	            </td>
				      <td rowspan="10" align="center"  width="200">
				            
				          <a id="submitBtn" href="javascript:void(0)" class="ser_btn" style="margin-bottom: 3px;">提交</a><br/>
<!--				          <a id="reSetBtn" href="javascript:void(0)" class="ser_btn" style="margin-bottom: 3px;">重置</a><br/>-->
				          <a id="cancelBtn" href="javascript:void(0)" class="ser_btn">取消</a>
					</td>
				  </tr>
				<!--第二行-->
				 <tr>
			 	  <td align="right" class="td_te"> <span class="xin_red">*</span>是否报警 ：</td>
			 	    <td><select id="isAlert" class="td_sel" name="isAlert" > </select></td>
			       <td align="right" class="td_te"> <span class="xin_red">*</span>速度(KM/H) ：</td>
			       <td><input type="text" name="bounceSpeed" id="bounceSpeed" class="td_input" maxlength="8"
				      			formCheck="true"
				      			required="true" requiredError="必须输入项"  
				      			integer="true" integerError="请输入有效整数!"
								>
					  <span id="bounceSpeedspan" class="errorMsg" style="display: none"></span>
			      </td>
			      
				 </tr>
				<!--第三行-->
			    <tr>
			      <td align="right" class="td_te"><span class="xin_red">*</span>检测类型   ：</td>
			      <td>
					<%--检测类型改变时调用公共方法【参数解释在initSelects.js文件的dateTypeIDSelOnchange_TA方法头部】--%>
			      	<select id="checkTimeTypeId" class="td_sel" name="checkTimeTypeId" onchange="dateTypeIDSelOnchange_TA('checkTimeTypeId','checkTimeValue','checkTimeBegin','checkTimeBegin_go','checkTimeEnd','checkTimeEnd_go');">
			    	</select>
			      </td>
			      <td align="right" class="td_te"><span class="xin_red">*</span>检测日期  ：</td>
			      <td>
			      	<select id="checkTimeValue" class="td_sel" name="checkTimeValue" >
			    	</select>
			      </td>
			     </tr>
			    <!--第四行-->
			    <tr>
			      <td align="right" class="td_te"><span class="xin_red">*</span>检测开始时间   ：</td>
			      <td>
			    	<input type="text" id="checkTimeBegin"  name="checkTimeBegin" onFocus="this.blur()" readonly="readonly"  style="border:1px solid #CCC;"/>
								<img id="checkTimeBegin_go" src="Images/time.jpg" width="20" height="23" style="margin-left:2px;" 
									onClick="WdatePicker({isShowClear:false,firstDayOfWeek:1,isShowWeek:true,el:document.getElementById('checkTimeBegin'),dateFmt:'HH:mm:ss'})"/>
			      </td>
			      <td align="right" class="td_te"><span class="xin_red">*</span>检测结束时间  ：</td>
			      <td>
			    	<input type="text" id="checkTimeEnd"  name="checkTimeEnd" onFocus="this.blur()" readonly="readonly" style="border:1px solid #CCC;"/>
								<img id="checkTimeEnd_go" src="Images/time.jpg" width="20" height="23" style="margin-left:2px;"
									onClick="WdatePicker({isShowClear:false,firstDayOfWeek:1,isShowWeek:true,el:document.getElementById('checkTimeEnd'),dateFmt:'HH:mm:ss'})"/>
			      </td>
			     </tr>
			     
				 <tr>
			 	  <td align="right" class="td_te"> <span class="xin_red">*</span>检测路段 ：</td>
			 	    <td><select id="roadSegmentID" class="td_sel" name="roadSegmentID" formCheck="true" required="true" noselect="true" requiredError="请选择一项"> </select>
			 	            <span id="roadSegmentIDspan" class="errorMsg" style="display: none"></span>
			 	    
			 	    </td>
			 	    <td align="right" class="td_te"> <span class="xin_red">*</span>检测方式 ：</td>
			 	    <td><select id="isMoreThan" class="td_sel" name="isMoreThan" > </select></td>
				 </tr>
			     
				 
				</table>
			</div>
          <div><table id="recordList" style="display: none"></table></div> 
    </div>
</div>
</div>

<div id="dialogs"  class="hiddiv" style="display: none;padding:5px;top:10px;">
		<iframe src="" id="dialogFrame" name="dialogFrame" width="100%"  height="100%" frameborder="0" scrolling="auto"></iframe>
</div>

</body>
</html>
