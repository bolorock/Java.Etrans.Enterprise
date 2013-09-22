package com.etrans.entity;
/** 
 * MqDcConfig
 * @author Pomelo(柚子.)  
 * @version 1.0
 * @since 创建时间：2013-2-4 上午11:08:23 
 */
public class MqDcConfig {
	
	private String vehicleNum;

	private String vehicleAnalyseThreadNum;
	
	private String subscriptionLogin;
	
	private String totalLogin;
	
	private String pFSize;
	
	private String[] pFIP;
	
	private int[] pFPort;
	
	public String getVehicleNum() {
		return vehicleNum;
	}
	public void setVehicleNum(String vehicleNum) {
		this.vehicleNum = vehicleNum;
	}
	
	public String getVehicleAnalyseThreadNum() {
		return vehicleAnalyseThreadNum;
	}
	public void setVehicleAnalyseThreadNum(String vehicleAnalyseThreadNum) {
		this.vehicleAnalyseThreadNum = vehicleAnalyseThreadNum;
	}
	public String getSubscriptionLogin() {
		return subscriptionLogin;
	}
	public void setSubscriptionLogin(String subscriptionLogin) {
		this.subscriptionLogin = subscriptionLogin;
	}
	public String getTotalLogin() {
		return totalLogin;
	}
	public void setTotalLogin(String totalLogin) {
		this.totalLogin = totalLogin;
	}
	public String getpFSize() {
		return pFSize;
	}
	public void setpFSize(String pFSize) {
		this.pFSize = pFSize;
	}
	public String[] getpFIP() {
		return pFIP;
	}
	public void setpFIP(String[] pFIP) {
		this.pFIP = pFIP;
	}
	public int[] getpFPort() {
		return pFPort;
	}
	public void setpFPort(int[] pFPort) {
		this.pFPort = pFPort;
	}
}

