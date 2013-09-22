package com.etrans.business.parse;

import java.util.Map;

import com.etrans.business.queue.ResultMaps;
import com.etrans.common.util.HexUtil;
import com.etrans.common.util.Tools;

/** 
 * 指令回复信息解析处理
 * 
 * @author Pomelo(柚子.)  
 * @version 1.0
 * @since 创建时间：2013-7-3 下午6:22:42 
 */
public class M8 implements M {
	/**
	 * 业务数据
	 */
	private String[] business;
	
	/**
	 * 解码后的字符串
	 */
	private String decoderStr;
	
	/**
	 * 对象锁
	 */
	private Object lock = new Object();
	
	/**
	 * 解析消息
	 * <p>
	 * 代码说明:
	 * 2304:数据透传,769:事件报告,1793:电子运单,2048:多媒体事件,1794:驾驶员信息
	 * </p>
	 * @param message    String    base64解密后的报文信息
	 * @param producQue  EQueue    生产队列
	 * @param resultMap  HashMap<String,String>  结果保存对象
	 */
	@Override
	public void parse(String[] message,Map<String, Object> resultMap) throws Exception {
		
		business = message;
		decoderStr =business[3].toString();
		
		if(decoderStr.contains(",2304,")||decoderStr.contains(",769,")||decoderStr.contains(",1793,")
			||decoderStr.contains(",2048,") ||decoderStr.contains(",1794,")){
			// 大于100则消费掉旧数据
			synchronized(lock){
				while(ResultMaps.lowerFlatQueue.size()>100)ResultMaps.lowerFlatQueue.poll();
					if(decoderStr.contains(",1793,")){
						String[] strArray=decoderStr.split("\\,");
						String aciiString=strArray[4];
						String stringHex=HexUtil.toStringHex(aciiString);
						ResultMaps.lowerFlatQueue.add(decoderStr.replaceAll(strArray[4], stringHex));
						resultMap.put(strArray[0], stringHex);
					}else {
						ResultMaps.lowerFlatQueue.add(decoderStr);
					}
				}
		}else if(decoderStr.contains(",179,")){
			String[] oValue = decoderStr.split(",");
			String value="";
			if(oValue[4].contains("ACC") || oValue[4].contains("软件版本")){
				value=oValue[0]+","+oValue[1]+","+oValue[2]+","+oValue[3]+","+Tools.getNewArray(oValue,4,100,"，") + "|" + System.currentTimeMillis();
			}else{
				value=decoderStr + "|" + System.currentTimeMillis();
			}
			resultMap.put(business[2], value);
		} else {
			String value=decoderStr + "|" + System.currentTimeMillis();
			resultMap.put(business[2], value);
		}
	}
	/**
	 * 获取指令或者协议名称
	 * 
	 * @return
	 */
	public String getName(){
		return "【指令数据类型】——【指令回复信息】";
	}
}

