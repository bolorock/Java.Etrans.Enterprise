package com.etrans.common.util;

import sun.misc.BASE64Decoder;

public class Base64ThreadLocal {

	private  BASE64Decoder decoder;
	public Base64ThreadLocal() {
		this.decoder=new BASE64Decoder();
	}
	/**
	 * Base64 解密
	 * */
	public  String decoderMessage(String message) throws Exception {
		return new String(decoder.decodeBuffer(message),"GBK");
	}
}
