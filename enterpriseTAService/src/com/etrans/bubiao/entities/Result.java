package com.etrans.bubiao.entities;


public class Result
{

	//错误代码
	private Integer code;
	
	//错误信息
	private String msg;
	
	//数据结果集
	private Object data;

	public Integer getCode()
	{
		return code;
	}

	public void setCode(Integer code)
	{
		this.code = code;
	}

	public String getMsg()
	{
		return msg;
	}

	public void setMsg(String msg)
	{
		this.msg = msg;
	}

	public Object getData()
	{
		return data;
	}

	public void setData(Object data)
	{
		this.data = data;
	}
	
	
    
    
    
}
