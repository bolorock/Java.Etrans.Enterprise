/**
 * FunctionMenuServices.java
 * Create on 2012-2-28上午11:53:26
 * Copyright (c) 2012 by e_trans.
 */
package com.etrans.bubiao.services.sys;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Service;

import com.etrans.bubiao.entities.FunctionMenu;
import com.etrans.bubiao.entities.Menu;
import com.etrans.bubiao.entities.SimpleMenu;
import com.etrans.bubiao.services.IbatisServices;
import com.etrans.bubiao.sys.UserContext;
import com.etrans.common.util.json.JSONUtil;

/**
 * 功能菜单Services
 * 
 * @author Ivan
 * @version 1.0
 */
@Service
public class FunctionMenuServices {
	@Autowired
	private IbatisServices ibatisServices;

	public void setIbatisServices(IbatisServices ibatisServices) {
		this.ibatisServices = ibatisServices;
	}

	/**
	 * 功能描述：查询用户一级菜单
	 * 
	 * @param queryJSON
	 * @author llq
	 * @since Create on 2012-2-7
	 * @version Copyright (c) 2012 by e_trans.
	 * @throws Exception 
	 */
	public List<FunctionMenu> getUserOneMenus(long random) throws Exception {
		List<FunctionMenu> result = null;
		try {
			Map<String, Object> param = new HashMap<String, Object>(); // 查询参数
			if (UserContext.isBsRootUser() || UserContext.getLoginUser().isWorkUnitSuperAdmin()) {
				result = this.ibatisServices.queryForList(FunctionMenu.class,"getAdOneMenuSQL", param);
			} else {
				param.put("userId", UserContext.getLoginUserID());
				result = this.ibatisServices.queryForList(FunctionMenu.class,"getUserOneMenuSQL", param);
			}
			return result;
		} catch (Exception e) {
			throw new Exception("查询用户一级菜单异常【"+e.getMessage()+"】");
		}
	}

	/**
	 * 功能描述：查询用户二级菜单
	 * 
	 * @param queryJSON
	 * @author llq
	 * @since Create on 2012-2-7
	 * @version Copyright (c) 2012 by e_trans.
	 * @throws Exception 
	 */
	public List<FunctionMenu> getUserTwoMenus(String parentId,long params) throws Exception {
		List<FunctionMenu> result = null;
		try {
			Map<String, Object> param = new HashMap<String, Object>(); // 查询参数
			param.put("parentId", parentId);
			if (UserContext.isBsRootUser()|| UserContext.getLoginUser().isWorkUnitSuperAdmin()) {
				result = this.ibatisServices.queryForList(FunctionMenu.class,
						"getAdTwoMenuSQL", param);
			} else {
				param.put("userId", UserContext.getLoginUserID());
				result = this.ibatisServices.queryForList(FunctionMenu.class,
						"getUserTwoMenuSQL", param);
			}
			return result;
		} catch (Exception e) {
			throw new Exception("查询用户二级菜单异常【"+e.getMessage()+"】");
		}
	}
	
	
	/**
	 * 功能描述：查询用户TA权限菜单
	 * @param queryJSON
	 * @author yangzhen
	 * @since Create on 2013-1-10
	 * @version Copyright (c) 2013 by e_trans.
	 * @throws Exception 
	 */
	public List<FunctionMenu> getUserOrRoleMenus(long params) throws Exception {
		List<FunctionMenu> result = null;
		try {
		
		  result = this.ibatisServices.queryForList(FunctionMenu.class,
						"getUserOrRoleMenuSQL");
			
			return result;
		} catch (Exception e) {
			throw new Exception("查询用户TA权限菜单异常【"+e.getMessage()+"】");
		}
	}
	
