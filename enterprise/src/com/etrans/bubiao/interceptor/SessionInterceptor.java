package com.etrans.bubiao.interceptor;

import java.util.Map;

import com.etrans.bubiao.sys.Constants;
import com.opensymphony.xwork2.Action;
import com.opensymphony.xwork2.ActionInvocation;
import com.opensymphony.xwork2.interceptor.Interceptor;


/**
 * 登陆session拦截器
 * @author Ivan
 * @version 1.0
 * @brief
 */
public class SessionInterceptor implements Interceptor {

	private static final long serialVersionUID = 5458936346743520251L;

	public void destroy() {
	}

	public void init() {
	}

	public String intercept(ActionInvocation actionInvocation) throws Exception 
	{
		Map<String,Object> session = actionInvocation.getInvocationContext().getSession();
		
		Object obj = session.get(Constants.LOGIN_USER);
		if (obj == null)
			return Action.LOGIN;

		return actionInvocation.invoke();
	}

}
