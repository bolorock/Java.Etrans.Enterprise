package com.etrans.rmi;
/**版权所有 (C) 2013-2023 广州亿程交通信息 保留所有权利*/

import java.util.Map;

import com.etrans.entity.AffixationBean;

/** 
 * 附加信息
 * 
 * @author Pomelo(柚子.)  
 * @version 1.0
 * @since 创建时间：2013-7-5 上午9:45:32 
 */
public interface AffixationServer{
	
	public AffixationBean getAffixationBean(String vehicleId);
	/**
	 * 根据车辆id获取实时数据的最新的司机信息
	 * 
	 * @param vehilceId
	 * @return Map<String, Object> 
	 */ 
	public Map<String, Object> getNewestDriverMessage(String vehilceId);
}

