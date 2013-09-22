/**
 * UserAction.java
 * Create on 2012-2-8下午01:59:47
 * Copyright (c) 2012 by e_trans.
 */
package com.etrans.bubiao.action.sys;

import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Random;

import javax.servlet.ServletContext;

import org.apache.catalina.connector.Request;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.apache.struts2.ServletActionContext;
import org.apache.struts2.convention.annotation.Action;
import org.apache.struts2.convention.annotation.Namespace;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;

import com.etrans.bubiao.action.BaseAction;
import com.etrans.bubiao.action.sys.log.LogActionTypes;
import com.etrans.bubiao.action.sys.log.LogUtil;
import com.etrans.bubiao.auth.SessionUser;
import com.etrans.bubiao.entities.Result;
import com.etrans.bubiao.entities.Tree;
import com.etrans.bubiao.entities.VehicleGroup;
import com.etrans.bubiao.entities.WorkUnit;
import com.etrans.bubiao.services.IbatisServices;
import com.etrans.bubiao.services.sys.CustomMapServices;
import com.etrans.bubiao.services.sys.UserServices;
import com.etrans.bubiao.sys.UserContext;
import com.etrans.common.util.FlexiGridUtil;
import com.etrans.common.util.PageBean;
import com.etrans.common.util.Tools;
import com.etrans.common.util.encrypt.CsEncodeUtils;
import com.etrans.common.util.encrypt.MD5Util;
import com.etrans.common.util.json.JSONUtil;
import com.etrans.common.util.web.Struts2Utils;
/**
 * @author Ivan
 * @version 1.0
 * @brief 用户Action
 */

@Controller
@Namespace("/sys/user")
@Scope("prototype")
public class UserAction extends BaseAction{
	
	private static final long serialVersionUID = -306092009304943914L;
 
 	protected Logger log = LogManager.getLogger(this.getClass().getName());
 
 	/**
 	 * 用户信息Services
 	 */
 	@Autowired
 	private UserServices userServices; 
 	/**
 	 * IbatisServices
 	 */
	@Autowired
	private IbatisServices ibatisServices;
 	/**
 	 * 图层Services
 	 */
	@Autowired
	private CustomMapServices customMapServices;
	/**
	 * 工作单位列表
	 */
	private List<WorkUnit> workUnitList;
 
