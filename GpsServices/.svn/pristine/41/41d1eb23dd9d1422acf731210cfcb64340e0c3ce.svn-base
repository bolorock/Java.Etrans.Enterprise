package com.etrans.rmi.imp;

import java.util.Queue;

import com.etrans.business.queue.ResultMaps;
import com.etrans.rmi.CommandResulServer;

/** 
 * 指令回复结果服务接口实现类
 * 
 * @author Pomelo(柚子.)  
 * @version 1.0
 * @since 创建时间：2013-7-5 下午2:38:42 
 */
public class CommandResultServerImp implements CommandResulServer {
 
	/**
	 * 获取图片路径
	 * 
	 * @param vehicleId 车辆ID
	 * @return msg 图片路径
	 */
	@Override
	public String findPictureResult(String vehicleId) {
		String msg = ResultMaps.specialCommandResultMap.get(vehicleId);
		ResultMaps.specialCommandResultMap.remove(vehicleId);
		return msg;
	}
	
	
	/**
	 * 平台信息
	 * 
	 * @return  ResultMaps.lowerFlatQueue
	 */
	@Override
	public Queue<String> getLowerFlatQueue() {
		return ResultMaps.lowerFlatQueue;
	}


	/**
	 * 通过车辆ID获取指令回复数据
	 * 
	 * @param vehicleId 
	 * @return 此车辆的指令回复
	 */
	public String getCommandResult(String vehicleId){
		 String msg = ResultMaps.commandResultHashMap.get(vehicleId);
		 ResultMaps.commandResultHashMap.remove(vehicleId);//
		 return msg;
	}

	/**
	 * 判断是否有下级平台
	 * 
	 * @return boolean false,无，true ,有
	 */
	@Override
	public boolean isLowerPlatFormInfo() {
		if (ResultMaps.lowerFlatQueue == null || ResultMaps.lowerFlatQueue.size() <= 0)return false;
		return true;
	}

	
}

