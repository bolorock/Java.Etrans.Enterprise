package com.etrans.bubiao.entities;

import java.io.Serializable;

/**
 * @author lihaiyan
 * @version 1.0
 * @brief
 */
@SuppressWarnings("serial")
public class GpsVehicle implements  Serializable
{
	private String vehicleId;// 车辆Id
	private String registrationNo; //车牌号
	private String terminalKindID;//终端类型
	private String kind;//车辆通讯类型
	private boolean isOnline;//是否在线
	private String code;
	private String commandKindId;
	private String noColor;//车牌颜色
	private String workunitName;//所属业户
	private int totalCount;
	private String video;
	private String txtCommand;
	public String getTxtCommand() {
		return txtCommand;
	}
	public void setTxtCommand(String txtCommand) {
		this.txtCommand = txtCommand;
	}
	public String getVideo() {
		return video;
	}
	public void setVideo(String video) {
		this.video = video;
	}
	public int getTotalCount() {
		return totalCount;
	}
	public void setTotalCount(int totalCount) {
		this.totalCount = totalCount;
	}
	public String getVehicleId()
	{
		return vehicleId;
	}
	public void setVehicleId(String vehicleId)
	{
		this.vehicleId = vehicleId;
	}
	public String getRegistrationNo()
	{
		return registrationNo;
	}
	public void setRegistrationNo(String registrationNo)
	{
		this.registrationNo = registrationNo;
	}
	
	public boolean isOnline()
	{
		return isOnline;
	}
	public void setOnline(boolean isOnline)
	{
		this.isOnline = isOnline;
	}
	public String getTerminalKindID()
	{
		return terminalKindID;
	}
	public void setTerminalKindID(String terminalKindID)
	{
		this.terminalKindID = terminalKindID;
	}
	public String getKind()
	{
		return kind;
	}
	public void setKind(String kind)
	{
		this.kind = kind;
	}
	public String getCode()
	{
		return code;
	}
	public void setCode(String code)
	{
		this.code = code;
	}
	public String getCommandKindId()
	{
		return commandKindId;
	}
	public void setCommandKindId(String commandKindId)
	{
		this.commandKindId = commandKindId;
	}
	public String getNoColor()
	{
		return noColor;
	}
	public void setNoColor(String noColor)
	{
		this.noColor = noColor;
	}
	public String getWorkunitName()
	{
		return workunitName;
	}
	public void setWorkunitName(String workunitName)
	{
		this.workunitName = workunitName;
	}
	
	
	
	
}
