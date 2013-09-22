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
import com.etrans.bubiao.services.AnalyseInOutPolyServices;
import com.etrans.common.util.json.JSONUtil;


@Controller
@Namespace("/analyse")
@Scope("prototype")
public class AnalyseInOutPolyAction extends BaseAction {
	private static final long serialVersionUID = 3595832987485843371L;

	protected Logger log = LogManager.getLogger(this.getClass().getName());
	
	@Autowired
	private AnalyseInOutPolyServices analyseInOutPolyServices;

	/**
	 **进出区域报警
	 */
	@SuppressWarnings("unchecked")
	@Action(value = "insertAnalyseInOutPoly")
	public void insertAnalyseTimePark() {
		String jsonParams=getParameter("params"); 
		
		Map<String, Object> params = JSONUtil.fromJson(jsonParams, Map.class);
		
		try {
			this.renderJSON(analyseInOutPolyServices.insertAnalyseInOutPoly(params));
			LogUtil.insertLog(LogActionTypes.INSERT, "成功", "进出区域报警", "", "进出区域报警");
		} catch (Exception e) {
			LogUtil.insertLog(LogActionTypes.INSERT, "失败", "进出区域报警", "", "进出区域报警");
			e.printStackTrace();
			log.debug("新增出错！");
		}
	}
	
	
	/**
	 * 根据ID修改进出区域报警
	 */
	@SuppressWarnings({ "unchecked", "unused" })
	@Action(value = "updateAnalyseInOutPoly")
	public void updateAnalyseInOutPoly() {
		
		String jsonParams = getParameter("params"); 
		Map<String, Object> params = JSONUtil.fromJson(jsonParams, Map.class);
		
		try {
//			this.renderJSON(analyseInOutPolyServices.updateAnalyseInOutPoly(params));
			LogUtil.insertLog(LogActionTypes.INSERT, "成功", "进出区域报警", "", "进出区域报警");
		} catch (Exception e) {
			LogUtil.insertLog(LogActionTypes.INSERT, "失败", "进出区域报警", "", "进出区域报警");
			e.printStackTrace();
			log.debug("修改信息出错！");
		}
	}
	
	
}


