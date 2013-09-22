package com.etrans.mq.mqserver;

import javax.jms.JMSException;
import javax.jms.MapMessage;
import org.apache.log4j.Logger;
import com.etrans.common.netbase.mq.MQServerTopic;
import com.sun.xml.internal.ws.api.streaming.XMLStreamReaderFactory.Default;

/**
 * MQ客户端,轨迹数据MQ
 * 
 * @author Pomelo(柚子.)
 * @since 2012-12-10 14:14
 * @version 1.0
 */
public class MQServerTopicImp extends MQServerTopic{

	
	/** 提交次数统计*/
	private long counsum = 0;
	
	/** 日志对象*/
	private static Logger logger = Logger.getLogger(MQServerTopicImp.class);

	/**
	 * 轨迹MQ服务端
	 * 
	 * {@link Default}
	 * @throws JMSException 
	 */
	public MQServerTopicImp(String topic,String messageKey) throws JMSException{
		super(topic,messageKey);
		super.createMessageProducer();
		Thread thread = new Thread(new SessionManager());
		thread.start();
	}
	
	/**
	 * 向订阅者发送数据包
	 * 
	 * @param ob:Object
	 * @throws JMSException JMS异常
	 * @throws InterruptedException 
	 */
	@Override
	public void sendMessage(Object obj) throws JMSException {		
		MapMessage message = super.session.createMapMessage();
		message.setString(messageKey, obj.toString());
		counsum++;
		producer.send(message);		
	}
	
	/**
	 * 提交消息,以批量方式提交
	 */
	public void commit() {
		try {
			if(counsum>0){
				session.commit();
			}
		} catch (JMSException e) {
			logger.error("提交消息异常");
		}
	}

	/**
	 * MQ客户端,Session管理线程
	 * 
	 * @author Pomelo(柚子.)
	 * @since 2012-12-10 18:01
	 * @version 1.0
	 */
	class SessionManager implements Runnable{

		/**
		 * 线程启动方法
		 * 
		 * 该方法用来控制消息生产工厂提交间隔，10秒钟作为一次批量提交
		 */
		@Override
		public void run() {
			while (true)
			{
				try {
					commit();
					Thread.sleep(1000);
				} catch (InterruptedException e) {
					logger.error("多线程异常"+e.getMessage());
				}
			}
		}
	}

}
