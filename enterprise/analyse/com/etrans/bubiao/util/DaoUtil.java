package com.etrans.bubiao.util;

import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;
import java.util.Properties;
import java.util.Set;

import com.etrans.common.util.ParamKey;

/**
 * 数据库SQL封装类
 * @author Administrator
 *
 */
public class DaoUtil
{
   
	private final static Map<String,String> tableName = new HashMap<String,String>();
	/**
	 * 允许操作的表
	 */
	static {
		Properties prop = new PropertiesFile().getPropertiesFile();
		Set<Map.Entry<Object,Object>> set = prop.entrySet();
		for(Map.Entry<Object,Object> entry:set){
			tableName.put((String)entry.getKey(),(String)entry.getValue());//疲劳驾驶
		}
	}
	/**
	 * 检查是否允许操作的表
	 * @param key
	 * @return
	 */
	public static boolean checkTableName(String key){
		return tableName.containsKey(key);
	}
	/**
	 * json返回map
	 * @param paramStr
	 * @return
	 */
	@SuppressWarnings("unchecked")
	public static Map<String,Object>  getJsonParam(String paramStr)
	{
		return JSONUtil.fromJson(paramStr, Map.class);
	}
	
	/**
	 * 描述：单表新增记录接口
	 * 
	 * @since Create on 2012-2-9
	 * @version Copyright (c) 2012 by e_trans.
	 */
	@SuppressWarnings("unchecked")
	public static String insertDataSQL(Map<String, Object> mapParams) throws Exception 
	{
		String tableName=(String)mapParams.get(ParamKey.TABLE_NAME);
		//检查是否允许操作的表
		if(!DaoUtil.checkTableName(tableName))
			return "";
		
		Map<String, Object> mapSetParam=(Map<String, Object>)mapParams.get(ParamKey.SET_PARAM);
			
		StringBuffer sbSql = new StringBuffer();
		/**
		 * 组装插入语句
		 */
			Iterator<Map.Entry<String,Object>> iter = mapSetParam.entrySet().iterator();
			//插入参数
			StringBuffer sbParam = new StringBuffer();
			//插入值,每个值都是字符串
			StringBuffer sbParamValue = new StringBuffer();
			while (iter.hasNext()) {
				Map.Entry<String,Object> entry =iter.next();
				sbParam.append(entry.getKey())
			           .append(",");
				Object objectValue=entry.getValue();
				if(objectValue instanceof String){
					 sbParamValue.append("'")
					             .append(((String) objectValue).trim())
			                     .append("'");
				}else {
					sbParamValue.append(objectValue);
				}     
				sbParamValue.append(",");
				}
			sbSql.append("insert into ")
			     .append(tableName).append(" (")
			     //去除sbParam中最后的逗号(,)后加到sbSql中
			     .append(sbParam.substring(0, sbParam.length() - 1))
			     .append(") values (")
			     //去除sbParamValue中最后的逗号(,)后加到sbSql中
			     .append(sbParamValue.substring(0, sbParamValue.length() - 1))
			     .append(")");
			
			return sbSql.toString();
	}

	
	/**
	 * 描述：单表编辑记录接口(只适用要修改的条件为值相等，用and的记录，例如param1=value1 and param2=value2)
	 * @since Create on 2012-2-10
	 * @version Copyright (c) 2012 by e_trans.
	 */
	@SuppressWarnings("unchecked")
	public static String updateDataSQL(Map<String, Object> mapParams) throws Exception
	{
		String tableName=(String)mapParams.get(ParamKey.TABLE_NAME);
		Map<String, Object> mapSetParam=(Map)mapParams.get(ParamKey.SET_PARAM);
		Map<String, Object> mapWhereParam=(Map)mapParams.get(ParamKey.WHERE_PARAM);
		
		//检查是否允许操作的表
		if(!DaoUtil.checkTableName(tableName))
			return "";
		//防止更新全表数据
		if (mapWhereParam ==null || mapWhereParam.size()==0)
		return "";
		
		StringBuffer sbSql = new StringBuffer();
		/**
		 * 组装更新语句
		 */
			StringBuffer sbParamsValue = new StringBuffer();
			Iterator<Map.Entry<String,Object>> iter = mapSetParam.entrySet().iterator();
			while (iter.hasNext())
			{
				Map.Entry<String,Object> entry =iter.next();
				Object objectValue=entry.getValue();
				//字符串加单引号
				if(objectValue instanceof String){
					sbParamsValue.append(entry.getKey())
		             .append("='")
		             .append(((String) objectValue).trim())
		             .append("',");
				}else
				{
					sbParamsValue.append(entry.getKey())
		             .append("=")
		             .append(objectValue)
		             .append(",");
				}
				
			}
			//更新条件
			StringBuffer sbWhereString = new StringBuffer();
			if(mapWhereParam!=null&&mapWhereParam.size()>0){
				Iterator<Map.Entry<String, Object>> iterator=mapWhereParam.entrySet().iterator();
				while (iterator.hasNext())
				{
					Map.Entry<String,Object> entry =iterator.next();
					Object objectValue=entry.getValue();
					if (objectValue instanceof String)
					{
						sbWhereString.append(entry.getKey())
			             .append("='")
			             .append(((String) objectValue).trim())
			             .append("' and ");
					}else {
						sbWhereString.append(entry.getKey())
			             .append("=")
			             .append(objectValue)
			             .append(" and ");
					}
					
				}
			}
			sbSql.append("update ")
			     .append(tableName)
			     .append(" set ")
			     .append(sbParamsValue.substring(0, sbParamsValue.length() - 1));
		    if (mapWhereParam!=null&&mapWhereParam.size()>0)
			{
		    	sbSql.append(" where ").append(sbWhereString.substring(0, sbWhereString.length() - 4));
			}
		    
		    return sbSql.toString();  
	}
	


