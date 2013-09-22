package com.etrans.rmi;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import com.etrans.entity.AlarmModel;

/** 
 * 报警信息获取远程接口
 * 
 * @author Pomelo(柚子.)  
 * @version 1.0
 * @since 创建时间：2013-7-5 上午9:48:36 
 */
public interface AlarmServer{
	
	/**
	 * 获取实时报警
	 * 
	 * @param alarmTypeNo
	 * @param ls
	 * @return
	 * @throws Exception
	 */
	public List<Map<String, String>> getRealTimeVehicleAlarmTest(
			String alarmTypeNo, List<HashMap<String, String>> ls)
			throws Exception;
	/**
	 * 获取实时报警
	 * 
	 * @param alarmTypeNo
	 * @param alarmSourceNo
	 * @param registrationNo
	 * @return List<AlarmModel>
	 */
	public List<AlarmModel> getRealTimeAlarm(String alarmTypeNo,String alarmSourceNo,String registrationNo,Map<String,String> vehicleInfoMap,Map<String, String> processedAlarMap);
	
	/**
	 * 获取用户所有实时报警
	 * 
	 * @param alarmTypeNo
	 * @param ls
	 * @return 报警信息列表 List<Map<String,String>>
	 */
	public List<Map<String,String>> getRealTimeVehicleAlarm(String alarmTypeNo,List<HashMap<String,String>> ls);
	
	/**
	 * 判断您是否存在报警[过滤所有报警]
	 * 
	 * @param processedAlarMap
	 * @return true 有报警,false无报警
	 */
	public boolean findIsHaveAlarm(Map<String, String> processedAlarMap);
	
	/**
	 * 判断是否有报警[过滤指令车辆]
	 * 
	 * @param ProcessedAlarMap
	 * @param vehicleMap
	 * @return  true 有报警,false无报警
	 */
	public boolean findIsHaveAlarm(Map<String, String> ProcessedAlarMap,Map<String, String> vehicleMap);
}



