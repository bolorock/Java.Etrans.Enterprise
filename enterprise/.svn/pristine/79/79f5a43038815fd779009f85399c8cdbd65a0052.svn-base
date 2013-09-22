package com.etrans.bubiao.action;

import java.util.HashMap;
import java.util.Map;
import java.util.Random;

import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.apache.struts2.convention.annotation.Action;
import org.apache.struts2.convention.annotation.Namespace;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;

import com.etrans.bubiao.entities.Result;
import com.etrans.bubiao.services.AnalyserLiveServices;
import com.etrans.bubiao.sys.UserContext;
import com.etrans.common.util.FlexiGridUtil;
import com.etrans.common.util.json.JSONUtil;


/**
 * 司机休息区报警设置Action
 * @author Administrator
 */
@Controller
@Scope("prototype")
@Namespace("/analyse")
public class AnalyserLiveAction extends BaseAction{

	private static final long serialVersionUID = 3595832987485843371L;
	
	protected Logger log = LogManager.getLogger(this.getClass().getName());
	
	//司机休息区报警设置Services
	private AnalyserLiveServices analyserLiveServices;

	public AnalyserLiveServices getAnalyserLiveServices() {
		return analyserLiveServices;
	}

	public void setAnalyserLiveServices(AnalyserLiveServices analyserLiveServices) {
		this.analyserLiveServices = analyserLiveServices;
	}
	
	
	/**
	 * 查询司机休息区报警设置列表
	 */
	@Action(value="findAnalyserLiveList")
	public void findAnalyserLiveList(){
		System.out.println("司机休息区报警设置列表");
		try {
			Map params = FlexiGridUtil.parseParam(this.getGridParams());
			
			/**数据权限参数设置**/
			params=UserContext.putUserParams(params);
			
			this.renderJSON(analyserLiveServices.findAnalyserLiveList(params,new Random().nextLong()));
		} catch (Exception e) {
			e.printStackTrace();
			log.error("查询司机休息区报警设置列表异常！"+e.getMessage());
		}
		
	}
	
	
	/**
	 * 判断名称是否重复
	 */
	@Action(value = "checkName_analyserLive")
	public void checkName_analyserLive(){
		String name = getParameter("name"); 
		String id = getParameter("id"); 
		Map<String,Object> whereMap = new HashMap<String,Object>();
		whereMap.put("name", name);
		whereMap.put("id", id);
		//添加企业id
		whereMap=putUserParams(whereMap);
		
		try {
			this.renderJSON(this.analyserLiveServices.checkName_analyserLive(whereMap));
		} catch (Exception e) {
			e.printStackTrace();
		}
		
	}
	
	/**
	 * 新增司机休息区报警设置
	 */
	@SuppressWarnings("unchecked")
	@Action(value = "addAnalyserLive")
	public void addAnalyserLive() {
		//新增参数
		String analyserLiveInfo = getParameter("analyserLiveInfo");
		Map<String,Object> paramMap = JSONUtil.fromJson(analyserLiveInfo, Map.class);
		//得到企业id
		long workUnitID=UserContext.getLoginUser().getWorkUnitID();
		paramMap.put("workUnitID",workUnitID);
		//用作插入ANA_BasePlaceTypes表的description字段
		paramMap.put("description", "");
		
		try {
			
			/**验证名称重复begin**/
			String name =paramMap.get("name").toString();
			Map<String,Object> whereMap = new HashMap<String,Object>();
			whereMap.put("name", name);
			whereMap=putUserParams(whereMap);
			Boolean result = this.analyserLiveServices.checkName_analyserLive2(whereMap);
			
			if(result==true){
				Result result2 = new Result();
				result2.setCode(2);//表示名称重复
				this.renderJSON(result2);
				return;
			}
			/**验证名称重复end**/
			
			this.renderJSON(analyserLiveServices.addAnalyserLive(paramMap));
		} catch (Exception e) {
			e.printStackTrace();
			log.error("新增司机休息区报警设置异常！"+e.getMessage());
		}
		
		
	}
	
	
	
	/**
	 * 删除
	 */
	@Action(value = "delAnalyserLive")
	public void delAnalyserLive() {
		
		String id = getParameter("id");
		
		Map<String, Object> params = new HashMap<String,Object>();
		params.put("id", id);
		
		try {
			this.renderJSON(analyserLiveServices.delAnalyserLive(params));
		} catch (Exception e) {
			e.printStackTrace();
			log.error("删除司机休息区报警设置异常！"+e.getMessage());
		}	
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
	
}
