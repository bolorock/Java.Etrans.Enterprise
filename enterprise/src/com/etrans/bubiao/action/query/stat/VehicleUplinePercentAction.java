package com.etrans.bubiao.action.query.stat;

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
import com.etrans.bubiao.services.query.stat.VehicleUplinePercentServices;
import com.etrans.bubiao.sys.UserContext;
import com.etrans.common.util.FlexiGridUtil;
import com.etrans.common.util.json.JSONUtil;

@Controller
@Scope("prototype")
@Namespace("/query/stat")
public class VehicleUplinePercentAction extends BaseAction{
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	
	@Autowired
	private VehicleUplinePercentServices vehicleUplinePercentServices;

	
	/**
	 * 车辆上线率分页查询
	 */
	@Action(value = "findVehicleUplinePercent")
	public void findVehicleUplinePercent() {
		try {
			Map<String,Object> params = FlexiGridUtil.parseParam(this.getGridParams());
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
			this.renderJSON(JSONUtil.toJson(vehicleUplinePercentServices.findVehicleUplinePercent(params)));
			LogUtil.insertLog(LogActionTypes.READ, "成功", "车辆上线率查询", "", "车辆上线率查询");
		} catch (Exception e) {
			LogUtil.insertLog(LogActionTypes.READ, "失败", "车辆上线率查询", "", "车辆上线率查询");
			e.printStackTrace();
			
		}
	}
	
	/**
	 * 车辆上线率导出EXECL表格
	 */
	@Action(value="vehicleUplinePercentExportExl")
	public void vehicleUplinePercentExportExl(){
		try {
			
			String[] titleArray = {};
			titleArray = new String[8];
			//titleArray[0]="所属平台";
			titleArray[0]="所属单位";
			titleArray[1]="所属行业";
			titleArray[2]="所属区域";
			titleArray[3]="车牌号码";
			titleArray[4]="车牌颜色";
			titleArray[5]="上线车辆总数";
			titleArray[6]="车辆上线率%";
	
			
			
			
			String[] columnArray = {};
			columnArray = new String[8];
			//columnArray[0]="platformName";
			columnArray[0]="workUnitName";
			columnArray[1]="customKindName";
			columnArray[2]="areaName";
			columnArray[3]="RegistrationNo";
			columnArray[4]="RegistrationNOColor";
			columnArray[5]="UplineQty";
			columnArray[6]="UplinePercent";
		
			
			Map<String,Object> params = FlexiGridUtil.parseParam(this.getGridParams());
			params = this.getExportParams(params);
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
			
			List<Map<String,Object>> rows = vehicleUplinePercentServices.getVehicleUplinePercentList(params);
			exportExl("vehicleUplinePercentList", titleArray, columnArray, rows);
			LogUtil.insertLog(LogActionTypes.READ, "成功", "车辆上线率导出", "", "车辆上线率导出");
		} catch (Exception e) {
			LogUtil.insertLog(LogActionTypes.READ, "失败", "车辆上线率导出", "", "车辆上线率导出");
			e.printStackTrace();
		}
	}
	
	
}
