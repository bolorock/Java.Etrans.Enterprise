/**
 * UserServices.java
 * Create on 2012-2-10下午02:43:49
 * Copyright (c) 2012 by e_trans.
 */
package com.etrans.bubiao.services.sys;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.etrans.bubiao.entities.PageBean;
import com.etrans.bubiao.entities.Tree;
import com.etrans.bubiao.entities.User;
import com.etrans.bubiao.services.IbatisServices;
import com.etrans.common.util.ParamKey;

/**
 * 用户信息管理Services
 * 
 * @author Ivan
 * @version 1.0
 */
@Service
public class UserServices {

	@Autowired
	private IbatisServices ibatisServices;
	
	private String adminState;
	
	private long userId;

	public long getUserId() {
		return userId;
	}

	public void setUserId(long userId) {
		this.userId = userId;
	}

	public String getAdminState() {
		return adminState;
	}

	public void setAdminState(String adminState) {
		this.adminState = adminState;
	}

	/**
	 * setIbatisServices
	 * 
	 * @param ibatisServices
	 */
	public void setIbatisServices(IbatisServices ibatisServices) {
		this.ibatisServices = ibatisServices;
	}

	/**
	 * 编辑用户信息
	 * 
	 * @throws Exception
	 */
	public void editUser(Map<String, Object> param) throws Exception {
		this.ibatisServices.updateIbatisObject("Pub_User", param);
	}

	/**
	 * 验证名称是否存在
	 * 
	 * @param whereMap
	 * @return
	 * @throws Exception
	 */
	public HashMap getPubUserByName(Map<String, Object> paramMap) throws Exception {
		return this.ibatisServices.queryForObject(HashMap.class, "getPubUserByNameSQL", paramMap );
	}

	/**
	 * 获取权限列表
	 * 
	 * @param statementId
	 * @param paramMap
	 * @param random
	 * @return
	 */
	@SuppressWarnings("unchecked")
	public List<Map> getRolesForList(String statementId,HashMap paramMap,long random){
		paramMap.put("nouseId", random);
		return this.ibatisServices.queryForList(HashMap.class,statementId,paramMap);
	}
	/**
	 * 根据userId判断是否超级管理员
	 */
	@SuppressWarnings("unchecked")
	public List<Map<String,Object>> findIsSuperUser(Map params){
		return this.ibatisServices.queryForList(Map.class, "findIsSuperUserSQL",params);
	}
	
	/**
	 * 根据userId判断是否企业管理员
	 */
	@SuppressWarnings("unchecked")
	public List<Map<String,Object>> findIsAdminUser(Map params){
		return this.ibatisServices.queryForList(Map.class, "findIsAdminUserSQL",params);
	}
	
	/**
	 * 分页查询信息,返回表格数据
	 * @param queryJSON
	 * @return
	 * @throws Exception
	 */
	public PageBean getfindUsers(Map<String,Object> params) throws Exception {
		
		PageBean pageBean = new PageBean();
		
		List<Map<String,Object>> simCardList = this.findUsers(params);
		Long total = findUsersCount(params);
		
		pageBean.setPage((Integer)params.get(ParamKey.PAGE));
		pageBean.setRows(simCardList);
		pageBean.setTotal(total);
		
		return pageBean;
		
	}
	
 public  PageBean getUsers(Map<String,Object> params) throws Exception {
	 	PageBean pageBean = new PageBean();
		
		List<Map<String,Object>> simCardList = this.getUserss(params);
		Long total = getUsersCount(params);
		
		pageBean.setPage((Integer)params.get(ParamKey.PAGE));
		pageBean.setRows(simCardList);
		pageBean.setTotal(total);
		
		return pageBean;
		
	}
 public Long getUsersCount(Map<String,Object> params) throws Exception {
		return this.ibatisServices.findIbatisListCount("getUsersCount", params);
		
	}
  public List<Map<String,Object>> getUserss(Map params) throws Exception {
		
		List<Map<String,Object>> List = this.ibatisServices.queryForList(Map.class, "getUsers",params);
		return List;
		
	}
	/**
	 * 分页查询信息
	 * @param params
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings("rawtypes")
	public List<Map<String,Object>> findUsers(Map params) throws Exception {
		
		List<Map<String,Object>> List = this.ibatisServices.queryForList(Map.class, "findUsers",params);
		return List;
		
	}
	
	/**
	 * 查询数量
	 * @param params
	 * @return
	 * @throws Exception
	 */
	public Long findUsersCount(Map<String,Object> params) throws Exception {
		return this.ibatisServices.findIbatisListCount("findUsersCount", params);
		
	}
	
	

