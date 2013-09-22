<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
  <title>轨迹数据</title>
    <base href="<%=basePath%>"></base>
	<link href="<%=basePath%>css/command.css" type="text/css" rel="stylesheet" />
   <script type="text/javascript" src="<%=basePath%>js/jq/jquery-1.7.1.min.js"></script>
   <script type="text/javascript" src="<%=basePath%>js/datepicker/WdatePicker.js"></script>
   	<script language="javascript" type="text/javascript" src="<%=basePath%>js/common/StringUtil.js"></script>
		<script language="javascript" type="text/javascript" src="<%=basePath%>js/common/jsjava-2.0.js"></script>
	<script type="text/javascript">
		function setGpsAry(){
			///parent.mainIndexFrame.mainFrame_index.test4();
		}
	</script>
	<style type="text/css">
		.input{width: 150px; height: 22px;font-size: 12px; color: #000;line-height: 22px}
	</style>
  </head>
  
  <body style="margin-left: 10px">
   <div id="reDubanDialog" style="display: none;padding:5px;top:10px;">
 		<table width="100%" border="0" cellspacing="0" cellpadding="0" class="mon_t_infor">
              <tr class="mon_t_01">
                <td class="m_t" nowrap="nowrap" width="8%">车牌</td>
                <td class="m_t" nowrap="nowrap" width="5%">车牌颜色</td>
                <td class="m_t" nowrap="nowrap" title="GPS速度(km/h)" width="5%">GPS速度</td>
                <td class="m_t" nowrap="nowrap" title="电子速度(km/h)" width="5%">电子速度</td>
                <td class="m_t" nowrap="nowrap" width="5%">精度</td>
                 <td class="m_t" nowrap="nowrap" title="(km)" width="5%">里程(KM)</td>
                <td class="m_t" nowrap="nowrap" width="20%">详细信息</td>
                <%--附加信息--%>
                <td class="m_t" nowrap="nowrap" width="20%">附加信息</td>   
                <td class="m_t" nowrap="nowrap" width="12%">地址</td>
                <td class="m_t" nowrap="nowrap" width="8%">定位时间</td>
                <td nowrap="nowrap" width="5%">操作</td>
              </tr>
            </table>
	  </div>
	  <script type="text/javascript">
	  setGpsAry();
	  </script>
  </body>
</html>
