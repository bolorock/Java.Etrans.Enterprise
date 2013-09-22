<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ include file="/common/validateHead.jsp"%>
<%@taglib prefix="auth"  uri="/auth-tags"  %>

<html>
<head>

<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>道路运输车辆卫星定位企业平台-广州亿程交通信息有限公司</title>

<script type="text/javascript" src="${basePath}js/sys/platForm/platFormManage.js"></script>


</head>

<body>
<div style="width: 100%" id="cont_box">
	<div class="main">
		<div class="mon_cont">
			<div class="E_Tit">平台信息管理</div>
				<table border="0" cellspacing="0" cellpadding="0" class="que_tab">
		           <tr>
		                <td width="80" align="right">平台名称:</td>
		                <td width="150" align="left">
		                	<input id="whereName" name="name" type="text" class="mon_ser_text" style="width: 130;"
		                		maxlength="30" 
				                onchange="value=value.replace(/[^0-9a-zA-Z\u4e00-\u9fa5]/g,'')" 
				                onbeforepaste="clipboardData.setData('text',clipboardData.getData('text').replace(/[^0-9a-zA-Z\u4e00-\u9fa5]/g,''))" /></td>
		                <td width="80" align="right">登陆帐号:</td>
		                <td width="150" align="left">
		                	<input id="whereAccountName" name="accountName" type="text" class="mon_ser_text" style="width: 130;"
                				maxlength="30" 
				                onchange="value=value.replace(/[^0-9a-zA-Z\u4e00-\u9fa5]/g,'')" 
				                onbeforepaste="clipboardData.setData('text',clipboardData.getData('text').replace(/[^0-9a-zA-Z\u4e00-\u9fa5]/g,''))" /></td>
		                <td width="80" align="right">密码:</td>
		                <td width="150"  align="left">
		                	<input id="whereAccountPassword" name="accountPassword" type="text" class="mon_ser_text" style="width: 130;"
		                		maxlength="10" 
				                onchange="value=value.replace(/[^0-9a-zA-Z]/g,'')" 
				                onbeforepaste="clipboardData.setData('text',clipboardData.getData('text').replace(/[^0-9a-zA-Z]/g,''))" /></td>
		                <td width="200">
		                	<a id="searchBtn" href="javascript:void(0)" class="ser_btn" style="color: white;">查询</a>
			                <a href="javascript:void(0)" id="adSearchBtn" style="margin-left:8px;">高级搜索</a></td>
		                <td></td>
		           </tr>
		           </table>
		           
			<div id="gao_ser" style="display: none;">
				<table border="0" cellspacing="0" cellpadding="0" style="margin-bottom: 10px;">			
		           <tr>
		                <td width="80" align="right">从链路IP地址:</td>
		                <td width="150"  align="left"><input id="whereSubIP" name="subIP" type="text" class="mon_ser_text" maxlength="32" style="width: 130;"
		                		onchange="value=value.replace(/[^0-9a-zA-Z\u4e00-\u9fa5]/g,'')" 
				                onbeforepaste="clipboardData.setData('text',clipboardData.getData('text').replace(/[^0-9]/g,''))" /></td>
		                <td width="80" align="right">从链路端口:</td>
		                <td width="150"  align="left">
		                	<input id="whereSubPort" name="subPort" type="text" class="mon_ser_text" maxlength="8"  style="width: 130;"
				                onchange="value=value.replace(/[^0-9]/g,'')" 
				                onbeforepaste="clipboardData.setData('text',clipboardData.getData('text').replace(/[^0-9]/g,''))" /></td>
		                <td>&nbsp;</td>
		           </tr>
               </table>
        	</div>
        	
      		<div id="editWindow" class="wDiv" style="display:none;border: 1px solid #d0d0d0;width: 100%;height:300px;overflow-y:auto;">
      			<div class="td_title" id="titleInfo">平台信息编辑</div>
				<table width="100%" border="0" cellspacing="0" cellpadding="0" style="margin:10px 0; font-size:12px;">
				   <tr>
				      <td width="160" align="right" class="td_te">所属区域：</td> 
				      <td width="200">
				       		<select id="selArea" name="areaID" class="td_sel"></select>
				      </td>
				      <td width="160" align="right">所属机构：</td>
				      <td width="200">
				       	<select id="selOrganationID" name="organzationID"  class="td_sel"></select>
				      </td>
				      <td rowspan="10" align="center"  width="200">
				       		<input type="hidden" name="checkState" id="checkState" value="1"/>
				       		<input type="hidden" name="fatherId" id="fatherId" value="0"/>
				       		<input type="hidden" name="isOnline" id="isOnline" value="0"/>
				       		<input type="hidden" name="level" id="level" value="0"/>
				            <input type="hidden" name="id" id="id"/>
				          <a id="submitBtn" href="javascript:void(0)" class="ser_btn" style="margin-bottom: 3px;">提交</a><br/>
				          <a id="reSetBtn" href="javascript:void(0)" class="ser_btn" style="margin-bottom: 3px;">重置</a><br/>
				          <a id="cancelBtn" href="javascript:void(0)" class="ser_btn">取消</a>
					</td>
				  </tr>
				    <tr>
				      <td align="right" class="td_te"><span class="xin_red">*</span>平台接入码：</td>
				      <td><input type="text" name="gnssCenterID" id="gnssCenterID" class="td_input" maxlength="20"
				      			formCheck="true"
				      			required="true" requiredError="必须输入项"  
								integer="true"
								ajaxAction="sys/checkPlatFormByGnssCenterID.action" 
								ajaxDataId="id" 
								ajaxActionError="已存在此平台接入码，请重新输入！">
								<span id="gnssCenterIDspan" class="errorMsg" style="display: none"></span></td>
				      <td align="right"><span class="xin_red">*</span>登陆帐号：</td>
				      <td><input type="text" name="accountName" id="accountName" class="td_input"  maxlength="40"
				      			formCheck="true" 
				      			required="true" requiredError="必须输入项" 
								noSpecialCaracters="true"
								ajaxAction="sys/checkPlatFormByAccountID.action"
								ajaxDataId="id" 
								ajaxActionError="已存在此登陆帐号，请重新输入！">
								<span id="accountNamespan" class="errorMsg" style="display: none"></span></td>
				     </tr>
				    <tr>
				      <td align="right" class="td_te"><span class="xin_red">*</span>平台名称：</td>
				      <td><input type="text"  name="name" id="name"  class="td_input" maxlength="50"
				      			formCheck="true" 
				      			required="true" requiredError="必须输入项" 
								noSpecialCaracters="true"
								ajaxAction="sys/checkPlatFormByName.action" 
								ajaxDataId="id" 
								ajaxActionError="已存在此平台名称，请重新输入！">
								<span id="namespan" class="errorMsg" style="display: none"></span></td>
				     <td align="right" class="td_te">平台间报文是否加密：</td>
				      <td>
					      <select id="encryptFlag" name="encryptFlag"  class="td_sel"></select>
				      </td>
				    </tr>
				     <tr>
				      <td align="right"><span class="xin_red">*</span>登陆密码：</td>
				      <td><input type="password" name="accountPassword" id="accountPassword"  class="td_input" maxlength="10"
								formCheck="true" 
								required="true" requiredError="必须输入项" 
							    extLength="6-10" valLengthError="长度必须在6到10个" />
								<span id="accountPasswordspan" class="errorMsg" style="display: none"></span>
				      </td>
				      <td align="right" class="td_te">确认密码：</td>
				      <td><input type="password" name="repassword" id="repassword"  class="td_input" maxlength="10" 
				      		formCheck="true" 
							required="true" requiredError="必须输入项" 
							confirmpwd="accountPassword" confirmpwd="两次密码输入不一致！">
						<span id="repasswordspan" class="errorMsg" style="display: none"></span></td>
				    </tr>
				    <tr>
				      <td align="right" class="td_te"><span class="xin_red">*</span>从链路服务端IP地址：</td>
				      <td><input name="subIP" id="subIP"  class="td_input" maxlength="30"
				      			required="true" requiredError="必须输入项" 
				      			formCheck="true" />
								<span id="subIPspan" class="errorMsg" style="display: none"></span></td>
				      <td align="right"><span class="xin_red">*</span>从链路服务端端口：</td>
				      <td><input name="subPort"  id="subPort"  class="td_input" maxlength="5"
				      			required="true" requiredError="必须输入项" 
				      			formCheck="true" 
								integer="true"/>
								<span id="subPortspan" class="errorMsg" style="display: none"></span></td>
				    </tr>
				    <tr>
				      <td align="right" class="td_te">主链路客户端IP地址：</td>
				      <td><input name="mainIP" id="mainIP"  class="td_input" maxlength="30"
				      			formCheck="true"/>
								<span id="mainIPspan" class="errorMsg" style="display: none"></span></td>
				      <td align="right">主链路客户端端口：</td>
				      <td><input name="mainPort" id="mainPort"  class="td_input" maxlength="5"
				      			formCheck="true" 
								integer="true"/>
								<span id="mainPortspan" class="errorMsg" style="display: none"></span></td>
				    </tr>
				    <tr>
				       <td align="right" class="td_te"><span class="xin_red">*</span>运营许可证：</td>
				       <td><input type="text"  name="licenseNo" id="licenseNo"  class="td_input" maxlength="50"
				      			formCheck="true" 
				      			required="true" requiredError="必须输入项" 
								noSpecialCaracters="true"/>
								<span id="licenseNospan" class="errorMsg" style="display: none"></span></td>
				      <td align="right">下级平台接入运行标志：</td>
				      <td>
					      <select id="runFlag" name="runFlag"   class="td_sel"></select>
				      </td>
				    </tr>
				      <tr>
				      <td align="right" class="td_te">联系人：</td>
				      <td><input name="contactPerson" id="contactPerson" class="td_input" maxlength="20"
				      			formCheck="true" 
								noSpecialCaracters="true"/>
								<span id="contactPersonspan" class="errorMsg" style="display: none"></span></td>
				      <td align="right">联系电话：</td>
				      <td><input name="contactTelephone" id="contactTelephone"  class="td_input" maxlength="20"
				      			formCheck="true" 
								phone="true"/>
								<span id="contactTelephonespan" class="errorMsg" style="display: none"></span></td>
				    </tr>
				    <tr>
				      <td align="right" class="td_te">软件开发单位：</td>
				      <td><input name="softwareUnit" id="softwareUnit"  class="td_input" maxlength="100"
				      			formCheck="true" 
								noSpecialCaracters="true"/>
								<span id="softwareUnitspan" class="errorMsg" style="display: none"></span></td>
				      <td align="right">技术单位支持：</td>
				      <td><input name="technicalUnitsSupport" id="technicalUnitsSupport"  class="td_input" maxlength="100"
								formCheck="true" 
								noSpecialCaracters="true"/>
								<span id="technicalUnitsSupportespan" class="errorMsg" style="display: none"></span></td>
				    </tr>
				    <tr>
				      <td align="right" class="td_te">密钥M1：</td>
				      <td><input name="keyM1" id="keyM1"  class="td_input" maxlength="10"
				      			formCheck="true" 
								integer="true"/>
								<span id="keyM1span" class="errorMsg" style="display: none"></span></td>
				      <td align="right">密钥IA1：</td>
				      <td><input name="keyIA1" id="keyIA1"  class="td_input" maxlength="10"
				      			formCheck="true" 
								integer="true"/>
								<span id="keyIA1espan" class="errorMsg" style="display: none"></span></td>
				    </tr>
				    <tr>
				      <td align="right" class="td_te">密钥IC1：</td>
				      <td><input name="keyIC1" id="keyIC1"  class="td_input" maxlength="10"
				      			formCheck="true" 
								integer="true"/>
								<span id="keyIC1span" class="errorMsg" style="display: none"></span></td>
				      <td align="right"></td>
				      <td></td>
				    </tr>
				</table>
			</div>
			<div class="sys_ctr" style="margin-right: 1px;">
            	<ul>
            		<auth:authorize operation="createPlatForm">
            			<li><a id="createBtn" href="javascript:void(0)">新增</a></li>
            		</auth:authorize>
            		<auth:authorize operation="updatePlatForm">
            			<li><a id="editBtn" href="javascript:void(0)">编辑</a></li>
            		</auth:authorize>
            		<auth:authorize operation="deletePlatForm">
            			<li><a id="deleteBtn" href="javascript:void(0)">删除</a></li>
            		</auth:authorize>
            		<auth:authorize operation="exportPlatForm">
            			<li><a id="exportBtn" href="javascript:void(0)">导出</a></li>
            		</auth:authorize>
                </ul>
            </div>
           
          <div><table id="platFormList" style="display: none"></table></div> 
    </div>
</div>
</div>


</body>
</html>