	/**
	 * 功能描述：查询用户二级菜单【用作TA】
	 * 
	 * @param queryJSON
	 * @author llq
	 * @throws Exception 
	 */
	public List<FunctionMenu> getUserTwoMenusTA(String parentId,long params) throws Exception {
		List<FunctionMenu> result = null;
		try {
			Map<String, Object> param = new HashMap<String, Object>(); // 查询参数
			param.put("parentId", parentId);
			if (UserContext.isBsRootUser()|| UserContext.getLoginUser().isWorkUnitSuperAdmin()) {
				result = this.ibatisServices.queryForList(FunctionMenu.class,
						"getAdTwoMenuTASQL", param);
			} else {
				param.put("userId", UserContext.getLoginUserID());
				result = this.ibatisServices.queryForList(FunctionMenu.class,
						"getUserTwoMenuTASQL", param);
			}
			return result;
		} catch (Exception e) {
			e.printStackTrace();
			throw new Exception("查询用户二级菜单异常[TA]【"+e.getMessage()+"】");
		}
	}

	/**
	 * 功能描述：查询用户三级菜单【用作TA】
	 * 
	 * @param queryJSON
	 * @author llq
	 * @since Create on 2012-2-7
	 * @version Copyright (c) 2012 by e_trans.
	 * @throws Exception 
	 * @throws Exception 
	 */
	public List<HashMap<String,String>> getUserThreeMenusTA(String parentId,long params) throws Exception {
		List<HashMap<String,String>> result = null;
		try {
			Map<String, Object> param = new HashMap<String, Object>(); // 查询参数
			param.put("parentId", parentId);
			if (UserContext.isBsRootUser()|| UserContext.getLoginUser().isWorkUnitSuperAdmin()) {
				result = this.ibatisServices.findIbatisList("getAdThreeMenuTASQL", param);
			} else {
				param.put("userId", UserContext.getLoginUserID());
				result = this.ibatisServices.findIbatisList("getUserThreeMenuTASQL", param);
			}
			return result;
		} catch (Exception e) {
			e.printStackTrace();
			throw new Exception("查询用户三级菜单异常[TA]【"+e.getMessage()+"】");
		}
	}
	
	/**
	 * 功能描述：查询用户三级菜单
	 * 
	 * @param queryJSON
	 * @author llq
	 * @since Create on 2012-2-7
	 * @version Copyright (c) 2012 by e_trans.
	 * @throws Exception 
	 */
	public List<HashMap<String,String>> getUserThreeMenus(String parentId,long params) throws Exception {
		List<HashMap<String,String>> result = null;
		try {
			Map<String, Object> param = new HashMap<String, Object>(); // 查询参数
			param.put("parentId", parentId);

			if (UserContext.isBsRootUser()|| UserContext.getLoginUser().isWorkUnitSuperAdmin()) {
				result = this.ibatisServices.findIbatisList("getAdThreeMenuSQL", param);
			} else {
				param.put("userId", UserContext.getLoginUserID());
				result = this.ibatisServices.findIbatisList("getUserThreeMenuSQL", param);
			}
			return result;
		} catch (Exception e) {
			throw new Exception("查询用户三级菜单异常【"+e.getMessage()+"】");
		}
	}

	/**
	 * 功能描述：查询用户四级菜单
	 * 
	 * @param queryJSON
	 * @author llq
	 * @since Create on 2012-2-7
	 * @version Copyright (c) 2012 by e_trans.
	 * @throws Exception 
	 */
	public List<FunctionMenu> getUserFourMenus(long rondom) throws Exception {
		List<FunctionMenu> result = null;
		try {
			Map<String, Object> param = new HashMap<String, Object>(); // 查询参数			
			if (UserContext.isBsRootUser() || UserContext.getLoginUser().isWorkUnitSuperAdmin()) {
				result = this.ibatisServices.queryForList(FunctionMenu.class,
						"getAdFourMenuSQL", param);
			} else {
				param.put("userId", UserContext.getLoginUserID());
				result = this.ibatisServices.queryForList(FunctionMenu.class,"getUserFourMenuSQL", param);
			}
			return result;
		} catch (Exception e) {
			throw new Exception("查询用户四级菜单异常【"+e.getMessage()+"】");
		}
	}

