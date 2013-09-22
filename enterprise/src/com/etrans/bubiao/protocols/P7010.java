package com.etrans.bubiao.protocols;

public class P7010 extends P_Vehicle{

	private String commandCode="7010";
	private String starTime;
	private String endTime;
	
	public String getCommandCode() {
		return commandCode;
	}	
	public String getStarTime() {
		return starTime;
	}
	public void setStarTime(String starTime) {
		this.starTime = starTime;
	}
	public String getEndTime() {
		return endTime;
	}
	public void setEndTime(String endTime) {
		this.endTime = endTime;
	}
	public String toString(){
		return getTerminalType()+","+getVehicleId()+","+starTime+","+endTime;
	}
}