	/**
	 * 新增用户
	 */
 	@Action("createUser")
	public void createUser() {
 		try {
		Map<String, Object> insertParamMap = getParameterMap();
		String isSuperSave = "";
		if(insertParamMap.get("IsSuperUser")!=null){
			isSuperSave = insertParamMap.get("IsSuperUser").toString();
		};
		SessionUser user = UserContext.getLoginUser();
		insertParamMap.put("CreateUserId",UserContext.getLoginUser().getUserID());
		insertParamMap.put("IsSuperUser","0");  // 不管是企业管理还是普通管理员此标志都为0,预留的超级管理员为1
		insertParamMap.put("IsShowHandle","1");  //  添加是否显示操作指示默认为0
		insertParamMap.put("IsShowNotice","1");
		insertParamMap.remove("PasswordA");
		
		//insertParamMap.put("Password", MD5Util.getMD5String(insertParamMap.get("Password").toString()));
		 insertParamMap.put("Password", CsEncodeUtils.Encrypt(insertParamMap.get("Password").toString()));
		String Status=Struts2Utils.getRequest().getParameter("Status");
		insertParamMap.put("Status", Status);
		insertParamMap.put("CreateTime", new Date());
		// 企业管理员创建用户直接取管理员所在企业ID
		if(!UserContext.isBsRootUser())insertParamMap.put("WorkUnitID", user.getWorkUnitID());		
		
			Object insertId = ibatisServices.insertIbatisObject("addUserSQL", insertParamMap);	
			LogUtil.insertLog(LogActionTypes.INSERT, "成功", "用户信息", "", "新增用户");
			// 企业管理员,更新企业单位表的管理员ID
			if(isSuperSave!=null && isSuperSave.equals("1")){
				// 更新企业表的AdminId
				String id=String.valueOf(insertId);
			    userServices.setUserId(Long.parseLong(id));
				Integer oldUserId = userServices.updateWorkUnitAdminId(
						Long.parseLong(String.valueOf(insertId)),
						Long.parseLong((String)insertParamMap.get("WorkUnitID"))
				);
				//if(oldUserId>0){ ljy改2013-1-4
					LogUtil.insertLog(LogActionTypes.INSERT, "成功", "用户信息", "", "新增或更换企业管理员");
					//}				
			}
			customMapServices.addPub_CustomMapLayer("默认图层",3, (Integer)insertId);
			this.renderText("SUCCESS");
		} catch (Exception e) {
			LogUtil.insertLog(LogActionTypes.INSERT, "失败", "用户信息", "", "新增或更换企业管理员");
			e.printStackTrace();
			log.error(e.getMessage());
			this.renderText("FAIL");
		}
	}
// 	/**
// 	 * 检查车辆分组是否存在
// 	 * 
// 	 * @param workUnitId
// 	 * @return true-存在，false-不存在
// 	 * @throws Exception 
// 	 */
// 	private boolean checkVehicleGroupExits(String workUnitId) throws Exception{
// 		try {
// 			HashMap<String,Object> parmaMap = new HashMap<String, Object>();
// 			parmaMap.put("workUnitId", workUnitId);
//			List<VehicleGroup> list = ibatisServices.queryForList(VehicleGroup.class, "CheckDefaultGroupSQL", parmaMap);
// 	 		if(list!=null && list.size()>0){
// 	 			log.info("已经存在默认分组!");
// 	 			return true; 
// 	 		}	 		
//		} catch (Exception e) {
//			throw new Exception("查询默认分组是否存在异常!异常【"+e.getMessage()+"】");
//		}
// 		return false;
// 	}
// 	
// 	/**
// 	 * 创建默认三个车辆分组
// 	 * [基本组,授权组,自编组]
// 	 * 
// 	 * @param workUnitId
// 	 * @throws Exception 
// 	 */
// 	private void addDefaultvehicleGroup(String workUnitId) throws Exception{
// 		String[] baseGroup= new String[]{"基本组","授权组","自编组"};
// 		String flag="成功";
//		for(int i=0;i<3;i++){
//			VehicleGroup vehicleGroup = new VehicleGroup();
//			vehicleGroup.setAuthorizedGroupId(0l);
//			vehicleGroup.setFullId(null);
//			vehicleGroup.setIsLeaf(1);
//			vehicleGroup.setIsSourceVisible(0);
//			vehicleGroup.setKind(i);
//			vehicleGroup.setLevel(1);
//			vehicleGroup.setName(baseGroup[i]);
//			vehicleGroup.setParentGroupId(Long.parseLong(workUnitId));
//			vehicleGroup.setPrivilegeFlag(0);
//			vehicleGroup.setWorkUnitId(new Long(workUnitId));
//			try {
//				ibatisServices.insert("addVehicleGroup", vehicleGroup);				
//				log.info("新增分组["+baseGroup[i]+"]");
//			} catch (Exception e) {
//				flag="失败";
//				throw new Exception("新增默认车辆分组异常!"+e.getMessage());
//			}finally{
//				LogUtil.insertLog(LogActionTypes.INSERT, flag, "用户信息", "", "车辆分组[基本组,授权组,自编组]");
//			}		
//		}		
// 	}
 	
 	
 	
	/**
	 * 查询工作单位列表
	 */
	@Action(value = "workUnitList")
 	public void workUnitList(){
		try {
			workUnitList = ibatisServices.queryForList(WorkUnit.class, "getAllWorkUnit",new HashMap());
		} catch (Exception e) {
			log.error(e.getMessage());
		}
 	}
 	
