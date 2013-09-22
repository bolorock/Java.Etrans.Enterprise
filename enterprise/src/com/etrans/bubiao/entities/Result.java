package com.etrans.bubiao.entities;

import java.io.Serializable;

public class Result implements Serializable {

	private static final long serialVersionUID = 1L;

	// 结果代码:1-成功，0-失败
	private Integer code;

	// 错误信息,code=1时为空
	private String msg;

	// 数据结果集
	private Object data;

	public Integer getCode() {
		return code;
	}

	public void setCode(Integer code) {
		this.code = code;
	}

	public String getMsg() {
		return msg;
	}

	public void setMsg(String msg) {
		this.msg = msg;
	}

	public Object getData() {
		return data;
	}

	public void setData(Object data) {
		this.data = data;
	}

	@SuppressWarnings("unchecked")
	public <T> T getResultBean(Class<T> clazz) {
		if (data != null)
			return (T) data;

		return null;
	}

}
