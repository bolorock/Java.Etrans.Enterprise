/**
 * HttpNotFundException.java
 * Create on 2012-1-10下午05:20:17
 * Copyright (c) 2012 by e_trans.
 */
package com.etrans.bubiao.http;


/**
 * 请求  404 异常 
 * @author Ivan
 * @version 1.0
 * @brief
 */
public class HttpNotFundException extends HttpException {
	/**
  * 
  */
 private static final long serialVersionUID = 6964979271234814176L;

	public HttpNotFundException(Exception cause) {
		super(cause);
	}

	public HttpNotFundException(String msg, Exception cause, int statusCode) {
		super(msg, cause, statusCode);
	}

	public HttpNotFundException(String msg, Exception cause) {
		super(msg, cause);
	}

	public HttpNotFundException(String msg, int statusCode) {
		super(msg, statusCode);
	}

	public HttpNotFundException(String msg) {
		super(msg);
	}


}
