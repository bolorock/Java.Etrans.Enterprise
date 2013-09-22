package com.etrans.rmi;

import java.util.List;
import java.util.Map;

/** 
 * 上级平台指令服务
 * 
 * @author Pomelo(柚子.)  
 * @version 1.0
 * @since 创建时间：2013-7-16 下午4:39:36 
 */
public interface ParentCommandServer {
	
	/**
	 * 将发送指令插入发送队列
	 * 
	 * @param message 要插入的指令队列
	 * @throws Exception 
	 */
	public void insertCommandSendQueue(String message) throws Exception;
	
	/**
	 * 通过车辆ID获取指令回复数据
	 * 
	 * @param vehicleId
	 * @return 此车辆的指令回复
	 */
	public String getCommandResult(String vehicleId);
	
	/**
	 * 获取平台信息
	 * 
	 * @return List<String>
	 */
	public List<String> getPlatFormInfo(Map<String, String> vehicleMap);
	
	/**
	 * 获取上级信息大小
	 * 
	 * @return
	 */
	public int getFlatQueueSize();
}

