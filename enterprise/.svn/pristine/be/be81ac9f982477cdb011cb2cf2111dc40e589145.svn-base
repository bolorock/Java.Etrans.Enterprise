package com.etrans.common.util.web;

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.TimeZone;

import javax.servlet.http.HttpServletRequest;

public class IpUtils {

	/**常量定义**/
	/**
	 * 表示内网ip  innerip
	 */
	public static final String INNERIP = "innerip"; 
	/**
	 * 表示外网ip outerip
	 */
	public static final String OUTERIP = "outerip"; 
	/**
	 * 登陆的ip类型
	 */
	public static final String LOGIN_IP_TYPE="login_ip_type";
	
	
	/**
	 *  验证ip类型r入口
	 * @param ipAddress
	 * @return
	 */
	public static String ipValidateInput(String ipAddress){
		String resultInfo="";
		if(IpUtils.ipValidate(ipAddress)){
			resultInfo = IpUtils.INNERIP;
		}else{
			resultInfo = IpUtils.OUTERIP;
		}
		return resultInfo;
		
	}
	
	/**
	 * 验证ip类型
	 * @param ip
	 * @return false标示不是内网ip，反之是内网ip
	 */
	public  static boolean ipValidate(String ipAddress){
		boolean isInnerIp = false; //默认不是内网ip    
		long ipNum = getIpNum(ipAddress); 
		        	/**   
		        	私有IP：A类  10.0.0.0-10.255.255.255   
		               	B类  172.16.0.0-172.31.255.255   
		               	C类  192.168.0.0-192.168.255.255   
		        		当然，还有127这个网段是环回地址   
		        	 **/   
		       long aBegin = getIpNum("10.0.0.0");    
		       long aEnd = getIpNum("10.255.255.255");    
		       long bBegin = getIpNum("172.16.0.0");    
		       long bEnd = getIpNum("172.31.255.255");    
		       long cBegin = getIpNum("192.168.0.0");    
		       long cEnd = getIpNum("192.168.255.255");    
		       isInnerIp = isInner(ipNum,aBegin,aEnd) || isInner(ipNum,bBegin,bEnd) || isInner(ipNum,cBegin,cEnd) || ipAddress.equals("127.0.0.1");    
		       return isInnerIp;  
	}
	
	/**
	 * 分割ip
	 * @param ipAddress 192.168.2.141
	 * @return 数组
	 */
	private static long getIpNum(String ipAddress) {    
		    String [] ip = ipAddress.split("\\.");    
		    long a = Integer.parseInt(ip[0]);
		    long b = Integer.parseInt(ip[1]);    
		    long c = Integer.parseInt(ip[2]);    
		    long d = Integer.parseInt(ip[3]);    
		
			long ipNum = a * 256 * 256 * 256 + b * 256 * 256 + c * 256 + d;    
		    return ipNum;    
		}   

	/**
	 * 判断用户ip是否是内网ip
	 * @param userIp 用户ip
	 * @param begin 某类型【ABC类】开始ip
	 * @param end 某类型【ABC类】结束ip
	 * @return
	 */
	private static boolean isInner(long userIp,long begin,long end){    
		     return (userIp>=begin) && (userIp<=end);
	}  

	
	/**
	 * 获取访问这个系统的ip地址
	 * @return
	 */
	public static String getRemortIP() { 
		
		HttpServletRequest request=Struts2Utils.getRequest();
		
		//这个为空。。就说明访问者不是使用代理地址来访问你这个网站所以可以用request.getRemoteAddr();获取IP
	    if (request.getHeader("x-forwarded-for") == null) {  
	        return request.getRemoteAddr();
	    }
	    //这个就是获取代理之后的原始IP
	    return request.getHeader("x-forwarded-for");  
	}  

	/**
	 * 保存登陆ip类型
	 * @param ipType 内网ip【0标示内网ip，1标示外网ip】
	 */
	public static void setLoginIpType(String ipType){
		Struts2Utils.setSessionArrtibute(IpUtils.LOGIN_IP_TYPE, ipType);
	}
	
	/**
	 * 获取当前时间
	 * @return
	 */
	public static String getTimes(){
		SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		Calendar calendar = Calendar.getInstance(TimeZone.getTimeZone("GMT+08:00"));
		Date date =calendar.getTime();
		String logoutTime = format.format(date);
		return logoutTime;
	}
	
	
	
	public static void main(String[] args) {
//		boolean boo = IpUtils.ipValidate("59.41.158.40");
//		System.out.println(boo);
//		System.out.println("当前时间："+IpUtils.getTimes());
//		
		
//		Map<String, String> map = new HashMap<String, String>();
//		
//		map.put("1", "ljy");
		
		String str ="nsssssn";
//		str=str.replaceAll("n", "9");
//		System.out.println(str);
		
		System.out.println(str.indexOf("000"));
		
	}
	
	
	
	
	
	
	
}
