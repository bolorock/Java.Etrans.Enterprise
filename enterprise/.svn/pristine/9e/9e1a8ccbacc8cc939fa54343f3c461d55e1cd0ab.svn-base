/**    
 * IbatisSearchFacadeImpl.java
 * Create on 2010-7-7
 * Copyright (c) 2010 by e_trans. 
 */
package com.etrans.bubiao.services;

import java.io.Serializable;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Service;

import com.etrans.bubiao.daobase.IbatisDAO;

/**
 * @author dasuan4
 * @category Ibatis业务层(实现类)
 */
@Service
public class IbatisServicesImpl implements IbatisServices {

	@Autowired
	private IbatisDAO ibatisDAO;
	protected final Log logger = LogFactory.getLog(IbatisServices.class);
	
	public IbatisServicesImpl(){};
	
	
	public IbatisServicesImpl(IbatisDAO ibatisDAO) {
		this.ibatisDAO = ibatisDAO;
	}

	/**
	 * 查询记录
	 * 
	 * @param querySqlName
	 *            ,执行的语句名称
	 * @return List<?>
	 */
	public List<HashMap<String, String>> findIbatisList(String querySqlName) throws DataAccessException {
		return this.ibatisDAO.findIbatisList(querySqlName);
	}

	/**
	 * 查询记录
	 * 
	 * @param querySqlName
	 *            ,执行的语句名称
	 * @param paramsMap
	 *            ,参数Map
	 * @return List<Object>
	 */
	public List<HashMap<String, String>> findIbatisList(String querySqlName, Map<String, Object> paramsMap)
			throws DataAccessException {
		return this.ibatisDAO.findIbatisList(querySqlName, paramsMap);
	}

	/**
	 * 查询记录总数
	 * 
	 * @param querySqlName
	 *            ,执行的语句名称
	 * @param paramsMap
	 *            ,参数Map
	 * @return Long,记录数
	 */
	public Long findIbatisListCount(String querySqlName, Map<String, Object> paramsMap) throws DataAccessException {
		return this.ibatisDAO.findIbatisListCount(querySqlName, paramsMap);
	}

	/**
	 * 插入记录
	 * 
	 * @param insertqlName
	 *            ,执行的语句名称
	 * @param paramsMap
	 *            ,参数Map
	 * @return int,影响记录数
	 */
	public Object insertIbatisObject(String insertSqlName, Map<String, Object> paramsMap) throws DataAccessException {
		logger.info("ibatis插入记录[" + new Date() + "]->insertSqlName:" + insertSqlName);
		return this.ibatisDAO.insertIbatisObject(insertSqlName, paramsMap);
	}

	/**
	 * 插入记录
	 * 
	 * @param insertqlName ,执行的语句名称
	 * @param paramsMap ,参数Map
	 * @return int,影响记录数
	 */
	public Object insertIbatisObject(String insertSqlName, Object object)throws DataAccessException {
		logger.info("ibatis插入记录[" + new Date() + "]->insertSqlName:" + insertSqlName);
		return this.ibatisDAO.insertIbatisObject(insertSqlName, object);
	}
	/**
	 * 更新记录
	 * 
	 * @param updateSqlName
	 *            ,执行的语句名称
	 * @param paramsMap
	 *            ,参数Map
	 * @return int,影响记录数
	 */
	public int updateIbatisObject(String updateSqlName, Map<String, Object> paramsMap) throws DataAccessException {
		int record = this.ibatisDAO.updateIbatisObject(updateSqlName, paramsMap);
		logger.info("ibatis更新记录[" + new Date() + "]->updateSqlName:" + updateSqlName + ",共影响记录数(" + record + ")");
		return record;
	}
   
	/**
	 * 删除记录
	 * 
	 * @param deleteSqlName
	 *            ,执行的语句名称
	 * @param map
	 *            ,参数Map
	 * @return int,影响记录数
	 */
	public int deleteIbatisObject(String deleteSqlName, Map<String, Object> paramsMap) throws DataAccessException {
		int record = this.ibatisDAO.deleteIbatisObject(deleteSqlName, paramsMap);
		logger.info("ibatis删除记录[" + new Date() + "]->deleteSqlName:" + deleteSqlName + ",共影响记录数(" + record + ")");
		return record;
	}
	/**
	 *  查旬记录
	 * @param long ,参数userid
	 * @return List,轨迹分析组
	 */
  public List<Object> analyseGroupByUser(long userid) {
		 return this.ibatisDAO.analyseGroupByUser(userid);
	}
  /**
	 *  查旬记录
	 * @param long ,参数userid
	 * @return List,地点类型
	 */

	public List<Object> analysePlaceTypeByUser(long userid) {
		// TODO Auto-generated method stub
		  return this.ibatisDAO.analysePlaceTypeByUser(userid);
	}
	/**
  	 *  查旬记录
  	 * @param long ,参数userid
  	 * @return List,用户分析分组
  	 */
   public List<Object> mscGroup(long userid) {
	   return  this.ibatisDAO.mscGroup(userid);
	}
   public void batchInsertIbatisObject(final String insertSqlName, final List<Map<String, Object>> paramsMapList){
	   try {
		this.ibatisDAO.batchInsertIbatisObject(insertSqlName, paramsMapList);
	} catch (Exception e) {
		// TODO Auto-generated catch block
		e.printStackTrace();
	}
   }
   
   public Long insertReturnId(String insertSqlName, Object o) {
		return ((Long)this.ibatisDAO.insertReturnId(insertSqlName, o));
		
	}
   
	public void batchUpdateIbatisObject(final String updateSqlName, final List<Map<String, Object>> paramsMapList) {
		  try {
				this.ibatisDAO.batchUpdateIbatisObject(updateSqlName, paramsMapList);
			} catch (Exception e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
	}

	public List<String> findIbatisString(String querySqlName, Map<String, Object> paramsMap) {
		// TODO Auto-generated method stub
		return this.findIbatisString(querySqlName, paramsMap);
	}
	
	


	public <T> T get(Class<T> entityClass, String statementId, Serializable id)
	{
		
		return ibatisDAO.get(entityClass, statementId, id);
	}


	public <T> List<T> queryForList(Class<T> entityClass, String statementId,
			Object... objs)
	{
		// TODO Auto-generated method stub
		return ibatisDAO.queryForList(entityClass, statementId, objs);
	}


	public <T> T queryForObject(Class<T> entityClass, String statementId,
			Object parameters)
	{
		// TODO Auto-generated method stub
		return ibatisDAO.queryForObject(entityClass, statementId, parameters);
	}


	public <T> List<T> queryForList(Class<T> entityClass, String statementId,
			Map<String, Object> params)
	{
		// TODO Auto-generated method stub
		return ibatisDAO.queryForList(entityClass, statementId, params);
	}

	public void delete(String statementId, Object parameters)
	{
		this.ibatisDAO.delete(statementId, parameters);
		
	}


	
	public void insert(String statementId, Object o)
	{
		this.ibatisDAO.insert(statementId, o);
		
	}


	
	public void update(String statementId, Object parameters)
	{
		this.ibatisDAO.update(statementId, parameters);
		
	}
	
	
	 public  Object queryObject(String statementId){
		 return this.ibatisDAO.queryObject(statementId);
	 }
	

   
}
