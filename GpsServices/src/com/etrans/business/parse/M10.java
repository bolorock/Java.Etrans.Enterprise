package com.etrans.business.parse;

import java.util.Map;

import com.etrans.common.util.Tools;

/** 
 * 多媒体协议解析
 * 
 * @author Pomelo(柚子.)  
 * @version 1.0
 * @since 创建时间：2013-7-3 下午4:39:54 
 */
public class M10 implements M {
	/**
	 * 业务数据
	 */
	private String[] business;
	
	/**
	 * 解码后的字符串
	 */
	private String decoderStr;
	
	/**
	 * 图片文件存储路径
	 */
	private static String filePath = "E:\\command\\upload\\";
	
	/**
	 * 临时字符串
	 */
	private String[] strTemp;
	
	/**
	 * 文件名
	 */
	private String fileName ;
	
	/**
	 * 文件类别
	 */
	private String fileType;
 
	/**
	 * 具体解析方法
	 * <p>
	 * fileType
	 * 0:图像
	 * 1:音频
	 * </p>
	 * @param message 原消息
	 * @param containerMap 存储对象
	 */
	@Override
	public void parse(String[] message,Map<String,Object> containerMap) throws Exception{
		business = message;
		decoderStr =business[3].toString();
		strTemp = decoderStr.split(",");
		fileName = business[2];
		fileType=strTemp[8];
		 if("0".equals(fileType)){ 
			 fileType="jpg";
		 }else if("1".equals(fileType)){ 
			 fileType="avi";
		 }else { 
			 fileType="avi";
		}
		Tools.byteArrayToImage(Tools.hexStringToBytes(strTemp[strTemp.length - 1]), fileName, fileType, filePath);
		containerMap.put(business[2], "image|" + fileName +"."+fileType+"|" + System.currentTimeMillis());
	}
	/**
	 * 获取指令或者协议名称
	 * 
	 * @return
	 */
	public String getName(){
		return "【指令数据类型】——【多媒体】";
	}
}

