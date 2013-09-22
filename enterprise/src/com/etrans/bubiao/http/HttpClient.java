package com.etrans.bubiao.http;

import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.List;
import java.util.TimeZone;

import javax.net.ssl.SSLHandshakeException;
import javax.servlet.http.HttpSession;

import org.apache.commons.lang.StringUtils;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.apache.http.HttpEntityEnclosingRequest;
import org.apache.http.HttpRequest;
import org.apache.http.HttpResponse;
import org.apache.http.HttpVersion;
import org.apache.http.NameValuePair;
import org.apache.http.NoHttpResponseException;
import org.apache.http.client.ClientProtocolException;
import org.apache.http.client.HttpRequestRetryHandler;
import org.apache.http.client.ResponseHandler;
import org.apache.http.client.entity.UrlEncodedFormEntity;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.client.methods.HttpRequestBase;
import org.apache.http.client.utils.URLEncodedUtils;
import org.apache.http.impl.client.DefaultHttpClient;
import org.apache.http.message.BasicNameValuePair;
import org.apache.http.params.CoreProtocolPNames;
import org.apache.http.protocol.ExecutionContext;
import org.apache.http.protocol.HttpContext;

import com.etrans.bubiao.auth.SessionUser;
import com.etrans.bubiao.sys.UserContext;
import com.etrans.common.util.web.Struts2Utils;



/**
 *  网络请求基类
 * @author Ivan
 * @version 1.0
 * @brief
 */
public class HttpClient
{

 
 private static final Log log = LogFactory.getLog(HttpClient.class);
 


	public static final int RETRIEVE_LIMIT = 20;
	public static final int RETRIED_TIME = 3;

	private static final String CHARSET_UTF8 = "UTF-8";
	
	private static final SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");

	/**
	 * 设置恢复策略，在发生异常时候 自动重试次数
	 */
	private static final int TRY_COUNT=3;
	
	
	/**
	 * 默认请求参数Key
	 */
	private static final String DEFUALT_PRAMA_KEY="jsonParam";
	
	/**
	 *  异常自动恢复处理, 使用HttpRequestRetryHandler接口实现请求的异常恢复
	 */
	private static HttpRequestRetryHandler requestRetryHandler = new HttpRequestRetryHandler() 
	{
	   // 自定义的恢复策略
	   public boolean retryRequest(IOException exception, int executionCount, HttpContext context)
	   {
	  	
	    // 设置恢复策略，在发生异常时候将自动重试TRY_COUNT次
	    if (executionCount >= TRY_COUNT) {
	     // 如果超过最大重试次数，那么就不要继续了
	     return false;
	    }
	    if (exception instanceof NoHttpResponseException) {
//	   如果服务器丢掉了连接，那么就重试
	     return true;
	    }
	    if (exception instanceof SSLHandshakeException) {
   //	   不要重试SSL握手异常
	     return false;
	    }
	    HttpRequest request = (HttpRequest) context.getAttribute(ExecutionContext.HTTP_REQUEST);
	    boolean idempotent = (request instanceof HttpEntityEnclosingRequest);
	    if (!idempotent) {
 //	   如果请求被认为是幂等的，那么就重试
	     return true;
	    }
	    return false;
	   }
	};
	

	/**
	 * 使用ResponseHandler接口处理响应，HttpClient使用ResponseHandler会自动管理连接的释放，解决了对连接的释放管理
	 */
	private static ResponseHandler<Response> responseHandler = new ResponseHandler<Response>() 
	{
	   // 自定义响应处理
	   public Response handleResponse(HttpResponse response) throws ClientProtocolException, IOException 
	   {
	  	 return new Response(response.getEntity(),response.getStatusLine().getStatusCode());
	   }
	};
	

	
	
	
	
