package com.etrans.bubiao.util;

import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;
import org.apache.log4j.Logger;

/**
 * * 读取Properties配置文件信息 * @author sunlightcs * 2011-5-2 *
 */
public class PropertiesFile {
	private static Logger logger = Logger.getLogger(PropertiesFile.class);

	/** * 读取Properties配置文件 * @return 返回Properties数据 */
	public Properties getPropertiesFile() {
		InputStream is = this.getClass().getClassLoader().getResourceAsStream(
				"ta_config.properties");
		Properties prop = new Properties();
		try {
			prop.load(is);
			is.close();
		} catch (IOException ex) {
			logger.error("读取配置文件失败，配置文件路径为：ta_config.properties", ex);
		}
		return prop;
	}

	/** * 读取Properties配置文件 * @param filePath 配置文件路径 * @return 返回Properties数据 */
	public Properties getPropertiesFile(String filePath) {
		InputStream is = this.getClass().getClassLoader().getResourceAsStream(
				filePath);
		Properties prop = new Properties();
		try {
			prop.load(is);
			is.close();
		} catch (IOException ex) {
			logger.error("读取配置文件失败，配置文件路径为：" + filePath, ex);
		}
		return prop;
	}

	public static void main(String[] args) {
		Properties prop = new PropertiesFile().getPropertiesFile();
		String path = prop.getProperty("mainService");
		System.out.println(path);
		System.out.println(prop.containsKey("mainService1"));
	}
}