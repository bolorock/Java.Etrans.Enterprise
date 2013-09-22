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
import com.etrans.bubiao.services.driving.DrivingRunAlarmServices;
import com.etrans.bubiao.sys.UserContext;
import com.etrans.common.util.FlexiGridUtil;


@Controller
@Scope("prototype")
@Namespace("/analyse/driving")
public class DrivingRunAlarmAction extends BaseAction{
	
	private static final long serialVersionUID = 1L;
	
	protected Logger log = LogManager.getLogger(this.getClass().getName());
	
	@Autowired
	private DrivingRunAlarmServices drivingRunAlarmServices;

	
	public DrivingRunAlarmServices getDrivingRunAlarmServices() {
		return drivingRunAlarmServices;
	}

	public void setDrivingRunAlarmServices(
			DrivingRunAlarmServices drivingRunAlarmServices) {
		this.drivingRunAlarmServices = drivingRunAlarmServices;
	}
    
	/**
	 * 查询--车辆行车报警
	 */
	@Action(value="findDrivingRunAlarmList")
	public void findDrivingRunAlarmList(){
		try {
			this.renderJSON(drivingRunAlarmServices.findDrivingRunAlarms(this.getGridParams()));
		} catch (Exception e) {
			e.printStackTrace();
		}
		
	}
	
	/**
	 * 导出--车辆行车报警
	 */
	@Action(value = "drivingRunAlarmExport")
	public void drivingRunAlarmExport() {
		
		Map<String,Object> params = FlexiGridUtil.parseParam(this.getGridParams());
		params = this.getExportParams(params);
		SessionUser user = UserContext.getLoginUser();
		if(!UserContext.isBsRootUser()){
			params.put("workUnitId", user.getWorkUnitID()); 
		}
		try {
			String[] titleArray = {};
			titleArray = new String[6];
			titleArray[0]="车牌号";
			titleArray[1]="轨迹分析组";
			titleArray[2]="记录生成时间";
			titleArray[3]="门限值(米)";
			titleArray[4]="报警时距离(米)";
			titleArray[5]="报警时时间";
			
			
			String[] columnArray = {};
			columnArray = new String[6];
			columnArray[0]="RegistrationNO";
			columnArray[1]="AnalyseGroupName";
			columnArray[2]="GenerateTime";
			columnArray[3]="BounceRunDistance";
			columnArray[4]="RecordDistance";
			columnArray[5]="RecordTime";
			
			List<Map<String,Object>> rows = drivingRunAlarmServices.getDrivingRunAlarmList(params);
			exportExl("drivingRunAlarm", titleArray, columnArray, rows);
			
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	
	
	
}
