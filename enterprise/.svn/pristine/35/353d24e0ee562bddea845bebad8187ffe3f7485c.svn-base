/**    
 * AlarmHandleThread.java
 * Create on 2011-4-14
 * Copyright (c) 2010 by e_trans. 
 */
package com.etrans.bubiao.repository;

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.Queue;
import java.util.TimeZone;

import org.apache.commons.lang.StringUtils;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

import com.etrans.common.util.Base64ThreadLocal;

/**
 * 业务信息处理线程
 * @author lihaiyan
 * @version 1.0
 */
public class BusinessHandleThread implements Runnable {
	private final static ThreadLocal<Base64ThreadLocal> base64Local = new ThreadLocal<Base64ThreadLocal>();
	private BusinessQueue businessQueue;// // GPS信息存储队列
	private final Log logger = LogFactory.getLog(BusinessHandleThread.class.getName());
	Base64ThreadLocal base64;
	
	public BusinessHandleThread(BusinessQueue businessQueue) {
		this.businessQueue = businessQueue;
		
	}

	public void run() {
	   SimpleDateFormat sdf = new SimpleDateFormat("yyyy-M-dd HH:mm:ss");
	 
	   TimeZone timeZoneChina = TimeZone.getTimeZone("Asia/Shanghai");// 获取中国的时区
	  
	   sdf.setTimeZone(timeZoneChina);
	  logger.error("---------业务数据处理线程启动!---------");
		try {
			base64 = base64Local.get();
			if (base64 == null) {
				base64 = new Base64ThreadLocal();
				base64Local.set(base64);
			}
		 } catch (Exception e) {
				  e.printStackTrace();
		}
			while (true) {
				try{
				   Calendar calendar=Calendar.getInstance();
					calendar.setTimeZone(timeZoneChina);
					String message = businessQueue.consume();//业务数据
					if (StringUtils.isNotEmpty(message)) {
						String[] business = message.split(",");
						String decoderStr = (business[0].toString().split("##")[1]) + base64.decoderMessage(business[3].toString());
					}else{

							Thread.sleep(1);
					}
				} catch (Exception e) {
				  e.printStackTrace();
					logger.error("业务数据入HashMap出错:" + e);
				}
			}

	}
	
}
