package com.etrans.bubiao.protocols;

public class P7017 extends P_Platform {
	
	private String commandCode="7017";
	private String closedReason;
	
	public String getCommandCode() {
		return commandCode;
	}

	public void setCommandCode(String commandCode) {
		this.commandCode = commandCode;
	}
	public String getClosedReason() {
		return closedReason;
	}

	public void setClosedReason(String closedReason) {
		this.closedReason = closedReason;
	}
	public String toString(){
		return ",,"+closedReason;
	}
	
}