	/**
	 * 更新用户信息
	 */
	@Action(value = "editUser")
	public void editUser() {
		Result result = new Result();
		String flag="成功";
		try {			
			Map<String, Object> paramMap = new HashMap<String, Object>();
			paramMap.put("ID",getParameter("id"));
			paramMap.put("Name", getParameter("name"));
			paramMap.put("UserName", getParameter("username"));
			paramMap.put("IsSuperUser", getParameter("isSuperUser"));
			paramMap.put("Status", getParameter("Status"));
			paramMap.put("RunTime", getParameter("RunTime"));
			paramMap.put("OverTime", getParameter("OverTime"));
			
			if(!UserContext.isBsRootUser()){
				paramMap.put("workUnitId",UserContext.getLoginUser().getWorkUnitID());
			}else{
				paramMap.put("workUnitId",getParameter("workUnitId"));
			}
			
			
			ibatisServices.updateIbatisObject("updateUserSQL", paramMap);			
			result.setCode(0);			
		} catch (Exception e) {
			log.error(e.getMessage());
			result.setMsg("网络繁忙,请重试!");
			 flag="失败";
		}finally{
			LogUtil.insertLog(LogActionTypes.UPDATE, flag, "用户信息", "", "修改用户");
		}
		this.renderJSON(result);
	}

	/**
	 * 修改密码
	 */
	@Action(value = "passwordUpdate")
	public void passwordUpdate() {
		String flag="成功";
		try {
			String password = this.getParameter("txtPassword");
		//	System.out.println("password=" + password);
			String MD5Str =CsEncodeUtils.Encrypt(password);
			//String MD5Str = MD5Util.getMD5String(password);
			Map<String, Object> mapParam = new HashMap<String, Object>();
			SessionUser user = UserContext.getLoginUser();
			user.setPassword(MD5Str);
			mapParam.put("ID", user.getUserID());
			mapParam.put("Password", MD5Str);
			userServices.updatePassword(mapParam);
			this.renderText("true");
		} catch (Exception e) {
			log.error("更改用户密码失败!" + e.getMessage());
			flag="失败";
			this.renderText("false");
		}finally{
			LogUtil.insertLog(LogActionTypes.INSERT, flag, "用户信息", "", "修改用户");
		}
	}
	
	/**
	 * 检查当前创建的用户所在企业是否已经存在企业管理员
	 */
	@Action(value="checkWorkUnitAdmin")
	public void checkWorkUnitAdmin(){
		String flag = "true";
		try {
			SessionUser user = UserContext.getLoginUser();
			//if("admin".equals(user.getUserName())){
				String workUnitId = this.getParameter("WorkUnitID");
				HashMap<String,Object> map = new HashMap<String,Object>();
				map.put("id", workUnitId);
				WorkUnit workUnit = ibatisServices.queryForObject(WorkUnit.class, "getWorkUnitById", map);
				if(workUnit!=null){
					if(workUnit.getAdminUserId()!=null && workUnit.getAdminUserId().length()>0){
						flag = "false";
					}
				}
			//}			
		} catch (Exception e) {
			log.error(e.getMessage());
			flag = "false";
		}
		this.renderText(flag);
	}
	
