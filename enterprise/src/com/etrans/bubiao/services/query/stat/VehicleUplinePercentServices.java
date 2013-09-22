package com.etrans.bubiao.services.query.stat;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.etrans.bubiao.entities.PageBean;
import com.etrans.bubiao.services.IbatisServices;
import com.etrans.common.util.ParamKey;

@Service
public class VehicleUplinePercentServices {
	@Autowired
	private IbatisServices ibatisServices;

	public IbatisServices getIbatisServices() {
		return ibatisServices;
	}

	public void setIbatisServices(IbatisServices ibatisServices) {
		this.ibatisServices = ibatisServices;
	}

	/**
	 * 分页查询车辆上线率信息,返回表格数据
	 * @param queryJSON
	 * @return
	 * @throws Exception
	 */
	public PageBean findVehicleUplinePercent(Map<String,Object> params) throws Exception {
		PageBean pageBean = new PageBean();
		List<Map<String,Object>> vehicleUplinePercentList = this.getVehicleUplinePercentList(params);
		Long total = getVehicleUplinePercentCount(params);
		
		pageBean.setPage((Integer)params.get(ParamKey.PAGE));
		pageBean.setRows(vehicleUplinePercentList);
		pageBean.setTotal(total);
		return pageBean;
		
	}
	
	/**
	 * 分页查询车辆上线率信息
	 * @param params
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public List<Map<String, Object>> getVehicleUplinePercentList(Map params) throws Exception {
		List<Map<String,Object>> vehicleUplinePercentList = new ArrayList<Map<String,Object>>();
		
		Boolean isSuper=(Boolean)params.get("isSuper");
		Boolean isWorkUnitSuperAdmin = (Boolean)params.get("isWorkUnitSuperAdmin");
		
		if(isSuper != null && isSuper == true){
			vehicleUplinePercentList = this.ibatisServices.queryForList(Map.class, "VehicleUplinePercentListSQL",params);
		}else if(isWorkUnitSuperAdmin != null && isWorkUnitSuperAdmin == true){
			vehicleUplinePercentList = this.ibatisServices.queryForList(Map.class, "VehicleUplinePercentListSQL",params);
		}else{
			vehicleUplinePercentList = this.ibatisServices.queryForList(Map.class, "UserVehicleUplinePercentListSQL",params);
		}
		
		 
		return vehicleUplinePercentList;
		
	}
	
	/**
	 * 查询车辆上线率数量
	 * @param params
	 * @return
	 * @throws Exception
	 */
	public Long getVehicleUplinePercentCount(Map<String,Object> params) throws Exception {
		
		
		Boolean isSuper=(Boolean)params.get("isSuper");
		Boolean isWorkUnitSuperAdmin = (Boolean)params.get("isWorkUnitSuperAdmin");
		if(isSuper != null && isSuper == true){
			return this.ibatisServices.findIbatisListCount("VehicleUplinePercentCountSQL", params);
		}else if(isWorkUnitSuperAdmin != null && isWorkUnitSuperAdmin == true){
			return this.ibatisServices.findIbatisListCount("VehicleUplinePercentCountSQL", params);
		}else{
			return this.ibatisServices.findIbatisListCount("UserVehicleUplinePercentCountSQL", params);
		}
		
	}
	
}