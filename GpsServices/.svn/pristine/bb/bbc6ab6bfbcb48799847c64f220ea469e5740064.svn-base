package com.etrans.system;

import org.apache.log4j.Logger;

import com.etrans.common.MQDCConfigUtil;
import com.etrans.entity.MqDcConfig;
import com.etrans.system.config.BuildConfigSetting;

/** 
 * MqDcBuildConfig
 * 
 * @author Pomelo(柚子.)  
 * @version 1.0
 * @since 创建时间：2013-2-5 下午5:03:15 
 */
public class MqDcBuildConfig {

	/** 配置对象 */
	public static MqDcConfig mqdcConfig = new MqDcConfig();
	/** 日志对象*/
	private static Logger logger = Logger.getLogger(MqDcBuildConfig.class);
 
	static{
		buildMqdcConfig();
		logger.info("///////////////////配置载入成功///////////////////");
	}
	
	/**
	 * 构建MQDC的配置信息
	 * 
	 * <code>
	 * For Example
	 * MqDcBuildConfig.buildMqdcConfig()
	 * </code>
	 */
	public static void buildMqdcConfig(){
		BuildConfigSetting.invokerPropertiesToEntity(
			mqdcConfig,
			new String[]{
				"VehicleNum",
				"VehicleAnalyseThreadNum",
				"SubscriptionLogin",
				"TotalLogin",
				"PFSize"
			},
			new String[]{
				"setVehicleNum",
				"setVehicleAnalyseThreadNum",
				"setSubscriptionLogin",
				"setTotalLogin",
				"setPFSize"
			}
		);
		
		int pfSize = Integer.parseInt(MqDcBuildConfig.mqdcConfig.getpFSize());
		int[] pfPort = new int[pfSize];
		String[] pfIp = new String[pfSize];
		
		if(pfSize>0){
			for(int i=0;i<pfSize;i++){
				pfPort[i] = MQDCConfigUtil.getInt("PFPort"+(i+1));
				pfIp[i] = MQDCConfigUtil.getValue("PFIP"+(i+1));
			}
			MqDcBuildConfig.mqdcConfig.setpFIP(pfIp);
			MqDcBuildConfig.mqdcConfig.setpFPort(pfPort);
		}
	}
}