	/**
	 * 获取用户菜单树
	 * 
	 * @param isSuperUser 是否是超级用户
	 * @param userId  用户Id
	 * @param roleId 角色Id
	 * @return
	 * @throws Exception
	 */
	 public String findUserMenuTree(boolean isSuperUser, Long userId, String roleId) 
			 	throws Exception {
		List<Map> result = null;
		if (isSuperUser) {
			result = findMenusByParent(0);
		} else {
			Map<String, Object> param = new HashMap<String, Object>();
			param.put("userId", userId);
			result = ibatisServices.queryForList(Map.class, "findUserLevelOneMenu", param);
		}
		return JSONUtil.toJson(result);
	}

	/**
	 * 获取二级菜单
	 * 
	 * @param parentId
	 *            父ID
	 * @param roleId
	 *            角色ID
	 * @return
	 * @throws Exception
	 */
	 public String findLevelTwoMenu4Tree(long parentId, String roleId)
	 throws Exception {
	
	 List<SimpleMenu> menus = null;
	
	 List<Map> parentMenus = findMenusByParent((parentId));
	
	 List<Map> menus4Role = findMenusByRoleId(roleId);
	
	 if (parentMenus != null) {
	 menus = new ArrayList<SimpleMenu>(parentMenus.size());
	 for (Map<String, Object> pMenu : parentMenus) {
	
	 SimpleMenu sm = new SimpleMenu();
	
	 String pID = pMenu.get(Menu.ID).toString();
	 sm.setId(pID);
	 sm.setMenuName(pMenu.get(Menu.FUNCTION_NAME).toString());
	 sm.setChilds(parseMenu(findMenusByParent(Long.parseLong(pID)),menus4Role));
	 menus.add(sm);
	 }
	
	 }
	
	 String json = JSONUtil.toJson(menus);
	
	 return json;
	
	 }

	/**
	 * 解析 List<Map<String, Object >> 为 List<SimpleMenu>
	 * 
	 * @param parentMenus
	 * @param parentMenus
	 *            该角色已分配的菜单
	 * @return
	 */
	private List<SimpleMenu> parseMenu(List<Map> parentMenus,
			List<Map> menus4Role) {
		List<SimpleMenu> menus = null;

		if (parentMenus != null) {
			menus = new ArrayList<SimpleMenu>(parentMenus.size());
			if (null == menus4Role) {
				menus4Role = new ArrayList<Map>(1);
			}

			for (Map<String, Object> pMenu : parentMenus) {

				SimpleMenu sm = new SimpleMenu();

				String pID = pMenu.get(Menu.ID).toString();
				sm.setId(pID);
				sm.setMenuName(pMenu.get(Menu.FUNCTION_NAME).toString());

				for (Map<String, Object> rMenu : menus4Role) {
					String rmID = rMenu.get(Menu.ID).toString();
					if (pID.equals(rmID)) {
						sm.setChecked(true);
						menus4Role.remove(rMenu);
						break;
					}
				}

				menus.add(sm);
			}
		}

		return menus;
	}

	
	/**
	 * 
	 * @param statement
	 * @param param
	 * @return
	 * @throws Exception
	 */
	public String buildJsonTree(List<Map> resultMap,String[] fileds,String idStarStr) 
			throws Exception {
		StringBuilder jsonString = new StringBuilder();  		
			jsonString.append("[");
			try {
				if(resultMap!=null && resultMap.size()>0){
					for (Map function : resultMap) {
						jsonString.append("{");
						jsonString.append("\"id\":\"" +idStarStr+function.get(fileds[0])+ "\",");
						jsonString.append("\"attributes\":[{\"kind\":" +-1+ "}],");
						jsonString.append("\"text\":\""+ function.get(fileds[2]) + "\",");
						jsonString.append("\"state\":\"closed\"");
						jsonString.append("}");
						jsonString.append(",");
					}
					jsonString.deleteCharAt(jsonString.toString().length() - 1);
				}
			} catch (Exception e) {
				throw new Exception(e.getMessage());
			}
			jsonString.append("]");
		return jsonString.toString();
	}
	
