<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ include file="/common/validateHead.jsp"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">

<html>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta http-equiv="pragma" content="no-cache">
<meta http-equiv="cache-control" content="no-cache">
<meta http-equiv="expires" content="0">

<%
		 /**车辆tree**/
		String reNoParam = new String(request.getParameter("reNoParam").getBytes("ISO-8859-1"),"utf-8");
%>
<head>

<script type="text/javascript">
	var vehicleFlag ='<%=reNoParam %>';
</script>

<link rel="stylesheet" type="text/css" href="${basePath}css/body.css">
<link rel="stylesheet" type="text/css" href="${basePath}js/easyui/themes/icon.css">
<link rel="stylesheet" type="text/css" href="${basePath}js/easyui/themes/default/easyui.css">

<script  type="text/javascript" src="${basePath}js/jq/jquery-1.7.1.min.js"></script>
<script type="text/javascript" src="${basePath}js/easyui/jquery.easyui.min.js"></script>
<script type="text/javascript"	src="${basePath}js/sys/tree/vehicleParamTree.js"></script>	

	<%--【自动补全】begin--%>
        <script type="text/javascript" src="${basePath}js/common/autoComplete.js"></script>
        <link rel="stylesheet" type="text/css" href="${basePath}css/autoComplete.css">
        <%--【自动补全】end--%>

<style  type="text/css">
	.load{width: 100px; height: 16px; position: absolute; left: 20px; top: 80px  }
</style>




</head>

	<%--onclickAll 【自动补全】--%>
<body onclick="onclickAll();" style="scroll=no;overflow-x: hidden;overflow-y: hidden">
	<%--【自动补全】begin--%>
   
    
	<div>
		<div style="text-align: left;" id="vehicleDiv"></div>    	
		<div style="text-align: left;" id="vehicleTree"></div>
		<div style="text-align: center;" id="vehicleBtn"></div>
	</div>        
     <div style="position:absolute; overflow:auto; scroll;height: 143px; width: 120px;" id="popup">
          <table  id="name_table" bgcolor="#FFFAFA" border="0" cellspacing="0" cellpadding="0"/>            
             <tbody id="name_table_body" style="font-size: 13px;"></tbody>
         </table>
     </div>
	
	</body>
</html>