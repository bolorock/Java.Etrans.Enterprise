<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ include file="/common/validateHead.jsp"%>
 <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<base href="<%=basePath%>"></base>

<title>道路运输车辆卫星定位企业平台</title>

<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta http-equiv="pragma" content="no-cache">
<meta http-equiv="cache-control" content="no-cache">
<meta http-equiv="expires" content="0">

<script src="<%=basePath%>js/query/homePage.js" type="text/javascript"></script>
<script src="<%=basePath%>js/util.js" type="text/javascript"></script>
<script src="${basePath}/js/sys/user/passwrodUpdate.js" type="text/javascript" ></script>
<script  src="${basePath}/js/sys/user/formValidator.js" type="text/javascript"></script>
	<script type="text/javascript">
		function openUpdateDialog(){
			$("#updatePasswordForm").css("display", "block");
			$("#updatePasswordForm").dialog( {
				width : 500,
				height :250,
				modal:true,
				title : '修改密码'		
			});
		}
	</script>
	<link href="<%=basePath%>css/body.css" rel="stylesheet" type="text/css" />
<link rel="stylesheet" type="text/css" href="${basePath}css/style.css">
<style type="text/css">
.input {
	width: 150px;
	height: 22px;
	font-size: 12px;
	color: #000;
	line-height: 22px
}
</style>	
</head>
 <body>
 <div id="cont_box">
	<div class="main">
    	<div class="index_w">
        <div class="left M_box i_w_01"  id="tabInfo"> 
                <div class="E_Tit car_i">车辆信息汇总</div>
               	 <ul class="index_list">
                	<li>
                    	<table width="200" border="0" cellspacing="0" cellpadding="0">
                          <tr>
                            <td height="25" colspan="2" class="list_t">危险品车辆</td>
                          </tr>
                          <tr>
                            <td height="30">车辆总数:</td>
                            <td class="list_word_vehilceTotal">0</td>
                          </tr>
                          <tr>
                            <td height="30">入网车辆总数:</td>
                            <td class="list_word_inNetVehicleTotal">0</td>
                          </tr>
                          <tr>
                            <td height="30">在线车辆总数:</td>
                            <td class="list_word_onlineVehicleTotal">0</td>
                          </tr>
						</table>
                    </li>
                    
                    <li class="r_n_bor">
                    	<table width="200" border="0" cellspacing="0" cellpadding="0" style="margin-left:20px;">
                          <tr>
                            <td height="25" colspan="2" class="list_t">班线客运车辆</td>
                          </tr>
                          <tr>
                            <td height="30" width="100">车辆总数:</td>
                            <td class="list_word_vehilceTotal">0</td>
                          </tr>
                          <tr>
                            <td height="30">入网车辆总数:</td>
                            <td class="list_word_inNetVehicleTotal">0</td>
                          </tr>
                          <tr>
                            <td height="30">在线车辆总数:</td>
                            <td class="list_word_onlineVehicleTotal">0</td>
                          </tr>
						</table>
                    </li>
                    <li>
                    	<table width="200" border="0" cellspacing="0" cellpadding="0">
                          <tr>
                            <td height="25" colspan="2" class="list_t">旅游包车</td>
                          </tr>
                          <tr>
                            <td height="30">车辆总数:</td>
                            <td class="list_word_vehilceTotal">0</td>
                          </tr>
                          <tr>
                            <td height="30">入网车辆总数:</td>
                            <td class="list_word_inNetVehicleTotal">0</td>
                          </tr>
                          <tr>
                            <td height="30">在线车辆总数:</td>
                            <td class="list_word_onlineVehicleTotal">0</td>
                          </tr>
						</table>
                    </li>
                    <li class="r_n_bor">
                    	<table width="200" border="0" cellspacing="0" cellpadding="0" style="margin-left:20px;">
                          <tr>
                            <td height="25" colspan="2" class="list_t">货运车辆</td>
                          </tr>
                          <tr>
                            <td height="30" width="100">车辆总数:</td>
                            <td class="list_word_vehilceTotal">0</td>
                          </tr>
                          <tr>
                            <td height="30">入网车辆总数:</td>
                            <td class="list_word_inNetVehicleTotal">0</td>
                          </tr>
                          <tr>
                            <td height="30">在线车辆总数:</td>
                            <td class="list_word_onlineVehicleTotal">0</td>
                          </tr>
						</table>
                    </li>
                    <li class=" d_n_bor">
                    	<table width="200" border="0" cellspacing="0" cellpadding="0">
                          <tr>
                            <td height="25" colspan="2" class="list_t">其他车辆</td>
                          </tr>
                          <tr>
                            <td height="30">车辆总数:</td>
                            <td class="list_word_vehilceTotal">0</td>
                          </tr>
                          <tr>
                            <td height="30">入网车辆总数:</td>
                            <td class="list_word_inNetVehicleTotal">0</td>
                          </tr>
                          <tr>
                            <td height="30">在线车辆总数:</td>
                            <td class="list_word_onlineVehicleTotal">0</td>
                          </tr>
						</table>
                    </li>
                    <li class="r_n_bor d_n_bor">
                    	<table width="200" border="0" cellspacing="0" cellpadding="0" style="margin-left:20px;">
                          <tr>
                            <td height="25" colspan="2" class="list_t">当天出入境车辆</td>
                          </tr>
                          <tr>
                            <td height="30"  width="100">出境车辆总数:</td>
                            <td class="list_word" id="outArea">0</td>
                          </tr>
                          <tr>
                            <td height="30">入境车辆总数:</td>
                            <td class="list_word" id="inArea">0</td>
                          </tr>
                          <tr>
                            <td height="30"></td>
                            <td class="list_word"></td>
                          </tr>
						</table>
                    </li>
                </ul>
            </div>
            
            <div class="right M_box i_w_02">
                <div class="E_Tit hot_i">报警信息</div>
              	<div class="E_Cen">&nbsp;</div>
                <ul class="info_list">
                	<li><img src="<%=basePath%>Images/baojing.jpg" width="45" height="45"/><h1 id="urgent">0</h1>紧急报警</li>
                    <li><img src="<%=basePath%>Images/chaosu.jpg" width="45" height="45"/><h1 id="speeding">0</h1>超速报警</li>
                    <li><img src="<%=basePath%>Images/pilao.jpg" width="45" height="45"/><h1 id="tired">0</h1>疲劳报警</li>
                    <li><img src="<%=basePath%>Images/yichang.jpg" width="45" height="45"/><h1 id="other">0</h1>异常报警</li>
                    <li style="border-right:none;"><img src="<%=basePath%>Images/qita.jpg" width="45" height="45"/><h1 id="abnormal">0</h1>其他报警</li>
                </ul>
            </div>
            
            <div class="right M_box i_w_04">
            	<div class="E_Tit infor_i_02">上级信息</div>
            	<span id="platFormInfoCount" class="index_ca_infor">0</span>
            </div>
            
            <div class="right M_box i_w_03">
            	<div class="E_Tit infor_i">平台和车辆数汇总信息</div>
            	<div><iframe src="<%=basePath%>nQuery/homePageIframe.jsp" id="charFrame" width="355px" height="195px" style="overflow:hidden; " marginwidth="0"  marginheight="0" frameborder="0"></iframe></div>
            </div>
            
        </div>
    </div>
