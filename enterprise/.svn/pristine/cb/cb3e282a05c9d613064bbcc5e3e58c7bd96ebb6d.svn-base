package com.etrans.bubiao.action.sys;

import java.text.SimpleDateFormat;
import java.util.Date;
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
import com.etrans.bubiao.auth.SessionUser;
import com.etrans.bubiao.services.sys.WorkUnitManagerServices;
import com.etrans.bubiao.sys.UserContext;
import com.etrans.common.util.json.JSONUtil;

/**
 * 工作单位信息管理Action
 * @author Administrator
 *
 */
@Controller
@Scope("prototype")
@Namespace("/sys")
public class WorkUnitManageAction extends BaseAction {
	
	private static final long serialVersionUID = -3451201678430405143L;
	
	protected Logger log = LogManager.getLogger(this.getClass().getName());
	
	@Autowired
	private WorkUnitManagerServices  workUnitManagerServices;

	public WorkUnitManagerServices getWorkUnitManagerServices() {
		return workUnitManagerServices;
	}

	public void setWorkUnitManagerServices(
			WorkUnitManagerServices workUnitManagerServices) {
		this.workUnitManagerServices = workUnitManagerServices;
	}
	
	
	
	/**
	 * 单位树形
	 */
	@Action(value = "workUnitTree")
	public void getWorkUnitMenuJson() {
		
		String id = this.getParameter("id");
		
		try {
			
			this.renderJSON(workUnitManagerServices.getWorkUnitTree(id,new Random().nextLong()));
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		
	}
	
	/**
	 * 查询工作单位list列表
	 */
	@Action(value="findWorkUnitList")
	public void findWorkUnitList(){
		try {
			this.renderJSON(workUnitManagerServices.findList(this.getGridParams(),new Random().nextLong()));
		} catch (Exception e) {
			e.printStackTrace();
			log.error("查询工作单位list异常！"+e.getMessage());
		}
		
	}
	
	/**
	 * 判断工作单位名称重复
	 */
	@Action(value = "checkWorkUnitByName")
	public void checkWorkUnitByName() {
		
		String name = getParameter("name");
		String id = getParameter("id");
		Map<String,Object> whereMap = new HashMap<String,Object>();
		if(id!=null&&id!=""){
			String fullid = this.getFullId(id);
			whereMap.put("fullid", fullid);
		}
		whereMap.put("name", name);
		whereMap.put("id", id);
		
		try {
			this.renderJSON(workUnitManagerServices.checkWorkUnitByName(whereMap));
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	/**
	 * 增加工作单位
	 */
	@Action(value = "createWorkUnit")
	public void createWorkUnit(){
		
		try {
			//获得用户所属企业完整id并且保存到查询条件集合中
			SessionUser user = UserContext.getLoginUser();
			//获得页面请求参数
			Map<String,Object> map = this.getParameterMap();
			map.remove("@_id");//删除id（修改才会用到）
			//map.put("@_createUserID", UserContext.getLoginUserID()+"");//创建人id
			map.put("@_createUserID", user.getUserID()+"");//创建人id
			map.put("@_modifyUserID", user.getUserID()+"");//最后修改人id
			map.put("@_createDatetime", new SimpleDateFormat("yyyy-MM-dd hh:mm:ss").format(new Date()));//创建时间
			map.put("@_isLeaf",1);//是否为叶子节点（1表示是，0表示不是）
			map.put("@_level",1);//级别
			map.put("@_isDeleted", 0);//记录的删除标识,1表示已经删除
			map.put("@_parentID",0+""); //父id（默认第一级别为0）
			map.put("@_parentOrBoy",1);//@_parentOrBoy代表是添加第一级别的单位还是子单位（1表示是第一级别的单位，2表示是添加子单位）
			
			if(map!=null && map.size()>0){
				this.renderJSON(workUnitManagerServices.createWorkUnit(map));
				LogUtil.insertLog(LogActionTypes.INSERT, "成功", "企业信息管理", "", "增加工作单位");
			}
		} catch (Exception e) {
			LogUtil.insertLog(LogActionTypes.INSERT, "失败", "企业信息管理", "", "增加工作单位");
			e.printStackTrace();
			log.error("增加工作单位异常！"+e.getMessage());
		}
	}
	
	/**
	 * 增加子工作单位
	 */
	@Action(value = "addWorkUnit")
	public void addWorkUnit(){
		try {
			//获得用户所属企业完整id并且保存到查询条件集合中
			SessionUser user = UserContext.getLoginUser();
			//获得页面请求参数
			Map<String,Object> map = this.getParameterMap();
			map.put("@_createUserID", user.getUserID()+"");//创建人id
			map.put("@_modifyUserID", user.getUserID()+"");//最后修改人id
			map.put("@_createDatetime", new SimpleDateFormat("yyyy-MM-dd hh:mm:ss").format(new Date()));//创建时间
			map.put("@_isLeaf",1);//是否为叶子节点（1表示是，0表示不是）
			map.put("@_level",1);//级别
			map.put("@_isDeleted", 0);//记录的删除标识,1表示已经删除
			map.put("@_parentID",map.get("@_id")); //父id（默认第一级别为0）
			map.remove("@_id");//删除id（修改才会用到）
			map.put("@_parentOrBoy",2);//@_parentOrBoy代表是添加第一级别的单位还是子单位（1表示是第一级别的单位，2表示是添加子单位）
			if(map!=null && map.size()>0){
				this.renderJSON(workUnitManagerServices.createWorkUnit(map));
				LogUtil.insertLog(LogActionTypes.INSERT, "成功", "企业信息管理", "", "增加子工作单位");
			}
		} catch (Exception e) {
			LogUtil.insertLog(LogActionTypes.INSERT, "失败", "企业信息管理", "", "增加子工作单位");
			e.printStackTrace();
			log.error("增加子工作单位异常！"+e.getMessage());
		}
		
	}
	
	
	/**
	 * 由ID查询工作单位详细信息
	 */
	@Action(value = "getWorkUnitById")
	public void getWorkUnitById(){
		String id = getParameter("id");
		Map<String,Object> whereMap = new HashMap<String,Object>();
		whereMap.put("id", id);
		try {
			this.renderJSON(JSONUtil.toJson(workUnitManagerServices.getWorkUnitById(whereMap)));
		} catch (Exception e) {
			e.printStackTrace();
			log.error("查询工作单位详细信息异常！"+e.getMessage());
		}
	}
	
	/**
	 * 修改工作单位信息
	 */
	@Action(value = "updateWorkUnit")
	public void updateWorkUnit(){
		
		//获得用户所属企业完整id并且保存到查询条件集合中
		SessionUser user = UserContext.getLoginUser();
		//获得页面请求参数
		Map<String,Object> setMap = this.getParameterMap();
		//修改人id
		setMap.put("@_modifyUserID", user.getUserID()+"");//最后修改人id
		//最后修改时间
		setMap.put("@_modifyDatetime", new SimpleDateFormat("yyyy-MM-dd hh:mm:ss").format(new Date()));
				
		try {
			this.renderJSON(JSONUtil.toJson(workUnitManagerServices.updateWorkUnit(setMap)));
			LogUtil.insertLog(LogActionTypes.UPDATE, "成功", "企业信息管理", "", "修改工作单位信息");
		} catch (Exception e) {
			LogUtil.insertLog(LogActionTypes.UPDATE, "失败", "企业信息管理", "", "修改工作单位信息");
			e.printStackTrace();
			log.error("修改工作单位信息异常！"+e.getMessage());
		}
	}
	
	/**
	 * 删除工作单位
	 */
	@Action(value = "deleteWorkUnit")
	public void deleteWorkUnit(){
		try {
			String ids = getParameter("ids")==null?"":getParameter("ids");
			String name= "["+getParameter("name")+"]";
			Map<String,Object> paramMap = new HashMap<String,Object>();
			paramMap.put("ids", ids);
			paramMap.put("name", name);
			paramMap.put("fullId", this.getFullId(ids));
			this.renderJSON(JSONUtil.toJson(workUnitManagerServices.deleteWorkUnit(paramMap)));
			LogUtil.insertLog(LogActionTypes.DELETE, "成功", "企业信息管理", "", "删除工作单位");
		} catch (Exception e) {
			LogUtil.insertLog(LogActionTypes.DELETE, "失败", "企业信息管理", "", "删除工作单位");
			e.printStackTrace();
			log.error("删除工作单位异常！"+e.getMessage());
		}
	}
		
	/**
	 * 导出数据到Exl
	 */
	@Action(value = "upWorkUnitManageExportExl")
	public void upWorkUnitManageExportExl() {
		// 导出数据时的开始页数
		String fromPage = getParameter("frompage");
		// 导出数据时的结束页数
		String toPage = getParameter("topage");
		
		try {
			
			String[] titleArray = {};
			titleArray = new String[8];
			titleArray[0]="企业名称";
			titleArray[1]="企业简称";
			titleArray[2]="联系人";
			titleArray[3]="联系电话";
			titleArray[4]="其它联系电话";
			titleArray[5]="企业地址";
			titleArray[6]="邮政编号";
			titleArray[7]="注册所在地";
			
			String[] columnArray = {};
			columnArray = new String[8];
			columnArray[0]="Name";
			columnArray[1]="ShortName";
			columnArray[2]="LinkMan";
			columnArray[3]="PhoneNO";
			columnArray[4]="BackupPhoneNO";
			columnArray[5]="Address";
			columnArray[6]="PostCode";
			columnArray[7]="RegAddress";
						
			//查询导出的数据行集合
			List<Map<String,Object>> rows = workUnitManagerServices.downWorkDataLogExportExl(this.getGridParams(),fromPage,toPage);
			exportExl("upWorkDataLog", titleArray, columnArray, rows);
		} catch (Exception e) {
			e.printStackTrace();
			log.error("导出工作单位数据到Exl异常！"+e.getMessage());
		}
		
	}
	
	
	
	
	/**
	 * 其它
	 */
	
	
	
	
}
