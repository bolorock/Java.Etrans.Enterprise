package com.etrans.common.util.cache;

import java.lang.reflect.Method;
import java.util.List;
import net.sf.ehcache.Cache;
import org.apache.log4j.Logger;
import org.springframework.aop.AfterReturningAdvice;
import org.springframework.beans.factory.InitializingBean;
import org.springframework.util.Assert;


public class MethodCacheAfterAdvice implements AfterReturningAdvice,
		InitializingBean {

	/** The logger. */
	private static Logger logger = Logger
			.getLogger(MethodCacheAfterAdvice.class);

	/** The DEBUG. */
	private static boolean DEBUG = true;

	/**
	 * 用作DEBUG 发布时修改为 false 即可.
	 * 
	 * @param obj
	 *            the obj
	 */
	public static void debug(Object obj) {
		if (DEBUG)
			logger.info(obj);
	}

	/** The cache. */
	private Cache cache;

	/**
	 * Sets the cache.
	 * 
	 * @param cache
	 *            the new cache
	 */
	public void setCache(Cache cache) {
		this.cache = cache;
	}

	/**
	 * Instantiates a new method cache after advice.
	 */
	public MethodCacheAfterAdvice() {
		super();
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see org.springframework.aop.AfterReturningAdvice#afterReturning(java.lang.Object,
	 *      java.lang.reflect.Method, java.lang.Object[], java.lang.Object)
	 */
	public void afterReturning(Object arg0, Method arg1, Object[] arg2,
			Object arg3) throws Throwable {
		String className = arg3.getClass().getName();
		List<?> list = cache.getKeys();
		for (int i = 0; i < list.size(); i++) {
			String cacheKey = String.valueOf(list.get(i));
			if (cacheKey.startsWith(className)) {
				cache.remove(cacheKey);
				debug("Remove Cache> >> >> >> >> > > " + cacheKey);
			}
		}
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see org.springframework.beans.factory.InitializingBean#afterPropertiesSet()
	 */
	public void afterPropertiesSet() throws Exception {
		Assert.notNull(cache,
				"Need a cache. Please use setCache(Cache) create it.");
	}
}
