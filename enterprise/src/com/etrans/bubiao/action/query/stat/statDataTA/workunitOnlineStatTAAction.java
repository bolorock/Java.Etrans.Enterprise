package com.etrans.bubiao.action.query.stat.statDataTA;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.struts2.convention.annotation.Action;
import org.apache.struts2.convention.annotation.Namespace;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;

import com.etrans.bubiao.action.BaseAction;
import com.etrans.bubiao.auth.SessionUser;
import com.etrans.bubiao.http.ParamKey;
import com.etrans.bubiao.services.query.stat.statDataTA.workunitOnlineStatTAService;
import com.etrans.bubiao.sys.UserContext;
import com.etrans.common.util.FlexiGridUtil;
import com.etrans.common.util.json.JSONUtil;
import com.etrans.common.util.web.RowNumUtil;

@Controller
@Scope("prototype")
@Namespace("/query/stat/statDataTA")
public class workunitOnlineStatTAAction extends BaseAction{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	/**
	 *企业车辆在线统计	
	 */
	@Action(value = "workUnitOnlineList_TA")
	public void workUnitOnlineList_TA() {
		try {
			Map<String,Object> params = FlexiGridUtil.parseParam(this.getGridParams());
			if(params==null){
				params = new HashMap<String,Object>();
			}
			SessionUser user = UserContext.getLoginUser();
			if(user != null){
				if(UserContext.isBsRootUser()){//是否是超级管理员
					params.put("isSuper", true);
				}else if(user.isWorkUnitSuperAdmin()){//是否为企业管理员
					String fullId = user.getWorkUnitFullId();
					params.put("fullId", fullId);
				}else{//普通用户
					params.put("userId", UserContext.getLoginUserID());
				 }
					
				}
			params.put(params.get("sortname")+"Order","");
			
			this.renderJSON(JSONUtil.toJson(workUnitOnlineStatTAServives.getWorkUnitOnlineTA(params)));
		} catch (Exception e) {
			e.printStackTrace();
		}
		
	}
	
	/**
	 * 企业车辆在线率统计导出EXECL表格
	 */
	@Action(value = "workUnitOnlineTAListExportExl")
	public void workUnitOnlineTAListExportExl() {
		
		try {
			// 导出数据时的开始页数
			String fromPage = getParameter("frompage");
			// 导出数据时的结束页数
			String toPage = getParameter("topage");
			
			Map<String,Object> params = FlexiGridUtil.parseParam(this.getGridParams());

			String pageSize = String.valueOf(params.get(ParamKey.PAGE_SIZE));
			Integer fromRow = RowNumUtil.getFromRowNum(fromPage, pageSize);
			Integer toRow = RowNumUtil.getToRowNum(toPage, pageSize);
			params.put("@FromRow",String.valueOf(fromRow));
			params.put("@ToRow",String.valueOf(toRow));

			SessionUser user = UserContext.getLoginUser();
			if(user != null){
				if(UserContext.isBsRootUser()){//是否是超级管理员
					params.put("isSuper", true);
				}else if(user.isWorkUnitSuperAdmin()){//是否为企业管理员
					String fullId = user.getWorkUnitFullId();
					params.put("fullId", fullId);
				}else{//普通用户
					params.put("userId", UserContext.getLoginUserID());
				 }
					
				}
		
			params.put(params.get("sortname")+"Order","");
			
			String[] titleArray = {};
			titleArray = new String[7];
			titleArray[0]="所属单位";
			titleArray[1]="车辆总数";
			titleArray[2]="上线车辆总数";
			titleArray[3]="车辆上线率";
			titleArray[4]="车辆下线率";
			titleArray[5]="车辆在线率";
			titleArray[6]="车辆离线率";
			
			String[] columnArray = {};
			columnArray = new String[7];
			columnArray[0]="workUnitName";
			columnArray[1]="total";
			columnArray[2]="vehicleUplinetotal";
			columnArray[3]="upLineRate";
			columnArray[4]="contactLossRate";
			columnArray[5]="onLineRate";
			columnArray[6]="offLineRate";
			
			List<Map<String,Object>>  rows = workUnitOnlineStatTAServives.workunitOnlineTAExportExl(params);
			exportExl("uplinePercent", titleArray, columnArray, rows);
			
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	@Autowired
	private workunitOnlineStatTAService workUnitOnlineStatTAServives;

	public workunitOnlineStatTAService getWorkUnitOnlineStatTAServives() {
		return workUnitOnlineStatTAServives;
	}

	public void setWorkUnitOnlineStatTAServives(
			workunitOnlineStatTAService workUnitOnlineStatTAServives) {
		this.workUnitOnlineStatTAServives = workUnitOnlineStatTAServives;
	}

}
