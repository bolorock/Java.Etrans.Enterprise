package com.base.webService.entity;

import org.apache.commons.lang.StringUtils;

public class WebServiceVehicleInfo {

	private  Long id;
	
	private String registrationNo;//车牌号
	
	private Long commNo;//终端编号
	
	private String simno;//SIM
	
	private String firstDriverName;//第一司机
	
	private String secondDriverName;//第二司机
	
	private String vehicleTeamName;//车队

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getRegistrationNo() {
		return registrationNo;
	}

	public void setRegistrationNo(String registrationNo) {
		this.registrationNo = registrationNo;
	}

	public Long getCommNo() {
		return commNo;
	}

	public void setCommNo(Long commNo) {
		this.commNo = commNo;
	}

	public String getSimno() {
		return simno;
	}

	public void setSimno(String simno) {
		this.simno = simno;
	}

	

	public String getFirstDriverName() {
		return firstDriverName;
	}

	public void setFirstDriverName(String firstDriverName) {
		this.firstDriverName = firstDriverName;
	}

	public String getSecondDriverName() {
		return secondDriverName;
	}

	public void setSecondDriverName(String secondDriverName) {
		this.secondDriverName = secondDriverName;
	}

	public String getVehicleTeamName() {
		return vehicleTeamName;
	}

	public void setVehicleTeamName(String vehicleTeamName) {
		this.vehicleTeamName = vehicleTeamName;
	}
	
	
	public String toString(){
		StringBuffer message=new StringBuffer();
		message.append(this.registrationNo)
		       .append(",")
		       .append(this.commNo)
		       .append(",")
		       .append(this.simno)
		       .append(",");
		if(!StringUtils.isEmpty(this.firstDriverName)){
			message.append(this.firstDriverName);
			message.append(" ");
		}
		if(!StringUtils.isEmpty(this.secondDriverName)){
			message.append(this.secondDriverName);
		}
		if(StringUtils.isEmpty(this.firstDriverName)&&StringUtils.isEmpty(this.secondDriverName)){
			message.append(" ");
		}
		message.append(",")
		       .append(StringUtils.isEmpty(this.vehicleTeamName)?" ":this.vehicleTeamName);
		return message.toString();
		
	}
}
