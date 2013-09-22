package com.etrans.mq.mqclient.listener;

import java.util.HashMap;
import java.util.Map;

import javax.jms.JMSException;
import javax.jms.MapMessage;
import javax.jms.Message;

import com.etrans.business.queue.EQueue;
import com.etrans.common.netbase.mq.MQClientListener;
import com.etrans.common.netbase.mq.MQMessageDecipher;


/** 
 * 上级平台数据处理
 * 
 * @author Pomelo(柚子.)  
 * @version 1.0
 * @since 创建时间：2013-7-16 下午1:46:50 
 */
public class BaseParentMessageListener extends  MQClientListener{

	/** 订阅数据标志*/
	private String NEEDFLAG="5";
	
	/** 数据类型数组*/
	private String[] messageTypeArys;
	
	/** 数据类型Map*/
	private Map<String,String[]> messageTypeMap = new HashMap<String,String[]>();
	
	{
		messageTypeMap.put("70_P_Result", new String[]{",7101,",",7900,"});
		messageTypeMap.put("70_P_Business", new String[]{",7104,",",7105,",",7106,",",7107,",",7108,",",7109,",",7110,",",7111,",",7112,",",7113,"});
	}
	/**
	 * 监听类构造方法
	 * 
	 * @param session  当前Session
	 * @param clientNo 当前订阅者编号String
	 */	
	public BaseParentMessageListener(MQMessageDecipher decipher, EQueue queue,
			String messageKey,String NEEDFLAG) {
		super(decipher, queue, messageKey);
		this.NEEDFLAG = NEEDFLAG;
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
			messageTypeArys = (String[])messageTypeMap.get(NEEDFLAG);
			receiveDataAry = messageString.split(",");
			for(int i=0;i<messageTypeArys.length;i++){
				if(messageString.contains(messageTypeArys[i])){
					receiveDataAry = messageString.split(",");
					if (receiveDataAry.length > 2) {
						parseMessage(receiveDataAry);
					}
				}
			}
		} catch (JMSException e) {
		}
	}
	
	/**
	 * 数据处理
	 * 
	 * @param message String[]
	 */
	@Override
	public void parseMessage(String[] message) {
		queue.produce(message[0]+","+message[1]+","+message[2]+","+ decipher.decryptMessage(message[3]));
	}
}

