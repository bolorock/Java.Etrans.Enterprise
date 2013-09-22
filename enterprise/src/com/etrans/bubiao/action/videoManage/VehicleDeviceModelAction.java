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
import com.etrans.bubiao.services.videoManage.VehicleDeviceModelServices;
import com.etrans.bubiao.sys.UserContext;
import com.etrans.common.util.FlexiGridUtil;
import com.etrans.common.util.json.JSONUtil;

/**
 * 外设型号
 * @author tjb
 * @version 1.0
 */
@Controller
@Scope("prototype")
@Namespace("/videoManage")
public class VehicleDeviceModelAction extends BaseAction {
	private static final long serialVersionUID = 1L;

	@Autowired
	private VehicleDeviceModelServices vehicleDeviceModelServices;

	/**
	 * 外设型号分页查询
	 * 
	 */
	@Action(value = "vehicleDeviceModelList")
	public void vehicleDeviceModelList() {
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
			this.renderJSON(JSONUtil.toJson(vehicleDeviceModelServices.vehicleDeviceModelList(params)));
		} catch (Exception e) {
			e.printStackTrace();
			log.debug("查询外设型号信息出错！");
		}
	}
	/**
	 **新增外设型号信息详细
	 */
	@SuppressWarnings("unchecked")
	@Action(value = "createVehicleDeviceModel")
	public void createVehicleDeviceModel() {
		 
		String jsonParams = getParameter("params"); 
		Map<String, Object> params = JSONUtil.fromJson(jsonParams, Map.class);

		try {
			this.renderJSON(vehicleDeviceModelServices.createVehicleDeviceModel(params));
			LogUtil.insertLog(LogActionTypes.INSERT, "成功", "外设型号信息管理", "", "新增外设型号信息");
		} catch (Exception e) {
			LogUtil.insertLog(LogActionTypes.INSERT, "失败", "外设型号信息管理", "", "新增外设型号信息");
			e.printStackTrace();
			log.debug("新增外设型号信息出错！");
		}
	}
	
		/**
		 * 根据ID查询外设型号信息详细
		 */
		@Action(value = "getVehicleDeviceModelById")
		public void getVehicleDeviceModelById() {

			String id = getParameter("id");
			System.out.println(id);
			Map<String, Object> whereMap = new HashMap<String, Object>();
			whereMap.put("id", id);
			try {
				this.renderJSON(JSONUtil.toJson(vehicleDeviceModelServices.getVehicleDeviceModelById(whereMap)));
			} catch (Exception e) {
				e.printStackTrace();
				log.debug("根据ID查询外设型号信息出错！");
			}
		}
		
		/**
		 * 根据ID修改外设型号信息
		 */
		@SuppressWarnings("unchecked")
		@Action(value = "updateVehicleDeviceModel")
		public void updateVehicleDeviceModel() {
			
			String jsonParams = getParameter("params"); 
			Map<String, Object> whereMap = JSONUtil.fromJson(jsonParams, Map.class);
			try {
				this.renderJSON(vehicleDeviceModelServices.updateVehicleDeviceModel(whereMap));
				LogUtil.insertLog(LogActionTypes.UPDATE, "成功", "外设型号信息管理", "", "修改外设型号信息");
			} catch (Exception e) {
				LogUtil.insertLog(LogActionTypes.UPDATE, "失败", "外设型号信息管理", "", "修改外设型号信息");
				e.printStackTrace();
				log.debug("根据ID修改外设型号信息出错！");
			}
		}
		
		
		
		/**
		 * 根据ID删除外设型号信息
		 */
		@Action(value = "deleteVehicleDeviceModel")
		public void deleteVehicleDeviceModel() {

			String ids= getParameter("ids");
			Map<String, Object> whereMap = new HashMap<String, Object>();
			whereMap.put("id", ids);
			try {
				this.renderJSON(vehicleDeviceModelServices.deleteVehicleDeviceModel(whereMap));
				LogUtil.insertLog(LogActionTypes.DELETE, "成功", "外设型号信息管理", "", "删除外设型号信息");
			} catch (Exception e) {
				LogUtil.insertLog(LogActionTypes.DELETE, "失败", "外设型号信息管理", "", "删除外设型号信息");
				e.printStackTrace();
				log.debug("根据ID删除外设型号信息出错！");
			}
		}	
		
		
		/**
		 * 验证不能有相同的通信号
		 */
		@Action(value = "checkVehicleDeviceModelName")
		public void checkVehicleDeviceModelName() {
			
			String name = getParameter("name"); 
			String id = getParameter("id"); 
			Map<String, Object> whereMap = new HashMap<String, Object>();
			whereMap.put("name", name);
			whereMap.put("id", id);
			try {
				this.renderJSON(vehicleDeviceModelServices.checkVehicleDeviceModelName(whereMap));
			} catch (Exception e) {
				e.printStackTrace();
			}
		}
		/**
		 * 导出外设型号列表到EXCEL
		 */
		@Action(value = "vehicleDeviceModelExport")
		public void vehicleDeviceModelExport() {
			
			Map<String,Object> params = FlexiGridUtil.parseParam(this.getGridParams());
			params = this.getExportParams(params);
			
			try {
				
				String[] titleArray = {};
				titleArray = new String[7];
				titleArray[0]="名称";
				titleArray[1]="代码";
				titleArray[2]="所属设备名称";
				titleArray[3]="品牌名称";
				titleArray[4]="厂商名称";
				titleArray[5]="参数";
				titleArray[6]="备注";
				
				
				
				
				String[] columnArray = {};
				columnArray = new String[7];
				columnArray[0]="Name";
				columnArray[1]="Code";
				columnArray[2]="DeviceTypeName";
				columnArray[3]="BrandName";
				columnArray[4]="DeviceVendorName";
				columnArray[5]="ParamValue";
				columnArray[6]="Memo";
				
				
				
				List<Map<String,Object>> rows = vehicleDeviceModelServices.getVehicleDeviceModelList(params);
				exportExl("vehicledevicemodel", titleArray, columnArray, rows);
				
			} catch (Exception e) {
				e.printStackTrace();
			}
		}
	
}
