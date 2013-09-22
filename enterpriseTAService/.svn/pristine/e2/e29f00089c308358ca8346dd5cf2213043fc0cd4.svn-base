package com.etrans.bubiao.action;

import java.io.PrintWriter;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import com.etrans.common.util.web.Struts2Utils;
import com.opensymphony.xwork2.ActionSupport;


/**
 * Action 高层类
 * @author ivan
 * 
 */

public class BaseAction extends ActionSupport
{
	/**
  * 
  */
 private static final long serialVersionUID = 5562343152003507811L;


	protected Logger log = LogManager.getLogger(this.getClass().getName());

	
	
	
	/**
	 * 获得当前HttpServletRequest
	 */
	protected HttpServletRequest getHttpServletRequest()
	{
		return Struts2Utils.getRequest();
	}

	/**
	 * 获得 HttpServletResponse
	 */
	protected HttpServletResponse getHttpServletResponse()
	{
		return Struts2Utils.getResponse();
	}

	/**
	 * 获取输出流
	 * @return
	 */
	protected PrintWriter getPrintWriter()
	{
		return Struts2Utils.getWriter();
	}
	
	
	/**
	 * 根据指定的页面参数名称，获取页面传递来的参数值
	 * 
	 * @param parameter
	 * @return 单个对象
	 */
	protected String getParameter(String name)
	{
		return Struts2Utils.getParameter(name);
	}

	
	/**
	 * 根据指定的页面参数名称，获取页面传递来的参数值
	 * @param parameter
	 * @return 数组对象
	 */
	protected String [] getParameterValues(String name)
	{
		return  Struts2Utils.getParameterValues(name);
	}

	/**
	 * 向request对象添加attribute
	 * 
	 * @param key
	 * @param value
	 */
	protected void setRequestAttribute(String key, Object value)
	{
		Struts2Utils.setRequestAttribute(key, value);
	}

	/**
	 * 从Request 的Attribute值
	 * @param key
	 * @return
	 */
	protected Object getRequestAttribut(String key)
	{
		return Struts2Utils.getRequestAttribute(key);
	}
	/**
	 * 从session中取得相应的值
	 * @param key
	 */
	protected Object getSessionObj(String key)
	{
		return Struts2Utils.getSessionAttribute(key);
	}

	protected void setSessionArrtibute(String key, Object value)
	{
		Struts2Utils.setSessionArrtibute(key, value);
	}

	
	/**
	 * 直接输出文本消息
	 * 
	 * @param msgStr
	 *            文本字符串
	 */
	protected void renderText(String text)
	{
		Struts2Utils.renderText(text);
	}

	/**
	 * 直接输出纯HTML
	 * 
	 * @param msgStr
	 *            html字符串
	 */
	protected void renderHTML(String html)
	{
		Struts2Utils.renderHtml(html);
	}

	/**
	 * 输出Json字符串
	 * @param json
	 */
	protected void renderJSON(String json)
	{
		Struts2Utils.renderJson(json);
	}
	
	/**
	 * 直接输出JSON,使用Jackson转换Java对象.
	 * @param data 可以是List<POJO>, POJO[], POJO, 也可以Map名值对.
	 */
	protected void renderJSON(Object data)
	{
		Struts2Utils.renderJson(data);
	}
	
	
	/**
	 * 直接输出纯XML
	 * @param xml   xml字符串
	 */
	protected void renderXML(String xml)
	{
		Struts2Utils.renderXml(xml);
	}
	
	/**
	 * 获取cookie
	 * @param key
	 * @return
	 */
	public Cookie getCookie(String key)
	{
		Cookie cookie = null;
		Cookie[] cookies = this.getHttpServletRequest().getCookies();
		if(null == cookies) return null;
		for(Cookie c:cookies)
		{
			if((c.getName()).equals(key))
			{
				cookie = c;
				break;
			}
		}
		return cookie;
	}
	
	
	
}
