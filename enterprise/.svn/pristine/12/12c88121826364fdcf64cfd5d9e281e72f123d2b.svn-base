/**
 * VehicleServices.java
 * Create on 2012-4-25 13:43:49
 * Copyright (c) 2012 by e_trans.
 */
package com.etrans.bubiao.services.sys;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.etrans.bubiao.entities.PageBean;
import com.etrans.bubiao.entities.Result;
import com.etrans.bubiao.services.IbatisServices;
import com.etrans.common.util.ParamKey;

@Service
public class VehicleServices {

	@Autowired
	private IbatisServices ibatisServices;

	public IbatisServices getIbatisServices() {
		return ibatisServices;
	}

	public void setIbatisServices(IbatisServices ibatisServices) {
		this.ibatisServices = ibatisServices;
	}
	
	/**
	 * 分页查询车辆,返回表格数据
	 * @param queryJSON
	 * @return
	 * @throws Exception
	 */
	public PageBean getVehicles(Map<String,Object> params) throws Exception {
		
		PageBean pageBean = new PageBean();
		
		List<Map<String,Object>> vehicleList = getVehicleList(params);
		Long total = getVehicleCount(params);
		
		pageBean.setPage((Integer)params.get(ParamKey.PAGE));
		pageBean.setRows(vehicleList);
		pageBean.setTotal(total);
		
		return pageBean;
		
	}
	
