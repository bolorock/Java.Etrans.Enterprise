package com.etrans.bubiao.http;

/**
 * HTTP StatusCode is not 200 INTERNAL_SERVER_ERROR: 500 BAD_GATEWAY: 502
 * SERVICE_UNAVAILABLE: 503
 */
public class HttpServerException extends HttpException {

	/**
  * 
  */
 private static final long serialVersionUID = 8327508424802534026L;

	public HttpServerException(Exception cause) {
		super(cause);
	}

	public HttpServerException(String msg, Exception cause, int statusCode) {
		super(msg, cause, statusCode);
	}

	public HttpServerException(String msg, Exception cause) {
		super(msg, cause);
	}

	public HttpServerException(String msg, int statusCode) {
		super(msg, statusCode);
	}

	public HttpServerException(String msg) {
		super(msg);
	}

}
