/**
 * DefaultHttpClient.java
 * Create on 2012-1-14上午09:25:15
 * Copyright (c) 2012 by e_trans.
 */
package com.etrans.bubiao.http;

import java.util.List;
import java.util.Map;

import org.apache.commons.lang.StringUtils;



/**
 * @author Ivan
 * @version 1.0
 * @brief  默认网络请求接口类
 */
public class DefaultHttpClient extends AbstractHttpClient
{

 
 /**
  * 服务器地址游标
  */
 private ServerURLCursor cursor;
 
 /**
  * 服务器地址
  */
 private List<String> urls;
 
 
 /**
  * 新增地址
  */
 private static final String INSER_ACTION="EHInsertData.action";
 /**
  * 更新地址
  */
 private static final String UPDATE_ACTION="EHUpdateData.action";
 /**
  * 删除地址
  */
 private static final String DELETE_ACTION="EHDeleteData.action";
 /**
  * 更新地址
  */
 private static final String UPDATE_IBATIS_ACTION="EHUpdateDataByIbatis.action";
 /**
  * 删除地址
  */
 private static final String DELETE_IBATIS_ACTION="EHDeleteDataByIbatis.action";
 /**
  * 查询地址
  */
 private static final String QUERY_ACTION="EHSelectData.action";
 
 private static final String QUERY_ACTION1="EHSelectData1.action";
 /**
  * 分页查询地址
  */
 private static final String QUERYPAGE_ACTION="EHSelectDataPage.action";
 /**
  * 调用存储过程地址
  */
 private static final String CALLPROCEDURE_ACTION="EHCallProcedure.action";
 
 
 /**
  * 新增车辆地址
  */
 private static final String INSERT_VEHICLE_IBATIS_ACTION="EHInsertVehicleByIbatis.action";
 
  /**
  * 更新车辆地址
  */
 private static final String UPDATE_VEHICLE_IBATIS_ACTION="EHUpdateVehicleByIbatis.action";
 
 /**
  * 批量插入地址
  */
 private static final String BATCH_INSERT_ACTION="EHInsertBatch.action";
 
 
	/** OK: Success! */
	public static final int OK = 200;
	
	/** Not Modified: There was no new data to return. */
	public static final int NOT_MODIFIED = 304;
	
	/**
	 * Bad Request: The request was invalid. An accompanying error message will
	 * explain why. This is the status code will be returned during rate
	 * limiting.
	 */
	public static final int BAD_REQUEST = 400;
	
	/** Not Authorized: Authentication credentials were missing or incorrect. */
	public static final int NOT_AUTHORIZED = 401;
	
	/**
	 * Forbidden: The request is understood, but it has been refused. An
	 * accompanying error message will explain why.
	 */
	public static final int FORBIDDEN = 403;
	
	/**
	 * Not Found: The URI requested is invalid or the resource requested, such
	 * as a user, does not exists.
	 */
	public static final int NOT_FOUND = 404;
	
	/**
	 * Not Acceptable: Returned by the Search API when an invalid format is
	 * specified in the request.
	 */
	public static final int NOT_ACCEPTABLE = 406;
	
	/**
	 * Internal Server Error: 
	 */
	public static final int INTERNAL_SERVER_ERROR = 500;
	
	/**
	 * Service Unavailable: The Weibo servers are up, but overloaded with
	 * requests. Try again later. The search and trend methods use this to
	 * indicate when you are being rate limited.
	 */
	public static final int SERVICE_UNAVAILABLE = 503;
 
 
 
 
 	
 	private void initCursor()
 	{
 	    cursor = new ServerURLCursor(getServerURL());
 	}
 	
