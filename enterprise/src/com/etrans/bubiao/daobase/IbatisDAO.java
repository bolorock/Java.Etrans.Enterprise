/**    
 * IbatisSearchRepository.java
 * Create on 2010-7-7
 * Copyright (c) 2010 by e_trans. 
 */
package com.etrans.bubiao.daobase;

import java.io.Serializable;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * @author dasuan , 2010-7
 * @category Ibatis数据层(接口)
 */
public interface IbatisDAO{

	/**
	 * 查询记录
	 * 
	 * @param querySqlName,执行的语句名称
	 * @return List<?>
	 */
	public List<HashMap<String, String>> findIbatisList(String querySqlName);

	/**
	 * 查询记录
	 * 
	 * @param querySqlName,执行的语句名称
	 * @param paramsMap,参数Map
	 * @return List<Object>
	 */
	public List<HashMap<String, String>> findIbatisList(String querySqlName, Map<String, Object> paramsMap);

	/**
	 * 查询记录总数
	 * 
	 * @param querySqlName,执行的语句名称
	 * @param paramsMap,参数Map
	 * @return Long,记录数
	 */
	public Long findIbatisListCount(String querySqlName, Map<String, Object> paramsMap);

	/**
	 * 插入记录
	 * 
	 * @param insertqlName,执行的语句名称
	 * @param paramsMap,参数Map
	 * @return int,影响记录数
	 */
	public Object insertIbatisObject(String insertSqlName, Map<String, Object> paramsMap);

	
	/**
	 * 插入记录
	 * 
	 * @param insertqlName,执行的语句名称
	 * @param paramsMap,参数Map
	 * @return int,影响记录数
	 */
	public Object insertIbatisObject(String insertSqlName, Object object);
	
	/**
	 * 更新记录
	 * 
	 * @param updateSqlName,执行的语句名称
	 * @param paramsMap,参数Map
	 * @return int,影响记录数
	 */
	public int updateIbatisObject(String updateSqlName, Map<String, Object> paramsMap);

	/**
	 * 删除记录
	 * 
	 * @param deleteSqlName,执行的语句名称
	 * @param paramsMap,参数Map
	 * @return int,影响记录数
	 */
	public int deleteIbatisObject(String deleteSqlName, Map<String, Object> paramsMap);

	/**
	 * 查旬记录
	 * 
	 * @param long ,参数userid
	 * @return List,轨迹分析组
	 */
	public List<Object> analyseGroupByUser(long userid);

	/**
	 * 查旬记录
	 * @param long ,参数用户id
	 * @return List,地点类型
	 */
	public List<Object> analysePlaceTypeByUser(long userid);

	/**
	 * 查旬记录
	 * 
	 * @param getMscGroupByUse ,执行的语句名称
	 * @param long ,参数userid
	 * @return List,用户分析分组
	 */
	public List<Object> mscGroup(long userid);

	/**
	 * 批量插入记录
	 * 
	 * @param insertSqlName ,执行的语句名称
	 * @param paramsMapList ,参数Map
	 * @return int,影响记录数
	 */
	public void batchInsertIbatisObject(final String insertSqlName, final List<Map<String, Object>> paramsMapList) throws Exception;
	/**
	 * 批量Update记录
	 * 
	 * @param insertSqlName ,执行的语句名称
	 * @param paramsMap ,参数Map
	 * @return int,影响记录数*/
	public void batchUpdateIbatisObject(final String updateSqlName, final List<Map<String, Object>> paramsMapList) throws Exception;
	
	
	
	
	
	public <T> T get(Class<T> entityClass,String statementId, Serializable id);
	
	 public <T> T queryForObject(Class<T> entityClass, String statementId,   Object parameters);
	 
	 public <T> List<T> queryForList(Class<T> entityClass,String statementId,Object... objs);
	
	
	
	 public <T> List<T> queryForList(Class<T> entityClass, String statementId,
				Map<String, Object> params);
	
	
	 public void insert(String statementId,Object o);
	 
	 public void update(String statementId, Object parameters);
	
	  
	 public void delete(String statementId, Object parameters);
	  
	 public  Object queryObject(String statementId);
	  
	  
	 /**
		 * 插入记录
		 * 
		 * @param insertqlName
		 *            ,执行的语句名称
		 * @param paramsMap
		 *            ,参数Map
		 * @return Long,返回记录ID
		 */
		public Long insertReturnId(String statementId, Object o);
	
	
	
	
}
