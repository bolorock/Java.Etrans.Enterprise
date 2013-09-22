package com.etrans.bubiao.protocols;

public class P7019 extends P_Vehicle {
	
	private String commandCode="7019";
	private String sendCount="01";
	private String alarmWord;
	private String longitude;
	private String latitude;
	private String positioningSpeed;
	
	public String getSendCount() {
		return sendCount;
	}

	public void setSendCount(String sendCount) {
		this.sendCount = sendCount;
	}

	public String getAlarmWord() {
		return alarmWord;
	}

	public void setAlarmWord(String alarmWord) {
		this.alarmWord = alarmWord;
	}

	public String getLongitude() {
		return longitude;
	}

	public void setLongitude(String longitude) {
		this.longitude = longitude;
	}

	public String getLatitude() {
		return latitude;
	}

	public void setLatitude(String latitude) {
		this.latitude = latitude;
	}

	public String getPositioningSpeed() {
		return positioningSpeed;
	}

	public void setPositioningSpeed(String positioningSpeed) {
		this.positioningSpeed = positioningSpeed;
	}


	public String getCommandCode() {
		return commandCode;
	}

	public void setCommandCode(String commandCode) {
		this.commandCode = commandCode;
	}
	public String toString(){
		return getTerminalType()+","+getVehicleId()+","
				+sendCount+"000000"+alarmWord+
				longitude+latitude+positioningSpeed;
	}
}
