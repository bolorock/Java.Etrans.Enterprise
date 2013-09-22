package com.etrans.rmi.imp;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import com.etrans.business.CommandCode;
import com.etrans.business.queue.ResultMaps;
import com.etrans.business.service.message.MinaSendMessageParent;
import com.etrans.common.util.CommandTools;
import com.etrans.rmi.ParentCommandServer;

/** 
 * 上级平台指令服务
 * 
 * @author Pomelo(柚子.)  
 * @version 1.0
 * @since 创建时间：2013-7-16 下午4:41:03 
 */
public class ParentCommandServerImp implements ParentCommandServer {

	
	/**
	 * 平台发送指令
	 * 
	 * @param message 消息
	 */
	@Override
	public void insertCommandSendQueue(String message) throws Exception {
		MinaSendMessageParent.send(message);
	}

	/**
	 * 获取指令回复
	 * 
	 * @param vehicleId 车辆ID
	 */
	@Override
	public String getCommandResult(String vehicleId) {
		return ResultMaps.parentCommandResultHashMap.get(vehicleId);
	}

	/**
	 * 描述：获取上级信息
	 * 
	 * @param vehicleMap Map<String,String>
	 */
	@Override
	public List<String> getPlatFormInfo(Map<String, String> vehicleMap) {
		String[] strings = ResultMaps.flatQueue.toArray(new String[]{});
		List<String> lst = null;
		String vehicleInfo;
		if (null != strings){
			lst = new ArrayList<String>();
			for (String str : strings){
				String[] msg = str.split("\\|");
				int commandCode = Integer.parseInt(msg[0]);
				vehicleInfo =  vehicleMap.get(msg[1]);
				try{
					switch(commandCode){
						case CommandCode.COMMAND_7106://报警督办请求
							lst.add(msg[0]+"|"+CommandTools.convertOverseeing(msg[1],vehicleInfo)+"|"+msg[2]);
							break;
						case CommandCode.COMMAND_7107://报警预警
							lst.add(msg[0]+"|"+CommandTools.convertAlarmAdvance(msg[1],vehicleInfo)+"|"+msg[2]);
							break;
						case CommandCode.COMMAND_7108://实时交换报警
							lst.add(msg[0]+"|"+CommandTools.convertRealSwapAlarm(msg[1],vehicleInfo)+"|"+msg[2]);
							break;
						case CommandCode.COMMAND_7109://交换车辆静态信息
							lst.add(msg[0]+"|"+CommandTools.convertSwapVehicleInfo(msg[1],vehicleInfo)+"|"+msg[2]);
							break;
						case CommandCode.COMMAND_7113://车辆定位信息交换补发
							lst.add(msg[0]+"|"+CommandTools.convertVehicleGpsSwapSend(msg[1],vehicleInfo)+"|"+msg[2]);
							break;
						case CommandCode.COMMAND_7112://交换车辆实时定位信息
							lst.add(msg[0]+"|"+CommandTools.convertSwapVehicleGps(msg[1],vehicleInfo)+"|"+msg[2]);
							break;
						default:
							lst.add(str);
						}
				}catch (Exception e) {
				}
			}
		}
		return lst;
	}

	/**
	 * 获取上级信息大小
	 * 
	 * @return
	 */
	public int getFlatQueueSize(){
		return ResultMaps.flatQueue.size();
	}
}