	/**
	 * 根据父菜单查找子菜单
	 * 
	 * @param parentFuncId
	 * @return
	 * @throws Exception 
	 */
	 public List<Map> findMenusByParent(long parentFuncId) throws Exception {	
		 try {	
			 Map<String, Object> params = new HashMap<String, Object>(1);
			 params.put("parentFuncId", parentFuncId);
			 return ibatisServices.queryForList(Map.class, "findMenusByParent", params);		
		 } catch (Exception e) {
			 throw new Exception(e.getMessage());
		 }
	 }

	/**
	 * 根据角色ID查找菜单
	 * 
	 * @param roleId
	 * @return
	 * @throws Exception
	 */
	 public List<Map> findMenusByRoleId(String roleId)
	 throws Exception {
		try {
			Map<String, Object> param = new HashMap<String, Object>();
			param.put("roleId", roleId);
			return ibatisServices.queryForList(Map.class,
					"findMenusByRoleId", param);
		} catch (Exception e) {
			throw new Exception(e.getMessage());
		}
	 }

	/**
	 * 分配权限菜单给角色
	 * 
	 * @param roleId
	 *            角色ID
	 * @param menuIds
	 *            菜单ID集合， 用 “,” 隔开
	 * @throws Exception
	 */
	public void updateMenu4Role(String roleId, String menuIds) throws Exception {

		if (StringUtils.isEmpty(menuIds) || StringUtils.isEmpty(roleId))
			return;
		String[] ids = StringUtils.split(menuIds, ",");
		if (ids != null) {
			for (String id : ids) {
				Map<String, Object> paramMap = new HashMap<String, Object>(2);
				paramMap.put("RoleID", roleId);
				paramMap.put("FunctionID", id);
				ibatisServices.insertIbatisObject("addRoleFunction", paramMap);
			}
			HashMap<String, Object> delParams = new HashMap<String, Object>(1);
			delParams.put("id", roleId);
			ibatisServices.deleteIbatisObject("DelRoleFunction", delParams);
		}
	}
	
	 public String assignRoleFunction(Map<String,Object> paramMap) throws  Exception{
		 return JSONUtil.toJson(ibatisServices.queryForList(HashMap.class, "assignRoleFunctionProSQL", paramMap));
	 }
	/**
	 * 
	 * @param id
	 * @return
	 * @throws Exception
	 */
	public String getMenuTreeJson(String id,long params) throws Exception {
		StringBuilder jsonString = new StringBuilder();  
		jsonString.append("[");
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("id", id);
		try {

			List<FunctionMenu> menus = ibatisServices.queryForList(FunctionMenu.class, "getMenuTreeSQL", param);
			if (menus != null && menus.size() > 0) {
				for (FunctionMenu menu : menus) {
					jsonString.append("{");
					jsonString.append("\"id\":" + menu.getFunctionId() + ",");
					jsonString.append("\"text\":\""+ menu.getFunctionName().trim() + "\",");
					jsonString.append("\"state\":\"closed\"");
					jsonString.append("}");
					jsonString.append(",");
				}
				jsonString.deleteCharAt(jsonString.toString().length() - 1);
			}
		} catch (Exception e) {
			throw new Exception(e.getMessage());
		}
		jsonString.append("]");
		return jsonString.toString();
	}

	/**
	 * 由ID查询菜单详细
	 * 
	 * @param whereMap
	 * @return
	 * @throws Exception
	 */
	public String getMenuById(Map<String, Object> whereMap) throws Exception {
		Map<String, Object> map = new HashMap<String, Object>();
		FunctionMenu data = this.ibatisServices.queryForObject(FunctionMenu.class, "getMenuByIdSQL", whereMap);
		if (data != null) {
			map.put("parentFuncId", data.getParentFuncId());
			map.put("functionName", data.getFunctionName());
			map.put("functionCode", data.getFunctionCode());
			map.put("functionType", data.getFunctionType());
			map.put("ordering", data.getOrdering());
			map.put("state", data.getState());
			map.put("functionImg", ("".equals(data.getFunctionImg()) || null == data.getFunctionImg()) ? "" : data.getFunctionImg());
			map.put("remark", ("".equals(data.getRemark()) || null == data.getRemark()) ? "" : data.getRemark());
			String[] assemblyNames = null;
			String assemblyNameStr = (String) data.getAssemblyName();
			if (!("".equals(assemblyNameStr) || null == assemblyNameStr)) {
				assemblyNames = assemblyNameStr.split("\\|");
			}
			map.put("assemblyNames", assemblyNames);
		}
		return JSONUtil.toJson(map);
	}
	
