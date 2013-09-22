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
import com.etrans.bubiao.services.driving.DrivingOverSpeedRoadCYServices;
import com.etrans.bubiao.sys.UserContext;
import com.etrans.common.util.FlexiGridUtil;


@Controller
@Scope("prototype")
@Namespace("/analyse/driving")
public class DrivingOverSpeedRoadCYAction extends BaseAction{
	
	private static final long serialVersionUID = 1L;
	
	protected Logger log = LogManager.getLogger(this.getClass().getName());
	
	@Autowired
	private DrivingOverSpeedRoadCYServices drivingOverSpeedRoadCYServices;

	
    public DrivingOverSpeedRoadCYServices getDrivingOverSpeedRoadCYServices() {
		return drivingOverSpeedRoadCYServices;
	}

	public void setDrivingOverSpeedRoadCYServices(
			DrivingOverSpeedRoadCYServices drivingOverSpeedRoadCYServices) {
		this.drivingOverSpeedRoadCYServices = drivingOverSpeedRoadCYServices;
	}

	/**
	 * 查询--道路类型超速（长运）
	 */
	@Action(value="findDrivingOverSpeedRoadCYList")
	public void findDrivingOverSpeedRoadCYList(){
		try {
			this.renderJSON(drivingOverSpeedRoadCYServices.findDrivingOverSpeedRoadCYs(this.getGridParams()));
		} catch (Exception e) {
			e.printStackTrace();
		}
		
	}
	
	/**
	 * 导出--道路类型超速（长运）
	 */
	@Action(value = "drivingOverSpeedRoadCYListExport")
	public void drivingOverSpeedRoadCYListExport() {
		
		Map<String,Object> params = FlexiGridUtil.parseParam(this.getGridParams());
		params = this.getExportParams(params);
		SessionUser user = UserContext.getLoginUser();
		if(!UserContext.isBsRootUser()){
			params.put("workUnitId", user.getWorkUnitID()); 
		}
		try {
			String[] titleArray = {};
			titleArray = new String[14];
			titleArray[0]="车牌号";
			titleArray[1]="轨迹分析组";
			titleArray[2]="记录生成时间";
			titleArray[3]="超速类型";
			titleArray[4]="司机";
			titleArray[5]="开始时间";
			titleArray[6]="结束时间";
			titleArray[7]="持续时间";
			titleArray[8]="持续里程";
			titleArray[9]="平均速度(Km/h)";
			titleArray[10]="最大速度(Km/h)";
			titleArray[11]="门限速度(Km/h)";
			titleArray[12]="开始经度";
			titleArray[13]="开始纬度";
			
			
			
			String[] columnArray = {};
			columnArray = new String[14];
			columnArray[0]="RegistrationNO";
			columnArray[1]="AnalyseGroupName";
			columnArray[2]="GenerateTime";
			columnArray[3]="SpeedType";
			columnArray[4]="DriverName";
			columnArray[5]="StartTime";
			columnArray[6]="EndTime";
			columnArray[7]="Duration";
			columnArray[8]="Mileages";
			columnArray[9]="AvgSpeed";
			columnArray[10]="MaxSpeed";
			columnArray[11]="BounceOverSpeed";
			columnArray[12]="StartLongitude";
			columnArray[13]="StartLatitude";
			
			List<Map<String,Object>> rows = drivingOverSpeedRoadCYServices.getDrivingOverSpeedRoadCY(params);
			exportExl("drivingOverSpeedRoadCY", titleArray, columnArray, rows);
			
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	
	
	
}
