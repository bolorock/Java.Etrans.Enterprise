package com.etrans.business.parse;

import java.util.Map;

/** 
 * <一句话简述本类作用>
 * @author Pomelo(柚子.)  
 * @version 1.0
 * @since 创建时间：2013-7-3 下午6:23:05 
 */
public class M6 implements M {
	
	/**
	 * 解析消息 
	 * 
	 * @param message    String    base64解密后的报文信息
	 * @param producQue  EQueue    生产队列
	 * @param resultMap  HashMap<String,String>  结果保存对象
	 */
	@Override
	public void parse(String[] message, Map<String, Object> resultMap) throws Exception {
	}
	/**
	 * 获取指令或者协议名称
	 * 
	 * @return
	 */
	public String getName(){
		return "【指令数据类型】——【业务数据】";
	}
}

