package com.etrans.business.parse;

import java.util.Map;

import org.apache.commons.lang.StringUtils;

import com.etrans.common.util.DateUtil;

/** 
 * 轨迹信息解析协议类
 * 
 * @author Pomelo(柚子.)  
 * @version 1.0
 * @since 创建时间：2013-7-3 下午5:38:45 
 */
public class M5 implements M {
	
	// 上一次Gps时间,当前Gps时间,当前值，上一次值
	private String oldGpsTimeString,nowGpsTimeString,value,oldValue;
	
	// 轨迹信息数组
	private String[] gpsinfo;
	
	/**
	 * 协议消息解析方法
	 * 
	 * @param message    String    base64解密后的报文信息
	 * @param producQue  EQueue    生产队列
	 * @param resultMap  HashMap<String,String>  结果保存对象
	 */
	@Override
	public void parse(String[] message,Map<String,Object> resultMap) 
			throws Exception {
		gpsinfo = message;
		if (gpsinfo != null && gpsinfo.length > 3) {
			value = gpsinfo[3].toString() + "," + System.currentTimeMillis();
			oldValue = (String)resultMap.get(gpsinfo[2]);
			if(StringUtils.isNotEmpty(oldValue)){
				try {
					oldGpsTimeString = oldValue.split(",")[1];
					nowGpsTimeString = value.split(",")[1];
					if(DateUtil.compareTwoDate(nowGpsTimeString, oldGpsTimeString, "yyyy-M-dd HH:mm:ss")){
						resultMap.put(gpsinfo[2],value ); 
					}
				} catch (Exception e) {
					e.printStackTrace();
				}
				
			}else {
				resultMap.put(gpsinfo[2],value); 
			}
		}
	}
	
	/**
	 * 获取指令或者协议名称
	 * 
	 * @return
	 */
	public String getName(){
		return "【指令数据类型】——【轨迹数据】";
	}
}

