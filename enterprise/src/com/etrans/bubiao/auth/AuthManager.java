/**
 * AuthManager.java
 * Create on 2012-1-17下午03:47:38
 * Copyright (c) 2012 by e_trans.
 */
package com.etrans.bubiao.auth;

import org.apache.commons.lang.StringUtils;

/**
 * @author Ivan
 * @version 1.0
 * @brief 权限验证管理类
 */
public class AuthManager
{

 
 /**
  * 权限验证
  * @param user 当前登录用户
  * @param operation 访问操作码
  * @return
  */
 public static boolean auth(SessionUser user,String operation)
 {
	
	if(user==null || StringUtils.isEmpty(operation) || user.getResources()==null)
	 return false;
	
	 return user.getResources().indexOf(operation)==-1?false:true;
	
 }
 
 
 
 
}