  /**
   * 构建请求参数，把Table Name 添加到 ParamMap 中
   * @param paramMap 参数
   * @param tableName 表名
   * @return
   */
  private ParamMap prepareParams(String tableName,ParamMap paramMap)
  {
 	
 	if(null == paramMap)
 	 paramMap = new ParamMap();
 	
 	if(!StringUtils.isEmpty(tableName))
 	  paramMap.putTableName(tableName);
 	
 	return paramMap;
 	
  }
  
  
  /**
   * 获取下一个请求地址
   * @param lastUrl
   * @return
   */
  private String getNextRequestURL(String lastUrl)
  {
   
   if(StringUtils.isEmpty(lastUrl))
  	throw new IllegalArgumentException("lastUrl is null ......");
   String action =lastUrl.substring(lastUrl.lastIndexOf("/"));
   
   String baseUrl = cursor.moveToNext();
   
   if(!StringUtils.isEmpty(baseUrl))
      return baseUrl + action;
   
   return null;
   
  }
  
  
  
  
  /**
   * 底层网络请求。如远程服务器发生异常则自动请求下一个服务器
   * @param method 
   * @param tableName
   * @param url
   * @param paramMap
   * @return
   * @throws HttpException 
   */
  public  Response  request(HttpMethod method,String tableName,String url,ParamMap paramMap) throws HttpException
  {
   
   Response response = null;
   paramMap = prepareParams(tableName,paramMap);
   
   try
	 {
		if(method == HttpMethod.GET)
		    response = HttpClient.get(url, paramMap);
		
		else 
		    response = HttpClient.post(url, paramMap);
		
		 if (response != null)
	  	handleResponseStatusCode(response.getStatusCode(), response);
		
	 }
	 catch (HttpException e)
	 {
	
		url = getNextRequestURL(url);
		
		if(url != null)
	 	 response = request(method, tableName, url, paramMap);
		
		e.printStackTrace();
	 }
	
	 return response;
   
  }
  
  
 
 
 /* (non-Javadoc)
  * @see com.etrans.bubiao.http.AbstractHttpClient#insert(java.lang.String, com.etrans.bubiao.http.ParamMap)
  */
 @Override
 public Response insert(String tableName,Map<String, Object> paramMap) throws HttpException
 {
	
	ParamMap map = new ParamMap();
	map.put(ParamKey.SET_PARAM, paramMap);
	return request(HttpMethod.POST,tableName,cursor.getFirst() +INSER_ACTION,map);
	
 }
 

	@Override
	public Response insertVehicleByIbatis(String tableName,Map<String, Object> paramMap) throws HttpException {
		ParamMap map = new ParamMap();
		map.put(ParamKey.SET_PARAM, paramMap);
		return request(HttpMethod.POST,tableName,cursor.getFirst() +INSERT_VEHICLE_IBATIS_ACTION,map);
	}
	
	@Override
	public Response updateVehicleByIbatis(String tableName, Map<String, Object> setParam,Map<String, Object> whereParam) throws HttpException {
		ParamMap map = new ParamMap();
		map.put(ParamKey.SET_PARAM, setParam);
		map.putWhereParam(whereParam);
		return request(HttpMethod.POST,tableName,cursor.getFirst() +UPDATE_VEHICLE_IBATIS_ACTION,map);
	}
	

 
	/* (non-Javadoc)
	 * @see com.etrans.bubiao.http.AbstractHttpClient#insertBatch(java.lang.String, java.util.List)
	 */
	@Override
	public Response insertBatch(String tableName,	List<Map<String, Object>> paramMap) throws HttpException
	{
	 ParamMap map = new ParamMap();
	 map.put(ParamKey.SET_PARAM, paramMap);
	 return request(HttpMethod.POST,tableName,cursor.getFirst() +BATCH_INSERT_ACTION,map);
	}


	

 /* (non-Javadoc)
  * @see com.etrans.bubiao.http.AbstractHttpClient#update(java.lang.String, com.etrans.bubiao.http.ParamMap)
  */
 @Override
 public Response update(String tableName, Map<String, Object> setParam,Map<String, Object> whereParam) throws HttpException
 {
	ParamMap map = new ParamMap();
	map.put(ParamKey.SET_PARAM, setParam);
	map.putWhereParam(whereParam);
	
	return request(HttpMethod.POST,tableName,cursor.getFirst() +UPDATE_ACTION,map);
 }

 /* (non-Javadoc)
  * @see com.etrans.bubiao.http.AbstractHttpClient#delete(java.lang.String, com.etrans.bubiao.http.ParamMap)
  */
 @Override
 public Response delete(String tableName, Map<String, Object> whereParam) throws HttpException
 {
	ParamMap map = new ParamMap();
	map.putWhereParam(whereParam);
	
	return request(HttpMethod.POST,tableName,cursor.getFirst() +DELETE_ACTION,map);
 }

