<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ include file="/common/validateHead.jsp"%>
<%@ page import="com.etrans.bubiao.sys.Constants"%>
<%@ page import="com.etrans.bubiao.auth.SessionUser"%>
<%@ page import="com.etrans.bubiao.entities.LoginLog"%>
<%@taglib prefix="auth"  uri="/auth-tags"  %>
<%@ taglib prefix="s" uri="/struts-tags" %>

<%
	//LoginLog loginLog = new LoginLog();
	//loginLog = (LoginLog)request.getSession().getAttribute("loginLog");
%>
<!--[if IE 8]>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<![endif]--> 

 <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">

<html xmlns="http://www.w3.org/1999/xhtml">

<base href="<%=basePath%>"></base>

<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<title>亿程卫星定位监控系统-广州亿程交通信息有限公司</title>
	<script type="text/javascript">
		function openUpdateDialog(basePath){
			var  url=basePath+'basicBlue/usermanage/passwordUpdate.jsp';
			parent.parent.openDialog(url, 600, 300,"修改密码");
			//window.showModalDialog('../basicBlue/usermanage/passwordUpdate.jsp','alarmFrame','dialogWidth=600px;dialogHeight=300px,top=0,left=0,toolbar=no,menubar=no,scrollbars=no,location=no, status=no') 
		}
	</script>
	<link rel="stylesheet" type="text/css" href="<%=basePath %>css/body.css"/>
	<link rel="stylesheet" type="text/css" href="<%=basePath%>css/top.css">
</head>

<body>
<!-- 顶部菜单 -->

<div id="main_top">
	<div class="left cont_logo"><img src="<%=basePath %>Images/logo.jpg" width="388" height="47" /></div>
    	<ul id="menuls" class="right cont_meun">
    
    		<s:action id="oneLevelMenu" name="getUserOneMenus" namespace="/sys" ></s:action>
			  <s:iterator value="#oneLevelMenu.userOneLevelList" id="menu" status="st">
	    		<li index='${st.index}' url="<%=basePath %>${menu.assemblyName}" parentId="${menu.functionId}"
	    		<s:if test="#menu.functionName eq '首页'">  class="btn_hit"</s:if>
				<%--过检--%>
                <%--<s:if test="#menu.functionName eq '车辆监控'">  class="btn_hit"</s:if>--%>
	    		>${menu.functionName}</li>
	    		<script type="text/javascript">
	    			//添加模块
	    			//var name = '${menu.functionName}';
	    			//var index = '${st.index}';
	    			//name="iframe_"+index;
	    			//if(name=="车辆监控"){
							//alert("车辆监控");
							//name = "mainFrame";
			    		//}
	    			//addModule(name,src);
	    		</script>
	         </s:iterator>
        
        
    	</ul>
    <div class="clear"></div>
    
    <div class="cont_tot">
        <div id="titleLeftDiv" class="left man_ctr"><%=user.getUserName() %>，欢迎您！
<%--        	您上次登录的时间是：<%=loginLog.getLastLogOnTime() %> --%>
         [<a target="_top" style="cursor: pointer" onclick="javascript:goUrl('<%=basePath %>pub/logout.action');">注销</a>]
         [<a href="javascript:void(0)" onclick="openUpdateDialog('<%=basePath %>')" style="cursor: pointer" id="updatePassBtn" >修改密码</a>]
    	</div>
    	<%--模块快捷方式--%>
		<div class="tab-hd" id="titleDiv" >
<%--			<div onmouseover="showImage('mainFrame_index_image');" onmouseout="hideImage('mainFrame_index_image');" name="mainFrame_index" id="mainFrame_index" style="width:80px;"><span><a href="javascript:deleteTitle('首页')"><img id="mainFrame_index_image" name="mainFrame_index" src="Images/ico/x.gif" width="8" height="8" title="删除"/></a></span><em>首页</em></div>--%>
    	</div>
    </div>
    <div class="clear"></div>
   
</div>
<!-- 顶部菜单结束 -->

<script type="text/javascript" src="<%=basePath %>js/query/top.js"></script>

</body>

</html>

