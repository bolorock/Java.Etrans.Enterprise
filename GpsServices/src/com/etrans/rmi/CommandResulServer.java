package com.etrans.rmi;

import java.util.Queue;


/** 
 * 指令回复接口
 * 
 * @author Pomelo(柚子.)  
 * @version 1.0
 * @since 创建时间：2013-7-5 上午10:58:48 
 */
public interface CommandResulServer{
	
	/**
	 * 描述：判断是否有下级平台信息
	 * 
	 * @return true,false
	 */
	public boolean isLowerPlatFormInfo();
	
	/**
	 * 获取平台信息
	 * 
	 * @return Queue<String>
	 */
	public Queue<String> getLowerFlatQueue();
	
	/**
	 * 通过车辆ID获取指令回复数据
	 * 
	 * @param vehicleId
	 * @return 此车辆的指令回复
	 */
	public String getCommandResult(String vehicleId);
	
	/**
	 * 通过车辆ID获取指令回复数据(摄像图片信息)
	 * 
	 * @param vehicleId
	 * @return 此车辆的指令回复
	 */
	public String findPictureResult(String vehicleId);
}

