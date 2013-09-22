package com.etrans.bubiao.services.query.stat;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.etrans.bubiao.entities.PageBean;
import com.etrans.bubiao.http.ParamKey;
import com.etrans.bubiao.services.BaseServices;
import com.etrans.bubiao.services.IbatisServices;
@Service
public class VehicleOnlinePercertServices extends BaseServices {
	@Autowired
	private IbatisServices ibatisServices;

	public IbatisServices getIbatisServices() {
		return ibatisServices;
	}

	public void setIbatisServices(IbatisServices ibatisServices) {
		this.ibatisServices = ibatisServices;
	}
	
	/**
     * 车辆在线统计
     * @param queryJSON
     * @return
     * @throws Exception
     */
	public PageBean getVehicleOnline (Map<String,Object> params) throws Exception {
		
		PageBean pageBean = new PageBean();
		List<Map<String,Object>> ls = this.getVehicleOnlineList(params);
		Long total = this.getVehicleOnlineCount(params);
		pageBean.setPage((Integer)params.get(ParamKey.PAGE));
		pageBean.setRows(ls);
		pageBean.setTotal(total);
		return pageBean;
		
	}
	
	
	
	/**
	 * 导出到EXCEL
	 * @param queryJSON
	 * @param fromPage
	 * @param toPage
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings("unchecked")
	public  List<Map<String, Object>>  onlineVehiclePercentExportExl(Map param) throws Exception{
		List<Map<String,Object>> rows = this.ibatisServices.queryForList(Map.class, "vehicleOnlinePercentSQL",param);
		return rows;
		
	}
	
	@SuppressWarnings("unchecked")
	public List<Map<String,Object>> getVehicleOnlineList(Map params) throws Exception {
		List<Map<String,Object>> ls = this.ibatisServices.queryForList(Map.class, "vehicleOnlinePercentSQL",params);
		return ls;
		
	}
	
	
	public Long getVehicleOnlineCount(Map<String,Object> params) throws Exception {
		return this.ibatisServices.findIbatisListCount("vehicleOnlinePercentCountSQL", params);
		
	}
}
