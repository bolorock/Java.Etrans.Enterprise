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
import com.etrans.bubiao.services.driving.AnalyseMileagePerDayServices;
import com.etrans.bubiao.sys.UserContext;
import com.etrans.common.util.FlexiGridUtil;

@Controller
@Namespace("/analyse/driving")
@Scope("prototype")
public class AnalyseMileagePerDayAction extends BaseAction{

	private static final long serialVersionUID = 3595832987485843371L;

	protected Logger log = LogManager.getLogger(this.getClass().getName());
	
	@Autowired
	private AnalyseMileagePerDayServices analyseMileagePerDayServices;
	
	/**
	 * 查询--每日里程记录报表
	 */
	@Action(value="findAnalyseMileagePerDayList")
	public void findAnalyseMileagePerDayList(){
		try {
			this.renderJSON(analyseMileagePerDayServices.getAnalyseMileagePerDays(this.getGridParams()));
		} catch (Exception e) {
			e.printStackTrace();
		}
		
	}
	
	/**
	 * 导出--每日里程记录报表
	 */
	@Action(value = "analyseMileagePerDayExport")
	public void analyseMileagePerDayExport() {
		
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
			titleArray[2]="行驶时间";
			titleArray[3]="行驶里程";
			
			
			String[] columnArray = {};
			columnArray = new String[6];
			columnArray[0]="RegistrationNO";
			columnArray[1]="AnalyseGroupName";
			columnArray[2]="RecordTime";
			columnArray[3]="RecordMileage";
			
			List<Map<String,Object>> rows = analyseMileagePerDayServices.getAnalyseMileagePerDay(params);
			exportExl("AnalyseMileagePerDay", titleArray, columnArray, rows);
			
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
}
