package com.etrans.system;

import java.io.UnsupportedEncodingException;
import java.util.Map;

import javax.jms.JMSException;

import org.apache.log4j.Logger;

import com.etrans.business.MessageHandlingThread;
import com.etrans.business.parse.M;
import com.etrans.business.queue.EQueue;
import com.etrans.business.queue.EtransLinkedQueue;
import com.etrans.business.queue.ResultMaps;
import com.etrans.business.service.message.MinaSendMessageParent;
import com.etrans.business.service.message.MinaSendMessageTerminal;
import com.etrans.common.netbase.mq.MQClientTopic;
import com.etrans.common.netbase.mq.MQServer;
import com.etrans.entity.MqDcConfig;
import com.etrans.mina.MinaConfigEntity;
import com.etrans.mina.client.imp.MinaClientImp;
import com.etrans.mq.mqclient.decipher.TrackBase64Decipher;
import com.etrans.mq.mqclient.listener.BaseMessageListener;
import com.etrans.mq.mqclient.listener.BaseParentMessageListener;
import com.etrans.mq.mqserver.MQServerTopicImp;
import com.etrans.system.control.LoginMsc;

/** 
 * 接收数据通道线程
 * 
 * @author Pomelo(柚子.)  
 * @version 1.0
 * @since 创建时间：2013-2-5 上午9:51:40 
 */
public class RunRecFromMscChannelThread implements Runnable {

	/** 日志对象*/
	private static Logger logger = Logger.getLogger(RunRecFromMscChannelThread.class);
	
	/** 消息类别*/
	private String[] messageType = new String[]{"5","12","8","10","6","13","18"};
	private String[] messageTypeParent = new String[]{"70_P_Business","70_P_Result"};
	
	private EtransLinkedQueue q1= new EtransLinkedQueue();
	private EtransLinkedQueue q2= new EtransLinkedQueue();
	private EtransLinkedQueue q3= new EtransLinkedQueue();
	private EtransLinkedQueue q4= new EtransLinkedQueue();
	private EtransLinkedQueue q5= new EtransLinkedQueue();
	private EtransLinkedQueue q6= new EtransLinkedQueue();
	private EtransLinkedQueue q7= new EtransLinkedQueue();
	
	private EtransLinkedQueue p1= new EtransLinkedQueue();
	private EtransLinkedQueue p2= new EtransLinkedQueue();
	
	/** 存储数据队列*/
	private EQueue[] queue = new EQueue[]{q1,q2,q3,q4,q5,q6,q7
	};
	
	/** 存储数据队列*/
	private EQueue[] queueParent = new EQueue[]{p1,p2};
	
	@SuppressWarnings("rawtypes")
	private Map[] resultMap = new Map[]{
		ResultMaps.gpsInfoHashMap,
		ResultMaps.alarmHashMap,
		ResultMaps.commandResultHashMap,
		ResultMaps.specialCommandResultMap,
		ResultMaps.gpsInfoHashMap,
		ResultMaps.gpsInfoHashMap,
		ResultMaps.affixationHashMap
	};
	
	@SuppressWarnings({ "rawtypes" })
	private Map[] parentResultMap = new Map[]{
		null,ResultMaps.parentCommandResultHashMap
	};
	
	/**
	 * <P>
	 * 读取配置信息进行通道建立
	 * tunnelIp_s=192.168.2.5,192.168.2.5,192.168.2.5
	 * #MSC 远程主机端口号
	 * tunnelPort_s=2049,2049,2049
	 * loginStr_s=##001-0-rachelDong,##001-0-rachelDong,##001-0-rachelDong
	 * </P>
	 */
	@Override
	public void run() {		
		createChannels808();
		createChannels809();
	}
	
