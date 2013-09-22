package com.etrans.rmi.imp;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.TimeZone;

import org.apache.commons.lang.StringUtils;

import com.etrans.business.queue.EQueue;
import com.etrans.business.queue.ResultMaps;
import com.etrans.common.util.AlarmTools;
import com.etrans.common.util.GpsTools;
import com.etrans.common.util.Tools;
import com.etrans.entity.AlarmModel;
import com.etrans.rmi.AlarmServer;

/** 
 * 报警服务接口
 * 
 * @author Pomelo(柚子.)  
 * @version 1.0
 * @since 创建时间：2013-7-5 下午2:38:17 
 */
public class AlarmServerImp  implements AlarmServer {
	
	private SimpleDateFormat sdf;
	private TimeZone timeZoneChina;
	
	{
		sdf = new SimpleDateFormat("yyyy-M-dd HH:mm:ss");
		timeZoneChina = TimeZone.getTimeZone("Asia/Shanghai");
		sdf.setTimeZone(timeZoneChina); 
	}
	/**
	 * 业务队列
	 */
	private EQueue businessQueue;
 
	@Override
	public List<AlarmModel> getRealTimeAlarm(
			String alarmTypeNo,String alarmSourceNo, 
			String registrationNo,Map<String,String> vehicleInfoMap,Map<String, String> processedAlarMap) {
		int totalCount = 0;
		List<AlarmModel> alarmModels = new ArrayList<AlarmModel>();
		EQueue businessQueue;
		try{
			for(Map.Entry<String, EQueue> entry : ResultMaps.alarmHashMap.entrySet()){
			    businessQueue = entry.getValue();
				if (businessQueue != null){
					String[] businessQueueStrs = businessQueue.toArray(new String[]{});
					for(int alarmIndex=businessQueueStrs.length-1;alarmIndex>=0;alarmIndex--){
						try{
							String str=businessQueueStrs[alarmIndex];
							if(StringUtils.isNotEmpty(str)){
								String[] tempStr = StringUtils.split(str, "=====");
								String   dateStr = tempStr[1];
								String[] strs = StringUtils.split(tempStr[0], ",");
								//其它报警 【有,{企业监控平台，政府监管平台,平台,其他},都是属于其它报警】
								if("9".equals(alarmSourceNo)){ //其它报警
									if(!("-1".equals(alarmSourceNo)) && (!(alarmSourceNo.equals(strs[5]))&&!("2".equals(strs[5]))&&!("3".equals(strs[5]))&&!("5".equals(strs[5]))  )   ){
										continue;
									}
								}else{//车载终端,平台报警
									if(!("-1".equals(alarmSourceNo)) && !(alarmSourceNo.equals(strs[5]))){
										continue;
									}
								}
								/**报警来源过滤end**/
								if (!("-1".equals(alarmTypeNo)) && !(alarmTypeNo.equals(strs[4]))){// 如果选择过滤报警
										continue;
								}
								Date date = new Date(Long.valueOf(dateStr));
								String alarmTime = sdf.format(date);
								if (Tools.isNew(dateStr)){
									if (totalCount < Tools.realAlarmMaxCount){// 返回50条 
										String vehicleInfo = vehicleInfoMap.get(entry.getKey());
										if(StringUtils.isEmpty(vehicleInfo)){
											continue;
										}
										if (StringUtils.isNotEmpty(registrationNo)){
											if (vehicleInfo.indexOf(registrationNo) > -1){
												AlarmModel alarmModel = new AlarmModel();
												alarmModel = AlarmTools.alarmQueueTypeToList(strs,vehicleInfo, alarmTime);
												String alarmStr = alarmModel.getVehicleId()+"-"+alarmModel.getAlarmTime()+"-"+alarmModel.getAlarmTypeId();
												if(AlarmTools.isProcessedAlar(alarmStr, processedAlarMap)){
													alarmModels.add(alarmModel);
												}
											} else{
													continue;
											}
										} else{
											AlarmModel alarmModel = new AlarmModel();
											alarmModel = AlarmTools.alarmQueueTypeToList(strs,vehicleInfo, alarmTime);
											String alarmStr = alarmModel.getVehicleId()+"-"+alarmModel.getAlarmTime()+"-"+alarmModel.getAlarmTypeId();
											if(AlarmTools.isProcessedAlar(alarmStr, processedAlarMap)){
												alarmModels.add(alarmModel);
											}
										}
									} else{
										return alarmModels;
									}
									totalCount++;
								}
							}
						} catch (Exception e){
									e.printStackTrace();
						}
					}
				}
			}
		} catch (Exception e){
			e.printStackTrace();
		}
		return alarmModels;
 	}

