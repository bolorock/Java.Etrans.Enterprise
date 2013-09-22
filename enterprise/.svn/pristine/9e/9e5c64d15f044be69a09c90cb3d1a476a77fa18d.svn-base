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
import com.etrans.bubiao.services.driving.DrivingDriverOverSpeedServices;
import com.etrans.bubiao.sys.UserContext;
import com.etrans.common.util.FlexiGridUtil;


@Controller
@Scope("prototype")
@Namespace("/analyse/driving")
public class DrivingDriverOverSpeedAction extends BaseAction{
	
	private static final long serialVersionUID = 1L;
	
	protected Logger log = LogManager.getLogger(this.getClass().getName());
	
	@Autowired
	private DrivingDriverOverSpeedServices drivingDriverOverSpeedServices;


    
	public DrivingDriverOverSpeedServices getDrivingDriverOverSpeedServices() {
		return drivingDriverOverSpeedServices;
	}

	public void setDrivingDriverOverSpeedServices(
			DrivingDriverOverSpeedServices drivingDriverOverSpeedServices) {
		this.drivingDriverOverSpeedServices = drivingDriverOverSpeedServices;
	}

	/**
	 * 查询--司机超速行驶报警
	 */
	@Action(value="findDrivingDriverOverSpeedList")
	public void findDrivingDriverOverSpeedList(){
		try {
			this.renderJSON(drivingDriverOverSpeedServices.findDrivingDriverOverSpeeds(this.getGridParams()));
		} catch (Exception e) {
			e.printStackTrace();
		}
		
	}
	
	/**
	 * 导出--司机超速行驶报警
	 */
	@Action(value = "DrivingDriverOverSpeeExport")
	public void DrivingDriverOverSpeeExport() {
		
		Map<String,Object> params = FlexiGridUtil.parseParam(this.getGridParams());
		params = this.getExportParams(params);
		SessionUser user = UserContext.getLoginUser();
		if(!UserContext.isBsRootUser()){
			params.put("workUnitId", user.getWorkUnitID()); 
		}
		try {
			String[] titleArray = {};
			titleArray = new String[20];
			titleArray[0]="车牌号";
			titleArray[1]="轨迹分析组";
			titleArray[2]="门限速度(Km/h)";
			titleArray[3]="门限时长";
			titleArray[4]="超速类型";
			
			titleArray[5]="持续时间";
			titleArray[6]="里程";
			titleArray[7]="最大速度(Km/h)";
			titleArray[8]="平均速度(Km/h)";
			titleArray[9]="开始时间";
			titleArray[10]="结束时间";
			
			titleArray[11]="IC卡编号";
			titleArray[12]="驾驶证号";
			titleArray[13]="司机姓名";
			titleArray[14]="开始经度";
			titleArray[15]="结束经度";
			
			titleArray[16]="开始纬度";
			titleArray[17]="结束纬度";
			titleArray[18]="超速处理";
			titleArray[19]="处理描述";
			
			
			
			String[] columnArray = {};
			columnArray = new String[20];
			columnArray[0]="RegistrationNo";
			columnArray[1]="AnalyseGroupName";
			columnArray[2]="BounceSpeed";
			columnArray[3]="BounceTime";
			columnArray[4]="OverSpeedType";
			
			columnArray[5]="DurationText";
			columnArray[6]="Mileages";
			columnArray[7]="MaxSpeed";
			columnArray[8]="AvgSpeed";
			columnArray[9]="StartTime";
			columnArray[10]="EndTime";
			
			columnArray[11]="ICCardNo";
			columnArray[12]="LicenseNo";
			columnArray[13]="DriverName";
			columnArray[14]="StartLongitude";
			columnArray[15]="EndLongitude";
			
			columnArray[16]="StartLatitude";
			columnArray[17]="EndLatitude";
			columnArray[18]="OverSpeedDeal";
			columnArray[19]="DealDescription";
			
			
			List<Map<String,Object>> rows = drivingDriverOverSpeedServices.getDrivingDriverOverSpeed(params);
			exportExl("DrivingDriverOverSpee", titleArray, columnArray, rows);
			
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	
	
	
}
