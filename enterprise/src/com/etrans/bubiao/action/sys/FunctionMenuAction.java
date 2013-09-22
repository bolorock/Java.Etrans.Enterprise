/**
 * Create on 2012-2-9上午10:52:27
 * Copyright (c) 2012 by e_trans.
 */
package com.etrans.bubiao.action.sys;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Random;

import org.apache.commons.lang.StringUtils;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.apache.struts2.convention.annotation.Action;
import org.apache.struts2.convention.annotation.Namespace;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;

import com.etrans.bubiao.action.BaseAction;
import com.etrans.bubiao.action.sys.log.LogActionTypes;
import com.etrans.bubiao.action.sys.log.LogUtil;
import com.etrans.bubiao.entities.FunctionMenu;
import com.etrans.bubiao.services.sys.FunctionMenuServices;

/**
 * 功能描述：查询菜单
 * 
 * @author llq
 * @since Create on 2012-2-7
 * @version Copyright (c) 2012 by e_trans.
 */
@Controller
@Namespace("/sys")
@Scope("prototype")
public class FunctionMenuAction extends BaseAction {

	private static final long serialVersionUID = 3595832987485843371L;
	protected Logger log = LogManager.getLogger(this.getClass().getName());
	private String parentId;
	@Autowired
	private FunctionMenuServices functionMenuServices;

	/**
	 * 一级菜单
	 */
	private List<FunctionMenu> userOneLevelList;

	/**
	 * 二级菜单
	 */
	private List<FunctionMenu> userTwoLevelList;

	/**
	 * 三级菜单
	 */
	private List<HashMap<String, String>> userThreeLevelList;
	
	/**
	 * 三级菜单
	 */	
	private  List<HashMap<String, String>> userThreeLevelList2;

 
 

	public List<HashMap<String, String>> getUserThreeLevelList2() {
		return userThreeLevelList2;
	}

	public void setUserThreeLevelList2(
			List<HashMap<String, String>> userThreeLevelList2) {
		this.userThreeLevelList2 = userThreeLevelList2;
	}

	/**
	 * 功能描述：查询用户一级菜单
	 * 
	 * @param queryJSON
	 * @param fromPage
	 * @param toPage
	 * @author llq
	 * @since Create on 2012-2-7
	 * @version Copyright (c) 2012 by e_trans.
	 */
	@Action("getUserOneMenus")
	public void getUserOneMenus() {
		try {
			userOneLevelList = functionMenuServices.getUserOneMenus(new Random().nextLong());
			LogUtil.insertLog(LogActionTypes.READ, "成功", "查询菜单", "", "查询用户一级菜单");
		} catch (Exception e) {
			LogUtil.insertLog(LogActionTypes.READ, "失败", "查询菜单", "", "查询用户一级菜单");
			log.error(e.getMessage());
		}
	}

	/**
	 * 功能描述：查询用户二级菜单
	 * 
	 * @param queryJSON
	 * @param fromPage
	 * @param toPage
	 * @author llq
	 * @since Create on 2012-2-7
	 * @version Copyright (c) 2012 by e_trans.
	 */
	@Action("getUserTwoMenus")  
	public void getUserTwoMenus() {
		try {
			userTwoLevelList = functionMenuServices.getUserTwoMenus(parentId,new Random().nextLong());
			LogUtil.insertLog(LogActionTypes.READ, "成功", "查询菜单", "", "查询用户二级菜单");
		} catch (Exception e) {
			LogUtil.insertLog(LogActionTypes.READ, "失败", "查询菜单", "", "查询用户二级菜单");
			log.error(e.getMessage());
		}
	}
	
 	@Action("getUserThreeMenus")
	public void getUserThreeMenus(){
 		try{
 			userThreeLevelList2 = functionMenuServices.getUserThreeMenus(parentId,new Random().nextLong());
 			LogUtil.insertLog(LogActionTypes.READ, "成功", "查询菜单", "", "查询用户三级菜单");
		}catch (Exception e){
			LogUtil.insertLog(LogActionTypes.READ, "失败", "查询菜单", "", "查询用户三级菜单");
		 e.printStackTrace();
		}
	}
	

