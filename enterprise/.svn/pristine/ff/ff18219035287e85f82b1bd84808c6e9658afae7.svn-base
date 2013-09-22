<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@page import="com.etrans.bubiao.sys.UserContext"%>
<%@page import="com.etrans.bubiao.auth.SessionUser"%>
<%@ taglib prefix="s" uri="/struts-tags"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
%>
<%
//是否是超级管理员
boolean isRoot = UserContext.isBsRootUser();
//是否是企业管理员
SessionUser user = UserContext.getLoginUser();
boolean isUnitAdmin =user.isWorkUnitSuperAdmin();
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

<script src="<%=basePath%>js/jq/jquery-1.7.1.min.js"
	type="text/javascript"></script>

<link href="<%=basePath%>css/body.css" rel="stylesheet" type="text/css" />
<!--[if IE 6]>
<link rel="stylesheet" type="text/css" href="Css/ie6_hack.css">
<![endif]-->
<script>
	$(document).ready(function() {
		if(id==""){ //证件过期数据id为空时【头部一级菜单点击过来的！】
			$("dd:not(:first)").hide();//隐藏 dd不是第一个的. E:first:相当于E:eq(0) 
			// $("dd:not(:last)").hide();  //试试$("dd:not(:last)").hide();
		}
		$("dt").click(function() {
			$("dd:visible").slideUp("slow");//通过高度变化（向上减小）来动态地隐藏所有匹配的元素
			$(this).next().slideDown("slow");//通过高度变化（向下增大）来动态地显示所有匹配的元素
			var dtNodes = $("dt");
			$.each(dtNodes, function(i) {
				$(this).attr("style", "BACKGROUND:#D8D8D8");
			});

			$(this).attr("style", "BACKGROUND:#bfd5fd");
			return false;
		});

		$("a").click(function() {
			var checkedNodes = $("a");
			$.each(checkedNodes, function(i) {
				$(this).attr("style", "");
			});
			$(this).attr("style", "background:#bfd5fd");
		});		
		
		//**********作用与证件过期连接跳转begin******************
		if(id!=null||id!=""){ //证件过期数据id不为空时
			$("#navigation dt").each(function(i) {//找到二级菜单并且自动点击
				var text  = $(this).text();
				//alert("二级菜单名称1:"+$.trim(text)+"  二级菜单名称2："+$.trim(moduleName2));
				if($.trim(text)==$.trim(moduleName2)){
					$(this).click();
				}
			});
			$("#navigation dd ul a").each(function(i) { //找到三级菜单并且自动加载URL
				var hrefValue  = $(this).attr("href");
				//alert("三级菜单URL:"+$.trim(hrefValue)+"  三级菜单名称2："+('${pageContext.request.contextPath}'+$.trim(moduleName3URL)));
				if($.trim(hrefValue)==('${pageContext.request.contextPath}'+$.trim(moduleName3URL))){
					$('#rightFrame', window.parent.document).attr("src", '${pageContext.request.contextPath}'+$.trim(moduleName3URL)+"?proveBackID="+id);
					$(this).attr("style", "background:#bfd5fd"); 
					}
			});
		}
		//**********作用与证件过期连接跳转end******************
		
		
	});
</script>
<%
	String parentId = request.getParameter("parentId");
	request.setAttribute("parentId", parentId);
	
	//**********作用与证件过期连接跳转begin******************
	String moduleName2="";
	String moduleName3URL="";
	String id = "";
	if(request.getParameter("moduleName2")!=null){//左边二级级菜单名称
		moduleName2 = new String(request.getParameter("moduleName2").getBytes("ISO-8859-1"),"utf-8");//模块名称，比如  "基础管理"
	}
	request.setAttribute("moduleName2",moduleName2);
	if(request.getParameter("moduleName3URL")!=null){//左边三级级菜单名称
		moduleName3URL = new String(request.getParameter("moduleName3URL").getBytes("ISO-8859-1"),"utf-8");//模块名称，比如  "基础管理"
	}
	request.setAttribute("moduleName3URL",moduleName3URL);
	if(request.getParameter("id")!=null){//证件过期数据id
		id=request.getParameter("id");
	}
	request.setAttribute("id",id);
	//**********作用与证件过期连接跳转end******************
