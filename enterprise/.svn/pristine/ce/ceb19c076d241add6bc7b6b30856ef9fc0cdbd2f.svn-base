<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
%>
<!--[if IE 8]>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<![endif]--> 

<head>
<base href="<%=basePath%>"></base>
<title>指认管理</title>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta http-equiv="pragma" content="no-cache">
<meta http-equiv="cache-control" content="no-cache">
<meta http-equiv="expires" content="0">
<script type="text/javascript" src="${basePath}js/jq/jquery-1.7.1.min.js"></script>
<link rel="stylesheet" type="text/css" href="<%=basePath%>css/updownLine.css">
<link href="<%=basePath%>css/jq/jquery-ui.css" rel="stylesheet" type="text/css"/>
<script src="<%=basePath%>js/jq/jquery-ui.min.js"></script>
<script src="<%=basePath%>js/common/updownLine.js"></script>
</head>
<body>
<div id="tabs">
    <ul>
        <li><a href="#cont_box"><span>上线车辆</span></a></li>
         <li><a href="#cont_box2"><span>下线车辆</span></a></li>
    </ul>
	<div id="cont_box" >
		 
    </div>
   
		<div id="cont_box2" >
             
    </div>  
     
 </div>

  <object id="wav_upline" height="0" width="0" classid="clsid:6bf52a52-394a-11d3-b153-00c04f79faa6">
<param name="autostart" value="0">
<!--是否自动播放-->
<param name="balance" value="0">
<!--调整左右声道平衡,同上面旧播放器代码-->
<param name="enabled" value="-1">
<!--播放器是否可人为控制-->
<param name="enablecontextmenu" value="-1">
<!--是否启用上下文菜单-->
<param name="url" value="Images/upline.mp3">
<!--播放的文件地址-->
<param name="playcount" value="20">
<!--播放次数控制,为整数-->
<param name="rate" value="1">
<!--播放速率控制,1为正常,允许小数,1.0-2.0-->
<param name="currentposition" value="0">
<!--控件设置:当前位置-->
<param name="currentmarker" value="0">
<!--控件设置:当前标记-->
<param name="defaultframe" value="">
<!--显示默认框架-->
<param name="invokeurls" value="0">
<!--脚本命令设置:是否调用url-->
<param name="baseurl" value="">
<!--脚本命令设置:被调用的url-->
<param name="volume" value="50">
<!--默认声音大小0%-100%,50则为50%-->
<param name="mute" value="0">
<!--是否静音-->
<param name="uimode" value="invisible">
<!--播放器显示模式:full显示全部;mini最简化;none不显示播放控制,只显示视频窗口;invisible全部不显示-->
<!--字幕id-->
</object>

<%-- 车辆详细信息层--%>
   	<div id="vehicleInfoDiv" class="hiddiv"  style="display: none;padding:5px;top:30px;" >  
    	<iframe src="" id="dialogFrame2" name="dialogFrame2" width="100%"  height="100%" frameborder="0" scrolling="yes"></iframe>  
	</div>     
</body>

</html>