	/**
	 * 功能描述：查询用户TA权限菜单
	 * 
	 * @param queryJSON
	 * @param fromPage
	 * @param toPage
	 * @author yangzhen
	 * @since Create on 2013-1-10
	 * @version Copyright (c) 2013 by e_trans.
	 */
	@Action("getUserOrRoleMenus")  
	public void getUserOrRoleMenus() {
		try {
			userTwoLevelList = functionMenuServices.getUserOrRoleMenus(new Random().nextLong());
			LogUtil.insertLog(LogActionTypes.READ, "成功", "查询菜单", "", "查询用户TA权限菜单");
		} catch (Exception e) {
			LogUtil.insertLog(LogActionTypes.READ, "失败", "查询菜单", "", "查询用户TA权限菜单");
			log.error(e.getMessage());
		}
	}
	
	/**
	 * 功能描述：查询用户二级菜单【用作TA】
	 */
	@Action("getUserTwoMenusTA")  
	public void getUserTwoMenusTA() {
		try {
			userTwoLevelList = functionMenuServices.getUserTwoMenusTA(parentId,new Random().nextLong());
			LogUtil.insertLog(LogActionTypes.READ, "成功", "查询菜单", "", "查询用户二级菜单【用作TA】");
		} catch (Exception e) {
			LogUtil.insertLog(LogActionTypes.READ, "失败", "查询菜单", "", "查询用户二级菜单【用作TA】");
			log.error(e.getMessage());
		}
	}
	
	/**
	 * 功能描述：查询用户三级菜单【用作TA】
	 */
	@Action("getUserThreeMenusTA")  
	public void getUserThreeMenusTA() {
		try {
			userThreeLevelList = functionMenuServices.getUserThreeMenusTA(parentId,new Random().nextLong());
			LogUtil.insertLog(LogActionTypes.READ, "成功", "查询菜单", "", "查询用户三级菜单【用作TA】");
		} catch (Exception e) {
			LogUtil.insertLog(LogActionTypes.READ, "失败", "查询菜单", "", "查询用户三级菜单【用作TA】");
			log.error(e.getMessage());
		}
	}

	/**
	 * 功能菜单树形
	 */
	@Action(value = "menuTree")
	public void getMenuTreeJson() {

		String id = this.getParameter("id");
		if (id == null)
			id = "0";
		try {			
			this.renderJSON(functionMenuServices.getMenuTreeJson(id, new Random().nextLong()));
			LogUtil.insertLog(LogActionTypes.READ, "成功", "查询菜单", "", "功能菜单树形");
		} catch (Exception e) {
			LogUtil.insertLog(LogActionTypes.READ, "失败", "查询菜单", "", "功能菜单树形");
			e.printStackTrace();
		}
		
	}

	/**
	 * 功能菜单查询BY ID
	 */
	@Action(value = "getMenuById")
	public void getMenuById() {

		String functionId = this.getParameter("functionId");

		if (!StringUtils.isEmpty(functionId)) {
			Map<String, Object> whereMap = new HashMap<String, Object>();
			whereMap.put("id", functionId);
			try {
				this.renderJSON(functionMenuServices.getMenuById(whereMap));
				LogUtil.insertLog(LogActionTypes.READ, "成功", "查询菜单", "", "功能菜单查询BY ID");
			} catch (Exception e) {
				LogUtil.insertLog(LogActionTypes.READ, "失败", "查询菜单", "", "功能菜单查询BY ID");
				e.printStackTrace();
			}
		}
	}


	/**
	 * 删除菜单
	 */
	 @Action(value = "deleteFunctionsMenu")
	public void deleteFunctionsMenu() {
		String functionId = getParameter("functionId");
		String deleFlag = "false";
		try {
			// 判断是否有子菜单
			long childCount = functionMenuServices.findFuncMenuCountByParentId(functionId); 
			if (childCount != 0) {
				this.renderText("请先删除子功能菜单");
				return;
			}
			functionMenuServices.deleteFunctionMenus(functionId);
			LogUtil.insertLog(LogActionTypes.DELETE, "成功", "删除菜单", "", "删除菜单");
			deleFlag = "true";			
		} catch (Exception e) {
			LogUtil.insertLog(LogActionTypes.DELETE, "失败", "删除菜单", "", "删除菜单");
			e.printStackTrace();
		}
		this.renderText(deleFlag);
	}

