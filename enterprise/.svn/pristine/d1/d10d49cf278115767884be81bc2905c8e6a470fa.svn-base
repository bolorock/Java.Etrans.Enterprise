package com.etrans.bubiao.http;

import java.io.IOException;
import org.apache.http.HttpEntity;
import org.apache.http.ParseException;
import org.apache.http.util.EntityUtils;
import com.etrans.common.util.json.JSONUtil;
import com.google.gson.reflect.TypeToken;



/**
 * 对HttpResponse 进行解析
 * @author Ivan
 * @version 1.0
 * @brief
 */
public class Response
{
 
 // Http 状态吗
 private int statusCode;
 // 相应字符串
 private String response;

 public Response()
 {
	
 }
 
 public Response(HttpEntity entity,int statusCode)
 {
	
	this.statusCode = statusCode;
	
	try
	{
		String charSet=EntityUtils.getContentCharSet(entity);
		//在使用地图时，这个值返回为空，所以要显示设置编码
		if(charSet==null){
			this.response =  EntityUtils.toString(entity,"UTF-8");
		}else {

			 this.response =  EntityUtils.toString(entity);
		}
	}
	catch (ParseException e)
	{
	 e.printStackTrace();
	}
	catch (IOException e)
	{
	 e.printStackTrace();
	}
	
 }
 
 
 /**
  * 获取HTTP 状态码
  * @return
  */
 public int getStatusCode()
 {
	return statusCode;
 }
 

 /**
  * 获取相应字符串
  * @return
  */
 public String asString() 
 {
	return response;
 }

 /**
  * 将响应 字符串转换成指定的类型对象。
  * @param <T> 要转换的目标类型。
  * @return 将响应字符串表示的指定的类型对象。
  */
 public  <T> T asObject(Class<T> clz)
 {
	return JSONUtil.fromJson(response, clz);
	
 }

 /**
  * 将响应 字符串转换成指定的类型对象。
  * @param <T> 要转换的目标类型。
  * @param token {@code com.google.gson.reflect.TypeToken} 的类型指示类对象。
  * @return 将响应字符串表示的指定的类型对象。
  */
 public  <T> T asObject(TypeToken<T> token)
 {
	return JSONUtil.fromJson(response, token);
	
 }

 

 
}
