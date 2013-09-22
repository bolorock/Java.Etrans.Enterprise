/**
 * InitSelectServices.java
 * Create on 2012-4-26 15:43:24
 * Copyright (c) 2012 by e_trans.
 */
package com.etrans.bubiao.services.sys;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.etrans.bubiao.services.IbatisServices;
import com.etrans.bubiao.sys.UserContext;

@Service
public class InitSelectServices {

	@Autowired
	private IbatisServices ibatisServices;

	public IbatisServices getIbatisServices() {
		return ibatisServices;
	}

	public void setIbatisServices(IbatisServices ibatisServices) {
		this.ibatisServices = ibatisServices;
	}
	

	public List<Map<String,Object>> getColors() throws Exception {
		List<Map<String,Object>> list = this.ibatisServices.queryForList(Map.class, "getColorsSQL",new HashMap());
		return list;
	}
	
	public List<Map<String,Object>> getRegistrationNoKinds() throws Exception {
		List<Map<String,Object>> list = this.ibatisServices.queryForList(Map.class, "getRegistrationNoKindsSQL",new HashMap());
		return list;
	}
	
	public List<Map<String,Object>> getRegistrationNoColors() throws Exception {
		List<Map<String,Object>> list = this.ibatisServices.queryForList(Map.class, "getRegistrationNoColorsSQL",new HashMap());
		return list;
	}
	
	public List<Map<String,Object>> initTerminals(Map params) throws Exception {
		List<Map<String,Object>> list = this.ibatisServices.queryForList(Map.class, "getTerminalsSQL",params);
		return list;
	}
	
	@SuppressWarnings("unchecked")
	public List<Map<String,Object>> initWorkUnits(Map params) throws Exception {
		
		List<Map<String,Object>> list = new ArrayList<Map<String,Object>>();
		Boolean isSuper=(Boolean)params.get("isSuper");
		Boolean isWorkUnitSuperAdmin = (Boolean)params.get("isWorkUnitSuperAdmin");
		
		if(isSuper != null && isSuper == true){
			list = this.ibatisServices.queryForList(Map.class, "getWorkUnitsSQL",params);
		}else if(isWorkUnitSuperAdmin != null && isWorkUnitSuperAdmin == true){
			list = this.ibatisServices.queryForList(Map.class, "getUserWorkUnitsSQL",params);
		}else{
			list = this.ibatisServices.queryForList(Map.class, "getUserWorkUnitsSQL",params);
		}
		return list;
	}
	
	public List<Map<String,Object>> getKinds() throws Exception {
		List<Map<String,Object>> list = this.ibatisServices.queryForList(Map.class, "getKindsSQL",new HashMap());
		return list;
	}
	
	public List<Map<String,Object>> initPlatforms() throws Exception {
		List<Map<String,Object>> list = this.ibatisServices.queryForList(Map.class, "getPlatformsSQL",new HashMap());
		return list;
	}
	
	public List<Map<String,Object>> getTradeKinds() throws Exception {
		List<Map<String,Object>> list = this.ibatisServices.queryForList(Map.class, "getTradeKindsSQL",new HashMap());
		return list;
	}
	
	public List<Map<String,Object>> initGroups(Map params) throws Exception {
		List<Map<String,Object>> list = this.ibatisServices.queryForList(Map.class, "getGroupsSQL",params);
		return list;
	}
	
	public List<Map<String,Object>> getCustomTradeKinds() throws Exception {
		List<Map<String,Object>> list = this.ibatisServices.queryForList(Map.class, "getCustomTradeKindsSQL",new HashMap());
		return list;
	}
	
	public List<Map<String,Object>> getUsages() throws Exception {
		List<Map<String,Object>> list = this.ibatisServices.queryForList(Map.class, "getUsagesSQL",new HashMap());
		return list;
	}
	
	public List<Map<String,Object>> getBands() throws Exception {
		List<Map<String,Object>> list = this.ibatisServices.queryForList(Map.class, "getBandsSQL",new HashMap());
		return list;
	}
	