	/**
	 * 检查密码
	 */
	@Action(value="checkUserPassword")
	public void checkUserPassword(){
		try{
		String password = this.getParameter("txtOddPassword");
		SessionUser user = UserContext.getLoginUser();
		
		if(CsEncodeUtils.Encrypt(password).equalsIgnoreCase(user.getPassword())){
		//if(MD5Util.getMD5String(password).equalsIgnoreCase(user.getPassword())){
			this.renderText("true");
		}else{
			this.renderText("false");
		}
		}catch(Exception e){
			log.error(e.getMessage());
		}
	}
	/**
	 * 验证名称是否存在
	 */
	@Action(value = "checkUserName")
	public void checkUserName() {
		try {
			String id = getParameter("id");
			String name = getParameter("name");			
			
	        Map<String,Object> paramMap = new HashMap<String,Object>();
	        paramMap.put("id", id);
			paramMap.put("name", name);
			
			List<HashMap>  list = new ArrayList<HashMap>();
			HashMap mapUser =userServices.getPubUserByName(paramMap);
			Result result = new Result();
			
			if(mapUser!=null && mapUser.size()>0){
				list.add(mapUser);
				result.setCode(1);				
				result.setMsg("登录名已存在！");
			}else{
				result.setCode(1);
			}
			result.setData(list.size());
			this.renderJSON(result);
		}catch (Exception e) {
			log.error(e.getMessage());
		}
	}
	/**
	 * 获取权限列表
	 */
	@SuppressWarnings("unchecked")
	@Action(value="getRoles")
	public void getRoles(){
//		String userId = getParameter("id");
//		HashMap paramMap = new HashMap();
//		paramMap.put("userId", userId);
//		try{
//			List<Map> roleList = userServices.getRolesForList("getRolesAssign",paramMap,new Random().nextLong());
//			Result result = new Result();
//			result.setData(roleList);
//			result.setCode(0);
//			this.renderJSON(result);
//		}catch(Exception e){
//			e.printStackTrace();
//		}
		String userId = getParameter("id");
		HashMap params = new HashMap();
		SessionUser user = UserContext.getLoginUser();
		
		//超级管理员
		if(UserContext.isBsRootUser()){
			params.put("IsSuperUser","1");
			params.put("userIds",userId);
		} 
		//企业管理员
		else if(user != null&&user.isWorkUnitSuperAdmin()){
			params.put("IsSuperUser","2");
			params.put("userId",user.getUserID());
			params.put("userIds",userId);
			
		}//普通用户
		else{
			params.put("IsSuperUser","3");
			params.put("userId",user.getUserID());
			params.put("userIds",userId);
		}
		List<Map> roleList = userServices.getRolesForList("getRolesAssign",params,new Random().nextLong());
		Result result = new Result();
		result.setData(roleList);
		result.setCode(0);
		this.renderJSON(result);
	}
 
	 /**
	  * 分配角色
	  */
	 @Action("assignRole")
	 public void assignRole() {
		 String reValue = "false";
		 String role=getParameter("roleId");
		 String userId = getParameter("userId");	
		 String[] roleIds = role.split("\\|");
		 List<Map<String,Object>> listMap = new ArrayList<Map<String,Object>>();
		 for(int i=0;i<roleIds.length;i++){
			 Map<String,Object> valueMap = new HashMap<String,Object>();
			 valueMap.put("userId",userId);
			 valueMap.put("usergroupId", roleIds[i]);
			 listMap.add(valueMap);
		 }
		 try {
			 HashMap<String,Object> whereMap = new HashMap<String,Object>();
			 whereMap.put("id",userId);
			 ibatisServices.deleteIbatisObject("delUserRole", whereMap);
			 ibatisServices.batchInsertIbatisObject("addUserRole", listMap);
			 this.renderText("true");
		} catch (Exception e) {
			e.printStackTrace();
		}		
		 this.renderText("true");
	 }
	 
	 /**
	 * 查询用户列表分页查询
	 */
	@Action(value = "findUsers")
	public void findUsers() {	
		try {
			Map<String,Object> params = FlexiGridUtil.parseParam(this.getGridParams());
			
			SessionUser user = UserContext.getLoginUser();
			
			params.put("userId",user.getUserID());
			
			
			//超级管理员
			if(UserContext.isBsRootUser()){
				params.put("IsSuperUser","1");
			} 
			//企业管理员
			else if(user != null&&user.isWorkUnitSuperAdmin()){
				params.put("IsSuperUser","2");
				params.put("workunitid",user.getWorkUnitID());
				
			}//普通用户
			else{
				params.put("IsSuperUser","3");
				params.put("createUserId",user.getUserID());
			}
			
			this.renderJSON(JSONUtil.toJson(userServices.getfindUsers(params)));
			LogUtil.insertLog(LogActionTypes.READ, "成功", " 用户管理", "", "查询用户信息");
		} catch (Exception e) {
			LogUtil.insertLog(LogActionTypes.READ, "失败", " 用户管理", "", "查询用户信息");
			e.printStackTrace();
		}
		
		
	}
	/*
	 * 普通用户管理那个里得到用户信息
	 **/
	@Action(value = "getUsers")
	public void getUsers() {
		try {
			Map<String,Object> params = FlexiGridUtil.parseParam(this.getGridParams());
			
			SessionUser user = UserContext.getLoginUser();
			
			params.put("userId",user.getUserID());
			
			
			//超级管理员
			if(UserContext.isBsRootUser()){
				params.put("IsSuperUser","1");
			} 
			//企业管理员
			else if(user != null&&user.isWorkUnitSuperAdmin()){
				params.put("IsSuperUser","2");
				params.put("workunitid",user.getWorkUnitID());
				
			}//普通用户
			else{
				params.put("IsSuperUser","3");
				params.put("createUserId",user.getUserID());
			}
			
			this.renderJSON(JSONUtil.toJson(userServices.getUsers(params)));
			LogUtil.insertLog(LogActionTypes.READ, "成功", " 用户管理", "", "查询用户信息");
		} catch (Exception e) {
			LogUtil.insertLog(LogActionTypes.READ, "失败", " 用户管理", "", "查询用户信息");
			e.printStackTrace();
		}
		
	}
 
