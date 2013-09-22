<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ include file="/common/validateHead.jsp"%>
<%@taglib prefix="auth"  uri="/auth-tags"  %>
<%@page import="com.etrans.bubiao.sys.UserContext" %>
<%
//是否是超级管理员
boolean isRoot = UserContext.isBsRootUser();
//是否是企业管理员
//boolean isUnitAdmin = UserContext.isSuperUser();
//是否是企业管理员
SessionUser user2 = UserContext.getLoginUser();
boolean isUnitAdmin =user2.isWorkUnitSuperAdmin();
%>

<html>
<head>
<script type="text/javascript">
     var isBsRoot = <%=isRoot%>;
     var isBsUnitAdmin=<%=isUnitAdmin%>
</script> 

<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>道路运输车辆卫星定位企业平台-广州亿程交通信息有限公司</title>

<script type="text/javascript" src="${basePath}js/easyui/plugins/jquery.tree.js"></script>
<script type="text/javascript" src="${basePath }js/sys/workUnitManage.js"></script>
<script type="text/javascript"	src="${basePath}js/sys/tree/treeWorkUnitQuery.js"></script>	
<script type="text/javascript"	src="${basePath}js/sys/tree/vehicleTree.js"></script>

</head>

<body>
<div style="width: 100%" id="cont_box">
	<div class="main">
		<div class="mon_cont">
        	<div class="E_Tit">企业信息管理</div>
        <table style="width: 100%;">
        	<tr>
        	<!-- 左边树begin -->
        	<td width="15%" style="vertical-align: top;border: 1px solid #1D82D2; border-collapse: collapse;padding: 5px 10px;">
<%--						<div align="left" style="height:325px; margin-top: 10px;OVERFLOW-Y:auto;OVERFLOW-X:hidden;">--%>
						<div style= "overflow-x:auto;overflow-y:auto;height:400px;width:200px;white-space:nowrap;}">
							<div align="left" style="height:400px;overflow-y:auto;overflow-x:auto;">
								<ul id="workUnitMenulist">
								</ul>
							</div>
						</div>
			</td>
        	<!-- 左边树end -->
        	<td>
        	<div id="adSearch" style="width: 100%">
        		<!-- 条件查询 -->
        	<table border="0" cellspacing="0" cellpadding="0" class="que_tab">
		           <tr>
		                <td width="80" align="right">企业名称:</td>
		                <td width="2px"></td>
		                <td width="150" align="left">
		                <input  id="workUnitNameParam" ondblclick="showWorkUnitQueryTree()" class="mon_ser_text" style="width: 130;" 
		                    name="workUnitName" class="td_sel"
		                    onchange="value=value.replace(/[^0-9a-zA-Z\(\)（）\u4e00-\u9fa5]/g,'')"
			                onbeforepaste="clipboardData.setData('text',clipboardData.getData('text').replace(/[^0-9a-zA-Z\(\)（）\u4e00-\u9fa5]/g,''))"></input>
			                </td>
		                <td width="30px"></td>
		                <td style="text-align:left;"><a id="searchBtn" href="javascript:void(0)" class="ser_btn" style="color: white;">查询</a></td>
		           		<auth:authorize operation="workUnitManage_export">
		           		<td width="10px"></td>
		           		<td style="text-align:count;"><a id="exportBtn" href="javascript:void(0)" class="ser_btn" style="color: white;">导出</a></td>
		           		</auth:authorize>
		           		<%if(isRoot){%>
		           		<td width="10px"></td>
		           		<td style="text-align:count;"><a id="createBtn" href="javascript:void(0)" class="ser_btn" style="color: white;">新增</a></td>
		           		<%}%>
		           		
		           		<td width="10px"></td>
		           		<td style="text-align:count;"><a id="reBegin" href="javascript:void(0)" class="ser_btn" style="color: white;">顶级</a></td>
		           </tr>
             </table>
             </div>
      									<!-- 新增、编辑 操作begin-->
<%--      		<div id="editWindow" class="wDiv" style="display:none;border: 1px solid #d0d0d0;width: 100%;overflow-y:scroll;">--%>
      		<div id="editWindow" class="wDiv" style="width:100%;display: none;border: 1px solid #d0d0d0;height:300px;overflow-y:scroll;">
