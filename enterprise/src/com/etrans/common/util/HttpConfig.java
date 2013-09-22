package com.etrans.common.util;

import java.util.ArrayList;
import java.util.List;

import com.etrans.common.util.PropertyReader;



/**
 * 服务器HTTP服务配置类
 */
public class HttpConfig {
	public static String DEFAULTCONFIG= "/httpService_config.properties";


	private static String mainService;
	private static String mainPort;
	private static String bakService;
	private static String bakPort;
	private static String httpServiceName;
	
	private static String end="/httpService/";
	private static String start="http://";
	
	static {
		mainService = PropertyReader.getValue(
				DEFAULTCONFIG, "mainService");
		mainPort = PropertyReader.getValue(
				DEFAULTCONFIG, "mainPort");
		bakService = PropertyReader.getValue(
				DEFAULTCONFIG, "bakService");
		bakPort = PropertyReader.getValue(
				DEFAULTCONFIG, "bakPort");
		httpServiceName = PropertyReader.getValue(
				DEFAULTCONFIG, "httpServiceName");
	}
	
	public static List<String> getServiceHttpConfig(){
		//主服务器
		StringBuffer mainServiceAdd = new StringBuffer("");
		mainServiceAdd.append(start)
			.append(mainService)
			.append(":")
			.append(mainPort)
			.append("/"+httpServiceName+end);
		//备份服务器
		StringBuffer bakServiceAdd = new StringBuffer("");
		bakServiceAdd.append(start)
			.append(bakService)
			.append(":")
			.append(bakPort)
			.append("/"+httpServiceName+end);
		
		List<String> ls = new ArrayList<String>();
		ls.add(mainServiceAdd.toString());
		ls.add(bakServiceAdd.toString());
		
		return ls;
		
	}
	
	public static List<String> getServiceHttpConfig(String config){		
		String mService = PropertyReader.getValue(config, "mainService");
		String mPort = PropertyReader.getValue(config, "mainPort");
		String bService = PropertyReader.getValue(config, "bakService");
		String bPort = PropertyReader.getValue(config, "bakPort");
		String serviceName = PropertyReader.getValue(config, "httpServiceName");
		
		//主服务器
		StringBuffer mainServiceAdd = new StringBuffer("");
		mainServiceAdd.append(start)
			.append(mService)
			.append(":")
			.append(mPort)
			.append("/"+serviceName+end);
		//备份服务器
		StringBuffer bakServiceAdd = new StringBuffer("");
		bakServiceAdd.append(start)
			.append(bService)
			.append(":")
			.append(bPort)
			.append("/"+serviceName+end);
		
		List<String> ls = new ArrayList<String>();
		ls.add(mainServiceAdd.toString());
		ls.add(bakServiceAdd.toString());
		
		return ls;
		
	}
	
	
	
}
