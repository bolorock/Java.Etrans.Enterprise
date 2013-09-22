package com.etrans.common.util.cache;

import java.io.Serializable;

import net.sf.ehcache.Cache;
import net.sf.ehcache.Element;

import org.aopalliance.intercept.MethodInterceptor;
import org.aopalliance.intercept.MethodInvocation;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.InitializingBean;
import org.springframework.util.Assert;



/**
 * 拦截器,用于缓存方法返回结果.
 */

public class MethodCacheInterceptor implements MethodInterceptor, InitializingBean
{

	/** The Constant logger. */
	private static final Logger logger = Logger.getLogger(MethodCacheInterceptor.class);

	/** The cache. */
	private Cache cache;

	/**
	 * Sets the cache.
	 * 
	 * @param cache
	 *            the new cache
	 */
	public void setCache(Cache cache)
	{
		this.cache = cache;
	}

	/**
	 * Instantiates a new method cache interceptor.
	 */
	public MethodCacheInterceptor()
	{
		super();
	}

	/**
	 * 拦截Service/DAO的方法，并查找该结果是否存在，如果存在就返回cache中的值， 否则，返回数据库查询结果，并将查询结果放入cache.
	 * 
	 * @param invocation
	 *            the invocation
	 * 
	 * @return the object
	 * 
	 * @throws Throwable
	 *             the throwable
	 */
	public Object invoke(MethodInvocation invocation) throws Throwable
	{
		String targetName = invocation.getThis().getClass().getName();
		String methodName = invocation.getMethod().getName();
		Object[] arguments = invocation.getArguments();
		Object result;
		logger.debug("Find object from cache is " + cache.getName());
		String cacheKey = getCacheKey(targetName, methodName, arguments);
		Element element = cache.get(cacheKey);
		
		 long startTime = System.currentTimeMillis();
		if (element == null)
		{
			logger.debug("Hold up method , Get method result and create cache........!");
			result = invocation.proceed();
			element = new Element(cacheKey, (Serializable) result);
			cache.put(element);
		
			 long endTime = System.currentTimeMillis(); logger.info(targetName
			  + "." + methodName + " 方法被首次调用并被缓存。耗时" + (endTime - startTime) +
			  "毫秒" + " cacheKey:" + element.getKey());
			 
		}
		else
		{
			
			  long endTime = System.currentTimeMillis(); logger.info(targetName
			  + "." + methodName + " 结果从缓存中直接调用。耗时" + (endTime - startTime) +
			  "毫秒" + " cacheKey:" + element.getKey());
			 
			 }
		return element.getValue();
	}

	/**
	 * 获得cache key的方法，cache key是Cache中一个Element的唯一标识 cache key包括 包名+类名+方法名+参数.
	 * 
	 * @param targetName
	 *            the target name
	 * @param methodName
	 *            the method name
	 * @param arguments
	 *            the arguments
	 * 
	 * @return the cache key
	 */
	private String getCacheKey(String targetName, String methodName, Object[] arguments)
	{
		StringBuffer sb = new StringBuffer();
		sb.append(targetName).append(".").append(methodName);
		if ((arguments != null) && (arguments.length != 0))
		{
			for (int i = 0; i < arguments.length; i++)
			{
				sb.append(".").append(arguments[i]);
			}
		}
		return sb.toString();
	}

	/**
	 * implement InitializingBean，检查cache是否为空.
	 * 
	 * @throws Exception
	 *             the exception
	 */
	public void afterPropertiesSet() throws Exception
	{
		Assert.notNull(cache, "Need a cache. Please use setCache(Cache) create it.");
	}
}
