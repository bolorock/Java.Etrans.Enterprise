package com.etrans.common.netbase.mq;

import javax.jms.DeliveryMode;
import javax.jms.JMSException;
import javax.jms.MessageProducer;
import javax.jms.Session;
import javax.jms.Topic;

/**
 * MQ服务端(发布/订阅者方式) 超类
 * 
 * @author Pomelo(柚子.)
 * @since 2012-12-10 14:14
 * @version 1.0
 */
public abstract class MQServerTopic extends MQSuper implements MQServer{
	
	/** 消息生产者*/
	protected MessageProducer producer;

	/** 主题 */
	private Topic topic = null;
	
	/** IO会话 */
	protected Session session;
	
	/** 主题*/
	protected String topicStr;
	
	/** 消息key*/
	protected String messageKey;
	
	/**
	 * 构造
	 * 
	 * @param mqServerEntity
	 */
	public MQServerTopic(String topic,String messageKey){
		this.topicStr = topic;
		this.messageKey = messageKey;
	}
	
	/**
	 * 创建一个生产者
	 * 
	 * @parma  subject 主题
	 * @return MessageProducer 生产者
	 * @throws JMSException JMS异常
	 */
	protected MessageProducer createMessageProducer() throws JMSException{
		session = super.createSession();
		topic = session.createTopic(topicStr);
		producer = session.createProducer(topic);
		producer.setDeliveryMode(DeliveryMode.NON_PERSISTENT);
		return producer;
	}
	
	/**
	 * 发送消息
	 * 
	 * @param obj Object
	 */
	@Override
	public abstract void sendMessage(Object obj) throws JMSException;
}
