package com.etrans.rmi.imp;

import java.util.HashMap;
import java.util.Map;

import com.etrans.business.queue.ResultMaps;
import com.etrans.entity.AffixationBean;
import com.etrans.rmi.AffixationServer;

/** 
 * 附加信息对外接口实现类
 * 
 * @author Pomelo(柚子.)  
 * @version 1.0
 * @since 创建时间：2013-7-5 下午2:37:52 
 */
public class AffixationServerImp implements AffixationServer {

	/**
	 * 通过车辆id号获取附加信息
	 * 
	 * @param vehicleId ,车辆id
	 * @return 附加信息实体bean
	 * */
	public AffixationBean getAffixationBean(String vehicleId){
		return ResultMaps.affixationHashMap.get(vehicleId);
	}
	
	
	/**
	 * 根据车辆id获取实时数据的最新的司机信息
	 * 
	 * @param vehilceId String
	 * @return result  Map<String, Object>
	 */
	@Override
	public Map<String, Object> getNewestDriverMessage(String vehilceId){
		Map<String, Object> result = new HashMap<String, Object>();
		try {
			AffixationBean affixationBean = this.getAffixationBean(vehilceId);
			if(affixationBean!=null){
				result.put("name", affixationBean.getDrivinName()==null?"":affixationBean.getDrivinName().toString());
				result.put("driverIC", affixationBean.getDriverIC()==null?"":affixationBean.getDriverIC().toString());
				result.put("drivingLicence", affixationBean.getDrivingLicence()==null?"":affixationBean.getDrivingLicence().toString());
				result.put("zdDriverCode", affixationBean.getZdDriverCode()==null?"":affixationBean.getZdDriverCode().toString());
				result.put("zdWhetherIC", affixationBean.getZdWhetherIC()==null?"":affixationBean.getZdWhetherIC().toString());
			}
		} catch (Exception e) {}
		return result;
	}
}

