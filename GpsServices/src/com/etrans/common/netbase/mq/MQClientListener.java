package com.etrans.common.netbase.mq;

import javax.jms.JMSException;
import javax.jms.MapMessage;
import javax.jms.Message;
import javax.jms.Session;

import com.etrans.business.queue.EQueue;

/**
 * MQ客户端,轨迹数据MQ监听器
 * 
 * @author Pomelo(柚子.)
 * @since 2012-12-11 15:51
 * @version 1.0
 */
public abstract class MQClientListener implements MQListener {

	/** 消息key */
	protected String getMessageKey = null;
	
	/** 当前会话*/
	protected Session session = null;
	
	/** MQ服务端 */
	protected MQServer mqServer = null;

	/** 消息解密器*/
	protected MQMessageDecipher decipher = null;
	
	/** 订阅者编号*/
	protected String clientNo;
	
	/** 记录接收服务端轨迹数据时间 */
	protected long receiveTime = System.currentTimeMillis();
	
	/** 获取消息key*/
	protected String messageKey;
	
	/**存储数据队列*/
	protected EQueue queue;
	
	/** 接收数据数组*/
	protected String[] receiveDataAry;
	
	/**临时变量 */
	protected String messageString;
	
	/**
	 * 获取当前队列
	 * <code>getQueue</code>
	 * 
	 * @return queue AbstractQueue<Object>
	 */
	public EQueue getQueue() {
		return queue;
	}

	/**
	 * 设置当前队列
	 * 
	 * @param queue AbstractQueue<Object>
	 */
	public void setQueue(EQueue queue) {
		this.queue = queue;
	}

	/**
	 * 获取获取消息Key
	 * 
	 * @return session Session
	 */
	public String getGetMessageKey() {
		return getMessageKey;
	}

	/**
	 * 设置获取消息Key
	 * 
	 * @param getMessageKey String
	 */
	public void setGetMessageKey(String getMessageKey) {
		this.getMessageKey = getMessageKey;
	}

	/**
	 * 获取最后一次接收数据时间
	 * 
	 * @return receiveTime long
	 */
	public long getReceiveTime() {
		return receiveTime;
	}
	
	/**
	 * 构造函数 
	 * 初始化一些必要参数
	 * 
	 * @param queue 存储数据队列-线程安全
	 * @param getMessageKey 消息key
	 */
	public MQClientListener(MQMessageDecipher decipher,EQueue queue,String messageKey){
		this.decipher = decipher;
		this.queue = queue;
		this.messageKey = messageKey;
	}
	

	/**
	 * 客户端订阅者接收消息监听方法
	 * 此方法过滤消息为订阅数据，其他数据不存储
	 * 
	 * @param msg Message
	 */
	@Override
	public void onMessage(final Message msg) {
		MapMessage message = (MapMessage) msg;
		try {
			messageString = message.getString(messageKey);
			receiveDataAry = messageString.split(",");
			if (receiveDataAry.length > 2) {
				parseMessage(receiveDataAry);
			}
		} catch (JMSException e) {
		}
	}
	
	/**
	 * 解析消息
	 * 
	 * @param message
	 */
	public abstract void parseMessage(String[] message);
}
