package com.etrans.rmi.imp;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.TimeZone;

import org.apache.commons.lang.StringUtils;

import com.etrans.business.queue.ResultMaps;
import com.etrans.common.util.State;
import com.etrans.entity.AffixationBean;
import com.etrans.entity.GpsInfo;
import com.etrans.rmi.GpsTrackServer;

/** 
 * Gps轨迹服务实现类
 * <p>
 * 主要提供：
 * 1、获取gps信息
 * 2、区域查车
 * 3、在线状态查询
 * </p>
 * 
 * @author Pomelo(柚子.)  
 * @version 1.0
 * @since 创建时间：2013-7-5 下午2:39:30 
 */
public class GpsTrackServerImp  implements GpsTrackServer {
	
	private SimpleDateFormat sdf = new SimpleDateFormat("yyyy-M-dd HH:mm:ss");
	private Calendar calendar=Calendar.getInstance();
	private TimeZone timeZoneChina = TimeZone.getTimeZone("Asia/Shanghai");
	
	{
		sdf.setTimeZone(timeZoneChina);
		calendar.setTimeZone(timeZoneChina);
	}
	
	/**
	 * 获取单车的GPS信息
	 * 
	 * @param vehicleIdStr 车辆ID
	 *  @return gpsInfo String
	 */ 
	@Override
	public String getGpsInfo(String vehicleId) {
		return ResultMaps.gpsInfoHashMap.get(vehicleId);
	}

	/**
	 * 获取多车的GPS信息
	 * 
	 * @param vehicleIdStr 车辆ID字符集
	 * @return strList List<String>
	 */
	@Override
	public List<GpsInfo> getGpsInfos(String vehicleIdStr) {
		List<GpsInfo> gpsBackList = new ArrayList<GpsInfo>();
		for (String vehicleId : vehicleIdStr.split(",")) {
			try {
				vehicleId = StringUtils.deleteWhitespace(vehicleId);
				String gpsInfoMessage = this.getGpsInfo(vehicleId);
				AffixationBean affixationBean = ResultMaps.affixationHashMap.get(vehicleId);
				if (null != gpsInfoMessage) {
					String[] gpsInfoMessageArray = gpsInfoMessage.split(",");
					String stateStr = "";
					stateStr = State.getTermianlState(gpsInfoMessageArray[17]);// gps状态|报警状态
					String[] stateStrArray = stateStr.split("\\|");
					String gpsStateString = stateStrArray[0];
					String alarmsStateString = stateStrArray[1];
					GpsInfo info = new GpsInfo();
					String sd2 = gpsInfoMessageArray[6];
					info.setLat(gpsInfoMessageArray[4]);
					info.setLon(gpsInfoMessageArray[3]);
					info.setHd(gpsInfoMessageArray[8]);
					info.setSd(gpsInfoMessageArray[7]);
					info.setSd2(sd2);
					info.setVehicleId(vehicleId);
					info.setGs(gpsStateString);
					info.setAlarmState(alarmsStateString);
					info.setGt(gpsInfoMessageArray[1]);
					info.setOi(String.valueOf(Integer.parseInt(gpsInfoMessageArray[16]) / 10));
					info.setGv(gpsInfoMessageArray[12]);
					info.setSh(String.valueOf(Integer.parseInt(gpsInfoMessageArray[14]) / 100));
					info.setSt(gpsInfoMessageArray[12]);//
					info.setGd(gpsInfoMessageArray[5]);
					info.setBill(ResultMaps.billMap.get(vehicleId));
					if (affixationBean != null) {
						info.setAlarmAffairID(affixationBean.getAlarmAffairID() == null ? "": affixationBean.getAlarmAffairID());
						info.setOverspeedAlarm(affixationBean.getOverspeedAlarm() == null ? "": affixationBean.getOverspeedAlarm());
						info.setTurnoverArea(affixationBean.getTurnoverArea() == null ? "": affixationBean.getTurnoverArea());
						info.setFjInfo(affixationBean.getFjInfo() == null ? "": affixationBean.getFjInfo());
					}
					gpsBackList.add(info);
				}
			} catch (Exception e) {}
		}
		return gpsBackList;
	}

	/**
	 * 获取车辆在线状态
	 * 
	 * @param vehicleId String
	 * @return boolean
	 */
	@Override
	public boolean getVehicleIsOnline(String vehicleId) {
		Long nowTime=calendar.getTimeInMillis();
		try {
			String gpsInfoMessage = this.getGpsInfo(vehicleId);
			if(StringUtils.isEmpty(gpsInfoMessage)){
				return false;
			}else{
				String[] gpsInfoMessageArray = gpsInfoMessage.split(",");
				String gpsTimeString=gpsInfoMessageArray[1];
				Long gpsTime=sdf.parse(gpsTimeString).getTime();
				if((nowTime-gpsTime)<=600000){//10分钟内有轨迹
					return true;
				}else{
					return false;
				}
			}
		} catch (Exception e) {
			return false;
		}
	}

	/**
	 * 一次获取多车的在线状态【推荐方法】
	 * 
	 * @param vehicleIdStr String
	 * @return booleanList  List<Boolean>
	 */
	@Override
	public List<Boolean> getVehiclesIsOnline(String vehicleIdStr) {
		List<Boolean> booleanList = new ArrayList<Boolean>();
		for(String vehicle:vehicleIdStr.split(",")){
			booleanList.add(getVehicleIsOnline(vehicle));
		}
		return booleanList;
	}

	/**
	 * 区域查车
	 * 
	 * @param  leftLat    左上角经度
	 * @param  leftLon    左上角纬度
	 * @param  rightLat   左上角经度
	 * @param  rightLon   右上角纬度
	 * @param  vehicleMap 可查询车辆
	 * @return rectangleBackList List<String>
	 */
	@Override
	public List<String> findRectangleAreaCar(
			double leftLat,  double leftLon,
			double rightLat, double rightLon, 
			Map<String, String> vehicleMap) 
	{
		List<String> rectangleBackList = new ArrayList<String>();
		Iterator<String> iterator = vehicleMap.keySet().iterator();
		while (iterator.hasNext()) {
			String vehicleId=iterator.next();
			try {
				String gpsInfo = this.getGpsInfo(vehicleId); 
				if (StringUtils.isNotEmpty(gpsInfo)) {
					double lat = Double.parseDouble(gpsInfo.split(",")[3]); 
					double lon = Double.parseDouble(gpsInfo.split(",")[4]); 
					if ((lat > leftLat && lat < rightLat) && (lon > leftLon && lon < rightLon)) {
						rectangleBackList.add(vehicleId);
					}
				}
			} catch (Exception e) {}
		}
		return rectangleBackList;
	}

}

