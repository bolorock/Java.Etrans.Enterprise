package com.etrans.mq.mqclient.decipher;

import org.apache.log4j.Logger;

import com.etrans.common.netbase.mq.MQMessageDecipher;
import com.etrans.common.netbase.util.Base64ThreadLocal;

/**
 * 轨迹数据解密[64位解密]
 * 
 * @author Pomelo(柚子.)
 * @since 2012-12-10 18:57
 * @version 1.0
 */
public class TrackBase64Decipher extends MQMessageDecipher {
	
	/** 日志对象*/
	private static Logger logger = Logger.getLogger(TrackBase64Decipher.class);
	
	/** Base64 解密 */
	private Base64ThreadLocal base64 = new Base64ThreadLocal();
	
	/** GPS信息 */
	private String gpsInfo = "";
	
	
	/**
	 * 消息解密
	 * 
	 * @param object Object 消息对象
	 */
	@Override
	public Object decryptMessage(String object) {
		try {
			gpsInfo = base64.decoderMessageApache(object);
		} catch (Exception e) {
			logger.error("【Base64解密异常：原密文】【"+object+"】");
		}
		return  gpsInfo;
	}

}
