/**
 * AlarmModel.java
 * Create on 2011-4-26下午06:36:53
 * Copyright (c) 2011 by e_trans.
 */
package com.etrans.bubiao.entities;

import java.io.Serializable;

/**
 * @author Ivan
 * @version 1.0
 * @brief
 */
@SuppressWarnings("serial")
public class AlarmModel implements Serializable
{
	
	/*新版报警协议
	 * sendBody := Format(
	 *   0 '%d,' +                     //车辆ID                     4
         1 '%s,' +                     //报警时间                   8
         2 '%s,' +                     //报警开始时间               8
         3 '%s,' +                     //报警本段开始报警时间       8
         4 '%d,' +                     //报警类型：1:紧急报警 2:超速 3:疲劳，...                               4
         5 '%d,' +                     //报警来源：1:车载终端；2:企业监控平台；3:政府监管平台；5:PA; 9：其它。
         6 '%s,' +                     //报警来源名称
         7 '%d,' +                     //外部报警信息ID                                                        4
         8 '%s,' +                     //如：疲劳门限、休息时间、当前驾驶时间。 各种报警参数各不相同           N
         9 '%.6f,'+                    //经度            1/1E6      4
         10'%.6f,'+                    //纬度            1/1E6      4
         11'%d,' +                     //传感器速度      1km        1
         12'%d,' +                     //GPS速度         1km        1
         13'%d,' +                     //传感器里程      0.1km      4
         14'%d,' +                     //GPS里程         0.1km      4
         15'%d,' +                     //方向            2dec       1
         16'%d,' +                     //本段报警次数               2
         17'%d,' +                     //累计报警次数               4
         18'%s',                       //状态字 32位               32      sum = 57 + 32 + N
	 */

	private String startTime;//本段开始报警时间
	private String beginTime;//开始报警时间
	private String speed1;//GPS速度 
	private String speed2;//传感器速度
	private String gpsMileage1;//GPS里程 
	private String gpsMileage2;//传感器里程
	private String head;//方向
	private String state;//状态
	
	private String termialType;//终端类型
	private String registrationNo; //车牌号
	private String registrationColor;//车牌颜色
	private String alarmName; // 报警类型（中文描述）
	private String desc; //报警描述 
	private String commNo;// 终端号
	private String alarmTypeId; // 报警类型Id
	private String vehicleId;// 车辆Id
	private String alarmTime; // 报警时间
	private String receveTime;//接收时间
	private String typeNo;
	private String longitude; // 经度
	private String latitude;//纬度
	private String sourceID;//报警来源ID
	private String sourceStr;//报警来源
	private String alarmInfoId;//外部报警信息ID 
	
	public String getState()
	{
		return state;
	}

	public void setState(String state)
	{
		this.state = state;
	}
	
	public String getHead()
	{
		return head;
	}

	public void setHead(String head)
	{
		this.head = head;
	}
	
	public String getGpsMileage1()
	{
		return gpsMileage1;
	}

	public void setGpsMileage1(String gpsMileage1)
	{
		this.gpsMileage1 = gpsMileage1;
	}
	
	public String getGpsMileage2()
	{
		return gpsMileage2;
	}

	public void setGpsMileage2(String gpsMileage2)
	{
		this.gpsMileage2 = gpsMileage2;
	}
	
	public String getSpeed1()
	{
		return speed1;
	}

	public void setSpeed1(String speed1)
	{
		this.speed1 = speed1;
	}
	
	public String getSpeed2()
	{
		return speed2;
	}

	public void setSpeed2(String speed2)
	{
		this.speed2 = speed2;
	}
	
	
	public String getRegistrationNo()
	{
		return registrationNo;
	}

	public void setRegistrationNo(String registrationNo)
	{
		this.registrationNo = registrationNo;
	}

	public String getAlarmName()
	{
		return alarmName;
	}

	public void setAlarmName(String alarmName)
	{
		this.alarmName = alarmName;
	}

	public String getDesc()
	{
		return desc;
	}

	public void setDesc(String desc)
	{
		this.desc = desc;
	}

	public String getCommNo()
	{
		return commNo;
	}

	public void setCommNo(String commNo)
	{
		this.commNo = commNo;
	}

	public String getAlarmTypeId()
	{
		return alarmTypeId;
	}

	public void setAlarmTypeId(String alarmTypeId)
	{
		this.alarmTypeId = alarmTypeId;
	}

	public String getVehicleId()
	{
		return vehicleId;
	}

	public void setVehicleId(String vehicleId)
	{
		this.vehicleId = vehicleId;
	}

	public String getAlarmTime()
	{
		return alarmTime;
	}

	public void setAlarmTime(String alarmTime)
	{
		this.alarmTime = alarmTime;
	}

	public String getTypeNo()
	{
		return typeNo;
	}

	public void setTypeNo(String typeNo)
	{
		this.typeNo = typeNo;
	}

	public String getLongitude()
	{
		return longitude;
	}

	public void setLongitude(String longitude)
	{
		this.longitude = longitude;
	}

	public String getLatitude()
	{
		return latitude;
	}

	public void setLatitude(String latitude)
	{
		this.latitude = latitude;
	}

	public String getRegistrationColor() {
		return registrationColor;
	}

	public void setRegistrationColor(String registrationColor) {
		this.registrationColor = registrationColor;
	}

	public String getReceveTime() {
		return receveTime;
	}

	public void setReceveTime(String receveTime) {
		this.receveTime = receveTime;
	}

	public String getSourceID()
	{
		return sourceID;
	}

	public void setSourceID(String sourceID)
	{
		this.sourceID = sourceID;
	}

	public String getAlarmInfoId() {
		return alarmInfoId;
	}

	public void setAlarmInfoId(String alarmInfoId) {
		this.alarmInfoId = alarmInfoId;
	}

	public String getSourceStr() {
		return sourceStr;
	}

	public void setSourceStr(String sourceStr) {
		this.sourceStr = sourceStr;
	}

	public String getTermialType() {
		return termialType;
	}

	public void setTermialType(String termialType) {
		this.termialType = termialType;
	}

	public String getStartTime() {
		return startTime;
	}

	public void setStartTime(String startTime) {
		this.startTime = startTime;
	}

	public String getBeginTime() {
		return beginTime;
	}

	public void setBeginTime(String beginTime) {
		this.beginTime = beginTime;
	}
	
	
	
}
