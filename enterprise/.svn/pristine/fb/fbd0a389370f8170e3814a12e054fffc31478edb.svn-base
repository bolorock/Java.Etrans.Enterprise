package com.etrans.bubiao.action.sys;

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import org.apache.struts2.convention.annotation.Action;
import org.apache.struts2.convention.annotation.Namespace;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;

import com.etrans.bubiao.action.BaseAction;
import com.etrans.bubiao.action.sys.log.LogActionTypes;
import com.etrans.bubiao.action.sys.log.LogUtil;
import com.etrans.bubiao.auth.SessionUser;
import com.etrans.bubiao.services.sys.SystemNoticeSetServices;
import com.etrans.bubiao.sys.UserContext;
import com.etrans.common.util.FlexiGridUtil;
import com.etrans.common.util.json.JSONUtil;

@Controller
@Scope("prototype")
@Namespace("/systemNotice")
public class SystemNoticeSetAction extends BaseAction {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	private SystemNoticeSetServices systemNoticeSetServices;

	public SystemNoticeSetServices getSystemNoticeSetServices() {
		return systemNoticeSetServices;
	}

	public void setSystemNoticeSetServices(
			SystemNoticeSetServices systemNoticeSetServices) {
		this.systemNoticeSetServices = systemNoticeSetServices;
	}
	
	/**
	 * 系统公告设置信息查询
	 */
	@Action(value = "systemNoticeList")
	public void systemNoticeList() {	
		
		try {
			Map<String,Object> params = FlexiGridUtil.parseParam(this.getGridParams());
			this.renderJSON(JSONUtil.toJson(systemNoticeSetServices.getSystemNoticeSetList(params)));
			LogUtil.insertLog(LogActionTypes.READ, "成功", "系统公告设置信息管理", "", "查询系统公告设置信息");
		} catch (Exception e) {
			LogUtil.insertLog(LogActionTypes.READ, "失败", "系统公告设置信息管理", "", "查询系统公告设置信息");
			e.printStackTrace();
		}
	}
	
	
	
	/**
	 **新增系统公告设置信息
	 */
	@SuppressWarnings("unchecked")
	@Action(value = "createSystemNoticeSet")
	public void createSystemNoticeSet() {
		
		//获取当前时间
		Date now = new Date(); 
		SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");//可以方便地修改日期格式 
		String releaseDate = dateFormat.format(now);
		
		String jsonParams = getParameter("params"); 
		Map<String, Object> params = JSONUtil.fromJson(jsonParams, Map.class);
		params.put("isDefault",0);
		params.put("releaseDate", releaseDate);
		try {
			this.renderJSON(systemNoticeSetServices.createSystemNoticeSet(params));
			LogUtil.insertLog(LogActionTypes.INSERT, "成功", "系统公告设置信息管理", "", "新增系统公告设置信息");
		} catch (Exception e) {
			LogUtil.insertLog(LogActionTypes.INSERT, "失败", "系统公告设置信息管理", "", "新增系统公告设置信息");
			e.printStackTrace();
			log.debug("新增出错！");
		}
	}
	
	/**
	 * 根据ID查询系统公告设置信息详细
	 */
	@Action(value = "getSystemNoticeSetById")
	public void getSystemNoticeSetById() {

		String id = getParameter("id");
		Map<String, Object> whereMap = new HashMap<String, Object>();
		whereMap.put("id", id);
		try {
			this.renderJSON(JSONUtil.toJson(systemNoticeSetServices.getSystemNoticeSetById(whereMap)));
			LogUtil.insertLog(LogActionTypes.READ, "成功", "系统公告设置信息管理", "", "根据ID查询系统公告设置信息详细");
		} catch (Exception e) {
			LogUtil.insertLog(LogActionTypes.READ, "失败", "系统公告设置信息管理", "", "根据ID查询系统公告设置信息详细");
			e.printStackTrace();
		}
	}
	