	/**
	* Get方式提交
	* @param url
	* 提交地址
	* @return 响应消息
	* @throws HttpException 
	*/
	public static Response get(String url) throws HttpException
	{
	   return get(url, null, null);
	}
	
	
	/**
	* Get方式提交
	* @param url
	* 提交地址
	* @param params
	* 查询参数集, 键/值对
	* @return 响应消息
	*/
	public static Response get(String url, ParamMap params) throws HttpException
	{
	   return get(url, params, null);
	}
	
	
	/**
	* Get方式提交
	* @param url
	* 提交地址
	* @param params
	* 查询参数集, 键/值对
	* @param charset
	* 参数提交编码集
	* @return 响应消息
	*/
	public static Response getAddress(String url)  throws HttpException
	{
	 if (StringUtils.isEmpty(url))
     throw new IllegalArgumentException("request(get) url may not be null");
	   
	  
	    String charset=CHARSET_UTF8;
	   DefaultHttpClient httpclient = getDefaultHttpClient(charset);
	   HttpGet hg = new HttpGet(url);
	   // 发送请求，得到响应
	   Response response = null;
	   
	   try 
	   {
	  	response = httpclient.execute(hg, responseHandler);
	   } 
	   catch (ClientProtocolException e) //协议错误
	   {
	  	throw new HttpException(e.getMessage(), e);
	   }
	   catch (IOException e) // 网络异常
	   {
	  	throw new HttpException(e.getMessage(), e);
	   }
	   
	   finally {
	    abortConnection(hg, httpclient);
	   }
	   
	  /* if (response != null)
	  	handleResponseStatusCode(response.getStatusCode(), response);*/
	   
	   return response;
	}
	
	
	/**
	* Get方式提交
	* @param url
	* 提交地址
	* @param params
	* 查询参数集, 键/值对
	* @param charset
	* 参数提交编码集
	* @return 响应消息
	*/
	public static Response get(String url, ParamMap params, String charset)  throws HttpException
	{
	   try
	{
			   StringBuffer logStr = new StringBuffer();
			   logStr.append("[##");
			   
			   SessionUser user = UserContext.getLoginUser();
			   logStr.append(user == null ? "" : user.getUserID()).append("##");
			   logStr.append(user == null ? "" : user.getUserName()).append("##");
			   
			   logStr.append(url).append("##");
			   
			   Calendar calendar = Calendar.getInstance(TimeZone.getTimeZone("GMT+08:00"));
			   Date date =calendar.getTime();
			   String nowTime = format.format(date);
			   logStr.append(nowTime).append("##");
			   
			   logStr.append(params.asJson());
			   
			   logStr.append("##]");
			   
			   log.info(logStr.toString());
	} catch (Exception e)
	{
		  log.error("获取不到Session");
	}
	   
		
	 if (StringUtils.isEmpty(url))
     throw new IllegalArgumentException("request(get) url may not be null");
	   
	    List<NameValuePair> qparams = getPramaJson(params);
	   
	    charset = (charset == null ? CHARSET_UTF8 : charset);
	    String formatParams = URLEncodedUtils.format(qparams, charset);
	    url = (url.indexOf("?")) < 0 ? (url + "?" + formatParams) : (url.substring(0, url.indexOf("?") + 1) + formatParams);
	   
	   DefaultHttpClient httpclient = getDefaultHttpClient(charset);
	   HttpGet hg = new HttpGet(url);
	   // 发送请求，得到响应
	   Response response = null;
	   
	   try 
	   {
	  	response = httpclient.execute(hg, responseHandler);
	   } 
	   catch (ClientProtocolException e) //协议错误
	   {
	  	throw new HttpException(e.getMessage(), e);
	   }
	   catch (IOException e) // 网络异常
	   {
	  	throw new HttpException(e.getMessage(), e);
	   }
	   
	   finally {
	    abortConnection(hg, httpclient);
	   }
	   
	  /* if (response != null)
	  	handleResponseStatusCode(response.getStatusCode(), response);*/
	   
	   return response;
	}
	
	
	/**
	* Post方式提交
	* @param url  提交地址
	* @param params 	 提交参数集
	* @return 响应消息
	 * @throws IOException 
	 * @throws ClientProtocolException 
	*/
	public static Response post(String url,ParamMap params)   throws HttpException
	{
	   return post(url, params, null);
	}
	
	
	/**
	* Post方式提交
	* @param url	提交地址
	* @param params	 提交参数集
	* @param charset 参数提交编码集
	* @return 响应消息
	 * @throws IOException 
	 * @throws ClientProtocolException 
	*/
	public static Response post(String url, ParamMap params, String charset)  throws HttpException
	{
	 
		try{
			   StringBuffer logStr = new StringBuffer();
			   logStr.append("[##");
			   
			   SessionUser user = UserContext.getLoginUser();
			   logStr.append(user == null ? "" : user.getUserID()).append("##");
			   logStr.append(user == null ? "" : user.getUserName()).append("##");
			   
			   logStr.append(url).append("##");
			   
			   Calendar calendar = Calendar.getInstance(TimeZone.getTimeZone("GMT+08:00"));
			   Date date =calendar.getTime();
			   String nowTime = format.format(date);
			   logStr.append(nowTime).append("##");
			   
			   logStr.append(params.asJson());
			   
			   logStr.append("##]");
			   
			   log.info(logStr.toString());
		}catch(Exception e){
			log.error("没有获取到Session");
		}
	   
//	   log.info("request : " + url);
	   if (StringUtils.isEmpty(url))
		    throw new IllegalArgumentException("request(post) url may not be null");
	   
	   // 创建HttpClient实例
	   DefaultHttpClient httpclient = getDefaultHttpClient(charset);
	   UrlEncodedFormEntity formEntity = null;
	   
	   try 
	   {
	    if (StringUtils.isEmpty(charset))
	     formEntity = new UrlEncodedFormEntity(getPramaJson(params),CHARSET_UTF8);
	    
	    else 
	     formEntity = new UrlEncodedFormEntity(getPramaJson(params), charset);
	    
	   } 
	   catch (UnsupportedEncodingException e)
	   {
	    e.printStackTrace();
	   }
	   
	   
	   HttpPost hp = new HttpPost(url); 
	   hp.setEntity(formEntity);
	   // 发送请求，得到响应
	   Response response = null;
	   try 
	   {
	  	response = httpclient.execute(hp, responseHandler);
	    
	   } 
	   catch (ClientProtocolException e) //协议错误
	   {
	  	throw new HttpException(e.getMessage(), e);
	   }
	   catch (IOException e) // 网络异常
	   {
	  	throw new HttpException(e.getMessage(), e);
	   } 
	   catch (Exception e) // 网络异常
	   {
	  	throw new HttpException(e.getMessage(), e);
	   } 
	   finally 
	   {
	    abortConnection(hp, httpclient);
	   } 
	  
	   
	   return response;
	}
	
	
	
	
	