</div>
 <div id="updatePasswordForm" style="display: none;">
    <form method="post" id="addForm" name="addForm">
	<div id="formTable" style= "overflow-y:auto;">
		<table width="100%" border="0" align="center" cellpadding="0" cellspacing="0" class="form">
			<tr class="even">
				<td class="tdLeft" style="width: 120px"><div align="right"><span class="mustfill">*</span>旧密码：</div></td>
				<td class="tdRight">
					<input type="password" name="oddPasswrod" id="txtOddPassword" class="input"> 
					 <span id="txtOddPasswordTip" style="color: red;"></span>
				</td>
			</tr>
			<tr class="odd">
				<td class="tdLeft"><div align="right"><span class="mustfill">*</span>新密码 ：</div></td>
				<td class="tdRight">
				<input type="password" name="password" id="txtPassword" 
					class="input"> 
					<span id="txtPasswordTip" style="color: red;"></span>
				</td>
			</tr>
			<tr class="even">
				<td class="tdLeft"><div align="right"><span class="mustfill">*</span>确认密码：</div></td>
				<td class="tdRight"><input type="password" name="password2" id="txtPassword2" 
				 	class="input" > 
					<span id="txtPassword2Tip" style="color: red;"></span>
				</td>
			</tr>
	    <tr class="odd">
	    	<td colspan="2" align="center">
	    	
	    		<input type="submit" value="保存" class="btn_customer" id="saveBut" />
										&nbsp;&nbsp;&nbsp;
				<input type="button" value="取消" class="btn_customer" onclick="$('#updatePasswordForm').dialog('close');" id="cancelBut" />
										&nbsp;&nbsp;&nbsp;
	    	</td>
	    </tr>
		</table>
		</div>
	</form>
	
    </div>
 </body>
</html>