	public List<Map<String,Object>> getManufactorys() throws Exception {
		List<Map<String,Object>> list = this.ibatisServices.queryForList(Map.class, "getManufactorysSQL",new HashMap());
		return list;
	}
	
	public List<Map<String,Object>> initDrivers(Map params) throws Exception {
		List<Map<String,Object>> list = this.ibatisServices.queryForList(Map.class, "getDriversSQL",params);
		return list;
	}
	
	/**
	 * 查询区域list
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings("unchecked")
	public List<Map<String,Object>> getAreas(Map sqlWhere) throws Exception {
		List<Map<String,Object>> groupList = this.ibatisServices.queryForList(Map.class,"getAreasSQL",sqlWhere);
		return groupList;
	}
	
	/**
	 * 查询机构list
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings("unchecked")
	public List<Map<String,Object>> getOrganzationKinds() throws Exception {		
		List<Map<String,Object>> groupList = this.ibatisServices.queryForList(Map.class,"getOrganzationKindsSQL",new HashMap());
		return groupList;
	}
	
	/**
	 * 查询行頁list
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings("unchecked")
	public List<Map<String,Object>> getTradeKindes() throws Exception {
		List<Map<String,Object>> list = this.ibatisServices.queryForList(Map.class, "getTradeKindesSQL",new HashMap());
		return list;
	}
	
	
	/**
	 *SIM卡 list
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings("unchecked")
	public List<Map<String,Object>> initSimCode() throws Exception {
		List<Map<String,Object>> list = this.ibatisServices.queryForList(Map.class, "initSimCodeSQL",new HashMap());
		return list;
		
	}
	
	
	
	/**
	 * 终端类型list
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings("unchecked")
	public List<Map<String,Object>> initTerminalKind() throws Exception {
		List<Map<String,Object>> list = this.ibatisServices.queryForList(Map.class, "initTerminalKindSQL",new HashMap());
		return list;
		
	}
	
	/**
	 * 报警类型list
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings("unchecked")
	public List<Map<String,Object>> initAlarmType() throws Exception {
		List<Map<String,Object>> list = this.ibatisServices.queryForList(Map.class, "initAlarmTypeSQL",new HashMap());
		return list;
		
	}
	
	/**
	 * 车队信息list
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings("unchecked")
	public List<Map<String,Object>> initVehicleTeams() throws Exception {
		List<Map<String,Object>> list = this.ibatisServices.queryForList(Map.class, "initVehicleTeamsSQL",new HashMap());
		return list;
		
	}
	
	
	/**
	 * 选择企业查出对应的车队信息list
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings("unchecked")
	public List<Map<String,Object>> checkVehicleTeam(Map params) throws Exception {
		List<Map<String,Object>> list = this.ibatisServices.queryForList(Map.class, "checkVehicleTeamSQL",params);
		return list;
		
	}
	
	/**
	 *线路list
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings("unchecked")
	public List<Map<String,Object>> initLinKinds(Long workUnitID) throws Exception {
		Map params = new HashMap<String,Object>();
		//不是超级管理员
		if(!UserContext.isBsRootUser()){
			params.put("workUnitID", workUnitID);
		}
		List<Map<String,Object>> list = this.ibatisServices.queryForList(Map.class, "initLineSQL",params);
		return list;
		
	}
	
	
	/**
	 *检测日期类型list
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings("unchecked")
	public List<Map<String,Object>> initDateTypes() throws Exception {
		List<Map<String,Object>> list = this.ibatisServices.queryForList(Map.class, "initDateTypesSQL",new HashMap());
		return list;
		
	}
	
	/**
	 * 自定义区域list
	 */
	@SuppressWarnings("unchecked")
	public List<Map<String,Object>> getCustomArea(Long workUnitID) throws Exception {
		Map params = new HashMap<String,Object>();
		params.put("workUnitID", workUnitID);
		List<Map<String,Object>> list = this.ibatisServices.queryForList(Map.class, "getCustomAreaSQL",params);
		return list;
		
	}
	
