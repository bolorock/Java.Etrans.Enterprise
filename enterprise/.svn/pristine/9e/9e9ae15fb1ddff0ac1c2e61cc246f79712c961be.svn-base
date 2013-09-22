package com.etrans.common.util;

public class HexUtil
{

	public static String getByteHex(String toASICCString) {
		String result = "";
		try {
			byte[] array = toASICCString.getBytes("GBK");

			for (byte y : array) {
				result += Integer.toHexString(y & 0xFF);
			}
		} catch (Exception e) {
		}

		return result;

	} 
	public static String toStringHex(String s) 
	{ 
	byte[] baKeyword = new byte[s.length()/2]; 
	   for(int i = 0; i < baKeyword.length; i++) 
	   { 
	    try 
	    { 
	    baKeyword[i] = (byte)(0xff & Integer.parseInt(s.substring(i*2, i*2+2),16)); 
	    } 
	    catch(Exception e) 
	    { 
	    e.printStackTrace(); 
	    } 
	   } 
	  
	try 
	{ 
	s = new String(baKeyword, "GBK");//UTF-16le:Not 
	} 
	catch (Exception e1) 
	{ 
	e1.printStackTrace(); 
	} 
	return s; 
	} 
	 
	 public static void main(String[] args){
		 String valueString="B5E7D7D3D4CBB5A5CAFDBEDDA3BA313233343536373839";
		 System.out.println(HexUtil.toStringHex(valueString));
		 System.out.println(HexUtil.getByteHex("电子运单数据：123456789"));
		 
	 }
}
