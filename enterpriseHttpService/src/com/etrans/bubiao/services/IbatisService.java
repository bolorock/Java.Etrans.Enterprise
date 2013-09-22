package com.etrans.bubiao.services;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.etrans.bubiao.daobase.IbatisDAO;

/**
 * 描述：ibatis服务类
 * 
 * @author llq
 * @since Create on 2012-4-9
 * @version Copyright (c) 2012 by e_trans.
 */
@Service("ibatisService")
public class IbatisService{

	@Autowired(required = true)
	private IbatisDAO ibatisDAO;

	public void setIbatisDAO(IbatisDAO ibatisDAO) {
		this.ibatisDAO = ibatisDAO;
	}

	/**
	 * 描述：查询列表记录数
	 */
	public long findIbatisListCount(String totalName, HashMap<String, Object> mapParams) throws Exception{
		return this.ibatisDAO.findIbatisListCount(totalName, mapParams);
	}

	/**
	 * 描述：查询
	 */
	public List<HashMap<String, String>> findIbatisList(String tableName, Map<String, Object> mapSetParam) throws Exception{
		return this.ibatisDAO.findIbatisList(tableName, mapSetParam);
	}
	
	/**
	 * 描述：查询
	 */
	public List<HashMap<String, String>> callProcedure(String tableName, Map<String, Object> mapSetParam) throws Exception{
		return this.ibatisDAO.findIbatisList(tableName, mapSetParam);
	}

	/**
	 * 描述：删除
	 */
	public void deleteIbatisObject(String tableName, Map<String, Object> mapWhereParam) throws Exception{
		this.ibatisDAO.deleteIbatisObject(tableName, mapWhereParam);
	}
	
	



	/**
	 * 描述：更新
	 */
	public void updateIbatisObject(String tableName,Map<String, Object> mapParam)  throws Exception{
		this.ibatisDAO.update(tableName, mapParam);
		
	}
	
	
}
