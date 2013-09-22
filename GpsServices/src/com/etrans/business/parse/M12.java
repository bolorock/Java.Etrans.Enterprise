package com.etrans.business.parse;

import java.util.Map;

import com.etrans.business.queue.EQueue;
import com.etrans.business.queue.EtransLinkedQueue;
import com.etrans.common.util.Tools;

/** 
 * 报警数据解析类
 * 
 * @author Pomelo(柚子.)  
 * @version 1.0
 * @since 创建时间：2013-7-3 下午6:22:22 
 */
public class M12 implements M {
	
	private EQueue queue = new EtransLinkedQueue();// 每辆车的报警队列
	private String[] business;
	private String decoderStr;
	
	/**
	 * 解析消息
	 * 
	 * @param message    String    base64解密后的报文信息
	 * @param producQue  EQueue    生产队列
	 * @param resultMap  HashMap<String,String>  结果保存对象
	 */
	@Override
	public void parse(String[] message,Map<String, Object> resultMap) throws Exception {
		business = message;
		decoderStr = business[3];
		queue = getHashMapQueue((EQueue)resultMap.get(business[2]));
		queue.produce(decoderStr + "=====" +System.currentTimeMillis());
		resultMap.put(business[2], queue);
	}

	/**
	 * 判断businessHashMap中的队列
	 * 
	 * @param queueTemp ,businessHashMap中的队列
	 * @return Queue<String>
	 * */
	public EQueue getHashMapQueue(EQueue queueTemp) {
		if (null == queueTemp) {
			return new EtransLinkedQueue();
		} else {
			while (queueTemp.size() >= (Tools.maxMessageNum)) { 
				queueTemp.consume();
			}
			return queueTemp;
		}
	}
	
	/**
	 * 获取指令或者协议名称
	 * 
	 * @return
	 */
	public String getName(){
		return "【指令数据类型】——【报警】";
	}
}

