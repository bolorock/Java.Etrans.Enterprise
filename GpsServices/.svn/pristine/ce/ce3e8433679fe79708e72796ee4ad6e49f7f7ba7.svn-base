package com.etrans.business.queue;

import java.util.concurrent.ConcurrentLinkedQueue;

/** 
 * 同步队列
 * 
 * @author Pomelo(柚子.)  
 * @version 1.0
 * @since 创建时间：2013-7-3 下午6:34:53 
 */
public class EtransSynLinkQueue implements EQueue {
	
	private ConcurrentLinkedQueue<String> queue = new ConcurrentLinkedQueue<String>(); 
	private int countQueueSize=0;
	/**
	 * 将值存入队列中
	 * 
	 * @param message 消息
	 */
	public synchronized void produce(String message) {
		queue.add(message);
		++countQueueSize;
	}

	/**
	 * 取队列值,并删除所取值
	 */
	public String consume() {
		String message = null;
		if (!queue.isEmpty()) {
			message = (String) queue.poll();
			--countQueueSize;
		}
		return message;
	}
	
	/**
	 * 非同步队列不再统计队列大小
	 * 
	 * @return size
	 */
	@Override
	public synchronized int size() {
		return countQueueSize;
	}
	
	@Override
	public String[] toArray(String[] a) {
		return queue.toArray(a);
	}
}