	/**
	 * 分页查询车辆
	 * @param params
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public List<Map<String,Object>> getVehicleList(Map params) throws Exception {
		
		List<Map<String,Object>> vehicleList = new ArrayList<Map<String,Object>>();
		Boolean isSuper=(Boolean)params.get("isSuper");
		Boolean isWorkUnitSuperAdmin = (Boolean)params.get("isWorkUnitSuperAdmin");
		if(isSuper != null && isSuper == true){
			vehicleList = this.ibatisServices.queryForList(Map.class, "getVehiclesSQL",params);
		}else if(isWorkUnitSuperAdmin != null && isWorkUnitSuperAdmin == true){
			vehicleList = this.ibatisServices.queryForList(Map.class, "getVehiclesSQL",params);
		}else{
			vehicleList = this.ibatisServices.queryForList(Map.class, "getUserVehiclesSQL",params);
		}
		
		if(vehicleList != null && vehicleList.size() > 0){
			for(Map<String,Object> map : vehicleList){
				
				String workStatusStr = (String)map.get("workStatusStr");
				if(workStatusStr == null){
					Integer workStatus = (Integer)map.get("workStatus");
					String state = getWorkState(workStatus);
					if(state.equals("1")){
						map.put("workStatusStr","停止使用");
						map.put("workStatusInt","1");
					}else{
						map.put("workStatusStr","使用");
						map.put("workStatusInt","0");
					}
				}
				
				String isBlindStr = (String)map.get("isBlindStr");
				if(isBlindStr == null){
					Short isBlind = (Short)map.get("isBlind");
					if(isBlind != null && isBlind == 1){
						map.put("isBlindStr","是");
					}else{
						map.put("isBlindStr","否");
					}
				}
					
				/*Boolean isSensor = (Boolean)map.get("isSensor");
				if(isSensor != null && isSensor){
					map.put("isSensor","GPS速度");
				}else{
					map.put("isSensor","传感器速度");
				}
				
				Boolean isDummy = (Boolean)map.get("isDummy");
				if(isDummy != null && isDummy){
					map.put("isDummy","是");
				}else if (isDummy != null && isDummy==false) {
					map.put("isDummy","否");
				}*/
			}
		}
		return vehicleList;
		
	}
	
	/**
	 * 查询车辆数
	 * @param params
	 * @return
	 * @throws Exception
	 */
	public Long getVehicleCount(Map<String,Object> params) throws Exception {
		
		Boolean isSuper=(Boolean)params.get("isSuper");
		Boolean isWorkUnitSuperAdmin = (Boolean)params.get("isWorkUnitSuperAdmin");
		if(isSuper != null && isSuper == true){
			return this.ibatisServices.findIbatisListCount("getVehiclesCountSQL", params);
		}else if(isWorkUnitSuperAdmin != null && isWorkUnitSuperAdmin == true){
			return this.ibatisServices.findIbatisListCount("getVehiclesCountSQL", params);
		}else{
			return this.ibatisServices.findIbatisListCount("getUserVehiclesCountSQL", params);
		}
		
	}

	/**
	 * 判断车牌号重复
	 * @param whereMap
	 * @return
	 * @throws Exception
	 */
	public Result checkRegistrationNO(Map whereMap) throws Exception {
		
		Result result = new Result();
		List<Map<String,Object>> list = this.ibatisServices.queryForList(Map.class, "checkRegistrationNoSQL",whereMap);
		result.setCode(1);
		result.setData(list.size());
		return result;
	}
	
	
	/**
	 * 新增车辆
	 * @param whereMap
	 * @return
	 * @throws Exception
	 */
	public void createVehicle(Map<String,Object> params) {
//		{workUnitId=31, bandId=1, tradeKindId=1, memo=, vehicleId=, colorId=1, registrationNoKindId=1, secondDriverId=28, customTradeKindId=1, registrationNo=, registrationNoColorId=1, platformId=1, transportPermits=, usageId=1, terminalId=17, setupDate=, groupId=1, vin=, kindId=1, workStatus=0, firstDriverId=28, setupWorker=, manufactoryId=2, isBlind=1}
      
		String workStatus = (String)params.get("workStatus");
		params.put("workStatus", toWorkState(0,workStatus));
		
		String usageId = (String)params.get("usageId");
		if(usageId != null && usageId.equals("-1"))
			params.put("usageId", "");
		String bandId = (String)params.get("bandId");
		if(bandId != null && bandId.equals("-1"))
			params.put("bandId", "");
		String manufactoryId  = (String)params.get("manufactoryId");
		if(manufactoryId != null && manufactoryId.equals("-1"))
			params.put("manufactoryId", "");
		
		//超级管理员，企业管理员
		if(params.get("isSuper").toString().trim()=="1"){
        	
    		
    		Object insertResult = this.ibatisServices.insertIbatisObject("insertVehicleSQL", params);
    		Integer vehicleId = (Integer)insertResult;
    		params.put("vehicleId", vehicleId);
    		
    		//保存车辆服务信息
    		this.ibatisServices.insertIbatisObject("insertVehicleServiceSQL", params);
    		//保存车辆附属表——运输行业
    		this.ibatisServices.insertIbatisObject("insertVehicleTransportSQL", params);
    		
    		//保存车辆第一司机
    		String firstDriverId = (String)params.get("firstDriverId");
    		if(firstDriverId != null && !firstDriverId.equals("-1")){
    			Map<String,Object> driverParams = new HashMap<String,Object>();
    			driverParams.put("vehicleId", vehicleId);
    			driverParams.put("driverId", firstDriverId);
    			driverParams.put("driverSequence", 1);
    			this.ibatisServices.insertIbatisObject("insertVehicleDriverSQL", driverParams);
    		}
    		
    		//保存车辆第二司机
    		String secondDriverId = (String)params.get("secondDriverId");
    		if(secondDriverId != null && !secondDriverId.equals("-1")){
    			Map<String,Object> driverParams = new HashMap<String,Object>();
    			driverParams.put("vehicleId", vehicleId);
    			driverParams.put("driverId", secondDriverId);
    			driverParams.put("driverSequence", 2);
    			this.ibatisServices.insertIbatisObject("insertVehicleDriverSQL", driverParams);
    		}
    		
    		//终端开户
    		String terminalId = (String)params.get("terminalId");
    		if(terminalId != null){
    			updateTerminalStauts(terminalId,1);
    		}
    		
        }else{//普通用户
        	
    		
    		Object insertResult = this.ibatisServices.insertIbatisObject("insertVehicleSQL", params);
    		Integer vehicleId = (Integer)insertResult;
    		params.put("vehicleId", vehicleId);
    		
        	try {
				List<Map<String,Object>> listMap =  getVehicleGroupIDList(params);
	    		params.put("VehicleGroupID", listMap.get(0).get("VehicleGroupID").toString());
			} catch (Exception e) {
				e.printStackTrace();
			}
    		
    		//保存车辆服务信息
    		this.ibatisServices.insertIbatisObject("insertVehicleServiceSQL", params);
    		//保存车辆附属表——运输行业
    		this.ibatisServices.insertIbatisObject("insertVehicleTransportSQL", params);
    		
    		//保存车辆第一司机
    		String firstDriverId = (String)params.get("firstDriverId");
    		if(firstDriverId != null && !firstDriverId.equals("-1")){
    			Map<String,Object> driverParams = new HashMap<String,Object>();
    			driverParams.put("vehicleId", vehicleId);
    			driverParams.put("driverId", firstDriverId);
    			driverParams.put("driverSequence", 1);
    			this.ibatisServices.insertIbatisObject("insertVehicleDriverSQL", driverParams);
    		}
    		
    		//保存车辆第二司机
    		String secondDriverId = (String)params.get("secondDriverId");
    		if(secondDriverId != null && !secondDriverId.equals("-1")){
    			Map<String,Object> driverParams = new HashMap<String,Object>();
    			driverParams.put("vehicleId", vehicleId);
    			driverParams.put("driverId", secondDriverId);
    			driverParams.put("driverSequence", 2);
    			this.ibatisServices.insertIbatisObject("insertVehicleDriverSQL", driverParams);
    		}
    		
    		//终端开户
    		String terminalId = (String)params.get("terminalId");
    		if(terminalId != null){
    			updateTerminalStauts(terminalId,1);
    		}
    		
    		//用户车辆表Ent_UserVehicle
    		this.ibatisServices.insertIbatisObject("insertEntUserVehicleSQL", params);
    		
    		//车辆与车辆关系表Pub_GroupVehicle
    		this.ibatisServices.insertIbatisObject("insertGroupVehicleSQL", params);
    		
    		
        }
		
		
	}
	/**
	 * 根据用户userId查找 车组 VehicleGroupID
	 * @param params
	 * @return
	 * @throws Exception
	 */
    @SuppressWarnings("unchecked")
	public List<Map<String,Object>> getVehicleGroupIDList(Map params) throws Exception {
		return this.ibatisServices.queryForList(Map.class, "getVehicleGroupIDByUserIdSQL",params);
	}
	
	/**
	 * 终端开户/销户
	 * @param terminalId
	 * @param status
	 */
	public void updateTerminalStauts(String terminalId,Integer status) {
		Map<String,Object> params = new HashMap<String,Object>();
		params.put("terminalId", terminalId);
		params.put("useFlag", status);
		this.ibatisServices.update("updateTerminalStatusSQL", params);
	}
	
	/**
	 * 查询车辆详细
	 * @param whereMap
	 * @return
	 * @throws Exception
	 */
	public Map<String,Object> getVehicleById(Map params) throws Exception {
		
		Map<String,Object> vehicle = getVehicleInfoById(params);
		
		Map<String,Object> vehicleTransport = getVehicleTransportById(params);
		if(vehicle != null && vehicleTransport != null && vehicleTransport.size() > 0){
			vehicleTransport.remove("ID");
			vehicle.putAll(vehicleTransport);
		}
		
		return vehicle;
	}
	
	/**
	 * 查询车辆基本信息
	 * @param whereMap
	 * @return
	 * @throws Exception
	 */
	public Map<String,Object> getVehicleInfoById(Map params) {
		
		List<Map<String,Object>> list = this.ibatisServices.queryForList(Map.class, "getVehicleByIdSQL",params);
		if(list != null && list.size()>0){
			Map<String,Object> vehicle = list.get(0);
			Integer workStatus = (Integer)vehicle.get("WorkStatus");
			if(workStatus == null){
				String state = getWorkState(workStatus);
				vehicle.put("WorkStatus", Integer.parseInt(state));
			}
			Short isBlind = (Short)vehicle.get("isBlind");
			if(isBlind != null && isBlind == 1){
				vehicle.put("isBlind",1);
			}else{
				vehicle.put("isBlind",0);
			}
			
			return vehicle;
		}
		
		return null;
	}
	
	/**
	 * 查询车辆附属表——运输行业
	 * @param whereMap
	 * @return
	 * @throws Exception
	 */
	public Map<String,Object> getVehicleTransportById(Map params){
		
		List<Map<String,Object>> list = this.ibatisServices.queryForList(Map.class, "getVehicleTransportByIdSQL",params);
		if(list != null && list.size()>0){
			return list.get(0);
		}
		
		return null;
	}
	
	
	/**
	 * 修改车辆
	 * @param whereMap
	 * @return
	 * @throws Exception
	 */
	public void updateVehicle(Map<String,Object> params) {
		
		String usageId = (String)params.get("usageId");
		if(usageId != null && usageId.equals("-1"))
			params.put("usageId", "");
		String bandId = (String)params.get("bandId");
		if(bandId != null && bandId.equals("-1"))
			params.put("bandId", "");
		String manufactoryId  = (String)params.get("manufactoryId");
		if(manufactoryId != null && manufactoryId.equals("-1"))
			params.put("manufactoryId", "");
		
		Map<String,Object> vehicle = getVehicleInfoById(params);
		
		String workStatus = (String)params.get("workStatus");
		Integer vStatus = (Integer)vehicle.get("WorkStatus");
		params.put("workStatus", toWorkState(vStatus,workStatus));
		
		if(vehicle != null && vehicle.get("ID") != null){
			Integer vehicleId = (Integer)vehicle.get("ID");
			params.put("vehicleId", vehicleId);
			
			//保存车辆表信息
			this.ibatisServices.updateIbatisObject("updateVehicleSQL", params);
			
			//保存车辆服务信息
			int vsCnt = this.ibatisServices.updateIbatisObject("updateVehicleServiceSQL", params);
			if(vsCnt == 0){
				this.ibatisServices.insertIbatisObject("insertVehicleServiceSQL", params);
			}
			
			//保存车辆附属表——运输行业
			int vtCnt = this.ibatisServices.updateIbatisObject("updateVehicleTransportSQL", params);
			if(vtCnt == 0){
				this.ibatisServices.insertIbatisObject("insertVehicleTransportSQL", params);
			}
			
			
			//保存车辆第一司机
			String firstDriverId = (String)params.get("firstDriverId");
			if(firstDriverId != null && !firstDriverId.equals("-1")){
				Map<String,Object> driverParams = new HashMap<String,Object>();
				driverParams.put("vehicleId", vehicleId);
				driverParams.put("driverId", firstDriverId);
				driverParams.put("driverSequence", 1);
				int fdCnt = this.ibatisServices.updateIbatisObject("updateVehicleDriverSQL", driverParams);
				if(fdCnt == 0){
					this.ibatisServices.insertIbatisObject("insertVehicleDriverSQL", driverParams);
				}
			}
			
			//保存车辆第二司机
			String secondDriverId = (String)params.get("secondDriverId");
			if(secondDriverId != null && !secondDriverId.equals("-1")){
				Map<String,Object> driverParams = new HashMap<String,Object>();
				driverParams.put("vehicleId", vehicleId);
				driverParams.put("driverId", secondDriverId);
				driverParams.put("driverSequence", 2);
				int sdCnt = this.ibatisServices.updateIbatisObject("updateVehicleDriverSQL", driverParams);
				if(sdCnt == 0){
					this.ibatisServices.insertIbatisObject("insertVehicleDriverSQL", driverParams);
				}
			}
			
			Integer oldTerminalId = (Integer)vehicle.get("TerminalID");
			String terminalId = (String)params.get("terminalId");
			if(oldTerminalId != null && terminalId != null && Integer.parseInt(terminalId)==oldTerminalId){
				//不修改终端
			}else{
				//原终端销户
				if(oldTerminalId != null){
					updateTerminalStauts(String.valueOf(oldTerminalId),0);
				}
				//新终端开户
				if(terminalId != null){
					updateTerminalStauts(terminalId,1);
				}
			}
			
		}
		
	}
	
	
	/**
	 * 删除车辆
	 * @param whereMap
	 * @return
	 * @throws Exception
	 */
	public void deleteVehicle(Map<String,Object> params) {
		
		Map<String,Object> vehicle = getVehicleInfoById(params);
		if(vehicle != null && vehicle.get("ID") != null){
			Integer vehicleId = (Integer)vehicle.get("ID");
			params.put("vehicleId", vehicleId);
			
			this.ibatisServices.updateIbatisObject("delVehicleSQL", params);
			
			//删除车辆表信息,更新车辆状态已删除
			this.ibatisServices.updateIbatisObject("deleteVehicleSQL", params);
			
			//删除车辆服务信息
			this.ibatisServices.deleteIbatisObject("deleteVehicleServiceSQL", params);
			
			//删除车辆附属表——运输行业
			this.ibatisServices.deleteIbatisObject("deleteVehicleTransportSQL", params);
			
			//删除车辆司机关系
			this.ibatisServices.deleteIbatisObject("deleteVehicleDriverSQL", params);
			
			Integer terminalId = (Integer)vehicle.get("TerminalID");
			//原终端销户
			if(terminalId != null){
				updateTerminalStauts(String.valueOf(terminalId),0);
			}
		}
		if(params.get("isSuper").toString().trim()=="0"){
			
			//删除用户车辆表Ent_UserVehicle
    		this.ibatisServices.deleteIbatisObject("deleteEntUserVehicleSQL", params);
    		
    		//删除车辆与车辆关系表Pub_GroupVehicle
    		this.ibatisServices.deleteIbatisObject("deleteGroupVehicleSQL", params);
		}
		
				
	}
	
	
	/**
	 * 更新车辆使用状态
	 * @param whereMap
	 * @return
	 * @throws Exception
	 */
	public void updateVehicleWorkStatus(Map<String,Object> params) {
		
		Map<String,Object> vehicle = getVehicleInfoById(params);
		
		if(vehicle != null && vehicle.get("ID") != null){
			
			String workStatus = (String)params.get("workStatus");
			Integer vStatus = (Integer)vehicle.get("WorkStatus");
			params.put("workStatus", toWorkState(vStatus,workStatus));
			//更新车辆使用状态
			this.ibatisServices.updateIbatisObject("updateVehicleWorkStatusSQL", params);
		}
		
	}
	
	
	/**
	 * 车辆更换终端
	 * @param whereMap
	 * @return
	 * @throws Exception
	 */
	public void updateTerminal(Map<String,Object> params) {
		
		if(params != null){
			String vehicleId = (String)params.get("vehicleId");
			String oldTerminalId = (String)params.get("oldTerminalId");
			String newTerminalId = (String)params.get("newTerminalId");
			if(vehicleId != null){
				//更新车辆终端
				params.put("terminalId", newTerminalId);
				this.ibatisServices.updateIbatisObject("updateVehicleTerminalSQL", params);
				
				//新终端开户
				updateTerminalStauts(newTerminalId,1);
				
				//原终端销户
				updateTerminalStauts(String.valueOf(oldTerminalId),0);
			}
		}
		
	}
	
	/**
	 * 分页查询车辆终端参数,返回表格数据
	 * @param queryJSON
	 * @return
	 * @throws Exception
	 */
	public PageBean getTerminalParams(Map params) throws Exception {
		
		PageBean pageBean = new PageBean();
		
		List<Map<String,Object>> vehicleList = this.ibatisServices.queryForList(Map.class, "getTerminalParamSQL",params);
		Long total = this.ibatisServices.findIbatisListCount("getTerminalParamCountSQL", params);
		
		pageBean.setPage((Integer)params.get(ParamKey.PAGE));
		pageBean.setRows(vehicleList);
		pageBean.setTotal(total);
		
		return pageBean;
		
	}
	
	/**
	 * 由车辆状态获取第二比特位值
	 * @param status
	 * @return
	 */
	public static String getWorkState(Integer status){
		if(status == null)
			return "0";
		if((status&2) == 0){
			return "0";
		}else{
			return "1";
		}
	}
	
	/**
	 * 由车辆原状态和第二比特位值获取车辆新状态
	 * @param status
	 * @param workStat
	 * @return
	 */
	public static Integer toWorkState(Integer status,String workStat){

		String result = "0";
		
		String statusStr = Integer.toBinaryString(status);
		int stalength = statusStr.length();
		if(stalength >= 2){
			result = statusStr.substring(0, stalength-2) + workStat + statusStr.substring(stalength-1, stalength);
		}else if(stalength == 1){
			result = workStat + statusStr;
		}else{
			result = workStat + "0";
		}
		return Integer.parseInt(result, 2);
	}
	
	
	
	
	
	
	
//////////////////////作用于报警设置模块begin/////////////////////////////
	/**
	 * 根据用户id（单位id）得到车辆列表
	 * @param params
	 * @return
	 */
	@SuppressWarnings("unchecked")
	public List<HashMap<String, String>> getVehilceListByWorkUnitID(Map params){
		List<HashMap<String, String>> resultList = new ArrayList<HashMap<String,String>>();
		
		resultList = this.ibatisServices.queryForList(Map.class, "getVehilceListByWorkUnitIDSql",params);
		
		return resultList;
	}
	
//////////////////////作用于报警设置模块end/////////////////////////////	
}
