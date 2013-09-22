package com.etrans.bubiao.services;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.etrans.bubiao.services.BaseServices;
import com.etrans.bubiao.services.IbatisServices;

@Service
public class HistoryGpsInfoServices extends BaseServices{
	
	@Autowired
	private IbatisServices ibatisServices;

	public IbatisServices getIbatisServices() {
		return ibatisServices;
	}

	public void setIbatisServices(IbatisServices ibatisServices) {
		this.ibatisServices = ibatisServices;
	}



	/**
	 * 1.6.11获取某辆车某段时间内的历史轨迹数据
	 * @param paramMap
	 * @return
	 */
	@SuppressWarnings("unchecked")
	public List<HashMap<String, Object>> getHistoryGpsInfo(Map<String, Object> paramMap)
	{
		try 
		{
			List<HashMap<String, Object>> historyGpsInfoList =(List<HashMap<String, Object>>)super.callProcedureAsResult("getHistoryGpsInfoSQL", paramMap).getData(); // 调用存储过程
			return historyGpsInfoList;
		} 
		catch (Exception e)
		{
			e.printStackTrace();
		}
		return null;
	}
	
	
	/**
	 * 根据用户ID取车牌号和车牌颜色
	 * 
	 * @param paramMap
	 * @return
	 */
	public List<HashMap<String, String>> getUserVehicleIDByRegistrationNO(
			Map<String, Object> paramMap) {
		try {
			List<HashMap<String, String>> resultstr = ibatisServices.findIbatisList("getUserVehicleIDByRegistrationNOSQL", paramMap);
			return resultstr;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}


}
