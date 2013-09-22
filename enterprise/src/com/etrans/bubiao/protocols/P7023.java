package com.etrans.bubiao.protocols;

public class P7023 extends P_Vehicle {
	private String commandCode="7023";
	private String alarmType;
	private String desc;
	
	public String getAlarmType() {
		return alarmType;
	}

	public void setAlarmType(String alarmType) {
		this.alarmType = alarmType;
	}

	public String getDesc() {
		return desc;
	}

	public void setDesc(String desc) {
		this.desc = desc;
	}

	public String getCommandCode() {
		return commandCode;
	}

	public void setCommandCode(String commandCode) {
		this.commandCode = commandCode;
	}
	public String toString(){
		return getTerminalType()+","+getVehicleId()+","+alarmType+desc;
	}
}
