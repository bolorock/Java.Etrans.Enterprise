/**    
 * IbatisDAOImpl.java
 * Create on 2010-7-7
 * Copyright (c) 2010 by e_trans. 
 */
package com.etrans.bubiao.daobase;

import java.io.Serializable;
import java.sql.SQLException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.dao.DataAccessException;
import org.springframework.orm.ibatis.SqlMapClientCallback;
import org.springframework.orm.ibatis.SqlMapClientTemplate;
import org.springframework.orm.ibatis.support.SqlMapClientDaoSupport;

import com.ibatis.sqlmap.client.SqlMapExecutor;


/**
 * @author dasuan 2010-7
 * @category Ibatis数据层(实现类)
 */
@SuppressWarnings("unchecked")
public class IbatisDAOImpl extends SqlMapClientDaoSupport implements IbatisDAO {

	public IbatisDAOImpl(SqlMapClientTemplate sqlMapClientTemplate) {
		setSqlMapClientTemplate(sqlMapClientTemplate);
	}

	/**
	 * 查询记录
	 * 
	 * @param querySqlName ,执行的语句名称
	 * @return List<HashMap<String, String>>
	 */
	public List<HashMap<String, String>> findIbatisList(String querySqlName) throws DataAccessException {

		return getSqlMapClientTemplate().queryForList(querySqlName);
	}

	/**
	 * 查询记录
	 * 
	 * @param querySqlName ,执行的语句名称
	 * @param paramsMap ,参数Map
	 * @return List<Object>
	 */
	public List<HashMap<String, String>> findIbatisList(String querySqlName, Map<String, Object> paramsMap) throws DataAccessException {
		return getSqlMapClientTemplate().queryForList(querySqlName, paramsMap);
	}

	/**
	 * 查询记录总数
	 * 
	 * @param querySqlName ,执行的语句名称
	 * @param paramsMap ,参数Map
	 * @return Long,记录数
	 */
	public Long findIbatisListCount(String querySqlName, Map<String, Object> paramsMap) throws DataAccessException {
		return (Long) getSqlMapClientTemplate().queryForObject(querySqlName, paramsMap);
	}

	/**
	 * 插入记录
	 * 
	 * @param insertqlName ,执行的语句名称
	 * @param paramsMap ,参数Map
	 * @return int,影响记录数
	 */
	public Object insertIbatisObject(String insertSqlName, Map<String, Object> paramsMap) throws DataAccessException {
		return getSqlMapClientTemplate().insert(insertSqlName, paramsMap);
	}
	/**
	 * 插入记录
	 * 
	 * @param insertqlName ,执行的语句名称
	 * @param paramsMap ,参数Map
	 * @return int,影响记录数
	 */
	public Object insertIbatisObject(String insertSqlName, Object object) throws DataAccessException {
		return getSqlMapClientTemplate().insert(insertSqlName, object);
	}
	
	/**
	 * 更新记录
	 * 
	 * @param updateSqlName ,执行的语句名称
	 * @param paramsMap ,参数Map
	 * @return int,影响记录数
	 */
	public int updateIbatisObject(String updateSqlName, Map<String, Object> paramsMap) throws DataAccessException {
		return getSqlMapClientTemplate().update(updateSqlName, paramsMap);
	}

	/**
	 * 删除记录
	 * 
	 * @param deleteSqlName ,执行的语句名称
	 * @param paramsMap ,参数Map
	 * @return int,影响记录数
	 */
	public int deleteIbatisObject(String deleteSqlName, Map<String, Object> paramsMap) throws DataAccessException {
		return getSqlMapClientTemplate().delete(deleteSqlName, paramsMap);
	}