 /* (non-Javadoc)
  * @see com.etrans.bubiao.http.AbstractHttpClient#update(java.lang.String, com.etrans.bubiao.http.ParamMap)
  */
 @Override
 public Response updateByIbatis(String tableName, Map<String, Object> setParam,Map<String, Object> whereParam) throws HttpException
 {
	ParamMap map = new ParamMap();
	map.put(ParamKey.SET_PARAM, setParam);
	map.putWhereParam(whereParam);
	
	return request(HttpMethod.POST,tableName,cursor.getFirst() +UPDATE_IBATIS_ACTION,map);
 }

 /* (non-Javadoc)
  * @see com.etrans.bubiao.http.AbstractHttpClient#delete(java.lang.String, com.etrans.bubiao.http.ParamMap)
  */
 @Override
 public Response deleteByIbatis(String tableName, Map<String, Object> whereParam) throws HttpException
 {
	ParamMap map = new ParamMap();
	map.putWhereParam(whereParam);
	
	return request(HttpMethod.POST,tableName,cursor.getFirst() +DELETE_IBATIS_ACTION,map);
 }
 
 /* (non-Javadoc)
  * @see com.etrans.bubiao.http.AbstractHttpClient#query(java.lang.String, com.etrans.bubiao.http.ParamMap)
  */
 @Override
 public Response query(String tableName, Map<String, Object> whereParam,Map<String, String> orderParam) throws HttpException
 {
	ParamMap paramMap = new ParamMap();
	paramMap.putWhereParam(whereParam);
	paramMap.putOrderParam(orderParam);
	
	
	
	return request(HttpMethod.POST,tableName,cursor.getFirst() +QUERY_ACTION,paramMap);
 }

 
	/* (non-Javadoc)
	 * @see com.etrans.bubiao.http.AbstractHttpClient#query(java.lang.String, java.lang.String, java.util.Map, java.util.Map)
	 */
	@Override
	public Response query(String tableName, String totalName,		Map<String, Object> whereParam, Map<String, String> orderParam)
		throws HttpException
	{
	
	  ParamMap paramMap = new ParamMap();
	  paramMap.putWhereParam(whereParam);
		paramMap.putOrderParam(orderParam);
		paramMap.putTotalName(totalName);
		
		return request(HttpMethod.POST,tableName,cursor.getFirst() +QUERY_ACTION,paramMap);
	}
	
	
	 /**
	  *  查询
	  * @param paramMap 查询参数，包含TableName，TotalName，Where条件集合，Order排序集合
	  * @return
	  */
	 public  Response query(ParamMap paramMap) throws HttpException
	 {
		
		return request(HttpMethod.POST,null,cursor.getFirst() +QUERY_ACTION,paramMap);
	 }
	 
	 /**
	  *  查询
	  * @param paramMap 查询参数，包含TableName，TotalName，Where条件集合，Order排序集合
	  * @return
	  */
	 public  Response query1(ParamMap paramMap) throws HttpException
	 {
		
		return request(HttpMethod.POST,null,cursor.getFirst() +QUERY_ACTION1,paramMap);
	 }
	 
	/**
	 * 调用存储过程
	 * @param tableName
	 * @param paramMap
	 * @return
	 * @throws HttpException
	 */
	public Response callProcedure(String tableName,Map<String, Object> paramMap) throws HttpException
	{
		ParamMap map = new ParamMap();
		map.put(ParamKey.SET_PARAM, paramMap);
		return request(HttpMethod.POST,tableName,cursor.getFirst() + CALLPROCEDURE_ACTION,map);
	}
	

 /* (non-Javadoc)
  * @see com.etrans.bubiao.http.HttpInterface#addServerURL(java.util.List)
  */
 @Override
 public void addServerURL(List<String> urls)
 {
  this.urls = urls;
  initCursor();
 }