	/**
	 * 修改菜单
	 */
	@Action(value = "updateFunctionsMenu")
	public void updateFunctionsMenu() {
		String deleFlag = "false";
		Map<String, Object> setMap = new HashMap<String, Object>();
		setMap.put("functionId",   getParameter("functionId"));
		setMap.put("functionCode", getParameter("functionCode"));
		setMap.put("functionName", getParameter("functionName"));
		setMap.put("functionImg",  getParameter("functionImg"));
		setMap.put("assemblyName", getParameter("assemblyName"));
		setMap.put("functionType", getParameter("functionType"));
		setMap.put("ordering",     getParameter("ordering"));
		setMap.put("state", 	   getParameter("state"));
		setMap.put("remark", 	   getParameter("remark"));
		try {
			functionMenuServices.updateFunctionsMenu(setMap);
			LogUtil.insertLog(LogActionTypes.UPDATE, "成功", "修改菜单", "", "修改菜单");
			deleFlag = "true";
		}catch (Exception e) {
			LogUtil.insertLog(LogActionTypes.UPDATE, "失败", "修改菜单", "", "修改菜单");
			e.printStackTrace();
		}
		this.renderText(deleFlag);
	}

	/**
	 * 新增功能菜单
	 */
	@Action(value = "insertFunctionsMenu")
	public void insertFunctionsMenu() {
		Map<String, Object> setMap = new HashMap<String, Object>();
		setMap.put("FUNCTION_CODE", getParameter("functionCode"));
		setMap.put("FUNCTION_NAME", getParameter("functionName"));
		setMap.put("FUNCTION_IMG", getParameter("functionImg"));
		setMap.put("ASSEMBLY_NAME", getParameter("assemblyName"));
		setMap.put("FUNCTION_TYPE", getParameter("functionType"));
		setMap.put("ORDERING", getParameter("ordering"));
		setMap.put("STATE", getParameter("state"));
		setMap.put("REMARK", getParameter("remark"));
		setMap.put("PARENT_FUNC_ID", getParameter("parentFuncId"));
		try {
			functionMenuServices.createFunctionsMenu(setMap);
			LogUtil.insertLog(LogActionTypes.INSERT, "成功", "新增功能菜单", "", "新增功能菜单");
			this.renderText("true");
			return;
		} catch (Exception e) {
			LogUtil.insertLog(LogActionTypes.INSERT, "失败", "新增功能菜单", "", "新增功能菜单");
			e.printStackTrace();
		}
		this.renderText("false");
	}

	/**
	 * 获取组装后菜单LIST
	 * 
	 * @param list
	 * @return
	 */
	public static List<Map<String, Object>> getFunctions(
			List<Map<String, String>> list) {

		List<Map<String, Object>> resultList = new ArrayList<Map<String, Object>>();

		try {
			for (Map<String, String> imap : list) {

				String topFunId = imap.get("topFunId");
				String topFunName = imap.get("topFunName");
				String parentFuncId = imap.get("parentFuncId");
				String parentFuncName = imap.get("parentFuncName");
				String functionId = imap.get("functionId");
				String functionName = imap.get("functionName");
				String functionCode = imap.get("functionCode");

				Map<String, Object> fourMap = new HashMap<String, Object>();
				fourMap.put("id", functionId);
				fourMap.put("name", functionName);
				fourMap.put("code", functionCode);

				// 取出第一级菜单
				Map<String, Object> topItem = getItemById(resultList, topFunId);

				// 一级菜单已存在
				if (topItem != null) {

					// 设置第一级菜单id,name,size
					Integer size = (Integer) topItem.get("size");
					topItem.put("size", size + 1);

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
					}

				} else { // 一级菜单不存在，新建一级、三级、四级菜单
					topItem = new HashMap<String, Object>();

					topItem.put("id", topFunId);
					topItem.put("name", topFunName);
					topItem.put("size", 1);

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

	public FunctionMenuServices getFunctionMenuServices() {
		return functionMenuServices;
	}

	public void setFunctionMenuServices(
			FunctionMenuServices functionMenuServices) {
		this.functionMenuServices = functionMenuServices;
	}

	public List<FunctionMenu> getUserOneLevelList() {
		return userOneLevelList;
	}

	public void setUserOneLevelList(List<FunctionMenu> userOneLevelList) {
		this.userOneLevelList = userOneLevelList;
	}

	public List<FunctionMenu> getUserTwoLevelList() {
		return userTwoLevelList;
	}

	public void setUserTwoLevelList(List<FunctionMenu> userTwoLevelList) {
		this.userTwoLevelList = userTwoLevelList;
	}

	public String getParentId() {
		return parentId;
	}

	public void setParentId(String parentId) {
		this.parentId = parentId;
	}

	public List<HashMap<String, String>> getUserThreeLevelList() {
		return userThreeLevelList;
	}

	public void setUserThreeLevelList(
			List<HashMap<String, String>> userThreeLevelList) {
		this.userThreeLevelList = userThreeLevelList;
	}

}
