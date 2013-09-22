package com.etrans.common;

import java.util.concurrent.ConcurrentLinkedQueue;

import com.etrans.common.netbase.mq.MQClient;

/** 
 * MqDc全局定义
 * 
 * @author Pomelo(柚子.)  
 * @version 1.0
 * @since 创建时间：2013-2-5 上午11:50:19 
 */
public class MqdcGlobalVariable {
	
	/** 消息存储队列 */
	public static ConcurrentLinkedQueue<MQClient> linkeMqClientdQueue = new ConcurrentLinkedQueue<MQClient>();
}

