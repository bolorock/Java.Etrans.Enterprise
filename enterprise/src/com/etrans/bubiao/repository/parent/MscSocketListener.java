package com.etrans.bubiao.repository.parent;

/** 
 * MSC连接监听者接口
 * 
 * @author Pomelo(柚子.)  
 * @version 1.0
 * @since 创建时间：2013-5-16 下午4:10:07 
 */
public interface MscSocketListener {
	
	/**
	 * 通知，停止工作
	 */
	public void stopWork();
	
	/**
	 * 通知，是否可以工作
	 * 
	 * @param workFlag ,default is true
	 */
	public void canWork(boolean workFlag);
	
	/**
	 * 通知，开始工作
	 * 
	 * @param socketTemplate
	 */
	public void starWork(com.etrans.bubiao.repository.parent.SocketTemplate socketTemplate);
}

