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
import com.etrans.bubiao.services.driving.DrivingOverSpeedRoadServices;
import com.etrans.bubiao.sys.UserContext;
import com.etrans.common.util.FlexiGridUtil;

@Controller
@Namespace("/analyse/driving")
@Scope("prototype")
public class DrivingOverSpeedRoadAction extends BaseAction{

	private static final long serialVersionUID = 3595832987485843371L;

	protected Logger log = LogManager.getLogger(this.getClass().getName());
	
	@Autowired
	private DrivingOverSpeedRoadServices drivingOverSpeedRoadServices;
	
	/**
	 * 查询--道路超速报表
	 */
	@Action(value="findDrivingOverSpeedRoadList")
	public void findDrivingOverSpeedRoadList(){
		try {
			this.renderJSON(drivingOverSpeedRoadServices.getDrivingOverSpeedRoads(this.getGridParams()));
		} catch (Exception e) {
			e.printStackTrace();
		}
		
	}
	
	/**
	 * 导出--道路超速报表
	 */
	@Action(value = "drivingOverSpeedRoadExport")
	public void drivingOverSpeedRoadExport() {
		
		Map<String,Object> params = FlexiGridUtil.parseParam(this.getGridParams());
		params = this.getExportParams(params);
		SessionUser user = UserContext.getLoginUser();
		if(!UserContext.isBsRootUser()){
			params.put("workUnitId", user.getWorkUnitID()); 
		}
		try {
			String[] titleArray = {};
			titleArray = new String[11];
			titleArray[0]="车牌号";
			titleArray[1]="轨迹分析组";
			titleArray[2]="记录生成时间";
			titleArray[3]="道路类型";
			titleArray[4]="道路名称";
			titleArray[5]="超速速度(KM/H)";
			titleArray[6]="速度门限(KM/H)";
			titleArray[7]="报警时间";
			titleArray[8]="超速开始时间";
			titleArray[9]="经度";
			titleArray[10]="纬度";
			
			
			String[] columnArray = {};
			columnArray = new String[11];
			columnArray[0]="RegistrationNO";
			columnArray[1]="AnalyseGroupName";
			columnArray[2]="GenerateTime";
			columnArray[3]="RoadTypeName";
			columnArray[4]="RoadName";
			columnArray[5]="Speed";
			columnArray[6]="BounceSpeed";
			columnArray[7]="OverTime";
			columnArray[8]="ospdStartTime";
			columnArray[9]="Longitude";
			columnArray[10]="Latitude";
			
			List<Map<String,Object>> rows = drivingOverSpeedRoadServices.getDrivingOverSpeedRoad(params);
			exportExl("DrivingOverSpeedRoad", titleArray, columnArray, rows);
			
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
}


