/**    
 * GpsInfoQueue.java
 * Create on 2010-8-3
 * Copyright (c) 2010 by e_trans. 
 */
package com.etrans.bubiao.repository;

/**
 * 
 */

import java.util.concurrent.ConcurrentLinkedQueue;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

import com.etrans.bubiao.sys.Constants;

/**
 * 定位数据接收队列
 * @author lihaiyan
 * @version 1.0
 */

public class GpsInfoQueue {
	private ConcurrentLinkedQueue<String> queue = new ConcurrentLinkedQueue<String>();// 队列
	private final Log logger = LogFactory.getLog(GpsInfoQueue.class.getName());
	private long countReceiveMessage=0;

	/**
	 * 将值存入队列中
	 * */
	public void produce(String message) {
		try {
//			while (countReceiveMessage == Constants.GpsInfoQueueMaxNum) {
//				queue.poll();
//			}
			queue.add(message);
			countReceiveMessage++;
		} catch (Exception e) {
			logger.info("定位数据入队列出错,密文:" + message);
			e.printStackTrace();
		}
	}

	/**
	 * 取队列值,并删除所取值
	 * */
	public String consume() {
		String message = null;
		if (!queue.isEmpty()) {
			message = (String) queue.poll();
		}
		return message;
	}

}
