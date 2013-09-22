package com.base.webService.entity;

import java.io.Serializable;
import java.util.List;

/**
 * 
 * 返回消息
 * @author lihaiyan
 * @createTime 2011-12-20
 */
public  class ResultMessage implements Serializable {
	
	private static final long serialVersionUID = -4505741764917191993L;
	
	private String head;
	
	private String resultCode;
	
	private List<String> body;


	
	public String getHead() {
		return head;
	}

	public void setHead(String head) {
		this.head = head;
	}

	public List<String> getBody() {
		return body;
	}

	public void setBody(List<String> body) {
		this.body = body;
	}

	public String getResultCode()
	{
		return resultCode;
	}

	public void setResultCode(String resultCode)
	{
		this.resultCode = resultCode;
	}
	
	
	

}
