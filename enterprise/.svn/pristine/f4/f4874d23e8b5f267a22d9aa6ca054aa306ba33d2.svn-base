/**
 * FlexiGridUtil.java
 * Create on 2012-3-2上午10:17:21
 * Copyright (c) 2012 by e_trans.
 */
package com.etrans.common.util;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.commons.lang.StringUtils;

import com.etrans.bubiao.http.ParamKey;
import com.etrans.bubiao.http.ParamMap;
import com.etrans.common.util.json.JSONUtil;
import com.etrans.common.util.web.RowNumUtil;

/**
 * FlexGrid 参数解析工具
 * 
 * @author Ivan
 * @version 1.0
 */
public class FlexiGridUtil {

	/**
	 * 解析FlexiGrid 控件的JOSN 参数 为ParamMap对象
	 * 
	 * @param json
	 * @return
	 */
	@SuppressWarnings("unchecked")
	public static Map<String, Object> parseJSONParam(String json) {

		if (StringUtils.isEmpty(json)) {
			return null;
		}

		Map<String, Object> paramMap = null;

		try {
			Map<String, Object> params = JSONUtil.fromJson(json, Map.class);

			if (params != null) {

				paramMap = new HashMap<String, Object>();

				paramMap.put(ParamKey.PAGE, params.get("page").toString());
				paramMap.put(ParamKey.PAGE_SIZE, params.get("pageSize")
						.toString());

				paramMap.put(ParamKey.ORDER_NAME, params.get("sortName")
						.toString());
				paramMap.put(ParamKey.ORDER_SORT, params.get("sortOrder")
						.toString());

				List<HashMap<String, Object>> whereParamsLst = (List<HashMap<String, Object>>) params
						.get("whereparams");

				if (whereParamsLst != null) {
					for (HashMap<String, Object> m : whereParamsLst) {
						paramMap.put(m.get("name").toString(), m.get("value"));
					}
				}

				paramMap.put(params.get("sortName").toString() + "Order",
						params.get("sortOrder").toString());

			}
		} catch (Exception e) {
			e.printStackTrace();
		}

		return paramMap;

	}

	/**
	 * 解析FlexiGrid 控件的JOSN 参数 为ParamMap对象，由储存过程调用
	 * 
	 * @param json
	 * @return
	 */
	@SuppressWarnings("unchecked")
	public static Map<String, Object> parseJSONParamForProcedure(String json) {

		if (StringUtils.isEmpty(json)) {
			return null;
		}

		Map<String, Object> params = JSONUtil.fromJson(json, Map.class);
		// Where 条件
		Map<String, Object> setParam = new HashMap<String, Object>();

		try {

			if (params != null) {

				setParam.put(ParamKey.PAGE, params.get("page").toString());
				setParam.put(ParamKey.PAGE_SIZE, params.get("pageSize")
						.toString());
				List<HashMap<String, Object>> whereParamsLst = (List<HashMap<String, Object>>) params
						.get("whereparams");

				if (whereParamsLst != null) {
					for (HashMap<String, Object> m : whereParamsLst) {
						setParam.put(m.get("name").toString(), m.get("value"));
					}
				}

				String sortName = params.get("sortName").toString();
				String sortOrder = params.get("sortOrder").toString();
				setParam.put("@SortName", sortName);
				setParam.put("@SortOrder", sortOrder);

			}
		} catch (Exception e) {
			e.printStackTrace();
		}

		return setParam;

	}
	
