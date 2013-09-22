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
import com.etrans.bubiao.services.driving.DrivingOverSpeedServices;
import com.etrans.bubiao.sys.UserContext;
import com.etrans.common.util.FlexiGridUtil;

@Controller
@Namespace("/analyse/driving")
@Scope("prototype")
public class DrivingOverSpeedAction extends BaseAction{

	private static final long serialVersionUID = 3595832987485843371L;

	protected Logger log = LogManager.getLogger(this.getClass().getName());
	
	@Autowired
	private DrivingOverSpeedServices drivingOverSpeedServices;
	
	/**
	 * 查询--行车速度报表
	 */
	@Action(value="findDrivingOverSpeedList")
	public void findDrivingOverSpeedList(){
		try {
			this.renderJSON(drivingOverSpeedServices.getDrivingOverSpeeds(this.getGridParams()));
		} catch (Exception e) {
			e.printStackTrace();
		}
		
	}
	
	/**
	 * 导出--行车速度报表
	 */
	@Action(value = "drivingOverSpeedExport")
	public void drivingOverSpeedExport() {
		
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
			titleArray[3]="门限值(KM/H)";
			titleArray[4]="门限时间(分)";
			titleArray[5]="记录值(KM/H)";
			titleArray[6]="超速时段(分)";
			titleArray[7]="超速类型";
			titleArray[8]="超速开始时间";
			titleArray[9]="超速截止时间";
			titleArray[10]="经度";
			titleArray[11]="纬度";
			
			
			String[] columnArray = {};
			columnArray = new String[12];
			columnArray[0]="RegistrationNO";
			columnArray[1]="AnalyseGroupName";
			columnArray[2]="GenerateTime";
			columnArray[3]="BounceOverSpeed";
			columnArray[4]="BounceTime";
			columnArray[5]="RecordSpeed";
			columnArray[6]="RecordTime";
			columnArray[7]="OverSpeedType";
			columnArray[8]="OverSpeedTimebegin";
			columnArray[9]="OverSpeedTimeEnd";
			
			columnArray[10]="Longitude";
			columnArray[11]="Latitude";
			
			List<Map<String,Object>> rows = drivingOverSpeedServices.getDrivingOverSpeed(params);
			exportExl("DrivingOverSpeed", titleArray, columnArray, rows);
			
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
}


