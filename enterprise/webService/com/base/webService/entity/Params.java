package com.base.webService.entity;

import java.util.List;

/**
 * 参数
 * @author lihaiyan
 * @createTime 2011-12-20
 */
public class Params {
	
	private Header head; //消息头部	
	
	private List<String> body;//消息体

	public Header getHead() {
		return head;
	}

	public void setHead(Header head) {
		this.head = head;
	}

	public List<String> getBody() {
		return body;
	}

	public void setBody(List<String> body) {
		this.body = body;
	}

	
	
	
	
}
