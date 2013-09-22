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
import com.etrans.bubiao.services.driving.DrivingOverSpeedPolyServices;
import com.etrans.bubiao.sys.UserContext;
import com.etrans.common.util.FlexiGridUtil;


@Controller
@Scope("prototype")
@Namespace("/analyse/driving")
public class DrivingOverSpeedPolyAction extends BaseAction{
	
	private static final long serialVersionUID = 1L;
	
	protected Logger log = LogManager.getLogger(this.getClass().getName());
	
	@Autowired
	private DrivingOverSpeedPolyServices drivingOverSpeedPolyServices;

	
	public DrivingOverSpeedPolyServices getDrivingOverSpeedPolyServices() {
		return drivingOverSpeedPolyServices;
	}

	public void setDrivingOverSpeedPolyServices(
			DrivingOverSpeedPolyServices drivingOverSpeedPolyServices) {
		this.drivingOverSpeedPolyServices = drivingOverSpeedPolyServices;
	}

	/**
	 * 查询--区域弯道超速报警
	 */
	@Action(value="findDrivingOverSpeedPolyList")
	public void findDrivingOverSpeedPolyList(){
		try {
			this.renderJSON(drivingOverSpeedPolyServices.getDrivingOverSpeedPolys(this.getGridParams()));
		} catch (Exception e) {
			e.printStackTrace();
		}
		
	}
	
	/**
	 * 导出--区域弯道超速报警
	 */
	@Action(value = "drivingOverSpeedPolyExport")
	public void drivingOverSpeedPolyExport() {
		
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
			titleArray[3]="弯道区域";
			titleArray[4]="弯道超速速度";
			
			
			String[] columnArray = {};
			columnArray = new String[6];
			columnArray[0]="RegistrationNO";
			columnArray[1]="AnalyseGroupName";
			columnArray[2]="GenerateTime";
			columnArray[3]="PolyName";
			columnArray[4]="RoundSpeed";
			
			List<Map<String,Object>> rows = drivingOverSpeedPolyServices.getDrivingOverSpeedPoly(params);
			exportExl("drivingOverSpeedPoly", titleArray, columnArray, rows);
			
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	
	
	
}