 /* (non-Javadoc)
  * @see com.etrans.bubiao.http.HttpInterface#getServerURL()
  */
 @Override
 public List<String> getServerURL()
 {
	// TODO Auto-generated method stub
	return urls;
 }
 
 

	
	/**
	 * Handle Status code
	 * @param statusCode
	 *            响应的状态码
	 * @param res
	 *            服务器响应
	 * @throws HttpException
	 *             当响应码不为200时都会报出此异常:<br />
	 *             <li>
	 *             		HttpNotFundException, 请求错误了 网址导致404等, 抛出此异常,
	 *            		 首先检查request log, 确认不是人为错误导致请求失败
	 *             </li> 
	 *             <li> HttpAuthException, 通常发生在Auth失败, 检查用于验证登录的用户名/密码/KEY等</li> 
	 *             <li>
	 *             HttpRefusedException, 通常发生在服务器接受到请求, 但拒绝请求, 可是多种原因, 具体原因
	 *             服务器会返回拒绝理由, 调用HttpRefusedException#getError#getMessage查看
	 *             </li>
	 *             <li>HttpServerException, 通常发生在服务器发生错误时, 检查服务器端是否在正常提供服务</li>
	 *             <li>HttpException, 其他未知错误.</li>
	 */
	private static void handleResponseStatusCode(int statusCode, Response res) throws HttpException 
	{
		String msg = parseStatusCode(statusCode) + "\n";

		switch (statusCode) 
		{
		
		// 成功
		case OK:
			break;

			//404
		case NOT_FOUND:
		 throw new HttpNotFundException(msg + res.asString(), statusCode);
		 
		case NOT_MODIFIED://304
		case BAD_REQUEST://400
		case NOT_ACCEPTABLE://406
			throw new HttpException(msg + res.asString(), statusCode);

		case NOT_AUTHORIZED: //401
			throw new HttpAuthException(msg + res.asString(), statusCode);

		case FORBIDDEN://403
			throw new HttpRefusedException(msg, statusCode);

		case INTERNAL_SERVER_ERROR://500
		case SERVICE_UNAVAILABLE://503
			throw new HttpServerException(msg, statusCode);

		default:
			throw new HttpException(msg + res.asString(), statusCode);
			
		}
	}
	

	/**
	 * 解析HTTP错误码
	 * @param statusCode
	 * @return
	 */
	private static String parseStatusCode(int statusCode) 
	{
		String cause = null;
		
		switch (statusCode) 
		{
		case NOT_MODIFIED:
			break;
			
		case BAD_REQUEST:
			cause =BAD_REQUEST + " 错误请求";
			break;
			
		case NOT_AUTHORIZED:
			cause =  NOT_AUTHORIZED + " 未授权";
			break;
			
		case FORBIDDEN:
			cause =FORBIDDEN + " 无权限访问";
			break;
			
		case NOT_FOUND:
			cause =NOT_FOUND + " 找不到资源";
			break;
			
		case NOT_ACCEPTABLE: 
			cause =NOT_ACCEPTABLE + "无法访问";
			break;
			
		case INTERNAL_SERVER_ERROR:
			cause =INTERNAL_SERVER_ERROR +  "内部服务器错误";
			break;
	
		case SERVICE_UNAVAILABLE:
			cause = SERVICE_UNAVAILABLE + "服务无法获得";
			break;
			
		default:
			cause = "";
		}
		return statusCode + ":" + cause;
	}
	
	
/*****************************************************新增分页查询数据开始*****/
	
	/* (non-Javadoc)
	  * @see com.etrans.bubiao.http.AbstractHttpClient#query(java.lang.String, com.etrans.bubiao.http.ParamMap)
	  */
	 @Override
	 public Response queryPage(String tableName, Map<String, Object> whereParam,Map<String, String> orderParam) throws HttpException
	 {
		ParamMap paramMap = new ParamMap();
		paramMap.putWhereParam(whereParam);
		paramMap.putOrderParam(orderParam);
		
		
		
		return request(HttpMethod.POST,tableName,cursor.getFirst() +QUERYPAGE_ACTION,paramMap);
	 }

	 
		/* (non-Javadoc)
		 * @see com.etrans.bubiao.http.AbstractHttpClient#query(java.lang.String, java.lang.String, java.util.Map, java.util.Map)
		 */
		@Override
		public Response queryPage(String tableName, String totalName,Map<String, Object> whereParam, Map<String, String> orderParam)
			throws HttpException
		{
		
		  ParamMap paramMap = new ParamMap();
		  paramMap.putWhereParam(whereParam);
			paramMap.putOrderParam(orderParam);
			paramMap.putTotalName(totalName);
			
			return request(HttpMethod.POST,tableName,cursor.getFirst() +QUERYPAGE_ACTION,paramMap);
		}
		
		
		 /**
		  *  查询
		  * @param paramMap 查询参数，包含TableName，TotalName，Where条件集合，Order排序集合
		  * @return
		  */
		 public  Response queryPage(ParamMap paramMap) throws HttpException
		 {
			
			return request(HttpMethod.POST,null,cursor.getFirst() +QUERYPAGE_ACTION,paramMap);
		 }	
 
 

/*******************************************************************************新增分页查询数据结束*****/ 
}
