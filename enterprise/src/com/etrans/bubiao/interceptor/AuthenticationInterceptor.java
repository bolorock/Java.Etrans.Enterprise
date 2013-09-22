package com.etrans.bubiao.interceptor;

import java.util.List;
import java.util.Map;

import org.apache.log4j.Logger;

import com.etrans.bubiao.auth.SessionUser;
import com.etrans.bubiao.sys.Constants;
import com.opensymphony.xwork2.Action;
import com.opensymphony.xwork2.ActionInvocation;
import com.opensymphony.xwork2.interceptor.Interceptor;

/**
 * 权限拦截器
 * @author Ivan
 */

public class AuthenticationInterceptor implements Interceptor {

	private static final long serialVersionUID = -5458936346743520250L;

	private static Logger logger = Logger.getLogger(AuthenticationInterceptor.class.getName());

	public void destroy() {
	}

	public void init() {
	}

	public String intercept(ActionInvocation actionInvocation) throws Exception {
		Map<String, Object> session = actionInvocation.getInvocationContext().getSession();
		Object obj = session.get(Constants.LOGIN_USER);

		// 如果用户未登录
		if (obj == null) {
			return Action.LOGIN;
		}
		// 如果用户已登录, 则判断用户是否有访问当前资源的权限
		else {
			SessionUser user = (SessionUser) obj;
			String resources = user.getResources();

			String actionName = actionInvocation.getProxy().getActionName(); // Action名称
			logger.debug("Action路径：" + actionName);
			
			if (resources==null || resources.indexOf(actionName)==-1)
				return "auth_error";
		}

		return actionInvocation.invoke();

	}

}
