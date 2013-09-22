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
import com.etrans.bubiao.services.driving.DrivingRoadOverSpeedServices;
import com.etrans.bubiao.sys.UserContext;
import com.etrans.common.util.FlexiGridUtil;

@Controller
@Namespace("/analyse/driving")
@Scope("prototype")
public class DrivingRoadOverSpeedAction extends BaseAction{

	private static final long serialVersionUID = 3595832987485843371L;

	protected Logger log = LogManager.getLogger(this.getClass().getName());
	
	@Autowired
	private DrivingRoadOverSpeedServices drivingRoadOverSpeedServices;
	
	/**
	 * 查询--路段速度报表
	 */
	@Action(value="findDrivingRoadOverSpeedList")
	public void findDrivingRoadOverSpeedList(){
		try {
			this.renderJSON(drivingRoadOverSpeedServices.getDrivingRoadOverSpeeds(this.getGridParams()));
		} catch (Exception e) {
			e.printStackTrace();
		}
		
	}
	
	/**
	 * 导出--路段速度报表
	 */
	@Action(value = "drivingRoadOverSpeedExport")
	public void drivingRoadOverSpeedExport() {
		
		Map<String,Object> params = FlexiGridUtil.parseParam(this.getGridParams());
		params = this.getExportParams(params);
		SessionUser user = UserContext.getLoginUser();
		if(!UserContext.isBsRootUser()){
			params.put("workUnitId", user.getWorkUnitID()); 
		}
		try {
			String[] titleArray = {};
			titleArray = new String[10];
			titleArray[0]="车牌号";
			titleArray[1]="轨迹分析组";
			titleArray[2]="记录生成时间";
			titleArray[3]="门限值(KM/H)";
			titleArray[4]="检测路段";
			titleArray[5]="记录值(KM/H)";
			titleArray[6]="超速类型";
			titleArray[7]="报警时间";
			titleArray[8]="经度";
			titleArray[9]="纬度";
			
			
			String[] columnArray = {};
			columnArray = new String[10];
			columnArray[0]="RegistrationNO";
			columnArray[1]="AnalyseGroupName";
			columnArray[2]="GenerateTime";
			columnArray[3]="BounceOverSpeed";
			columnArray[4]="ParamRoadName";
			columnArray[5]="RecordSpeed";
			columnArray[6]="OverSpeedType";
			columnArray[7]="OverSpeedTime";
			columnArray[8]="Longitude";
			columnArray[9]="Latitude";
			
			List<Map<String,Object>> rows = drivingRoadOverSpeedServices.getDrivingRoadOverSpeed(params);
			exportExl("DrivingRoadOverSpeed", titleArray, columnArray, rows);
			
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
}

