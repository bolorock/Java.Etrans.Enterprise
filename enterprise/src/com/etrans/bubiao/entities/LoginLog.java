/**
 * LoginLog.java
 * Create on 2012-3-29 13:33:12
 * Copyright (c) 2012 by e_trans.
 */
package com.etrans.bubiao.entities;

import java.io.Serializable;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.TimeZone;

/**
 * @author 登录日志实体
 * @version 1.0
 * @brief
 */
public class LoginLog implements Serializable {

	private static final long serialVersionUID = -7831505902529169852L;

	private Long id; //编号
	private Long userID; //用户id
	private String logonTime;//登录时间
	private String isLogin;//是否登录
	private String IsSucessful; //是否成功
	private String LogonHost;//登录主机
	private String LogonIP; //登录ip
	private String lastLogOnTime;
	
	
	////构造方法/////
	public LoginLog() {
		super();
	}
	public LoginLog(Long id, Long userID, String logonTime, String isLogin,
			String isSucessful, String logonHost, String logonIP,String lastLogOnTime) {
		super();
		this.id = id;
		this.userID = userID;
		this.logonTime = logonTime;
		this.isLogin = isLogin;
		IsSucessful = isSucessful;
		LogonHost = logonHost;
		LogonIP = logonIP;
		this.lastLogOnTime = lastLogOnTime;
	}
	////封装////
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public Long getUserID() {
		return userID;
	}
	public void setUserID(Long userID) {
		this.userID = userID;
	}
	public String getLogonTime() {
		return logonTime;
	}
	public void setLogonTime(String logonTime) {
		this.logonTime = logonTime;
	}
	public String getIsLogin() {
		return isLogin;
	}
	public void setIsLogin(String isLogin) {
		this.isLogin = isLogin;
	}
	public String getIsSucessful() {
		return IsSucessful;
	}
	public void setIsSucessful(String isSucessful) {
		IsSucessful = isSucessful;
	}
	public String getLogonHost() {
		return LogonHost;
	}
	public void setLogonHost(String logonHost) {
		LogonHost = logonHost;
	}
	public String getLogonIP() {
		return LogonIP;
	}
	public void setLogonIP(String logonIP) {
		LogonIP = logonIP;
	}
	public static long getSerialversionuid() {
		return serialVersionUID;
	}
	
    public String getLastLogOnTime() {
		
		SimpleDateFormat format = new SimpleDateFormat("yyyy年MM月dd日 HH:mm");
		Calendar calendar = Calendar.getInstance(TimeZone.getTimeZone("GMT+08:00"));
		Date date = calendar.getTime();
		
		if(lastLogOnTime != null){
			try {
				date = DateFormat.getDateTimeInstance().parse(lastLogOnTime);
			} catch (ParseException e) {
			}
		}
		return format.format(date);
	}

	public void setLastLogOnTime(String lastLogOnTime) {
		this.lastLogOnTime = lastLogOnTime;
	}

	
	
}
