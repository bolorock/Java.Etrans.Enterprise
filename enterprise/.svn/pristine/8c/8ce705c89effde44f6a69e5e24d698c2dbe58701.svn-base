package com.etrans.bubiao.action;

import java.util.HashMap;
import java.util.Map;

import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.apache.struts2.convention.annotation.Action;
import org.apache.struts2.convention.annotation.Namespace;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;

import com.etrans.bubiao.services.AnalyseServices;
import com.etrans.bubiao.sys.UserContext;
import com.etrans.bubiao.util.DaoUtil;
import com.etrans.common.util.FlexiGridUtil;
import com.etrans.common.util.ParamKey;

@Controller
@Namespace("/analyse")
@Scope("prototype")
public class AnalyseAction extends BaseAction {

	private static final long serialVersionUID = 3595832987485843371L;
	
	protected Logger log = LogManager.getLogger(this.getClass().getName());
	
	/**
	 * 变量用途：新增、删除、修改所需参数
	 */
	private String paramStr;

	@Autowired(required=true)
	private AnalyseServices analyseServices;
	
	/**
	 * 判断名称重复
	 */
	@Action(value = "checkName4Form")
	public void checkName4Form(){
		String name = getParameter("name"); 
		String id = getParameter("id"); 
		String tableName = getParameter("tableName");
		
		Map<String,Object> whereMap = new HashMap<String,Object>();
		whereMap.put("name", name);
		whereMap.put("id", id);
		whereMap.put("tableName", tableName);
		
		try {
			this.renderJSON(this.analyseServices.checkName4Form(whereMap));
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	/**
	 * 由ID查询详细信息
	 */
	@Action(value = "getRecordById")
	public void getRecordById(){
		String id = getParameter("id");
		String tableName = getParameter("tableName");
		
		Map<String,Object> whereMap = new HashMap<String,Object>();
		whereMap.put("id", id);
		whereMap.put("tableName", tableName);
		
		try {
			this.renderJSON(analyseServices.getRecordById(whereMap));
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	/**
	 * 查询列表
	 */
	@Action(value="findRecordList")
	public void findRecordList(){
		try {
			Map<String,Object> params = FlexiGridUtil.parseParam(this.getGridParams());
			
			/**数据权限参数设置**/
			params=UserContext.putUserParams(params);
			
			this.renderJSON(this.analyseServices.findRecordList(params));
		} catch (Exception e) { 
			e.printStackTrace();
		}
	}
	
/**
 * 新增
 */
	@SuppressWarnings("unchecked")
	@Action("analyseSave")
	public void analyseSave() {
		try{
			//参数转化为MAP
			Map<String,Object> mapParams = DaoUtil.getJsonParam(paramStr) ;
			//组装SQL
			String sql = DaoUtil.insertDataSQL(mapParams);
			//System.out.println(sql);
			
			
			/*********判断重名********/
			Map<String,Object> whereMap = new HashMap<String,Object>();
			whereMap.put("name", ((Map<String,Object>)mapParams.get(ParamKey.SET_PARAM)).get("name"));
			whereMap.put("tableName", mapParams.get("tableName"));
			if(analyseServices.checkName(whereMap)){
				this.renderText("2");
				return;
			}
			
			if(this.analyseServices.insertRecord(sql)){
				this.renderText("0");
			}else{
				this.renderText("-1");
			}
		}catch(Exception e){
			e.printStackTrace();
			this.renderText("-1");
		}
	}
/**
 * 更新
 */
	@SuppressWarnings("unchecked")
	@Action("analyseUpdate")
	public void analyseUpdate() {
		try{
			Map<String,Object> mapParams = DaoUtil.getJsonParam(paramStr) ;
			String sql = DaoUtil.updateDataSQL(mapParams);
			//System.out.println(sql);
			
			/*********判断重名********/
			Map<String,Object> whereMap = new HashMap<String,Object>();
			whereMap.put("name", ((Map<String,Object>)mapParams.get(ParamKey.SET_PARAM)).get("name"));
			whereMap.put("id", ((Map<String,Object>)mapParams.get(ParamKey.WHERE_PARAM)).get("id"));
			whereMap.put("tableName", mapParams.get("tableName"));
			if(analyseServices.checkName(whereMap)){
				this.renderText("2");
				return;
			}
			
			if(this.analyseServices.updateRecord(sql)){
				this.renderText("0");
			}else{
				this.renderText("-1");
			}
		}catch(Exception e){
			e.printStackTrace();
			this.renderText("-1");
		}
	}
/**
 * 删除 	
 */
	@Action("analyseDelete")
	public void analyseDelete() {
		try{
			Map<String,Object> mapParams = DaoUtil.getJsonParam(paramStr) ;
			String sql = DaoUtil.deleteDataSQL(mapParams);
			//System.out.println(sql);
			
			if(this.analyseServices.deleteRecord(sql)){
				this.renderText("0");
			}else{
				this.renderText("-1");
			}
		}catch(Exception e){
			e.printStackTrace();
			this.renderText("-1");
		}
	}
	
	public String getParamStr() {
		return paramStr;
	}

	public void setParamStr(String paramStr) {
		this.paramStr = paramStr;
	}

	public AnalyseServices getAnalyseServices() {
		return analyseServices;
	}

	public void setAnalyseServices(AnalyseServices analyseServices) {
		this.analyseServices = analyseServices;
	}
	
	
	public static void main(String[] args) {
		String str="{setParam={name=03,analyseGroupID=8,isAlert=0,checkTimeTypeId=4,checkTimeValue=1," +
				"+checkTimeBegin=00,checkTimeEnd='00:00',+" +
				"bounceOverDistance=3,bounceOverTime=3,+" +
				"isWarn=3},tableName=ANA_AnalyserOverTime} ";
		Map<String,Object> mapParams = DaoUtil.getJsonParam(str) ;
		System.out.println("名称："+mapParams.get("tableName"));
	}
}
