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
import com.etrans.bubiao.services.driving.SpeedGZSJWResultServices;
import com.etrans.bubiao.sys.UserContext;
import com.etrans.common.util.FlexiGridUtil;


@Controller
@Scope("prototype")
@Namespace("/analyse/driving")
public class SpeedGZSJWResultAction extends BaseAction{
	
	private static final long serialVersionUID = 1L;
	
	protected Logger log = LogManager.getLogger(this.getClass().getName());
	
	@Autowired
	private SpeedGZSJWResultServices speedGZSJWResultServices;

	public SpeedGZSJWResultServices getSpeedGZSJWResultServices() {
		return speedGZSJWResultServices;
	}

	public void setSpeedGZSJWResultServices(
			SpeedGZSJWResultServices speedGZSJWResultServices) {
		this.speedGZSJWResultServices = speedGZSJWResultServices;
	}

	/**
	 * 查询--行驶速度分析（交委）
	 */
	@Action(value="findSpeedGZSJWResultList")
	public void findSpeedGZSJWResultList(){
		try {
			this.renderJSON(speedGZSJWResultServices.findSpeedGZSJWResults(this.getGridParams()));
		} catch (Exception e) {
			e.printStackTrace();
		}
		
	}
	
	/**
	 * 导出--行驶速度分析（交委）
	 */
	@Action(value = "speedGZSJWResultExport")
	public void speedGZSJWResultExport() {
		
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
			titleArray[2]="分析条件";
			titleArray[3]="超速类型";
			titleArray[4]="最低速度(km/h)";
			
			titleArray[5]="最高速度(km/h)";
			titleArray[6]="开始时间";
			titleArray[7]="结束时间";
			titleArray[8]="持续时间";
			titleArray[9]="开始经度";
			titleArray[10]="开始纬度";
			
			titleArray[11]="结束经度";
			titleArray[12]="结束纬度";
			titleArray[13]="记录生成时间";
			
			
			
			
			String[] columnArray = {};
			columnArray = new String[14];
			columnArray[0]="RegistrationNO";
			columnArray[1]="AnalyseGroupName";
			columnArray[2]="AnalyseName";
			columnArray[3]="OverSpeedType";
			columnArray[4]="MinSpeed";
			
			columnArray[5]="MaxSpeed";
			columnArray[6]="StartTime";
			columnArray[7]="EndTime";
			columnArray[8]="DurationText";
			columnArray[9]="StartLongitude";
			columnArray[10]="StartLatitude";
			
			columnArray[11]="EndLongitude";
			columnArray[12]="EndLatitude";
			columnArray[13]="GenerateTime";
			
			
			
			List<Map<String,Object>> rows = speedGZSJWResultServices.getSpeedGZSJWResult(params);
			exportExl("speedGZSJWResult", titleArray, columnArray, rows);
			
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	
	
	
}
