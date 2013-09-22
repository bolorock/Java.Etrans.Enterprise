/**
 * UserRoleServices.java
 * Create on 2012-2-9上午11:11:13
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

/**
 * 用户角色 Services
 * 
 * @author yangzhen
 * @version 1.0
 */
@Service
public class RoleServices {

	@Autowired
	private IbatisServices ibatisServices;

	public IbatisServices getIbatisServices() {
		return ibatisServices;
	}

	public void setIbatisServices(IbatisServices ibatisServices) {
		this.ibatisServices = ibatisServices;
	}
	
	
	public PageBean getRoleLists(Map<String,Object> params) throws Exception{
        PageBean pageBean = new PageBean();
		List<Map<String,Object>> roleList = this.getRoleList(params);
		Long total = getRolesCount(params);
		
		pageBean.setPage((Integer)params.get(ParamKey.PAGE));
		pageBean.setRows(roleList);
		pageBean.setTotal(total);
		return pageBean;
	}
	
	
    @SuppressWarnings("unchecked")
	public List<Map<String,Object>> getRoleList(Map params) throws Exception {
		List<Map<String,Object>> roleList = this.ibatisServices.queryForList(Map.class, "findRoles",params);
		return roleList;
		
	}
    
    public Long getRolesCount(Map<String,Object> params) throws Exception {
		return this.ibatisServices.findIbatisListCount("findRolesCount", params);
	}
    

	

	
}
