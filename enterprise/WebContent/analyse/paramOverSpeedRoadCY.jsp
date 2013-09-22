<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ include file="/common/validateHead.jsp"%>
<%@taglib prefix="auth"  uri="/auth-tags"  %>

<html>
<head>

<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>道路运输车辆卫星定位监管平台-广州亿程交通信息有限公司</title>

<script type="text/javascript" src="${basePath}js/analyse/base2.js"></script>
<script type="text/javascript" src="${basePath}js/analyse/paramOverSpeedRoadCY.js"></script>
<script type="text/javascript" src="${basePath}js/datepicker/WdatePicker.js"></script>


</head>

<body>
<div style="width: 100%" id="cont_box">
	<div class="main">
		<div class="mon_cont">
			<div class="E_Tit">道路超速条件(长运)</div>
				<table border="0" cellspacing="0" cellpadding="0" class="que_tab">
		           <tr>
		                <td width="80" align="right">道路类型:</td>
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
				      <td align="right"><span class="xin_red">*</span>道路类型：</td>
				      <td width="200">
				     
				       	<input type="text" name="name" id="name" class="td_input" maxlength="20"
				      			formCheck="true"
				      			required="true" requiredError="必须输入项"  
				      			textLength="1-20" valLengthError="长度必须在20个字符内" 
				      			ajaxAction="analyse/checkName4Form.action?tableName=ANA_ParamOverSpeedRoad_CY" 
								ajaxDataId="id">
								<span id="namespan" class="errorMsg" style="display: none"></span>
				      </td>
				      <td align="right" class="td_te"><span class="xin_red">*</span>所属分析器：</td> 
				      <td >
				       		<select id="analyseID" name="analyseID" class="td_sel" formCheck="true" required="true" noselect="true" requiredError="请选择一项"> </select>
			 	            <span id="analyseIDspan" class="errorMsg" style="display: none"></span>
			 	            </td>
				      <td rowspan="10" align="center"  width="200">
				            <input type="hidden" name="id" id="id"/>
				          <a id="submitBtn" href="javascript:void(0)" class="ser_btn" style="margin-bottom: 3px;">提交</a><br/>
				          <a id="cancelBtn" href="javascript:void(0)" class="ser_btn">取消</a>
					</td>
				  </tr>
				
				
			     
			    <!--第五行-->
			    <tr>
			      <td align="right" class="td_te"><span class="xin_red">*</span>速度门限(km/h) ：</td>
			      <td width="200">
			      	<input type="text" name="bounceOverSpeed" id="bounceOverSpeed" class="td_input" maxlength="8"
				      			formCheck="true"
				      			required="true" requiredError="必须输入项"  
				      			integer="true" integerError="请输入有效整数!"
				      			textLength="1-8" valLengthError="长度为8位"  
								>
								<span id="bounceOverSpeedspan" class="errorMsg" style="display: none"></span>
			      </td>
			      <td align="right" class="td_te"><span class="xin_red">*</span>时间门限(秒) ：</td>
			      <td width="200">
			      		<input type="text" name="bounceOverSpeedTime" id="bounceOverSpeedTime" class="td_input" maxlength="8"
				      			formCheck="true"
				      			integer="true" integerError="请输入有效整数!"
				      			required="true" requiredError="必须输入项"  
				      			textLength="1-8" valLengthError="长度为8位"  
								>
								<span id="bounceOverSpeedTimespan" class="errorMsg" style="display: none"></span>
			      </td>
			     </tr>
			     
			    <!--第六行-->
			    <tr>
			      <td align="right" class="td_te"><span class="xin_red">*</span>预报警速度门限(km/h) ：</td>
			      <td width="200">
			      	<input type="text" name="forewarnSpeed" id="forewarnSpeed" class="td_input" maxlength="8"
				      			formCheck="true"
				      			required="true" requiredError="必须输入项"  
				      			integer="true" integerError="请输入有效整数!"
				      			textLength="1-8" valLengthError="长度为8位"  
								>
								<span id="forewarnSpeedspan" class="errorMsg" style="display: none"></span>
			      </td>
			      <td width="200">
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
