<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ include file="/common/validateHead.jsp"%>
<%@taglib prefix="auth"  uri="/auth-tags"  %>

<!--[if IE 8]>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<![endif]--> 
<html>
	<head>
		<title>自动报警督办配置</title>
		<script type="text/javascript" src="<%=basePath%>js/sys/alarmOverSeeingConfig/alarmOverSeeingConfigList.js"></script>
		
	</head>

	<body>
	
		<div style="width: 100%" id="cont_box">
		 <div class="main">
	  	<div class="mon_cont">
			<div class="E_Tit">自动报警督办配置</div>
			<div id="editWindow" class="wDiv" style="width:100%;display: none;border: 1px solid #d0d0d0;">
			<form id="addForm" method="post" action="">
				<div class="td_title">自动报警督办配置信息编辑</div>
				<table width="100%">
					<tr>
						<td align="right">报督办级别：</td>
						<td align="left">
							  <select  class="mon_ser_text" id="alarmLeve" name="alarmLeve" style="width: 200px">
								 </select>
						</td>
						<td align="right">报警未处理时间长(分钟):</td>
						<td align="left">
						 <input name="promiseTime" id="promiseTime"  class="mon_ser_text" style="width: 200px"
				      	formCheck="true" 
								required="true"  requiredError="报警未处理时间长不能为空！" 
								onlyNumber="true"  />
				      <span id="promiseTimespan" class="errorMsg" style="display: none"></span>
						</td>
						
						<td rowspan="10" align="center" width="200">
							<a id="submitBtn" href="javascript:void(0)" class="ser_btn" style="margin-bottom: 3px;">提交</a>
							<br>
							<a id="cancelBtn" href="javascript:void(0)" class="ser_btn">取消</a>
						</td>
						
					</tr>
				</table>
					</form>
			</div>
					<div class="sys_ctr" style="margin-right: 1px;">
            	<ul>
            	<auth:authorize operation="addAlarmOverSeeingConfig">
                	<li><a id="createBtn" href="javascript:void(0)">新增</a></li>
              </auth:authorize>
              <auth:authorize operation="delAlarmOverSeeingConfig">
                  <li><a id="deleteBtn" href="javascript:void(0)">删除</a></li>
              </auth:authorize>
                </ul>
            </div>
			   
			<table id="alarmOverSeeingConfingList" style="display: none"></table>
		</div>
  </div>
  </div>
	</body>
</html>
