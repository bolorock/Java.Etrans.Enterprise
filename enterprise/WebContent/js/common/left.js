function getHeight() {
	var height;
	var height;
	height =document.documentElement.clientHeight;//window.screen.availHeight;
	 var sys=getExplorerType();
	 if(sys.ie){
		 height=height-60;
	 }else if(sys.firefox){
		 height=height-60;
	 }else if(sys.chrome){
		 height=height-60;
	 }
	return height;
}
function getExplorerType(){
	  var Sys = {};
    var ua = navigator.userAgent.toLowerCase();
    if (window.ActiveXObject)
        Sys.ie =true;
    else if (navigator.userAgent.indexOf("Firefox")>0)
        Sys.firefox =true;
    else if (window.MessageEvent && !document.getBoxObjectFor)
        Sys.chrome =true
    else if (window.opera)
        Sys.opera =true
    else if (window.openDatabase)
        Sys.safari = true
	return Sys;
}