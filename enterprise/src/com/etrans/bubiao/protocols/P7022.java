package com.etrans.bubiao.protocols;

public class P7022 extends P_Vehicle {
	private String commandCode="7022";
	private String electronicBillContent;
	public String getElectronicBillContent() {
		return electronicBillContent;
	}

	public void setElectronicBillContent(String electronicBillContent) {
		this.electronicBillContent = electronicBillContent;
	}

	public String getCommandCode() {
		return commandCode;
	}

	public void setCommandCode(String commandCode) {
		this.commandCode = commandCode;
	}
	public String toString(){
		return getTerminalType()+","+getVehicleId()+","+electronicBillContent;
	}
}
