<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ include file="/common/validateHead.jsp"%>
<html>
	<head>
	<base href="<%=basePath%>"></base>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		<title>指令发送</title>
		<link href="<%=basePath%>css/command.css" type="text/css" rel="stylesheet" />
		 <script type="text/javascript">
			function getParam(){
                var param2=$("#starTime").val();//开始时间
                if(param2==''){
                    alert("开始时间不能为空");
                    return false;
                }
                
                var param3=$("#endTime").val();//结束时间
                if(param3==''){
                    alert("结束时间不能为空");
                    return false;
                }
				return {			
					"starTime":param2,
					"endTime":param3
					};
			}
		</script>
	</head>

	<body>
	
      <br/>
	 <table width="100%" cellpadding="0" cellspacing="0" border="0">
			<tr><td height="20">&nbsp;</td></tr>
			<tr>
			  <td width="100%" align="center">
				   <fieldset style="border-Color:#80CAEA;width: 98%;"><legend>申请交换指定车辆定位信息请求:指令参数</legend>
				  		<table width="100%" cellpadding="0" cellspacing="1">
				            
				            <tr>
				              <td width="3">&nbsp;</td>
				              <td width="181"><table width="100%" border="0" cellspacing="0" cellpadding="0">
				               <tr>
				                  <td nowrap="nowrap"><div align="right">开始时间： <input id="starTime" name="starTime" type="text" onFocus="this.blur()"  readonly="readonly"
					                 	class="td_input" 
					                 	formCheck="true" 
										required="true" requiredError="请选择开始时间！" 
					                 	style="width: 110px;" >
			                 		<img src="Images/time.jpg" width="20" height="23" style=""
							    onClick="parent.WdatePicker({firstDayOfWeek:1,isShowWeek:true,el:document.getElementById('starTime'),dateFmt:'yyyyMMddHHmmss',minDate:'%y-%M-{%d-1}'})"/>
			                 	<span id="txtRunTimespan" class="errorMsg" style="display: none"></span>		
								  </td>
								  
								  <td nowrap="nowrap"><div align="right">结束时间： <input id="endTime" name="endTime" type="text" onFocus="this.blur()"  readonly="readonly"
					                 	class="td_input" 
					                 	formCheck="true" 
										required="true" requiredError="请选择结束时间！" 
					                 	style="width: 110px;" >
			                 		<img src="Images/time.jpg" width="20" height="23" style=""
							    onClick="parent.WdatePicker({firstDayOfWeek:1,isShowWeek:true,el:document.getElementById('endTime'),dateFmt:'yyyyMMddHHmmss',minDate:'%y-%M-{%d-1}'})"/>
			                 	<span id="txtRunTimespan" class="errorMsg" style="display: none"></span>		
								  </td>
				                </tr>
				             
				              </table></td>
				              <td width="3" rowspan="2" background="imgs/commandbg.gif">.</td>
				              <td width="15">&nbsp;</td>
				              <td width="15">&nbsp;</td>
				                <td width="300"><div id="back" class="hiddiv" style="display: none;"><img alt="正在发送指令" src="imgs/load.gif">正在发送指令......</div></td>
				              <td width="200"></td>
				            </tr>
							  <tr>
				              <td>&nbsp;</td>
				              <td>&nbsp;</td>
				              <td>&nbsp;</td>
				              <td>&nbsp;</td>
				              <td colspan="2">&nbsp;</td>
				            </tr>
		          		</table>
				  </fieldset>
			  </td>
			</tr>
				<tr>
	<td>
	<div id="tip"></div>
	</td>
		</tr>
		 <tr>
		 <td valign="top"><a href="javascript:void(0)" onClick="parent.sendMessage2(getParam());">&nbsp;&nbsp;&nbsp;<img src="imgs/command.gif"  border="0"></a>
	   </td>
		</table>
	</body>
</html>