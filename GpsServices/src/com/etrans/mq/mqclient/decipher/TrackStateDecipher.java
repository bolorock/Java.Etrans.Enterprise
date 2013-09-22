package com.etrans.mq.mqclient.decipher;

import org.apache.log4j.Logger;

import com.etrans.common.netbase.mq.MQMessageDecipher;

/**
 * 轨迹数据解密[状态解密]
 * 
 * @author Pomelo(柚子.)
 * @since 2012-12-10 18:57
 * @version 1.0
 */
public class TrackStateDecipher extends MQMessageDecipher {
	
	/** 日志对象*/
	private static Logger logger = Logger.getLogger(TrackStateDecipher.class);

	/**
	 * 消息解密
	 * 
	 * @param object Object 消息对象
	 */
	@Override
	public Object decryptMessage(String object) {
		logger.info("状态解密后为:【"+object.toString()+"】");
		return object;
	}

}
