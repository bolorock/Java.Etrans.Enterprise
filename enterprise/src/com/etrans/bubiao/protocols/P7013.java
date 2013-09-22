package com.etrans.bubiao.protocols;

public class P7013 extends P_Vehicle{
	private String commandCode="7013";

	public String getCommandCode() {
		return commandCode;
	}

	public void setCommandCode(String commandCode) {
		this.commandCode = commandCode;
	}
	public String toString(){
		return getTerminalType()+","+getVehicleId();
	}
}
