
$(function(){
	
	
	/**
	 * 文本输入框鼠标移上改变样式
	 */
	$(".jh_yanzheng").mouseover(function(){
		
		$(this).addClass("jh_yanzhenghover");
		$(this).removeClass("jh_yanzheng");
	});
	

	/**
	 * 文本输入框鼠标移走还原样式
	 */
	$(".jh_yanzheng").mouseout(function(){
		
		$(this).addClass("jh_yanzheng");
		$(this).removeClass("jh_yanzhenghover");
	});
	
	
	
	
	/**
	 * 刷新验证码
	 */
	$("#btn_changeCode").click(function() {

		$("#imgCode").attr("src", "authImg?now=" + new Date());
	});
	
	/**
	 * 绑定登录事件
	 */
	$("#btnLogin").click(login);
	
	
	/**
	 * 重置
	 */
	$("#btnReset").click(resetInput);

});




/**
 * 登录
 */
function login()
{
	var userName = $("#txtUserName").val();
	var password = $("#txtPassword").val();
	var authCode = $("#txtAuthCode").val();
	
	var err_tip=$("#divErrorTip");

	if(userName=="" ||userName.length==0)
	{
		err_tip.html("您的用户名为空,请您重新输入！");
		err_tip.show();
		return;
	}
	
	if(password=="" ||password.length==0)
	{
		err_tip.html("您的密码为空,请您重新输入！");
		err_tip.show();
		return;
	}
	
	if(authCode=="" ||authCode.length==0)
	{
		err_tip.html("您的验证码为空,请您重新输入！");
		err_tip.show();
		return;
	}
	
	
    var blnAuthCodeValid = authCodeValid(authCode);
	
	if(!blnAuthCodeValid)
	{
		err_tip.html("验证码错误！");
		err_tip.show();
		return;
	}
	
	var blnUserValid = userValid(userName,password);
	
	if(blnUserValid!=null)
	{
		err_tip.html(blnUserValid);
		err_tip.show();
		return;
	}
	err_tip.hide();
	
	$("#loginForm").submit();
}


/**
 * 用户名密码校验
 */
function userValid(username,password)
{
	
	var blnValid = null;

	$.ajax({
		url:"pub/loginValid.action",
		type:"POST",
		async:false,
		data:{"username":username,"password":password},
		success:function(msg){	
			if(msg=="SUCCESS"){
				blnValid=null;
			}else if(msg=="FAIL_0"){
				blnValid="用户名或密码错误，请确认后重新登录！";
			}else if(msg=="FAIL_1_1"){
				blnValid="此用户已被禁用，请联系管理员！";
			}else if(msg=="FAIL_1_2"){
				blnValid="此用户已被删除，请联系管理员！";
			}else if(msg=="FAIL_2_0"){
				blnValid="此用户已过期，请联系管理员！";
			}else if(msg=="FAIL_3_0"){
				blnValid="异常代码:1122，网络繁忙，数据加载失败，请稍后再试！";
			}
		}
		
	});
	
	return blnValid;
	
}


/**
 * 验证码校验
 * @param authCode
 * @returns {Boolean}
 */
function authCodeValid(authCode)
{

	var result = false;

	$.ajax( {
		type : "POST",
		url : "pub/authCodeValid.action",
		dataType : "text",
		async : false,
		data : {authCode : authCode,ds : new Date()},
		success : function(msg) 
		{
			if (msg == "SUCCESS") 
			{
				result = true;
			}
			else
			{
				$("#imgCode").attr("src", "authImg?now=" + new Date());
			}
		}
	});

	return result;
}



/**
 * 重置输入框
 */
function resetInput()
{
	 $("#txtUserName").val("");
	 $("#txtPassword").val("");
	 $("#txtAuthCode").val("");
}