	 /**
	  * 查询单个用户
	  */
	 @Action("findUser")
	 public void findUser(){
		try{
			Map<String,Object> map = getParameterMap();
			map.put("nouse", new Random().nextLong());
			HashMap user = ibatisServices.queryForObject(HashMap.class, "findUserById", map);
//			if(user!=null){
//				map.put("id",user.get("workUnitId"));
//				WorkUnit unit = ibatisServices.queryForObject(WorkUnit.class, "getWorkUnitById", map);
//				if(unit.getAdminUserId()!=null && unit.getAdminUserId().length()>0 && unit.getAdminUserId().equals(user.get("ID").toString())){
//					user.put("IsSuperUser",1);
//				}
//			}
			this.renderJSON(user);
		}catch (Exception e){
			log.error("查询单个用户异常,"+e.getMessage());
		}	
	 }

	 /**
	  * 删除用户
	  */
	@Action("deleteUser")
	public void deleteUser() {
		try {
			String ids=String.valueOf(getParameter("id"));
			Map<String,Object> map = new HashMap<String, Object>();
			map.put("id", ids);
			this.ibatisServices.deleteIbatisObject("delUserSQL", map);
			this.ibatisServices.deleteIbatisObject("delUserRole", map);
			String isSuper = getParameter("isSuper");
			long  workUnitId = Long.parseLong(getParameter("WorkUnitID"));
			// 如果被删除的用户是企业管理员，则需要将企业管理员置空
			if("1".equals(isSuper)){
				String id=String.valueOf(getParameter("id"));
			    userServices.setUserId(Long.parseLong(id));
				userServices.updateWorkUnitAdminId(null,workUnitId);
			}
			customMapServices.delPubCustomMapLayer(getParameter("id"));
			
		//ibatisServices.deleteIbatisObject("DelRoleFunctionByRoleIdTA",delMap);
			
			this.renderText("SUCCESS");
		} catch (Exception e) {
			log.error(e.getMessage());
			this.renderText("FAIL");
		}
	} 
 
	 /**
	  * 重置密码
	  */
	 @Action(value = "passwordEdit")
	public void passwordEdit(){
     try {
		String id = getParameter("id");
		String password = getParameter("password");
 
		// 设置修改条件和修改参数
		Map<String,Object> paramMap = new HashMap<String,Object>();		
		paramMap.put("ID", id);
		paramMap.put("Password", CsEncodeUtils.Encrypt(password));
	//	paramMap.put("Password", MD5Util.getMD5String(password));
		
			ibatisServices.updateIbatisObject("passwordUpdateSql", paramMap);
			this.renderJSON("true");
		}catch (Exception e) {
			log.error(e.getMessage());
			this.renderJSON("false");
		}
	} 
	 
