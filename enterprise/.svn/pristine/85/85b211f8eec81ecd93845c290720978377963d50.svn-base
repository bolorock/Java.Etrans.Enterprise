package com.etrans.bubiao.services.query;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.etrans.bubiao.entities.PageBean;
import com.etrans.bubiao.services.IbatisServices;
import com.etrans.common.util.HexUtil;
import com.etrans.common.util.ParamKey;
/**
 * 电子运单Services
 * @author yangzhen
 * @version 1.0
 */
@Service
public class ElectronicServices
{
    
	@Autowired
	private IbatisServices ibatisServices;
	
	/**
	 * 描述：分页获取电子运单信息
	 * 
	 * @author yangzhen
	 * @since Create on 2012-5-16
	 * @return List<HashMap<String, String>> 
	 * @version Copyright (c) 2012 by e_trans.
	 */
	public PageBean getElectronics(Map<String,Object> params) throws Exception{
        PageBean pageBean = new PageBean();
		List<Map<String,Object>> VehicleAlarmList = this.getElectronicList(params);
		Long total = getElectronicCount(params);
		pageBean.setPage((Integer)params.get(ParamKey.PAGE));
		pageBean.setRows(VehicleAlarmList);
		pageBean.setTotal(total);
		return pageBean;
	}
	
	
    
	@SuppressWarnings("unchecked")
	public List<Map<String,Object>> getElectronicList(Map params) throws Exception {
		List<Map<String,Object>> VehicleAlarmList = this.ibatisServices.queryForList(Map.class, "getElectronicSQL",params);
		if(VehicleAlarmList!=null && VehicleAlarmList.size()>0){
			for(Map<String,Object> map:VehicleAlarmList){
				String message=HexUtil.toStringHex(map.get("message").toString());
				map.put("message", message);
			}
		}
		return VehicleAlarmList;
	}
    
  
    public Long getElectronicCount(Map<String,Object> params) throws Exception {
		return this.ibatisServices.findIbatisListCount("getElectronicCountSQL", params);
	}

	public IbatisServices getIbatisServices(){
		return ibatisServices;
	}


	public void setIbatisServices(IbatisServices ibatisServices){
		this.ibatisServices = ibatisServices;
	}
	
	

}
