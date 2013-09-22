package com.etrans.mina.client.handler;

import javax.jms.JMSException;

import org.apache.log4j.Logger;
import org.apache.mina.core.session.IoSession;

import com.etrans.common.netbase.mina.MinaBaseClientHandler;
import com.etrans.common.netbase.mq.MQServer;

/**
 * 轨迹请求客户端业务逻辑处理过滤器
 * 
 * @author Pomelo(柚子.)
 * @since 2012-12-10 10:42
 * @version 1.0
 */
public class MinaClientHandler  extends MinaBaseClientHandler {
	
	/** 日志对象*/
	private static Logger logger = Logger.getLogger(MinaClientHandler.class);
	
	/** 轨迹客户端MQ*/
	private MQServer mq = null;

	/** 接受数据数组 */
//	private String[] mscDataAry;
	
	/** 成功该标志 */
//	private final String LOGINSUCFLAG = "0"; 
	
	/** 记录接收服务端轨迹数据时间 */
	private long receiveTime = System.currentTimeMillis();
	
	/**
	 * 轨迹客户端业务处理器
	 * 
	 * @throws JMSException 
	 */
	public MinaClientHandler(MQServer mq) throws JMSException{
		this.mq = mq;
	}
	
	/**
	 * 收取来自服务端发过来的轨迹数据
	 * 
	 * @param session IoSession IO会话对象
	 * @param message Object    消息
	 */
	@Override
	public void messageReceived(IoSession session, Object message){	
		try{
			if(message!=null && (!message.toString().contains("NOOP"))){
				mq.sendMessage(message);
			}
			receiveTime = System.currentTimeMillis();
		}catch(Exception e){
			logger.error("【接收MSC数据异常】"+e.getMessage());
		}
	}

	/**
	 * 设置Mq服务端
	 * 
	 * @return mq MQServer
	 */	
	public MQServer getMq() {
		return mq;
	}

	/**
	 * 设置Mq服务端
	 * 
	 * @param mq MQServer
	 */
	public void setMq(MQServer mq) {
		this.mq = mq;
	}
	
	/**
	 * 获取最新的接收轨迹数据时间
	 * 
	 * @return receiveTime long
	 */
	public long getReceiveTime() {
		return receiveTime;
	}
 
	/**
	 * 异常
	 * 
	 * @param  session IoSession
	 * @param  cause   Throwable
	 */
	@Override
	public void exceptionCaught(IoSession session, Throwable cause)
			throws Exception {
		logger.info("客户端发生异常...", cause);
	}
}
