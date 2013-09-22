package com.base.webService.entity;

import java.io.Serializable;
import java.util.Date;

import org.apache.commons.lang.StringUtils;

public class GpsInfoResult implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	private String carCode;//车牌号
	
	private int GpsID;//编号
	
	private String GpsTime;//GPS定位时间
	
	private double Longitude;//经度
	
	private double Latitude;//纬度
	
	private double Speed;//速度
	
	private String Head;//方向
	
	private boolean GpsValid;//是否有效定位 盲区或者准确
	
	private String GpsState;//状态信息
	
	private double GpsMileage;//里程
	
	private double oil;//油位

	public String getCarCode() {
		return carCode;
	}

	public void setCarCode(String carCode) {
		this.carCode = carCode;
	}

	public int getGpsID() {
		return GpsID;
	}

	public void setGpsID(int gpsID) {
		GpsID = gpsID;
	}

	public String getGpsTime() {
		return GpsTime;
	}

	public void setGpsTime(String gpsTime) {
		GpsTime = gpsTime;
	}

	public double getLongitude() {
		return Longitude;
	}

	public void setLongitude(double longitude) {
		Longitude = longitude;
	}

	public double getLatitude() {
		return Latitude;
	}

	public void setLatitude(double latitude) {
		Latitude = latitude;
	}

	public double getSpeed() {
		return Speed;
	}

	public void setSpeed(double speed) {
		Speed = speed;
	}

	public String getHead() {
		return Head;
	}

	public void setHead(String head) {
		Head = head;
	}

	public boolean isGpsValid() {
		return GpsValid;
	}

	public void setGpsValid(boolean gpsValid) {
		GpsValid = gpsValid;
	}

	public String getGpsState() {
		return GpsState;
	}

	public void setGpsState(String gpsState) {
		GpsState = gpsState;
	}

	public double getGpsMileage() {
		return GpsMileage;
	}

	public void setGpsMileage(double gpsMileage) {
		GpsMileage = gpsMileage;
	}
	
	public double getOil() {
		return oil;
	}

	public void setOil(double oil) {
		this.oil = oil;
	}

	public String toString(){
		StringBuffer message=new StringBuffer();
		message.append(StringUtils.isEmpty(this.carCode)?" ":this.carCode)//车牌
		       .append(",")
		       .append(this.GpsValid)//是否定位
		       .append(",")
		       .append(this.Latitude)//纬度
		       .append(",")
		       .append(this.Longitude)//经度
		       .append(",")
		       .append(this.Speed)//速度
		       .append(",")
		       .append(StringUtils.isEmpty(this.Head)?" ":this.Head)//方向
		       .append(",")
		       .append(StringUtils.isEmpty(this.GpsState)?" ":this.GpsState)//状态[车辆信息、IC卡号、驾驶证号、司机姓名等]
		       .append(",")
		       .append(this.getGpsMileage())//里程
		       .append(",")
		       .append(this.getOil())//油位
		       .append(",")
		       .append(this.getGpsTime());//GPS时间yyyy-MM-dd hh:mm:ss
		return message.toString();
		
	}
	
}
