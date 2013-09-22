package com.etrans.bubiao.action;

import java.util.Map;

import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.apache.struts2.convention.annotation.Action;
import org.apache.struts2.convention.annotation.Namespace;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;

import com.etrans.bubiao.action.sys.log.LogActionTypes;
import com.etrans.bubiao.action.sys.log.LogUtil;
import com.etrans.bubiao.services.AnalyseRoadSpeedServices;
import com.etrans.common.util.json.JSONUtil;


@Controller
@Namespace("/analyse")
@Scope("prototype")
public class AnalyseRoadSpeedAction extends BaseAction {
	private static final long serialVersionUID = 3595832987485843371L;

	protected Logger log = LogManager.getLogger(this.getClass().getName());
	
	@Autowired
	private AnalyseRoadSpeedServices analyseRoadSpeedServices;

	/**
	 **新增路段速度报警
	 */
	@SuppressWarnings("unchecked")
	@Action(value = "insertAnalyseRoadSpeed")
	public void insertAnalyseRoadSpeed() {
		String jsonParams=getParameter("params"); 
		
		Map<String, Object> params = JSONUtil.fromJson(jsonParams, Map.class);
		
		try {
			this.renderJSON(analyseRoadSpeedServices.insertAnalyseRoadSpeed(params));
			LogUtil.insertLog(LogActionTypes.INSERT, "成功", "路段速度报警", "", "路段速度报警");
		} catch (Exception e) {
			LogUtil.insertLog(LogActionTypes.INSERT, "失败", "路段速度报警", "", "路段速度报警");
			e.printStackTrace();
			log.debug("新增出错！");
		}
	}
	
}
