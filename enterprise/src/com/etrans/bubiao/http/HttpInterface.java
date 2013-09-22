/**
 * HttpInterface.java
 * Create on 2012-1-14上午11:50:08
 * Copyright (c) 2012 by e_trans.
 */
package com.etrans.bubiao.http;

import java.util.List;

/**
 * @author Ivan
 * @version 1.0
 * @brief
 */
public interface HttpInterface
{

 
 
 /**
  * 添加服务器地址
  * @param urls
  */
 void addServerURL(List<String> urls);
 
 
 /**
  * 获取服务器地址
  * @return
  */
 List<String> getServerURL();
 
}
