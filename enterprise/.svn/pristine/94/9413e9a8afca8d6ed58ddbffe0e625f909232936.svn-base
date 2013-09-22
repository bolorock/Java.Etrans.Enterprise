package com.etrans.bubiao.services;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.etrans.bubiao.dao.JdbcDAO;
import com.etrans.bubiao.entities.PageBean;
import com.etrans.bubiao.entities.Result;
import com.etrans.common.util.ParamKey;



@Service
public class AnalyseServices{
	@Autowired(required = true)
	private JdbcDAO jdbcDao;
	
	@Autowired
	private IbatisServices ibatisServices;

	public JdbcDAO getJdbcDao() {
		return jdbcDao;
	}

	public void setJdbcDao(JdbcDAO jdbcDao) {
		this.jdbcDao = jdbcDao;
	}

	public IbatisServices getIbatisServices() {
		return ibatisServices;
	}

	public void setIbatisServices(IbatisServices ibatisServices) {
		this.ibatisServices = ibatisServices;
	}
	/**
	 * 新增
	 * @param sql
	 * @return
	 * @throws Exception
	 */
	public boolean insertRecord(String sql) throws Exception{
		if(sql==null || sql.length()==0)
			return false;
		
		int updateCnt = this.jdbcDao.getJdbcTemplate().update(sql);
		
		if(updateCnt>0)
			return true;
		
		return false;
	}
	/**
	 * 更新
	 * @param sql
	 * @return
	 * @throws Exception
	 */
	public boolean updateRecord(String sql) throws Exception{
		if(sql==null || sql.length()==0)
			return false;
		
		int updateCnt = this.jdbcDao.getJdbcTemplate().update(sql);

		if(updateCnt>0)
			return true;
		
		return false;
	}
/**
 * 删除	
 * @param sql
 * @return
 * @throws Exception
 */
	public boolean deleteRecord(String sql) throws Exception{
		if(sql==null || sql.length()==0)
			return false;
		
		int updateCnt = this.jdbcDao.getJdbcTemplate().update(sql);

		if(updateCnt>0)
			return true;
		
		return false;
	}
	
	/**
	 * 分页查询,返回表格数据
	 * @param queryJSON
	 * @return
	 * @throws Exception
	 */
	public PageBean findRecordList(Map<String,Object> params) throws Exception {
		
		PageBean pageBean = new PageBean();
		
		List<Map<String,Object>> data = this.getDataList(params);
		Long total = getDatasCount(params);
		
		pageBean.setPage((Integer)params.get(ParamKey.PAGE));
		pageBean.setRows(data);
		pageBean.setTotal(total);
		
		return pageBean;
		
	}
	
	
	/**	
	 * 分页查询信息
	 * @param params
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings("rawtypes")
	public List<Map<String,Object>> getDataList(Map params) throws Exception {
		String tableName=(String)params.get(ParamKey.TABLE_NAME);
		List<Map<String,Object>> simCardList = this.ibatisServices.queryForList(Map.class, "find"+tableName+"SQL",params);
		return simCardList;
		
	}
	
	/**
	 * 查询数量
	 * @param params
	 * @return
	 * @throws Exception
	 */
	public Long getDatasCount(Map<String,Object> params) throws Exception {
		String tableName=(String)params.get(ParamKey.TABLE_NAME);
		return this.ibatisServices.findIbatisListCount("find"+tableName+"CountSQL", params);
		
	}
	
	/**
	 * 由ID查询详细信息
	 * @param map 查询条件
	 * @return 结果对象
	 */
	@SuppressWarnings("unchecked")
	public List<Map<String,Object>> getRecordById(Map map)throws Exception{
		String tableName=(String)map.get(ParamKey.TABLE_NAME);
		List<Map<String,Object>> listInfo=this.ibatisServices.queryForList(Map.class, "get"+tableName+"ByIdSQL", map);
		return listInfo;
	}
	
	/**
	 * 检查名称重复
	 * @param map 查询条件
	 * @return 结果对象
	 */
	@SuppressWarnings("unchecked")
	public boolean checkName(Map map)throws Exception{
		String tableName=(String)map.get(ParamKey.TABLE_NAME);
		List<Map<String,Object>> listInfo=this.ibatisServices.queryForList(Map.class, "check"+tableName+"ByNameSQL", map);
		if(listInfo!=null && listInfo.size()>0){
			return true;
		}else{
			return false;
		}
	}
	
	/**
	 * 检查名称重复
	 * @param map 查询条件
	 * @return 结果对象
	 */
	@SuppressWarnings("unchecked")
	public Result checkName4Form(Map map)throws Exception{
		String tableName=(String)map.get(ParamKey.TABLE_NAME);
		List<Map<String,Object>> listInfo=this.ibatisServices.queryForList(Map.class, "check"+tableName+"ByNameSQL", map);

		Result result = new Result();
		result.setCode(1);				
		result.setData(listInfo.size());
		
		return result;
	}
}