	/**
	 * 自定义线路list
	 */
	@SuppressWarnings("unchecked")
	public List<Map<String,Object>> getCustomLine(Long workUnitID) throws Exception {
		Map params = new HashMap<String,Object>();
		params.put("workUnitID", workUnitID);
		List<Map<String,Object>> list = this.ibatisServices.queryForList(Map.class, "getCustomLineSQL",params);
		return list;
		
	}
	
	/**
	 * 自定义关键点list
	 */
	@SuppressWarnings("unchecked")
	public List<Map<String,Object>> getPoints(Long workUnitID) throws Exception {
		Map params = new HashMap<String,Object>();
		//不是超级管理员
		if(!UserContext.isBsRootUser()){
			params.put("workUnitID", workUnitID);
		}
		List<Map<String,Object>> list = this.ibatisServices.queryForList(Map.class, "getPoints",params);
		return list;
		
	}
	
	
	/**
	 *  初始化检测类型下拉框
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings("unchecked")
	public List<Map<String,Object>> getCheckTimeType() throws Exception { 
		Map params = new HashMap<String,Object>();
		List<Map<String,Object>> list = this.ibatisServices.queryForList(Map.class, "getCheckTimeTypeSQL",params);
		return list;
	}
	
	/**
	 *  初始化地点组下拉框
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings("unchecked")
	public List<Map<String,Object>> getPlaceTypeId() throws Exception { 
		Map params = new HashMap<String,Object>();
		List<Map<String,Object>> list = this.ibatisServices.queryForList(Map.class, "getPlaceTypeIdSQL",params);
		return list;
	}
	
	/**
	 *  初始化区域下拉框
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings("unchecked")
	public List<Map<String,Object>> getPlaceTypeById() throws Exception { 
		Map params = new HashMap<String,Object>();
		List<Map<String,Object>> list = this.ibatisServices.queryForList(Map.class, "getPlaceTypeByIdSQL",params);
		return list;
	}
	
	/**
	 * 初始化轨迹分析组下拉框
	 * workUnitID 企业id
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings("unchecked")
	public List<Map<String,Object>> getAnalyseGroup(Map params) throws Exception { 
		List<Map<String,Object>> list  =this.ibatisServices.queryForList(Map.class, "getAnalyseGroupSQL",params);
		return list;
	}
	
	/**
	 * 初始化所属分析器-道路超速报警(长运)
	 * @param params
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings("unchecked")
	public List<Map<String,Object>> getOverSpeedRoadCY() throws Exception { 
		Map params = new HashMap<String,Object>();
		List<Map<String,Object>> list  =this.ibatisServices.queryForList(Map.class, "getOverSpeedRoadCYByIdSQL",params);
		return list;
	}
	
	/**
	 * 初始化所属分析器-道路超速报警
	 * @param params
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings("unchecked")
	public List<Map<String,Object>> getAnalyseNames() throws Exception { 
		Map params = new HashMap<String,Object>();
		List<Map<String,Object>> list  =this.ibatisServices.queryForList(Map.class, "getAnalyseNamesByIdSQL",params);
		return list;
	}
	
	/**
	 *  初始化设备厂商下拉框
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings("unchecked")
	public List<Map<String,Object>> initDeviceVendors() throws Exception { 
		Map params = new HashMap<String,Object>();
		List<Map<String,Object>> list = this.ibatisServices.queryForList(Map.class, "initDeviceVendorsSQL",params);
		System.out.println("========================="+list.size());
		return list;
	}
	
	
	/**
	 *  初始化设备类型下拉框
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings("unchecked")
	public List<Map<String,Object>> initDeviceTypes() throws Exception { 
		Map params = new HashMap<String,Object>();
		List<Map<String,Object>> list = this.ibatisServices.queryForList(Map.class, "initDeviceTypesSQL",params);
		return list;
	}
	
}
