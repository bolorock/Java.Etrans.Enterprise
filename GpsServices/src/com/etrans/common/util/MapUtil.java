package com.etrans.common.util;

import http.HttpClient;
import http.Response;

import org.apache.commons.codec.binary.Base64;
import org.dom4j.Document;
import org.dom4j.DocumentHelper;
import org.dom4j.Element;

/** 
 * 地图工具类，主要涉及经纬度等地图换算
 * 
 * @author Pomelo(柚子.)  
 * @version 1.0
 * @since 创建时间：2013-7-10 下午2:40:56 
 */
public class MapUtil {

	/**
	 * 泰瑞地图接口
	 */
	public final static String MAP_BASE_URL="http://e.smartearth.cn:9000";
	
	/**
	 * 认证账号
	 */
	public final static String MAP_UID="e-trans";
	
	/**
	 * 请求结果
	 */
	public final static String  MAP_OK="ok";
	
	/**
	 * 请求结果
	 */
	public final static String  MAP_ERROR="error";
	
	/**
	 * 获取百度偏移后的经纬度 
	 * 
	 * @param lnglat
	 * @return String[] 
	 */
	public static String[] getRealngLatBaidu(String lnglat){
		StringBuffer urlBuffer = new StringBuffer();
		String address="";
		String[] lngLatAry = lnglat.split(",");
		urlBuffer.append("http://api.map.baidu.com/ag/coord/convert?from=0&to=4&x=")
				 .append(lngLatAry[0])
				 .append("&y=")
				 .append(lngLatAry[1]);
		try {
			Response resulResponse=HttpClient.getAddress(urlBuffer.toString());
			if(200== resulResponse.getStatusCode()){
				address = resulResponse.asString().substring(1, resulResponse.asString().length()-1);
			}
			String[] results = address.split("\\,");
	        if (results.length == 3){
	            if (results[0].split("\\:")[1].equals("0")){
	                String mapX = results[1].split("\\:")[1];
	                String mapY = results[2].split("\\:")[1];
	                mapX = mapX.substring(1, mapX.length()-1);
	                mapY = mapY.substring(1, mapY.length()-1);
	                mapX = new String(Base64.decodeBase64(mapX));
	                mapY = new String(Base64.decodeBase64(mapY));
	                lngLatAry[0] = mapX;
	                lngLatAry[1] = mapY;
	            }
	        }
		} catch (Exception e) {
			lngLatAry = lnglat.split(",");
		}
		return lngLatAry;
	}
	
	/**
	 * 获取默认的经纬度偏移量
	 *  
	 * @param lnglat 经度,纬度
	 * @return String[]
	 */
	public static  String[] getRealLngLat(String lnglat){ 
		return getRealLngLatTr(lnglat);
	}
	
	/**
	 * 获取偏移后的经纬度
	 * <p>
	 * 根据地图类型获取偏移经纬度,
	 * </p>
	 * @param lnglat 经纬度字符串
	 * @param mapType 地图类型 mapType 为空取原值，不做交换
	 * @return String[] 经纬度
	 */
	public static  String[] getRealLngLat(String lnglat,String mapType){
		if(mapType==null || (mapType!=null && "".equals(mapType)))return lnglat.split(",");
		if(mapType.equals("1")){
	    	return getRealngLatBaidu(lnglat);
	    } else if(mapType.equals("2")){
	    	return getRealLngLatTr(lnglat);
	    }else{
	    	return lnglat.split(",");
	    }
	}
	
	/**
	 * 取泰瑞经纬度偏移值
	 * 
	 * @param lnglat String
	 * @return  String[] 经纬度
	 */
	public static String[] getRealLngLatTr(String lnglat){
		String address="";
		StringBuffer urlBuffer=new StringBuffer();
		urlBuffer.append(MapUtil.MAP_BASE_URL+"/SE_SH")
		         .append("?")
		         .append("st=SE_SH&points=")
		         .append(lnglat)
		         .append("&uid=")
				 .append(MapUtil.MAP_UID);
		String[] lngArray=new String[2];
		try {
			 Response resulResponse=HttpClient.getAddress(urlBuffer.toString());
			 address =resulResponse.asString();
			 Document document; 
			 document = DocumentHelper.parseText(address); 
			 Element root = document.getRootElement(); 
			 Element status=root.element("status");
			 if(MapUtil.MAP_OK.equals(status.getStringValue())){
				 Element resultElement=root.element("result");
				 Element pointsElement=resultElement.element("points");
				 Element pointElement=pointsElement.element("point");
				 Element lngElement=pointElement.element("lng");
				 String lng=lngElement.getStringValue();
				 lngArray[0]=lng;
				 Element latElement=pointElement.element("lat");
				 String lat=latElement.getStringValue();
				 lngArray[1]=lat;
			 }else {
				 lngArray=lnglat.split(",");
			 }
		} catch (Exception e) {
			 lngArray=lnglat.split(",");
		}
		return lngArray;
	}
	
	/**
	 * 获取反偏移经纬度
	 * 
	 * @param lnglat 经度,纬度
	 * @return String[] 
	 */
	public static  String[] getRSHRealLngLat(String lnglat){
		 //取车辆的经纬度
		String address="";
		StringBuffer urlBuffer=new StringBuffer();
		urlBuffer.append(MapUtil.MAP_BASE_URL+"/SE_SH")
				 .append("?")
				 .append("st=SE_RSH&points=")
				 .append(lnglat)
				 .append("&uid=")
				 .append(MapUtil.MAP_UID);
		String[] lngArray=new String[2];
		try {
			 Response resulResponse=HttpClient.getAddress(urlBuffer.toString());
			 address =resulResponse.asString();
			 Document document; 
			 document = DocumentHelper.parseText(address); 
			 Element root = document.getRootElement(); 
			 Element status=root.element("status");
			 if(MapUtil.MAP_OK.equals(status.getStringValue())){
				 Element resultElement=root.element("result");
				 Element pointsElement=resultElement.element("points");
				 Element pointElement=pointsElement.element("point");
				 Element lngElement=pointElement.element("lng");
				 String lng=lngElement.getStringValue();
				 lngArray[0]=lng;
				 Element latElement=pointElement.element("lat");
				 String lat=latElement.getStringValue();
				 lngArray[1]=lat;
			 }else {
			   lngArray=lnglat.split(",");
			 }
		} catch (Exception e) {
			 lngArray=lnglat.split(",");
		}
		return lngArray;
	}
}

