package com.etrans.common.invoker;

import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;

/** 
 * GetFieldInvoker
 * @author Pomelo(柚子.)  
 * @version 1.0
 * @since 创建时间：2013-2-4 下午1:34:48 
 */
public class MethodInvoker implements Invoker {
	private Method method;
	private String name;

	public MethodInvoker(Method method) {
		this.method = method;
		this.name = method.getName();
	}

	public Object invoke(Object target, Object[] args)
			throws IllegalAccessException, InvocationTargetException {
		return this.method.invoke(target, args);
	}

	public Method getMethod() {
		return this.method;
	}

	public String getName() {
		return this.name;
	}

}