	/**
	 * 建立808上级平台通道
	 * 
	 * <p>
	 * 808通道业务数据处理
	 * </p>
	 */
	@SuppressWarnings("unchecked")
	private void createChannels808(){
		MqDcConfig mqDcConfig= MqDcBuildConfig.mqdcConfig;
		String mainMqTopic = "track";
		String mainMqSetingMessageKey = "gastrack";	
		MessageHandlingThread messageThread;
		try {
			MQServer mqImp = new MQServerTopicImp("track","gastrack");
			createMinaClient(mqDcConfig,0,mqImp,"终端808");
			for(int i=0;i<messageType.length;i++){
				try {
					createMqClientToServer808(mainMqTopic,mainMqSetingMessageKey,messageType[i],queue[i]);
					M m = (M)Class.forName("com.etrans.business.parse.M"+messageType[i]).newInstance();
					messageThread = new MessageHandlingThread(resultMap[i], queue[i],m);
					Thread thread = new Thread(messageThread);
					thread.start();
				} catch (JMSException e) {
					logger.error(e.getMessage());
				}
			}
		} catch (Exception e) {
			logger.error(e.getMessage());
		}	
	}
	
	
	/**
	 * 建立809上级平台通道
	 * 
	 * <p>
	 * 809通道业务数据处理
	 * </p>
	 */
	@SuppressWarnings("unchecked")
	private void createChannels809(){
		MqDcConfig mqDcConfig= MqDcBuildConfig.mqdcConfig;
		String mainMqTopic = "track809";
		String mainMqSetingMessageKey = "gastrack809";	
		MessageHandlingThread messageThread;
		try {
			MQServer mqImp = new MQServerTopicImp("track809","gastrack809");
			createMinaClient(mqDcConfig,1,mqImp,"上级平台809");
			for(int i=0;i<messageTypeParent.length;i++){
				try {
					createMqClientToServer809(mainMqTopic,mainMqSetingMessageKey,messageTypeParent[i],queueParent[i]);
					M m = (M)Class.forName("com.etrans.business.parse.M"+messageTypeParent[i]).newInstance();
					messageThread = new MessageHandlingThread(parentResultMap[i], queueParent[i],m);
					Thread thread = new Thread(messageThread);
					thread.start();
				} catch (JMSException e) {
					logger.error(e.getMessage());
				}
			}
		} catch (Exception e) {
			logger.error(e.getMessage());
		}	
	}
	
	/**
	 * 创建MSC连接客户端
	 * 
	 * @param dcConfig
	 * @throws UnsupportedEncodingException
	 * @throws InterruptedException
	 * @throws Exception
	 */
	private void createMinaClient(MqDcConfig dcConfig,int aryIndex,MQServer mq,String Name)
		throws  UnsupportedEncodingException, 
				InterruptedException, Exception{
		MinaConfigEntity minaConfigEntity = new MinaConfigEntity();		
		minaConfigEntity.setLoginStr(dcConfig.getSubscriptionLogin());
		minaConfigEntity.setTunnelIp(dcConfig.getpFIP()[aryIndex]);
		minaConfigEntity.setTunnelPort(String.valueOf(dcConfig.getpFPort()[aryIndex]));
		MinaClientImp track = new MinaClientImp(minaConfigEntity,mq);
		if(aryIndex==0)MinaSendMessageTerminal.getMinaSend(track);
		if(aryIndex==1)MinaSendMessageParent.getMinaSend(track);
		LoginMsc login = new LoginMsc(track);
		if(login.connectMsc()){
			logger.info("///////////////////登陆【"+Name+"】成功///////////////////");
		}else{
			throw new Exception("连接MSC异常"+dcConfig.getpFIP()[aryIndex]+":"+dcConfig.getpFPort()[aryIndex]);
		}
	} 
		
	/**
	 * 创建MQ客户端[用于接收主MQ，然后生成各自的分支MQ服务端]
	 * 
	 * @param dcConfig MqDcConfig
	 * @throws JMSException 
	 */
	private void createMqClientToServer808(String topic,String key,String Flag,EQueue queue) throws JMSException{
		new MQClientTopic(new BaseMessageListener(new TrackBase64Decipher(),queue,key,Flag),topic);
	}

	/**
	 * 创建MQ客户端[用于接收主MQ，然后生成各自的分支MQ服务端]
	 * 
	 * @param dcConfig MqDcConfig
	 * @throws JMSException 
	 */
	private void createMqClientToServer809(String topic,String key,String Flag,EQueue queue) throws JMSException{
		new MQClientTopic(new BaseParentMessageListener(new TrackBase64Decipher(),queue,key,Flag),topic);
	}
}

