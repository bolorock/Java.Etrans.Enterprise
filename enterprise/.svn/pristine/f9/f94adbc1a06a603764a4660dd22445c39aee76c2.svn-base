package com.etrans.common.util.web;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.io.UnsupportedEncodingException;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLEncoder;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;



/**
 * 
 * @author Ivan
 * @version 1.0
 * @brief 网络请求工具类
 */
public class HttpUtils
{

	private static final String URL_PARAM_CONNECT_FLAG = "&";
	//private static Log log = LogFactory.getLog(HttpUtils.class);

	private HttpUtils()
	{
	}

	/**
	 * GET METHOD
	 * @param strUrl  String
	 * @param map     Map
	 * @param isUrlEncoding 是否URL转码 ，1为是，0 为否
	 * @throws IOException
	 * @return List
	 */
	
	@SuppressWarnings("static-access")
	public static List<String> URLGet(String strUrl, Map<String,Object> map,String isUrlEncoding) throws IOException
	{
		String strtTotalURL = "";
		List<String>  result = new ArrayList<String> ();
		if (strUrl.indexOf("?") == -1)
		{
			strtTotalURL = strUrl + "?" + getUrl(map, isUrlEncoding);
		}
		else
		{
			strtTotalURL = strUrl + "&" + getUrl(map, isUrlEncoding);
		}
		
		//System.out.println("strtTotalURL= " + strtTotalURL);
		URL url = new URL(strtTotalURL);
		HttpURLConnection con = (HttpURLConnection) url.openConnection();
		con.setUseCaches(false);
		con.setFollowRedirects(true);
		BufferedReader in = new BufferedReader(new InputStreamReader(con.getInputStream(),"UTF-8"));
		while (true)
		{
			String line = in.readLine();
			if (line == null)
			{
				break;
			}
			else
			{
				result.add(line);
			}
		}
		in.close();
		return (result);
	}

	
	@SuppressWarnings("static-access")
	public static InputStream URLGet_InputStream(String strUrl, Map<String,Object> map,String isUrlEncoding) throws IOException
	{
		String strtTotalURL = "";
		if (strUrl.indexOf("?") == -1)
		{
			strtTotalURL = strUrl + "?" + getUrl(map, isUrlEncoding);
		}
		else
		{
			strtTotalURL = strUrl + "&" + getUrl(map, isUrlEncoding);
		}
		System.out.println("strtTotalURL= " + strtTotalURL);
		URL url = new URL(strtTotalURL);
		HttpURLConnection con = (HttpURLConnection) url.openConnection();
		con.setUseCaches(false);
		con.setFollowRedirects(true);
		
		return con.getInputStream();
	}
	
	
	/**
	 * POST METHOD
	 * 
	 * @param strUrl
	 *            String
	 * @param content
	 *            Map
	 * @throws IOException
	 * @return List
	 */
	public static String URLPost(String strUrl, Map<String,Object> map,String isUrlEncoding) throws IOException
	{

		String content = "";
		content = getUrl(map,isUrlEncoding);
		if (strUrl.indexOf("?") == -1)
		{
		}
		else
		{
		}
		URL url = new URL(strUrl);
		
		HttpURLConnection con = (HttpURLConnection) url.openConnection();
		con.setDoInput(true);
		con.setDoOutput(true);
		con.setAllowUserInteraction(false);
		con.setUseCaches(false);
		con.setRequestMethod("POST");
		con.setRequestProperty("Content-Type", "application/x-www-form-urlencoded;charset=UTF-8");
		
		BufferedWriter bout = new BufferedWriter(new OutputStreamWriter(con.getOutputStream(),"UTF-8"));
		bout.write(content);
		bout.flush();
		bout.close();
		
		BufferedReader bin = new BufferedReader(new InputStreamReader(con.getInputStream(),"UTF-8"));
		
		StringBuffer buffer = new StringBuffer();
		while (true)
		{
			String line = bin.readLine();
			if (line == null)
			{
				break;
			}
			else
			{
				buffer.append(line);
			}
		}
		return buffer.toString();
	}

	
	
	/**
	 * 
	 * 
	 * @param map
	 *            Map
	 * @return String
	 */
	private static String getUrl(Map<String,Object> map,String isUrlEncoding)
	{
		if (null == map || map.keySet().size() == 0)
		{
			return ("");
		}
		StringBuffer url = new StringBuffer();
		
		for (Map.Entry<String, Object> entry : map.entrySet())
		{
		    String key = entry.getKey();
		    Object val  = entry.getValue();
			String str = val != null ? val.toString() : "";
			
			try
			{
			  if("1".equals(isUrlEncoding))
				str = URLEncoder.encode(str, "UTF-8");
			}
			catch (UnsupportedEncodingException e)
			{
				e.printStackTrace();
			}
			url.append(key).append("=").append(str).append(URL_PARAM_CONNECT_FLAG);
		}
		
		String strURL = "";
		strURL = url.toString();
		if (URL_PARAM_CONNECT_FLAG.equals("" + strURL.charAt(strURL.length() - 1)))
		{
			strURL = strURL.substring(0, strURL.length() - 1);
		}
		return (strURL);
	}

}
