package com.etrans.common.util.web;

import java.io.BufferedReader;
import java.io.DataInputStream;
import java.io.DataOutputStream;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.URL;
import java.net.HttpURLConnection; 

import com.etrans.common.util.encrypt.MD5Util;


/**
 * .net的报警设置帮助类
 * @author etrans
 * 网络参考：http://www.cnblogs.com/guodongli/archive/2011/04/05/2005930.html
 * http://www.cnblogs.com/linjiqin/archive/2012/02/16/2353597.html
 *
 */
public class NetUtils {
	
	private static String NETURL = "http://192.168.2.16:8080/loginAnalyse.aspx"; // 连接。net报警设置url
	
	/**
	 * 构造方法
	 */
	public NetUtils(String netURL) {
		super();
		this.NETURL=netURL;
	}
	public NetUtils() {
		super();
	}
	
	/**
	 * 登陆.net报表系统
	 * @param userName 用户名
	 * @param userPwd 密码
	 * @return
	 */
	public static String doPoseNet(String userName,String userPwd){
		String result ="";//返回结果
		URL url = null;
		HttpURLConnection httpurlconnection = null;
		try {
			/**模拟表单**/
			url = new URL(NETURL);
			httpurlconnection = (HttpURLConnection) url.openConnection();
			httpurlconnection.setDoInput(true);// 设置是否从httpUrlConnection读入，默认情况下是true;   
			httpurlconnection.setDoOutput(true);//  http正文内，因此需要设为true, 默认情况下是false;  
			httpurlconnection.setConnectTimeout(5000);//设置连接超时
			httpurlconnection.setReadTimeout(5000);//设置读操作超时
			httpurlconnection.setRequestProperty("Accept-Charset", "utf-8"); 
			httpurlconnection.setInstanceFollowRedirects(false);
			
			//格式为form表单提交
			// 配置连接的Content-type，配置为application/x- www-form-urlencoded的意思是正文是urlencoded编码过的form参数
			httpurlconnection.setRequestMethod("POST");
			httpurlconnection.setRequestProperty("Content-Type",
					"application/x-www-form-urlencoded");
			
			/**参数**/
			StringBuffer params = new StringBuffer();
			params.append("user="+userName).append("&").append("pwd="+MD5Util.getMD5String(userPwd));
			
			/**http访问**/
			byte[] parames = params.toString().getBytes(); 

			httpurlconnection.getOutputStream().write(parames,0,parames.length);
			httpurlconnection.getOutputStream().flush();
			httpurlconnection.getOutputStream().close();
			
			int code = httpurlconnection.getResponseCode();
			System.out.println("code    " + code);
			
			/**返回**/
			//ok
			if (code == 200) {
				/**接收返回的数据**/
//				InputStream is = httpurlconnection.getInputStream();
//				BufferedReader br = new BufferedReader(new InputStreamReader(is));
//				String line = null;
//				while ((line = br.readLine()) != null) {
//					result += line;
//				}
				
				/******接收返回的数据*****
				*
				*返回结果【0表示成功，1表示用户名和密码错误，2表示.net代码异常】
				*/
				DataInputStream in = new DataInputStream(httpurlconnection
						.getInputStream());
				int len = in.available();
				byte[] by = new byte[len];
				in.readFully(by);
				String rev = new String(by);
				System.out.println(rev);
				result=rev;
				in.close();
			}else{
				result="no200";
			}
		} catch (Exception e) {
			e.printStackTrace();
			result="9999";//表示异常
		} finally {
			if (httpurlconnection != null) {
				httpurlconnection.disconnect();
			}
		}
		
		return result;
	}
	
	/**
	 * 测试
	 * @param args
	 */
	public static void main(String[] args) {
		
		NetUtils.doPoseNet("admin", "admin");
		
	}

	
	
}
