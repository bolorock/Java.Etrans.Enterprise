/**数据库参数**/
//锐明：
//TransmitIP=203.88.210.56,TransmitPort=17891,TransmitPort_TCP=6226,Kind=121,ID=dns:AB0333,Channel=0&1&2&3 
// 
//TransmitIP：视频服务器IP
//TransmitPort：视频服务器端口
//TransmitPort_TCP：注册服务端口TCP协议使用
//ID：视频设备ID
//Kind：设备类型（固定）
//Channel：终端通道列表 0&1&2&3 表示 安装有0、1、2、3   4个通道


$(function(){
//	alert("ssL:"+TransmitIP);
//	alert(Kind);
//	alert(ID);
//	alert(Channel);
		load();
	});
/**
*初始化
*/
function load(){
     this.ShowCamera();
}
function ShowCamera() {
    PalyByServerIPAndVideoID(TransmitIP,ID,Channel);
}

//播放指定的ServerIP与VideoID视频监控Channels是通道数
function PalyByServerIPAndVideoID(ServerIP, VideoID, Channels) {
    //alert(Channels);
     //获取视屏总个数
    var cameraCount = 4;
    var cameraid;
    var objCamera;
    var ss;
    var ClosedCamera = []; 
    var cameraArray = [];
    for (var i = 1; i < cameraCount+1; i++) {
        cameraid = "UserProxy" + i;
        //ss=window.document.getElementById(cameraid);
		var ss = $("#"+cameraid).attr("value");
        if (ss=="0") {
            ClosedCamera.push(cameraid);
        }
    }
    if (ClosedCamera == "") {
        alert("当前全部录像窗口已经打开，需要关闭部分窗口后方可继续打开");
        return false;
    }
    //获取当前可用的视屏数
    var vediocount = 4;
    //获取当前摄像头的通道数
    ChannelArray = Channels.split('-');
	//alert("ChannelArray通道数:"+ChannelArray);
    if (vediocount < ChannelArray.length) {
        alert("当前视屏为关闭状态的个数只有" + vediocount + "个,请确保至少有" + ChannelArray.length + "个");
        return false;
    }
    //初始化视频
    
    for (var i = 0; i < vediocount; i++) {
    //alert("ClosedCamera[0]:"+ClosedCamera[i]);
        Init(ClosedCamera[i], ServerIP, VideoID);
    }
    //播放视频
    for (var j = 0; j < ChannelArray.length; j++) {
        Play(ClosedCamera[j], j);
    }
}

//初始化
function Init(objects, ServerIP, VideoID) {
    var objOcx =window.document.getElementById(objects);
    var iRet;
	//设置设备信息
    iRet = objOcx.SetDeviceInfo2(Kind, VideoID, ServerIP);
	//打开设备
        iRet = objOcx.SetRegIP(ServerIP);
}
   
//开始播放
function Play(objects, Channel) {
    var objOcx = window.document.getElementById(objects);
	$("#"+objects).attr("value","0")
    var iRet;
    objOcx.OpenVideo(Channel);
}	

////////////////////////////////////////功能////////////////////////////////////////////

//结束播放
function Stop(objOcxID) {
    var objOcx = window.document.getElementById(objOcxID);
    var iRet;
	$("#"+objOcxID).attr("value","0");
    objOcx.CloseVideo();
}

//打开或关闭声音bEnable 0 关闭，1打开
function SetEnableSound(objOcxID,bEnable) {
    var objOcx = window.document.getElementById(objOcxID);
    objOcx.SetEnableSound(bEnable);
}

//全屏
function FullScreen(objOcxID) {
    var objOcx = window.document.getElementById(objOcxID);
    objOcx.FullScreen();
}

//抓图
function CapturePic(objOcxID) {
    var objOcx = window.document.getElementById(objOcxID);
	var path = "D:\\视屏截图"+objOcxID+".jpg";
    var res = objOcx.CapturePic(path, 0);
    if (res == 0) {
        alert("拍照成功，视屏截图"+objOcxID+".jpg");
    }else{
    	 alert("拍照失败!");
       }
}

//////////////////////////////////////测试begin///////////////////////////////////////////////////////////
/////////////录像
function lujunyong(op){
	 var objOcx = window.document.getElementById("UserProxy1");
	 objOcx.Save(op);
}

//下载录像文件并转换成AVI 
function lujunyong2(){
 	var objOcx = window.document.getElementById("UserProxy1");
	var res = objOcx.PlayOpen("D:\\视屏录像.avi",7310,0);
	objOcx.PlaySeek(5);
	alert("结果0就成功："+res);
}
//////////////////////////////////////测试end//////////////////////////////////////////////////////////////



//开始或者停止录像
function RecordOrStopRecord(objOcxID) {
    var objOcx = window.document.getElementById(objOcxID);
	var isCamera = $("#"+objOcxID).attr("IsCamera");
    if (isCamera == "0") {
	 	$("#"+objOcxID).attr("IsCamera","1");
		$("#"+objOcxID+"Video").attr("alt","停止录像");
		$("#"+objOcxID+"Video").attr("title","停止录像");
		Record(objOcxID);
    }
    else {
        $("#"+objOcxID).attr("IsCamera","0");
		$("#"+objOcxID+"Video").attr("alt","开始录像");
		$("#"+objOcxID+"Video").attr("title","开始录像");
        StopRecord(objOcxID);
    }
}
//保存录像路径Record
function Record(objOcxID) {
    var objOcx = window.document.getElementById(objOcxID);
	//var objOcx=$("#"+objOcxID);
//<%--           // var path = '<%=bp%>'+"\\jiankong\\video\\视屏录像.avi";--%>
   // var path = '/F:/YC_java/work/.metadata/.plugins/org.eclipse.wst.server.core/tmp0/wtpwebapps/enterprise/'+"\\jiankong\\video\\视屏录像.avi";
    var path = "D:\\ljy\\视屏录像.avi";
    var result = objOcx.Record(path);
    if(result=="0")
    alert("开始录像");
}
//停止录像
function StopRecord(objOcxID) {
    var objOcx = window.document.getElementById(objOcxID);
    objOcx.StopRecord();
    alert("停止录像成功,文件存放在"+"D:\\ljy\\视屏录像.avi");
}
      