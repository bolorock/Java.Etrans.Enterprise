/**
 * MapUtils.java
 * Create on 2012-2-24下午02:34:20
 * Copyright (c) 2012 by e_trans.
 */
package com.etrans.common.util;

import java.lang.reflect.Field;
import java.lang.reflect.Method;
import java.util.Map;

/**
 * Map 工具类，包含Map 转JavaBean方法
 * @author Ivan
 * @version 1.0
 */
public class MapUtils
{

 
 
 @SuppressWarnings("unchecked")
 public static  <T> T  mapToBean(Map<String, Object> map, Class<T> clazz) 
 {
	
	if(null == map || map.size() <= 0)
	 return null;
	

	 Object object=null;
	 try
	 {
		object = clazz.newInstance();
	 }
	 catch (Exception e)
	 {
		e.printStackTrace();
	 }
	
	 
	//获得对象的所有属性 
	 Field[] fields=clazz.getDeclaredFields(); 
	 int fieldsLength= fields.length;
	 for (String  mapKey : map.keySet())
	 {
		 for(int i=0; i< fieldsLength;i++)
		 {
		  String key = fields[i].getName();
		  
		  if(mapKey.toLowerCase().equals(key.toLowerCase()))
		  { 
		   String tempKey = key.substring(0,1).toUpperCase()+key.substring(1,key.length());
		   Method method=null;
			 try
			 {
				method = clazz.getMethod("set"+tempKey,new Class[] {fields[i].getType()});
			 }
			 catch (Exception e)
			 {
				e.printStackTrace();
			 }
			
		   
		   Object args[] = new Object[1];
		   args[0] = map.get(mapKey);
		   
		   try
			 {
				method.invoke(object,args);
			 }
			 catch (Exception e)
			 {
				e.printStackTrace();
			 }
			 
		   
		   break;
		  }
		 }
		 
	 }
	 
	 return (T) object;

 }
 
 
 
 
 
}
