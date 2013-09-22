/**
 * InitSelectAction.java
 * Create on 2012-4-26 15:31:34
 * Copyright (c) 2012 by e_trans.
 */
package com.etrans.bubiao.action.sys;

import java.util.HashMap;
import java.util.Map;

import org.apache.catalina.connector.Request;
import org.apache.struts2.convention.annotation.Action;
import org.apache.struts2.convention.annotation.Namespace;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;

import com.etrans.bubiao.action.BaseAction;
import com.etrans.bubiao.auth.SessionUser;
import com.etrans.bubiao.services.sys.InitSelectServices;
import com.etrans.bubiao.sys.UserContext;
import com.etrans.common.util.json.JSONUtil;

@Controller
@Scope("prototype")
@Namespace("/sys")
public class InitSelectAction extends BaseAction {

	private static final long serialVersionUID = 1L;
	
	@Autowired
	private InitSelectServices initSelectServices;

	public InitSelectServices getInitSelectServices() {
		return initSelectServices;
	}

	public void setInitSelectServices(InitSelectServices initSelectServices) {
		this.initSelectServices = initSelectServices;
	}
	
	
	/**
	 * 查询新增车辆需要初始化的下拉框数据
	 * @return
	 * @throws Exception
	 */
	@Action(value="initVehicleSel")
	public void initVehicleSel() throws Exception {
		try {
			//企业id
			Long workUnitId = UserContext.getLoginUser().getWorkUnitID();
			Map<String,Object> params = new HashMap<String,Object>();
			//不是超级管理员
			if(!UserContext.isBsRootUser()){
				params.put("workUnitId", workUnitId);
			}
			
			SessionUser user = UserContext.getLoginUser();
			if(user != null){
				if(UserContext.isBsRootUser()){
					params.put("isSuper", true);
				}else if(user.isWorkUnitSuperAdmin()){
					String fullId = user.getWorkUnitFullId();
					params.put("fullId", fullId);
					params.put("isWorkUnitSuperAdmin", true);
				}else{
					params.put("userId", user.getUserID());
				}
			 }
			
			//车辆颜色、车牌类型、车牌颜色、通信号、车辆类型、平台名称、
			Map<String,Object> map = new HashMap<String,Object>();
			map.put("vehicleColor", initSelectServices.getColors());
			map.put("registrationNoKind", initSelectServices.getRegistrationNoKinds());
			map.put("registrationNoColor", initSelectServices.getRegistrationNoColors());
			map.put("terminal", initSelectServices.initTerminals(params));
			map.put("kind", initSelectServices.getKinds());
			map.put("platform", initSelectServices.initPlatforms());
			
			
			
			String sqlWheres = getParameter("sqlWhere");
			Map<String,Object> sqlWhere= new HashMap<String,Object>();
			sqlWhere.put("sqlWhere", sqlWheres);
			//行业类型、车辆分类、所属区域、车辆用途、车辆品牌、车辆厂商、所术车队
			map.put("tradeKind", initSelectServices.getTradeKinds());
			map.put("customTradeKind", initSelectServices.getCustomTradeKinds());
			map.put("area", initSelectServices.getAreas(sqlWhere));
			map.put("usage", initSelectServices.getUsages());
			map.put("band", initSelectServices.getBands());
			map.put("manufactory", initSelectServices.getManufactorys());
			this.renderJSON(map);
		} catch (Exception e) {
			e.printStackTrace();
		}
		
	}
	
	
	/**
	 * 查询新增车辆需要初始化的下拉框数据
	 * @return
	 * @throws Exception
	 */
	@Action(value="initVehicleSel2")
	public void initVehicleSel2() throws Exception {
		try {
			Map<String,Object> map = new HashMap<String,Object>();
			String sqlWheres = getParameter("sqlWhere");
			Map<String,Object> sqlWhere= new HashMap<String,Object>();
			sqlWhere.put("sqlWhere", sqlWheres);
			//行业类型、车辆分类、所属区域、车辆用途、车辆品牌、车辆厂商、所属车队
			map.put("tradeKind", initSelectServices.getTradeKinds());
			map.put("customTradeKind", initSelectServices.getCustomTradeKinds());
			map.put("area", initSelectServices.getAreas(sqlWhere));
			map.put("usage", initSelectServices.getUsages());
			map.put("band", initSelectServices.getBands());
			map.put("manufactory", initSelectServices.getManufactorys());
			map.put("vehicleTeam", "请选择");
			this.renderJSON(map);
		} catch (Exception e) {
			e.printStackTrace();
		}
		
	}
	

	
	/**
	 * 初始化车辆颜色下拉框数据
	 */
	@Action(value = "initColors")
	public void initColors() {
		try {
			this.renderJSON(JSONUtil.toJson(initSelectServices.getColors()));
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	
	/**
	 * 初始化车牌类型下拉框数据
	 */
	@Action(value = "initRegistrationNoKinds")
	public void initRegistrationNoKinds() {
		try {
			this.renderJSON(JSONUtil.toJson(initSelectServices.getRegistrationNoKinds()));
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	/**
	 * 初始化车牌颜色下拉框数据
	 */
	@Action(value = "initRegistrationNoColors")
	public void initRegistrationNoColors() {
		try {
			this.renderJSON(JSONUtil.toJson(initSelectServices.getRegistrationNoColors()));
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	/**
	 * 初始化通信号下拉框数据
	 */
	@Action(value = "initTerminals")
	public void initTerminals() {
		
		//企业id
		Long workUnitId = UserContext.getLoginUser().getWorkUnitID();
		Map<String,Object> params = new HashMap<String,Object>();
		//不是超级管理员
		if(!UserContext.isBsRootUser()){
			params.put("workUnitId", workUnitId);
		}
		try {
			this.renderJSON(JSONUtil.toJson(initSelectServices.initTerminals(params)));
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	/**
	 * 初始化所属企业下拉框数据
	 */
	@Action(value = "initWorkUnits")
	public void initWorkUnits() {
		try {
			Map<String,Object> params = new HashMap<String,Object>();
			SessionUser user = UserContext.getLoginUser();
			if(user != null){
				if(UserContext.isBsRootUser()){
					params.put("isSuper", true);
				}else if(user.isWorkUnitSuperAdmin()){
					String fullId = user.getWorkUnitFullId();
					params.put("fullId", fullId);
					params.put("isWorkUnitSuperAdmin", true);
				}else{
					params.put("userId", user.getUserID());
				}
			 }
			this.renderJSON(JSONUtil.toJson(initSelectServices.initWorkUnits(params)));
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	/**
	 * 初始化车辆类型下拉框数据
	 */
	@Action(value = "initKinds")
	public void initKinds() {
		try {
			this.renderJSON(JSONUtil.toJson(initSelectServices.getKinds()));
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	/**
	 * 初始化平台下拉框数据
	 */
	@Action(value = "initPlatforms")
	public void initPlatforms() {
		try {
			this.renderJSON(JSONUtil.toJson(initSelectServices.initPlatforms()));
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	/**
	 * 初始化行业类型下拉框数据
	 */
	@Action(value = "initTradeKinds")
	public void initTradeKinds() {
		try {
			this.renderJSON(JSONUtil.toJson(initSelectServices.getTradeKinds()));
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	/**
	 * 初始化车辆分组下拉框数据
	 */
	@Action(value = "initGroups")
	public void initGroups() {
		//企业id
		Long workUnitId = UserContext.getLoginUser().getWorkUnitID();
		Map<String,Object> params = new HashMap<String,Object>();
		//不是超级管理员
		if(!UserContext.isBsRootUser()){
			params.put("workUnitId", workUnitId);
		}
		try {
			this.renderJSON(JSONUtil.toJson(initSelectServices.initGroups(params)));
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	/**
	 * 初始化车辆分类下拉框数据
	 */
	@Action(value = "initCustomTradeKinds")
	public void initCustomTradeKinds() {
		try {
			this.renderJSON(JSONUtil.toJson(initSelectServices.getCustomTradeKinds()));
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	
	/**
	 * 初始化车辆用途下拉框数据
	 */
	@Action(value = "initUsages")
	public void initUsages() {
		try {
			this.renderJSON(JSONUtil.toJson(initSelectServices.getUsages()));
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	/**
	 * 初始化车辆品牌下拉框数据
	 */
	@Action(value = "initBands")
	public void initBands() {
		try {
			this.renderJSON(JSONUtil.toJson(initSelectServices.getBands()));
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	/**
	 * 初始化车辆厂商下拉框数据
	 */
	@Action(value = "initManufactorys")
	public void initManufactorys() {
		try {
			this.renderJSON(JSONUtil.toJson(initSelectServices.getManufactorys()));
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	/**
	 * 初始化司机下拉框数据
	 */
	@Action(value = "initDrivers")
	public void initDrivers() {
		
		//企业id
		Long workUnitId = UserContext.getLoginUser().getWorkUnitID();
		Map<String,Object> params = new HashMap<String,Object>();
		//不是超级管理员
		if(!UserContext.isBsRootUser()){
			params.put("workUnitId", workUnitId);
		}
		try {
			this.renderJSON(JSONUtil.toJson(initSelectServices.initDrivers(params)));
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	/**
	 * 初始化区域下拉框
	 */
	@Action(value="initAreas")
	public void initAreas() {
		String sqlWheres = getParameter("sqlWhere");
		Map<String,Object> sqlWhere= new HashMap<String,Object>();
		sqlWhere.put("sqlWhere", sqlWheres);
		try {
			this.renderJSON(JSONUtil.toJson(initSelectServices.getAreas(sqlWhere)));
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	/**
	 * 初始化机构类型下拉框
	 */
	@Action(value="initOrganzationKinds")
	public void initOrganzationKinds() {
		try {
			this.renderJSON(JSONUtil.toJson(initSelectServices.getOrganzationKinds()));
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	/**
	 * 初始行頁下拉框
	 */
	@Action(value="initTradeKindes")
	public void initOrganzationKindes() {
		try {
			this.renderJSON(JSONUtil.toJson(initSelectServices.getTradeKindes()));
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	/**
	 * 初始化终端SIM卡下拉框的值
	 */
	@Action(value = "initSimCode")
	public void initSimCode() {	
		try {
			this.renderJSON(JSONUtil.toJson(initSelectServices.initSimCode()));
		} catch (Exception e) {
			e.printStackTrace();
			log.debug("查询出错！");
		}	
	}
	
	/**
	 * 初始化终端类型下拉框的值
	 */
	@Action(value = "initTerminalKind")
	public void initTerminalKind() {	
		try {
			this.renderJSON(JSONUtil.toJson(initSelectServices.initTerminalKind()));
		} catch (Exception e) {
			e.printStackTrace();
			log.debug("查询出错！");
		}	
	}
	
	/**
	 * 初始化报警类型下拉框的值
	 */
	@Action(value = "initAlarmType")
	public void initAlarmType() {	
		try {
			this.renderJSON(JSONUtil.toJson(initSelectServices.initAlarmType()));
		} catch (Exception e) {
			e.printStackTrace();
			log.debug("查询出错！");
		}	
	}
	
	
	/**
	 * 初始化车队信息下拉框的值
	 */
	@Action(value = "initVehicleTeams")
	public void initVehicleTeams() {	
		try {
			this.renderJSON(JSONUtil.toJson(initSelectServices.initVehicleTeams()));
		} catch (Exception e) {
			e.printStackTrace();
			log.debug("查询出错！");
		}	
	}
	
	/**
	 * 选择企业查出对应的车队信息下拉框的值
	 */
	@Action(value = "checkVehicleTeam")
	public void checkVehicleTeam() {
		String workUnitId=this.getParameter("workUnitIds");
		try {
			Map<String,Object> params = new HashMap<String,Object>();
			params.put("workUnitId", workUnitId);
			this.renderJSON(JSONUtil.toJson(initSelectServices.checkVehicleTeam(params)));
		} catch (Exception e) {
			e.printStackTrace();
			log.debug("查询出错！");
		}	
	}
	
	
									/////////////////用作于报警设置模块begin////////////////////////
	/**
	 * 初始线路下拉框的值
	 */
	@Action(value = "initLinKinds")
	public void initLinKinds() {	
		try {
			//企业id
			Long workUnitID =UserContext.getLoginUser().getWorkUnitID();
			this.renderJSON(JSONUtil.toJson(initSelectServices.initLinKinds(workUnitID)));
		} catch (Exception e) {
			e.printStackTrace();
		}	
	}
	
	/**
	 * 初始检测日期类型下拉框的值
	 */
	@Action(value = "initDateTypes")
	public void initDateTypes() {
		try {
			this.renderJSON(JSONUtil.toJson(initSelectServices.initDateTypes()));
		} catch (Exception e) {
			e.printStackTrace();
		}	
	}
	
	/**
	 * 初始化自定义区域下拉框的值
	 */
	@Action(value = "getCustomArea")
	public void getCustomArea() {	
		try {
			//企业id
			Long workUnitID =UserContext.getLoginUser().getWorkUnitID();
			this.renderJSON(JSONUtil.toJson(initSelectServices.getCustomArea(workUnitID)));
		} catch (Exception e) {
			e.printStackTrace();
			log.debug("查询出错！");
		}	
	}
	
	/**
	 * 初始化自定义线路下拉框的值
	 */
	@Action(value = "getCustomLine")
	public void getCustomLine() {	
		try {
			//企业id
			Long workUnitID =UserContext.getLoginUser().getWorkUnitID();
			this.renderJSON(JSONUtil.toJson(initSelectServices.getCustomLine(workUnitID)));
		} catch (Exception e) {
			e.printStackTrace();
			log.debug("查询出错！");
		}	
	}
	
	/**
	 * 初始化自定义关键点下拉框的值
	 */
	@Action(value = "getPoints")
	public void getPoints() {	
		
		try {
			//企业id
			Long workUnitID = UserContext.getLoginUser().getWorkUnitID();
			this.renderJSON(JSONUtil.toJson(initSelectServices.getPoints(workUnitID)));
		} catch (Exception e) {
			e.printStackTrace();
			log.debug("查询出错！");
		}	
	}
								/////////////////用作于报警设置模块end////////////////////////
	
	
								/////////////////用作于TA报警设置begin////////////////////////
	/**
	 * 初始化检测类型下拉框
	 */
	@Action(value = "getCheckTimeType")
	public void getCheckTimeType(){
		try {
			this.renderJSON(JSONUtil.toJson(initSelectServices.getCheckTimeType()));
		} catch (Exception e) {
			e.printStackTrace();
			log.debug("查询初始化检测类型下拉框时出错！");
		}	
	}
	
	/**
	 * 初始化地点组下拉框
	 */
	@Action(value = "getPlaceTypeId")
	public void getPlaceTypeId(){
		try {
			this.renderJSON(JSONUtil.toJson(initSelectServices.getPlaceTypeId()));
		} catch (Exception e) {
			e.printStackTrace();
			log.debug("查询初始化地点组下拉框时出错！");
		}	
	}
	
	
	/**
	 * 初始化区域下拉框
	 */
	@Action(value = "getPlaceTypeById")
	public void getPlaceTypeById(){
		try {
			this.renderJSON(JSONUtil.toJson(initSelectServices.getPlaceTypeById()));
		} catch (Exception e) {
			e.printStackTrace();
			log.debug("查询初始化地点组下拉框时出错！");
		}	
	}
	
	
	/**
	 * 初始化轨迹分析组下拉框
	 */	
	@Action(value = "getAnalyseGroup")
	public void getAnalyseGroup(){
		
		try {
			Map<String,Object> params = new HashMap<String,Object>();
			params=UserContext.putUserParams(params);
			this.renderJSON(JSONUtil.toJson(initSelectServices.getAnalyseGroup(params)));
		} catch (Exception e) {
			e.printStackTrace();
			log.debug("初始化轨迹分析组下拉框出错！");
		}	
		
	}
	
	
	/**
	 * 初始化所属分析器-道路超速报警(长运)
	 */
	@Action(value = "getOverSpeedRoadCY")
	public void getOverSpeedRoadCY(){
		try {
			this.renderJSON(JSONUtil.toJson(initSelectServices.getOverSpeedRoadCY()));
		} catch (Exception e) {
			e.printStackTrace();
			log.debug("查询初始化地点组下拉框时出错！");
		}	
	}
	
	/**
	 * 初始化所属分析器-道路超速报警
	 */
	@Action(value = "getAnalyseNames")
	public void getAnalyseNames(){
		try {
			this.renderJSON(JSONUtil.toJson(initSelectServices.getAnalyseNames()));
		} catch (Exception e) {
			e.printStackTrace();
			log.debug("查询初始化所属分析器时出错！");
		}	
	}

	
								/////////////////用作于TA报警设置end////////////////////////
	
	/**
	 * 初始化设备厂商下拉框
	 */
	@Action(value = "initDeviceVendors")
	public void initDeviceVendors(){
		try {
			this.renderJSON(JSONUtil.toJson(initSelectServices.initDeviceVendors()));
		} catch (Exception e) {
			e.printStackTrace();
			log.debug("查询初始化地点组下拉框时出错！");
		}	
	}
	
	/**
	 * 初始化设备类型下拉框
	 */
	@Action(value = "initDeviceTypes")
	public void initDeviceTypes(){
		try {
			this.renderJSON(JSONUtil.toJson(initSelectServices.initDeviceTypes()));
		} catch (Exception e) {
			e.printStackTrace();
			log.debug("查询初始化地点组下拉框时出错！");
		}	
	}
	
}
