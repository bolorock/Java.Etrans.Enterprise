package com.etrans.bubiao.protocols;

public class P7006 extends P_Platform{
	private String commandCode="7006";
	private String supervisionId;
	private String result;
	public String getSupervisionId() {
		return supervisionId;
	}

	public void setSupervisionId(String supervisionId) {
		this.supervisionId = supervisionId;
	}

	public String getResult() {
		return result;
	}

	public void setResult(String result) {
		this.result = result;
	}

	public String getCommandCode() {
		return commandCode;
	}

	public void setCommandCode(String commandCode) {
		this.commandCode = commandCode;
	}
}