	/**
	 * 查询子节点个数
	 * 
	 * @param functionId
	 * @return Long 节点数
	 * @throws Exception
	 */
	public Long findFuncMenuCountByParentId(String functionId)throws Exception{
		Long count = 0l;
		Map<String, Object> whereMap = new HashMap<String, Object>();
		whereMap.put("functionId", functionId);
		// 此句代码与(Long)ibatisServices.queryForObject等效
		try{
			count = ibatisServices.findIbatisListCount("findParentFuncMenuCountSQL",whereMap);
		}catch(DataAccessException e){
			throw new Exception("Ibatis 查询异常:【"+e.getMessage()+"】");
		}
		return count;
	}

	/**
	 * 删除功能菜单
	 * 
	 * @param functionId
	 * @throws Exception
	 */
	public void deleteFunctionMenus(String functionId) throws Exception {
		Map<String, Object> whereMap = new HashMap<String, Object>();
		whereMap.put("ID", functionId);
		this.ibatisServices.deleteIbatisObject("delFunctionMenuSQL", whereMap);
	}

	 /**
	 * 修改菜单
	 * @param setParam
	 * @param whereParam
	 * @return
	 * @throws Exception
	 */
	 public int updateFunctionsMenu(Map<String,Object> setParam) throws Exception {
		 return this.ibatisServices.updateIbatisObject("updateFunctionsMenuSQL", setParam);
	 }
	
	 /**
	 * 创建功能菜单
	 * @param paramMap
	 * @return
	 * @throws Exception
	 */
	 public int createFunctionsMenu(Map<String,Object> paramMap) throws  Exception {
		 Integer effectRow = 0;
		 try {
			 effectRow = (Integer) this.ibatisServices.insertIbatisObject("addFunctionMenuSQL", paramMap);
			 effectRow = 1;
		} catch (Exception e) {
			effectRow=-1;
			throw new Exception("新增功能菜单失败!"+e.getMessage());
		}
		 return effectRow;
	 }
	
	 /**
	 * 取出用户权限功能
	 * @throws Exception 
	 */
	public List<Map<String, Object>> getUserRoleFunction(String roleId,
			long random) throws Exception {
		try {
			return getFunctions(getCurrentUserRoleFunction(),
					getForRoleFunction(roleId));
		} catch (Exception e) {
			throw new Exception(e.getMessage());
		}
	}
	
	 /**
	 * 返回当前用户所有权限功能
	 * @throws Exception 
	 */
	 public List<Map<String,Object>> getCurrentUserRoleFunction() throws Exception{	
		 List<Map<String, Object>> result = null;
		try {
			HashMap param = new HashMap();
			if (UserContext.isBsRootUser()) {
				result = ibatisServices.queryForList(HashMap.class, "configRoleFunctionAdSQL", param);
			} else {
				param.put("userId", UserContext.getLoginUserID());
				result = ibatisServices.queryForList(HashMap.class, "configRoleFunctionUserSQL", param);				
			}			
		} catch (Exception e) {
			throw new Exception("返回当前用户所有权限功能异常!异常["+e.getMessage()+"]");
		}
		return result;
	 }
	
	 /**
	 * 取出已分配些角色的权限功能
	 * @throws Exception 
	 */
	public List<Map<String, Object>> getForRoleFunction(String roleId)
			throws Exception {
		List<Map<String, Object>> result = null;
		try {
			HashMap param = new HashMap();
			param.put("roleId", roleId);
			result = ibatisServices.queryForList(HashMap.class,"findFunctionByRoleIdSQL", param);
		} catch (Exception e) {
			throw new Exception("取出已分配些角色的权限功能【" + e.getMessage() + "】");
		}
		return result;
	}
	

