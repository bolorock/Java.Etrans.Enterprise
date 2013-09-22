package com.etrans.common.invoker;

import java.lang.reflect.Field;
import java.lang.reflect.InvocationTargetException;

/** 
 * GetFieldInvoker
 * @author Pomelo(柚子.)  
 * @version 1.0
 * @since 创建时间：2013-2-4 下午1:34:48 
 */
public class GetFieldInvoker implements Invoker {
	
	private Field field;
	private String name;

	public GetFieldInvoker(Field field) {
		this.field = field;
		this.name = ("(" + field.getName() + ")");
	}

	public Object invoke(Object target, Object[] args)
			throws IllegalAccessException, InvocationTargetException {
		return this.field.get(target);
	}

	public String getName() {
		return this.name;
	}

}
