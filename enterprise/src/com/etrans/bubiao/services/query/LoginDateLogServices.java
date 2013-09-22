package com.etrans.bubiao.services.query;



import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.etrans.bubiao.auth.SessionUser;
import com.etrans.bubiao.entities.PageBean;
import com.etrans.bubiao.services.IbatisServices;
import com.etrans.bubiao.sys.UserContext;
import com.etrans.common.util.FlexiGridUtil;
import com.etrans.common.util.ParamKey;


/***
 * 登录日志查询
 * @author Administrator
 *
 */
@Service
public class LoginDateLogServices{
	
	@Autowired
	private IbatisServices ibatisServices;
	
	public void setIbatisServices(IbatisServices ibatisServices)
	{
		this.ibatisServices = ibatisServices;
	}
	
	/**
	 * 查询登录日志列表
	 * @param mapJsonParams 查询条件
	 * @param fullid 企业完整id
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings("unchecked")
	public PageBean getLoginLog(String queryJSON,long in) throws Exception{
		PageBean pageBean = new PageBean();
		
		//把FlexiGrid传过来的json参数封装成map对象
		Map params = FlexiGridUtil.parseParam(queryJSON);
		
		//获得用户所属企业完整id并且保存到查询条件集合中
		SessionUser user = UserContext.getLoginUser();
		if(user != null){
			//如果是超级管理员UserContext.isBsRootUser()
//			int a = 1;
			if(UserContext.isBsRootUser()){
				params.remove("userId");
				params.remove("fullid");
			}
			//如果是企业管理员user.isWorkUnitSuperAdmin()
			else if(user.isWorkUnitSuperAdmin()){
				params = user.getParamsOrFullid(params);
			}
			//普通用户(根据用户id去查询)
			else{
				params.put("userId", user.getUserID());
			}
			
		}
		//得到登录日志list
		List<Map<String,Object>> loginLogList = this.ibatisServices.queryForList(Map.class, "getLoginSQL",params);
		//登录日志总条数
		Long total = getLoginCount(params);
		
		pageBean.setPage((Integer)params.get(ParamKey.PAGE));
		pageBean.setRows(loginLogList);
		pageBean.setTotal(total);
		
		return pageBean;
	}
	
	/**
	 * 查询日志总条数
	 * @param params
	 * @return
	 * @throws Exception
	 */
	public Long getLoginCount(Map<String,Object> params) throws Exception {
		//获得用户所属企业完整id并且保存到查询条件集合中
		return this.ibatisServices.findIbatisListCount("getLoginCountSQL", params);
		
	}
	
	
	@SuppressWarnings("rawtypes")
	public List<Map<String,Object>> getLoginLogList(Map params) throws Exception {
		
		List<Map<String,Object>> loginLogList = this.ibatisServices.queryForList(Map.class, "getLoginSQL",params);
		return loginLogList;
		
	}
	
	
	
}
