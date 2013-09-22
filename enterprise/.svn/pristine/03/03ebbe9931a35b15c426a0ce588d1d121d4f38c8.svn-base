/**
 * AbstractServices.java
 * Create on 2012-1-11下午03:16:42
 * Copyright (c) 2012 by e_trans.
 */
package com.etrans.bubiao.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import com.etrans.bubiao.http.AbstractHttpClient;
import com.etrans.bubiao.http.DefaultHttpClient;
import com.etrans.bubiao.http.HttpException;
import com.etrans.bubiao.http.ParamMap;
import com.etrans.bubiao.http.Response;
import com.etrans.common.util.HttpConfig;

/**
 * @author Ivan
 * @version 1.0
 * @brief Serveices 抽象高层类
 */
public abstract class AbstractServices
{

 protected AbstractHttpClient httpClient;
 
 
 public AbstractServices()
 {
	initHttpClient();
 }
 
 /**
	 * 初始化HttpClient
	 */
	
	private  void initHttpClient()
	{
	 httpClient = new DefaultHttpClient();
	 httpClient.addServerURL(prepareServerURL());
	}
	
	
	
	private  List<String> prepareServerURL()
	{
	 
		return HttpConfig.getServiceHttpConfig();
	 
	}
	

 /**
  * 增加
  * @param tableName 表名
  * @param paramMap 参数集合
  * @return
  */
 public abstract  Response insert(String tableName,Map<String, Object> paramMap) throws HttpException;
 
 /**
  * 增加车辆
  * @param tableName 表名
  * @param paramMap 参数集合
  * @return
  */
 public abstract  String insertVehicleByIbatis(String tableName,Map<String, Object> paramMap) throws HttpException;
 
  /**
  * 更新车辆
  * @param tableName 表名
  * @param paramMap 参数集合
  * @return
  */
 public abstract  String updateVehicleByIbatis(String tableName,Map<String, Object> setMap,Map<String,Object> whereMap) throws HttpException;
 
 
 /**
  * 批量插入
  * @param tableName
  * @param paramMap
  * @return
  * @throws HttpException
  */
 public abstract  Response insertBatch(String tableName,List<Map<String, Object> > paramMap) throws HttpException;
 
 
 
 /**
  * 修改
  * @param tableName 表名
  * @param paramMap 参数集合
  * @return
  */
 public abstract Response update(String tableName,Map<String, Object> setParam,Map<String, Object> whereParam) throws HttpException;
 
 
 /**
  * 修改(使用Ibatis)
  * @param tableName 表名
  * @param paramMap 参数集合
  * @return
  */
 public abstract String updateByIbatis(String tableName,Map<String, Object> setParam,Map<String, Object> whereParam) throws HttpException;
 
 
 /**
  * 删除
  * @param tableName 表名
  * @param paramMap 参数集合
  * @return
  */
 public abstract Response delete(String tableName,Map<String, Object> whereParam) throws HttpException;
 
 /**
  * 删除
  * @param tableName 表名
  * @param paramMap 参数集合
  * @return
  */
 public abstract String deleteByIbatis(String tableName,Map<String, Object> whereParam) throws HttpException;
 
 
 /**
  *  查询
  * @param tableName 表名
  * @param paramMap 参数集合
  * @return
  */
 public abstract Response query(String tableName,Map<String, Object> whereParam,Map<String, String> orderParam) throws HttpException;
 
 
 /**
  *  查询
  * @param tableName 表名
  * @param totalName 查询总数量的名称
  * @param whereParam 参数集合
  * @param orderParam 排序参数集合
  * @return
  */
 public abstract Response query(String tableName,String totalName,Map<String, Object> whereParam,Map<String, String> orderParam) throws HttpException;
 
 
 /**
  *  查询
  * @param paramMap 查询参数，包含TableName，TotalName，Where条件集合，Order排序集合
  * @return
  */
 public abstract Response query(ParamMap paramMap) throws HttpException;
 
 
 
 /**
	 * @return the httpClient
	 */
	public AbstractHttpClient getHttpClient()
	{
	 return httpClient;
	}
	
	/**
	 * @param httpClient the httpClient to set
	 */
	public void setHttpClient(AbstractHttpClient httpClient)
	{
	 this.httpClient = httpClient;
	}
 
 
}
