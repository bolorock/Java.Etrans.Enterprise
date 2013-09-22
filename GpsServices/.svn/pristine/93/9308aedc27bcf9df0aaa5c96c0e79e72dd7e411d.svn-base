package com.etrans.business.queue;

import java.util.concurrent.ConcurrentLinkedQueue;

/** 
 * 数据存储队列
 * 
 * @author Pomelo(柚子.)  
 * @version 1.0
 * @since 创建时间：2013-7-3 下午3:22:25 
 */
public class EtransLinkedQueue implements EQueue{
	
	private ConcurrentLinkedQueue<String> queue = new ConcurrentLinkedQueue<String>(); 
	
	/**
	 * 将值存入队列中
	 * 
	 * @param message 消息
	 */
	public void produce(String message) {
		queue.add(message);
	}

	/**
	 * 取队列值,并删除所取值
	 */
	public String consume() {
		String message = null;
		if (!queue.isEmpty()) {
			message = (String) queue.poll();
		}
		return message;
	}

	/**
	 * 次队列统计大小效率较低,非同步队列不再统计队列大小
	 * 
	 * @return size
	 */
	@Override
	public int size() {
		return 0;
	}

	@Override
	public String[] toArray(String[] a) {
		return queue.toArray(a);
	}
	
}

