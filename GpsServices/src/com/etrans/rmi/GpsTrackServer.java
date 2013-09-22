package com.etrans.rmi;

import java.util.List;
import java.util.Map;

import com.etrans.entity.GpsInfo;

/** 
 * GPS数据接口
 * 
 * @author Pomelo(柚子.)  
 * @version 1.0
 * @since 创建时间：2013-7-4 下午4:13:43 
 */
public interface GpsTrackServer{
	
	/**
	 * 获取多台车辆的Gps信息
	 * 
	 * @param vehicleIdStr
	 * @return List<String>
	 */
	public List<GpsInfo> getGpsInfos(String vehicleIdStr);
	
	/**
	 * 获取单台车辆的Gps信息
	 * 
	 * @param vehicleIdStr
	 * @return List<String>
	 */
	public String getGpsInfo(String vehicleId);
	
	/**
	 * 判断车辆是否在线[单车]
	 * 
	 * @param vehicleId
	 * @return
	 */
	public boolean getVehicleIsOnline(String vehicleId);
	
	/**
	 * 判断车辆是否在线[多车]
	 * 
	 * @param vehicleId
	 * @return
	 */
	public List<Boolean> getVehiclesIsOnline(String vehicleIdStr);
	
	/**
	 * 区域查车
	 * 
	 * @param leftLatLon
	 * @param rightLatLon
	 * @param vehicleMap
	 * @param mapType
	 * @return  List<String>
	 */
	public List<String> findRectangleAreaCar(double leftLat,double leftLon,double rightLat,double rightLon, Map<String, String> vehicleMap);
}

