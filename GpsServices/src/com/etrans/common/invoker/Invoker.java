package com.etrans.common.invoker;

import java.lang.reflect.InvocationTargetException;

/** 
 * GetFieldInvoker
 * @author Pomelo(柚子.)  
 * @version 1.0
 * @since 创建时间：2013-2-4 下午1:34:48 
 */
public abstract interface Invoker {
	
	  public abstract String getName();

	  public abstract Object invoke(Object paramObject, Object[] paramArrayOfObject)
	    throws IllegalAccessException, InvocationTargetException;
}
