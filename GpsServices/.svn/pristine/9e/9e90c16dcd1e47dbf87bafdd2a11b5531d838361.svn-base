package com.etrans.common.invoker;

import java.lang.reflect.Field;
import java.lang.reflect.Method;
import java.util.ArrayList;

/** 
 * BeanUtil
 * @author Pomelo(柚子.)  
 * @version 1.0
 * @since 创建时间：2013-2-4 下午1:34:48 
 */
public class BeanUtil {
	
	private Object obj;
	
	/**
	 * 设置对象
	 * 
	 * @param obj
	 */
	public void setObj(Object obj) {
		this.obj = obj;
	}
	
	/**
	 * 获取字段名称
	 * 
	 * @param obj Object
	 * @return Field[]
	 */
	public Field[] getFileds(Object obj){
		return obj.getClass().getDeclaredFields();
	}
	
	/**
	 * getMethods
	 * 
	 * @param starWith String
	 * @return Method[]
	 */
	public Method[] getMethods(String starWith){
		ArrayList<Method> methodList = getMethod(starWith);
		Method[] methodAry = new Method[methodList.size()];
		return methodList.toArray(methodAry);
	}
	
	/**
	 * getMethods
	 * 
	 * @param starWith String
	 * @return Method[]
	 */
	public Method[] getMethods(String[] methodName){
		ArrayList<Method> methodList = getMethod(methodName);
		Method[] methodAry = new Method[methodList.size()];
		return methodList.toArray(methodAry);
	}
	
	/**
	 * getMethodStarSet
	 * 
	 * @param starWith String
	 * @return Method
	 */
	public ArrayList<Method> getMethod(String startWith) {
		ArrayList<Method> methodList = new ArrayList<Method>();
		Method[] allMethod = obj.getClass().getDeclaredMethods();
		for (int i = 0; i < allMethod.length; i++) {
			if (allMethod[i].getName().startsWith(startWith)) {
				methodList.add(allMethod[i]);
			}
		}
		return methodList;
	}
	
	/**
	 * 获取指定方法 
	 * 
	 * @param methodName
	 * @return methodList ArrayList<Method> 
	 */
	public ArrayList<Method> getMethod(String[] methodName){
		ArrayList<Method> methodList = new ArrayList<Method>();
		Method[] allMethod = obj.getClass().getDeclaredMethods();
		for (int i = 0; i < allMethod.length; i++) {
			for(int j=0;j<methodName.length;j++){
				if(allMethod[i].getName().equalsIgnoreCase(methodName[j]))
				methodList.add(allMethod[i]);
			}
		}
		return methodList;
	}
	
	/**
	 * setObjectValue
	 * 
	 * @param nowOject
	 * @param obect
	 * @param head
	 * @param method
	 * @throws Exception
	 */
	public void setObjectValue(Object nowOject,Object obect,Method method) throws Exception{
		try {
			new MethodInvoker(method).invoke(obect, new Object[]{nowOject});
		} catch (Exception e) {
			throw new Exception("异常:"+e.getMessage());
		}
	}
}
