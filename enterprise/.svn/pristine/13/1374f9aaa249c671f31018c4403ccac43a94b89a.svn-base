package com.etrans.bubiao.services.sys;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.etrans.bubiao.entities.PageBean;
import com.etrans.bubiao.services.IbatisServices;
import com.etrans.common.util.ParamKey;

@Service
public class HistoryAlarmHandlingServices {
	@Autowired
	private IbatisServices ibatisServices;

	public IbatisServices getIbatisServices() {
		return ibatisServices;
	}

	public void setIbatisServices(IbatisServices ibatisServices) {
		this.ibatisServices = ibatisServices;
	}
	/**
	 * 分页查询历史报警督办信息,返回表格数据
	 * @param queryJSON
	 * @return
	 * @throws Exception
	 */
	public PageBean getHistoryAlarmHandlings(Map<String,Object> params) throws Exception {
		PageBean pageBean = new PageBean();
		List<Map<String,Object>> historyAlarmHandlingList = this.getHistoryAlarmHandlingList(params);
		Long total = getHistoryAlarmHandlingCount(params);
		
		pageBean.setPage((Integer)params.get(ParamKey.PAGE));
		pageBean.setRows(historyAlarmHandlingList);
		pageBean.setTotal(total);
		return pageBean;
		
	}
	
	/**
	 * 分页查询历史报警督办信息
	 * @param params
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public List<Map<String,Object>> getHistoryAlarmHandlingList(Map params) throws Exception {
		List<Map<String,Object>> historyAlarmHandlingList = new ArrayList<Map<String,Object>>();
		
		Boolean isSuper=(Boolean)params.get("isSuper");
		Boolean isWorkUnitSuperAdmin = (Boolean)params.get("isWorkUnitSuperAdmin");
		
		if(isSuper != null && isSuper == true){
			historyAlarmHandlingList = this.ibatisServices.queryForList(Map.class, "getHistoryAlarmHandlingsSQL",params);
		}else if(isWorkUnitSuperAdmin != null && isWorkUnitSuperAdmin == true){
			historyAlarmHandlingList = this.ibatisServices.queryForList(Map.class, "getHistoryAlarmHandlingsSQL",params);
		}else{
			historyAlarmHandlingList = this.ibatisServices.queryForList(Map.class, "getUserHistoryAlarmHandlingsSQL",params);
		}
		
		 
		return historyAlarmHandlingList;
		
	}
	
	/**
	 * 查询历史报警督办数量
	 * @param params
	 * @return
	 * @throws Exception
	 */
	public Long getHistoryAlarmHandlingCount(Map<String,Object> params) throws Exception {
		
		
		Boolean isSuper=(Boolean)params.get("isSuper");
		Boolean isWorkUnitSuperAdmin = (Boolean)params.get("isWorkUnitSuperAdmin");
		if(isSuper != null && isSuper == true){
			return this.ibatisServices.findIbatisListCount("historyAlarmHandlingCountSQL", params);
		}else if(isWorkUnitSuperAdmin != null && isWorkUnitSuperAdmin == true){
			return this.ibatisServices.findIbatisListCount("historyAlarmHandlingCountSQL", params);
		}else{
			return this.ibatisServices.findIbatisListCount("UserhistoryAlarmHandlingCountSQL", params);
		}
		
	}
}

