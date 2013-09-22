package com.etrans.common.util;

import java.lang.reflect.Field;
import java.lang.reflect.Method;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

import com.etrans.bubiao.protocols.P;

/**
 * P 工具
 * 
 * @author 柚子
 * 
 */
public class P_Util {

	public static final String P_CLASS_PACKAGE = "com.etrans.bubiao.protocols";
	private static final String METHODSTAR = "set";

	/**
	 * 获取P对象子类实例
	 * @param commandCode
	 * @return
	 * @throws InstantiationException
	 * @throws IllegalAccessException
	 * @throws ClassNotFoundException
	 */
	public  static P getInstance(Map<String,Object> map) throws Exception,
			IllegalAccessException, ClassNotFoundException {
		String commandCode = (String)map.get("commandCode");
		P p = (P) Class.forName(P_CLASS_PACKAGE + ".P" + commandCode).newInstance();
		invoke(p,map);
		return p;
	}

	/**
	 * 反射值
	 * 
	 * @param p P协议对象
	 * @param paraMap
	 * @throws Exception 
	 */
	public static void invoke(P p, Map<String, Object> paraMap) throws Exception {		
		Field[] superFields = p.getClass().getSuperclass().getDeclaredFields();
		Field[] field = p.getClass().getDeclaredFields();
		ArrayList<Field[]> list = new ArrayList<Field[]>();
		list.add(superFields);
		list.add(field);
		try {
			for(Field[] fieldList:list){
			for (Field attribute : fieldList) {
				if(paraMap.get(attribute.getName())!=null){
					String value = (String) paraMap.get(attribute.getName());
					Method metod = p.getClass().getMethod(
								METHODSTAR+ attribute.getName().substring(0,1).toUpperCase()+attribute.getName().substring(1),
								String.class
							);
					metod.invoke(p, new Object[]{value});
				}
			}
			}
		} catch (Exception e) {
			throw new Exception("参数不正确!"+e.getMessage());
		}
	}
	public static void main(String[] args){
		Map<String,Object> map  = new HashMap<String,Object>();
		map.put("commandCode", "7010");
		map.put("VehicleId", "A2121");
		map.put("terminalType","1");
		map.put("starTime", "A2121");
		map.put("endTime", "A2121");
		try {
			P p = P_Util.getInstance(map);
			System.out.println(p.toString());
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
}