%>
<script type="text/javascript">
	var twoLevelStaVal = "-1";
	var threeLevelStaVal = "-1";
	
	//**********作用与证件过期连接跳转******************
	var moduleName2 = '${moduleName2}'; //左边二级级菜单名称
	var moduleName3URL = '${moduleName3URL}'; //左边三级级菜单名称
	var id = '${id}'; //证件过期数据id
</script>
</head>
<body>
	<div id="cont_box">
		<div class="main">
			<div class="left mon_meun">
				<div class="E_Tit">基础管理</div>
				<dl id=navigation class="nav" style="margin-top: 2px;">
					<s:action id="twoLevelMenu" name="getUserTwoMenus" namespace="/sys">
						<s:param value="parentId" name="parentId" />
					</s:action>
					<s:action id="threeLevelMenu" name="getUserThreeMenus" namespace="/sys" >
			  			<s:param value="parentId" name="parentId"/>
			  		</s:action>
					<!-- 二级菜单div  Begin -->
						<div style="overflow:auto;height:420px" id="menu">
						<%--循环二级菜单集合--%>
						<s:iterator value="#twoLevelMenu.userTwoLevelList" id="menu" status="twoLevelSta">
							<script language="javascript">
								if (twoLevelStaVal == "-1") {
									twoLevelStaVal = "${twoLevelSta.index}";
								}
							</script>
							<!-- 二级菜单内容项 -->
<%--							<dt><a href="#">${menu.functionName }</a></dt>--%>
							<dt>${menu.functionName }</dt>
							<dd><ul>
								<!-- 第三级别菜单begin-->
								<s:iterator value="#threeLevelMenu.userThreeLevelList2" id="cm" status="threeLevelSta">
									
									<s:if test="#menu.functionId == #cm.parentFuncId">
										<%--只有超级用户才可以看到"功能菜单管理"--%>
										<s:if test="#cm.functionName eq '功能菜单管理'">
										  <%if(isRoot){%>
										  	<li style="padding-top: 0px;">
												<a  href="${pageContext.request.contextPath}${cm.assemblyName}" target="rightFrame">
													${cm.functionName}
												</a>
											</li>
										  <%}%>
										</s:if>
										<s:elseif test="#cm.functionName eq '系统公告设置'">
											<%if(isRoot){%>
										  	<li style="padding-top: 0px;">
												<a  href="${pageContext.request.contextPath}${cm.assemblyName}" target="rightFrame">
													${cm.functionName}
												</a>
											</li>
										  <%}%>
										</s:elseif>
										<s:else>
											<li style="padding-top: 0px;">
												<a  href="${pageContext.request.contextPath}${cm.assemblyName}" target="rightFrame">
													${cm.functionName}
												</a>
											</li>
										</s:else>
										
										
										<script language="javascript">
											if(id==""){//证件过期数据id为空时【头部一级菜单点击过来的！】
												//alert("头部一级菜单点击过来的！")
												if(threeLevelStaVal == "-1"){
													threeLevelStaVal = "${threeLevelSta.index}";
												}
												// 此段代码作用：在左侧最上层的第一个子节点菜单默认产生单击事件
												var rightUrl = "${pageContext.request.contextPath}${cm.assemblyName}";
												var currentTwoLevelSta = "${twoLevelSta.index}";
												var currentThreeLevelSta = "${threeLevelSta.index}";
												
												if (twoLevelStaVal == currentTwoLevelSta && currentThreeLevelSta == threeLevelStaVal) {
													$('#rightFrame', window.parent.document).attr("src", rightUrl);
												}
												/**添加样式div**/
												var dtNodes = $("dt");
												$.each(dtNodes, function(i) {
													if(i==0){
														$(this).attr("style", "BACKGROUND:#bfd5fd");
													}
												});
												/**添加样式a标签**/
												var checkedNodes = $("a");
												$.each(checkedNodes, function(i) {
													if(i==0){
														$(this).attr("style", "background:#bfd5fd");
													}
												});
											}
											
										</script>
									</s:if>
								</s:iterator>
								<!-- 第三级别菜单end-->
							</ul></dd>
						</s:iterator>
						</div>
					<!-- 二级菜单div  End -->
				</dl>
			</div>
		</div>
	</div>
	
</body>
</html>