	@Override
	public List<Map<String, String>> getRealTimeVehicleAlarm(
			String alarmTypeNo, List<HashMap<String, String>> ls) {
		int totalCount = 0;
		int maxCount = 50000;
		List<Map<String,String>> resultls = new ArrayList<Map<String,String>>();
		try{
	        if(ls!=null && ls.size()>0){
		        for(int i=0;i<ls.size();i++){
		        	Map<String,String> map = ls.get(i);
					businessQueue = ResultMaps.alarmHashMap.get(map.get("vehicleID"));
					if (businessQueue != null){
						String[] businessQueueStrs = businessQueue.toArray(new String[]{});
						for(int alarmIndex=businessQueueStrs.length-1;alarmIndex>=0;alarmIndex--){
							try{
								String str=businessQueueStrs[alarmIndex];
								if(StringUtils.isNotEmpty(str)){
									String[] tempStr = StringUtils.split(str, "=====");
									String dateStr = tempStr[1];
									String[] strs = StringUtils.split(tempStr[0], ",");
									if (!("-1".equals(alarmTypeNo)) && !(alarmTypeNo.equals(strs[4]))){// 如果选择过滤报警
										continue;
									}
									Date date = new Date(Long.valueOf(dateStr));
									String alarmTime = sdf.format(date);
									if (totalCount < maxCount){
										String vehicleInfo = map.get("registrationNO")+"|"+map.get("registrationNOColor");
										AlarmModel alarmModel = AlarmTools.alarmQueueTypeToList(strs,vehicleInfo, alarmTime);
										Map<String,String> val = new HashMap<String,String>();
										val.put("registrationNO", alarmModel.getRegistrationNo());//车牌
										val.put("registraionColor", alarmModel.getRegistrationColor());//车牌颜色
										val.put("vehicleID", alarmModel.getVehicleId());//车辆ID
										val.put("alarmType", alarmModel.getAlarmName());//报警类型
										val.put("longitude", alarmModel.getLongitude());//经度
										val.put("latitude", alarmModel.getLatitude());//纬度
										val.put("speed1", alarmModel.getSpeed1());//Gps速度
										val.put("speed2", alarmModel.getSpeed2());
										val.put("head", GpsTools.getHead(Integer.parseInt(alarmModel.getHead())));//方向
										val.put("gpsMileage1", alarmModel.getGpsMileage1());
										val.put("gpsMileage2", alarmModel.getGpsMileage2());//里程
										val.put("alarTime", alarmModel.getAlarmTime());//GPS时间
										val.put("alarmDesc", alarmModel.getDesc());//报警描述
										resultls.add(val);
										totalCount++;
									}else{
										return resultls;
									}
								}
							} catch (Exception e){
								e.printStackTrace();
							}
						}
					}
				}
	        }
		} catch (Exception e){
			e.printStackTrace();
		}
		return resultls;
	}

	/**
	 * 查找是否有报警[对所有车辆进行查找]
	 * 
	 * @param ProcessedAlarMap Map 已经处理过的报警
	 * @return true 有报警,false 无 报警
	 */
	@Override
	public boolean findIsHaveAlarm(Map<String, String> processedAlarMap) {
		for (Map.Entry<String, EQueue> entry : ResultMaps.alarmHashMap.entrySet()){
			businessQueue = entry.getValue();
			if (businessQueue != null){
				String[] businessQueueStrs = businessQueue.toArray(new String[]{});
				for (String str : businessQueueStrs){
					if(StringUtils.isNotEmpty(str)){
						String[] tempStr = StringUtils.split(str, "=====");
						String dateStr = tempStr[1];
						try {
							if(Tools.isNew(dateStr)){
								String[] strs = StringUtils.split(tempStr[0], ",");
								String alarmStr =strs[0]+"-"+strs[1]+"-"+strs[4];
								if(AlarmTools.isProcessedAlar(alarmStr, processedAlarMap)){
									return true;
								}
							}
						} catch (Exception e) {
						}
					}
				}
			}
		}
		return false;
	}
	
