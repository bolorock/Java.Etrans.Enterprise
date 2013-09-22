/**    
 * AlarmHandleThread.java
 * Create on 2011-4-14
 * Copyright (c) 2010 by e_trans. 
 */
package com.etrans.bubiao.repository.parent;

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.HashMap;
import java.util.Map;
import java.util.TimeZone;

import org.apache.commons.lang.StringUtils;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

import com.etrans.bubiao.services.monitorCenter.MonitorCenterServices;
import com.etrans.bubiao.sys.Constants;
import com.etrans.common.util.Base64ThreadLocal;
import com.etrans.common.util.CommandCode;
import com.etrans.common.util.CommandTools;
import com.etrans.common.util.Tools;
import com.etrans.common.util.web.Struts2Utils;

/**
 * 直连指令信息处理线程
 * @author lihaiyan
 * @version 1.0
 */
public class CommandResultHandleThread implements Runnable {
	private final static ThreadLocal<Base64ThreadLocal> base64Local = new ThreadLocal<Base64ThreadLocal>();
	private HashMap<String,String> commandResultHashMap;// 指令回复数据储存map
	private CommandResultQueue commandResultQueue;//指令回复数据队列
	private static String filePath = Tools.getProjectPath().replaceAll("%20", " ") + "command/gb/upload/";
	private final Log logger = LogFactory.getLog(CommandResultHandleThread.class.getName());
	Base64ThreadLocal base64;
	private Map<String,String> vehicleMap;
	private MonitorCenterServices monitorCenterServices;
	
	public CommandResultHandleThread(
			HashMap<String,String> commandResultHashMap
			, CommandResultQueue commandResultQueue
			,Map<String,String> vehicleMap,
			MonitorCenterServices monitorCenterServices) {
		this.commandResultHashMap = commandResultHashMap;
		this.commandResultQueue = commandResultQueue;
		this.vehicleMap=vehicleMap;
		this.monitorCenterServices = monitorCenterServices;
	}

	/**
	 * 根据终端号获取车辆信息
	 * 
	 * @param vehicleId
	 * @return
	 */
	@SuppressWarnings("unchecked")
	public String getVehicleMessage(String vehicleId)
	{
		vehicleMap =(Map<String,String>) Struts2Utils.getSessionAttribute(Constants.USER_VEHICLE);
		String getVehicleMessage = vehicleMap.get(vehicleId);
		return getVehicleMessage;
	}
	
	public void run() {
		/*
		 * ##seq,7101,cmdseq,base64(800,1232,……)’#13#10
             Seq	: 流水号
             7101	: 业务类型
             cmdSeq : 目前没用，用来以后扩展，现在填0
             800   : 车辆通讯类型，如：600、700、800等，如果非车辆信息留空格
            1232  : 车ID（数据库），如果非车辆信息留空格
            ……  : 后续数据内容，根据下面定义的个字段内容组合，之间采用半角“,”分隔

		 */
		logger.error("---------指令回复数据处理线程启动!---------");
		try {
			base64 = base64Local.get();
			if (base64 == null) {
				base64 = new Base64ThreadLocal();
				base64Local.set(base64);
			}
		}catch (Exception e) {
			e.printStackTrace();
		}	
			while (true) {
				try{
					String message = commandResultQueue.consume();//指令回复
					if (StringUtils.isNotEmpty(message)) {
						String[] business = message.split(",");
						String decoderStr = base64.decoderMessage(business[3].toString());//加密内容
						
	//					##seq,7101,cmdseq,base64(800,1232,……)

							
					int commandCode = Integer.parseInt(business[1]);
					
					//指令代码|描述@回复指令参数1#回复指令参数2#回复指令参数3|接受时间 
					switch(commandCode){		
						case CommandCode.COMMAND_7900:
							//上级下发应答信息通用描述：（增加指令）
							commandResultHashMap.put(CommandCode.COMMAND_7900+"Command",CommandTools.convertUpCustomAnswer(decoderStr,business[1])+"|"+System.currentTimeMillis());
							break;		
						default:	
							//,,1,0
							//（解释：主链路连接状态：登录成功、从链路连接状态：连接断开）
							String value=decoderStr + "|" + System.currentTimeMillis();
							commandResultHashMap.put(business[1], value+"|"+System.currentTimeMillis());
							break;
					}
					
					this.addClientComSendLog("0", business[1], message);
					
					}else{
						Thread.sleep(1);
					}
				} catch (Exception e) {
				  e.printStackTrace();
					logger.error("报警数据入HashMap出错:" + e);
				}
		}
	}
    
			public void addClientComSendLog(String vehicleId,String commandCode,String decoderStr){
				 try{
						 SimpleDateFormat sdf = new SimpleDateFormat("yyyy-M-dd HH:mm:ss");
						 Calendar calendar=Calendar.getInstance();
						 TimeZone timeZoneChina = TimeZone.getTimeZone("Asia/Shanghai");// 获取中国的时区
						 calendar.setTimeZone(timeZoneChina);
						 sdf.setTimeZone(timeZoneChina);
						 
					 	Map<String, Object> setParamMap=new HashMap<String, Object>();
					    setParamMap.put("VehicleID", vehicleId==null?"0":vehicleId);
					    setParamMap.put("UserID", "1");
					    setParamMap.put("UserName", "admin");
					    setParamMap.put("CommName", commandCode);
					    setParamMap.put("CommContent", decoderStr);
					    setParamMap.put("SendTime", sdf.format(calendar.getTime()));
					    this.monitorCenterServices.addClientComSendLog(setParamMap);
				   }catch(Exception ee){
					   ee.printStackTrace();
				   }
			}
}
