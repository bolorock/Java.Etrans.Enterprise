package com.etrans.bubiao.http;

import java.util.HashMap;
import java.util.List;

/***
 * Result中data类型为object时，Gson会在整数后加小数点,故把data类型改为 List<HashMap<String,String>>
 * @author hgq
 *
 */
public class ServiceResult {
	// 错误代码
	private Integer code;

	// 错误信息
	private String msg;

	// 数据结果集
	private  List<HashMap<String,String>> data;

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

	public List<HashMap<String,String>> getData() {
		return data;
	}

	public void setData(List<HashMap<String,String>> data) {
		this.data = data;
	}

	@SuppressWarnings("unchecked")
	public <T> T getResultBean(Class<T> clazz) {
		if (data != null)
			return (T) data;

		return null;
	}
}