	/**
	 * 根据ID修改系统公告设置信息
	 */
	@SuppressWarnings("unchecked")
	@Action(value = "updateSystemNoticeSet")
	public void updateSystemNoticeSet() {
		
		String jsonParams = getParameter("params"); 
		Map<String, Object> params = JSONUtil.fromJson(jsonParams, Map.class);
		
		try {
			this.renderJSON(systemNoticeSetServices.updateSystemNoticeSet(params));
			LogUtil.insertLog(LogActionTypes.UPDATE, "成功", "系统公告设置信息管理", "", "修改系统公告设置信息");
		} catch (Exception e) {
			LogUtil.insertLog(LogActionTypes.UPDATE, "失败", "系统公告设置信息管理", "", "修改系统公告设置信息");
			e.printStackTrace();
			log.debug("根据ID修改SIM卡信息出错！");
		}
	}
	
	
	
	/**
	 * 根据ID删除系统公告设置信息
	 */
	@Action(value = "deleteSystemNoticeSet")
	public void deleteSystemNoticeSet() {

		String ids= getParameter("ids");
	
		Map<String, Object> whereMap = new HashMap<String, Object>();
		whereMap.put("id", ids);
		try {
			this.renderJSON(systemNoticeSetServices.deleteSystemNoticeSet(whereMap));
			LogUtil.insertLog(LogActionTypes.DELETE, "成功", "系统公告设置信息管理", "", "删除系统公告设置信息");
		} catch (Exception e) {
			LogUtil.insertLog(LogActionTypes.DELETE, "失败", "系统公告设置信息管理", "", "删除系统公告设置信息");
			e.printStackTrace();
			log.debug("根据ID删除外设类型信息出错！");
		}
	}
	
	/**
	 * 验证不能有相同的名称
	 */
	@Action(value = "getSystemNoticeByName")
	public void getSystemNoticeByName() {
		String title = getParameter("title"); 
		String id = getParameter("id"); 
		Map<String, Object> whereMap = new HashMap<String, Object>();
		whereMap.put("title", title);
		whereMap.put("id", id);
		try {
			this.renderJSON(systemNoticeSetServices.checkSystemNoticeSet(whereMap));
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	
	/**
	 * 设置系统公告
	 * */
	@Action(value="SetSystemNotice")
	public void SetSystemNotice(){
		try {
			String isShowNoticeStr = getParameter("isShowNotice");
			SessionUser user = UserContext.getLoginUser();
			Long userId=user.getUserID();
			int isShowNotice=Integer.parseInt(isShowNoticeStr);
			  HashMap<String,Object> map = new HashMap<String, Object>();
				map.put("userId", userId);
				map.put("isShowNotice", isShowNotice);
				systemNoticeSetServices.installSystemNoticeSet(map);	
			    this.renderText("SUCCESS");
			
		} catch (Exception e) {
			e.printStackTrace();
			this.renderJSON("false");
		}
	}
	
	/**获取系统公告的主页面信息*/
	@Action(value="findSystemNotice")
	public void findSystemNotice(){
		//获取开始时间和结束时间
		SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");//可以方便地修改日期格式 
		 Calendar   cal   =   Calendar.getInstance(); 
		 String time=dateFormat.format(cal.getTime());
		 String endDate=time.substring(0, 16);// 2007-10-30 09:30
		 cal.add(Calendar.DAY_OF_MONTH, -2);
		SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		String mDateTime=formatter.format(cal.getTime());
		String startDate=mDateTime.substring(0, 16);//2007-10-29 09:30
        Map<String, Object> whereMap=new HashMap<String,Object>();
        whereMap.put("startDate", startDate);
        whereMap.put("endDate", endDate);
        whereMap.put("isDefault", 0);
		try {
			this.renderJSON(JSONUtil.toJson(systemNoticeSetServices.getSystemNoticePageSet(whereMap)));
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	/**
	 * 根据ID查询系统公告设置信息详细
	 */
	@Action(value = "getSystemNoticeHistory")
	public void getSystemNoticeHistory() {
		try {
			int currentPage = Integer.parseInt(getParameter("currentPage"));
			Map<String,Object> params = new HashMap<String, Object>();
			params.put("@IsSplitPage", "0");
			params.put("@StarRow", String.valueOf((currentPage-1)*5+1));
			params.put("@EndRow", String.valueOf(currentPage*5));
			this.renderJSON(systemNoticeSetServices.getSystemNoticeHistory(params));
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
}
