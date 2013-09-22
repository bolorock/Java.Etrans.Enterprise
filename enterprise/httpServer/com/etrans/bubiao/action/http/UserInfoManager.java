package com.etrans.bubiao.action.http;

import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

import com.etrans.bubiao.entities.User;

/**
 * 用户信息工具类
 * @author Administrator
 *
 */
public class UserInfoManager {
	private final Map<String, String> userInfoMap = new ConcurrentHashMap<String, String>();

	private static UserInfoManager userInfoManager = new UserInfoManager(); 
	
	public void removeUserInfo(String ticket) throws Exception {
		userInfoMap.remove(ticket);
	}
	
	public void putUserInfo(User user)throws Exception {
		userInfoMap.put(user.getId()+"",user.getWorkUnitId()+"");
	}
	
	public String getUserInfo(String userID)throws Exception {
		return userInfoMap.get(userID);
	}
	
	/**
	 * 获取实例
	 * 
	 * @return UniqId
	 */
	public static UserInfoManager getInstance() throws Exception {
		if(userInfoManager == null){
			userInfoManager = new UserInfoManager();
		}
		return userInfoManager;
	} 
	
}
