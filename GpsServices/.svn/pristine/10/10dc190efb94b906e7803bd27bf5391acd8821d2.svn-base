package com.etrans.system.config;
/** 
 * BuildConfigSetting
 * <P>构造配置信息</P>
 * 
 * @author Pomelo(柚子.)  
 * @version 1.0
 * @since 创建时间：2013-2-4 下午1:34:48 
 */
public class BuildConfigSetting {
	
	/***
	 * 资源文件工具类
	 */
	private static PropertiesUtil propertiesUtil = new PropertiesUtil();
	
	/**
	 * 设置MQServer的配置
	 * 
	 * <P>
	 * BuildConfigSetting.loadMqSetting();
	 * </P>
	 * @throws IllegalAccessException 
	 * @throws InstantiationException 
	 */
	public static void invokerPropertiesToEntity(
			Object entity,
			String[] propertiesKey,
			String[] methodName){
		if(propertiesKey==null){
			propertiesUtil.invokerPropertiesToEntity(entity);
		}else{
			propertiesUtil.invokerPropertiesToEntity(
					entity, propertiesKey, methodName
			);
		}
	}
}

