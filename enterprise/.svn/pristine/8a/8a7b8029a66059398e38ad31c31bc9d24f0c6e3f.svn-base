<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@page import="com.etrans.common.util.Tools"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
			
			//注册服务器IP
			String TransmitIP = new String(request.getParameter("TransmitIP").getBytes("ISO-8859-1"),"utf-8");
			//注册服务器端口
			String TransmitPort = request.getParameter("TransmitPort");
			//终端通信号 
			String ID=request.getParameter("ID");
			//终端类型（固定）
			String Kind = request.getParameter("Kind");
			//终端通道列表 1&2&3&4 表示 安装有1、2、3、4    4个通道
			String Channel = request.getParameter("Channel");	
%>
<html>
<head>
<base href="<%=basePath%>"></base>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title></title>

<script type="text/javascript" src="<%=basePath%>jiankong/jquery-1.7.1.min.js"></script>
<script type="text/javascript" src="<%=basePath%>jiankong/js/jiankongSD.js"></script>

<script type="text/javascript">
	var TransmitIP='<%=TransmitIP%>';
	var TransmitPort ='<%=TransmitPort%>';
	var ID ='<%=ID%>';
	var Kind='<%=Kind%>';
	var Channel='<%=Channel%>';

	/**屏蔽页面右键**/
	document.oncontextmenu=new Function("event.returnValue=false;");
	document.onselectstart=new Function("event.returnValue=false;");
	
</script>

<!--向服务器获取3G视频服务地址--响应事件-->
<script type="text/javascript" for="SDClientRegDll" event="DeviceVMSCUP(TargetID,VMSCHost,VMSCPort);">
	//alert("返回结果： "+"终端通信号："+TargetID+"  3G服务器IP："+VMSCHost+" 3G服务器端口："+VMSCPort);
	
	/***************调用ocx************/
	for (var s = 0; s < objOcxID.length; s++) {
		var objOcx = window.document.getElementById(objOcxID[s]);
		/**系统设置**/
		objOcx.SetConfigInfo(Kind,TargetID,VMSCHost,VMSCPort,s+1,'admin','123');
		//打开视频
		objOcx.OpenVideo();
	}
</script>
	
</head>
<body  style="background-color: transparent;">
    <input type="text" id="txtWindowType" value="4" style="display: none" />
    <center>
        <table  width="670px;">
            <tr>
              <td ><object  id="UserProxy1" 
              				style="width: 330px; height: 175px;background-color:#485869;z-index: -1;" 
              				IsCamera="0" 
              				classid="clsid:FA52021E-4027-454A-A71C-5D2EC565EFE9" 
              				codebase="<%=basePath%>jiankong/software/G10.EXE"
                        	value="0">
                <a href="<%=basePath%>jiankong/software/G10.EXE" style="color:red; font-family:'宋体';">下载播放软件</a>
              </object></td>
		   <td>
		   	     <object id="UserProxy2"  
		   	     		style="width: 330px; height: 175px;background-color:#485869;z-index: -1;" 
		   	     		IsCamera="0" 
		   	     		classid="clsid:FA52021E-4027-454A-A71C-5D2EC565EFE9" 
		   	     		codebase="<%=basePath%>jiankong/software/G10.EXE"
                        value="0">
						<a href="<%=basePath%>jiankong/software/G10.EXE" style="color:red; font-family:'宋体';">下载播放软件</a>
                </object>
				</td>
            </tr>
            <tr>
                <td style="background-color: #485869">
                <center>
                    <img onclick="closeDevice('UserProxy1')" src="<%=basePath%>jiankong/VideoMonitoringImg/stop.gif" alt="停止播放" title="停止播放" style="cursor: pointer;" />
<%--                    <img id="UserProxy1Video" onclick="RecordOrStopRecord('UserProxy1')" src="<%=basePath%>jiankong/VideoMonitoringImg/video.gif" alt="开始录像" title="开始录像" style="cursor: pointer;" />--%>
<%--                    <img onclick="CapturePic('UserProxy1')" src="<%=basePath%>jiankong/VideoMonitoringImg/photoGraph.gif" alt="照相" title="照相" style="cursor: pointer;" />--%>
<%--                    <img onclick="FullScreen('UserProxy1')" src="<%=basePath%>jiankong/VideoMonitoringImg/fullScreen.gif" alt="全屏" title="全屏" style="cursor: pointer;" />--%>
<%--                    <img onclick="SetEnableSound('UserProxy1',0)" src="<%=basePath%>jiankong/VideoMonitoringImg/close.gif" alt="静音" title="静音" style="cursor: pointer;" />                --%>
                </center>    
                </td>
                <td style="background-color: #485869">
                <center>
                    <img onclick="closeDevice('UserProxy2')" src="<%=basePath%>jiankong/VideoMonitoringImg/stop.gif" alt="停止播放" title="停止播放" style="cursor: pointer;" />
