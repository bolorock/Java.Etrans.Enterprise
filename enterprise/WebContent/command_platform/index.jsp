<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ include file="/common/validateHead.jsp"%>
<!--[if IE 8]>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<![endif]--> 
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<base href="<%=basePath%>"></base>
<title>指认管理</title>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta http-equiv="pragma" content="no-cache">
<meta http-equiv="cache-control" content="no-cache">
<meta http-equiv="expires" content="0">
<link href="<%=basePath%>css/jq/jquery-ui.css" rel="stylesheet" type="text/css"/>
<link rel="stylesheet" type="text/css" href="<%=basePath%>css/body.css">
<script src="<%=basePath%>js/jq/jquery-ui.min.js"></script>
<script type="text/javascript" src="<%=basePath%>js/jq/jquery.Query.js"></script>
<script src="<%=basePath%>js/command/bucommand.js" type="text/javascript"></script>
<script type="text/javascript" src="<%=basePath%>js/datepicker/WdatePicker.js"></script>
<script>
  $(document).ready(function() {
    $("#tabs").tabs();
  });
</script>
</head>
<body>   
<div id="tabs">
    <ul>
        <li><a href="#flatForm_Frame"><span>平台指令</span></a></li>
        <!--li><a href="#fragment-2"><span>上级信息</span></a></li-->
    </ul>
    	<div id="flatForm_Frame">
    	<div class="main">
        	<table width="100%" border="0" cellspacing="0" cellpadding="0">
                  <tr class="i_f_02" >
                    <td width="80" class="i_f_01" style="border-top:1px solid #fff;">第一步</td>
                    <td style="border-top:1px solid #fff;">
                    <div id="commandSendTwo2" style="height:100px;overflow-y:auto;">
                    	<ul class="instr_list_04" style="padding-top: 40px;">
                    			<li>
                    				<input name="commandCodePlatform"  commandKindID='' type="radio" value="7011" commandId='7011' class="instr_rad">主链路注销请求
                    			</li>
                    			<li>
                    				<input name="commandCodePlatform"  commandKindID='' type="radio" value="7015" commandId='7015' class="instr_rad">主链路登录请求
                    			</li>
                    			<li>
                    				<input name="commandCodePlatform"  commandKindID='' type="radio" value="7016" commandId='7016' class="instr_rad">主链路断开通知
                    			</li>
                    			<li>
                    				<input name="commandCodePlatform"  commandKindID='' type="radio" value="7017" commandId='7017' class="instr_rad">主动关闭主从链路通知
                    			</li>
                    	</ul>
                        </div>
                    </td>
                  </tr>
                 <tr class="i_f_02">
                    <td width="80" class="i_f_01">第二步</td>
                    <td style="border-top:1px solid #1FFFF;">
                      <div id="commandSendThree2" style="display:none;height:150px;width:890px;overflow-y:hidden;overflow: x:hidden">
                      <iframe src="" id="mainFrame2"  name="mainFrame2" width="900px" height="330px"  frameborder="0" scrolling="auto">
                      </iframe>
                        </div>
                         <div  style="height:50px;" align="left">
		               <span id="result"></span>
		              </div> 
                    </td>
                  </tr>
                 
                </table>
                </div>
      		</div><!--
		    <div id="fragment-2">
		        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
		        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
		    </div>
   
 --></div>
</body>
</html>
