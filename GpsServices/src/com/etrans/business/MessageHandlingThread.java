package com.etrans.business;

import java.util.Map;

import org.apache.commons.lang.StringUtils;
import org.apache.log4j.Logger;

import com.etrans.business.parse.M;
import com.etrans.business.queue.EQueue;

/** 
 * 消息处理业务线程
 * 
 * @author Pomelo(柚子.)  
 * @version 1.0
 * @since 创建时间：2013-7-3 下午5:50:46 
 */
public class MessageHandlingThread implements Runnable{

	/** 
	 * 日志对象
	 */
	private static Logger logger = Logger.getLogger(MessageHandlingThread.class);
	
	/**
	 * 存储结果Map
	 */
	private Map<String, Object> resultHashMap;
	
	/**
	 * 生产队列
	 */
	private EQueue producterQueue;
	
	/**
	 * 数据解析接口
	 */
	private M mHander;
	
	/**
	 * 构造函数
	 * 
	 * @param commandResultHashMap 存储结果Map
	 * @param queue   生产消息Map
	 */
	public MessageHandlingThread(Map<String, Object> resultHashMap,EQueue producterQueue,M mHander){
		this.resultHashMap = resultHashMap;
		this.producterQueue = producterQueue;
		this.mHander = mHander;
	}
	
	/**
	 * 处理消息线程
	 * <p>
	 * 凡是符合协议的消息都在此进行处理
	 * 
	 * </p>
	 */
	@Override
	public void run() {	
		String message = "";
		while (true) {
			try{    
				message = producterQueue.consume();
				if (StringUtils.isNotEmpty(message)) {
					mHander.parse(message.split(",",4),resultHashMap);
				}else{
					Thread.sleep(10);
				}				
			}catch (Exception e) {
				e.printStackTrace();
				logger.error(mHander.getName()+"——消息处理异常:"+e.getMessage());
			}
		}
	}

}