	/**
	 * 解析FlexiGrid 控件的JOSN参数为Map对象
	 * @param json
	 * @return
	 */
	@SuppressWarnings("unchecked")
	public static Map<String,Object> parseParam(String json) {

		if (StringUtils.isEmpty(json)) {
			return null;
		}

		Map<String,Object> paramMap = null;

		try {
			Map<String, Object> params = JSONUtil.fromJson(json, Map.class);

			if (params != null) {

				paramMap = new HashMap<String,Object>();

				//分页
				String page = params.get("page") == null ? "1" : params.get("page").toString();
				String pageSize = params.get("pageSize") == null ? "10" : params.get("pageSize").toString();
				paramMap.put(ParamKey.PAGE, Integer.parseInt(page));
				paramMap.put(ParamKey.PAGE_SIZE, Integer.parseInt(pageSize));
				Integer fromRow = RowNumUtil.getFromRowNum(page, pageSize);
				Integer toRow = RowNumUtil.getToRowNum(page, pageSize);
				paramMap.put("fromRow", fromRow);
				paramMap.put("toRow", toRow);

				//排序
				paramMap.put(ParamKey.ORDER_NAME, params.get("sortName").toString());
				paramMap.put(ParamKey.ORDER_SORT, params.get("sortOrder").toString());

				//页面查询条件
				List<HashMap<String, Object>> whereParamsLst = (List<HashMap<String, Object>>) params.get("whereparams");
				if (whereParamsLst != null) {
					for (HashMap<String, Object> m : whereParamsLst) {
						paramMap.put(m.get("name").toString(), m.get("value"));
					}
				}

			}
		} catch (Exception e) {
			e.printStackTrace();
		}

		return paramMap;

	}

	
	
/**新增方法string类型**/
	/**
	  * 解析FlexiGrid 控件的JOSN 参数 为ParamMap对象
	  * @param json
	  * @return
	  */
	 @SuppressWarnings("unchecked")
	 public static ParamMap parseJSONParamStr(String json)
	 {
		
		if(StringUtils.isEmpty(json))
		{
		 return null;
		}
		
		ParamMap paramMap = null;
		
		
		try
		{
		 Map<String, Object> params =JSONUtil.fromJson(json, Map.class);
		 
		 if(params != null)
		 {
			
			paramMap = new ParamMap();
			
			//Where 条件
			Map<String, Object> whereParam = new HashMap<String, Object>();
			 
		  whereParam.put(ParamKey.PAGE, params.get("page").toString());
		  whereParam.put(ParamKey.PAGE_SIZE, params.get("pageSize").toString());
		  
		  whereParam.put(ParamKey.ORDER_NAME, params.get("sortName").toString());
		  whereParam.put(ParamKey.ORDER_SORT, params.get("sortOrder").toString());
		  
		  
		  List<HashMap<String,Object>> whereParamsLst=  (List<HashMap<String, Object>>) params.get("whereparams");
		 	
		 	if(whereParamsLst != null)
		 	{
	   	 	for (HashMap<String, Object> m : whereParamsLst)
	   	 	{
	   	 	 whereParam.put(m.get("name").toString(), m.get("value"));
	   	 	}
		 	}
		  
		  
		  // 排序
		  Map<String, String> orderParam = new HashMap<String, String>();
		  orderParam.put(params.get("sortName").toString() + "Order", params.get("sortOrder").toString());
		  
		  paramMap.putWhereParam(whereParam);
		  paramMap.putOrderParam(orderParam);
		  
		 }
		}
		catch (Exception e)
		{
		 e.printStackTrace();
		}
		
		return paramMap;
		
	 }
	

	
	 /**
	  * 解析FlexiGrid 控件的JOSN 参数 为ParamMap对象
	  * @param json
	  * @return
	  */
	 @SuppressWarnings("unchecked")
	 public static ParamMap parseJSONParam_01(String json)
	 {
		
		if(StringUtils.isEmpty(json))
		{
		 return null;
		}
		
		ParamMap paramMap = null;
		
		
		try
		{
		 Map<String, Object> params =JSONUtil.fromJson(json, Map.class);
		 
		 if(params != null)
		 {
			
			paramMap = new ParamMap();
			
			//Where 条件
			Map<String, Object> whereParam = new HashMap<String, Object>();
			 
		  whereParam.put(ParamKey.PAGE, params.get("page").toString());
		  whereParam.put(ParamKey.PAGE_SIZE, params.get("pageSize").toString());
		  
		  whereParam.put(ParamKey.ORDER_NAME, params.get("sortName").toString());
		  whereParam.put(ParamKey.ORDER_SORT, params.get("sortOrder").toString());
		  
		  
		  List<HashMap<String,Object>> whereParamsLst=  (List<HashMap<String, Object>>) params.get("whereparams");
		 	
		 	if(whereParamsLst != null)
		 	{
	   	 	for (HashMap<String, Object> m : whereParamsLst)
	   	 	{
	   	 	 whereParam.put(m.get("name").toString(), m.get("value"));
	   	 	}
		 	}
		  
		  
		  // 排序
		  Map<String, String> orderParam = new HashMap<String, String>();
		  orderParam.put(params.get("sortName").toString() + "Order", params.get("sortOrder").toString());
		  
		  paramMap.putWhereParam(whereParam);
		  paramMap.putOrderParam(orderParam);
		  
		 }
		}
		catch (Exception e)
		{
		 e.printStackTrace();
		}
		
		return paramMap;
		
	 }


}
