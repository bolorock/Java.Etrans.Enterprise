package com.etrans.system.control.mqdcswitch;

/**
 * 整个数据中心各个连接、开关的总闸
 * 
 * @author Pomelo(柚子.)
 * @since 2012-12-27 11:14
 * @version 1.0
 */
public abstract class MqdcSwitch {
	
	/** MSC连接状态 */
	public static boolean mscIsLink = true;
	
	/** mq服务端是否可操作*/
	protected boolean mqServerIsCanOper = true;
	
	/** 总的日志开关*/
	public static boolean loggerSwitch = true;
	
	/**
	 * MQ的服务端是否可操作
	 * 
	 * @return mqServerIsCanOper boolean
	 */
	public boolean isMqServerIsCanOper() {
		return mqServerIsCanOper;
	}

	/**
	 * 获取Msc_Islink状态
	 * 
	 * @return msc_isLink boolean
	 */
	public static boolean isMscIsLink() {
		return mscIsLink;
	}

	/**
	 * 关闭所有开关，除了MSC外
	 * <p>
	 * [MSC不必须要长连接，除非自己中断否则不允许手动关闭]
	 * </p>
	 */
	public void stopAllSwitchExceptMsc(){
		// 关闭MQ服务端的操作
		setMqServerIsCanOper(false);
	}
	
	/**
	 * 打开所有开关，除了MSC外
	 * <p>
	 * [MSC不必须要长连接，除非自己中断否则不允许手动关闭]
	 * </p>
	 */
	public void openAllSwitch(){
		// 关闭MQ服务端的操作
		setMqServerIsCanOper(true);	
		// 添加其他开关
	}
	
	/**
	 * 设置MSC连接状态是否可连接
	 * 
	 * @param isLink
	 */
	public static synchronized void setMscIslink(boolean isLink){
		mscIsLink = isLink;
	}
	
	/**
	 * 服务端可操作控制，让具体的MQ服务端开关来控制，不能统一一份实例
	 * 
	 * @param mqServerIsCanOper  boolean
	 */
	public abstract void setMqServerIsCanOper(boolean mqServerIsCanOper);
}
