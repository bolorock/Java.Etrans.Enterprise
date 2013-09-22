package com.etrans.bubiao.action.videoManage;

import java.util.HashMap;
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
import com.etrans.bubiao.http.HttpException;
import com.etrans.bubiao.services.videoManage.PeripheralTypeListServices;
import com.etrans.bubiao.sys.UserContext;
import com.etrans.common.util.FlexiGridUtil;
import com.etrans.common.util.json.JSONUtil;


@Controller
@Scope("prototype")
@Namespace("/videoManage")
public class PeripheralTypeListAction extends BaseAction {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	@Autowired
    private PeripheralTypeListServices peripheralTypeListServices;
	
	public PeripheralTypeListServices getPeripheralTypeListServices() {
		return peripheralTypeListServices;
	}
	public void setPeripheralTypeListServices(
			PeripheralTypeListServices peripheralTypeListServices) {
		this.peripheralTypeListServices = peripheralTypeListServices;
	}
	
	/**
	 * 外设类型查询
	 */
	@Action(value = "peripheralTypeList")
	public void peripheralTypeList() {	
		
		try {
			Map<String,Object> params = FlexiGridUtil.parseParam(this.getGridParams());
			this.renderJSON(JSONUtil.toJson(peripheralTypeListServices.getPeripheralTypeList(params)));
			LogUtil.insertLog(LogActionTypes.READ, "成功", "外设信息管理", "", "查询外设信息");
		} catch (Exception e) {
			LogUtil.insertLog(LogActionTypes.READ, "失败", "外设信息管理", "", "查询外设信息");
			e.printStackTrace();
			log.debug("查询出错！");
		}
	}
	
	
	
	/**
	 **新增外设类型
	 */
	@SuppressWarnings("unchecked")
	@Action(value = "createPeripheralType")
	public void createPeripheralType() {
			
		String jsonParams = getParameter("params"); 
		Map<String, Object> params = JSONUtil.fromJson(jsonParams, Map.class);
         
		try {
			this.renderJSON(peripheralTypeListServices.createPeripheralType(params));
			LogUtil.insertLog(LogActionTypes.INSERT, "成功", "外设信息管理", "", "新增外设信息");
		} catch (Exception e) {
			LogUtil.insertLog(LogActionTypes.INSERT, "失败", "外设信息管理", "", "新增外设信息");
			e.printStackTrace();
			log.debug("新增出错！");
		}
	}
	
	/**
	 * 根据ID查询外设类型信息详细
	 */
	@Action(value = "getPeripheralTypeById")
	public void getPeripheralTypeById() {

		String id = getParameter("id");
		Map<String, Object> whereMap = new HashMap<String, Object>();
		whereMap.put("id", id);
		try {
			this.renderJSON(JSONUtil.toJson(peripheralTypeListServices.getPeripheralTypeById(whereMap)));
		} catch (Exception e) {
			e.printStackTrace();
			log.debug("根据ID查询外设类型信息出错！");
		}
	}
	
	/**
	 * 根据ID修改外设类型
	 */
	@SuppressWarnings("unchecked")
	@Action(value = "updatePeripheralType")
	public void updatePeripheralType() {
		
		String jsonParams = getParameter("params"); 
		Map<String, Object> params = JSONUtil.fromJson(jsonParams, Map.class);
		
		try {
			this.renderJSON(peripheralTypeListServices.updatePeripheralType(params));
			LogUtil.insertLog(LogActionTypes.UPDATE, "成功", "外设类型信息管理", "", "修改外设类型信息");
		} catch (Exception e) {
			LogUtil.insertLog(LogActionTypes.UPDATE, "失败", "外设类型信息管理", "", "修改外设类型信息");
			e.printStackTrace();
			log.debug("根据ID修改SIM卡信息出错！");
		}
	}
	
	
	
	/**
	 * 根据ID删除外设类型信息
	 */
	@Action(value = "deletePeripheralType")
	public void deletePeripheralType() {

		String ids= getParameter("ids");
		System.out.println(ids);
		Map<String, Object> whereMap = new HashMap<String, Object>();
		whereMap.put("id", ids);
		try {
			this.renderJSON(peripheralTypeListServices.deletePeripheralType(whereMap));
			LogUtil.insertLog(LogActionTypes.DELETE, "成功", "外设类型信息管理", "", "删除外设类型信息");
		} catch (Exception e) {
			LogUtil.insertLog(LogActionTypes.DELETE, "失败", "外设类型信息管理", "", "删除外设类型信息");
			e.printStackTrace();
			log.debug("根据ID删除外设类型信息出错！");
		}
	}
	
	/**
	 * 验证不能有相同的名称
	 */
	@Action(value = "getPeripheralTypeByName")
	public void getPeripheralTypeByName() {
		String name = getParameter("name"); 
		String id = getParameter("id"); 
		Map<String, Object> whereMap = new HashMap<String, Object>();
		whereMap.put("name", name);
		whereMap.put("id", id);
		try {
			this.renderJSON(peripheralTypeListServices.checkName(whereMap));
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	
	/**
	 * 导出外设类型列表到EXCEL
	 */
	@Action(value = "exportPeripheralType")
	public void exportPeripheralType() {
		
		Map<String,Object> params = FlexiGridUtil.parseParam(this.getGridParams());
		params = this.getExportParams(params);
		try {
			
			String[] titleArray = {};
			titleArray = new String[16];
			titleArray[0]="名称";
			titleArray[1]="代码";
			titleArray[2]="备注";
		
			
			String[] columnArray = {};
			columnArray = new String[3];
			columnArray[0]="name";
			columnArray[1]="code";
			columnArray[2]="memo";
			
			
			List<Map<String,Object>> rows =  peripheralTypeListServices.getPeripheralType(params);
			exportExl("peripheral", titleArray, columnArray, rows);
			
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
}