	/**
	* 获取DefaultHttpClient实例
	* @param charset
	* 参数编码集, 可空
	* @return DefaultHttpClient 对象
	*/
	private static DefaultHttpClient getDefaultHttpClient(final String charset)
	{
	   DefaultHttpClient httpclient = new DefaultHttpClient();
	   httpclient.getParams().setParameter(CoreProtocolPNames.PROTOCOL_VERSION, HttpVersion.HTTP_1_1);
	   //模拟浏览器，解决一些服务器程序只允许浏览器访问的问题
	   httpclient.getParams().setParameter(CoreProtocolPNames.USER_AGENT, "Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.1)");
	   httpclient.getParams().setParameter(CoreProtocolPNames.USE_EXPECT_CONTINUE, Boolean.FALSE);
	   httpclient.getParams().setParameter(CoreProtocolPNames.HTTP_CONTENT_CHARSET, charset == null ? CHARSET_UTF8 : charset);
	   httpclient.setHttpRequestRetryHandler(requestRetryHandler);
	   
	   return httpclient;
	}
	
	
	/**
	* 释放HttpClient连接
	* @param hrb 	请求对象
	* @param httpclient	   client对象
	*/
	private static void abortConnection(final HttpRequestBase hrb, final DefaultHttpClient httpclient)
	{
	   if (hrb != null) 
	    hrb.abort();
	   
	   if (httpclient != null)
	    httpclient.getConnectionManager().shutdown();
	}


	
	/**
	 * 构建请求参数
	 * @param pramaMap 参数Map
	 * @return
	 */
	private static List<NameValuePair> getPramaJson(ParamMap pramaMap)
	{
	 if(null == pramaMap || pramaMap.size()<=0)
		log.error("请求参数为空");
		
	 List<NameValuePair> params = new ArrayList<NameValuePair>();
	 params.add(new BasicNameValuePair(DEFUALT_PRAMA_KEY, pramaMap.asJson()));
	 return params;
	 
	}
	
	
	
}
