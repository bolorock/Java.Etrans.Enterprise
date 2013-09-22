package com.etrans.common.netbase.mq;

import javax.jms.Connection;
import javax.jms.ConnectionFactory;
import javax.jms.JMSException;
import javax.jms.Session;

import com.etrans.common.MQDCConfigUtil;

/**
 * MQ超类,提出了或者取连接、Session等公用方法
 * 
 * @author Pomelo(柚子.)
 * @since 2012-12-10 14:14
 * @version 1.0
 */
public class MQSuper {
	
	/** 连接工厂*/
	private ConnectionFactory contectionFactory;
	
	/** 连接 */
	protected Connection connection ;
	
	/** 事务配置*/
	private boolean SeesionFlag = true;

	/** 应答方式 */
	private int Session_Acknowledge=1;
	
	/**
	 * 构造
	 * 
	 * @param mqServerEntity
	 */
	public MQSuper(){
	}
	
	/**
	 * 事务获取
	 * 
	 * @return SeesionFlag boolean
	 */
	public boolean isSeesionFlag() {
		return SeesionFlag;
	}

	/**
	 * 设置事务
	 * 
	 * @param SeesionFlag boolean
	 */
	public void setSeesionFlag(boolean seesionFlag) {
		SeesionFlag = seesionFlag;
	}
	
	/**
	 * 应答方式
	 * 
	 * @return SESSION_ACKNOWLEDGE
	 */
	public int getSession_Acknowledge() {
		return Session_Acknowledge;
	}
	
	/**
	 * 应答方式
	 * 
	 * @param SESSION_ACKNOWLEDGE
	 */
	public void setSession_Acknowledge(int Session_Acknowledge) {
		this.Session_Acknowledge = Session_Acknowledge;
	}
	
	/**
	 * 从通道工厂获取一个可用的通道连接
	 * 
	 * @return 一个通道连接Connection
	 * @throws JMSException
	 */
	protected Connection getConnection() throws JMSException{
		contectionFactory=MQFactory.getConnectionFactory();
		return contectionFactory.createConnection();
	}
	
	/**
	 * 获取会话
	 * 
	 * @param subject 主题
	 * @return Session
	 * @throws JMSException
	 */
	protected Session createSession() throws JMSException{
		try {
			connection = getConnection();
			connection.start();
			return connection.createSession(isSeesionFlag(),getSession_Acknowledge());
		} catch (JMSException e) {
			throw new JMSException("创建Session异常,Url【"+MQDCConfigUtil.MQ_SERVER_URL+"】," +
					"异常详情："+e.getMessage());
		}
	} 
}