	/**
	 * 查找是否有报警[对指定车辆进行查找]
	 * 
	 * @param ProcessedAlarMap Map 已经处理过的报警
	 * @param vehicleMap 车辆
	 * @return true 有报警,false 无 报警
	 */
	@Override	
	public boolean findIsHaveAlarm(Map<String, String> processedAlarMap,Map<String, String> vehicleMap) {
		for(Map.Entry<String, String> vehicle:vehicleMap.entrySet()){
			businessQueue=ResultMaps.alarmHashMap.get(vehicle.getKey());
			if (businessQueue != null){
				String[] businessQueueStrs = businessQueue.toArray(new String[]{});
				for (String str : businessQueueStrs){
					if(StringUtils.isNotEmpty(str)){
						String[] tempStr = StringUtils.split(str, "=====");
						String dateStr = tempStr[1];
						try {
							if(Tools.isNew(dateStr)){
								String[] strs = StringUtils.split(tempStr[0], ",");
								String alarmStr =strs[0]+"-"+strs[1]+"-"+strs[4];
								if(AlarmTools.isProcessedAlar(alarmStr, processedAlarMap)){
									return true;
								}
							}
						} catch (Exception e) {}
					}// end isNotEmpty If
				}// end for
			}// end is nul if
		}// end for
		businessQueue = null;
		return false;
	}
	
	public List<Map<String, String>> getRealTimeVehicleAlarmTest(
			String alarmTypeNo, List<HashMap<String, String>> ls)
			throws Exception {
		int totalCount = 0;
		int maxCount = 50000;
		List<Map<String, String>> resultls = new ArrayList<Map<String, String>>();

		try {

			if (ls != null && ls.size() > 0) {
				for (int i = 0; i < ls.size(); i++) {
					Map<String, String> map = ls.get(i);
					try {
						String str = "13,2013-01-23 18:29:10,2013-01-12 08:18:21,2013-01-23 18:25:10,39,1, ,8305369, ,0.000111,0.000028,0,0,14033679,14033679,0,0,0,=====1358936950968";
						if (StringUtils.isNotEmpty(str)) {
							String[] tempStr = StringUtils.split(str, "=====");
							String dateStr = tempStr[1];
							SimpleDateFormat sdf = new SimpleDateFormat(
									"yyyy-MM-dd HH:mm:ss");
							TimeZone timeZoneChina = TimeZone
									.getTimeZone("Asia/Shanghai");// 获取中国的时区
							sdf.setTimeZone(timeZoneChina);// 设置系统时区

							String[] strs = StringUtils.split(tempStr[0], ",");

							if (!("-1".equals(alarmTypeNo))
									&& !(alarmTypeNo.equals(strs[4]))) {// 如果选择过滤报警
								continue;
							}
							Date date = new Date(Long.valueOf(dateStr));
							String alarmTime = sdf.format(date);

							if (totalCount < maxCount) {
								String vehicleInfo = map
										.get("registrationNO")
										+ "|"
										+ map.get("registrationNOColor");
								AlarmModel alarmModel = AlarmTools
										.alarmQueueTypeToList(strs,
												vehicleInfo, alarmTime);

								Map<String, String> val = new HashMap<String, String>();

								val.put("registrationNO",
										alarmModel.getRegistrationNo());// 车牌
								val.put("registraionColor",
										alarmModel.getRegistrationColor());// 车牌颜色
								val.put("vehicleID", alarmModel.getVehicleId());// 车辆ID
								val.put("alarmType", alarmModel.getAlarmName());// 报警类型
								val.put("alarmTypeId", alarmModel.getAlarmTypeId());//报警类型ID
								val.put("longitude", alarmModel.getLongitude());// 经度
								val.put("latitude", alarmModel.getLatitude());// 纬度
								val.put("speed1", alarmModel.getSpeed1());// Gps速度
								val.put("speed2", alarmModel.getSpeed2());
								val.put("head", GpsTools.getHead(Integer
										.parseInt(alarmModel.getHead())));// 方向
								val.put("gpsMileage1",
										alarmModel.getGpsMileage1());
								val.put("gpsMileage2",
										alarmModel.getGpsMileage2());// 里程
								val.put("alarmTime", alarmModel.getAlarmTime());// GPS时间
								val.put("alarmDesc", alarmModel.getDesc());// 报警描述

								resultls.add(val);

								totalCount++;
							} else {
								return resultls;
							}
						}
					} catch (Exception e) {
						e.printStackTrace();
					}
				}
			}
		} catch (Exception e) {
			e.printStackTrace();
		}

		return resultls;
	}
}