<%--                    <img id="UserProxy2Video" onclick="RecordOrStopRecord('UserProxy2')" src="<%=basePath%>jiankong/VideoMonitoringImg/video.gif" alt="开始录像" title="开始录像" style="cursor: pointer;" />--%>
<%--                    <img onclick="CapturePic('UserProxy2')" src="<%=basePath%>jiankong/VideoMonitoringImg/photoGraph.gif" alt="照相" title="照相" style="cursor: pointer;" />--%>
<%--                    <img onclick="FullScreen('UserProxy2')" src="<%=basePath%>jiankong/VideoMonitoringImg/fullScreen.gif" alt="全屏" title="全屏" style="cursor: pointer;" />--%>
<%--                    <img onclick="SetEnableSound('UserProxy2',0)" src="<%=basePath%>jiankong/VideoMonitoringImg/close.gif" alt="静音" title="静音" style="cursor: pointer;" />                --%>
                 </center>
                 </td>
            </tr>
            <tr>
			<!--iscamera="0"-->
              <td >
                    <object id="UserProxy3" 
                    		style="width: 330px; height: 175px; background-color:#485869;z-index: -1;" 
                    		IsCamera="0" 
                    		classid="clsid:FA52021E-4027-454A-A71C-5D2EC565EFE9" 
                    		codebase="<%=basePath%>jiankong/software/G10.EXE"
                        	value="0" >
						<a href="<%=basePath%>jiankong/software/G10.EXE" style="color:red; font-family:'宋体';">下载播放软件</a>
                    </object>
					</td>
					<td>
					<div style="z-index:-1">
                    <object id="UserProxy4" 
                    		style="width: 330px; height: 175px; background-color:#485869;" 
                    		IsCamera="0" 
                    		classid="clsid:FA52021E-4027-454A-A71C-5D2EC565EFE9" 
                    		codebase="<%=basePath%>jiankong/software/G10.EXE"
                        	value="0">
						<%--http://www.macromedia.com/go/getflashplayer--%>
						<param name="wmode" value="transparent"> <!--2.必须把FLASH设置为透明--> 
						<a href="<%=basePath%>jiankong/software/G10.EXE" style="color:red; font-family:'宋体';">下载播放软件</a>
                    </object>
                    </div>
                    </td>
            </tr>
             <tr>
                <td style="background-color: #485869">
                    <center>
                    <img onclick="closeDevice('UserProxy3')" src="<%=basePath%>jiankong/VideoMonitoringImg/stop.gif" alt="停止播放" title="停止播放" style="cursor: pointer;" />
<%--                    <img id="UserProxy3Video" onclick="RecordOrStopRecord('UserProxy3')" src="<%=basePath%>jiankong/VideoMonitoringImg/video.gif" alt="开始录像" title="开始录像" style="cursor: pointer;" />--%>
<%--                    <img onclick="CapturePic('UserProxy3')" src="<%=basePath%>jiankong/VideoMonitoringImg/video.gif" alt="照相" title="照相" style="cursor: pointer;" />--%>
<%--                    <img onclick="FullScreen('UserProxy3')" src="<%=basePath%>jiankong/VideoMonitoringImg/fullScreen.gif" alt="全屏" title="全屏" style="cursor: pointer;" />--%>
<%--                    <img onclick="SetEnableSound('UserProxy3',0)" src="<%=basePath%>jiankong/VideoMonitoringImg/close.gif" alt="静音" title="静音" style="cursor: pointer;" />--%>
                    </center>
                 </td>
                <td style="background-color: #485869">
                 <center>
                    <img onclick="closeDevice('UserProxy4')" src="<%=basePath%>jiankong/VideoMonitoringImg/stop.gif" alt="停止播放" title="停止播放" style="cursor: pointer;" />
<%--                    <img id="UserProxy4Video" onclick="RecordOrStopRecord('UserProxy4')" src="<%=basePath%>jiankong/VideoMonitoringImg/video.gif" alt="开始录像" title="开始录像" style="cursor: pointer;" />--%>
<%--                    <img onclick="CapturePic('UserProxy4')" src="<%=basePath%>jiankong/VideoMonitoringImg/photoGraph.gif" alt="照相" title="照相" style="cursor: pointer;" />--%>
<%--                    <img onclick="FullScreen('UserProxy4')" src="<%=basePath%>jiankong/VideoMonitoringImg/fullScreen.gif" alt="全屏" title="全屏" style="cursor: pointer;" />--%>
<%--                    <img onclick="SetEnableSound('UserProxy4',0)" src="<%=basePath%>jiankong/VideoMonitoringImg/close.gif" alt="静音"  title="静音" style="cursor: pointer;" />                --%>
                  </center>
                </td>
            </tr>
        </table>
    </center>
	<%--隐藏的.dll文件obj对象--%>
    <OBJECT id="SDClientRegDll"
	  classid="clsid:B478BA1A-DA42-4819-8179-ED3E52C6588C"
	  width=350
	  height=250
	  hspace=0
	  vspace=0
	  style="display:none">
	</OBJECT>
    
</body>
</html>