	/**
	 * 描述：单表删除记录接口(只适用要删除的条件为值相等，用and的记录，例如param1=value1 and param2=value2)
	 * @since Create on 2012-2-10
	 * @version Copyright (c) 2012 by e_trans.
	 */
	@SuppressWarnings("unchecked")
	public static String deleteDataSQL(Map<String, Object> mapParams) throws Exception
	{
		String tableName=(String)mapParams.get(ParamKey.TABLE_NAME);
		Map<String, Object> mapWhereParam=(Map<String, Object>)mapParams.get(ParamKey.WHERE_PARAM);
		
		//检查是否允许操作的表
		if(!DaoUtil.checkTableName(tableName))
			return "";
		//防止删除全表数据
		if (mapWhereParam ==null || mapWhereParam.size()==0)
			return "";
		
		StringBuffer sbSql = new StringBuffer();
		/**
		 * 组装删除语句
		 */
			StringBuffer sbWhereString = new StringBuffer();
			if(mapWhereParam!=null&&mapWhereParam.size()>0){
				Iterator<Map.Entry<String, Object>> iterator=mapWhereParam.entrySet().iterator();
				while (iterator.hasNext())
				{
					Map.Entry<String,Object> entry =iterator.next();
					Object objectValue=entry.getValue();

					sbWhereString.append(entry.getKey())
			             .append(" in (")
			             .append(((String) objectValue).trim())
			             .append(")");
					
					break;
					
				}
			}
			sbSql.append("delete from  ")
			     .append(tableName);
			if (mapWhereParam!=null&&mapWhereParam.size()>0)
			{
				sbSql .append(" where ").append(sbWhereString.substring(0, sbWhereString.length()));
			}
			
			return sbSql.toString();
	}
   
	
	public static void main(String args[]) throws Exception{
		Map<String,Object> setParam = new HashMap<String,Object>();
		setParam.put("name", "张XX");
		setParam.put("age", "1");
		
		Map<String,Object> whereParam = new HashMap<String,Object>();
		//whereParam.put("id", "1");
		
		Map<String,Object> map = new HashMap<String,Object>();
		map.put(ParamKey.TABLE_NAME,"tableName");
		map.put(ParamKey.SET_PARAM, setParam);
		map.put(ParamKey.WHERE_PARAM,whereParam);
		
		/*****************插入*********************/
		System.out.println(DaoUtil.insertDataSQL(map));
		
		/*****************更新*********************/
		System.out.println(DaoUtil.updateDataSQL(map));
		
		/*****************删除*********************/
		System.out.println(DaoUtil.deleteDataSQL(map));
	}
	
}
