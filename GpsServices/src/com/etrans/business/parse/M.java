package com.etrans.business.parse;

import java.util.Map;


/** 
 * 接收消息类别解析接口
 * 
 * @author Pomelo(柚子.)  
 * @version 1.0
 * @since 创建时间：2013-7-3 下午4:41:17 
 */
public interface M {
	
	/**
	 * 解析消息
	 * 
	 * @param message    String    base64解密后的报文信息
	 * @param producQue  EQueue    生产队列
	 * @param resultMap  HashMap<String,String>  结果保存对象
	 */
	public void parse(String[] message,Map<String,Object> resultMap) throws Exception;
	
	/**
	 * 获取指令或者协议名称
	 * 
	 * @return
	 */
	public String getName();
}

