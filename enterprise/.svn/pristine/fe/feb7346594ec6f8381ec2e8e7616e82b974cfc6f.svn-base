<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ include file="/common/validateHead.jsp"%>
<html>
	<head>
	<base href="<%=basePath%>"></base>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		<title>指令发送</title>
		<link href="<%=basePath%>css/command.css" type="text/css" rel="stylesheet" />
		 <script type="text/javascript">
		//校验是否整数
		 function IsInteger(snum){
		 	var slen;
		 	slen=snum.length;
		 	for (i=0; i<slen; i++){
		 		cc = snum.charAt(i);
		 		if (cc <"0" || cc >"9")
		 		{
		 			return false;
		 		}
		 	}
		 	return true;
		 }
			function getParam()
			{
				var articleNumber=$('#articleNumber').val();
				if(articleNumber==""){
                     alert("补报条数不能为空！");
                     return false;
				 }
				if(!IsInteger(articleNumber)){
					alert("请输入整数值！");
                     return false;
				 }
				 if(articleNumber<=0){
					 alert("补报条数必须大于0！");
                     return false;
					 }
				return {"articleNumber":articleNumber};
			}
		</script>
	</head>

	<body>
	
      <br/>
	 <table width="100%" cellpadding="0" cellspacing="0" border="0">
			<tr><td height="20">&nbsp;</td></tr>
			<tr>
			  <td width="100%" align="center">
				   <fieldset style="border-Color:#80CAEA;width: 98%;"><legend>车辆定位信息自动补报:指令参数</legend>
				  		<table width="100%" cellpadding="0" cellspacing="1">
				            <tr>
				              <td width="3">&nbsp;</td>
				              <td width="181">
				              <table width="100%" border="0" cellspacing="0" cellpadding="0">
				               <tr>
				                  <td nowrap="nowrap"><div align="right">补报条数：</div></td>
				                  <td>
				                  		<input type="text" id="articleNumber" name="articleNumber"/>
								 </td>
				                </tr>
				       	 	  </table>
				</td>
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