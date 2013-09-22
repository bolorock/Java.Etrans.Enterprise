/**
 * VehicleAction.java
 * Create on 2012-5-17 10:59:52
 * Copyright (c) 2012 by e_trans.
 */
package com.etrans.bubiao.action.sys;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Random;

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
import com.etrans.bubiao.entities.Result;
import com.etrans.bubiao.entities.Vehicle;
import com.etrans.bubiao.entities.VehicleGroup;
import com.etrans.bubiao.services.IbatisServices;
import com.etrans.bubiao.services.sys.VehicleGroupServices;
import com.etrans.bubiao.services.sys.VehicleServices;
import com.etrans.common.util.FlexiGridUtil;
import com.etrans.common.util.PageBean;

/**
 * 车辆组管理
 * 
 * @author feltky
 * @version 1.0
 * @since 2012-05-17
 */
@Controller
@Scope("prototype")
@Namespace("/sys")
public class VehicleGroupAction extends BaseAction{
	
	private static final long serialVersionUID = 1L;
	
	protected Logger log = LogManager.getLogger(this.getClass().getName());
	
	@Autowired
	private VehicleServices vehicleServices;
	
	@Autowired
	private VehicleGroupServices vehicleGroupServices;
	
	@Autowired
	private IbatisServices ibatisServices;

	private List<Vehicle> listGroup;
	
 	private HashMap vehiclGroupInfo;
	
 	private VehicleGroup vehicleGroupBean;
 	/**
 	 * 车辆列表()
 	 */
 	private String[] vehicleArys;


	/**
	 * 获取车辆组树形结构
	 */
	@Action(value="getVehicleGoupTreeWorkUnitList")
	public void getVehicleGoupTreeWorkUnitList(){
		try {
			this.renderJSON(vehicleGroupServices.getVehicleGroupTreeJson(getParameter("id"),new Random().nextLong()));
		} catch (Exception e) {
			log.error("生成根节点异常！"+e.getMessage());
		}	
	}
	
	/**
	 * 获取所属单位的车辆列表
	 */			
	@Action(value="getVehicleList")
	public void getVehicleListByWorkUnitId(){
		try {
			HashMap<String,Object> mapParam = new HashMap<String,Object>();
			mapParam.put("id", getParameter("nodeId"));		
			mapParam.put("workId", getParameter("workId"));
			List<Map> listGroup = ibatisServices.queryForList(Map.class, "getVehicleByGroupId", mapParam);
			this.renderJSON(vehicleGroupServices.buildJsonVehicleGroup(listGroup));
		} catch (Exception e) {
			log.error(e.getMessage());
		}
	}
	
	/**
	 * 新建车辆分组
	 */
	@Action(value="addVehicleGroup")
	public void addVehicleGroup(){
		try {	
			// 车辆、车组关系
			String vehicles = this.getParameter("vehicles");
			String[] vehclesArys = null;
			if(vehicles!=null && vehicles.length()>0)vehclesArys = vehicles.split(",");
			//车组信息
			long nVehicleGroupID = vehicleGroupServices.addVehicleGroup(vehicleGroupBean);
			vehicleGroupServices.addGroupVehicle(vehclesArys,nVehicleGroupID);
			super.renderJSON("true");
			LogUtil.insertLog(LogActionTypes.INSERT, "成功", "车辆组管理", "", "新增车辆分组");
		} catch (Exception e) {
			LogUtil.insertLog(LogActionTypes.INSERT, "失败", "车辆组管理", "", "新增车辆分组");
			log.error(e.getMessage());
			super.renderJSON("false");
		}
	}
	/**
	 * 修改车辆分组
	 */
	@Action(value="updateVehicleGroup")
	public void updateVehicleGroup(){
		try {	
			// 车辆、车组关系
			String vehicles = this.getParameter("vehicles");
			String[] vehclesArys = null;
			if(vehicles!=null && vehicles.length()>0)vehclesArys = vehicles.split(",");
			//车组信息
			ibatisServices.update("updateVehicleGroup",vehicleGroupBean);
			ibatisServices.delete("delGroupVehicleByGroupId", vehicleGroupBean);
			vehicleGroupServices.addGroupVehicle(vehclesArys,vehicleGroupBean.getId());
			super.renderJSON("true");
			LogUtil.insertLog(LogActionTypes.UPDATE, "成功", "车辆组管理", "", "修改车辆分组");
		} catch (Exception e) {
			LogUtil.insertLog(LogActionTypes.UPDATE, "失败", "车辆组管理", "", "修改车辆分组");
			e.printStackTrace();
			log.error(e.getMessage());
			super.renderJSON("false");
		}
	}
	
	/**
	 * 删除车辆分组
	 */
	@Action(value="delVehicleGroup")
	public void delVehicleGroup(){
		try {
//			vehicleGroupServices.getVehicleListByVehicleGroupId(map, random)
			vehicleGroupServices.delVehicleGroup(getParameter("id"));
			super.renderText("true");
			LogUtil.insertLog(LogActionTypes.DELETE, "成功", "车辆组管理", "", "删除车辆分组");
		} catch (Exception e) {
			LogUtil.insertLog(LogActionTypes.DELETE, "失败", "车辆组管理", "", "删除车辆分组");
			super.renderText("false");
		}
	}
	
	/**
	 * 根据车辆组ID查询车辆列表
	 */
	@Action(value="getVehicleByGroupId")
	public void getVehicleByGroupId(){	
		try{	
			PageBean bean = new PageBean();
			Map<String,Object> param = FlexiGridUtil.parseJSONParam(getGridParams());
			if(param.get("workUnitId")==null && param.get("groupId")==null && param.get("RegistrationNO")==null){				
				bean.setPage(0);
				bean.setRows(new ArrayList());
				bean.setTotal(0l);
			}else{
				List<HashMap<String,Object>> list = vehicleGroupServices.getVehicleListByVehicleGroupId(param,new Random().nextLong());
				Long toTal = vehicleGroupServices.findVehicleCount(param,new Random().nextLong());					
				bean.setPage(Integer.valueOf(param.get("page") + ""));
				bean.setRows(list);
				bean.setTotal(toTal);
			}
			this.renderJSON(bean);		
		}catch (Exception e){
			log.error("查询错误!异常【"+e.getMessage()+"】");
		}
	}
	
 	public List<Vehicle> getListGroup() {
		return listGroup;
	}

	public void setListGroup(List<Vehicle> listGroup) {
		this.listGroup = listGroup;
	}

	public HashMap getVehiclGroupInfo() {
		return vehiclGroupInfo;
	}

	public void setVehiclGroupInfo(HashMap vehiclGroupInfo) {
		this.vehiclGroupInfo = vehiclGroupInfo;
	}

	public VehicleGroup getVehicleGroupBean() {
		return vehicleGroupBean;
	}

	public void setVehicleGroupBean(VehicleGroup vehicleGroupBean) {
		this.vehicleGroupBean = vehicleGroupBean;
	}

	public String[] getVehicleArys() {
		return vehicleArys;
	}

	public void setVehicleArys(String[] vehicleArys) {
		this.vehicleArys = vehicleArys;
	}
}
