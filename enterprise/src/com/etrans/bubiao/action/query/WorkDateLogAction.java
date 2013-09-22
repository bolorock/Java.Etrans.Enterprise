package com.etrans.bubiao.action.query;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Random;

import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.apache.struts2.convention.annotation.Action;
import org.apache.struts2.convention.annotation.Namespace;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;

import com.etrans.bubiao.action.BaseAction;
import com.etrans.bubiao.action.sys.log.LogActionTypes;
import com.etrans.bubiao.action.sys.log.LogUtil;
import com.etrans.bubiao.services.query.WorkDateLogServices;

/**
 * 操作日志Action
 * @author Administrator
 *
 */
@Controller
@Scope("prototype")
@Namespace("/query/worklog")
public class WorkDateLogAction extends BaseAction{
	
	private static final long serialVersionUID = 1L;
	
	protected Logger log = LogManager.getLogger(this.getClass().getName());
	
	@Autowired
	WorkDateLogServices workDateLogServices;
	
	public WorkDateLogServices getWorkDateLogServices() {
		return workDateLogServices;
	}

	public void setWorkDateLogServices(WorkDateLogServices workDateLogServices) {
		this.workDateLogServices = workDateLogServices;
	}

	
	
	/**
	 * 查询操作日志列表
	 */
	@Action(value = "getWorkLog")
	public void getWorkLog() {
		try {
			this.renderJSON(workDateLogServices.getWorkLog(this.getGridParams(),new Random().nextLong()));
			LogUtil.insertLog(LogActionTypes.READ, "成功", "操作日志", "", "查询操作日志");
		} catch (Exception e) {
			LogUtil.insertLog(LogActionTypes.READ, "失败", "操作日志", "", "查询操作日志");
			e.printStackTrace();
			log.error("查询操作日志异常！"+e.getMessage());
		}
	}
	
	
	/**
	 * 打印操作日志
	 */
	@Action(value = "getMimeograph")
	public void getMimeograph(){
		try {
			String startDate = getParameter("startDate");
			String endDate = getParameter("endDate");
			String moduleName = getParameter("moduleName");
			Map<String,Object> whereMap = new HashMap<String,Object>();
			whereMap.put("startDate", startDate);
			whereMap.put("endDate", endDate);
			whereMap.put("moduleName", moduleName);	
			whereMap.put("sortname", "id");
			whereMap.put("sortorder", "desc");
			this.renderJSON(workDateLogServices.getMimeograph(whereMap));
			LogUtil.insertLog(LogActionTypes.READ, "成功", "操作日志", "", "打印操作日志");
		} catch (Exception e) {
			e.printStackTrace();
			log.error("打印操作日志异常！"+e.getMessage());
		}
		
	}
	
	
		
	/**
	 * 导出数据到Exl（没用到）
	 */
	@Action(value = "upWorkDataLogExportExl")
	public void upWorkDataLogExportExl() {
		
		// 导出数据时的开始页数
		String fromPage = getParameter("frompage");
		// 导出数据时的结束页数
		String toPage = getParameter("topage");
		
try {
			
			String[] titleArray = {};
			titleArray = new String[6];
			titleArray[0]="用户名";
			titleArray[1]="时间";
			titleArray[2]="操作类型";
			titleArray[3]="模块";
			titleArray[4]="动作";
			titleArray[5]="描述";
			
			String[] columnArray = {};
			columnArray = new String[6];
			columnArray[0]="u_name";
			columnArray[1]="LogTime";
			columnArray[2]="t_name";
			columnArray[3]="ModuleName";
			columnArray[4]="ActionName";
			columnArray[5]="Description";
			
			//查询导出的数据行集合
			List<Map<String,Object>> rows = workDateLogServices.downWorkDataLogExportExl(this.getGridParams(),fromPage,toPage);
			exportExl("upWorkDataLog", titleArray, columnArray, rows);
			LogUtil.insertLog(LogActionTypes.READ, "成功", "操作日志", "", "导出操作日志");
		} catch (Exception e) {
			LogUtil.insertLog(LogActionTypes.READ, "成功", "操作日志", "", "导出操作日志");
			e.printStackTrace();
		}
	}
	
	
}
