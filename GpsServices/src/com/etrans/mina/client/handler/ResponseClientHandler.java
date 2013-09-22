package com.etrans.mina.client.handler;

import javax.jms.JMSException;

import org.apache.log4j.Logger;
import org.apache.mina.core.session.IoSession;

import com.etrans.common.netbase.mina.MinaBaseClientHandler;

/**
 * 轨迹请求客户端业务逻辑处理过滤器
 * 
 * @author Pomelo(柚子.)
 * @since 2012-12-10 10:42
 * @version 1.0
 */
public class ResponseClientHandler  extends MinaBaseClientHandler{
	
	/** 日志对象*/
	private static Logger logger = Logger.getLogger(ResponseClientHandler.class);
	
	/** 连接至MSC成功标志 */
	private boolean LinkMscFlag = false;
	
	/** 接受数据数组 */
	private String[] mscDataAry;

	/**
	 * 轨迹客户端业务处理器
	 * 
	 * @throws JMSException 
	 */
	public ResponseClientHandler() throws JMSException{
	}
	
	/**
	 * 收取来自服务端发过来的轨迹数据
	 * 
	 * @param session IoSession IO会话对象
	 * @param message Object    消息
	 */
	@Override
	public void messageReceived(IoSession session, Object message)
			throws Exception {
		try {
			// 一旦成功接入变不再受理MSC返回数据
			if(!LinkMscFlag){
				mscDataAry = message.toString().split(",");
				if(mscDataAry.length==4){
					if(mscDataAry[1].equals("0")){
						LinkMscFlag = true;
						logger.info("/////////////////////////////【回推消息】连接MSC通道成功/////////////////////////////");
					}
				}
			}
		} catch (Exception e) {
			LinkMscFlag = false;
		}		
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
		logger.error("客户端发生异常...", cause);
	}

	
	/**
	 * 获取是否俩接成功至MSC
	 * 
	 * @return LinkMscFlag boolean
	 */
	public boolean isLinkMscFlag() {
		return LinkMscFlag;
	}
}
