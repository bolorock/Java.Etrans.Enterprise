package com.etrans.system.control;

import java.io.UnsupportedEncodingException;

import org.apache.log4j.Logger;

import sun.misc.BASE64Encoder;

import com.etrans.common.MQDCConfigUtil;
import com.etrans.common.netbase.mina.MinaClient;
import com.etrans.common.netbase.mq.MQClientListener;
import com.etrans.system.control.mqdcswitch.MqdcSwitch;


/**
 * MQ数据中心监控检查
 * 
 * @author Pomelo(柚子.)
 * @since 2012-12-27 14:14
 * @version 1.0
 */
public class MQDCCheckMonitor extends Thread{

	/** 日志对象*/
	private static Logger logger = Logger.getLogger(MQDCCheckMonitor.class);
	
	/** Mina客户端*/
	private MinaClient client = null;
	
	/** MQ业务处理监听*/
	private MQClientListener mqListener = null;	
	
	/** 总开关*/
	private MqdcSwitch mqdcSwitch;
	
	/**
	 * 登陆MSC
	 */
	private LoginMsc login;
	
	/**
	 * 是否重新订阅
	 */
	public static boolean ISRESUBSCRI = false;

	/**
	 * MQDC检查监控构造函数
	 * 
	 * @param client MinaClient
	 * @param mqListener Listener
	 */
	public MQDCCheckMonitor(MinaClient client,MQClientListener mqListener,MqdcSwitch mqdcSwitch){
		this.client = client;
		this.mqListener = mqListener;
		this.mqdcSwitch = mqdcSwitch;		
	}
	
	/**
	 * 线程运行方法
	 * <p>
	 * 负责监控MSC在给定时间内没有派发有效数据过来时，将发起重新订阅
	 * </P
	 */
	@Override
	public void run() {
		logger.info("//////////////////////////监控MSC派发状态线程已启动//////////////////////////");
		// 上一次接收数据事件
		long timeInterval = 0l;
		// 重新登陆标志
		boolean reLoginFlag = false;
		while(true){
			try {			
				Thread.sleep(10000);
				// 当MSC间隔1分钟未派发数据过来或者连接失败时都尝试重连
				timeInterval = System.currentTimeMillis()-mqListener.getReceiveTime();
				if(MqdcSwitch.isMscIsLink()){
					// 如果自动重连了或者超时没有收到有效数据都进行重新订阅
					if(timeInterval>MQDCConfigUtil.MQ_SERVER_TRACK_DATA_INVALID || MQDCCheckMonitor.ISRESUBSCRI){
						mqdcSwitch.stopAllSwitchExceptMsc();
						try {
							// 设置已登录为false
							client.getClientHandler().setLinkMscFlag(false);
							// 开始重新登陆
							login = new LoginMsc(this.client);
							reLoginFlag = login.login("##001,0,rachelDong,"+new BASE64Encoder().encode("gtt,288,99".getBytes("GBK")));
							if(reLoginFlag){
								mqdcSwitch.openAllSwitch();
								// 如果当前订阅没有完毕或者终止，则不发起下一次订阅，直到上一次完成或者收到中断信号
								// 此处控制订阅线程多线程订阅
								//【在MSC连接正常但是不再派发数据的时候,必须排队订阅除非下一次完全订阅完毕30秒后依旧收不到有效数据才发起重新订阅】
							}
						} catch (UnsupportedEncodingException e) {
							logger.error("Base64加密异常!"+e.getMessage());
						}
					}else{
						logger.info("【重发订阅线程】订阅正常！30秒无有效数据才发起重新订阅///////////////////////");
					}
				}else{
					// 如果MSC中断了，默认需要重新发起订阅
					logger.info("【重发订阅线程】无法连接MSC,订阅失败！///////////////////////");
				}
			}catch(InterruptedException e){
				logger.error("重发订阅线程异常,Exception:"+e.getMessage());
			}
		}
	}
}
