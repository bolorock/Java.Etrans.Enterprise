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
import com.etrans.bubiao.services.driving.DrivingDOTGZSJWServices;
import com.etrans.bubiao.sys.UserContext;
import com.etrans.common.util.FlexiGridUtil;


@Controller
@Scope("prototype")
@Namespace("/analyse/driving")
public class DrivingDOTGZSJWAction extends BaseAction{
	
	private static final long serialVersionUID = 1L;
	
	protected Logger log = LogManager.getLogger(this.getClass().getName());
	
	@Autowired
	private DrivingDOTGZSJWServices drivingDOTGZSJWServices;


    
	public DrivingDOTGZSJWServices getDrivingDOTGZSJWServices() {
		return drivingDOTGZSJWServices;
	}

	public void setDrivingDOTGZSJWServices(
			DrivingDOTGZSJWServices drivingDOTGZSJWServices) {
		this.drivingDOTGZSJWServices = drivingDOTGZSJWServices;
	}

	/**
	 * 查询--疲劳驾驶报警（交委）
	 */
	@Action(value="findDrivingDOTGZSJWList")
	public void findDrivingDOTGZSJWList(){
		try {
			this.renderJSON(drivingDOTGZSJWServices.findDrivingDOTGZSJWs(this.getGridParams()));
		} catch (Exception e) {
			e.printStackTrace();
		}
		
	}
	
	/**
	 * 导出--疲劳驾驶报警（交委）
	 */
	@Action(value = "drivingDOTGZSJWExport")
	public void drivingDOTGZSJWExport() {
		
		Map<String,Object> params = FlexiGridUtil.parseParam(this.getGridParams());
		params = this.getExportParams(params);
		SessionUser user = UserContext.getLoginUser();
		if(!UserContext.isBsRootUser()){
			params.put("workUnitId", user.getWorkUnitID()); 
		}
		try {
			String[] titleArray = {};
			titleArray = new String[8];
			titleArray[0]="车牌号";
			titleArray[1]="轨迹分析组";
			titleArray[2]="记录生成时间";
			titleArray[3]="开始时间";
			titleArray[4]="截止时间";
			titleArray[5]="疲劳程度";
			titleArray[6]="疲劳驾驶时长(分)";
			titleArray[7]="疲劳驾驶距离(公里)";
			
			
			String[] columnArray = {};
			columnArray = new String[8];
			columnArray[0]="RegistrationNO";
			columnArray[1]="AnalyseGroupName";
			columnArray[2]="GenerateTime";
			columnArray[3]="BeginTime";
			columnArray[4]="EndTime";
			columnArray[5]="TireType";
			columnArray[6]="DOTDuration";
			columnArray[7]="DOTMileage";
			
			List<Map<String,Object>> rows = drivingDOTGZSJWServices.getDrivingDOTGZSJW(params);
			exportExl("drivingDOTGZSJW", titleArray, columnArray, rows);
			
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	
	
	
}
