<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ include file="/common/validateHead.jsp"%>
<%@taglib prefix="auth"  uri="/auth-tags"  %>

<html>
<head>

<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>道路运输车辆卫星定位监管平台-广州亿程交通信息有限公司</title>

<script type="text/javascript" src="${basePath}js/analyse/base2.js"></script>
<script type="text/javascript" src="${basePath}js/analyse/analyserOverSpeedPoly.js"></script>


</head>

<body>
<div style="width: 100%" id="cont_box">
	<div class="main">
		<div class="mon_cont">
			<div class="E_Tit">区域弯道超速报警设置</div>
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
				<table width="100%" border="0" cellspacing="0" cellpadding="0" style="margin:10px 0; font-size:12px;">
				   <!--第一行-->
				   <tr>
				      <td align="right"><span class="xin_red">*</span>名称：</td>
				      <td width="200">
				       	<input type="text" name="name" id="name" class="td_input" maxlength="20"
				      			formCheck="true"
				      			required="true" requiredError="必须输入项"  
				      			textLength="1-20" valLengthError="长度必须在20个字符内" 
				      			ajaxAction="analyse/checkOverSpeedPolyByName.action" 
								ajaxDataId="id">
								<span id="namespan" class="errorMsg" style="display: none"></span>
				      </td>
				      <td align="right" class="td_te"><span class="xin_red">*</span>轨迹分析组：</td> 
				      <td >
				       		<select id="analyseGroupID" name="analyseGroupID" class="td_sel"formCheck="true" required="true" noselect="true" requiredError="请选择一项"> </select>
			 	            <span id="analyseGroupIDspan" class="errorMsg" style="display: none"></span>
			 	            </td>
				      <td rowspan="10" align="center"  width="200">
				          <input type="hidden" name="id" id="id"/>
				          <a id="submitBtn" href="javascript:void(0)" class="ser_btn" style="margin-bottom: 3px;">提交</a><br/>
				          <a id="cancelBtn" href="javascript:void(0)" class="ser_btn">取消</a>
					</td>
				  </tr>
		
			    <tr>
			      <td align="right" class="td_te"><span class="xin_red">*</span>区域超速速度门限   ：</td>
			      <td>
					 	<input type="text" name="roundSpeedMax" id="roundSpeedMax" class="td_input" maxlength="8"
				      			formCheck="true"
				      			required="true" requiredError="必须输入项"  
				      			integer="true" integerError="请输入有效整数!"
				      			textLength="1-8" valLengthError="长度为8位" 
								>
								<span id="roundSpeedMaxspan" class="errorMsg" style="display: none"></span>
		
			      </td>
			      <td align="right" class="td_te"><span class="xin_red">*</span>区域超速提醒距离  ：</td>
			      <td>
			      		<input type="text" name="warningDistance" id="warningDistance" class="td_input" maxlength="8"
				      			formCheck="true"
				      			required="true" requiredError="必须输入项"  
				      			integer="true" integerError="请输入有效整数!"
				      			textLength="1-8" valLengthError="长度为8位" 
								>
								<span id="warningDistancespan" class="errorMsg" style="display: none"></span>
		
			      </td>
			     </tr>
			   
			 
			       <tr>
			      <td align="right" class="td_te"><span class="xin_red">*</span>连续超速的点个数   ：</td>
			      <td>
					 	<input type="text" name="continuousPoints" id="continuousPoints" class="td_input" maxlength="8"
				      			formCheck="true"
				      			required="true" requiredError="必须输入项"  
				      			integer="true" integerError="请输入有效整数!"
				      			textLength="1-8" valLengthError="长度为8位" 
								>
								<span id="continuousPointsspan" class="errorMsg" style="display: none"></span>
		
			      </td>
			      <td align="right" class="td_te"><span class="xin_red">*</span>预警间隔(分)  ：</td>
			      <td>
			      		<input type="text" name="waringTimeOut" id="waringTimeOut" class="td_input" maxlength="8"
				      			formCheck="true"
				      			required="true" requiredError="必须输入项"  
				      			integer="true" integerError="请输入有效整数!"
				      			textLength="1-8" valLengthError="长度为8位" 
								>
								<span id="waringTimeOutspan" class="errorMsg" style="display: none"></span>
		
			      </td>
			     </tr>
			     
			       <tr>
					 <td align="right" class="td_te"><span class="xin_red">*</span>区域 ：</td>
				       <td width="200">
				         <select id="polyID" class="td_sel" name="polyID"formCheck="true" required="true" noselect="true" requiredError="请选择一项"> </select>
			 	          <span id="polyIDspan" class="errorMsg" style="display: none"></span>
			 	          </td>
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
