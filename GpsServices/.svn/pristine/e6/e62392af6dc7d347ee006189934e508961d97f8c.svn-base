package com.etrans.common.netbase.mq;

import javax.jms.Destination;
import javax.jms.JMSException;
import javax.jms.MessageConsumer;
import javax.jms.Session;
import javax.jms.Topic;

/**
 * Created by 广州亿程交通信息
 * MQ客户端,轨迹数据MQ
 * 
 * @author Pomelo(柚子.)
 * @since 2012-12-10 15:14
 * @version 1.0
 * To change this template use File | Settings | File Templates.
 */
public abstract class MQClient extends MQSuper{
	
	/** 消息消费者 */
	private MessageConsumer consumer;
	/** 主题 */
	private Destination dest = null;
	/** IO会话 */
	private Session session;	
	/** 主题 */
	protected Topic topic = null;
	/** 客户端订阅者编号*/
	private String clientNo;
	/**消息监听*/
	protected MQClientListener listener;

	/**
	 * MQClient抽象类构造函数
	 * 
	 * @param clientNo
	 * @param decipher
	 * @param topic
	 * @throws JMSException
	 */
	public MQClient(String topic,MQClientListener listener) throws JMSException{
		super.setSeesionFlag(false);
		super.setSession_Acknowledge(Session.AUTO_ACKNOWLEDGE);
		setListener(listener);
		this.createMessageConsumer(topic);
	}

	/**
	 * 创建一个生产者
	 * 
	 * @parma  subject 主题
	 * @return MessageProducer 生产者
	 * @throws JMSException JMS异常
	 */
	protected MessageConsumer createMessageConsumer(String topic) throws JMSException{
		session = super.createSession();
		dest = createDestination(topic);
		consumer = session.createConsumer(dest);
		consumer.setMessageListener(getListener());
		return consumer;
	}
 
	/**
	 * 获取Session
	 *  
	 * @return session Session
	 */
	public Session getSession() {
		return session;
	}
	
	/**
	 * 获取主题
	 * 
	 * @return topic
	 */
	public Topic getTopic() {
		return topic;
	}

	/**
	 * 获取客户端编号
	 * 
	 * 
 	 *@return clientNo String
	 */
	public String getClientNo() {
		return clientNo;
	}

	/**
	 * 设置客户端编号
	 * 
	 * @param clientNo String
	 */
	public void setClientNo(String clientNo) {
		this.clientNo = clientNo;
	}
	
	/**
	 * 提交消息
	 * 
	 * @throws JMSException
	 */
	public void sessionCommit() throws JMSException{
		session.commit();
	}
	
	/**
	 * 监听器
	 * 
	 * @return listener  MQClientListener
	 */ 
	public MQClientListener getListener() {
		return listener;
	}

	/**
	 * 设置监听器
	 * 
	 * @param listener MQClientListener
	 */
	public void setListener(MQClientListener listener) {
		this.listener = listener;
	}
	
	/**
	 * 创建目的地
	 * 
	 * @param subject
	 * @throws JMSException
	 */
	public abstract Destination createDestination(String subject)throws JMSException;
}
