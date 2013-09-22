/**    
 * gpsInfoHandleThread.java
 * Create on 2011-4-14
 * Copyright (c) 2010 by e_trans. 
 */
package com.etrans.bubiao.repository;

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.concurrent.ConcurrentHashMap;

import org.apache.commons.lang.StringUtils;
import org.apache.commons.lang.time.DateFormatUtils;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

import com.etrans.common.util.Base64ThreadLocal;
import com.etrans.common.util.DateUtil;

/**
 * 区域信息处理线程
 * 
 * @author yangzhen
 * @version 1.0
 */

public class AreaInfoHandleThread implements Runnable {
	private final static ThreadLocal<Base64ThreadLocal> base64Local = new ThreadLocal<Base64ThreadLocal>();
	private ConcurrentHashMap<String, String> areaInfoHashMap;// 区域信息存储Map
	private AreaInfoQueue areaInfoQueue; // 区域信息存储队列
	private final Log logger = LogFactory.getLog(AreaInfoHandleThread.class
			.getName());
	Base64ThreadLocal base64;

	public AreaInfoHandleThread(
			ConcurrentHashMap<String, String> areaInfoHashMap,
			AreaInfoQueue areaInfoQueue) {
		this.areaInfoHashMap = areaInfoHashMap;
		this.areaInfoQueue = areaInfoQueue;
	}

	public void run() {
		logger.info("---------区域信息处理线程启动!---------");
		base64 = base64Local.get();
		if (base64 == null) {
			base64 = new Base64ThreadLocal();
			base64Local.set(base64);
		}
		while (true) {
			try {

				String message = areaInfoQueue.consume();
				if (!StringUtils.isEmpty(message)) {
					String[] areaInfo = message.split(",");
					if (areaInfo != null && areaInfo.length > 3) {
						String areaValues = base64.decoderMessage(areaInfo[3].toString());
						areaInfoHashMap.put(areaInfo[2], areaValues);

					}
				} else {
					Thread.sleep(5);
				}

			} catch (Exception e) {
				logger.error("---------区域信息处理线程处理出错---------" + e);
			}

		}

	}
}
