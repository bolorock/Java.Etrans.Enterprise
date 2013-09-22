/**    
 * CommandRepository.java
 * Create on 2010-7-30
 * Copyright (c) 2010 by e_trans. 
 */
package com.etrans.bubiao.repository.parent;

import java.util.List;
import java.util.Queue;

import com.etrans.bubiao.auth.SessionUser;
import com.etrans.bubiao.entities.AlarmModel;
import com.etrans.bubiao.entities.GpsInfo;
import com.etrans.bubiao.entities.SessionVehicle;
import com.etrans.bubiao.services.monitorCenter.MonitorCenterServices;


/**
 * @author dasuan
 * @version 1.0
 * @brief 指令操作,网络传输处理层接口
 */

public interface ParentCommandRepository {


	/**
	 * 将发送指令插入发送队列
	 * @param message 要插入的指令队列
	 * */
	public void insertCommandSendQueue(String message) throws Exception;

	/**
	 * 获取平台查岗，报警督办....
	 * @return
	 */
	public Queue<String> getFlatQueue();
	
	public MonitorCenterServices getMonitorCenterServices() throws Exception;
	/**
	 * 通过车辆ID获取指令回复数据
	 * 
	 * @param vehicleId
	 * @return 此车辆的指令回复
	 * */
	public String getCommandResult(String vehicleId) throws Exception;

	public String getVehicleMessage(String vehicleId); 
}
