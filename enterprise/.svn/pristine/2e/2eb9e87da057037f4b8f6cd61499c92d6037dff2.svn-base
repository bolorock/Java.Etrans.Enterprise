<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ include file="/common/validateHead.jsp"%>
<%@taglib prefix="auth"  uri="/auth-tags"  %>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
	<head>
		<title>图层管理</title><script type="text/javascript" src="${basePath}js/common/HashMap.js"></script>
		<script type="text/javascript" src="${basePath}js/sys/customMap/customMap.js"></script>
		<script type="text/javascript" src="http://api.map.baidu.com/api?v=1.4"></script>
		
		<!--加载鼠标绘制工具-->
        <script type="text/javascript" src="${basePath}js/sys/customMap/DrawingManager.js"></script>
        <link rel="stylesheet" href="http://api.map.baidu.com/library/DrawingManager/1.4/src/DrawingManager_min.css" />
	<style type="text/css">
	.my-dialog .ui-dialog-titlebar-close{
	 display: none;
	}
	
	<!--
	body{overflow:hidden;}
	.anchorBL{
	display:none;
	}
	-->
	
	body{
margin:0px;
}
#cmp{
float:left;
	width:100%;
	border: 0px solid #FF0000;
}
#cpMap{
	float:none;
	position:absolute;
	width:50%;
	height:50px;
	border: 0px solid #888;
	clear: both;
}
#CL{
float:right;
width:49%;
border: 0px solid #223;
clear: both;
}
	</style>
	</head>
	<body>
	
		<div style="width: 100%" id="cont_box">
		<div class="main">
		<div class="mon_cont">
			<div class="E_Tit">图层管理</div>
			<div id="adSearch">
		<table border="0" cellspacing="0" cellpadding="0" class="que_tab" >
              <tr>
                <td width="80" align="right">名称：</td>
                <td width="120" align="left">
                <input id="txName"  type="text" class="mon_ser_text" 
	                style="width: 130px"
	                maxlength="50"
					onchange="value=value.replace(/[^0-9a-zA-Z\u4e00-\u9fa5]/g,'')" 
	                onbeforepaste="clipboardData.setData('text',clipboardData.getData('text').replace(/[^0-9a-zA-Z\u4e00-\u9fa5]/g,''))"/>
                </td>
                <td width="80" align="right">图层类型：</td>
                <td width="120" align="left">
                    <select id=nameType  style="width:120px;"></select>
                    <input type="hidden" id="imageURL"  >
                </td>
                <td width="350">
                   
                   <a id="btnSearch" href="javascript:void(0)" class="ser_btn" style="color: white;">查询</a>&nbsp;&nbsp;
                   <auth:authorize operation="deleteEntCustomMap">
                    <a id="deleteBtn" href="javascript:void(0)" class="ser_btn" style="color: white;">删除</a> &nbsp;&nbsp;
                    </auth:authorize>
                    <!--<auth:authorize operation="getEntCustomMapPointByIdList">
                    <a id="showBtn" href="javascript:void(0)" class="ser_btn" style="color: white;">显示</a>  &nbsp;&nbsp;
                    </auth:authorize>
                     <auth:authorize operation="getEntCustomMapPointByIdList">
                     <a id="delCMPBtn" href="javascript:void(0)" class="ser_btn" style="color: white;">移除</a> 
                     </auth:authorize>
                    -->
                </td>
                </tr>
            </table>
			</div>
			
			
			<div id="editWindow" class="wDiv" style="width:100%;display: none;border: 1px solid #d0d0d0;">
				<div class="td_title" id="titleInfo">图层信息编辑</div>
				<table width="100%">
					<tr>
					   
					    <td align="right"><span class="xin_red">*</span>名称：</td>
						<td align="left">
						<input type="hidden" name="id" id="id" class="td_input" size="50"/>
						<input type="text" name="txtName" id="txtName" size="30" class="td_input"
								formCheck="true"  maxlength="11"
								required="true" requiredError="请输入名称！"
								ajaxAction="customMapPoint/checkCustomMaps.action"
								ajaxDataId="id"
								ajaxActionError="已存在此名称，请重新输入！"/>
							<span id="txtNamespan" class="errorMsg" style="display: none"></span>
						</td>
						<td align="right">图层类型：</td>
						<td align="left">
						    <input type="hidden" name="CustomType" id="CustomType" class="td_input" size="50"/>
							<input type="text" name="txtTypeNmae" id="txtTypeNmae" class="td_input" readonly="readonly" />
						</td>
						
						<td rowspan="10" align="center" width="200">
							<a id="submitBtn" href="javascript:void(0)" class="ser_btn"  style="margin-bottom: 3px;">提交</a><br/>
							<a id="cancelBtn" href="javascript:void(0)" class="ser_btn"  style="margin-bottom: 3px;">取消</a>
						</td>
						
					</tr>
					<!--<tr>
					    <td align="right"><span class="xin_red">*</span>经纬度：</td>
						<td align="left">
							<input type="text" name="LonLat" id="LonLat" class="td_input" readonly="readonly" size="50" />
						</td>
					</tr>
			   -->
			   </table>
			</div>
	
			<!-- <div>
			   <table id="tabId">
			     <tr>
			       <td width="50%">
			          <div id="cpMap"></div>
			       </td>
			       <td width="550px">
			           <table id="customMapList" style="display: none"></table>
			       </td>
			     </tr>
			   </table>
			</div> -->
			
			<div id="cmp">
				  <div id="cpMap"></div>
				  <div id="CL"> <table id="customMapList" style="display: none"></table></div>
			</div>
					
			 <div id="dialogs" class="hiddiv" style="display: none;padding:5px;top:100px;">
				<iframe src="" id="dialogFrame" name="dialogFrame" width="100%"  height="100%" frameborder="0" scrolling="auto"></iframe>
		     </div>
		
			
		</div>
	</div>
 </div>
</body>
</html>
