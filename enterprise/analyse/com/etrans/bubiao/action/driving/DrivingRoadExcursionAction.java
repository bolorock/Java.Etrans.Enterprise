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
import com.etrans.bubiao.services.driving.DrivingRoadExcursionServices;
import com.etrans.bubiao.sys.UserContext;
import com.etrans.common.util.FlexiGridUtil;

@Controller
@Namespace("/analyse/driving")
@Scope("prototype")
public class DrivingRoadExcursionAction extends BaseAction{

	private static final long serialVersionUID = 3595832987485843371L;

	protected Logger log = LogManager.getLogger(this.getClass().getName());
	
	@Autowired
	private DrivingRoadExcursionServices drivingRoadExcursionServices;
	
	/**
	 * 查询--路段偏离报表
	 */
	@Action(value="findDrivingRoadExcursionList")
	public void findDrivingRoadExcursionList(){
		try {
			this.renderJSON(drivingRoadExcursionServices.getDrivingRoadExcursions(this.getGridParams()));
		} catch (Exception e) {
			e.printStackTrace();
		}
		
	}
	
	/**
	 * 导出--路段偏离报表
	 */
	@Action(value = "drivingRoadExcursionExport")
	public void drivingRoadExcursionExport() {
		
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
			titleArray[3]="范围内判定门限";
			titleArray[4]="偏离里程(公里)";
			titleArray[5]="偏离开始时间";
			titleArray[6]="偏离截止时间";
			titleArray[7]="经度";
			titleArray[8]="纬度";
			titleArray[9]="匹配路名";
			
			
			String[] columnArray = {};
			columnArray = new String[10];
			columnArray[0]="RegistrationNO";
			columnArray[1]="AnalyseGroupName";
			columnArray[2]="GenerateTime";
			columnArray[3]="MinExcursionValue";
			columnArray[4]="MinExcursionValue";
			columnArray[5]="MinExcursionValue";
			columnArray[6]="MinExcursionValue";
			columnArray[7]="Longitude";
			columnArray[8]="Latitude";
			columnArray[9]="ExcursionDis";
			
			
			List<Map<String,Object>> rows = drivingRoadExcursionServices.getDrivingRoadExcursion(params);
			exportExl("DrivingRoadExcursion", titleArray, columnArray, rows);
			
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
}