<!--     		<div id="editWindow" class="wDiv" style="display:none;border: 1px solid #d0d0d0;width: 100%;height:300px;overflow-y:auto;">-->
      			<div class="td_title" id="titleInfo">企业信息编辑</div>
      			<table align="center">
				    <tr>
				      <td align="right" class="td_te"><span class="redStar">*</span>企业名称 ：</td>
				      <td>
				     	 <input type="text" name="Name" id="Name"  class="td_input" maxlength="20"
				     	 		formCheck="true" 
				     	 		onchange="value=value.replace(/[^0-9a-zA-Z\(\)（）\u4e00-\u9fa5]/g,'')"
			                    onbeforepaste="clipboardData.setData('text',clipboardData.getData('text').replace(/[^0-9a-zA-Z\(\)（）\u4e00-\u9fa5]/g,''))"
				     	 		required="true" requiredError="必须输入项"
								
								ajaxAction="sys/checkWorkUnitByName.action"
								ajaxDataId="id"
								ajaxActionError="已存在此企业名称，请重新输入！">
								<span id="Namespan" class="errorMsg" style="display: none"></span></td>
						<td align="right" class="td_te">企业代码 ：</td>
				      	<td><input type="text" name="Code" id="code"  class="td_input" maxlength="20"/></td>
				      
				      <td rowspan="10" align="center" >
				      	  <input type="hidden" name="ID" id="id"/>
				    	  <a id="submitBtn" href="javascript:void(0)" class="ser_btn" style="margin-bottom: 3px;">提交</a><br/>
				          <a id="reSetBtn" href="javascript:void(0)" class="ser_btn" style="margin-bottom: 3px;">重置</a><br/>
				          <a id="cancelBtn" href="javascript:void(0)" class="ser_btn">取消</a>
					</td>
				   	 </tr>
				   	  <tr>
				      	
					      <td align="right">企业简称 ：</td>
					     <td><input type="text" name="ShortName" id="shortName"  class="td_input"   maxlength="25"/>
								</td>
				      	<td  align="right"><span class="redStar">*</span>所属区域 ：</td>
							<td align="left" width="240">
						      <input type="text" id="areaName"   name="AreaName" 
							   class="td_input"
							   required="true" formCheck="true" requiredError="请选择一项"
							   readonly="readonly"/> 
				      		    <input type="hidden" id="areaId" />
				      		    <span id="areaNamespan" class="errorMsg" style="display: none"></span>
				      		    <a  href="javascript:void(0)" onclick="showAreaTree()"   class="ser_btn">请选择</a>
							</td>
				 	 </tr>
				   	 <tr>
				      <td align="right" class="td_te">单位注册地 ：</td>
				      <td><input type="text" name="RegAddress" id="regAddress"  class="td_input" maxlength="45"/>
								</td>
				      <td align="right">联系人 ： </td>
				      <td><input type="text" name="LinkMan"  id="linkMan"  class="td_input"   maxlength="20"/>
								</td>
				   	 </tr>
			  	  	 <tr>
				      <td align="right" class="td_te">联系电话 ： </td>
				      <td><input type="text" name="PhoneNO" id="phoneNO"  class="td_input"  maxlength="20"
				      			/>
								<span id="phoneNOspan" class="errorMsg" style="display: none"></span></td>
				      <td align="right">其他电话： </td>
				      <td><input type="text" name="BackupPhoneNO" id="backupPhoneNO"  class="td_input"  maxlength="20"
				      			/>
								<span id="backupPhoneNOspan" class="errorMsg" style="display: none"></span></td>
				   	 </tr>
				   	 <tr>
				      <td align="right" class="td_te">机构类别 ：</td>
				      <td>
				      <select id="organizationKindID" name="OrganizationKindID" class="td_sel"></select>
					  </td>
			      	 <td align="right" width="160"><span class="xin_red">*</span>行业类型：</td>
						<td align="left" width="240">
						<input type="text" id="tradeKindName"   name="TradeKindName"  
						       class="td_input"
						       required="true" formCheck="true" requiredError="请选择一项"
						        readonly="readonly"/> 
			      		    <input type="hidden" id="tradeKindId" />
			      		    <span id="tradeKindNamespan" class="errorMsg" style="display: none"></span>
			      		    <a  href="javascript:void(0)" onclick="showTradeTree()"    class="ser_btn">请选择</a>
						</td>
				 	 </tr>
				 	 <tr>
				      <td align="right" class="td_te">经营范围： </td>
				      <td><input type="text" name="BusinessScope" id="businessScope"  class="td_input"  maxlength="95"/>
								</td>
				      <td align="right">企业法人： </td>
				      <td><input type="text" name="ArtificialPerson" id="artificialPerson"  class="td_input"  maxlength="10"/>
								</td>
				   	 </tr>
				   	  <tr>
				      <td align="right" class="td_te">道路运输许可证号： </td>
				      <td><input type="text" name="LicenseNO" id="licenseNO"  class="td_input"  maxlength="20"/>
								</td>
				      <td align="right">发证机关： </td>
				      <td><input type="text" name="LicenseOrgan" id="licenseOrgan"  class="td_input"  maxlength="45"/>
								</td>
				   	 </tr>
				   	 <tr>
				      <td align="right" class="td_te">邮政编码： </td>
				      <td><input type="text" name="PostCode" id="postCode"  class="td_input"  maxlength="10"
				      			formCheck="true" 
								zipcode="true"/>
								<span id="postCodespan" class="errorMsg" style="display: none"></span></td>
				      <td align="right">车辆总数： </td>
				      <td><input type="text" name="VehicleSum" id="vehicleSum"  class="td_input"  maxlength="10"
				      			formCheck="true" 
								integer="true"/>
								<span id="vehicleSumspan" class="errorMsg" style="display: none"></span></td>
				   	 </tr>
				   	 <tr>
				   	 	<td align="right">经营许可证号 ：</td>
				   	 	<td colspan="3"><input type="text" name="BusinessLicense" id="businessLicense"  class="td_input"  maxlength="25"/></td>
				   	 </tr>
				   	  <tr>
					   <td align="right">地址 ：</td>
					   <td colspan="3">
					   		<input type="text" name="Address" id="address" style="width: 540px;border:1px solid #CCC; height:22px; line-height: 22px;"  maxlength="190"/>
								</td> 
				   	 </tr>
				 	 <tr>
					   <td align="right">备注 ：</td>
					   <td colspan="3">
					   		<input type="text" name="Memo" id="memo"  style="width: 540px;border:1px solid #CCC; height:22px; line-height: 22px;"  maxlength="190"/>
								</td>
				   	 </tr> 
				</table>
			</div>
									<!-- 新增、编辑 操作end-->
<%--			<div style="height: 4px">--%>
	   	 	</div>
	   	 <table><tr><td></td></tr></table>
		  <!-- 列表 -->
          <div><table id="workUnitList" style="display: none"></table></div>
			</td>
			</tr>
			</table>
    </div>
    </div>
    </div>
    
    <div id="dialogs" class="hiddiv" style="display: none;padding:5px;top:10px;">
			<iframe src="" id="dialogFrame" name="dialogFrame" width="100%"  height="100%" frameborder="0" scrolling="no"></iframe>
		</div>
</body>
</html>
