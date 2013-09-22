package com.etrans.bubiao.action.sys;

import java.util.List;
import java.util.Map;

import org.apache.struts2.convention.annotation.Action;
import org.apache.struts2.convention.annotation.Actions;
import org.apache.struts2.convention.annotation.Namespace;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;

import com.etrans.bubiao.action.BaseAction;
import com.etrans.bubiao.action.sys.log.LogActionTypes;
import com.etrans.bubiao.action.sys.log.LogUtil;
import com.etrans.bubiao.auth.SessionUser;
import com.etrans.bubiao.services.sys.LogCommandServices;
import com.etrans.bubiao.sys.UserContext;
import com.etrans.common.util.FlexiGridUtil;
import com.etrans.common.util.json.JSONUtil;


@Controller
@Scope("prototype")
@Namespace("/sys")
public class LogCommandAction extends BaseAction {
	private static final long serialVersionUID = 1L;
	
	@Autowired
	private LogCommandServices logCommandServices;

	public LogCommandServices getLogCommandServices() {
		return logCommandServices;
	}

	public void setLogCommandServices(LogCommandServices logCommandServices) {
		this.logCommandServices = logCommandServices;
	}

	/**
	 * 指令日志分页查询
	 */
	@Action(value = "logCommandList")
	public void logCommandList() {
		try {
			Map<String,Object> params = FlexiGridUtil.parseParam(this.getGridParams());
			
			SessionUser user = UserContext.getLoginUser();
			if(user != null){
				if(UserContext.isBsRootUser()){
					params.put("isSuper", true);
				}else if(user.isWorkUnitSuperAdmin()){
					String fullId = user.getWorkUnitFullId();
					params.put("fullId", fullId);
					params.put("isWorkUnitSuperAdmin", true);
				}else{
					params.put("userId", user.getUserID());
				}
			 }
			this.renderJSON(JSONUtil.toJson(logCommandServices.getLogCommands(params)));
			LogUtil.insertLog(LogActionTypes.READ, "成功", "指令日志", "", "查询指令日志");
		} catch (Exception e) {
			LogUtil.insertLog(LogActionTypes.READ, "失败", "指令日志", "", "查询指令日志");
			e.printStackTrace();
		}
	}
	/**
	 * 指令日志导出
	 */
	@Action(value="exportLogCommand")
	public void exportLogCommand(){
		Map<String,Object> params = FlexiGridUtil.parseParam(this.getGridParams());
		SessionUser user = UserContext.getLoginUser();
		if(user != null){
			if(UserContext.isBsRootUser()){
				params.put("isSuper", true);
			}else if(user.isWorkUnitSuperAdmin()){
				String fullId = user.getWorkUnitFullId();
				params.put("fullId", fullId);
				params.put("isWorkUnitSuperAdmin", true);
			}else{
				params.put("userId", user.getUserID());
			}
		 }
		
		params = this.getExportParams(params);
		
		try {
			
			String[] titleArray = {};
			titleArray = new String[8];
			titleArray[0]="车牌号码";
			titleArray[1]="指令";
			titleArray[2]="终端类型";
			titleArray[3]="发送内容";
			titleArray[4]="发送时间";
			titleArray[5]="接收内容";
			titleArray[6]="接收时间";
			titleArray[7]="用户";
			
			
			
			String[] columnArray = {};
			columnArray = new String[8];
			columnArray[0]="REGISTRATIONNO";
			columnArray[1]="PC_NAME";
			columnArray[2]="PTK_NAME";
			columnArray[3]="SENDCONTENT";
			columnArray[4]="SENDTIME";
			columnArray[5]="RECEIVECONTENT";
			columnArray[6]="RECEIVETIME";
			columnArray[7]="PU_NAME";
			
			
			List<Map<String,Object>> rows = logCommandServices.getLogCommandList(params);
			exportExl("logCommandList", titleArray, columnArray, rows);
			LogUtil.insertLog(LogActionTypes.READ, "成功", "指令日志", "", "导出指令日志");
		} catch (Exception e) {
			LogUtil.insertLog(LogActionTypes.READ, "失败", "指令日志", "", "导出指令日志");
			e.printStackTrace();
		}
	}
}
