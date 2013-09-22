package com.etrans.system.config;

import java.lang.reflect.Method;

import com.etrans.common.MQDCConfigUtil;
import com.etrans.common.invoker.BeanUtil;
import com.etrans.common.invoker.MethodInvoker;
import com.etrans.common.util.SysUtil;

/** 
 * PropertiesUtil资源文件工具类
 * 
 * @author Pomelo(柚子.)  
 * @version 1.0
 * @since 创建时间：2013-2-5 下午4:11:53 
 */
public class PropertiesUtil {

	private final String SET_METHOD="set";
	private BeanUtil beanUtil = new BeanUtil();
	
	/**
	 * 对资源文件进行反射操作
	 * 只会对属性名跟对象中属性名称对应上的才会给予反射赋值操作
	 * 
	 * @param obj 赋值对象
	 */
	public void invokerPropertiesToEntity(Object obj){
		beanUtil.setObj(obj);
		Method[] methods = beanUtil.getMethods(SET_METHOD);
		String filedName;
		for(int i=0;i<methods.length;i++){
			try {
				filedName = SysUtil.firstWLowerCase(
						methods[i].getName().substring(3)
				);
				new MethodInvoker(methods[i]).invoke(
						obj, 
						new Object[]{
								MQDCConfigUtil.getObject(filedName)
						}
				);
			} catch (Exception e) {
			}
		}
	}
	
	/**
	 * 指定属性，指定资源文件key进行对象反射
	 * 
	 * @param obj Object
	 * @param propertiesKey String[]
	 * @param invokerField String[] 
	 */
	public void invokerPropertiesToEntity(Object obj,
			String[] propertiesKey,String[] methodName){
		beanUtil.setObj(obj);
		Method[] methods = beanUtil.getMethods(methodName);
		for(int i=0;i<methods.length;i++){
			try {
				new MethodInvoker(methods[i]).invoke(
						obj, 
						new Object[]{
								MQDCConfigUtil.getObject(propertiesKey[i])
						}
				);
			} catch (Exception e) {
				e.printStackTrace();
			}
		}
	}
}

