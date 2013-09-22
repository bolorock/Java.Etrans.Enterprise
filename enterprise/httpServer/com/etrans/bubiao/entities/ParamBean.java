package com.etrans.bubiao.entities;

import java.util.List;

public class ParamBean {
	
	private String name; //用户名
	private String password;//密码
	private String id;
	private String ticket;
	private String userID;
	private String lon;//经度
	private String lat;//纬度
	private String location;//中文地址
	private String vehicleNo;
	private String regNo; //车牌号
	private List<String> vehicleNoList; //车牌列表
	private List<String> vehicleIdList; //车ID列表
	private String vehicleId; //车ID
	private String startDate; //开始时间
	private String endDate; //结束时间
	private String pageSize;//每页条数
	private String pageNumber;//第几页
	private List<String> alarmTypeIdList; //报警类型列表
	private String analyseGroup;	//分析组
	private String unitName;		//车属单位
	private List<String> unitIdList;	//车属单位列表
  
	public String getPageSize() {
		return pageSize;
	}
	public void setPageSize(String pageSize) {
		this.pageSize = pageSize;
	}
	public String getPageNumber() {
		return pageNumber;
	}
	public void setPageNumber(String pageNumber) {
		this.pageNumber = pageNumber;
	}
	public String getRegNo() {
		return regNo;
	}
	public void setRegNo(String regNo) {
		this.regNo = regNo;
	}
	public String getStartDate() {
		return startDate;
	}
	public void setStartDate(String startDate) {
		this.startDate = startDate;
	}
	public String getEndDate() {
		return endDate;
	}
	public void setEndDate(String endDate) {
		this.endDate = endDate;
	}
	public String getVehicleNo() {
		return vehicleNo;
	}
	public void setVehicleNo(String vehicleNo) {
		this.vehicleNo = vehicleNo;
	}
	
	public String getLon() {
		return lon;
	}
	public void setLon(String lon) {
		this.lon = lon;
	}
	public String getLat() {
		return lat;
	}
	public void setLat(String lat) {
		this.lat = lat;
	}
	public String getLocation() {
		return location;
	}
	public void setLocation(String location) {
		this.location = location;
	}

	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	
	public List<String> getVehicleNoList() {
		return vehicleNoList;
	}
	public void setVehicleNoList(List<String> vehicleNoList) {
		this.vehicleNoList = vehicleNoList;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getTicket() {
		return ticket;
	}
	public void setTicket(String ticket) {
		this.ticket = ticket;
	}
	public String getUserID() {
		return userID;
	}
	public void setUserID(String userID) {
		this.userID = userID;
	}
	public List<String> getVehicleIdList() {
		return vehicleIdList;
	}
	public void setVehicleIdList(List<String> vehicleIdList) {
		this.vehicleIdList = vehicleIdList;
	}
	public String getVehicleId() {
		return vehicleId;
	}
	public void setVehicleId(String vehicleId) {
		this.vehicleId = vehicleId;
	}
	public List<String> getAlarmTypeIdList() {
		return alarmTypeIdList;
	}
	public void setAlarmTypeIdList(List<String> alarmTypeIdList) {
		this.alarmTypeIdList = alarmTypeIdList;
	}
	public String getAnalyseGroup() {
		return analyseGroup;
	}
	public void setAnalyseGroup(String analyseGroup) {
		this.analyseGroup = analyseGroup;
	}
	public String getUnitName() {
		return unitName;
	}
	public void setUnitName(String unitName) {
		this.unitName = unitName;
	}
	public List<String> getUnitIdList() {
		return unitIdList;
	}
	public void setUnitIdList(List<String> unitIdList) {
		this.unitIdList = unitIdList;
	}
	
	
	
}
