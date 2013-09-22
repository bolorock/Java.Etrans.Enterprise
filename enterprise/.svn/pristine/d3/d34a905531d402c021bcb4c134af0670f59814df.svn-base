package com.etrans.bubiao.repository;

import java.util.concurrent.ConcurrentLinkedQueue;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;


/**
 * 区域信息接收队列
 * @author yangzhen
 * 2013-08-24
 * @version 1.0
 */
public class AreaInfoQueue {
	
	private ConcurrentLinkedQueue<String> queue = new ConcurrentLinkedQueue<String>();// 队列	
	
	private final Log logger = LogFactory.getLog(AreaInfoQueue.class.getName());
	/**
	 * 将值存入队列中
	 * */
	public void produce(String message) {
		try{
			queue.add(message);
		}catch (Exception e) {
			logger.info("区域信息数据入队列出错,密文:" + message);
			e.printStackTrace();
		}
		
	}
	
	/**
	 * 取队列值,并删除所取值
	 * */
	public synchronized String consume() {
		String message = null;
		if (!queue.isEmpty()) {
			message = (String) queue.poll();
		}
		return message;
	}
	
	
	/**
	 * 取队列
	 * */
	public ConcurrentLinkedQueue<String> getBusinessQueue() {
		return queue;
	}
	
	/**
	 * 清空队列
	 * */
	public void clearBusinessQueue() {
		queue.clear();
	}
	
	/**
	 * 删除队列中的某值
	 * */
	public void removeBusinessQueue(String businessQueue) {
		queue.remove(businessQueue);
	}
	

}