	/**
	 * 获取组装后菜单LIST
	 * 
	 * @param list
	 * @return
	 */
	public List<Map<String, Object>> getFunctions(
			List<Map<String, Object>> list, List<Map<String, Object>> selList) {

		if (list == null || list.size() == 0)
			return null;

		List<Map<String, Object>> resultList = new ArrayList<Map<String, Object>>();

		try {
			for (Map<String, Object> imap : list) {

				String topFunId = (String) imap.get("topFunId");
				String topFunName = (String) imap.get("topFunName");
				String parentFuncId = (String) imap.get("parentFuncId");
				String parentFuncName = (String) imap.get("parentFuncName");
				String functionId = (String) imap.get("functionId");
				String functionName = (String) imap.get("functionName");
				String functionCode = (String) imap.get("functionCode");

				Map<String, Object> fourMap = new HashMap<String, Object>();
				fourMap.put("id", functionId);
				fourMap.put("name", functionName);
				fourMap.put("code", functionCode);

				boolean isCheckItem = false;

				// 已分配四级功能
				Map<String, Object> item = getItemById(selList, functionId);
				if (item != null) {
					fourMap.put("checkState", true);
					isCheckItem = true;
				} else {
					fourMap.put("checkState", false);
				}

				// 取出第一级菜单
				Map<String, Object> topItem = getItemById(resultList, topFunId);

				// 一级菜单已存在
				if (topItem != null) {

					// 设置第一级菜单id,name,size
					Integer size = (Integer) topItem.get("size");
					topItem.put("size", size + 1);

					// 设置第一级菜单已分配四级菜单个数
					Integer checkItemSize = (Integer) topItem
							.get("checkItemSize");
					topItem.put("checkItemSize",
							isCheckItem ? checkItemSize + 1 : checkItemSize);

					// 第一级菜单已存在第三级菜单列表
					List<Map<String, Object>> threeList = (List<Map<String, Object>>) topItem
							.get("resources");
					Map<String, Object> threeMap = getItemById(threeList,
							parentFuncId);

					// 三级菜单已存在本条记录的对应的三级菜单
					if (threeMap != null) {

						// 三级菜单存在四级菜单，增加四级菜单
						List<Map<String, Object>> fourList = (List<Map<String, Object>>) threeMap
								.get("children");
						fourList.add(fourMap);
					} else { // 三级菜单不存在本条记录的对应的三级菜单,新增三级菜单及四级菜单

						threeMap = new HashMap<String, Object>();
						threeMap.put("id", parentFuncId);
						threeMap.put("name", parentFuncName);

						List<Map<String, Object>> fourList = new ArrayList<Map<String, Object>>();
						fourList.add(fourMap);
						threeMap.put("children", fourList);

						threeList.add(threeMap);

						topItem.put("resources", threeList);
					}

				} else { // 一级菜单不存在，新建一级、三级、四级菜单
					topItem = new HashMap<String, Object>();

					topItem.put("id", topFunId);
					topItem.put("name", topFunName);
					topItem.put("size", 1);
					topItem.put("checkItemSize", isCheckItem ? 1 : 0);

					List<Map<String, Object>> threeList = new ArrayList<Map<String, Object>>();
					Map<String, Object> threeMap = new HashMap<String, Object>();
					threeMap.put("id", parentFuncId);
					threeMap.put("name", parentFuncName);
					List<Map<String, Object>> fourList = new ArrayList<Map<String, Object>>();
					fourList.add(fourMap);
					threeMap.put("children", fourList);

					threeList.add(threeMap);
					topItem.put("resources", threeList);

					resultList.add(topItem);
				}
			}
		} catch (Exception e) {
			e.printStackTrace();
			resultList = null;
		}

		return resultList;

	}

	/**
	 * 通过菜单ID获取菜单元素
	 * 
	 * @param list
	 * @param id
	 * @return
	 */
	public static Map<String, Object> getItemById(
			List<Map<String, Object>> list, String id) throws Exception {

		if (list != null && list.size() > 0 && id != null) {
			for (Map<String, Object> item : list) {
				String itemId = (String) item.get("id");
				if (itemId != null && itemId.equals(id)) {
					return item;
				}
			}
		}

		return null;
	}
}
