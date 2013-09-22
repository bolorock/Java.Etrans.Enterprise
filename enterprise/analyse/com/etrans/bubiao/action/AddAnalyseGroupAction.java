package com.etrans.bubiao.action;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Random;

import org.apache.commons.lang.StringUtils;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.apache.struts2.convention.annotation.Action;
import org.apache.struts2.convention.annotation.Namespace;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;

import com.etrans.bubiao.action.sys.log.LogActionTypes;
import com.etrans.bubiao.action.sys.log.LogUtil;
import com.etrans.bubiao.auth.SessionUser;
import com.etrans.bubiao.entities.PageBean;
import com.etrans.bubiao.entities.Result;
import com.etrans.common.util.vehicleTree.Tree;
import com.etrans.bubiao.services.AddAnalyseGroupService;
import com.etrans.bubiao.sys.UserContext;
import com.etrans.common.util.FlexiGridUtil;
import com.etrans.common.util.ParamKey;
import com.etrans.common.util.RoleJsonTree;
import com.etrans.common.util.json.JSONUtil;
import com.etrans.common.util.vehicleTree.VehicleJsonTree;
import com.etrans.common.util.web.Struts2Utils;

/**
 * 轨迹分析组管理
 * @author Administrator
 */
@Controller
@Scope("prototype")
@Namespace("/analyse")
public class AddAnalyseGroupAction extends BaseAction{
	
	private static final long serialVersionUID = 3595832987485843371L;
	
	protected Logger log = LogManager.getLogger(this.getClass().getName());
	
	//轨迹分析组管理service
	private AddAnalyseGroupService addAnalyseGroupService;

	public AddAnalyseGroupService getAddAnalyseGroupService() {
		return addAnalyseGroupService;
	}

	public void setAddAnalyseGroupService(
			AddAnalyseGroupService addAnalyseGroupService) {
		this.addAnalyseGroupService = addAnalyseGroupService;
	}
	
	
	/**
	 * 查询分析组列表
	 */
	@SuppressWarnings("unchecked")
	@Action(value="findAnalyseGroupList")
	public void findAnalyseGroupList(){
	try {
		Map params = FlexiGridUtil.parseParam(this.getGridParams());
		params = putUserParams(params);

		//获得用户所属企业完整id并且保存到查询条件集合中
		SessionUser user = UserContext.getLoginUser();
		
		/**
		 * 超级管理员
		 * 【超级管理员能看到所有企业的数据】
		 */
		if(UserContext.isBsRootUser()){
			params.remove("workUnitId");
			params.remove("userId");
		}
		//企业管理员
		else if(user != null&&user.isWorkUnitSuperAdmin()){
			params.remove("userId");
		}//普通用户
		else{
			params.remove("workUnitId");
		}
			this.renderJSON(addAnalyseGroupService.findAnalyseGroupList(params,new Random().nextLong()));
		} catch (Exception e) {
			e.printStackTrace();
			log.error("查询分析组列表异常！"+e.getMessage());
		}
		
	}
	
	@Action(value="bbb")
	public void bbb(){
		String b="fff";
		System.out.println(b);
	}
	
