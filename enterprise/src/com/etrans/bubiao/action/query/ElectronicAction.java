/**
 * VehicleAction.java
 * Create on 2012-4-25 13:37:52
 * Copyright (c) 2012 by e_trans.
 */
package com.etrans.bubiao.action.query;



import java.util.List;
import java.util.Map;

import org.apache.struts2.convention.annotation.Action;
import org.apache.struts2.convention.annotation.Namespace;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;

import com.etrans.bubiao.action.BaseAction;
import com.etrans.bubiao.action.sys.log.LogActionTypes;
import com.etrans.bubiao.action.sys.log.LogUtil;
import com.etrans.bubiao.auth.SessionUser;
import com.etrans.bubiao.services.query.ElectronicServices;
import com.etrans.bubiao.sys.UserContext;
import com.etrans.common.util.FlexiGridUtil;
import com.etrans.common.util.json.JSONUtil;

/**
 * 电子运单
 * Services
 * @author yangzhen
 * @version 1.0
 */
@Controller
@Scope("prototype")
@Namespace("/query/Electronic")
public class ElectronicAction extends BaseAction {

	private static final long serialVersionUID = 1L;
	
	@Autowired
	private ElectronicServices electronicServices;



	public ElectronicServices getElectronicServices() {
		return electronicServices;
	}


	public void setElectronicServices(ElectronicServices electronicServices) {
		this.electronicServices = electronicServices;
	}


	/**
	 *电子运单查询
	 */
	@Action(value = "findElectronicList")
	public void findElectronicList() {
		try {
			Map<String,Object> params = FlexiGridUtil.parseParam(this.getGridParams());
			SessionUser user = UserContext.getLoginUser();
			if(user != null){
				if(UserContext.isBsRootUser()){
					params.put("isSuper", 1);
				}else if(user.isWorkUnitSuperAdmin()){
					String fullId = user.getWorkUnitFullId();
					params.put("fullId", fullId);
					params.put("isWorkUnitSuperAdmin", true);
				}else{
					params.put("userId", user.getUserID());
				}
			 }
			this.renderJSON(JSONUtil.toJson(electronicServices.getElectronics(params)));
			LogUtil.insertLog(LogActionTypes.READ, "成功", "电子运单查询", "", "电子运单查询");
		} catch (Exception e) {
			LogUtil.insertLog(LogActionTypes.READ, "失败", "电子运单查询", "", "电子运单查询");
			e.printStackTrace();
		}
		
	}
	
	
	/**
	 * 导出电子运单信息到EXCEL
	 */
	@Action(value = "getElectronicListExport")
	public void getElectronicListExport() {
		try {
			Map<String,Object> params = FlexiGridUtil.parseParam(this.getGridParams());
			params = this.getExportParams(params);
			SessionUser user = UserContext.getLoginUser();
			if(user != null){
				if(UserContext.isBsRootUser()){
					params.put("isSuper", 1);
				}else if(user.isWorkUnitSuperAdmin()){
					String fullId = user.getWorkUnitFullId();
					params.put("fullId", fullId);
					params.put("isWorkUnitSuperAdmin", true);
				}else{
					params.put("userId", user.getUserID());
				}
			 }
			
			
			String[] titleArray = {};
			titleArray = new String[3];
			titleArray[0]="车牌号码";
			titleArray[1]="运单信息";
			titleArray[2]="创建时间";
			
			
			String[] columnArray = {};
			columnArray = new String[3];
			columnArray[0]="registrationNO";
			columnArray[1]="message";
			columnArray[2]="createTime";
			
			List<Map<String,Object>> rows = electronicServices.getElectronicList(params);
			exportExl("ElectronicList", titleArray, columnArray, rows);
			LogUtil.insertLog(LogActionTypes.READ, "成功", "电子运单导出", "", "电子运单导出");
		} catch (Exception e) {
			LogUtil.insertLog(LogActionTypes.READ, "失败", "电子运单导出", "", "电子运单导出");
			e.printStackTrace();
		}
	}
	
	
	
	

	
	
}
