package com.etrans.common.util;

import java.util.HashMap;
import java.util.Map;

import org.apache.commons.lang.StringUtils;

import com.etrans.entity.AlarmModel;

/** 
 * 报警工具类
 * 
 * @author Pomelo(柚子.)  
 * @version 1.0
 * @since 创建时间：2013-7-3 下午4:55:37 
 */
public class AlarmTools {
	
	/**
	 * 报警类别
	 */
	 private static Map<String,String> alarmMap=new HashMap<String,String>();
	 
	 /**
	  * 报警来源
	  */
	 private static Map<String, String> alarmSourceMap=new HashMap<String,String>();
	 
	 static{
		 alarmMap.put("2","超速报警");
		 alarmMap.put("3","疲劳驾驶报警");
		 alarmMap.put("1","紧急报警");
		 alarmMap.put("4","预警");
		 alarmMap.put("5","GNSS模块发生故障");
		 alarmMap.put("6","GNSS天线未接或被剪断");
		 alarmMap.put("7","GNSS天线短路");
		 alarmMap.put("8","终端主电源欠压");
		 alarmMap.put("9","终端主电源掉电");
		 alarmMap.put("10","终端LCD或显示器故障");
		 alarmMap.put("11","TTS模块故障");
		 alarmMap.put("12","摄像头故障");
		 alarmMap.put("13","当天累计驾驶超时");
		 alarmMap.put("14","超时停车");
		 alarmMap.put("15","进出区域");
		 alarmMap.put("16","进出路线");
		 alarmMap.put("17","路段行驶时间不足/过长");
		 alarmMap.put("18","路线偏离报警");
		 alarmMap.put("19","车辆VSS故障");
		 alarmMap.put("20","车辆油量异常");
		 alarmMap.put("21","车辆被盗");
		 alarmMap.put("22","车辆非法点火");
		 alarmMap.put("23","车辆非法位移");
		 alarmMap.put("24","碰撞侧翻报警");
		 alarmMap.put("315", "超速报警");
		 alarmMap.put("316", "疲劳驾驶报警");
		 alarmMap.put("317", "地点超时停车报警");
		 alarmMap.put("318", "进出地点报警");
		 alarmMap.put("319", "进出区域报警");
		 alarmMap.put("320", "路段偏离报警");
		 alarmSourceMap.put("1", "车载终端"); 
		 alarmSourceMap.put("2", "企业监控平台"); 
		 alarmSourceMap.put("3", "政府监管平台"); 
		 alarmSourceMap.put("5","平台");
		 alarmSourceMap.put("9", "其他"); 
		 alarmSourceMap.put("10", "平台报警");
	 }
	 
	/**
	 * 把车辆的报警队列转行成List的报警类型
	 * 
	 * @param vehicleQueue
	 * @return
	 */
	public static AlarmModel alarmQueueTypeToList(String[] strs,String vehicleInfo,String alarmTime) throws Exception{ 
		String[] vehicleInfoArr = vehicleInfo.split("\\|");
		String alarmNamString = "其它报警";
		AlarmModel alarm = new AlarmModel();
		alarm.setBeginTime(strs[2]);
		alarm.setStartTime(strs[3]);
		alarm.setSpeed1(strs[12]);
		alarm.setSpeed2(strs[11]);
		alarm.setGpsMileage1(strs[14]);
		alarm.setGpsMileage2(strs[13]);
		alarm.setHead(strs[15]);
		alarm.setState(strs[18]);
		alarm.setVehicleId(strs[0]);// 车辆ID
		alarm.setRegistrationNo(vehicleInfoArr[0]);// 车牌号码
		alarm.setRegistrationColor(vehicleInfoArr[1]);// 车牌颜色
		String alarmNamTypeId = strs[4];// 报警ID
		if (StringUtils.isNotEmpty(alarmMap.get(alarmNamTypeId))) {
			alarmNamString = alarmMap.get(alarmNamTypeId);
		}
		alarm.setAlarmName(alarmNamString);// 报警名称
		alarm.setAlarmTypeId(alarmNamTypeId);// 报警类型Id
		Float longitude = Float.valueOf(strs[9]) * 1000000;
		Float latitude = Float.valueOf(strs[10]) * 1000000;
		alarm.setLongitude(String.valueOf(longitude));// 经度
		alarm.setLatitude(String.valueOf(latitude));// 纬度
		alarm.setAlarmTime(strs[1]);// 报警时间
		alarm.setReceveTime(alarmTime);// 接受时间
		alarm.setAlarmInfoId(strs[7]);// 外部报警信息ID
		String sourceStr = "其它";
		String sourceId = strs[5];
		alarm.setSourceID(sourceId);// 报警来源
		if (StringUtils.isNotEmpty(alarmSourceMap.get(sourceId))) {
			sourceStr = alarmSourceMap.get(sourceId);
		}
		alarm.setSourceStr(sourceStr);// 报警来源描述
		alarm.setDesc(strs[8]);// 报警描述
		return alarm;
	}
	
	/**
	 * 验证是否已经处理了此报警信息
	 * 
	 * @param alarmMapKey key值，由【车辆ID-报警时间-报警类型】组合而成
	 * @param processedAlarMap Map<String, String>
	 * @return true 已经处理，false未处理
	 */
	public static boolean isProcessedAlar(String alarmMapKey,Map<String, String> processedAlarMap){
		if(processedAlarMap==null){ //未处理
			return true;
		}else{
			String alarmStr2 = processedAlarMap.get(alarmMapKey);
			if(null==alarmStr2||alarmStr2.equals("")){//已处理
				return true;
			}else{//已经处理
				return false;
			}
		}
	}
}

