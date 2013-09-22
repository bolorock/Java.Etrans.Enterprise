package com.etrans.common.netbase.mq;

import javax.jms.JMSException;

/**
 * MQ服务端接口
 * 
 * @author Pomelo(柚子.)
 *
 */
public interface MQServer {
	/**
	 * 发送消息
	 * 
	 * @throws InterruptedException 
	 * @tHROWS JMSException
	 */
	public void sendMessage(Object obj) throws JMSException, InterruptedException;
}
