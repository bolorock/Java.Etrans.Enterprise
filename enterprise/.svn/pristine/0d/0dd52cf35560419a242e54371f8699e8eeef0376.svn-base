/**
 * AuthTag.java
 * Create on 2012-1-17上午11:03:27
 * Copyright (c) 2012 by e_trans.
 */
package com.etrans.bubiao.auth;

import java.io.IOException;
import javax.servlet.http.HttpSession;
import javax.servlet.jsp.JspException;
import javax.servlet.jsp.JspTagException;
import javax.servlet.jsp.tagext.BodyContent;
import javax.servlet.jsp.tagext.BodyTagSupport;

import com.etrans.bubiao.sys.Constants;



/**
 * @author Ivan
 * @version 1.0
 * @brief 权限控制标签
 */
public class AuthTag extends BodyTagSupport
{

 /**
  * 
  */
 private static final long serialVersionUID = 8440359263487059548L;

 /**
  * 权限值
  */
 private String operation;
 
 
 /**
  * @return the operation
  */
 public String getOperation()
 {
	return operation;
 }
 
 /**
  * @param operation the operation to set
  */
 public void setOperation(String operation)
 {
	this.operation = operation;
 }
 
 
 /**
  * doStartTag()方法是遇到标签开始时会呼叫的方法，
  * 其合法的返回值是EVAL_BODY_INCLUDE与SKIP_BODY,
  * 前者表示将显示标签间的文字，后者表示不显示标签间的文字；
  
  */
 public int doStartTag() throws JspException
 {

	HttpSession session = pageContext.getSession();
	
	Object userObj = session.getAttribute(Constants.LOGIN_USER);
	if(null == userObj)
	 return SKIP_BODY;
	
	SessionUser user = (SessionUser) userObj;
	
	return   AuthManager.auth(user, operation)?EVAL_BODY_INCLUDE:SKIP_BODY;
	
	
 }
 
 
 
/**
 *  doEndTag()方法是在遇到标签结束时呼叫的方法，
 * 其合法的返回值是EVAL_PAGE与 SKIP_PAGE，
 * 前者表示处理完标签后继续执行以下的JSP网页，
 * 后者是表示不处理接下来的JSP网页
 */
 public int doEndTag() throws JspException
 {
    try
    {
     if (bodyContent != null)
      {
          bodyContent.writeOut(bodyContent.getEnclosingWriter());
      }
    }
    catch (IOException ex)
    {
        throw new JspTagException("IO Error:" + ex.getMessage());
    }
    return EVAL_PAGE;
 }
 
 
 
 /**
  * 这个方法是在显示完标签间文字之后呼叫的，
  * 其返回值有EVAL_BODY_AGAIN与SKIP_BODY，
  * 前者会再显示一次标签间的文字，
  * 后者则继续执行标签处理的下一步
  */
 public int doAfterBody() throws JspException
 {
	 return SKIP_BODY;
 }

 
 
 public void setBodyContent(BodyContent bodyContent)
 {
	this.bodyContent = bodyContent;
 }
 
 
 
}
