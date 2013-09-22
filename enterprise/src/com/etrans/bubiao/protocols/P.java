package com.etrans.bubiao.protocols;

/**
 * 指令协议
 * @author feltky
 *
 */
public class P {
	
	private String randSeq;
	private String pStar="##";
	private String seq;
	private String cmdSeq="0";
	private String commandCode;
	
	public String getRandSeq() {
		return randSeq;
	}
	public void setRandSeq(String randSeq) {
		this.randSeq = randSeq;
	}	
	public String getCommandCode() {
		return commandCode;
	}
	public void setCommandCode(String commandCode) {
		this.commandCode = commandCode;
	}
	public String getpStar() {
		return pStar;
	}
	public void setpStar(String pStar) {
		this.pStar = pStar;
	}
	public String getSeq() {
		return seq;
	}
	public void setSeq(String seq) {
		this.seq = seq;
	}
	public String getCmdSeq() {
		return cmdSeq;
	}
	public void setCmdSeq(String cmdSeq) {
		this.cmdSeq = cmdSeq;
	}
}