	/**
	 * 根据用户类型获取当前用户下面的车辆【超级管理员、企业管理员、普通用户】【树】
	 */
	@SuppressWarnings("unchecked")
	@Action(value="findVehilceListByUserType_Tree")
	public void findVehilceListByUserType_Tree(){
		try {
			if(getParameter("id")==null){
				//企业列表
				List<Map> listMap = new ArrayList<Map>();
				//查询条件
				Map<String,Object> map = new HashMap<String,Object>();
				//获得用户所属企业完整id并且保存到查询条件集合中
				SessionUser user = UserContext.getLoginUser();
				//超级管理员
				if(UserContext.isBsRootUser()){
					map.put("lengths", 8);
				}
				//企业管理员&&user.isWorkUnitSuperAdmin()
				else if(user != null&&user.isWorkUnitSuperAdmin()){
					map = user.getParamsOrFullid(map);
				}
				//普通用户
				else{
					map = user.getParamsOrFullid(map);
				}
				//取得权限企业列表最高级
				listMap = addAnalyseGroupService.findWorkUnitRoot_Tree(map,new Random().nextLong());
				System.out.println("最高级企业共多少条数据："+listMap.size());
				
				VehicleJsonTree tree = new VehicleJsonTree(
						new String[]{"ID","Name","fullId","workUnitId3","analyseGroupid"},//企业id，企业名称，企业完整id，企业id3,分析组id
						"getAllWorkUnit_anaryseGroupBy_ParentFullId",//查询下级企业
						addAnalyseGroupService.getIbatisServices(), //services
						"parentFullId", //父完整id
						"checkOKORNO", //是否被选择字段【不等于null表示被选中了】
						"findVehilceListByUserTypeSqlCommonSql_Tree", //查询车辆【复用此方法的话，只需要修改这个就可以了】
						true     //复选框可以有自动选中功能
				);
				
				//vv表示最后一级企业【表示当前企业没有下级企业了】workUnitId表示企业id
				List<Tree> trees = tree.buildJsonTree(listMap,"vv|","1",getParameter("analyseGroupid"));
				Struts2Utils.renderJson(trees);
//				Struts2Utils.renderJson(new ArrayList<Tree>());
			}else{
				Struts2Utils.renderJson(new ArrayList<Tree>());
			}
		
		
		
		} catch (Exception e) {
			log.error("根据用户类型获取当前用户下面的车辆【超级管理员、企业管理员、普通用户】【树】异常！["+e.getMessage()+"]");
		}	
		
		
	}
	
	
	
	/**
	 * 根据用户类型获取当前用户下面的车辆【超级管理员、企业管理员、普通用户】【分页列表】
	 */
	@SuppressWarnings("unchecked")
	@Action(value="findVehilceListByUserType")
	public void findVehilceListByUserType() {
		try {
			//结果字符串
			StringBuilder jsonString = new StringBuilder();
			//查询结果集合
			List<HashMap<String, String>> vehilceList=new ArrayList<HashMap<String,String>>();
			//条件
			Map<String, Object> paramsMap = new HashMap<String, Object>();
			
			//车牌号
			String registrationNO = getParameter("registrationNO").trim();
			paramsMap.put("registrationNO", registrationNO);
			/**组装查询条件**/
			paramsMap = putUserParams(paramsMap);
			paramsMap=putUserParams2(paramsMap);
			
			//查询总条数
			Long pageListCount = addAnalyseGroupService.findVehilceListByUserTypeCount(paramsMap, new Random().nextLong());
			//查询
			vehilceList=addAnalyseGroupService.findVehilceListByUserType(paramsMap,new Random().nextLong());
			//拼装返回字符串数据
			for (Map vehilceMap : vehilceList) {
				jsonString.append(vehilceMap.get("id") + "=" + vehilceMap.get("registrationNO") + ",");
			}
			
			/**数据总条数和当前多少页参数**/
			jsonString.append(pageListCount).append("=").append(paramsMap.get("pageNo"));
			System.out.println("数据总条数和当前多少页参数："+pageListCount+"结果字符串："+jsonString.toString());
			
			//返回数据
			Struts2Utils.renderText(jsonString.toString());
		} catch (Exception e) {
			e.printStackTrace();
			log.error("根据用户类型获取当前用户下面的车辆异常！"+e.getMessage());
		}
		
	}
	
	
	/**
	 * 新增分析组【树】
	 */
	@Action(value = "addAnalyesGroupTree")
	public void addAnalyesGroupTree() {
		//新增参数
		String analyseGroupsInfo = getParameter("analyseGroupsInfo");
		//id参数
		String vehicleIds=getParameter("idStr");
		//处理参数
		vehicleIds=getvehicleIds(vehicleIds);
		
		Map obj = JSONUtil.fromJson(analyseGroupsInfo, Map.class);
		//得到企业id
		long workUnitID=UserContext.getLoginUser().getWorkUnitID();
		
		Map<String,Object> paramMap = new HashMap<String,Object>();
		paramMap.put("vehicleIds",vehicleIds);//车辆id字符串
		paramMap.put("name",obj.get("name") );//分析组名称
		paramMap.put("workUnitID",workUnitID);//企业id
		paramMap.put("description",obj.get("description")); //解释

		try {
			
			/**验证名称重复begin**/
			String name =obj.get("name").toString();
			String id =obj.get("id").toString();
			Map<String,Object> whereMap = new HashMap<String,Object>();
			whereMap.put("name", name);
			whereMap.put("id", id);
			whereMap=putUserParams(whereMap);
			Boolean result = this.addAnalyseGroupService.checkName2(whereMap);
			
			if(result==true){
				Result result2 = new Result();
				result2.setCode(2);//表示名称重复
				this.renderJSON(result2);
				return;
			}
			/**验证名称重复end**/
			
			this.renderJSON(addAnalyseGroupService.addAnalyesGroup(paramMap));
		} catch (Exception e) {
			e.printStackTrace();
			log.error("新增分析组异常！"+e.getMessage());
		}
		
	}
	
	
	
