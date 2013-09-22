<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib prefix="s" uri="/struts-tags" %>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
%>
<!--[if IE 8]>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<![endif]--> 
 <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>道路运输车辆卫星定位企业平台</title>

<base href="<%=basePath%>"></base>

<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta http-equiv="pragma" content="no-cache">
<meta http-equiv="cache-control" content="no-cache">
<meta http-equiv="expires" content="0">

<script src="<%=basePath%>js/jq/jquery-1.7.1.min.js" type="text/javascript"></script>

<link href="<%=basePath%>css/body.css" rel="stylesheet" type="text/css"/>
<!--[if IE 6]>
<link rel="stylesheet" type="text/css" href="Css/ie6_hack.css">
<![endif]--> 
<script>
//   $(document).ready(function(){
// 		$("dd:not(:first)").hide();
// 		$("dt").click(function(){
// 			$("dd:visible").slideUp("slow");
// 			$(this).next().slideDown("slow");
// 			var dtNodes = $("dt");
// 			$.each(dtNodes, function(i) {
// 				if($(this).attr("style")== "BACKGROUND:#D8D8D8")
// 				  $(this).attr("style","BACKGROUND:#bfd5fd");
// 			});
			
// 			$(this).attr("style","BACKGROUND:#bfd5fd");
// 			return false;
// 		});
		
// 		$("a").click(function(){
// 			var checkedNodes = $("a");
// 			$.each(checkedNodes, function(i) {
// 				$(this).removeClass("rodd");
// 			});
// 			$(this).addClass("rodd");
// 	    });
// 	});
</script>
<script type="text/javascript">
	var twoLevelStaVal = "-1";
	var threeLevelStaVal = "-1";
</script>
<% String parentId=request.getParameter("parentId");
	request.setAttribute("parentId",parentId);
%>

</head>
 <body>
 <div id="cont_box">
	<div class="main">
    	<div class="left mon_meun">
        	<div class="E_Tit">业务管理</div>
          	<dl id=navigation class="nav" style="margin-top: 2px;">
          	 <dd><ul>
		 <!-- 查询统计 -->  
		  <s:action id="twoLevelMenu" name="getUserTwoMenus" namespace="/sys" >
		  	<s:param value="parentId" name="parentId"/>
		  </s:action>
			  <s:action id="threeLevelMenu" name="getUserThreeMenus" namespace="/sys" >
			  	<s:param value="parentId" name="parentId"/>
			  </s:action>
			  
			  <s:iterator value="#twoLevelMenu.userTwoLevelList" id="menu" status="twoLevelSta">
			  
					<script language="javascript">
						if(twoLevelStaVal == "-1"){
							twoLevelStaVal = "${twoLevelSta.index}";
						}
					</script>
				 	<li>
							<a href="${pageContext.request.contextPath}${menu.assemblyName}" target="rightFrame">
								${menu.functionName }
							</a>
					</li>
							<script language="javascript">
								// 此段代码作用：在左侧最上层的第一个子节点菜单默认产生单击事件
								var rightUrl = "${pageContext.request.contextPath}${menu.assemblyName}";
								var currentTwoLevelSta = "${twoLevelSta.index}";
								if (twoLevelStaVal == currentTwoLevelSta) {
									$('#rightFrame', window.parent.document).attr("src", rightUrl);
								}
							</script>
						
 			</s:iterator>
 			</ul></dd>
		 	</dl>
		</div>
 	</div>
 </div>
 </body>
</html>
