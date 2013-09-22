if (jsUtil == null) var jsUtil = {};


var DEFAULT_MSG="因网络不畅,数据加载未完成,请刷新页面!";


/**
 * 打开或者关闭一个面板
 */
jsUtil.showOrClosePanel=function (pannelId)
{
	$("#"+pannelId).slideToggle(500);
};



/**
 * 功能描述：公共调用AJAX方法
 * @param	    url(请求Action地址)必要
 * @param	    callBackFun(回调方法)必要
 * @param	    params(参数对象)必要
 * @author      llq
 * @since       Create on 2012-2-7
 * @version     Copyright (c) 2012 by e_trans. 
 */
jsUtil.useAjaxDefault=function(url,params,callBackFun){
	this.useAjax(url,params,callBackFun,null,true,null);
};

/**
 * 功能描述：公共调用AJAX方法
 * @param	    url(请求Action地址)必要
 * @param	    callBackFun(回调方法)必要
 * @param	    params(参数对象)必要
 * @param	    isAnsynce(是否同步)
 * @author      llq
 * @since       Create on 2012-2-7
 * @version     Copyright (c) 2012 by e_trans. 
 */
jsUtil.useAjaxDef=function(url,params,isAnsynce,callBackFun){
	this.useAjax(url,params,callBackFun,null,isAnsynce,null);
};


/**
 * 功能描述：公共调用AJAX方法
 * @param	    url(请求Action地址)必要
 * @param	    callBackFun(回调方法)必要
 * @param	    errFun(错误回调方法)
 * @param	    params(参数对象)必要
 * @author      llq
 * @since       Create on 2012-2-7
 * @version     Copyright (c) 2012 by e_trans. 
 */
jsUtil.defaultAjax=function(url,params,callBackFun,errMsg)
{
	this.useAjax(url,params,callBackFun,null,true,function(){alert(errMsg);});
};




/**
 * 功能描述：公共调用AJAX方法
 * @param	    url(请求Action地址)必要
 * @param	    callBackFun(回调方法)必要
 * @param	    params(参数对象)必要
 * @param	    dataType(xml|json)
 * @param	    isAnsynce(是否同步)
 * @param	    errMsgFun(错误处理)
 * @author      llq
 * @since       Create on 2012-2-7
 * @version     Copyright (c) 2012 by e_trans. 
 */
jsUtil.useAjax=function(url,params,callBackFun,dataType,isAnsynce,errMsgFun){
	
	 $.ajax( {
			type:"POST",
			url : url,
			data:params,
			async:isAnsynce==null?true:isAnsynce,
			dataType:dataType==null?"json":dataType,
			success : callBackFun,
			error : errMsgFun==null?this.alertErrorMsg:errMsgFun
		});
};

jsUtil.alertErrorMsg=function(msg){
	alert(DEFAULT_MSG);
};


jsUtil.test=function(url,param){
	$.post(url,param,function(data){alert(data);});
};

/**
 * 功能描述：公共调用AJAX方法
 * @param	    url(请求Action地址)必要
 * @param	    callBackFun(回调方法)必要
 * @param	    params(参数对象)必要
 * @param	    dataType(xml|json)
 * @param	    isAnsynce(是否同步)
 * @param	    errMsgFun(错误处理)
 * @author      llq
 * @since       Create on 2012-2-7
 * @version     Copyright (c) 2012 by e_trans. 
 */
jsUtil.security=function(operation,callBackFun){
	this.useAjaxDefault("auth/security.action", operation, callBackFun);
}

