package com.etrans.bubiao.action.sys;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.struts2.convention.annotation.Action;
import org.apache.struts2.convention.annotation.Namespace;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;

import com.etrans.bubiao.action.BaseAction;
import com.etrans.bubiao.action.sys.log.LogActionTypes;
import com.etrans.bubiao.action.sys.log.LogUtil;
import com.etrans.bubiao.auth.SessionUser;
import com.etrans.bubiao.services.sys.TerminalKindServices;
import com.etrans.bubiao.sys.UserContext;
import com.etrans.common.util.FlexiGridUtil;
import com.etrans.common.util.json.JSONUtil;

/**
 * 终端类型
 * @author tjb
 * @version 1.0
 */
@Controller
@Scope("prototype")
@Namespace("/sys")
public class TerminalkindAction extends BaseAction {
	private static final long serialVersionUID = 1L;

	@Autowired
	private TerminalKindServices terminalKindServices;

	/**
	 * 终端类型分页查询
	 * 
	 */
	@Action(value = "terminalKindList")
	public void terminalKindList() {
		try {
			Map<String, Object> params = FlexiGridUtil.parseParam(this
					.getGridParams());
			SessionUser user = UserContext.getLoginUser();
			if (user != null) {
				if (UserContext.isBsRootUser()) {
					params.put("isSuper", true);
				} else {
					String fullId = user.getWorkUnitFullId();
					params.put("fullId", fullId);
				}
			}
			this.renderJSON(JSONUtil.toJson(terminalKindServices.TerminalKindList(params)));
			LogUtil.insertLog(LogActionTypes.READ, "成功", "终端类型信息管理", "", "查询终端类型信息");
		} catch (Exception e) {
			LogUtil.insertLog(LogActionTypes.READ, "失败", "终端类型信息管理", "", "查询终端类型信息");
			e.printStackTrace();
			log.debug("查询 终端类型信息出错！");
		}
	}
	/**
	 **新增 终端类型信息详细
	 */
	@SuppressWarnings("unchecked")
	@Action(value = "createTerminalKind")
	public void createTerminalKind() {
		 
		String jsonParams = getParameter("params"); 
		Map<String, Object> params = JSONUtil.fromJson(jsonParams, Map.class);

		try {
			this.renderJSON(terminalKindServices.createTerminalKind(params));
			LogUtil.insertLog(LogActionTypes.INSERT, "成功", "终端类型信息管理", "", "新增终端类型信息");
		} catch (Exception e) {
			LogUtil.insertLog(LogActionTypes.INSERT, "失败", "终端类型信息管理", "", "新增终端类型信息");
			e.printStackTrace();
			log.debug("新增终端类型信息出错！");
		}
	}
	
		/**
		 * 根据ID查询外设型号信息详细
		 */
		@Action(value = "getTerminalKindById")
		public void getVehicleDeviceModelById() {

			String id = getParameter("id");
			System.out.println(id);
			Map<String, Object> whereMap = new HashMap<String, Object>();
			whereMap.put("id", id);
			try {
				this.renderJSON(JSONUtil.toJson(terminalKindServices.getTerminalKindById(whereMap)));
			} catch (Exception e) {
				e.printStackTrace();
				log.debug("根据ID查询终端类型信息出错！");
			}
		}
		
		/**
		 * 根据ID修改终端类型信息
		 */
		@SuppressWarnings("unchecked")
		@Action(value = "updateTerminalKind")
		public void updateTerminalKind() {
			
			String jsonParams = getParameter("params"); 
			Map<String, Object> whereMap = JSONUtil.fromJson(jsonParams, Map.class);
			try {
				this.renderJSON(terminalKindServices.updateTerminalKind(whereMap));
				LogUtil.insertLog(LogActionTypes.UPDATE, "成功", "终端类型信息管理", "", "修改终端类型信息");
			} catch (Exception e) {
				LogUtil.insertLog(LogActionTypes.UPDATE, "失败", "终端类型信息管理", "", "修改终端类型信息");
				e.printStackTrace();
			}
		}
		
		
		
		/**
		 * 根据ID删除终端类型信息
		 */
		@Action(value = "deleteTerminalKind")
		public void deleteTerminalKind() {

			String ids= getParameter("ids");
			Map<String, Object> whereMap = new HashMap<String, Object>();
			whereMap.put("id", ids);
			try {
				this.renderJSON(terminalKindServices.deleteTerminalKind(whereMap));
				LogUtil.insertLog(LogActionTypes.DELETE, "成功", "终端类型信息管理", "", "删除终端类型信息");
			} catch (Exception e) {
				LogUtil.insertLog(LogActionTypes.DELETE, "失败", "终端类型信息管理", "", "删除终端类型信息");
				e.printStackTrace();
			}
		}	
		
		
		/**
		 * 验证不能有相同的终端类型名称
		 */
		@Action(value = "checkName")
		public void checkName() {
			
			String name = getParameter("name"); 
			String id = getParameter("id"); 
			Map<String, Object> whereMap = new HashMap<String, Object>();
			whereMap.put("name", name);
			whereMap.put("id", id);
			try {
				this.renderJSON(terminalKindServices.checkName(whereMap));
			} catch (Exception e) {
				e.printStackTrace();
			}
		}
		
		/**
		 * 验证不能有相同的终端类型名称
		 */
		@Action(value = "checkKind")
		public void checkKind() {
			
			String Kind = getParameter("name"); 
			String id = getParameter("id"); 
			Map<String, Object> whereMap = new HashMap<String, Object>();
			whereMap.put("Kind", Kind);
			whereMap.put("id", id);
			try {
				this.renderJSON(terminalKindServices.checkKind(whereMap));
			} catch (Exception e) {
				e.printStackTrace();
			}
		}
		
		
	
}
