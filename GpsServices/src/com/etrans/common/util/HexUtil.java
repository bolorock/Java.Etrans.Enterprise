package com.etrans.common.util;

/**
 * HexUtil
 * 
 * @author Pomelo(柚子.)
 * @version 1.0
 * @since 创建时间：2013-7-3 下午6:38:16
 */
public class HexUtil {
	
	/**
	 * getByteHex
	 * 
	 * @param toASICCString
	 * @return
	 */
	public static String getByteHex(String toASICCString) {
		String result = "";
		try {
			byte[] array = toASICCString.getBytes("GBK");
			for (byte y : array) {
				result += Integer.toHexString(y & 0xFF);
			}
		} catch (Exception e) {}
		return result;
	}

	/**
	 * toStringHex 
	 * 
	 * @param s
	 * @return
	 */
	public static String toStringHex(String s) {
		byte[] baKeyword = new byte[s.length() / 2];
		for (int i = 0; i < baKeyword.length; i++) {
			try {
				baKeyword[i] = (byte) (0xff & Integer.parseInt(s.substring(i * 2, i * 2 + 2), 16));
			} catch (Exception e) {				
			}
		}
		try {
			s = new String(baKeyword, "GBK"); 
		} catch (Exception e1) {
		}
		return s;
	}
	
}
