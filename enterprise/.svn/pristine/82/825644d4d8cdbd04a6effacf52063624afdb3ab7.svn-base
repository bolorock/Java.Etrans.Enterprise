/**
 * ServerURLCursor.java
 * Create on 2012-1-14下午01:38:56
 * Copyright (c) 2012 by e_trans.
 */
package com.etrans.bubiao.http;

import java.util.List;

/**
 * @author Ivan
 * @version 1.0
 * @brief 服务器地址游标
 */
public class ServerURLCursor
{

 private List<String> urls;
 private static int currPosition;
 
 
 
 public ServerURLCursor()
 {}
 
 
 public ServerURLCursor(List<String> urls)
 {
	this.urls = urls;
 }
 
 
 /**
  * 获取第一条地址
  * @return
  */
 public String getFirst()
 {
	isNull();
	
	currPosition=0;
	return urls.get(currPosition);
 }

 
 /**
  * 获取最后一条地址
  * @return
  */
 public String getLast()
 {
	
	isNull();
	currPosition = urls.size()- 1;
	return urls.get(currPosition);
	
 }
 
 
 /**
  * 获取下一条地址
  * @return
  */
 public String moveToNext()
 {
	
	currPosition++;
	
	if(currPosition >= size())
	 return null;
	
	return urls.get(currPosition);
 }
 
 
 
 /**
  * 获取服务器地址的数量
  * @return
  */
 public int size()
 {
	isNull();
	return urls.size();
	
 }
 
 
 /**
  * 判断是否为空
  */
 private void isNull()
 {
	if(null == urls)
	 throw new IllegalAccessError("服务器地址集合为空");
 }
 
 
 
 /**
  * @return the urls
  */
 public List<String> getUrls()
 {
	return urls;
 }
 
 /**
  * @param urls the urls to set
  */
 public void setUrls(List<String> urls)
 {
	this.urls = urls;
 }
 
 
 
 
 
}
