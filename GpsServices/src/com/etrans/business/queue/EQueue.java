package com.etrans.business.queue;
/** 
 * E队列
 * 
 * @author Pomelo(柚子.)  
 * @version 1.0
 * @since 创建时间：2013-7-3 下午5:42:04 
 */
public interface EQueue {
	/**
	 * 存储消息
	 * 
	 * @param message
	 */
	public void produce(String message);
	
	/**
	 * 消费消息
	 * 
	 * @return
	 */
	public String consume();
	
	/**
	 * 队列大小s
	 * @return
	 */
	public int size();
	
	/**
	 * 转换成数组
	 * 
	 * @param a
	 * @return
	 */
	public String[]  toArray(String[] a);
}

