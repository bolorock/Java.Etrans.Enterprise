/**
 * 页面加载完毕时执行操作
 */
$(function(){
	$.formValidator.initConfig({
		formid:"addForm",
		onerror:function(msg){
			alert(msg);
		},
		onsuccess:function(){
			updatePassword();
			return false;
		}
	});
	$("#txtOddPassword").formValidator({
				onshow:"请输入旧密码",
				onfocus:"请输入旧密码", 
				oncorrect:" " }
			).inputValidator({
				min:1,
				max:32,
				onerror:" 旧密码长度不正确 " 
			}).ajaxValidator({ 
			      type:"POST", 
			      url:"sys/user/checkUserPassword.action",
			      success : function(data){ 
			      				if(data=="true")
			      					return true;
			      				else
			      					return false;
			      			}, 
			      error: function(){alert('服务器忙，请重试！');}, 
			      onerror : "旧密码错误", 
			      oncorrect:"旧密码正确",
			      onwait : "正在校验，请稍候..." 
   });



$("#txtPassword").formValidator({onshow:"请输入密码",onfocus:"最少4个字符，最多32个字符", oncorrect:"输入正确"}).inputValidator(
		{
			min:4,
			max:32,
			empty:{
				leftempty:false,
				rightempty:false,
				emptyerror:"密码两边不能有空符号"
			},
			onerror:"密码长度不正确！" })


$("#txtPassword2").formValidator({
			onshow:"请输入确认密码",
			onfocus:"确认密码必须与密码保持一致",
			oncorrect:"输入正确"})
				.inputValidator({
					min:4,
					max:32,
					empty:{
						leftempty:false,
						rightempty:false,
						emptyerror:"密码两边不能有空符号"
						},
						onerror:"确认密码不能为空" 
				})	
		 .compareValidator({
			 desid:"txtPassword",
			 operateor:"=",
			 datatype:"string",
			 onerror:"两次输入密码不一致"
		});

});

///**
// * 初始化按钮事件
// */
//function initButtonEvents() {
//	$("#saveBut").click(function(){
//		var flag = $("#formTable").beforeSubmit();
//		if(flag == false)
//			return false;
//	
//		var oddPasswrod = $.trim($("#oddPasswrod").val()); // 功能名称
//		var password = $.trim($("#password").val()); // 功能代码
//		var password2 = $.trim($("#password2").val());// 功能图标	 
//
//		// 设置保存相关参数
//		var saveParams = {
//			"oddPasswrod" : oddPasswrod,
//			"password" : password,
//			"password2" : password2
//		};
//	});
//	/**
//	 * 取消按钮事件
//	 */
//	$("#cancelBut").click(function(){
//		parent.window.close();
//	});
//}

 function updatePassword(){
	$.ajax({ 
	       type:"POST", 
	       url:"sys/user/passwordUpdate.action",
	       data:{"txtPassword":$('#txtPassword').val()},
		   dateType:"text",
	       success : function(result){ 
	       		if(result=="true"){
	       			alert("修改成功！");
	       			parent.closeDialog();
	       		}
	       		else{
	       			alert('修改失败！'); 
	       		}
	       }
		});
	}