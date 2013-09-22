<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
%>
<html>
	<head>
	<base href="<%=basePath%>"></base>
	
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		<title>指令发送</title>
		<link href="<%=basePath%>css/command.css" type="text/css" rel="stylesheet" />
		
      <script type="text/javascript" src="<%=basePath%>js/jq/jquery-1.7.1.min.js"></script>
      <script type="text/javascript" src="<%=basePath%>js/common/jsjava-2.0.js"></script>
      <script type="text/javascript" src="<%=basePath%>js/monitorCenter/photo.js"></script>
      <script type="text/javascript" src="<%=basePath%>js/jq/jquery.Query.js"></script>
      <script type="text/javascript" src="<%=basePath%>js/datepicker/WdatePicker.js"></script>
      
<style type="text/css">
*{margin:0;padding:0;}
body{font-size:12px;color:#222;font-family:Verdana,Arial,Helvetica,sans-serif;background:#f0f0f0;}
.clearfix:after{content: ".";display: block;height: 0;clear: both;visibility: hidden;}
.clearfix{zoom:1;}
ul,li{list-style:none;}
img{border:0;}
.wrapper{width:500px;margin:0 auto;padding-bottom:50px;}
h1{height:50px;line-height:50px;font-size:22px;font-weight:normal;font-family:"Microsoft YaHei",SimHei;margin-bottom:20px;}
/* image */
#image{width:500px;height:200px;overflow:hidden;position:relative;}
#image ul{height:200px;position:absolute;}
#image ul li{float:left;width:500px;height:200px;overflow:hidden;position:relative;background:#000;}
#image ul li div{position:absolute;overflow:hidden;}
#image .btnBg{position:absolute;width:500px;height:20px;left:0;bottom:0;background:#000;}
#image .btn{position:absolute;width:500px;height:10px;padding:5px 10px;right:0;bottom:0;text-align:right;}
#image .btn span{display:inline-block;_display:inline;_zoom:1;width:25px;height:10px;_font-size:0;margin-left:5px;cursor:pointer;background:#fff;}
#image .btn span.on{background:#fff;}
#image .preNext{width:45px;height:100px;position:absolute;top:90px;background:url(command/upload/img/sprite.png) no-repeat 0 0;cursor:pointer;}
#image .pre{left:0;}
#image .next{right:0;background-position:right top;}
</style>
<script type="text/javascript">
$(function() {
	loadInit();
});

</script>

	<body>
	<input type="hidden" id="commandCode" name="commandCode" value=""/>
	<input type="hidden" id="commandKindId" name="commandKindId" value=""/>
	<input type="hidden" id="commandId" name="commandId" value=""/>
	
	 <table width="100%" cellpadding="0" cellspacing="0" border="0">
			<tr><td height="20">&nbsp;</td></tr>
			<tr> 
			  <td width="100%" align="center">
				  <fieldset style="border-Color:#80CAEA;width: 100%;"><legend><span id="commandName"></span></legend>
				  		<table width="100%" cellpadding="0" border="0" cellspacing="1">
				            <tr>
				              <td>&nbsp;</td>
				              <td>&nbsp;</td>
				              <td>&nbsp;</td>
				              <td width="3" rowspan="3" background="imgs/commandbg.gif">.</td>
				              <td>&nbsp;</td>
				            </tr>
				            <tr>
				              <td width="3">&nbsp;</td>
				              <td width="750"><table width="100%" border="0" cellspacing="0" cellpadding="0"><tbody id="tabInfo"></tbody></table></td>
				              <td width="16">&nbsp;</td>
				              <td width="13">&nbsp;</td>  
				            </tr>
							<tr>
				              <td>&nbsp;</td>
				              <td>&nbsp;</td>
				              <td>&nbsp;</td>
				              <td>&nbsp;</td>
				            </tr>
		          		</table>
				  </fieldset>
			  </td>
			</tr>
			
			<tr>
		 <td>&nbsp;</td>
		 </tr>
		 <tr>
		 <td valign="top"><a href="javascript:void(0)" onClick="sendMessage();"><img src="imgs/command.gif"  border="0"></a><a  href="javascript:void(0)" class="ser_btn" onClick="parent.closeDialog();"><img src="imgs/cancel.gif"  border="0"></a>
	   </td>
		 </tr>
		</table>
		<div align="left">
		   <span id="result"></span>
		</div>
		<div id="loadwait" align="left"></div>
   <div id="image" align="center" style="display:none" >
   			<ul id="imageUl">
			</ul>
   </div>
    <div id="media" align="center" class="hiddiv"  style="display:none">
     <object id="player" height="300" width="500" classid="clsid:6bf52a52-394a-11d3-b153-00c04f79faa6">
<param name="autostart" value="-1">
<!--是否自动播放-->
<param name="balance" value="0">
<!--调整左右声道平衡,同上面旧播放器代码-->
<param name="enabled" value="-1">
<!--播放器是否可人为控制-->
<param name="enablecontextmenu" value="-1">
<!--是否启用上下文菜单-->
<param name="url" value="">
<!--播放的文件地址-->
<param name="playcount" value="1">
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
<param name="stretchtofit" value="0">
<!--是否按比例伸展-->
<param name="volume" value="50">
<!--默认声音大小0%-100%,50则为50%-->
<param name="mute" value="0">
<!--是否静音-->
<param name="uimode" value="mini">
<!--播放器显示模式:full显示全部;mini最简化;none不显示播放控制,只显示视频窗口;invisible全部不显示-->
<param name="windowlessvideo" value="0">
<!--如果是0可以允许全屏,否则只能在窗口中查看-->
<param name="fullscreen" value="0">
<!--开始播放是否自动全屏-->
<param name="enableerrordialogs" value="-1">
<!--是否启用错误提示报告-->
<param name="samistyle" value>
<!--sami样式-->
<param name="samilang" value>
<!--sami语言-->
<param name="samifilename" value>
<!--字幕id-->
</object>
        </div>
	</body>
</html>