	/**
	 * 批量插入记录
	 * 
	 * @param insertSqlName ,执行的语句名称
	 * @param paramsMapList ,参数列表
	 */
	public void batchInsertIbatisObject(final String insertSqlName, final List<Map<String, Object>> paramsMapList) throws Exception {
		SqlMapClientCallback callback = new SqlMapClientCallback() {
			public Object doInSqlMapClient(SqlMapExecutor executor) throws SQLException {
				executor.startBatch();
				for (Map<String, Object> params : paramsMapList) {
					executor.insert(insertSqlName, params);
				}
				executor.executeBatch();
				return null;
			}
		};
		this.getSqlMapClientTemplate().execute(callback);
	}
	public void batchUpdateIbatisObject(final String updateSqlName, final List<Map<String, Object>> paramsMapList) throws Exception {
		SqlMapClientCallback callback = new SqlMapClientCallback() {
			public Object doInSqlMapClient(SqlMapExecutor executor) throws SQLException {
				executor.startBatch();
				for (Map<String, Object> params : paramsMapList) {
					executor.update(updateSqlName, params);
				}
				executor.executeBatch();
				return null;
			}
		};
		this.getSqlMapClientTemplate().execute(callback);
	}
	/**
	 * 查旬记录
	 * 
	 * @param findAnalyseGroupByUser ,执行的语句名称
	 * @param long ,参数userid
	 * @return List,轨迹分析组
	 */
	public List<Object> analyseGroupByUser(long userid) {
		HashMap<String, Long> param = new HashMap<String, Long>();
		param.put("UserID", userid);
		return getSqlMapClientTemplate().queryForList("findAnalyseGroupByUser", param);
	}

	/**
	 * 查旬记录
	 * 
	 * @param findAnalysPlaceTypeByUser ,执行的语句名称
	 * @param long ,参数userid
	 * @return List,地点类型
	 */
	public List<Object> analysePlaceTypeByUser(long userid) {
		HashMap<String, Long> param = new HashMap<String, Long>();
		param.put("UserID", userid);
		return getSqlMapClientTemplate().queryForList("findAnalysPlaceTypeByUser", param);
	}

	/**
	 * 查旬记录
	 * 
	 * @param getMscGroupByUse ,执行的语句名称
	 * @param long ,参数userid
	 * @return List,用户分析分组
	 */
	public List<Object> mscGroup(long userid) {
		HashMap<String, Long> param = new HashMap<String, Long>();
		param.put("UserID", userid);
		return getSqlMapClientTemplate().queryForList("getMscGroupByUse", param);
	}

	
	public <T> T get(Class<T> entityClass,String statementId, Serializable id)
	{
		return (T) getSqlMapClientTemplate().queryForObject(statementId, id);
	}

	
	public <T> List<T> queryForList(Class<T> entityClass, String statementId,
			Object... objs)
	{
		return getSqlMapClientTemplate().queryForList(statementId,objs);
	}
	
	public <T> T queryForObject(Class<T> entityClass, String statementId,   Object parameters)
	{
		return (T) getSqlMapClientTemplate().queryForObject(statementId, parameters);
	}
	
	
	public <T> List<T> queryForList(Class<T> entityClass, String statementId,
			Map<String, Object> params)
	{
		return  (List<T> )getSqlMapClientTemplate().queryForList(statementId,params);
	}

	public void delete(String statementId, Object parameters)
	{
		getSqlMapClientTemplate().delete(statementId,parameters); 
		
	}

	public void insert(String statementId, Object o)
	{
		getSqlMapClientTemplate().insert(statementId,o);
		
	}

	public void update(String statementId, Object parameters)
	{
		
		this.getSqlMapClientTemplate().update(statementId, parameters);
		
	}
	
	 public  Object queryObject(String statementId){
		 return getSqlMapClientTemplate().queryForObject(statementId);
	 }
	 
	 /**
		 * 插入记录
		 * 
		 * @param insertqlName
		 *            ,执行的语句名称
		 * @param paramsMap
		 *            ,参数Map
		 * @return int,返回记录ID
		 */
		public Long insertReturnId(String statementId, Object o) {
			return ((Long)getSqlMapClientTemplate().insert(statementId, o));
			
		}

}