	/**
	 * 新增分析组【分页列表】
	 */
	@Action(value = "addAnalyesGroup")
	public void addAnalyesGroup() {
		//新增参数
		String analyseGroupsInfo = getParameter("analyseGroupsInfo");
		//id参数
		String vehicleIds=getParameter("idStr");
		Map obj = JSONUtil.fromJson(analyseGroupsInfo, Map.class);
		//得到企业id
		long workUnitID=UserContext.getLoginUser().getWorkUnitID();
		
		Map<String,Object> paramMap = new HashMap<String,Object>();
		paramMap.put("vehicleIds",vehicleIds);//车辆id字符串
		paramMap.put("name",obj.get("name") );//分析组名称
		paramMap.put("workUnitID",workUnitID);//企业id
		paramMap.put("description",obj.get("description")); //解释

		try {
			
			/**验证名称重复begin**/
			String name =obj.get("name").toString();
			Map<String,Object> whereMap = new HashMap<String,Object>();
			whereMap.put("name", name);
			whereMap=putUserParams(whereMap);
			Boolean result = this.addAnalyseGroupService.checkName2(whereMap);
			
			if(result==true){
				Result result2 = new Result();
				result2.setCode(2);//表示名称重复
				this.renderJSON(result2);
				return;
			}
			/**验证名称重复end**/
			
			this.renderJSON(addAnalyseGroupService.addAnalyesGroup(paramMap));
		} catch (Exception e) {
			e.printStackTrace();
			log.error("新增分析组异常！"+e.getMessage());
		}
		
	}
	
	
	/**
	 * 判断名称是否重复
	 */
	@Action(value = "checkName")
	public void checkName(){
		String name = getParameter("name"); 
		String id = getParameter("id"); 
		Map<String,Object> whereMap = new HashMap<String,Object>();
		whereMap.put("name", name);
		whereMap.put("id", id);
		//添加企业id
		whereMap=putUserParams(whereMap);
		
		try {
			this.renderJSON(this.addAnalyseGroupService.checkName(whereMap));
		} catch (Exception e) {
			e.printStackTrace();
		}
		
	}
	
	/**
	 * 修改分析组
	 */
	@Action(value = "updateAnalyesGroup")
	public void updateAnalyesGroup(){
		
		
		
	}
	
	
	/**
	 * 删除分析组
	 */
	@Action(value = "delAnalyesGroup")
	public void delAnalyesGroup() {
		
		String id = getParameter("id");
		Map<String, Object> params = new HashMap<String,Object>();
		params.put("id", id);
		
		try {
			this.renderJSON(addAnalyseGroupService.delAnalyesGroup(params));
		} catch (Exception e) {
			e.printStackTrace();
			log.error("删除分析组报异常！"+e.getMessage());
		}	
		
	}
	
	
	/**
	 * 查询详细信息
	 */
	@Action(value = "getAnalyesGroupById")
	public void getAnalyesGroupById() {
		String id = getParameter("id"); 
		Map<String, Object> params = new HashMap<String,Object>();
		params.put("id", id);
		
		Result result = new Result();
		
		try {
			Map<String,Object> areaConfig = addAnalyseGroupService.getAnalyesGroupById(params);
			result.setCode(1);
			result.setData(areaConfig);
			this.renderJSON(JSONUtil.toJson(result));
		} catch (Exception e) {
			e.printStackTrace();
			log.error("查询分析组详细信息异常！"+e.getMessage());
		}
		this.renderJSON(JSONUtil.toJson(result));
	}
	
