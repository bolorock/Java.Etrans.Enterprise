package com.etrans.bubiao.action.command;

import org.apache.commons.lang.StringUtils;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.apache.struts2.convention.annotation.Action;
import org.apache.struts2.convention.annotation.Namespace;
import org.apache.struts2.convention.annotation.ParentPackage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;

import com.etrans.bubiao.action.BaseAction;
import com.etrans.bubiao.protocols.P;
import com.etrans.bubiao.repository.CommandRepository;
import com.etrans.bubiao.services.command.CommandServices;
import com.etrans.bubiao.services.sys.CustomMapServices;
import com.etrans.common.util.Base64;
import com.etrans.common.util.P_Util;

/**
 * 
 * @author 柚子
 *
 */
@Controller
@Scope("prototype")
@Namespace("/buCommand")
@ParentPackage("sessionPkg")
public class BuCommandAction extends BaseAction{
	
 	protected Logger log = LogManager.getLogger(this.getClass().getName());

	@Autowired
	private CommandRepository commandRepository;
	
	@Autowired
	private CommandServices commandServices;
	
	@Autowired
	private CustomMapServices customMapServices;	

	private P p;
	
	/**
	 * 
	 * @return
	 * @throws Exception
	 */
	@Action(value = "sendBuMessage")
	public void sendCommandMessage() {
		try {
			StringBuffer sendMessage = new StringBuffer();
			p = P_Util.getInstance(this.getParameterMap());			
			int sendSequence = this.commandServices.getSendSequence();
			System.out.println("sendSequence"+sendSequence);
			p.setRandSeq("00000000".substring(0,8-String.valueOf(sendSequence).length())+String.valueOf(sendSequence));
			sendMessage.append(p.getpStar());
			sendMessage.append(sendSequence).append(",");
			sendMessage.append(p.getCommandCode()).append(",");
			sendMessage.append(p.getCmdSeq()).append(",");
			System.out.println("加密前:"+p.toString());
			sendMessage.append(Base64.encoderMessage(p.toString()).replaceAll("\\n", "").replaceAll("\\r", ""));
			System.out.println(sendMessage.toString());
			this.commandServices.insertPlatFormCommandSendQueue(sendMessage.toString());	
			this.renderJSON("true");
		} catch (Exception e) {
			log.error(e.getMessage());
		}
	}	
	
	
	/**
	 * 描述：查询平台车辆指令返回结果
	 * 
	 * @author lihaiyan
	 * @since Create on 2012-6-28
	 * @version Copyright (c) 2012 by e_trans.
	 */
	@Action(value = "findCommandResult")
	public String findCommandResult()
	{
		String vehicleId = getParameter("vehicleId");
		String jsonString = "false";
		if (StringUtils.isNotEmpty(vehicleId))
		{
			try
			{
				jsonString= this.commandServices.findPlatFormCommandResult(vehicleId); // 查询指令返回的结果
			} catch (Exception e)
			{
				e.printStackTrace();
				jsonString = "false";
			}
		}
		// 返回发送结果
		this.renderText(jsonString);

		return NONE;
	}
	
	public P getP() {
		return p;
	}

	public void setP(P p) {
		this.p = p;
	}
}