	/**
	 * 根据用户ID查找用户
	 * 
	 * @param id
	 * @return User
	 * @throws Exception
	 */
	public User findUserById(String id)throws Exception{
		return ibatisServices.queryForObject(User.class, "findUserByIdSQL", id);
	}
	
	/**
	 * 修改用户密码
	 * 
	 * @param param
	 * @throws Exception
	 */
	public void updatePassword(Map<String,Object> param)throws Exception{
		this.ibatisServices.updateIbatisObject("passwordUpdateSql", param);
	}
	
	/**
	 * 更新企业管理员
	 * 1、获取原企业管理员
	 * 2、更新企业管理员ID，同步更新用户超级管理员字段
	 * @param userId
	 * @throws Exception 
	 */
	@SuppressWarnings("unchecked")
	public Integer updateWorkUnitAdminId(Long userId,Long workUnitId) throws Exception{
		HashMap<String,Object> map = new HashMap<String, Object>();
		Integer oldUserAdminId = 0;
	
		
		map.put("id", workUnitId);
		
		
		HashMap<String,Object> valueMap = ibatisServices.queryForObject(HashMap.class, "getWorkUnitByIdSQL", map);
		if(valueMap!=null){
			if("0".equals(getAdminState())){
				map.put("userId", getUserId());
				List<Map> List = this.ibatisServices.queryForList(Map.class, "getCreateUserIdSQL",map);//取到当前要设置的用户的Id 所对应的createUserId
				if(List.size()>0){
					if("1".equals(List.get(0).get("createUserId").toString())){
						map.put("createUserId", getUserId());
					}else{
						map.put("createUserId", List.get(0).get("createUserId").toString());
					}
					ibatisServices.updateIbatisObject("updateCreateUserId_1", map);
					ibatisServices.updateIbatisObject("updateUserAdminId", map);
					ibatisServices.updateIbatisObject("updateCreateUserId_x", map);
				}
				map.put("userId", null);
				if(valueMap.get("AdminUserID")!=null){
					map.put("flag", "0");
					ibatisServices.updateIbatisObject("updateWorkUnitAdminId", map);
				}else{
					map.put("flag", "1");
					ibatisServices.updateIbatisObject("updateWorkUnitAdminId", map);
					oldUserAdminId = Integer.valueOf(String.valueOf(getUserId()));
				}
			}
			if("1".equals(getAdminState())){
				map.put("userId", getUserId());
				List<Map> List = this.ibatisServices.queryForList(Map.class, "getCreateUserIdSQL",map);//取到当前要设置的用户的Id 所对应的createUserId
				if(List.size()>0){
					map.put("createUserId", List.get(0).get("createUserId").toString());
					ibatisServices.updateIbatisObject("updateCreateUserId_1", map);
					ibatisServices.updateIbatisObject("updateUserAdminId", map);
					ibatisServices.updateIbatisObject("updateCreateUserId_x", map);
				}
				if(valueMap.get("AdminUserID")!=null){
					map.put("flag", "0");// 如果是‘0’ 设置 adminUserId =null
					ibatisServices.updateIbatisObject("updateWorkUnitAdminId", map);
				}else{
					map.put("flag", "1");//如果是‘1’ 设置 adminUserId =userId
					ibatisServices.updateIbatisObject("updateWorkUnitAdminId", map);
					oldUserAdminId = Integer.valueOf(String.valueOf(getUserId()));
				}
			}
			
			map.put("userId", getUserId());
			if(valueMap.get("AdminUserID")!=null){
				map.put("flag", "0");
				ibatisServices.updateIbatisObject("updateWorkUnitAdminId", map);
			}else{
				map.put("flag", "1");
				ibatisServices.updateIbatisObject("updateWorkUnitAdminId", map);
				oldUserAdminId = Integer.valueOf(String.valueOf(getUserId()));
			}
		}else{
			throw new Exception("没有查询到所属企业!请核对企业编号是否存在!企业编号:"+workUnitId);
		}
		return oldUserAdminId;
	}
	
	/**
	 * 更新用户超级管理员标志
	 * 
	 * @param userId
	 * @param isSuper
	 * @return effectRow
	 */
	public int updateUserIsSuper(long userId,int isSuper){
		HashMap<String,Object> map = new HashMap<String, Object>();
		map.put("userId", userId);
		map.put("IsSuperUser", isSuper);
		return ibatisServices.updateIbatisObject("updateUserIsSuperUser", map);
	}
	
