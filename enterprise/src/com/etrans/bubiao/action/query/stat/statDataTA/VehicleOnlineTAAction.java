package com.etrans.bubiao.action.query.stat.statDataTA;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.struts2.convention.annotation.Action;
import org.apache.struts2.convention.annotation.Namespace;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;

import com.etrans.bubiao.action.BaseAction;
import com.etrans.bubiao.auth.SessionUser;
import com.etrans.bubiao.http.ParamKey;
import com.etrans.bubiao.services.query.stat.statDataTA.VehicleOnlineStatTAService;
import com.etrans.bubiao.sys.UserContext;
import com.etrans.common.util.FlexiGridUtil;
import com.etrans.common.util.json.JSONUtil;
import com.etrans.common.util.web.RowNumUtil;

@Controller
@Scope("prototype")
@Namespace("/query/stat/statDataTA")
public class VehicleOnlineTAAction extends BaseAction {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
    
	/**
	 *TA车辆在线统计	
	 */
	@Action(value = "vehicleOnlineList_TA")
	public void vehicleOnlineList_TA() {
		try {
			Map<String,Object> params = FlexiGridUtil.parseParam(this.getGridParams());
			if(params==null){
				params = new HashMap<String,Object>();
			}
			SessionUser user = UserContext.getLoginUser();
			if(user != null){
//				if(UserContext.isBsRootUser()){//是否是超级管理员
//					params.put("isSuper", true);
//				}else if(user.isWorkUnitSuperAdmin()){//是否为企业管理员
//					String fullId = user.getWorkUnitFullId();
//					params.put("fullId", fullId);
//				}else{//普通用户
//					params.put("userId", UserContext.getLoginUserID());
//				 }
//				
				
				if(UserContext.isBsRootUser()){
					params.put("isSuper", "0");
					
				}else if(user.isWorkUnitSuperAdmin()){
					String fullId = user.getWorkUnitFullId();
					params.put("fullId", fullId);
					params.put("isWorkUnitSuperAdmin", "1");
					
				}else{
					params.put("isWorkUnitSuperAdmin", "2");
					params.put("userId", user.getUserID());
				}
				
				}
			
			params.put(params.get("sortname")+"Order","");
			
			this.renderJSON(JSONUtil.toJson(vehicleOnlineStatTAService.getVehicleOnlineTA(params)));
		} catch (Exception e) {
			e.printStackTrace();
		}
		
	}
	
	/**
	 * TA车辆在线率统计导出EXECL表格
	 */
	@Action(value = "vehicleOnlineTAListExportExl")
	public void vehicleOnlineTAListExportExl() {
		
		try {
			// 导出数据时的开始页数
			String fromPage = getParameter("frompage");
			// 导出数据时的结束页数
			String toPage = getParameter("topage");
			
			Map<String,Object> params = FlexiGridUtil.parseParam(this.getGridParams());

			String pageSize = String.valueOf(params.get(ParamKey.PAGE_SIZE));
			Integer fromRow = RowNumUtil.getFromRowNum(fromPage, pageSize);
			Integer toRow = RowNumUtil.getToRowNum(toPage, pageSize);
			params.put("@FromRow",String.valueOf(fromRow));
			params.put("@ToRow",String.valueOf(toRow));

			SessionUser user = UserContext.getLoginUser();
			if(user != null){
//				if(UserContext.isBsRootUser()){//是否是超级管理员
//					params.put("isSuper", true);
//				}else if(user.isWorkUnitSuperAdmin()){//是否为企业管理员
//					String fullId = user.getWorkUnitFullId();
//					params.put("fullId", fullId);
//				}else{//普通用户
//					params.put("userId", UserContext.getLoginUserID());
//				 }
//				
				
				if(UserContext.isBsRootUser()){
					params.put("isSuper", "0");
					
				}else if(user.isWorkUnitSuperAdmin()){
					String fullId = user.getWorkUnitFullId();
					params.put("fullId", fullId);
					params.put("isWorkUnitSuperAdmin", "1");
					
				}else{
					params.put("isWorkUnitSuperAdmin", "2");
					params.put("userId", user.getUserID());
				}
				
				}
		
			params.put(params.get("sortname")+"Order","");
			
			String[] titleArray = {};
			titleArray = new String[7];
			titleArray[0]="车牌";
			titleArray[1]="所属单位";
			titleArray[2]="车辆在线总数";
			titleArray[3]="车辆在线率";
			titleArray[4]="车辆离线率";
			
			String[] columnArray = {};
			columnArray = new String[7];
			columnArray[0]="registrationNo";
			columnArray[1]="workUnitName";
			columnArray[2]="vehiclecount";
			columnArray[3]="onLineRate";
			columnArray[4]="offLineRate";
			
			List<Map<String,Object>>  rows = vehicleOnlineStatTAService.vehicleOnlineTAExportExl(params);
			exportExl("uplinePercent", titleArray, columnArray, rows);
			
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	@Autowired
	private VehicleOnlineStatTAService vehicleOnlineStatTAService;

	public VehicleOnlineStatTAService getVehicleOnlineStatTAService() {
		return vehicleOnlineStatTAService;
	}

	public void setVehicleOnlineStatTAService(
			VehicleOnlineStatTAService vehicleOnlineStatTAService) {
		this.vehicleOnlineStatTAService = vehicleOnlineStatTAService;
	}

	
	
}
