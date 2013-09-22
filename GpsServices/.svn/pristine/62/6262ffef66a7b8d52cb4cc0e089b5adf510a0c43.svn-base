package com.etrans.common.netbase.mq;

import javax.jms.Destination;
import javax.jms.JMSException;

/**
 * MQ客户端(点对点) 超类
 * 
 * @author Pomelo(柚子.)
 * @since 2012-12-13 11:14
 * @version 1.0
 */
public class MQClientQueue extends MQClient {

	/**
	 * 点对点MQ客户端抽类构造函数
	 * 
	 * @param clientNo
	 * @param decipher
	 * @param topic
	 * @throws JMSException
	 */
	public MQClientQueue(MQClientListener listener,String topic) throws JMSException{
		super(topic,listener);
	}
	
	/**
	 * 创建传递域
	 * 
	 * @param subject String
	 * @throws JMSException JMS异常
	 */
	@Override
	public Destination createDestination(String subject) throws JMSException {
		return super.getSession().createQueue(subject);
	}

}
