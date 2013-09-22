<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<%@ include file="/common/validateHead.jsp"%>
<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<html>
<head>
<base href="<%=basePath%>"></base>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<title>企业中心</title>		
<link rel="stylesheet" type="text/css" href="<%=basePath%>css/carlist.css"/>
<script type="text/javascript">
	var basePath = '<%=basePath%>';
</script>
<script type="text/javascript" src="${basePath}js/common/HashMap.js"></script>
<script type="text/javascript" src="${basePath}js/common/StringUtil.js"></script>
<script type="text/javascript" src="${basePath}js/command/batch/batchCarList.js"></script>
</head>
<body>
<!-- 顶部菜单 -->
<div id="cont_box">
	<div class="main">
    	<div class="left mon_meun">
    	<div class="E_Tit" align="left">
        	 <div class="mon_ser_box" style="padding-left: 0px;" align="left">
              <table width="248" border="1" cellspacing="0" cellpadding="0" style="padding-left: 0px">
                <tr>
                   <td align="left" >终端类型:&nbsp;&nbsp;<select style="width: 200;" id="terminalKind" name="terminalKind" onchange="changeTree(this)"></select></td>
                </tr>
             </table>
		  </div>
		  </div>
          <div id="car_list">
          <!-- 树 -->
          <div align="left" id="carTree" style="OVERFLOW-Y:scroll;OVERFLOW-X:hidden;height: 420px;" >
			<ul id="carTreeList"></ul>
		  </div>
		  <!--列表 -->
          </div> 
    </div>
    <div style="height: 100%; width: 100%;" align="center" id="moreVehicle"></div> 
    </div>
    </div>
</body>
</html>
