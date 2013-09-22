package com.etrans.bubiao.action.monitorCenter;

import java.util.HashMap;
import java.util.Map;
import java.util.Random;

import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.apache.struts2.convention.annotation.Action;
import org.apache.struts2.convention.annotation.Namespace;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;

import com.etrans.bubiao.action.BaseAction;
import com.etrans.bubiao.action.sys.log.LogActionTypes;
import com.etrans.bubiao.action.sys.log.LogUtil;
import com.etrans.bubiao.entities.Result;
import com.etrans.bubiao.services.monitorCenter.AreaAlarmConfigServices;
import com.etrans.bubiao.sys.UserContext;
import com.etrans.common.util.FlexiGridUtil;
import com.etrans.common.util.json.JSONUtil;

/**
 * 区域报警设置Action
 * @author Administrator
 *
 */
@Controller
@Scope("prototype")
@Namespace("/monitorCenter")
public class AreaAlarmConfigAction extends BaseAction{
	
	private static final long serialVersionUID = 1L;
	
	protected Logger log = LogManager.getLogger(this.getClass().getName());
	
	private AreaAlarmConfigServices areaAlarmConfigServices;
	
	public AreaAlarmConfigServices getAreaAlarmConfigServices() {
		return areaAlarmConfigServices;
	}

	public void setAreaAlarmConfigServices(
			AreaAlarmConfigServices areaAlarmConfigServices) {
		this.areaAlarmConfigServices = areaAlarmConfigServices;
	}


	/**
	 * 查询区域报警列表
	 */
	@Action(value="findAreaAlarmConfigList")
	public void findAreaAlarmConfigList(){
		try {
			Map params = FlexiGridUtil.parseParam(this.getGridParams());
			params = putUserParams(params);
			//超级管理员
			if(UserContext.isBsRootUser()){
				params.remove("workunitId");
			}
			this.renderJSON(areaAlarmConfigServices.findAreaAlarmConfigList(params,new Random().nextLong()));
			LogUtil.insertLog(LogActionTypes.READ, "成功", "区域报警", "", "查询区域报警");
		} catch (Exception e) {
			LogUtil.insertLog(LogActionTypes.READ, "失败", "区域报警", "", "查询区域报警");
			e.printStackTrace();
			log.error("查询区域报警列表异常！"+e.getMessage());
		}
	}
	
	
	/**
	 * 区域报警设置名称唯一验证
	 */
	@Action(value = "checkAreaConfigName")
	public void checkAreaConfigName() {
		
		String name = getParameter("name"); 
		
		Map<String,Object> whereMap = new HashMap<String,Object>();
		whereMap.put("name", name);
		
		try {
			this.renderJSON(JSONUtil.toJson(areaAlarmConfigServices.checkAreaConfigName(whereMap)));
		} catch (Exception e) {
			e.printStackTrace();
		}
		
	}
	
	/**
	 * 新增区域报警设置
	 */
	@Action(value = "createAreaAlarmConfig")
	public void createAreaAlarmConfig() {
		
		String name = getParameter("name");
		String areaId = getParameter("areaId");
		String vehicleIds = getParameter("vehicleIds");
		String description = getParameter("description");
		String dateTypeId = getParameter("dateTypeId");
		String workingDays = getParameter("workingDays");
		String beginDate = getParameter("beginDate");
		String endDate = getParameter("endDate");
		String beginTime = getParameter("beginTime");
		String endTime = getParameter("endTime");
		String isAlarm = getParameter("isAlarm");
		Map<String, Object> params = new HashMap<String,Object>();
		params.put("name", name);
		params.put("areaId", areaId);
		params.put("vehicleIds", vehicleIds);
		params.put("description", description);
		params.put("dateTypeId", dateTypeId);
		params.put("workingDays", workingDays);
		params.put("beginDate", beginDate);
		params.put("endDate", endDate);
		params.put("beginTime", beginTime);
		params.put("endTime", endTime);
		params.put("isAlarm", isAlarm);
		
		params = putUserParams(params);
		
		Result result = new Result();
		try {
			areaAlarmConfigServices.createAreaAlarmConfig(params);
			result.setCode(1);
			this.renderJSON(JSONUtil.toJson(result));
			LogUtil.insertLog(LogActionTypes.INSERT, "成功", "区域报警设置", "", "新增区域报警设置");
		} catch (Exception e) {
			LogUtil.insertLog(LogActionTypes.INSERT, "失败", "区域报警设置", "", "新增区域报警设置");
			e.printStackTrace();
			log.error("新增区域报警设置异常！"+e.getMessage());
		}
		result.setCode(0);
		this.renderJSON(JSONUtil.toJson(result));
		
	}
	
	/**
	 * 查询详细信息
	 */
	@Action(value = "getAreaAlarmConfigById")
	public void getAreaAlarmConfigById() {
		
		String id = getParameter("id"); 
		Map<String, Object> params = new HashMap<String,Object>();
		params.put("id", id);
		
		Result result = new Result();
		try {
			Map<String,Object> areaConfig = areaAlarmConfigServices.getAreaAlarmConfigById(params);
			result.setCode(1);
			result.setData(areaConfig);
			this.renderJSON(JSONUtil.toJson(result));
			LogUtil.insertLog(LogActionTypes.READ, "成功", "区域报警设置", "", "查询区域报警设置详细信息");
		} catch (Exception e) {
			LogUtil.insertLog(LogActionTypes.READ, "失败", "区域报警设置", "", "查询区域报警设置详细信息");
			e.printStackTrace();
			log.error("查询区域报警设置详细信息异常！"+e.getMessage());
		}
		
		result.setCode(0);
		this.renderJSON(JSONUtil.toJson(result));
	}
	
	/**
	 * 删除区域报警设置
	 */
	@Action(value = "deleteAreaAlarmConfig")
	public void deleteAreaAlarmConfig() {
		
		String id = getParameter("id");
		Map<String, Object> params = new HashMap<String,Object>();
		params.put("id", id);
		
		Result result = new Result();
		try {
			areaAlarmConfigServices.deleteAreaAlarmConfig(params);
			result.setCode(1);
			this.renderJSON(JSONUtil.toJson(result));
			LogUtil.insertLog(LogActionTypes.DELETE, "成功", "区域报警设置", "", "删除区域报警设置");
		} catch (Exception e) {
			LogUtil.insertLog(LogActionTypes.DELETE, "失败", "区域报警设置", "", "删除区域报警设置");
			e.printStackTrace();
			log.error("删除区域报警设置异常！"+e.getMessage());
		}
		result.setCode(0);
		this.renderJSON(JSONUtil.toJson(result));
		
	}
	
	/**
	 * 获取用户信息
	 * @param params
	 * @return
	 */
	public Map<String,Object> putUserParams(Map<String,Object> params) {
		
		Long userId = UserContext.isSuperUser() ? 0 : UserContext.getLoginUserID();
		Long workUnitId = UserContext.getLoginUser() == null ? -1 : UserContext.getLoginUser().getWorkUnitID();
		String userName = UserContext.getLoginUser() == null ? "" : UserContext.getLoginUser().getUserName();
		
		params.put("userId", userId);
		params.put("workunitId", workUnitId);
		params.put("userName", userName);
		
		return params;
	}
}
