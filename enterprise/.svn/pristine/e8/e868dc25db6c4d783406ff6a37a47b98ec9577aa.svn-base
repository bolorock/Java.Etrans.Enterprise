package com.etrans.bubiao.action.driving;



import java.util.List;
import java.util.Map;

import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.apache.struts2.convention.annotation.Action;
import org.apache.struts2.convention.annotation.Namespace;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;

import com.etrans.bubiao.action.BaseAction;
import com.etrans.bubiao.auth.SessionUser;
import com.etrans.bubiao.services.driving.DrivingDriverOvertimeServices;
import com.etrans.bubiao.sys.UserContext;
import com.etrans.common.util.FlexiGridUtil;


@Controller
@Scope("prototype")
@Namespace("/analyse/driving")
public class DrivingDriverOvertimeAction extends BaseAction{
	
	private static final long serialVersionUID = 1L;
	
	protected Logger log = LogManager.getLogger(this.getClass().getName());
	
	@Autowired
	private DrivingDriverOvertimeServices drivingDriverOvertimeServices;

	

	public DrivingDriverOvertimeServices getDrivingDriverOvertimeServices() {
		return drivingDriverOvertimeServices;
	}

	public void setDrivingDriverOvertimeServices(
			DrivingDriverOvertimeServices drivingDriverOvertimeServices) {
		this.drivingDriverOvertimeServices = drivingDriverOvertimeServices;
	}

	/**
	 * 查询--司机疲劳驾驶报警
	 */
	@Action(value="findDrivingDriverOvertimeList")
	public void findDrivingDriverOvertimeList(){
		try {
			this.renderJSON(drivingDriverOvertimeServices.findDrivingDriverOvertimes(this.getGridParams()));
		} catch (Exception e) {
			e.printStackTrace();
		}
		
	}
	
	/**
	 * 导出--司机疲劳驾驶报警
	 */
	@Action(value = "drivingDriverOvertimeExport")
	public void drivingDriverOvertimeExport() {
		
		Map<String,Object> params = FlexiGridUtil.parseParam(this.getGridParams());
		params = this.getExportParams(params);
		SessionUser user = UserContext.getLoginUser();
		if(!UserContext.isBsRootUser()){
			params.put("workUnitId", user.getWorkUnitID()); 
		}
		try {
			String[] titleArray = {};
			titleArray = new String[12];
			titleArray[0]="车牌号";
			titleArray[1]="轨迹分析组";
			titleArray[2]="记录生成时间";
			titleArray[3]="开始时间";
			titleArray[4]="截止时间";
			titleArray[5]="司机";
			titleArray[6]="门限值(KM或分)";
			titleArray[7]="记录值(KM或分)";
			titleArray[8]="疲劳类型";
			titleArray[9]="疲劳程度";
			titleArray[10]="经度";
			titleArray[11]="纬度";
		
			
			
			String[] columnArray = {};
			columnArray = new String[12];
			columnArray[0]="RegistrationNO";
			columnArray[1]="AnalyseGroupName";
			columnArray[2]="GenerateTime";
			columnArray[3]="OvertimeBegin";
			columnArray[4]="OvertimeEnd";
			columnArray[5]="Driver";
			columnArray[6]="BounceOverValue";
			columnArray[7]="RecordOverValue";
			columnArray[8]="OverType";
			columnArray[9]="TireType";
			columnArray[10]="Longitude";
			columnArray[11]="Latitude";
			
			
			
			List<Map<String,Object>> rows = drivingDriverOvertimeServices.getDrivingDriverOvertime(params);
			exportExl("drivingDriverOvertime", titleArray, columnArray, rows);
			
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	
	
	
}
