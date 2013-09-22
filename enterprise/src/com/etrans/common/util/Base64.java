package com.etrans.common.util;

/**
 * @brief
 *
 * @author dasuan
 */
import sun.misc.BASE64Decoder;
import sun.misc.BASE64Encoder;

public class Base64 {
	private static BASE64Encoder encoder = new BASE64Encoder();
	private static BASE64Decoder decoder = new BASE64Decoder();

	/**
	 * Base64 加密
	 * @throws Exception 
	 * */
	public static String encoderMessage(String message) throws Exception {
		return encoder.encode(message.getBytes("GBK"));
	}

	/**
	 * Base64 解密
	 * */
	public static String decoderMessage(String message) throws Exception {
		return new String(decoder.decodeBuffer(message),"GBK");
	}
	
	public static void main(String[] args)throws Exception{
		//System.out.println(encoderMessage("GuoBiao_PF_Down_REQ_PostQuery,00000165,00000007,41424344454647"));
		//System.out.println(encoderMessage("GuoBiao_PF_Down_REQ_PostQuery,00000166,00000007,41424344454647"));
		//System.out.println(encoderMessage("GuoBiao_PF_Down_REQ_PostQuery,00000167,00000007,41424344454647"));
		System.out.println(decoderMessage("MSwzMDAwMSzPwry2xr3MqL/Y1sa72Li0LDAsMC4wMDAwMDAsMC4wMDAwMDAsMCwwLCwwLDAsMTg5OS0xMi0zMCAwMDowMDowMCwyMKOsMDAwMDAwMTTGvcyovOSxqM7Ez8K3orPJuaajrNDFz6JJRDoxMQ=="));
	}
}