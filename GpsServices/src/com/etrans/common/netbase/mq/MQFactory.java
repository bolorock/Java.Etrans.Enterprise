package com.etrans.common.netbase.mq;

import javax.jms.ConnectionFactory;
import org.apache.activemq.ActiveMQConnectionFactory;
import com.etrans.common.MQDCConfigUtil;

/**
 * MQ客户端(点对点) 回执类
 * 
 * @author Pomelo(柚子.)
 * @since 2012-12-13 15:36
 * @version 1.0
 */
public class MQFactory {
	
	/** 连接工厂*/
	private static ConnectionFactory contectionFactory;
	
	/** MQ工程对象 */
	private static MQFactory mQFactory = null;
	
	/**
	 * 私有构造
	 */
	private MQFactory(){
		contectionFactory=new ActiveMQConnectionFactory
				(
						MQDCConfigUtil.MQ_SERVER_DEFAULT_USER, 
						MQDCConfigUtil.MQ_SERVER_DEFAULT_PASSWORD, 
						MQDCConfigUtil.MQ_SERVER_URL
				);
	}
	
	
	/**
	 * 私有构造
	 */
	private MQFactory(String user,String password,String url){
		contectionFactory=new ActiveMQConnectionFactory(user, password, url);
	}
	
	
	/**
	 * 获取连接工厂
	 * 
	 * @return contectionFactory ConnectionFactory
	 */
	public static ConnectionFactory getConnectionFactory(){
		if(mQFactory==null) mQFactory = new MQFactory();
		return contectionFactory;
	}
	
	/**
	 * 获取连接工厂
	 * 
	 * @return contectionFactory ConnectionFactory
	 */
	public static ConnectionFactory getConnectionFactory(String user,String password,String url){
		if(mQFactory==null) mQFactory = new MQFactory(user,password,url);
		return contectionFactory;
	}
}
