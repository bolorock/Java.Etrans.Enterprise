package com.etrans.bubiao.action.sys.log;


import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import org.apache.commons.lang.time.DateFormatUtils;
import org.springframework.beans.factory.annotation.Autowired;

import com.etrans.bubiao.auth.SessionUser;
import com.etrans.bubiao.services.sys.SysUserLogServices;
import com.etrans.bubiao.sys.SpringContextHolder;
import com.etrans.bubiao.sys.UserContext;




/**
 * @author yangzhen
 * @version 1.0
 * @brief 操作日志
 */

public class LogUtil 
{
	

    @Autowired
	private static  SysUserLogServices sysUserLogServices;



	public static SysUserLogServices getSysUserLogServices() {
		return sysUserLogServices;
	}

	public static void setSysUserLogServices(SysUserLogServices sysUserLogServices){
		LogUtil.sysUserLogServices = sysUserLogServices;
	}
	

	public static  void insertLog(LogActionTypes type,String actionName,String moduleName, String sqlstr,String description){ 
	    try{
	    	SessionUser user = UserContext.getLoginUser();
			Map<String, Object> params = new HashMap<String, Object>();
			params.put("userId", user.getUserID());
			params.put("logTime", DateFormatUtils.format(new Date(), "yyyy-MM-dd HH:mm:ss"));
			params.put("actionTypeID",getActionType(type));
			params.put("sqlStr", sqlstr);
			params.put("moduleName", moduleName);
			params.put("actionName", actionName);
			params.put("description", description);
			sysUserLogServices = SpringContextHolder.getBean("sysUserLogServices");
			sysUserLogServices.insertLog(params);
	    }catch(Exception e){
	    	e.printStackTrace();
	    }
		
	}
	
	
	
	private static int getActionType(LogActionTypes type){
		switch (type){
			case INSERT:
				return 1;
				
			case UPDATE:
				return 2;
				
			case DELETE:
				return 5;
				
			default:
				return 10;
		}
	}
	
	
	
}
