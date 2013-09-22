package com.etrans.common;

import java.util.Properties;
import org.apache.activemq.ActiveMQConnection;
import org.apache.log4j.Logger;

/**
 * MQDC资源配置文件
 * 
 * @author Pomelo(柚子.)
 * @since 2012-12-26 11:47
 * @version 1.0
 */
public class MQDCConfigUtil {

	private static Logger logger = Logger.getLogger(MQDCConfigUtil.class);
	private static Properties properties = new Properties();
	private static final String MQCONFIG_FILE = "mqconfig.properties";
	public static String MQ_SERVER_DEFAULT_USER = ActiveMQConnection.DEFAULT_USER;
	public static String MQ_SERVER_DEFAULT_PASSWORD = ActiveMQConnection.DEFAULT_PASSWORD;
	public static String MQ_SERVER_URL = "tcp://localhost:61616?tcpNoDelay=true";
	public static String MSC_IP = "192.168.2.5";
	public static int MSC_PORT = 2015;
	public static String DATASOURCE_DRIVER_CLASS = "com.microsoft.sqlserver.jdbc.SQLServerDriver";
	public static String DATASOURCE_URL = "jdbc:sqlserver://WIN-DEORS9SGFPH\\QZHUI;DatabaseName=NETGPSDB124";
	public static String DATASOURCE_USER = "sa";
	public static String DATASOURCE_PASSWORD = "ycadmin@%1001";
	public static String SUBSRIBEVEHICLE_SQL = "select RegistrationNO, CommNO from MSC_Vehicle";
	public static int MINACLIENTTRACK_THREAD_SLEEP_TIME = 15000;
	public static int MINA_CLIENT_DATA_INVALID = 30000;
	public static int MQ_SERVER_TRACK_DATA_INVALID=30000;
	public static int MQ_SERVER_TRACK_THREAD_SLEEP_TIME=10000;
	public static int MINA_RECEIVE_THREAD_MIN=3;
	public static int MINA_RECEIVE_THREAD_MAX=15;
	public static int MINA_RECON_MSC_TIME = 20;
	public static int MINA_IDLETIME = 60;
	public static int MINA_CONNECT_TIMEOUT=10000;
	public static String FILE_PATH ="";
	static {
		try {
			properties.load(MQDCConfigUtil.class.getClassLoader().getResourceAsStream(MQCONFIG_FILE));
			MSC_IP = properties.getProperty("MSC_IP");
			MSC_PORT = Integer.parseInt(properties.getProperty("MSC_PORT"));
			DATASOURCE_DRIVER_CLASS = properties.getProperty("datasource.driverClass");
			DATASOURCE_URL = properties.getProperty("datasource.url");
			DATASOURCE_USER = properties.getProperty("datasource.username");
			DATASOURCE_PASSWORD = properties.getProperty("datasource.password");
			SUBSRIBEVEHICLE_SQL = properties.getProperty("subsribevehicle_sql");
			MINA_CLIENT_DATA_INVALID = Integer.parseInt(properties.getProperty("mina_client_data_invalid"));
			MQ_SERVER_TRACK_DATA_INVALID =  Integer.parseInt(properties.getProperty("mq_server_track_data_invalid"));
			MINACLIENTTRACK_THREAD_SLEEP_TIME = Integer.parseInt(properties.getProperty("minaclienttrackmonitor_thread_sleep_time"));
			MQ_SERVER_TRACK_THREAD_SLEEP_TIME = Integer.parseInt(properties.getProperty("mq_server_track_thread_sleep_time"));
			MINA_RECEIVE_THREAD_MIN= Integer.parseInt(properties.getProperty("mina_receive_thread_min"));
			MINA_RECEIVE_THREAD_MAX= Integer.parseInt(properties.getProperty("mina_receive_thread_max"));
			MINA_RECON_MSC_TIME= Integer.parseInt(properties.getProperty("mina_recon_msc_time"));
			MINA_IDLETIME= Integer.parseInt(properties.getProperty("mina_idletime"));
			MINA_CONNECT_TIMEOUT= Integer.parseInt(properties.getProperty("mina_connect_timeout"));
			FILE_PATH = properties.getProperty("filepath");
		} catch (Exception e) {
			logger.error("载入资源文件异常,所有全局变量讲使用默认值!!" + e.getMessage());
		}
	}
	
	/**
	 * 根据key获取指定值
	 * 
	 * @param key
	 * @return
	 */
	public static String getValue(String key){
		if("".equals(properties.get(key))||properties.get(key)==null)return "";
		return (String)properties.get(key);
	}
	
	/**
	 * 不做类型转换
	 * 
	 * @param key String
	 * @return Object  
	 */
	public static Object getObject(String key){
		return properties.get(key);
	}
	
	/**
	 * 获取Long
	 * 
	 * @param key
	 * @return
	 */
	public static long getLong(String key){
		if("".equals(properties.get(key))||properties.get(key)==null)return -1;
		return Long.parseLong(getValue(key));
	}
	
	/**
	 * 获取Int
	 * 
	 * @param key
	 * @return
	 */
	public static int getInt(String key){
		if("".equals(properties.get(key))||properties.get(key)==null)return -1;
		return Integer.parseInt(getValue(key));
	}
}
