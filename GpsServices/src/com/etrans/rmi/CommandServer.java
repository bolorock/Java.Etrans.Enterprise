package com.etrans.rmi;


/** 
 * 指令服务接口
 * 
 * @author Pomelo(柚子.)  
 * @version 1.0
 * @since 创建时间：2013-7-5 下午1:47:27 
 */
public interface CommandServer{
	
	/**
	 * 插入指令发送队列
	 * 
	 * @param message
	 * @throws Exception 
	 */
	public void insertCommandSendQueue(String message) throws Exception;
}

