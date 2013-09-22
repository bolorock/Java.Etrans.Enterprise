/**
 * SeMapAction.java
 * Create on 2011-8-18下午02:05:21
 * Copyright (c) 2011 by e_trans.
 */
package com.etrans.bubiao.action;

import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.struts2.convention.annotation.Action;
import org.apache.struts2.convention.annotation.Namespace;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;

import com.etrans.bubiao.sys.Constants;
import com.etrans.common.util.web.HttpUtils;



@Controller
@Scope("prototype")
@Namespace("/common/public")
public class SeMapAction extends BaseAction
{

  /**
   * 
   */
  private static final long serialVersionUID = -3323304136305047247L;
  
 
 // private static final String URL_ECONDING="urlEndcoding";// 是否URL转码

  
  @SuppressWarnings("unchecked")
  @Action("mapRequest")
  public void mapRequest()
  {
	
	Map<String,Object> paramsMap =new HashMap<String,Object>();
	if("SE_GC".equals(getParameter("ser")))// 包含ser=SE_GC的要转码
	{
	  		String st =this.getParameter("st");
	  		String city = this.getParameter("city");
	  		String addr = this.getParameter("addr");
	  		
    	  try
		  {
    		city= URLEncoder.encode(city, "UTF-8");
    		addr= URLEncoder.encode(addr, "UTF-8");
		  }
		  catch (UnsupportedEncodingException e)
		  {
			e.printStackTrace();
		  }
		  paramsMap.put("st", st);
		  paramsMap.put("city", city);
		  paramsMap.put("address", addr);
		  paramsMap.put("uid", Constants.MAP_UID);
	}
	else
	{
	  Map<String,Object> map =this.getHttpServletRequest().getParameterMap();
	  paramsMap =  getParams(map);
	}
	
	
	try
	{
	  List<String> list =HttpUtils.URLGet(Constants.MAP_BASE_URL+"/"+getParameter("ser"),paramsMap,null);
	  if(null != list)
	  {
		System.out.println(list.get(0));
		this.renderXML(list.get(0));
	  }
	}
	catch (Exception e)
	{
	  e.printStackTrace();
	}
  }
  
  private Map<String, Object> getParams(Map<String, Object> map)
  {
	if(map != null)
	{
	  
	  	Map<String, Object> parmasMap  = new HashMap<String, Object>(map.size() +1);
	  	
    	for (Map.Entry<String, Object> entry : map.entrySet())
    	{
    	  String value =this.getParameter(entry.getKey());
    	  parmasMap.put(entry.getKey(), value);
    	}
    	
    	return parmasMap;
	}
	return null;
  }
  
  

}
