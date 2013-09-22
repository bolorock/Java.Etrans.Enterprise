package com.etrans.bubiao.protocols;

public class P7014 extends P_Vehicle {
	private String commandCode="7014";
	private String  warningMessage;
	private String warningResultType;
	
	public String getWarningMessage() {
		return warningMessage;
	}

	public void setWarningMessage(String warningMessage) {
		this.warningMessage = warningMessage;
	}

	public String getWarningResultType() {
		return warningResultType;
	}

	public void setWarningResultType(String warningResultType) {
		this.warningResultType = warningResultType;
	}

	public String getCommandCode() {
		return commandCode;
	}

	public void setCommandCode(String commandCode) {
		this.commandCode = commandCode;
	}
	public String toString(){
		return getTerminalType()+","+getVehicleId()+","+super.getRandSeq()+warningResultType;
	}
}
