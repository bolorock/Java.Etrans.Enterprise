package com.etrans.common.util;

import java.io.ByteArrayOutputStream;

/**
 * 字节、字符各类数据转换
 * 
 * @author Pomelo(柚子.)
 * @version 1.0
 * @since 创建时间：2013-7-31 下午5:40:07
 */
public class ByteUtil {
	
	private static String hexString = "0123456789ABCDEF";
	 /**
	  * 转化十六进制编码为字符串
	  */
	 public static String toStringHex(String s){
	  byte[] baKeyword = new byte[s.length()/2];
	  for(int i = 0; i < baKeyword.length; i++){
	   try{
	    baKeyword[i] = (byte)(0xff & Integer.parseInt(s.substring(i*2, i*2+2),16));
	   }catch(Exception e){
	    e.printStackTrace();
	   }
	  }
	  try{
	   s = new String(baKeyword, "GBK");//UTF-16le:Not
	  }catch (Exception e1){
	   e1.printStackTrace();
	  }
	  return s;
	 }
	/**
	 * 转化十六进制编码为字符串
	 * 
	 * @param bytes
	 * @return
	 */
	public static String decode(String bytes) {
		ByteArrayOutputStream baos = new ByteArrayOutputStream(
				bytes.length() / 2);
		// 将每2位16进制整数组装成一个字节
		for (int i = 0; i < bytes.length(); i += 2)
			baos.write((hexString.indexOf(bytes.charAt(i)) << 4 | hexString
					.indexOf(bytes.charAt(i + 1))));
		return new String(baos.toByteArray());
	}
	
	 /**
	  * 将字符串编码成16进制数字,适用于所有字符（包括中文）
	  */
	 public static String encode(String str){
	  //根据默认编码获取字节数组
	  byte[] bytes=str.getBytes();
	  StringBuilder sb=new StringBuilder(bytes.length*2);
	  //将字节数组中每个字节拆解成2位16进制整数
	  for(int i=0;i<bytes.length;i++){
	   sb.append(hexString.charAt((bytes[i]&0xf0)>>4));
	   sb.append(hexString.charAt((bytes[i]&0x0f)>>0));
	  }
	  return sb.toString();
	 }
	 
	public static void main(String[] args){
		String data = "3334353239303030303030303030303030BEA94633343532392020202034353239202020202020205B";
		System.out.println("车辆VIN号:"+ByteUtil.decode(data.substring(0,34))+" 车辆号码:"+ByteUtil.toStringHex(data.substring(34,52))+" 车牌分类:"+ByteUtil.toStringHex(data.substring(58,74)));
		System.out.println("车辆VIN号:"+ByteUtil.decode(data.substring(0,34))+" 车辆号码:"+ByteUtil.toStringHex(data.substring(34,52))+" 车牌分类:"+ByteUtil.toStringHex(data.substring(58,74)));
	}
	 
	 public static String DecimalToHex(String decimal){
		 return Integer.toHexString(Integer.parseInt(decimal));
	 }
	/**
	 * 十六进制转为十进制
	 * 
	 * @param hex
	 * @return
	 */
	public static int hexStringtoDecimal(String hex){
		return Integer.valueOf(hex, 16);
	}
}
