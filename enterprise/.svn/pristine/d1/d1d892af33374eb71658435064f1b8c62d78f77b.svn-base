<%@ page language="java" contentType="text/html; charset=UTF-8"    pageEncoding="UTF-8"%>
<%@ taglib uri="/auth-tags"  prefix="auth"%>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>系统登录</title>
<link type="text/css" rel="stylesheet" href="css/login.css">
<script type="text/javascript" src="js/jq/jquery-1.7.1.min.js"></script>
<script type="text/javascript" src="js/login.js"></script>

<style type="text/css">

*{margin:0;padding:0;font-size:12px;}
.wrapper{width:80%;margin:0 auto;}
/*通用样式--容器宽度值*/
.sharp{width:60%;margin:0 auto;}

.content{height:180px;}
h3{height:29px;line-height:29px;font-size:12px;text-indent:10px;}
a:link,a:visited{color:#999;font-weight:bold; text-decoration:none;}
a:hover{text-decoration:none; border-bottom:1px orange solid;color:orange;}

/*上圆角框通用设置样式，如果要运用多个不同颜色，以下6句不用重新变化--------------------------------*/
.b1,.b2,.b3,.b4,.b5,.b6,.b7,.b8{height:1px; font-size:1px; overflow:hidden; display:block;}
.b1,.b8{margin:0 5px;}
.b2,.b7{margin:0 3px;border-right:2px solid; border-left:2px solid;}
.b3,.b6{margin:0 2px;border-right:1px solid; border-left:1px solid;}
.b4,.b5{margin:0 1px;border-right:1px solid; border-left:1px solid; height:2px;}
.content {border-right:1px solid;border-left:1px solid;overflow:hidden;}
/*颜色方案一,蓝色边框----------------------------------------*/
/*下面第一、二句决定边框颜色，第三句决定背景颜色*/
/*边框色*/
.color1 .b2,.color1 .b3,.color1 .b4,.color1 .b5,.color1 .b6,.color1 .b7,.color1 .content{border-color:#96C2F1;}
.color1 .b1,.color1 .b8{background:#96C2F1;}
/*背景色*/
.color1 .b2,.color1 .b3,.color1 .b4,.color1 .b5,.color1 .b6,.color1 .b7,.color1 .content{background:#EFF7FF;}

/*颜色方案二,绿色边框----------------------------------------*/
/*下面第一、二句决定边框颜色，第三句决定背景颜色*/
/*边框色*/
.color2 .b2,.color2 .b3,.color2 .b4,.color2 .b5,.color2 .b6,.color2 .b7,.color2 .content{border-color:#9BDF70;}
.color2 .b1,.color2 .b8{background:#9BDF70;}
/*背景色*/
.color2 .b2,.color2 .b3,.color2 .b4,.color2 .b5,.color2 .b6,.color2 .b7,.color2 .content{background:#F0FBEB;}

/*颜色方案三,绿色边框----------------------------------------*/
/*下面第一、二句决定边框颜色，第三句决定背景颜色*/
/*边框色*/
.color3 .b2,.color3 .b3,.color3 .b4,.color3 .b5,.color3 .b6,.color3 .b7,.color3 .content{border-color:#BBE1F1;}
.color3 .b1,.color3 .b8{background:#BBE1F1;}
/*背景色*/
.color3 .b2,.color3 .b3,.color3 .b4,.color3 .b5,.color3 .b6,.color3 .b7,.color3 .content{background:#EEFAFF;}

/*颜色方案四,绿色边框----------------------------------------*/
/*下面第一、二句决定边框颜色，第三句决定背景颜色*/
/*边框色*/
.color4 .b2,.color4 .b3,.color4 .b4,.color4 .b5,.color4 .b6,.color4 .b7,.color4 .content{border-color:#E3E197;}
.color4 .b1,.color4 .b8{background:#E3E197;}
/*背景色*/
.color4 .b2,.color4 .b3,.color4 .b4,.color4 .b5,.color4 .b6,.color4 .b7,.color4 .content{background:#FFFFDD;}

/*颜色方案五,粉色边框----------------------------------------*/
/*下面第一、二句决定边框颜色，第三句决定背景颜色*/
/*边框色*/
.color5 .b2,.color5 .b3,.color5 .b4,.color5 .b5,.color5 .b6,.color5 .b7,.color5 .content{border-color:#F8B3D0;}
.color5 .b1,.color5 .b8{background:#F8B3D0;}
/*背景色*/
.color5 .b2,.color5 .b3,.color5 .b4,.color5 .b5,.color5 .b6,.color5 .b7,.color5 .content{background:#FFF5FA;}

/*颜色方案六,黄色边框----------------------------------------*/
/*下面第一、二句决定边框颜色，第三句决定背景颜色*/
/*边框色*/
.color6 .b2,.color6 .b3,.color6 .b4,.color6 .b5,.color6 .b6,.color6 .b7,.color6 .content{border-color:#FFCC00;}
.color6 .b1,.color6 .b8{background:#FFCC00;}
/*背景色*/
.color6 .b2,.color6 .b3,.color6 .b4,.color6 .b5,.color6 .b6,.color6 .b7,.color6 .content{background:#FFFFF7;}


</style>
</head>
<body>



<div class="wrapper">

	<div class="sharp color6" style="margin-top: 10%">
	
		  <b class="b1"></b><b class="b2"></b><b class="b3"></b><b class="b4"></b> 
          <div class="content" style="height: 300px">  
          
          	<form action="sys/login.action" id="loginForm">
             <div class="error_tip" id="divErrorTip"></div>
	           <div class="new_construct" style="margin-top: 10px">
		            <div class="new_item">
		            	<div class="tit"> 
		            		<em>*</em> 用户名
		            	</div>
		            	<div class="bdmain">
				            	<div class="jh_yanzheng">
				            		<strong>
				              		   <input id="txtUserName" type="text" class="textinp"  style="width: 300px; color: rgb(153, 153, 153);"/> 
				              		</strong>
				              	</div>
		              	</div>
		            </div>
		            
		            
		             <div class="new_item">
		            	<div class="tit"> 
		            		<em>*</em> 密码
		            	</div>
		            	<div class="bdmain">
				            	<div class="jh_yanzheng">
				            		<strong>
				              		   <input id="txtPassword" type="password" class="textinp"  style="width: 300px; color: rgb(153, 153, 153);" /> 
				              		</strong>
				              	</div>
		              	</div>
		            </div>
		            
	           </div> 
	           
	           <div class="dv_login_btn">
	            	<a id="btnLogin" href="javascript:void(0)" class="btnLogin" style="color: #fff">登  录</a>
	           	</div>
	          </form> 
          </div>
        <b class="b5"></b><b class="b6"></b><b class="b7"></b><b class="b8"></b>  
		
	</div>
</div>



</body>
</html>