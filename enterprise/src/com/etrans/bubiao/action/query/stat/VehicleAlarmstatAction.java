/**
 * VehicleAction.java
 * Create on 2012-4-25 13:37:52
 * Copyright (c) 2012 by e_trans.
 */
package com.etrans.bubiao.action.query.stat;


import java.util.ArrayList;
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
import com.etrans.bubiao.services.query.stat.VehicleAlarmstatServices;
import com.etrans.bubiao.sys.UserContext;
import com.etrans.common.util.FlexiGridUtil;
import com.etrans.common.util.chart.Chart;
import com.etrans.common.util.chart.ChartData;
import com.etrans.common.util.chart.Data;
import com.etrans.common.util.json.JSONUtil;

/**
 * 车辆报警统计Services
 * @author yangzhen
 * @version 1.0
 */
@Controller
@Scope("prototype")
@Namespace("/query/stat")
public class VehicleAlarmstatAction extends BaseAction {

	private static final long serialVersionUID = 1L;
	
	@Autowired
	private VehicleAlarmstatServices vehicleAlarmServices;

	public VehicleAlarmstatServices getVehicleAlarmServices() {
		return vehicleAlarmServices;
	}

	public void setVehicleAlarmServices(VehicleAlarmstatServices vehicleAlarmServices) {
		this.vehicleAlarmServices = vehicleAlarmServices;
	}

	/**
	 * 车辆报警统计查询
	 */
	@Action(value = "findVehicleAlarmList")
	public void findVehicleAlarmList() {
		try {
			Map<String,Object> params = FlexiGridUtil.parseParam(this.getGridParams());
			SessionUser user = UserContext.getLoginUser();
			if(user != null){
				if(UserContext.isBsRootUser()){
					params.put("isSuper", 1);
				}else if(user.isWorkUnitSuperAdmin()){
					String fullId = user.getWorkUnitFullId();
					params.put("fullId", fullId);
					params.put("isWorkUnitSuperAdmin", true);
				}else{
					params.put("userId", user.getUserID());
				}
			 }
			this.renderJSON(JSONUtil.toJson(vehicleAlarmServices.getVehicleAlarms(params)));
			LogUtil.insertLog(LogActionTypes.READ, "成功", "车辆报警统计查询", "", "车辆报警统计查询");
		} catch (Exception e) {
			LogUtil.insertLog(LogActionTypes.READ, "失败", "车辆报警统计查询", "", "车辆报警统计查询");
			e.printStackTrace();
		}
		
	}
	
	
	/**
	 * 导出车辆报警统计信息到EXCEL
	 */
	@Action(value = "vehicleAlarmExport")
	public void vehicleAlarmExport() {
		try {
			Map<String,Object> params = FlexiGridUtil.parseParam(this.getGridParams());
			params = this.getExportParams(params);
			SessionUser user = UserContext.getLoginUser();
			if(user != null){
				if(UserContext.isBsRootUser()){
					params.put("isSuper", 1);
				}else if(user.isWorkUnitSuperAdmin()){
					String fullId = user.getWorkUnitFullId();
					params.put("fullId", fullId);
					params.put("isWorkUnitSuperAdmin", true);
				}else{
					params.put("userId", user.getUserID());
				}
			 }
			String[] titleArray = vehicleAlarmServices.getExlTitls(params);
			String[] columnArray = vehicleAlarmServices.getExlColumns(params);
			List<Map<String,Object>> rows = vehicleAlarmServices.getVehicleAlarmList(params);
			exportExl("vehicleAlarm", titleArray, columnArray, rows);
			LogUtil.insertLog(LogActionTypes.READ, "成功", "车辆报警统计导出", "", "车辆报警统计导出");
		} catch (Exception e) {
			LogUtil.insertLog(LogActionTypes.READ, "失败", "车辆报警统计导出", "", "车辆报警统计导出");
			e.printStackTrace();
		}
	}
	
	
	
	@Action(value="getVehicleAlarmCharts")
	public void getVehicleAlarmCharts() {
		try{
			
			Map<String,Object> params = new HashMap<String,Object>();
			SessionUser user = UserContext.getLoginUser();
			if(user != null){
				if(UserContext.isBsRootUser()){
					params.put("isSuper", 1);
				}else if(user.isWorkUnitSuperAdmin()){
					String fullId = user.getWorkUnitFullId();
					params.put("fullId", fullId);
					params.put("isWorkUnitSuperAdmin", true);
				}else{
					params.put("userId", user.getUserID());
				}
			 }
			String startDate = this.getParameter("startDate");
			String endDate = this.getParameter("endDate");
			String registrationNO = this.getParameter("registrationNO");
			String workUnitName = this.getParameter("workUnitName");
			String AlarmOperationID = this.getParameter("AlarmOperationID");
			
			
			params.put("startDate",startDate);
			params.put("endDate",endDate);
			params.put("registrationNO",registrationNO);
			params.put("workUnitName",workUnitName);
			params.put("AlarmOperationID",AlarmOperationID);                     
			
			List<Map<String,Object>>  rows = vehicleAlarmServices.getVehicleAlarmCharts(params);
			Chart charts = ChartData.chartSet("车辆报警统计", "车牌号", "报警总数");
			if (rows!=null && 0 < rows.size()) {
				
				List<Data> dataList = new ArrayList<Data>();
				for (Map<String, Object> obj : rows) {
					dataList.add(new Data(String.valueOf(obj.get("registrationNO").toString().trim()), String.valueOf(obj.get("AlarmSum"))));
				}
				String jsons = new ChartData().jsonData(charts, dataList);
				this.renderText(jsons);
			}
		}catch(Exception e){
			e.printStackTrace();
		}
	}

	
	
}
