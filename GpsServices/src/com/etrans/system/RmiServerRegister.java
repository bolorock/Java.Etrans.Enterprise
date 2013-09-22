package com.etrans.system;

import org.apache.log4j.Logger;
import org.springframework.context.support.ClassPathXmlApplicationContext;
/** 
 * RMI服务注册
 * 
 * @author Pomelo(柚子.)  
 * @version 1.0
 * @since 创建时间：2013-7-10 下午4:52:03 
 */
public class RmiServerRegister {
	
	private Logger logger = Logger.getLogger(RmiServerRegister.class);
	
	/**
	 * registerRmiServer
	 * 
	 * <p>
	 * 注册RMI对外服务接口
	 * </p>
	 */
	public void registerRmiServer(){
        new ClassPathXmlApplicationContext("applicationContext.xml");
        logger.info("///////////////////Spring rmi 服务已启动///////////////////");
	}
}

