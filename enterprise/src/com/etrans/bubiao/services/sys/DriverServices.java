/**
 * DriverServices.java
 * Create on 2012-5-14 10:34:49
 * Copyright (c) 2012 by e_trans.
 */
package com.etrans.bubiao.services.sys;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.etrans.bubiao.entities.PageBean;
import com.etrans.bubiao.services.IbatisServices;
import com.etrans.common.util.ParamKey;

@Service
public class DriverServices {

	@Autowired
	private IbatisServices ibatisServices;

	public IbatisServices getIbatisServices() {
		return ibatisServices;
	}

	public void setIbatisServices(IbatisServices ibatisServices) {
		this.ibatisServices = ibatisServices;
	}
	
	/**
	 * 分页查询司机,返回表格数据
	 * @param queryJSON
	 * @return
	 * @throws Exception
	 */
	public PageBean getDrivers(Map params) throws Exception {
		
		PageBean pageBean = new PageBean();
		
		List<Map<String,Object>> list = this.ibatisServices.queryForList(Map.class, "getDriverSQL",params);
		Long total = this.ibatisServices.findIbatisListCount("getDriverCountSQL", params);
		
		pageBean.setPage((Integer)params.get(ParamKey.PAGE));
		pageBean.setRows(list);
		pageBean.setTotal(total);
		
		return pageBean;
		
	}
	
	/**
	 * 分页查询司机
	 * @param params
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public List<Map<String,Object>> getDriversList(Map params) throws Exception {
		return this.ibatisServices.queryForList(Map.class, "getDriverSQL",params);
	}
	
	/**
	 * 查询司机数
	 * @param params
	 * @return
	 * @throws Exception
	 */
	public Long getDriverCount(Map<String,Object> params) throws Exception {
		return this.ibatisServices.findIbatisListCount("getDriverCountSQL", params);
	}

	/**
	 * 新增司机
	 * @param whereMap
	 * @return
	 * @throws Exception
	 */
	public void createDriver(Map<String,Object> params) {
		this.ibatisServices.insertIbatisObject("insertDriverSQL", params);
	}
	
	/**
	 * 查询司机详细
	 * @param whereMap
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public Map<String,Object> getDriverById(Map params) throws Exception {
		List<Map<String,Object>> list = this.ibatisServices.queryForList(Map.class, "getDriverByIdSQL",params);
		if(list != null && list.size()>0){
			return list.get(0);
		}
		return null;
	}
	
	/**
	 * 修改司机
	 * @param whereMap
	 * @return
	 * @throws Exception
	 */
	public void updateDriver(Map<String,Object> params) throws Exception {
		this.ibatisServices.updateIbatisObject("updateDriverSQL", params);
	}
	
	/**
	 * 删除司机
	 * @param whereMap
	 * @return
	 * @throws Exception
	 */
	public void deleteDriver(Map<String,Object> params) throws Exception {
		this.ibatisServices.deleteIbatisObject("deleteDriverSQL", params);
	}
	
}