	/**
	 * 查询详细信息【Tree】
	 */
	@Action(value = "getAnalyesGroupByIdTree")
	public void getAnalyesGroupByIdTree() {
		String id = getParameter("id"); 
		Map<String, Object> params = new HashMap<String,Object>();
		params.put("id", id);
		
		Result result = new Result();
		
		try {
			Map<String,Object> areaConfig = addAnalyseGroupService.getAnalyesGroupByIdTree(params);
			result.setCode(1);
			result.setData(areaConfig);
			this.renderJSON(JSONUtil.toJson(result));
		} catch (Exception e) {
			e.printStackTrace();
			log.error("查询分析组详细信息异常！"+e.getMessage());
		}
		this.renderJSON(JSONUtil.toJson(result));
	}
	
	
	/**
	 * 获取用户信息
	 * @param params
	 * @return
	 */
	public Map<String,Object> putUserParams(Map<String,Object> params) {
		
//		Long userId = UserContext.isSuperUser() ? 0 : UserContext.getLoginUserID();
		Long userId = UserContext.getLoginUserID();
		Long workUnitId = UserContext.getLoginUser() == null ? -1 : UserContext.getLoginUser().getWorkUnitID();
		String userName = UserContext.getLoginUser() == null ? "" : UserContext.getLoginUser().getUserName();
		
		params.put("userId", userId);//用户id
		params.put("workUnitId", workUnitId); //用户所属企业id
		params.put("userName", userName);//用户名称
		
		return params;
	}
	
	/**
	 * 组装查询参数
	 * @param params
	 * @return
	 */
	public Map<String,Object> putUserParams2(Map<String,Object> paramsMap) {
		
					/**这里是参照登录方法的begin**/
		//用户类型【0表示超级管理员，1表示企业管理员，2表示普通用户】
		String userType = "";
		
		//超级管理员
		if(UserContext.isBsRootUser()){
			userType="0";
		}//企业管理员
		else if(UserContext.getLoginUser().isWorkUnitSuperAdmin()){
			userType="1";
			String fullId = String.valueOf((Long)paramsMap.get("workUnitId"));
			fullId = "00000000".substring(0,8-fullId.length())+fullId;
			paramsMap.put("workUnitId2", fullId);
		}//普通用户
		else{
			userType="2";
		}
		//用户类型
		paramsMap.put("userType", userType);
					/**这里是参照登录方法的begin**/
		
					/**用作分页begin**/
		paramsMap.put("orderColumn", "id"); //排序字段【车辆id】
		//当前第几页，默认是第一页
		String pageNo = getParameter("pageNo") == null ? "1" : getParameter("pageNo").toString();
		//每页显示数据条数
		String pageSize = "200";
		
		paramsMap.put("pageNo",pageNo);
		paramsMap.put("pageSize", pageSize);
					/**用作分页end**/
		
		return paramsMap;
	}
	
	/**
	 * 处理前台树传过来的id字符串,去掉企业id，只要车辆id
	 * @param vehicleIds
	 * @return
	 */
	public String getvehicleIds(String vehicleIds){
		String vehicleId="";
		String[] ids = StringUtils.split(vehicleIds, ",");
		
		 for(String id:ids){
			 //是否包括vv这个字符
			 if(id.contains("vv")){
				 System.out.println(id);
				 vehicleId +=id.split("\\|")[1];
				 vehicleId+=",";
			 }
		 }
		
		 vehicleId = vehicleId.substring(0,vehicleId.length()-1);
		return vehicleId;
		
	}

	
	
	

}
