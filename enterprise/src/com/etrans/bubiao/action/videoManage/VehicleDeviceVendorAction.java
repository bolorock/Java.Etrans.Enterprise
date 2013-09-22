package com.etrans.bubiao.action.videoManage;

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
import com.etrans.bubiao.services.videoManage.VehicleDeviceVendorServices;
import com.etrans.bubiao.sys.UserContext;
import com.etrans.common.util.FlexiGridUtil;
import com.etrans.common.util.json.JSONUtil;

/**
 * 设备厂商
 * @author tjb
 * @version 1.0
 */
@Controller
@Scope("prototype")
@Namespace("/videoManage")
public class VehicleDeviceVendorAction extends BaseAction {
	private static final long serialVersionUID = 1L;
	
	@Autowired
	private VehicleDeviceVendorServices vehicleDeviceVendorServices;
	/**
	 * 设备厂商分页查询
	 * 
	 */
	@Action(value = "vehicleDeviceVendorList")
	public void vehicleDeviceVendorList() {
		try {
			Map<String, Object> params = FlexiGridUtil.parseParam(this.getGridParams());
			SessionUser user = UserContext.getLoginUser();
			if (user != null) {
				if (UserContext.isBsRootUser()) {
					params.put("isSuper", true);
				} else {
					String fullId = user.getWorkUnitFullId();
					params.put("fullId", fullId);
				}
			}
			this.renderJSON(JSONUtil.toJson(vehicleDeviceVendorServices.vehicleDeviceVendorList(params)));
			LogUtil.insertLog(LogActionTypes.READ, "成功", "设备厂商信息管理", "", "查询设备厂商");	
		} catch (Exception e) {
			e.printStackTrace();
			LogUtil.insertLog(LogActionTypes.READ, "失败", "设备厂商信息管理", "", "查询设备厂商");	
		}
	}
	/**
	 **新增设备厂商信息详细
	 */
	@SuppressWarnings("unchecked")
	@Action(value = "createVehicleDeviceVendor")
	public void createVehicleDeviceVendor() {
		 
		String jsonParams = getParameter("params"); 
		Map<String, Object> params = JSONUtil.fromJson(jsonParams, Map.class);

		try {
			this.renderJSON(vehicleDeviceVendorServices.createVehicleDeviceVendor(params));
			LogUtil.insertLog(LogActionTypes.INSERT, "成功", "设备厂商信息管理", "", "新增设备厂商信息");
		} catch (Exception e) {
			LogUtil.insertLog(LogActionTypes.INSERT, "失败", "设备厂商信息管理", "", "新增设备厂商信息");
			e.printStackTrace();
			log.debug("新增设备厂商信息出错！");
		}
	}
	
		/**
		 * 根据ID查询设备厂商信息详细
		 */
		@Action(value = "getVehicleDeviceVendorById")
		public void getVehicleDeviceVendorById() {

			String id = getParameter("id");
			System.out.println(id);
			Map<String, Object> whereMap = new HashMap<String, Object>();
			whereMap.put("id", id);
			try {
				this.renderJSON(JSONUtil.toJson(vehicleDeviceVendorServices.getVehicleDeviceVendorById(whereMap)));
			} catch (Exception e) {
				e.printStackTrace();
				log.debug("根据ID查询设备厂商信息出错！");
			}
		}
		
		/**
		 * 根据ID修改设备厂商信息
		 */
		@SuppressWarnings("unchecked")
		@Action(value = "updateVehicleDeviceVendor")
		public void updateVehicleDeviceVendor() {
			
			String jsonParams = getParameter("params"); 
			Map<String, Object> whereMap = JSONUtil.fromJson(jsonParams, Map.class);
			try {
				this.renderJSON(vehicleDeviceVendorServices.updateVehicleDeviceVendor(whereMap));
				LogUtil.insertLog(LogActionTypes.UPDATE, "成功", "设备厂商信息管理", "", "修改设备厂商信息");
			} catch (Exception e) {
				LogUtil.insertLog(LogActionTypes.UPDATE, "失败", "设备厂商信息管理", "", "修改设备厂商信息");
				e.printStackTrace();
				log.debug("根据ID修改设备厂商信息出错！");
			}
		}
		
		
		
		/**
		 * 根据ID删除设备厂商信息
		 */
		@Action(value = "deleteVehicleDeviceVendor")
		public void deleteVehicleDeviceVendor() {

			String ids= getParameter("ids");
			Map<String, Object> whereMap = new HashMap<String, Object>();
			whereMap.put("id", ids);
			try {
				this.renderJSON(vehicleDeviceVendorServices.deleteVehicleDeviceVendor(whereMap));
				LogUtil.insertLog(LogActionTypes.DELETE, "成功", "设备厂商信息管理", "", "删除设备厂商信息");
			} catch (Exception e) {
				LogUtil.insertLog(LogActionTypes.DELETE, "失败", "设备厂商信息管理", "", "删除设备厂商信息");
				e.printStackTrace();
				log.debug("根据ID删除设备厂商信息出错！");
			}
		}	
		
		
		/**
		 * 验证不能有相同的通信号
		 */
		@Action(value = "checkVehicleDeviceVendorName")
		public void checkVehicleDeviceVendorName() {
			
			String name = getParameter("name"); 
			String id = getParameter("id"); 
			Map<String, Object> whereMap = new HashMap<String, Object>();
			whereMap.put("name", name);
			whereMap.put("id", id);
			try {
				this.renderJSON(vehicleDeviceVendorServices.checkVehicleDeviceVendorName(whereMap));
			} catch (Exception e) {
				e.printStackTrace();
			}
		}
		/**
		 * 导出设备厂商列表到EXCEL
		 */
		@Action(value = "vehicleDeviceVendorExport")
		public void vehicleDeviceVendorExport() {
			
			Map<String,Object> params = FlexiGridUtil.parseParam(this.getGridParams());
			params = this.getExportParams(params);
			
			try {
				
				String[] titleArray = {};
				titleArray = new String[4];
				titleArray[0]="名称";
				titleArray[1]="代码";
				titleArray[2]="备注";
				
				
				
				
				String[] columnArray = {};
				columnArray = new String[4];
				columnArray[0]="Name";
				columnArray[1]="Code";
				columnArray[2]="Memo";
				
				
				
				List<Map<String,Object>> rows = vehicleDeviceVendorServices.getVehicleDeviceVendorList(params);
				exportExl("vehicledeviceVendor", titleArray, columnArray, rows);
				LogUtil.insertLog(LogActionTypes.READ, "成功", "设备厂商信息管理", "", "导出设备厂商");	
			} catch (Exception e) {
				LogUtil.insertLog(LogActionTypes.READ, "失败", "设备厂商信息管理", "", "导出设备厂商");	
				e.printStackTrace();
			}
		}
	
}