	 /**
	  * 设置为企业管理员
	  */
	 @Action(value="setAdmin")
	 public void setSuperAdmin(){
		 //1、根据当前用户ID获取企业信息和当前企业的管理员
		 long id = Long.parseLong(getParameter("id"));
		 long  workUnitId = Long.parseLong(getParameter("WorkUnitID"));
		 String adminState = getParameter("adminState");
		 System.out.println("adminState================="+adminState);
		 try{
			 // 设置为普通管理员
			 if("0".equals(adminState)){
				 userServices.setAdminState(adminState);
				 userServices.setUserId(id);
				 userServices.updateWorkUnitAdminId(null,workUnitId);
				 
//				 userServices.updateUserIsSuper(id, 0);
			 }
			 // 设为企业管理员
			 if("1".equals(adminState)){
				 // 更新企业管理员ID，如果之前存在管理员则返回原管理员ID，否则Null
				 userServices.setAdminState(adminState);
				 userServices.setUserId(id);
				 userServices.updateWorkUnitAdminId(id,workUnitId);
				   //Integer oldUserId = 
				  // 原企业管理员归0
				 // if(oldUserId!=null)userServices.updateUserIsSuper(oldUserId, 0);	
				// 将新的企业管理员置1
			   // userServices.updateUserIsSuper(id, 1);
			 }
			 this.renderJSON("true");
		 }catch(Exception e){
			 log.error("设置为企业管理员异常!"+e.getMessage());
			 this.renderJSON("false");
		 }
	 }
	 
@Action(value="setIsShowHandle")	 
public  void setIsShowHandle(){
	try {
		String isShowHandlestr = getParameter("isShowHandle");
		SessionUser user = UserContext.getLoginUser();
		Long userId=user.getUserID();
		int isShowHandle=Integer.parseInt(isShowHandlestr);
		userServices.updateShowHandle(userId, isShowHandle);
		this.renderText("SUCCESS");
	} catch (Exception e) {
		log.error(e.getMessage());
		this.renderJSON("false");
	}
	
}
	/**
	 * @author zxs
	 *
	 **/
	@Action(value="specialTree")
	public void specialTree(){
		Map<String,Object> map = new HashMap<String,Object>();
		if(!(UserContext.isBsRootUser())){
			map.put("UserId",UserContext.getLoginUserID());
			/*if(UserContext.getLoginUser().isWorkUnitSuperAdmin()){
				map.put("UserId",UserContext.getLoginUserID());
			}*/
		}
		map.put("rolelimt", getParameter("userid"));
		try {
			List<Tree> trees =userServices. buildMenuTree(ibatisServices.queryForList(Map.class, "special", map),"f|");
			Struts2Utils.renderJson(trees);
		} catch (Exception e) {
			e.printStackTrace();
			log.error("个性化报表["+e.getMessage()+"]");
		}	
	}
	/**
	 * @author zxs
	 */
	@Action(value="specialSave")
	public void specialSave(){
	try {
			String id=getParameter("id");
			String roleId;
			Map<String,Object> map =new HashMap<String, Object>();
			map.put("id", id);
			List list=ibatisServices.queryForList(Map.class, "getRoleByuser", map);
			if(list.isEmpty()){
				HashMap user = ibatisServices.queryForObject(HashMap.class, "findUserById",map);
				map.clear();
				map.put("name", user.get("Name")+"角色");
				map.put("abbre",user.get("UserName"));
				map.put("workUnitId", user.get("workUnitId"));
				map.put("status", "0");
				map.put("innerPurviewGroupId", "0");
				map.put("userId", UserContext.getLoginUser().getUserID());
				map.put("createDate",  new Date());
				map.put("isUseDataPurview", "0");
				map.put("privilegeLevelId", "0");
				roleId=ibatisServices.insertIbatisObject("addRoleSQL", map).toString();
				if(Integer.parseInt(roleId)>0){
					map.clear();
					map.put("usergroupId", roleId);
					map.put("userId", id);
					ibatisServices.insertIbatisObject("addUserRole", map);
				}
			}else{
				roleId=((Map)list.get(0)).get("usergroupid").toString();
			}
			String jsonString=userServices.addUserAuth(roleId,getParameter("menu"))==1?"true":"false";
			Tools.writeToOutputStream(jsonString, "新增个性化报表信息json字符串写到输出流", ServletActionContext.getResponse());	
		} catch (Exception e) {
			e.printStackTrace();
			log.error("个性化报表保存错误["+e.getMessage()+"]");
		}
	}
	 
	public List<WorkUnit> getWorkUnitList() {
		return workUnitList;
	}
	
	public void setWorkUnitList(List<WorkUnit> workUnitList) {
		this.workUnitList = workUnitList;
	}
 
}
