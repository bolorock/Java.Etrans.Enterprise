package com.etrans.common.netbase.mq;

/**
 * 轨迹数据解密抽象类
 * 
 * @author Pomelo(柚子.)
 * @since 2012-12-10 18:57
 * @version 1.0
 */
public abstract class MQMessageDecipher {
	
	/**
	 * MQ消息解密
	 * 
	 * @param object 需要解密的数据
	 */
	public abstract Object decryptMessage(String object);
}
