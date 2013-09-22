package com.etrans.bubiao.protocols;

public class P7016 extends P_Platform {
	
	private String commandCode="7016";
	private String wrongQuestion;
	
	public String getWrongQuestion() {
		return wrongQuestion;
	}

	public void setWrongQuestion(String wrongQuestion) {
		this.wrongQuestion = wrongQuestion;
	}

	public String getCommandCode() {
		return commandCode;
	}

	public void setCommandCode(String commandCode) {
		this.commandCode = commandCode;
	}
	
	public String toString(){
		return ",,"+wrongQuestion;
	}
}
