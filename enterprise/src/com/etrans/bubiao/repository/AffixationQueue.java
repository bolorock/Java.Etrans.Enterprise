package com.etrans.bubiao.repository;

import java.util.concurrent.ConcurrentLinkedQueue;

import com.etrans.bubiao.sys.Constants;

/**
 * 附加信息接收队列
 * @author lujunyong
 * 2013-6-8
 * @version 1.0
 */
public class AffixationQueue {
	
	private ConcurrentLinkedQueue<String> queue = new ConcurrentLinkedQueue<String>();// 队列	
	
	/**
	 * 将值存入队列中
	 * */
	public void produce(String message) {
		queue.add(message);//入列【添加一条数据】
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
