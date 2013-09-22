package com.etrans.bubiao.action.monitorCenter;

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
import com.etrans.bubiao.entities.AlarmModel;
import com.etrans.bubiao.repository.CommandRepository;
import com.etrans.bubiao.sys.UserContext;
/**
 * @author lihaiyan
 * @version 1.0
 * @brief
 */

@Controller
@Scope("prototype")
@Namespace("/monitorCenter")
public class RealTimeAlarmAction extends BaseAction
{
	@Autowired
	private CommandRepository  commandRepository;
	
	
	/**
	 * 描述：判断是否有最新报警
	 * 
	 * @author lihaiyan
	 * @since Create on 2012-3-8
	 * @version Copyright (c) 2012 by e_trans.
	 */
	@Action(value = "isHaveAlarm")
	public void isHaveAlarm()
	{
		this.renderText(commandRepository.findIsHaveAlarm(UserContext.getLoginUser())?"true":"false");
	}
	
	/**
	 * 描述：获取最新报警
	 * 
	 * @author lihaiyan
	 * @since Create on 2012-3-8
	 * @version Copyright (c) 2012 by e_trans.
	 */
	@Action(value = "findRealTimeAlarms")
	public void findRealTimeAlarms()
	{
		String alarmType=getParameter("alarmType");
		String alarmSourceNo = getParameter("alarmSourceNo");
		String registrationNo=getParameter("registrationNo");
		List<AlarmModel> alarmModels =commandRepository.getRealTimeAlarm(UserContext.getLoginUser(),alarmType,alarmSourceNo,registrationNo);
		this.renderJSON(alarmModels);
		
	}
	
	/**
	 * 描述：获取当前报警的车辆信息
	 * 
	 * @author lihaiyan
	 * @since Create on 2012-3-8
	 * @version Copyright (c) 2012 by e_trans.
	 */
	@Action(value = "getAlarmVehicleInfo")
	public void getAlarmVehicleInfo(){
		String vehicleId=getParameter("vehicleId");
		SessionUser user= UserContext.getLoginUser();
		Map<String, Object> whereParamMap = new HashMap<String, Object>();
		if (user.getIsSuperUser())
		{// 超级管理员
			whereParamMap.put("userId","0");
		} else
		{
			whereParamMap.put("userId", String.valueOf(user.getUserID()));
		}
		whereParamMap.put("vehicleId", vehicleId);
		List<HashMap<String, String>> vehicleInfos = this.commandRepository.getMonitorCenterServices().getAlarmVehicleInfo(whereParamMap);
		if(vehicleInfos!=null &&vehicleInfos.size()>0){
			this.renderJSON(vehicleInfos.get(0));
		}else {
			this.renderJSON("");
		}
	}

	public CommandRepository getCommandRepository()
	{
		return commandRepository;
	}

	public void setCommandRepository(CommandRepository commandRepository)
	{
		this.commandRepository = commandRepository;
	}
	
	
	
	
}