	/**
	 * 更新用是否显示操作标志
	 * 
	 * @param userId
	 * @param IsShowHandle
	 * @return effectRow
	 */
	public int updateShowHandle(long userId,int isShowHandle){
		HashMap<String,Object> map = new HashMap<String, Object>();
		map.put("userId", userId);
		map.put("IsShowHandle", isShowHandle);
		return ibatisServices.updateIbatisObject("updateUserIsShowHandle", map);
	}
	/**
	 * @author zxs
	 *@see传入的le（map)不能为0，
	 * 假如：le >le-1 那么 le为子级，le-1为父级
	 * 
	 **/
	public List<Tree >buildMenuTree(List<Map> list,String extend){
		if(list.isEmpty()){
			return new ArrayList<Tree>();
		}
		Map<Integer, List<Tree>> mapLe=new HashMap<Integer ,List<Tree>>();
		Tree tree;
		List<Tree> trees=new ArrayList<Tree>();
		int lastLevel=0;
		java.util.Set<String> set = new java.util.TreeSet<String>();
		for(int i=0 ;i<list.size();i++){
			Map mapNode=list.get(i);
			String id=mapNode.get("ID").toString().trim();
			if(!set.add(id)) continue;
			String text=mapNode.get("function_name").toString().trim();
			String pid=mapNode.get("parent_func_id").toString().trim();
			String level=mapNode.get("le").toString().trim();
			Object check=mapNode.get("FunctionID");
			tree=new Tree();
			tree.setId(id);
			tree.setText(text);
			tree.setState("closed");
			tree.setPid(pid);
			if(check!=null){
				tree.setChecked(true);
			}
			if(Integer.parseInt(level)==lastLevel||lastLevel==0){
				trees.add(tree);
			}else{
				mapLe.put(lastLevel, trees);
				trees=new ArrayList<Tree>();
				trees.add(tree);
			}
			lastLevel=Integer.parseInt(level);
		}
		if(!mapLe.containsKey(lastLevel)){
			mapLe.put(lastLevel, trees);
		}
		if(mapLe.size()==1){
			for(int key:mapLe.keySet()){return mapLe.get(key);}
		}
		int min=0,max=0;
		for(int key:mapLe.keySet()){
			if(min==0) min=key;
			if(max==0) max=key;
			if(key>max){
				max=key;
			}
			if(min>key){
				min=key;
			}
		}
		List<Tree> tempTree=new ArrayList<Tree>();
		for(int i=max;i>=min;i--){
			List<Tree> t1=tempTree;
			List<Tree> t2=mapLe.get(i);
			if(tempTree.isEmpty()){
				t1.addAll(mapLe.get(i));
				t2=	mapLe.get(--i);
			}
			String pid,id;
			for(int j=0;j<t2.size();j++){//设置关联
				Tree p=t2.get(j);
				id=p.getId();
				for(int m=0;m<t1.size();m++){
					Tree c=t1.get(m);
					pid=c.getPid();
					if(i==max-1){
						if(!c.getId().contains(extend))
						c.setId(extend+c.getId());
						c.setState("open");
						c.setChildren(null);	
					}
					if(pid.equals(id)){
						p.getChildren().add(c);
						t1.remove(m);
						--m;
					}else{
						continue;
					}
				}
			   if(p.getChildren()==null) continue;
			   if(p.getChildren().isEmpty()){
				   if(!p.getId().contains(extend))
					p.setId(extend+p.getId());
					p.setState("open");
					p.setChildren(null);	
				}
			}
	   if(max<0) t2.addAll(t1);
		tempTree.removeAll(tempTree);
		tempTree.addAll(t2);
		}
		return tempTree ;
	}
	/**
	 * 新增用户个性化报表
	 * 
	 * @return
	 * @throws Exception
	 */
	public int addUserAuth(String roleId, String auths) throws Exception {
		try {
			if (roleId != null) {
				Map<String, Object> delMap = new HashMap<String, Object>();
				delMap.put("id", roleId);
				ibatisServices.deleteIbatisObject("DelRoleFunctionByRoleIdTA",delMap);
			}
			if (auths != null && auths.length() > 0) {
				String[] ids = StringUtils.split(auths, ",");
				List<Map<String, Object>> functionRoleMap = new ArrayList<Map<String, Object>>();
				for (String id : ids) {
					Map<String, Object> valueMap = new HashMap<String, Object>();
					if (id.contains("f")) {
						valueMap.put("roleType", 2);
						valueMap.put("RoleID", roleId);
						valueMap.put("FunctionID", id.split("\\|")[1]);
						functionRoleMap.add(valueMap);
					}else continue;
					
				}
				if (functionRoleMap.size() > 0) {
					ibatisServices.batchInsertIbatisObject("addRoleFunction",
							functionRoleMap);
				}
				
				return 1;
			}
			return 0;
		} catch (Exception e) {
			throw new Exception("新增关系异常" + e.getMessage());
		}
	}
}
