package com.etrans.bubiao.entities;

import java.io.Serializable;

import com.etrans.bubiao.util.JSONUtil;
import com.google.gson.reflect.TypeToken;

public class HttpResult implements Serializable {

	private static final long serialVersionUID = 1L;

	// 结果代码:0-成功，否则失败
	private Integer code;

	// 错误信息
	private String msg;

	// 数据结果集
	private String  data;

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

	public void setData(String data) {
		this.data = data;
	}
	
	public <T> T getResultBean(TypeToken<T> clazz)
	{
		return JSONUtil.fromJson(data, clazz);
	}
	
	
	
	
}
