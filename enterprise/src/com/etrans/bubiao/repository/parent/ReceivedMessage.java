/**    
 * ReceivedMessage.java
 * Create on 2010-8-16
 * Copyright (c) 2010 by e_trans. 
 */
package com.etrans.bubiao.repository.parent;

import java.io.BufferedReader;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

/**
 * 
 * 上级平台信息指令返回结果处理
 * @author lihaiyan 
 * @author Pomelo(柚子.)
 * @version 1.0
 */

public class ReceivedMessage implements Runnable,MscSocketListener {
	/**
	 * 业务数据接收队列
	 */
	private BusinessQueue businessQueue;
	/**
	 * 指令回复数据接收队列
	 */
	private CommandResultQueue commandResultQueue;
	/**
	 * socket连接模板
	 */
	private SocketTemplate socketTemplate; 
	/**
	 * 日志记录对象
	 */	
	private final Log logger = LogFactory.getLog(ReceivedMessage.class.getName());
	/**
	 * 带缓存读取流
	 */
	private BufferedReader br = null;  
	
	/**
	 * 是否可以工作标志
	 */
	public boolean isCanWorkFlag = true;
	
	/**
	 * 记录接收服务端轨迹数据时间
	 */
	private long receiveTime = System.currentTimeMillis();
	
	public ReceivedMessage(
			SocketTemplate socketTemplate,
			BusinessQueue businessQueue,
			CommandResultQueue commandResultQueue,
			CommandSendQueue commandSendQueue) {
		this.socketTemplate = socketTemplate;
		this.commandResultQueue = commandResultQueue;
		this.businessQueue = businessQueue;
		new Thread(new CheckNOOPThread()).start();
	}
	
	/**
	 * 停止接收信息处理工作
	 * 
	 * @return boolean true, stop is OK,false stop is failed
	 */
	@Override
	public void stopWork() {
		canWork(false);		
		logger.error("---------停止接收来自(上级信息通道)的数据---------");
	}
	
	/**
	 * 是否可以进行工作
	 * 
	 * @param workFlag boolean
	 */
	public void canWork(boolean workFlag){
		isCanWorkFlag = workFlag;
	}
	
	/**
	 * 重新开始接收信息
	 * 
	 * @param socketTemplate SocketTemplate
	 */
	@Override
	public void starWork(SocketTemplate socketTemplate) {
		this.socketTemplate = socketTemplate;
		br = this.socketTemplate.getReader();
		logger.error("---------重新接收来自(上级信息通道)的数据---------");
	}
	
	/**
	 * 接收信息线程运行方法
	 * 
	 * 主要负责接收来自Msc的数据
	 */
	public void run() {
		logger.info("---------(上级信息通道)接收线程启动!---------");
		br = this.socketTemplate.getReader();
		String receivedMessage = null;
		while (true) {
			try {
				if(isCanWorkFlag && socketTemplate.isLogin()){
					if ((receivedMessage = br.readLine()) != null) {
						MessageHandle(receivedMessage); 
					}else{
						Thread.sleep(10);
					}
				}else{
					Thread.sleep(10);
				}				
			} catch (Exception e) {
			}
		}
	}


	/**
	 * 接收指令结果的消息处理
	 * 7101:交换链路连接状态,
	 * 7104:平台查岗请求 
	 * 7105:下发平台报文请求  
	 * 7106:报警督办请求
	 * 
	 * @throws Exception 
	 */
	public void MessageHandle(String receivedMessage) throws Exception {
		try {
			receiveTime = System.currentTimeMillis(); 
//			logger.error("【上级信息通道】"+receivedMessage);
			if(receivedMessage.contains(",7101,")
					|| receivedMessage.contains(",7900,")){
				commandResultQueue.produce(receivedMessage);
			}else if(receivedMessage.contains(",7104,") 
					|| receivedMessage.contains(",7105,")
					|| receivedMessage.contains(",7106,")
					|| receivedMessage.contains(",7107,")
					|| receivedMessage.contains(",7108,")
					|| receivedMessage.contains(",7109,")
					|| receivedMessage.contains(",7110,")
					|| receivedMessage.contains(",7111,")
					|| receivedMessage.contains(",7112,")
					|| receivedMessage.contains(",7113,")
			){
				businessQueue.produce(receivedMessage);
			}else{
				Thread.sleep(1);
			}

		} catch (Exception e) {
			throw new Exception("(上级信息通道)接收指令返回结果失败");
		}
	}
	/**
	 * 心跳线程
	 * 
	 * @author Administrator
	 */
	class CheckNOOPThread implements Runnable{
		/**
		 * 间隔时间
		 */
		long timeInterval = 0l;
		
		/**
		 * 心跳线程启动方法
		 */
		public void run(){
			while (true){
				//每10秒发送一次心跳包
				timeInterval = System.currentTimeMillis() - receiveTime;
				/**
				 * 如果10秒内未收到任何数据，则进行重连
				 */
				if(timeInterval>65000){
					try {
						logger.error("【上级信息通道】60秒内未收到任何数据，则进行重连");
						socketTemplate.emergencyReload();
					} catch (Exception e) {
						logger.error("重连异常！[直连平台]"+e.getMessage());
					}
				}
				try {
					Thread.sleep(60000);
				} catch (InterruptedException e) {
					logger.error("心跳检测线程异常!"+e.getMessage());
				}
			}
		}
	}


}
