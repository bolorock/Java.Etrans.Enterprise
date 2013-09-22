package com.etrans.bubiao.protocols;

public class P7020 extends P_Vehicle {
	private String commandCode="7020";
	private String articleNumber;
	public String getArticleNumber() {
		return articleNumber;
	}

	public void setArticleNumber(String articleNumber) {
		this.articleNumber = articleNumber;
	}

	public String getCommandCode() {
		return commandCode;
	}

	public void setCommandCode(String commandCode) {
		this.commandCode = commandCode;
	}
	public String toString(){
		return getTerminalType()+","+getVehicleId()+","+articleNumber;
	}
}
