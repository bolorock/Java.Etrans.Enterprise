package com.etrans.system;

import org.apache.log4j.Logger;

/**
 * MQ数据中心启动类
 * 
 * @author Pomelo(柚子.)
 * @since 2012-12-10 14:14
 * @version 1.0
 */
public class StarUP {

	/** 日志对象*/
	private static Logger logger = Logger.getLogger(StarUP.class);
	
	/**
	 * ＭＱ数据中心主方法
	 * 
	 * 
	 * @param args
	 */
	public static void main(String[] args) {
		try {
			new RmiServerRegister().registerRmiServer();
			RunRecFromMscChannelThread receFromMscThread = new RunRecFromMscChannelThread();
			Thread thread1 = new Thread(receFromMscThread);
			thread1.start();
		} catch (Exception e) {
			logger.error(e.getMessage());
		}
	}
}
