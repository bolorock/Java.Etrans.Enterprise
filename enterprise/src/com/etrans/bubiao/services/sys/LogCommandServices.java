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
public class LogCommandServices {
	@Autowired
	private IbatisServices ibatisServices;

	public IbatisServices getIbatisServices() {
		return ibatisServices;
	}

	public void setIbatisServices(IbatisServices ibatisServices) {
		this.ibatisServices = ibatisServices;
	}
	/**
	 * 分页查询指令日志信息,返回表格数据
	 * @param queryJSON
	 * @return
	 * @throws Exception
	 */
	public PageBean getLogCommands(Map<String,Object> params) throws Exception {
		PageBean pageBean = new PageBean();
		List<Map<String,Object>> logCommandList = this.getLogCommandList(params);
		Long total = getLogCommandCount(params);
		
		pageBean.setPage((Integer)params.get(ParamKey.PAGE));
		pageBean.setRows(logCommandList);
		pageBean.setTotal(total);
		return pageBean;
		
	}
	
	/**
	 * 分页查询指令日志信息
	 * @param params
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public List<Map<String,Object>> getLogCommandList(Map params) throws Exception {
		
		List<Map<String,Object>> logCommandList = new ArrayList<Map<String,Object>>();
		Boolean isSuper=(Boolean)params.get("isSuper");
		Boolean isWorkUnitSuperAdmin = (Boolean)params.get("isWorkUnitSuperAdmin");
		
		if(isSuper != null && isSuper == true){
			logCommandList = this.ibatisServices.queryForList(Map.class, "getLogCommandsSQL",params);
		}else if(isWorkUnitSuperAdmin != null && isWorkUnitSuperAdmin == true){
			logCommandList = this.ibatisServices.queryForList(Map.class, "getLogCommandsSQL",params);
		}else{
			logCommandList = this.ibatisServices.queryForList(Map.class, "getUserLogCommandsSQLSQL",params);
		}
		
		return logCommandList;
		
	}
	
	/**
	 * 查询指令日志数量
	 * @param params
	 * @return
	 * @throws Exception
	 */
	public Long getLogCommandCount(Map<String,Object> params) throws Exception {
		
		Boolean isSuper=(Boolean)params.get("isSuper");
		Boolean isWorkUnitSuperAdmin = (Boolean)params.get("isWorkUnitSuperAdmin");
		if(isSuper != null && isSuper == true){
			return this.ibatisServices.findIbatisListCount("getLogCommandsCountSQL", params);
		}else if(isWorkUnitSuperAdmin != null && isWorkUnitSuperAdmin == true){
			return this.ibatisServices.findIbatisListCount("getLogCommandsCountSQL", params);
		}else{
			return this.ibatisServices.findIbatisListCount("getUserLogCommandsCountSQL", params);
		}
		
	}
}
