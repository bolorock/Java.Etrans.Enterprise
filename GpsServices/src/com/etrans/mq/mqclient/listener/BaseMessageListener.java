package com.etrans.mq.mqclient.listener;

import com.etrans.business.queue.EQueue;
import com.etrans.common.netbase.mq.MQClientListener;
import com.etrans.common.netbase.mq.MQMessageDecipher;

/** 
 * 适合接收各种类型数据
 * 如不能满足请继承MQClientListener进行扩展
 * for Example
 * <code>
 * extends MQClientListener
 * </code>
 * @author Pomelo(柚子.)  
 * @version 1.0
 * @since 创建时间：2013-7-9 下午4:59:40 
 */
public class BaseMessageListener extends MQClientListener {

	/** 订阅数据标志*/
	private String NEEDFLAG="5";
	
	/**
	 * 监听类构造方法
	 * 
	 * @param session  当前Session
	 * @param clientNo 当前订阅者编号String
	 */	
	public BaseMessageListener(MQMessageDecipher decipher, EQueue queue,
			String messageKey,String NEEDFLAG) {
		super(decipher, queue, messageKey);
		this.NEEDFLAG = NEEDFLAG;
	}

	/**
	 * 解析消息
	 * 
	 * scpt_00_UserLogonOK       = 0,  // 用户认证成功
     * scpt_01_UserLogonError    = 1,  // 用户认证失败
     * scpt_02_OtherConnect      = 2,  // 其他用户登录
     * scpt_03_OtherData         = 3,  // 其他数据
     * scpt_04_OtherBroken       = 4,  // 其他用户退出
     * scpt_05_GpsData           = 5,  // 轨迹数据
     * scpt_06_Operation         = 6,  // 业务数据
     * scpt_07_TransmitResult    = 7,  // 发送回应信息
     * scpt_08_SendResult        = 8,  // 指令回复
     * scpt_09_CarList           = 9,  // 车辆列表信息
     * scpt_10_ImageData         = 10, // 图像 、音频、视频数据
     * scpt_11_GpsHistory        = 11, // 历史数据、缓存书架
     * scpt_12_Alarm             = 12, // 报警数据
     * scpt_13_Trans             = 13  // 数据透传
     * scpt_14_Command           = 14, // 发送终端指令
	 * scpt_15_Command           = 15, // 发送平台指令
	 * scpt_16_Request	         = 16, //请求类型
	 * scpt_17_TA_Alarm	         = 17, //轨迹分析报警
	 * scpt_18_Attach            = 18, //附加信息
	 * @param message String[] 数据
	 */
	@Override
	public void parseMessage(String[] message) {
		if (message[1].equalsIgnoreCase(NEEDFLAG)) {
			queue.produce(message[0]+","+message[1]+","+message[2]+","+ decipher.decryptMessage(message[3]));
		}
	}
}

