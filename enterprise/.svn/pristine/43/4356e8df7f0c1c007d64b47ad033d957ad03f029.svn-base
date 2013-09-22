package com.etrans.bubiao.action.http.mobile;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.commons.lang.StringUtils;
import org.apache.struts2.convention.annotation.Action;
import org.apache.struts2.convention.annotation.Namespace;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;

import com.etrans.bubiao.action.http.Config;
import com.etrans.bubiao.action.http.HttpServiceAction;
import com.etrans.bubiao.action.http.TicketManager;
import com.etrans.bubiao.entities.HttpResult;
import com.etrans.bubiao.entities.ParamBean;
import com.etrans.bubiao.services.IbatisServices;
import com.etrans.bubiao.services.TaService;
import com.etrans.common.util.Tools;
import com.etrans.common.util.json.JSONUtil;

@SuppressWarnings("serial")
@Controller("eTGetTADataAction")
@Scope("prototype")
@Namespace("/httpMobile")
public class ETGetTADataAction extends HttpServiceAction {
	@Autowired(required = true)
	private IbatisServices ibatisServices;

	@Autowired
	private TaService taService;
	
	
	/**
	 * http://localhost:8080/enterprise/httpMobile/ETGetAlarmAttaction.action?jsonParam={"userID":"51","ticket":"1358835197986-5021"}

	 * 获取用户报表管理的菜单
	 * @author hgq
	 */
	@Action(value = "ETGetUserTaMenu")
	public void ETGetUserTaMenu() throws Exception 
	{

		//返回结果
		HttpResult result = new HttpResult();
		
		try{
			boolean flag = true;
			result.setCode(Config.SUCCESS);
			
			/****************数据验证*********START***************/
			//步骤一：解释参数
			ParamBean paramBean = JSONUtil.fromJson(super.jsonParam,ParamBean.class);
			
			//步骤二：获取参数
			String userId = paramBean.getUserID().trim();
			String ticket = paramBean.getTicket().trim();
			Map<String,Object> userMap = new HashMap<String,Object>();
			userMap.put("userId", userId);
			List<HashMap<String,String>> userTypeList = this.ibatisServices.findIbatisList("getUserTypeSQL", userMap);
			String userType=userTypeList.get(0).get("isAdmin");
			//超级用户 或 企业管理员
			
			
			//步骤三：判断安全票据是否为空
			if(StringUtils.isEmpty(ticket)){
				result.setCode(Config.TICKET_ENPTY);
				flag = false;
			}
			
			//步骤四：验证用户是否失效
			if(TicketManager.getInstance().checkTicketAble(ticket)){
				result.setCode(Config.TICKET_UNABLE);
				flag = false;
			}
			/****************数据验证********END****************/
			if(flag){
				/****************返回结果********START****************/
				//步骤五：组装返回对象
				Map<String,Object> map = new HashMap<String,Object>();
				map.put("userId", userId);
				map.put("userType", userType);
				List<HashMap<String,String>> resultls = this.ibatisServices.findIbatisList("getUserTaMenuSQL", map);
				
				
				String str = JSONUtil.toJson(resultls);
				result.setData(str);
				/****************返回结果********END****************/
				
				/****************更新票据有效时间********START****************/
				//步骤六：更新票据有效时间
				TicketManager.getInstance().putTicket(ticket);
				
				/****************更新票据有效时间********START****************/
			}
		}catch(Exception e){
			result.setCode(Config.OTHER_ERROR);
			log.error("["+Tools.formatDate(new Date())+"]---->",e);
		}
		
		this.renderJSON(result);
	}
	
	
	/**
	 * http://127.0.0.1:8080/enterprise/httpMobile/ETGetMonthReport.action?jsonParam={"userID":"1","ticket":"1371188606888-9403",unitIdList:[],"startDate":"2013-06-01 00:00:00","endDate":"2013-06-29 23:59:59","pageSize":"10","pageNumber":"1"}

	 * 获取警情监管统计
	 * 
	 * @author hgq
	 */
	@SuppressWarnings("unused")
	@Action(value = "ETGetMonthReport")
	public void ETGetMonthReport() throws Exception {
		// 返回结果
		HttpResult result = new HttpResult();
		SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");

		Date dateStart = null;
		Date dateEnd = null;
		try {
			boolean flag = true;
			result.setCode(Config.SUCCESS);

			/**************** 数据验证*********START ***************/
			// 步骤一：解释参数
			ParamBean paramBean = JSONUtil.fromJson(super.jsonParam,
					ParamBean.class);

			// 步骤二：获取参数
			String ticket = paramBean.getTicket().trim();
			String userID = paramBean.getUserID().trim();
			List<String> unitIdList = paramBean.getUnitIdList();
			String pageSize = paramBean.getPageSize().trim();
			String pageNumber = paramBean.getPageNumber().trim();
			String startDate = paramBean.getStartDate();
			String endDate = paramBean.getEndDate();
			dateStart = format.parse(startDate);
			dateEnd = format.parse(endDate);

			// 步骤三：判断安全票据是否为空
			if (StringUtils.isEmpty(ticket)) {
				result.setCode(Config.TICKET_ENPTY);
				flag = false;
			}

			// 步骤四：验证用户是否失效
			if (TicketManager.getInstance().checkTicketAble(ticket)) {
				result.setCode(Config.TICKET_UNABLE);
				flag = false;
			}
			/**************** 数据验证********END ****************/
			if (flag) {
				/**************** 返回结果********START ****************/
				// 步骤五：组装返回对象
				Map<String, Object> map = new HashMap<String, Object>();
				// map.put("userID", userID);
				map.put("unitIdList", unitIdList);
				map.put("startDate", dateStart);
				map.put("endDate", dateEnd);
				map.put("pageSize",Integer.parseInt(pageSize));
				map.put("pageIndex", (Integer.parseInt(pageNumber)-1)* Integer.parseInt(pageSize));
				
				List<HashMap<String,String>> recordCount = this.ibatisServices.findIbatisList("findMonthReportCount", map);
				List<HashMap<String, String>> resultls = this.ibatisServices.findIbatisList("getMonthReportSql", map);
				
				for(HashMap<String, String> item:resultls)
				{
					item.putAll(recordCount.get(0));
				}
				String str = JSONUtil.toJson(resultls);
				result.setData(str);
				/**************** 返回结果********END ****************/

				/**************** 更新票据有效时间********START ****************/
				// 步骤六：更新票据有效时间
				TicketManager.getInstance().putTicket(ticket);

				/**************** 更新票据有效时间********START ****************/
			}
		} catch (Exception e) {
			result.setCode(Config.OTHER_ERROR);
			log.error("[" + Tools.formatDate(new Date()) + "]---->", e);
		}

		this.renderJSON(result);
	}
	
	
	/**
	 * http://127.0.0.1:8080/enterprise/httpMobile/ETGetVehicleSupervision.action?jsonParam={"userID":"1","ticket":"1371188606888-9403",unitIdList:[],"startDate":"2013-06-01 00:00:00","endDate":"2013-06-29 23:59:59","pageSize":"10","pageNumber":"1"}

	 * 获取车辆监管质量统计
	 * 
	 * @author hgq
	 */
	@SuppressWarnings("unused")
	@Action(value = "ETGetVehicleSupervision")
	public void ETGetVehicleSupervision() throws Exception {
		// 返回结果
		HttpResult result = new HttpResult();
		SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");

		Date dateStart = null;
		Date dateEnd = null;
		try {
			boolean flag = true;
			result.setCode(Config.SUCCESS);

			/**************** 数据验证*********START ***************/
			// 步骤一：解释参数
			ParamBean paramBean = JSONUtil.fromJson(super.jsonParam,
					ParamBean.class);

			// 步骤二：获取参数
			String ticket = paramBean.getTicket().trim();
			String userID = paramBean.getUserID().trim();
			String pageSize = paramBean.getPageSize().trim();
			String pageNumber = paramBean.getPageNumber().trim();
			List<String> unitIdList = paramBean.getUnitIdList();
			String startDate = paramBean.getStartDate();
			String endDate = paramBean.getEndDate();
			dateStart = format.parse(startDate);
			dateEnd = format.parse(endDate);

			// 步骤三：判断安全票据是否为空
			if (StringUtils.isEmpty(ticket)) {
				result.setCode(Config.TICKET_ENPTY);
				flag = false;
			}

			// 步骤四：验证用户是否失效
			if (TicketManager.getInstance().checkTicketAble(ticket)) {
				result.setCode(Config.TICKET_UNABLE);
				flag = false;
			}
			/**************** 数据验证********END ****************/
			if (flag) {
				/**************** 返回结果********START ****************/
				// 步骤五：组装返回对象
				Map<String, Object> map = new HashMap<String, Object>();
				// map.put("userID", userID);
				map.put("unitIdList", unitIdList);
				map.put("startDate", dateStart);
				map.put("endDate", dateEnd);
				map.put("pageSize",Integer.parseInt(pageSize));
				map.put("pageIndex", (Integer.parseInt(pageNumber)-1)* Integer.parseInt(pageSize));
				
				List<HashMap<String,String>> recordCount = this.ibatisServices.findIbatisList("findVehicleSupervisionCount", map);
				List<HashMap<String, String>> resultls = this.ibatisServices.findIbatisList("getVehicleSupervisionSql", map);
				
				for(HashMap<String, String> item:resultls)
				{
					item.putAll(recordCount.get(0));
				}
				String str = JSONUtil.toJson(resultls);
				result.setData(str);
				/**************** 返回结果********END ****************/

				/**************** 更新票据有效时间********START ****************/
				// 步骤六：更新票据有效时间
				TicketManager.getInstance().putTicket(ticket);

				/**************** 更新票据有效时间********START ****************/
			}
		} catch (Exception e) {
			result.setCode(Config.OTHER_ERROR);
			log.error("[" + Tools.formatDate(new Date()) + "]---->", e);
		}

		this.renderJSON(result);
	}
	
	
	/**
	 * http://127.0.0.1:8080/enterprise/httpMobile/ETGetVehicleOnlineRate.action?jsonParam={"userID":"1","ticket":"1371188606888-9403",unitIdList:[],"startDate":"2013-06-01","endDate":"2013-06-29","pageSize":"10","pageNumber":"1"}

	 * 获取在线率统计
	 * 
	 * @author hgq
	 */
	@SuppressWarnings("unused")
	@Action(value = "ETGetVehicleOnlineRate")
	public void ETGetVehicleOnlineRate() throws Exception {
		// 返回结果
		HttpResult result = new HttpResult();
		SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd");

		Date dateStart = null;
		Date dateEnd = null;
		try {
			boolean flag = true;
			result.setCode(Config.SUCCESS);

			/**************** 数据验证*********START ***************/
			// 步骤一：解释参数
			ParamBean paramBean = JSONUtil.fromJson(super.jsonParam,
					ParamBean.class);

			// 步骤二：获取参数
			String ticket = paramBean.getTicket().trim();
			String userID = paramBean.getUserID().trim();
			String pageSize = paramBean.getPageSize().trim();
			String pageNumber = paramBean.getPageNumber().trim();
			List<String> unitIdList = paramBean.getUnitIdList();
			String startDate = paramBean.getStartDate();
			String endDate = paramBean.getEndDate();
			dateStart = format.parse(startDate);
			dateEnd = format.parse(endDate);

			// 步骤三：判断安全票据是否为空
			if (StringUtils.isEmpty(ticket)) {
				result.setCode(Config.TICKET_ENPTY);
				flag = false;
			}

			// 步骤四：验证用户是否失效
			if (TicketManager.getInstance().checkTicketAble(ticket)) {
				result.setCode(Config.TICKET_UNABLE);
				flag = false;
			}
			/**************** 数据验证********END ****************/
			if (flag) {
				/**************** 返回结果********START ****************/
				// 步骤五：组装返回对象
				Map<String, Object> map = new HashMap<String, Object>();
				// map.put("userID", userID);
				map.put("unitIdList", unitIdList);
				map.put("startDate", dateStart);
				map.put("endDate", dateEnd);
				map.put("pageSize",Integer.parseInt(pageSize));
				map.put("pageIndex", (Integer.parseInt(pageNumber)-1)* Integer.parseInt(pageSize));
				
				List<HashMap<String,String>> recordCount = this.ibatisServices.findIbatisList("findVehicleOnlineRateCount", map);
				List<HashMap<String, String>> resultls = this.ibatisServices.findIbatisList("getVehicleOnlineRateSql", map);
				
				for(HashMap<String, String> item:resultls)
				{
					item.putAll(recordCount.get(0));
				}
				String str = JSONUtil.toJson(resultls);
				result.setData(str);
				/**************** 返回结果********END ****************/

				/**************** 更新票据有效时间********START ****************/
				// 步骤六：更新票据有效时间
				TicketManager.getInstance().putTicket(ticket);

				/**************** 更新票据有效时间********START ****************/
			}
		} catch (Exception e) {
			result.setCode(Config.OTHER_ERROR);
			log.error("[" + Tools.formatDate(new Date()) + "]---->", e);
		}

		this.renderJSON(result);
	}
	
	/**
	 * http://127.0.0.1:8080/enterprise/httpMobile/ETGetNowOnline.action?jsonParam={"userID":"1","ticket":"1371188606888-9403",unitIdList:[],"endDate":"2013-06-13 23:59:59","pageSize":"10","pageNumber":"1"}

	 * 获取当前在线率统计
	 * 
	 * @author hgq
	 */
	@SuppressWarnings("unused")
	@Action(value = "ETGetNowOnline")
	public void ETGetNowOnline() throws Exception {
		// 返回结果
		HttpResult result = new HttpResult();
		SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");

		Date dateStart = null;
		Date dateEnd = null;
		try {
			boolean flag = true;
			result.setCode(Config.SUCCESS);

			/**************** 数据验证*********START ***************/
			// 步骤一：解释参数
			ParamBean paramBean = JSONUtil.fromJson(super.jsonParam,
					ParamBean.class);

			// 步骤二：获取参数
			String ticket = paramBean.getTicket().trim();
			String userID = paramBean.getUserID().trim();
			String pageSize = paramBean.getPageSize().trim();
			String pageNumber = paramBean.getPageNumber().trim();
			List<String> unitIdList = paramBean.getUnitIdList();
			String endDate = paramBean.getEndDate();
			dateEnd = format.parse(endDate);
			dateStart=format.parse(endDate);
			dateStart.setMinutes(dateStart.getMinutes()-10);

			// 步骤三：判断安全票据是否为空
			if (StringUtils.isEmpty(ticket)) {
				result.setCode(Config.TICKET_ENPTY);
				flag = false;
			}

			// 步骤四：验证用户是否失效
			if (TicketManager.getInstance().checkTicketAble(ticket)) {
				result.setCode(Config.TICKET_UNABLE);
				flag = false;
			}
			/**************** 数据验证********END ****************/
			if (flag) {
				/**************** 返回结果********START ****************/
				// 步骤五：组装返回对象
				Map<String, Object> map = new HashMap<String, Object>();
				// map.put("userID", userID);
				map.put("unitIdList", unitIdList);
				map.put("startDate", dateStart);
				map.put("endDate", dateEnd);
				map.put("pageSize",Integer.parseInt(pageSize));
				map.put("pageIndex", (Integer.parseInt(pageNumber)-1)* Integer.parseInt(pageSize));
				
				List<HashMap<String,String>> recordCount = this.ibatisServices.findIbatisList("findNowOnlineCount", map);
				List<HashMap<String, String>> resultls = this.ibatisServices.findIbatisList("getNowOnlineSql", map);
				
				for(HashMap<String, String> item:resultls)
				{
					item.putAll(recordCount.get(0));
				}
				String str = JSONUtil.toJson(resultls);
				result.setData(str);
				/**************** 返回结果********END ****************/

				/**************** 更新票据有效时间********START ****************/
				// 步骤六：更新票据有效时间
				TicketManager.getInstance().putTicket(ticket);

				/**************** 更新票据有效时间********START ****************/
			}
		} catch (Exception e) {
			result.setCode(Config.OTHER_ERROR);
			log.error("[" + Tools.formatDate(new Date()) + "]---->", e);
		}

		this.renderJSON(result);
	}
	
	/**
	 * http://127.0.0.1:8080/enterprise/httpMobile/ETGetNowOnlineRate.action?jsonParam={"userID":"1","ticket":"1371188606888-9403",unitIdList:[],"startDate":"2013-06-01 00:00:00","endDate":"2013-06-13 23:59:59","pageSize":"10","pageNumber":"1"}

	 * 获取上线率统计
	 * 
	 * @author hgq
	 */
	@SuppressWarnings("unused")
	@Action(value = "ETGetNowOnlineRate")
	public void ETGetNowOnlineRate() throws Exception {
		// 返回结果
		HttpResult result = new HttpResult();
		SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");

		Date dateStart = null;
		Date dateEnd = null;
		try {
			boolean flag = true;
			result.setCode(Config.SUCCESS);

			/**************** 数据验证*********START ***************/
			// 步骤一：解释参数
			ParamBean paramBean = JSONUtil.fromJson(super.jsonParam,
					ParamBean.class);

			// 步骤二：获取参数
			String ticket = paramBean.getTicket().trim();
			String userID = paramBean.getUserID().trim();
			String pageSize = paramBean.getPageSize().trim();
			String pageNumber = paramBean.getPageNumber().trim();
			List<String> unitIdList = paramBean.getUnitIdList();
			String startDate = paramBean.getStartDate();
			String endDate = paramBean.getEndDate();
			dateStart = format.parse(startDate);
			dateEnd = format.parse(endDate);

			// 步骤三：判断安全票据是否为空
			if (StringUtils.isEmpty(ticket)) {
				result.setCode(Config.TICKET_ENPTY);
				flag = false;
			}

			// 步骤四：验证用户是否失效
			if (TicketManager.getInstance().checkTicketAble(ticket)) {
				result.setCode(Config.TICKET_UNABLE);
				flag = false;
			}
			/**************** 数据验证********END ****************/
			if (flag) {
				/**************** 返回结果********START ****************/
				// 步骤五：组装返回对象
				Map<String, Object> map = new HashMap<String, Object>();
				// map.put("userID", userID);
				map.put("unitIdList", unitIdList);
				map.put("startDate", dateStart);
				map.put("endDate", dateEnd);
				map.put("pageSize",Integer.parseInt(pageSize));
				map.put("pageIndex", (Integer.parseInt(pageNumber)-1)* Integer.parseInt(pageSize));
				
				List<HashMap<String,String>> recordCount = this.ibatisServices.findIbatisList("findNowOnlineRateCount", map);
				List<HashMap<String, String>> resultls = this.ibatisServices.findIbatisList("getNowOnlineRateSql", map);
				
				for(HashMap<String, String> item:resultls)
				{
					item.putAll(recordCount.get(0));
				}
				String str = JSONUtil.toJson(resultls);
				result.setData(str);
				/**************** 返回结果********END ****************/

				/**************** 更新票据有效时间********START ****************/
				// 步骤六：更新票据有效时间
				TicketManager.getInstance().putTicket(ticket);

				/**************** 更新票据有效时间********START ****************/
			}
		} catch (Exception e) {
			result.setCode(Config.OTHER_ERROR);
			log.error("[" + Tools.formatDate(new Date()) + "]---->", e);
		}

		this.renderJSON(result);
	}
	
	
	//region 夜间行车
	/**
	 * http://127.0.0.1:8080/enterprise/httpMobile/ETGetVehicleNightByVehicle.action?jsonParam={"userID":"1","ticket":"1369796996249-7115",analyseGroup:"",vehicleIdList:[],"startDate":"2013-04-26 00:00:00","endDate":"2013-04-26 23:59:59","pageSize":"10","pageNumber":"1"}

	 * 获取夜间行车统计按车辆数据统计
	 * 
	 * @author hgq
	 */
	@SuppressWarnings("unused")
	@Action(value = "ETGetVehicleNightByVehicle")
	public void ETGetVehicleNightByVehicle() throws Exception {
		// 返回结果
		HttpResult result = new HttpResult();
		SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");

		Date dateStart = null;
		Date dateEnd = null;
		try {
			boolean flag = true;
			result.setCode(Config.SUCCESS);

			/**************** 数据验证*********START ***************/
			// 步骤一：解释参数
			ParamBean paramBean = JSONUtil.fromJson(super.jsonParam,
					ParamBean.class);

			// 步骤二：获取参数
			String ticket = paramBean.getTicket().trim();
			String userID = paramBean.getUserID().trim();
			String pageSize = paramBean.getPageSize().trim();
			String pageNumber = paramBean.getPageNumber().trim();
			List<String> vehicleIdList = paramBean.getVehicleIdList();
			String analyseGroup=paramBean.getAnalyseGroup().trim();
			analyseGroup=new String(analyseGroup.getBytes("ISO-8859-1"),"UTF-8");
			String startDate = paramBean.getStartDate();
			String endDate = paramBean.getEndDate();
			dateStart = format.parse(startDate);
			dateEnd = format.parse(endDate);

			// 步骤三：判断安全票据是否为空
			if (StringUtils.isEmpty(ticket)) {
				result.setCode(Config.TICKET_ENPTY);
				flag = false;
			}

			// 步骤四：验证用户是否失效
			if (TicketManager.getInstance().checkTicketAble(ticket)) {
				result.setCode(Config.TICKET_UNABLE);
				flag = false;
			}
			/**************** 数据验证********END ****************/
			if (flag) {
				/**************** 返回结果********START ****************/
				// 步骤五：组装返回对象
				Map<String, Object> map = new HashMap<String, Object>();
				// map.put("userID", userID);
				map.put("analyseGroup", analyseGroup);
				map.put("startDate", dateStart);
				map.put("vehicleIdList", vehicleIdList);
				map.put("endDate", dateEnd);
				map.put("pageSize",Integer.parseInt(pageSize));
				map.put("pageIndex", (Integer.parseInt(pageNumber)-1)* Integer.parseInt(pageSize));
				
				List<HashMap<String,String>> recordCount = this.ibatisServices.findIbatisList("findVehicleNightByVehicleCount", map);
				List<HashMap<String, String>> resultls = this.ibatisServices.findIbatisList("getVehicleNightByVehicleSql", map);
				
				for(HashMap<String, String> item:resultls)
				{
					item.putAll(recordCount.get(0));
				}
				String str = JSONUtil.toJson(resultls);
				result.setData(str);
				/**************** 返回结果********END ****************/

				/**************** 更新票据有效时间********START ****************/
				// 步骤六：更新票据有效时间
				TicketManager.getInstance().putTicket(ticket);

				/**************** 更新票据有效时间********START ****************/
			}
		} catch (Exception e) {
			result.setCode(Config.OTHER_ERROR);
			log.error("[" + Tools.formatDate(new Date()) + "]---->", e);
		}

		this.renderJSON(result);
	}
	
	/**
	 * http://127.0.0.1:8080/enterprise/httpMobile/ETGetVehicleNightByGroup.action?jsonParam={"userID":"1","ticket":"1369807976189-1072",analyseGroup:"分析",vehicleIdList:["2","3","4"],"startDate":"2013-04-26 00:00:00","endDate":"2013-04-26 23:59:59"}

	 * 获取夜间行车统计分组数据统计
	 * 
	 * @author hgq
	 */
	@SuppressWarnings("unused")
	@Action(value = "ETGetVehicleNightByGroup")
	public void ETGetVehicleNightByGroup() throws Exception {
		// 返回结果
		HttpResult result = new HttpResult();
		SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");

		Date dateStart = null;
		Date dateEnd = null;
		try {
			boolean flag = true;
			result.setCode(Config.SUCCESS);

			/**************** 数据验证*********START ***************/
			// 步骤一：解释参数
			ParamBean paramBean = JSONUtil.fromJson(super.jsonParam,
					ParamBean.class);

			// 步骤二：获取参数
			String ticket = paramBean.getTicket().trim();
			String userID = paramBean.getUserID().trim();
			String analyseGroup=paramBean.getAnalyseGroup().trim();
			analyseGroup=new String(analyseGroup.getBytes("ISO-8859-1"),"UTF-8");
			String startDate = paramBean.getStartDate();
			String endDate = paramBean.getEndDate();
			dateStart = format.parse(startDate);
			dateEnd = format.parse(endDate);

			// 步骤三：判断安全票据是否为空
			if (StringUtils.isEmpty(ticket)) {
				result.setCode(Config.TICKET_ENPTY);
				flag = false;
			}

			// 步骤四：验证用户是否失效
			if (TicketManager.getInstance().checkTicketAble(ticket)) {
				result.setCode(Config.TICKET_UNABLE);
				flag = false;
			}
			/**************** 数据验证********END ****************/
			if (flag) {
				/**************** 返回结果********START ****************/
				// 步骤五：组装返回对象
				Map<String, Object> map = new HashMap<String, Object>();
				// map.put("userID", userID);
				map.put("analyseGroup", analyseGroup);
				map.put("startDate", dateStart);
				map.put("endDate", dateEnd);

				List<HashMap<String, String>> resultls = this.ibatisServices.findIbatisList("getVehicleNightByGroupSql", map);

				String str = JSONUtil.toJson(resultls);
				result.setData(str);
				/**************** 返回结果********END ****************/

				/**************** 更新票据有效时间********START ****************/
				// 步骤六：更新票据有效时间
				TicketManager.getInstance().putTicket(ticket);

				/**************** 更新票据有效时间********START ****************/
			}
		} catch (Exception e) {
			result.setCode(Config.OTHER_ERROR);
			log.error("[" + Tools.formatDate(new Date()) + "]---->", e);
		}

		this.renderJSON(result);
	}
	//endregion
	
	
	//region 路段偏离
	/**
	 * http://127.0.0.1:8080/enterprise/httpMobile/ETGetRoadInoutByVehicle.action?jsonParam={"userID":"1","ticket":"1369796996249-7115",analyseGroup:"",vehicleIdList:[],"startDate":"2013-04-26 00:00:00","endDate":"2013-04-26 23:59:59","pageSize":"10","pageNumber":"1"}

	 * 获取路段偏离统计按车辆数据统计
	 * 
	 * @author hgq
	 */
	@SuppressWarnings("unused")
	@Action(value = "ETGetRoadInoutByVehicle")
	public void ETGetRoadInoutByVehicle() throws Exception {
		// 返回结果
		HttpResult result = new HttpResult();
		SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");

		Date dateStart = null;
		Date dateEnd = null;
		try {
			boolean flag = true;
			result.setCode(Config.SUCCESS);

			/**************** 数据验证*********START ***************/
			// 步骤一：解释参数
			ParamBean paramBean = JSONUtil.fromJson(super.jsonParam,
					ParamBean.class);

			// 步骤二：获取参数
			String ticket = paramBean.getTicket().trim();
			String userID = paramBean.getUserID().trim();
			String pageSize = paramBean.getPageSize().trim();
			String pageNumber = paramBean.getPageNumber().trim();
			List<String> vehicleIdList = paramBean.getVehicleIdList();
			String analyseGroup=paramBean.getAnalyseGroup().trim();
			analyseGroup=new String(analyseGroup.getBytes("ISO-8859-1"),"UTF-8");
			String startDate = paramBean.getStartDate();
			String endDate = paramBean.getEndDate();
			dateStart = format.parse(startDate);
			dateEnd = format.parse(endDate);

			// 步骤三：判断安全票据是否为空
			if (StringUtils.isEmpty(ticket)) {
				result.setCode(Config.TICKET_ENPTY);
				flag = false;
			}

			// 步骤四：验证用户是否失效
			if (TicketManager.getInstance().checkTicketAble(ticket)) {
				result.setCode(Config.TICKET_UNABLE);
				flag = false;
			}
			/**************** 数据验证********END ****************/
			if (flag) {
				/**************** 返回结果********START ****************/
				// 步骤五：组装返回对象
				Map<String, Object> map = new HashMap<String, Object>();
				// map.put("userID", userID);
				map.put("analyseGroup", analyseGroup);
				map.put("startDate", dateStart);
				map.put("vehicleIdList", vehicleIdList);
				map.put("endDate", dateEnd);
				map.put("pageSize",Integer.parseInt(pageSize));
				map.put("pageIndex", (Integer.parseInt(pageNumber)-1)* Integer.parseInt(pageSize));
				
				List<HashMap<String,String>> recordCount = this.ibatisServices.findIbatisList("findRoadInoutByVehicleCount", map);
				List<HashMap<String, String>> resultls = this.ibatisServices.findIbatisList("getRoadInoutByVehicleSql", map);
				
				for(HashMap<String, String> item:resultls)
				{
					item.putAll(recordCount.get(0));
				}
				String str = JSONUtil.toJson(resultls);
				result.setData(str);
				/**************** 返回结果********END ****************/

				/**************** 更新票据有效时间********START ****************/
				// 步骤六：更新票据有效时间
				TicketManager.getInstance().putTicket(ticket);

				/**************** 更新票据有效时间********START ****************/
			}
		} catch (Exception e) {
			result.setCode(Config.OTHER_ERROR);
			log.error("[" + Tools.formatDate(new Date()) + "]---->", e);
		}

		this.renderJSON(result);
	}
	
	/**
	 * http://127.0.0.1:8080/enterprise/httpMobile/ETGetRoadInoutByGroup.action?jsonParam={"userID":"1","ticket":"1369807976189-1072",analyseGroup:"分析",vehicleIdList:["2","3","4"],"startDate":"2013-04-26 00:00:00","endDate":"2013-04-26 23:59:59"}

	 * 获取路段偏离统计分组数据统计
	 * 
	 * @author hgq
	 */
	@SuppressWarnings("unused")
	@Action(value = "ETGetRoadInoutByGroup")
	public void ETGetRoadInoutByGroup() throws Exception {
		// 返回结果
		HttpResult result = new HttpResult();
		SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");

		Date dateStart = null;
		Date dateEnd = null;
		try {
			boolean flag = true;
			result.setCode(Config.SUCCESS);

			/**************** 数据验证*********START ***************/
			// 步骤一：解释参数
			ParamBean paramBean = JSONUtil.fromJson(super.jsonParam,
					ParamBean.class);

			// 步骤二：获取参数
			String ticket = paramBean.getTicket().trim();
			String userID = paramBean.getUserID().trim();
			String analyseGroup=paramBean.getAnalyseGroup().trim();
			analyseGroup=new String(analyseGroup.getBytes("ISO-8859-1"),"UTF-8");
			String startDate = paramBean.getStartDate();
			String endDate = paramBean.getEndDate();
			dateStart = format.parse(startDate);
			dateEnd = format.parse(endDate);

			// 步骤三：判断安全票据是否为空
			if (StringUtils.isEmpty(ticket)) {
				result.setCode(Config.TICKET_ENPTY);
				flag = false;
			}

			// 步骤四：验证用户是否失效
			if (TicketManager.getInstance().checkTicketAble(ticket)) {
				result.setCode(Config.TICKET_UNABLE);
				flag = false;
			}
			/**************** 数据验证********END ****************/
			if (flag) {
				/**************** 返回结果********START ****************/
				// 步骤五：组装返回对象
				Map<String, Object> map = new HashMap<String, Object>();
				// map.put("userID", userID);
				map.put("analyseGroup", analyseGroup);
				map.put("startDate", dateStart);
				map.put("endDate", dateEnd);

				List<HashMap<String, String>> resultls = this.ibatisServices.findIbatisList("getRoadInoutByGroupSql", map);

				String str = JSONUtil.toJson(resultls);
				result.setData(str);
				/**************** 返回结果********END ****************/

				/**************** 更新票据有效时间********START ****************/
				// 步骤六：更新票据有效时间
				TicketManager.getInstance().putTicket(ticket);

				/**************** 更新票据有效时间********START ****************/
			}
		} catch (Exception e) {
			result.setCode(Config.OTHER_ERROR);
			log.error("[" + Tools.formatDate(new Date()) + "]---->", e);
		}

		this.renderJSON(result);
	}
	//endregion
	
	
	//region 进出区域
	/**
	 * http://127.0.0.1:8080/enterprise/httpMobile/ETGetAreaInoutByVehicle.action?jsonParam={"userID":"1","ticket":"1369796996249-7115",analyseGroup:"",vehicleIdList:[],"startDate":"2013-04-26 00:00:00","endDate":"2013-04-26 23:59:59","pageSize":"10","pageNumber":"1"}

	 * 获取进出区域统计按车辆数据统计
	 * 
	 * @author hgq
	 */
	@SuppressWarnings("unused")
	@Action(value = "ETGetAreaInoutByVehicle")
	public void ETGetAreaInoutByVehicle() throws Exception {
		// 返回结果
		HttpResult result = new HttpResult();
		SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");

		Date dateStart = null;
		Date dateEnd = null;
		try {
			boolean flag = true;
			result.setCode(Config.SUCCESS);

			/**************** 数据验证*********START ***************/
			// 步骤一：解释参数
			ParamBean paramBean = JSONUtil.fromJson(super.jsonParam,
					ParamBean.class);

			// 步骤二：获取参数
			String ticket = paramBean.getTicket().trim();
			String userID = paramBean.getUserID().trim();
			String pageSize = paramBean.getPageSize().trim();
			String pageNumber = paramBean.getPageNumber().trim();
			List<String> vehicleIdList = paramBean.getVehicleIdList();
			String analyseGroup=paramBean.getAnalyseGroup().trim();
			analyseGroup=new String(analyseGroup.getBytes("ISO-8859-1"),"UTF-8");
			String startDate = paramBean.getStartDate();
			String endDate = paramBean.getEndDate();
			dateStart = format.parse(startDate);
			dateEnd = format.parse(endDate);

			// 步骤三：判断安全票据是否为空
			if (StringUtils.isEmpty(ticket)) {
				result.setCode(Config.TICKET_ENPTY);
				flag = false;
			}

			// 步骤四：验证用户是否失效
			if (TicketManager.getInstance().checkTicketAble(ticket)) {
				result.setCode(Config.TICKET_UNABLE);
				flag = false;
			}
			/**************** 数据验证********END ****************/
			if (flag) {
				/**************** 返回结果********START ****************/
				// 步骤五：组装返回对象
				Map<String, Object> map = new HashMap<String, Object>();
				// map.put("userID", userID);
				map.put("analyseGroup", analyseGroup);
				map.put("startDate", dateStart);
				map.put("vehicleIdList", vehicleIdList);
				map.put("endDate", dateEnd);
				map.put("pageSize",Integer.parseInt(pageSize));
				map.put("pageIndex", (Integer.parseInt(pageNumber)-1)* Integer.parseInt(pageSize));
				
				List<HashMap<String,String>> recordCount = this.ibatisServices.findIbatisList("findAreaInoutByVehicleCount", map);
				List<HashMap<String, String>> resultls = this.ibatisServices.findIbatisList("getAreaInoutByVehicleSql", map);
				
				for(HashMap<String, String> item:resultls)
				{
					item.putAll(recordCount.get(0));
				}
				String str = JSONUtil.toJson(resultls);
				result.setData(str);
				/**************** 返回结果********END ****************/

				/**************** 更新票据有效时间********START ****************/
				// 步骤六：更新票据有效时间
				TicketManager.getInstance().putTicket(ticket);

				/**************** 更新票据有效时间********START ****************/
			}
		} catch (Exception e) {
			result.setCode(Config.OTHER_ERROR);
			log.error("[" + Tools.formatDate(new Date()) + "]---->", e);
		}

		this.renderJSON(result);
	}
	
	/**
	 * http://127.0.0.1:8080/enterprise/httpMobile/ETGetAreaInoutByGroup.action?jsonParam={"userID":"1","ticket":"1369807976189-1072",analyseGroup:"分析",vehicleIdList:["2","3","4"],"startDate":"2013-04-26 00:00:00","endDate":"2013-04-26 23:59:59"}

	 * 获取进出区域偏离统计分组数据统计
	 * 
	 * @author hgq
	 */
	@SuppressWarnings("unused")
	@Action(value = "ETGetAreaInoutByGroup")
	public void ETGetAreaInoutByGroup() throws Exception {
		// 返回结果
		HttpResult result = new HttpResult();
		SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");

		Date dateStart = null;
		Date dateEnd = null;
		try {
			boolean flag = true;
			result.setCode(Config.SUCCESS);

			/**************** 数据验证*********START ***************/
			// 步骤一：解释参数
			ParamBean paramBean = JSONUtil.fromJson(super.jsonParam,
					ParamBean.class);

			// 步骤二：获取参数
			String ticket = paramBean.getTicket().trim();
			String userID = paramBean.getUserID().trim();
			String analyseGroup=paramBean.getAnalyseGroup().trim();
			analyseGroup=new String(analyseGroup.getBytes("ISO-8859-1"),"UTF-8");
			String startDate = paramBean.getStartDate();
			String endDate = paramBean.getEndDate();
			dateStart = format.parse(startDate);
			dateEnd = format.parse(endDate);

			// 步骤三：判断安全票据是否为空
			if (StringUtils.isEmpty(ticket)) {
				result.setCode(Config.TICKET_ENPTY);
				flag = false;
			}

			// 步骤四：验证用户是否失效
			if (TicketManager.getInstance().checkTicketAble(ticket)) {
				result.setCode(Config.TICKET_UNABLE);
				flag = false;
			}
			/**************** 数据验证********END ****************/
			if (flag) {
				/**************** 返回结果********START ****************/
				// 步骤五：组装返回对象
				Map<String, Object> map = new HashMap<String, Object>();
				// map.put("userID", userID);
				map.put("analyseGroup", analyseGroup);
				map.put("startDate", dateStart);
				map.put("endDate", dateEnd);

				List<HashMap<String, String>> resultls = this.ibatisServices.findIbatisList("getAreaInoutByGroupSql", map);

				String str = JSONUtil.toJson(resultls);
				result.setData(str);
				/**************** 返回结果********END ****************/

				/**************** 更新票据有效时间********START ****************/
				// 步骤六：更新票据有效时间
				TicketManager.getInstance().putTicket(ticket);

				/**************** 更新票据有效时间********START ****************/
			}
		} catch (Exception e) {
			result.setCode(Config.OTHER_ERROR);
			log.error("[" + Tools.formatDate(new Date()) + "]---->", e);
		}

		this.renderJSON(result);
	}
	//endregion
	
	
	//region 进出地点
	/**
	 * http://127.0.0.1:8080/enterprise/httpMobile/ETGetLocaleInoutByVehicle.action?jsonParam={"userID":"1","ticket":"1369796996249-7115",analyseGroup:"",vehicleIdList:[],"startDate":"2013-04-26 00:00:00","endDate":"2013-04-26 23:59:59","pageSize":"10","pageNumber":"1"}

	 * 获取进出地点统计按车辆数据统计
	 * 
	 * @author hgq
	 */
	@SuppressWarnings("unused")
	@Action(value = "ETGetLocaleInoutByVehicle")
	public void ETGetLocaleInoutByVehicle() throws Exception {
		// 返回结果
		HttpResult result = new HttpResult();
		SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");

		Date dateStart = null;
		Date dateEnd = null;
		try {
			boolean flag = true;
			result.setCode(Config.SUCCESS);

			/**************** 数据验证*********START ***************/
			// 步骤一：解释参数
			ParamBean paramBean = JSONUtil.fromJson(super.jsonParam,
					ParamBean.class);

			// 步骤二：获取参数
			String ticket = paramBean.getTicket().trim();
			String userID = paramBean.getUserID().trim();
			String pageSize = paramBean.getPageSize().trim();
			String pageNumber = paramBean.getPageNumber().trim();
			List<String> vehicleIdList = paramBean.getVehicleIdList();
			String analyseGroup=paramBean.getAnalyseGroup().trim();
			analyseGroup=new String(analyseGroup.getBytes("ISO-8859-1"),"UTF-8");
			String startDate = paramBean.getStartDate();
			String endDate = paramBean.getEndDate();
			dateStart = format.parse(startDate);
			dateEnd = format.parse(endDate);

			// 步骤三：判断安全票据是否为空
			if (StringUtils.isEmpty(ticket)) {
				result.setCode(Config.TICKET_ENPTY);
				flag = false;
			}

			// 步骤四：验证用户是否失效
			if (TicketManager.getInstance().checkTicketAble(ticket)) {
				result.setCode(Config.TICKET_UNABLE);
				flag = false;
			}
			/**************** 数据验证********END ****************/
			if (flag) {
				/**************** 返回结果********START ****************/
				// 步骤五：组装返回对象
				Map<String, Object> map = new HashMap<String, Object>();
				// map.put("userID", userID);
				map.put("analyseGroup", analyseGroup);
				map.put("startDate", dateStart);
				map.put("vehicleIdList", vehicleIdList);
				map.put("endDate", dateEnd);
				map.put("pageSize",Integer.parseInt(pageSize));
				map.put("pageIndex", (Integer.parseInt(pageNumber)-1)* Integer.parseInt(pageSize));
				
				List<HashMap<String,String>> recordCount = this.ibatisServices.findIbatisList("findLocaleInoutByVehicleCount", map);
				List<HashMap<String, String>> resultls = this.ibatisServices.findIbatisList("getLocaleInoutByVehicleSql", map);
				
				for(HashMap<String, String> item:resultls)
				{
					item.putAll(recordCount.get(0));
				}
				String str = JSONUtil.toJson(resultls);
				result.setData(str);
				/**************** 返回结果********END ****************/

				/**************** 更新票据有效时间********START ****************/
				// 步骤六：更新票据有效时间
				TicketManager.getInstance().putTicket(ticket);

				/**************** 更新票据有效时间********START ****************/
			}
		} catch (Exception e) {
			result.setCode(Config.OTHER_ERROR);
			log.error("[" + Tools.formatDate(new Date()) + "]---->", e);
		}

		this.renderJSON(result);
	}
	
	/**
	 * http://127.0.0.1:8080/enterprise/httpMobile/ETGetLocaleInoutByGroup.action?jsonParam={"userID":"1","ticket":"1369807976189-1072",analyseGroup:"分析",vehicleIdList:["2","3","4"],"startDate":"2013-04-26 00:00:00","endDate":"2013-04-26 23:59:59"}

	 * 获取进出地点统计分组数据统计
	 * 
	 * @author hgq
	 */
	@SuppressWarnings("unused")
	@Action(value = "ETGetLocaleInoutByGroup")
	public void ETGetLocaleInoutByGroup() throws Exception {
		// 返回结果
		HttpResult result = new HttpResult();
		SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");

		Date dateStart = null;
		Date dateEnd = null;
		try {
			boolean flag = true;
			result.setCode(Config.SUCCESS);

			/**************** 数据验证*********START ***************/
			// 步骤一：解释参数
			ParamBean paramBean = JSONUtil.fromJson(super.jsonParam,
					ParamBean.class);

			// 步骤二：获取参数
			String ticket = paramBean.getTicket().trim();
			String userID = paramBean.getUserID().trim();
			String analyseGroup=paramBean.getAnalyseGroup().trim();
			analyseGroup=new String(analyseGroup.getBytes("ISO-8859-1"),"UTF-8");
			String startDate = paramBean.getStartDate();
			String endDate = paramBean.getEndDate();
			dateStart = format.parse(startDate);
			dateEnd = format.parse(endDate);

			// 步骤三：判断安全票据是否为空
			if (StringUtils.isEmpty(ticket)) {
				result.setCode(Config.TICKET_ENPTY);
				flag = false;
			}

			// 步骤四：验证用户是否失效
			if (TicketManager.getInstance().checkTicketAble(ticket)) {
				result.setCode(Config.TICKET_UNABLE);
				flag = false;
			}
			/**************** 数据验证********END ****************/
			if (flag) {
				/**************** 返回结果********START ****************/
				// 步骤五：组装返回对象
				Map<String, Object> map = new HashMap<String, Object>();
				// map.put("userID", userID);
				map.put("analyseGroup", analyseGroup);
				map.put("startDate", dateStart);
				map.put("endDate", dateEnd);

				List<HashMap<String, String>> resultls = this.ibatisServices.findIbatisList("getLocaleInoutByGroupSql", map);

				String str = JSONUtil.toJson(resultls);
				result.setData(str);
				/**************** 返回结果********END ****************/

				/**************** 更新票据有效时间********START ****************/
				// 步骤六：更新票据有效时间
				TicketManager.getInstance().putTicket(ticket);

				/**************** 更新票据有效时间********START ****************/
			}
		} catch (Exception e) {
			result.setCode(Config.OTHER_ERROR);
			log.error("[" + Tools.formatDate(new Date()) + "]---->", e);
		}

		this.renderJSON(result);
	}
	//endregion
	
	
	//region 地点超时停车
	/**
	 * http://127.0.0.1:8080/enterprise/httpMobile/ETGetVehicleOvertimeByVehicle.action?jsonParam={"userID":"1","ticket":"1369796996249-7115",analyseGroup:"",vehicleIdList:[],"startDate":"2013-04-26 00:00:00","endDate":"2013-04-26 23:59:59","pageSize":"10","pageNumber":"1"}

	 * 获取地点超时停车统计按车辆数据统计
	 * 
	 * @author hgq
	 */
	@SuppressWarnings("unused")
	@Action(value = "ETGetVehicleOvertimeByVehicle")
	public void ETGetVehicleOvertimeByVehicle() throws Exception {
		// 返回结果
		HttpResult result = new HttpResult();
		SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");

		Date dateStart = null;
		Date dateEnd = null;
		try {
			boolean flag = true;
			result.setCode(Config.SUCCESS);

			/**************** 数据验证*********START ***************/
			// 步骤一：解释参数
			ParamBean paramBean = JSONUtil.fromJson(super.jsonParam,
					ParamBean.class);

			// 步骤二：获取参数
			String ticket = paramBean.getTicket().trim();
			String userID = paramBean.getUserID().trim();
			String pageSize = paramBean.getPageSize().trim();
			String pageNumber = paramBean.getPageNumber().trim();
			List<String> vehicleIdList = paramBean.getVehicleIdList();
			String analyseGroup=paramBean.getAnalyseGroup().trim();
			analyseGroup=new String(analyseGroup.getBytes("ISO-8859-1"),"UTF-8");
			String startDate = paramBean.getStartDate();
			String endDate = paramBean.getEndDate();
			dateStart = format.parse(startDate);
			dateEnd = format.parse(endDate);

			// 步骤三：判断安全票据是否为空
			if (StringUtils.isEmpty(ticket)) {
				result.setCode(Config.TICKET_ENPTY);
				flag = false;
			}

			// 步骤四：验证用户是否失效
			if (TicketManager.getInstance().checkTicketAble(ticket)) {
				result.setCode(Config.TICKET_UNABLE);
				flag = false;
			}
			/**************** 数据验证********END ****************/
			if (flag) {
				/**************** 返回结果********START ****************/
				// 步骤五：组装返回对象
				Map<String, Object> map = new HashMap<String, Object>();
				// map.put("userID", userID);
				map.put("analyseGroup", analyseGroup);
				map.put("startDate", dateStart);
				map.put("vehicleIdList", vehicleIdList);
				map.put("endDate", dateEnd);
				map.put("pageSize",Integer.parseInt(pageSize));
				map.put("pageIndex", (Integer.parseInt(pageNumber)-1)* Integer.parseInt(pageSize));
				
				List<HashMap<String,String>> recordCount = this.ibatisServices.findIbatisList("findVehicleOvertimeByVehicleCount", map);
				List<HashMap<String, String>> resultls = this.ibatisServices.findIbatisList("getVehicleOvertimeByVehicleSql", map);
				
				for(HashMap<String, String> item:resultls)
				{
					item.putAll(recordCount.get(0));
				}
				String str = JSONUtil.toJson(resultls);
				result.setData(str);
				/**************** 返回结果********END ****************/

				/**************** 更新票据有效时间********START ****************/
				// 步骤六：更新票据有效时间
				TicketManager.getInstance().putTicket(ticket);

				/**************** 更新票据有效时间********START ****************/
			}
		} catch (Exception e) {
			result.setCode(Config.OTHER_ERROR);
			log.error("[" + Tools.formatDate(new Date()) + "]---->", e);
		}

		this.renderJSON(result);
	}
	
	/**
	 * http://127.0.0.1:8080/enterprise/httpMobile/ETGetVehicleOvertimeByGroup.action?jsonParam={"userID":"1","ticket":"1369807976189-1072",analyseGroup:"分析",vehicleIdList:["2","3","4"],"startDate":"2013-04-26 00:00:00","endDate":"2013-04-26 23:59:59"}

	 * 获取地点超时停车统计分组数据统计
	 * 
	 * @author hgq
	 */
	@SuppressWarnings("unused")
	@Action(value = "ETGetVehicleOvertimeByGroup")
	public void ETGetVehicleOvertimeByGroup() throws Exception {
		// 返回结果
		HttpResult result = new HttpResult();
		SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");

		Date dateStart = null;
		Date dateEnd = null;
		try {
			boolean flag = true;
			result.setCode(Config.SUCCESS);

			/**************** 数据验证*********START ***************/
			// 步骤一：解释参数
			ParamBean paramBean = JSONUtil.fromJson(super.jsonParam,
					ParamBean.class);

			// 步骤二：获取参数
			String ticket = paramBean.getTicket().trim();
			String userID = paramBean.getUserID().trim();
			String analyseGroup=paramBean.getAnalyseGroup().trim();
			analyseGroup=new String(analyseGroup.getBytes("ISO-8859-1"),"UTF-8");
			String startDate = paramBean.getStartDate();
			String endDate = paramBean.getEndDate();
			dateStart = format.parse(startDate);
			dateEnd = format.parse(endDate);

			// 步骤三：判断安全票据是否为空
			if (StringUtils.isEmpty(ticket)) {
				result.setCode(Config.TICKET_ENPTY);
				flag = false;
			}

			// 步骤四：验证用户是否失效
			if (TicketManager.getInstance().checkTicketAble(ticket)) {
				result.setCode(Config.TICKET_UNABLE);
				flag = false;
			}
			/**************** 数据验证********END ****************/
			if (flag) {
				/**************** 返回结果********START ****************/
				// 步骤五：组装返回对象
				Map<String, Object> map = new HashMap<String, Object>();
				// map.put("userID", userID);
				map.put("analyseGroup", analyseGroup);
				map.put("startDate", dateStart);
				map.put("endDate", dateEnd);

				List<HashMap<String, String>> resultls = this.ibatisServices.findIbatisList("getVehicleOvertimeByGroupSql", map);

				String str = JSONUtil.toJson(resultls);
				result.setData(str);
				/**************** 返回结果********END ****************/

				/**************** 更新票据有效时间********START ****************/
				// 步骤六：更新票据有效时间
				TicketManager.getInstance().putTicket(ticket);

				/**************** 更新票据有效时间********START ****************/
			}
		} catch (Exception e) {
			result.setCode(Config.OTHER_ERROR);
			log.error("[" + Tools.formatDate(new Date()) + "]---->", e);
		}

		this.renderJSON(result);
	}
	//endregion
	
	
	//region 里程
	/**
	 * http://127.0.0.1:8080/enterprise/httpMobile/ETGetVehicleMileageDetail.action?jsonParam={"userID":"1","ticket":"1369804340800-9019",vehicleIdList:['2','3'],"startDate":"2013-04-26 00:00:00","endDate":"2013-04-26 23:59:59","pageSize":"10","pageNumber":"1"}

	 * 获取里程统计明细数据
	 * 
	 * @author hgq
	 */
	@SuppressWarnings("unused")
	@Action(value = "ETGetVehicleMileageDetail")
	public void ETGetVehicleMileageDetail() throws Exception {
		// 返回结果
		HttpResult result = new HttpResult();
		SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");

		Date dateStart = null;
		Date dateEnd = null;
		try {
			boolean flag = true;
			result.setCode(Config.SUCCESS);

			/**************** 数据验证*********START ***************/
			// 步骤一：解释参数
			ParamBean paramBean = JSONUtil.fromJson(super.jsonParam,
					ParamBean.class);

			// 步骤二：获取参数
			String ticket = paramBean.getTicket().trim();
			String userID = paramBean.getUserID().trim();
			String pageSize = paramBean.getPageSize().trim();
			String pageNumber = paramBean.getPageNumber().trim();
			List<String> vehicleIdList = paramBean.getVehicleIdList();
			String startDate = paramBean.getStartDate();
			String endDate = paramBean.getEndDate();
			dateStart = format.parse(startDate);
			dateEnd = format.parse(endDate);

			// 步骤三：判断安全票据是否为空
			if (StringUtils.isEmpty(ticket)) {
				result.setCode(Config.TICKET_ENPTY);
				flag = false;
			}

			// 步骤四：验证用户是否失效
			if (TicketManager.getInstance().checkTicketAble(ticket)) {
				result.setCode(Config.TICKET_UNABLE);
				flag = false;
			}
			/**************** 数据验证********END ****************/
			if (flag) {
				/**************** 返回结果********START ****************/
				// 步骤五：组装返回对象
				Map<String, Object> map = new HashMap<String, Object>();
				// map.put("userID", userID);
				map.put("startDate", dateStart);
				map.put("vehicleIdList", vehicleIdList);
				map.put("endDate", dateEnd);
				map.put("pageSize",Integer.parseInt(pageSize));
				map.put("pageIndex", (Integer.parseInt(pageNumber)-1)* Integer.parseInt(pageSize));
				
				List<HashMap<String, String>> recordCount = this.ibatisServices.findIbatisList("findVehicleMileageDetailCount", map);
				List<HashMap<String, String>> resultls = this.ibatisServices.findIbatisList("getVehicleMileageDetailSql", map);
				
				for(HashMap<String, String> item:resultls)
				{
					item.putAll(recordCount.get(0));
				}
				String str = JSONUtil.toJson(resultls);
				result.setData(str);
				/**************** 返回结果********END ****************/

				/**************** 更新票据有效时间********START ****************/
				// 步骤六：更新票据有效时间
				TicketManager.getInstance().putTicket(ticket);

				/**************** 更新票据有效时间********START ****************/
			}
		} catch (Exception e) {
			result.setCode(Config.OTHER_ERROR);
			log.error("[" + Tools.formatDate(new Date()) + "]---->", e);
		}

		this.renderJSON(result);
	}
	
	/**
	 * http://127.0.0.1:8080/enterprise/httpMobile/ETGetVehicleMileageByVehicle.action?jsonParam={"userID":"1","ticket":"1369796996249-7115",analyseGroup:"",vehicleIdList:[],"startDate":"2013-04-26 00:00:00","endDate":"2013-04-26 23:59:59","pageSize":"10","pageNumber":"1"}

	 * 获取里程统计按车辆数据统计
	 * 
	 * @author hgq
	 */
	@SuppressWarnings("unused")
	@Action(value = "ETGetVehicleMileageByVehicle")
	public void ETGetVehicleMileageByVehicle() throws Exception {
		// 返回结果
		HttpResult result = new HttpResult();
		SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");

		Date dateStart = null;
		Date dateEnd = null;
		try {
			boolean flag = true;
			result.setCode(Config.SUCCESS);

			/**************** 数据验证*********START ***************/
			// 步骤一：解释参数
			ParamBean paramBean = JSONUtil.fromJson(super.jsonParam,
					ParamBean.class);

			// 步骤二：获取参数
			String ticket = paramBean.getTicket().trim();
			String userID = paramBean.getUserID().trim();
			String pageSize = paramBean.getPageSize().trim();
			String pageNumber = paramBean.getPageNumber().trim();
			List<String> vehicleIdList = paramBean.getVehicleIdList();
			String analyseGroup=paramBean.getAnalyseGroup().trim();
			analyseGroup=new String(analyseGroup.getBytes("ISO-8859-1"),"UTF-8");
			String startDate = paramBean.getStartDate();
			String endDate = paramBean.getEndDate();
			dateStart = format.parse(startDate);
			dateEnd = format.parse(endDate);

			// 步骤三：判断安全票据是否为空
			if (StringUtils.isEmpty(ticket)) {
				result.setCode(Config.TICKET_ENPTY);
				flag = false;
			}

			// 步骤四：验证用户是否失效
			if (TicketManager.getInstance().checkTicketAble(ticket)) {
				result.setCode(Config.TICKET_UNABLE);
				flag = false;
			}
			/**************** 数据验证********END ****************/
			if (flag) {
				/**************** 返回结果********START ****************/
				// 步骤五：组装返回对象
				Map<String, Object> map = new HashMap<String, Object>();
				// map.put("userID", userID);
				map.put("analyseGroup", analyseGroup);
				map.put("startDate", dateStart);
				map.put("vehicleIdList", vehicleIdList);
				map.put("endDate", dateEnd);
				map.put("pageSize",Integer.parseInt(pageSize));
				map.put("pageIndex", (Integer.parseInt(pageNumber)-1)* Integer.parseInt(pageSize));
				
				List<HashMap<String,String>> recordCount = this.ibatisServices.findIbatisList("findVehicleMileageCount", map);
				List<HashMap<String, String>> resultls = this.ibatisServices.findIbatisList("getVehicleMileageByVehicleSql", map);
				
				for(HashMap<String, String> item:resultls)
				{
					item.putAll(recordCount.get(0));
				}
				String str = JSONUtil.toJson(resultls);
				result.setData(str);
				/**************** 返回结果********END ****************/

				/**************** 更新票据有效时间********START ****************/
				// 步骤六：更新票据有效时间
				TicketManager.getInstance().putTicket(ticket);

				/**************** 更新票据有效时间********START ****************/
			}
		} catch (Exception e) {
			result.setCode(Config.OTHER_ERROR);
			log.error("[" + Tools.formatDate(new Date()) + "]---->", e);
		}

		this.renderJSON(result);
	}
	
	/**
	 * http://127.0.0.1:8080/enterprise/httpMobile/ETGetVehicleMileageByGroup.action?jsonParam={"userID":"1","ticket":"1369807976189-1072",analyseGroup:"分析",vehicleIdList:["2","3","4"],"startDate":"2013-04-26 00:00:00","endDate":"2013-04-26 23:59:59"}

	 * 获取里程统计分组数据统计
	 * 
	 * @author hgq
	 */
	@SuppressWarnings("unused")
	@Action(value = "ETGetVehicleMileageByGroup")
	public void ETGetVehicleMileageByGroup() throws Exception {
		// 返回结果
		HttpResult result = new HttpResult();
		SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");

		Date dateStart = null;
		Date dateEnd = null;
		try {
			boolean flag = true;
			result.setCode(Config.SUCCESS);

			/**************** 数据验证*********START ***************/
			// 步骤一：解释参数
			ParamBean paramBean = JSONUtil.fromJson(super.jsonParam,
					ParamBean.class);

			// 步骤二：获取参数
			String ticket = paramBean.getTicket().trim();
			String userID = paramBean.getUserID().trim();
			String analyseGroup=paramBean.getAnalyseGroup().trim();
			analyseGroup=new String(analyseGroup.getBytes("ISO-8859-1"),"UTF-8");
			String startDate = paramBean.getStartDate();
			String endDate = paramBean.getEndDate();
			dateStart = format.parse(startDate);
			dateEnd = format.parse(endDate);

			// 步骤三：判断安全票据是否为空
			if (StringUtils.isEmpty(ticket)) {
				result.setCode(Config.TICKET_ENPTY);
				flag = false;
			}

			// 步骤四：验证用户是否失效
			if (TicketManager.getInstance().checkTicketAble(ticket)) {
				result.setCode(Config.TICKET_UNABLE);
				flag = false;
			}
			/**************** 数据验证********END ****************/
			if (flag) {
				/**************** 返回结果********START ****************/
				// 步骤五：组装返回对象
				Map<String, Object> map = new HashMap<String, Object>();
				// map.put("userID", userID);
				map.put("analyseGroup", analyseGroup);
				map.put("startDate", dateStart);
				map.put("endDate", dateEnd);
				
				List<HashMap<String, String>> resultls = this.ibatisServices.findIbatisList("getVehicleMileageByGroupSql", map);

				String str = JSONUtil.toJson(resultls);
				result.setData(str);
				/**************** 返回结果********END ****************/

				/**************** 更新票据有效时间********START ****************/
				// 步骤六：更新票据有效时间
				TicketManager.getInstance().putTicket(ticket);

				/**************** 更新票据有效时间********START ****************/
			}
		} catch (Exception e) {
			result.setCode(Config.OTHER_ERROR);
			log.error("[" + Tools.formatDate(new Date()) + "]---->", e);
		}

		this.renderJSON(result);
	}
	//endregion
	
	
	//region 疲劳驾驶
	/**
	 * http://127.0.0.1:8080/enterprise/httpMobile/ETGetFatiguedriveDetail.action?jsonParam={"userID":"1","ticket":"1369804340800-9019",vehicleIdList:['2','3'],"startDate":"2013-04-26 00:00:00","endDate":"2013-04-26 23:59:59","pageSize":"10","pageNumber":"1"}

	 * 获取疲劳驾驶明细数据
	 * 
	 * @author hgq
	 */
	@SuppressWarnings("unused")
	@Action(value = "ETGetFatiguedriveDetail")
	public void ETGetFatiguedriveDetail() throws Exception {
		// 返回结果
		HttpResult result = new HttpResult();
		SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");

		Date dateStart = null;
		Date dateEnd = null;
		try {
			boolean flag = true;
			result.setCode(Config.SUCCESS);

			/**************** 数据验证*********START ***************/
			// 步骤一：解释参数
			ParamBean paramBean = JSONUtil.fromJson(super.jsonParam,
					ParamBean.class);

			// 步骤二：获取参数
			String ticket = paramBean.getTicket().trim();
			String userID = paramBean.getUserID().trim();
			String pageSize = paramBean.getPageSize().trim();
			String pageNumber = paramBean.getPageNumber().trim();
			List<String> vehicleIdList = paramBean.getVehicleIdList();
			String startDate = paramBean.getStartDate();
			String endDate = paramBean.getEndDate();
			dateStart = format.parse(startDate);
			dateEnd = format.parse(endDate);

			// 步骤三：判断安全票据是否为空
			if (StringUtils.isEmpty(ticket)) {
				result.setCode(Config.TICKET_ENPTY);
				flag = false;
			}

			// 步骤四：验证用户是否失效
			if (TicketManager.getInstance().checkTicketAble(ticket)) {
				result.setCode(Config.TICKET_UNABLE);
				flag = false;
			}
			/**************** 数据验证********END ****************/
			if (flag) {
				/**************** 返回结果********START ****************/
				// 步骤五：组装返回对象
				Map<String, Object> map = new HashMap<String, Object>();
				// map.put("userID", userID);
				map.put("startDate", dateStart);
				map.put("vehicleIdList", vehicleIdList);
				map.put("endDate", dateEnd);
				map.put("pageSize",Integer.parseInt(pageSize));
				map.put("pageIndex", (Integer.parseInt(pageNumber)-1)* Integer.parseInt(pageSize));
				
				List<HashMap<String, String>> recordCount = this.ibatisServices.findIbatisList("findFatiguedriveCount", map);
				List<HashMap<String, String>> resultls = this.ibatisServices.findIbatisList("getFatiguedriveDetailSql", map);
				
				for(HashMap<String, String> item:resultls)
				{
					item.putAll(recordCount.get(0));
				}
				String str = JSONUtil.toJson(resultls);
				result.setData(str);
				/**************** 返回结果********END ****************/

				/**************** 更新票据有效时间********START ****************/
				// 步骤六：更新票据有效时间
				TicketManager.getInstance().putTicket(ticket);

				/**************** 更新票据有效时间********START ****************/
			}
		} catch (Exception e) {
			result.setCode(Config.OTHER_ERROR);
			log.error("[" + Tools.formatDate(new Date()) + "]---->", e);
		}

		this.renderJSON(result);
	}
	
	/**
	 * http://127.0.0.1:8080/enterprise/httpMobile/ETGetFatiguedriveByVehicle.action?jsonParam={"userID":"1","ticket":"1369796996249-7115",analyseGroup:"",vehicleIdList:[],"startDate":"2013-04-26 00:00:00","endDate":"2013-04-26 23:59:59","pageSize":"10","pageNumber":"1"}

	 * 获取疲劳驾驶按车辆数据统计
	 * 
	 * @author hgq
	 */
	@SuppressWarnings("unused")
	@Action(value = "ETGetFatiguedriveByVehicle")
	public void ETGetFatiguedriveByVehicle() throws Exception {
		// 返回结果
		HttpResult result = new HttpResult();
		SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");

		Date dateStart = null;
		Date dateEnd = null;
		try {
			boolean flag = true;
			result.setCode(Config.SUCCESS);

			/**************** 数据验证*********START ***************/
			// 步骤一：解释参数
			ParamBean paramBean = JSONUtil.fromJson(super.jsonParam,
					ParamBean.class);

			// 步骤二：获取参数
			String ticket = paramBean.getTicket().trim();
			String userID = paramBean.getUserID().trim();
			String pageSize = paramBean.getPageSize().trim();
			String pageNumber = paramBean.getPageNumber().trim();
			List<String> vehicleIdList = paramBean.getVehicleIdList();
			String analyseGroup=paramBean.getAnalyseGroup().trim();
			analyseGroup=new String(analyseGroup.getBytes("ISO-8859-1"),"UTF-8");
			String startDate = paramBean.getStartDate();
			String endDate = paramBean.getEndDate();
			dateStart = format.parse(startDate);
			dateEnd = format.parse(endDate);

			// 步骤三：判断安全票据是否为空
			if (StringUtils.isEmpty(ticket)) {
				result.setCode(Config.TICKET_ENPTY);
				flag = false;
			}

			// 步骤四：验证用户是否失效
			if (TicketManager.getInstance().checkTicketAble(ticket)) {
				result.setCode(Config.TICKET_UNABLE);
				flag = false;
			}
			/**************** 数据验证********END ****************/
			if (flag) {
				/**************** 返回结果********START ****************/
				// 步骤五：组装返回对象
				Map<String, Object> map = new HashMap<String, Object>();
				// map.put("userID", userID);
				map.put("analyseGroup", analyseGroup);
				map.put("startDate", dateStart);
				map.put("vehicleIdList", vehicleIdList);
				map.put("endDate", dateEnd);
				map.put("pageSize",Integer.parseInt(pageSize));
				map.put("pageIndex", (Integer.parseInt(pageNumber)-1)* Integer.parseInt(pageSize));
				
				List<HashMap<String, String>> recordCount = this.ibatisServices.findIbatisList("findFatiguedriveCount", map);
				List<HashMap<String, String>> resultls = this.ibatisServices.findIbatisList("getFatiguedriveByVehicleSql", map);
				
				for(HashMap<String, String> item:resultls)
				{
					item.putAll(recordCount.get(0));
				}
				String str = JSONUtil.toJson(resultls);
				result.setData(str);
				/**************** 返回结果********END ****************/

				/**************** 更新票据有效时间********START ****************/
				// 步骤六：更新票据有效时间
				TicketManager.getInstance().putTicket(ticket);

				/**************** 更新票据有效时间********START ****************/
			}
		} catch (Exception e) {
			result.setCode(Config.OTHER_ERROR);
			log.error("[" + Tools.formatDate(new Date()) + "]---->", e);
		}

		this.renderJSON(result);
	}
	
	/**
	 * http://127.0.0.1:8080/enterprise/httpMobile/ETGetFatiguedriveByGroup.action?jsonParam={"userID":"1","ticket":"1369807976189-1072",analyseGroup:"分析",vehicleIdList:["2","3","4"],"startDate":"2013-04-26 00:00:00","endDate":"2013-04-26 23:59:59"}

	 * 获取疲劳驾驶分组数据统计
	 * 
	 * @author hgq
	 */
	@SuppressWarnings("unused")
	@Action(value = "ETGetFatiguedriveByGroup")
	public void ETGetFatiguedriveByGroup() throws Exception {
		// 返回结果
		HttpResult result = new HttpResult();
		SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");

		Date dateStart = null;
		Date dateEnd = null;
		try {
			boolean flag = true;
			result.setCode(Config.SUCCESS);

			/**************** 数据验证*********START ***************/
			// 步骤一：解释参数
			ParamBean paramBean = JSONUtil.fromJson(super.jsonParam,
					ParamBean.class);

			// 步骤二：获取参数
			String ticket = paramBean.getTicket().trim();
			String userID = paramBean.getUserID().trim();
			String analyseGroup=paramBean.getAnalyseGroup().trim();
			analyseGroup=new String(analyseGroup.getBytes("ISO-8859-1"),"UTF-8");
			String startDate = paramBean.getStartDate();
			String endDate = paramBean.getEndDate();
			dateStart = format.parse(startDate);
			dateEnd = format.parse(endDate);

			// 步骤三：判断安全票据是否为空
			if (StringUtils.isEmpty(ticket)) {
				result.setCode(Config.TICKET_ENPTY);
				flag = false;
			}

			// 步骤四：验证用户是否失效
			if (TicketManager.getInstance().checkTicketAble(ticket)) {
				result.setCode(Config.TICKET_UNABLE);
				flag = false;
			}
			/**************** 数据验证********END ****************/
			if (flag) {
				/**************** 返回结果********START ****************/
				// 步骤五：组装返回对象
				Map<String, Object> map = new HashMap<String, Object>();
				// map.put("userID", userID);
				map.put("analyseGroup", analyseGroup);
				map.put("startDate", dateStart);
				map.put("endDate", dateEnd);
				
				List<HashMap<String, String>> resultls = this.ibatisServices.findIbatisList("getFatiguedriveByGroupSql", map);

				String str = JSONUtil.toJson(resultls);
				result.setData(str);
				/**************** 返回结果********END ****************/

				/**************** 更新票据有效时间********START ****************/
				// 步骤六：更新票据有效时间
				TicketManager.getInstance().putTicket(ticket);

				/**************** 更新票据有效时间********START ****************/
			}
		} catch (Exception e) {
			result.setCode(Config.OTHER_ERROR);
			log.error("[" + Tools.formatDate(new Date()) + "]---->", e);
		}

		this.renderJSON(result);
	}
	//endregion
	
	
	//region 超速
	/**
	 * http://127.0.0.1:8080/enterprise/httpMobile/ETGetOverspeedDetail.action?jsonParam={"userID":"1","ticket":"1369804340800-9019",vehicleIdList:['2','3'],"startDate":"2013-04-26 00:00:00","endDate":"2013-04-26 23:59:59","pageSize":"10","pageNumber":"1"}

	 * 获取超速明细数据
	 * 
	 * @author hgq
	 */
	@SuppressWarnings("unused")
	@Action(value = "ETGetOverspeedDetail")
	public void ETGetOverspeedDetail() throws Exception {
		// 返回结果
		HttpResult result = new HttpResult();
		SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");

		Date dateStart = null;
		Date dateEnd = null;
		try {
			boolean flag = true;
			result.setCode(Config.SUCCESS);

			/**************** 数据验证*********START ***************/
			// 步骤一：解释参数
			ParamBean paramBean = JSONUtil.fromJson(super.jsonParam,
					ParamBean.class);

			// 步骤二：获取参数
			String ticket = paramBean.getTicket().trim();
			String userID = paramBean.getUserID().trim();
			String pageSize = paramBean.getPageSize().trim();
			String pageNumber = paramBean.getPageNumber().trim();
			List<String> vehicleIdList = paramBean.getVehicleIdList();
			String startDate = paramBean.getStartDate();
			String endDate = paramBean.getEndDate();
			dateStart = format.parse(startDate);
			dateEnd = format.parse(endDate);

			// 步骤三：判断安全票据是否为空
			if (StringUtils.isEmpty(ticket)) {
				result.setCode(Config.TICKET_ENPTY);
				flag = false;
			}

			// 步骤四：验证用户是否失效
			if (TicketManager.getInstance().checkTicketAble(ticket)) {
				result.setCode(Config.TICKET_UNABLE);
				flag = false;
			}
			/**************** 数据验证********END ****************/
			if (flag) {
				/**************** 返回结果********START ****************/
				// 步骤五：组装返回对象
				Map<String, Object> map = new HashMap<String, Object>();
				// map.put("userID", userID);
				map.put("startDate", dateStart);
				map.put("vehicleIdList", vehicleIdList);
				map.put("endDate", dateEnd);
				map.put("pageSize",Integer.parseInt(pageSize));
				map.put("pageIndex", (Integer.parseInt(pageNumber)-1)* Integer.parseInt(pageSize));
				
				List<HashMap<String, String>> recordCount = this.ibatisServices.findIbatisList("findOverspeedDetailCount", map);
				List<HashMap<String, String>> resultls = this.ibatisServices.findIbatisList("getOverspeedDetailSql", map);
				
				for(HashMap<String, String> item:resultls)
				{
					item.putAll(recordCount.get(0));
				}
				String str = JSONUtil.toJson(resultls);
				result.setData(str);
				/**************** 返回结果********END ****************/

				/**************** 更新票据有效时间********START ****************/
				// 步骤六：更新票据有效时间
				TicketManager.getInstance().putTicket(ticket);

				/**************** 更新票据有效时间********START ****************/
			}
		} catch (Exception e) {
			result.setCode(Config.OTHER_ERROR);
			log.error("[" + Tools.formatDate(new Date()) + "]---->", e);
		}

		this.renderJSON(result);
	}
	
	/**
	 * http://127.0.0.1:8080/enterprise/httpMobile/ETGetOverspeedByVehicle.action?jsonParam={"userID":"1","ticket":"1369796996249-7115",analyseGroup:"",vehicleIdList:[],"startDate":"2013-04-26 00:00:00","endDate":"2013-04-26 23:59:59","pageSize":"10","pageNumber":"1"}

	 * 获取超速按车辆数据统计
	 * 
	 * @author hgq
	 */
	@SuppressWarnings("unused")
	@Action(value = "ETGetOverspeedByVehicle")
	public void ETGetOverspeedByVehicle() throws Exception {
		// 返回结果
		HttpResult result = new HttpResult();
		SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");

		Date dateStart = null;
		Date dateEnd = null;
		try {
			boolean flag = true;
			result.setCode(Config.SUCCESS);

			/**************** 数据验证*********START ***************/
			// 步骤一：解释参数
			ParamBean paramBean = JSONUtil.fromJson(super.jsonParam,
					ParamBean.class);

			// 步骤二：获取参数
			String ticket = paramBean.getTicket().trim();
			String userID = paramBean.getUserID().trim();
			String pageSize = paramBean.getPageSize().trim();
			String pageNumber = paramBean.getPageNumber().trim();
			List<String> vehicleIdList = paramBean.getVehicleIdList();
			String analyseGroup=paramBean.getAnalyseGroup().trim();
			analyseGroup=new String(analyseGroup.getBytes("ISO-8859-1"),"UTF-8");
			String startDate = paramBean.getStartDate();
			String endDate = paramBean.getEndDate();
			dateStart = format.parse(startDate);
			dateEnd = format.parse(endDate);

			// 步骤三：判断安全票据是否为空
			if (StringUtils.isEmpty(ticket)) {
				result.setCode(Config.TICKET_ENPTY);
				flag = false;
			}

			// 步骤四：验证用户是否失效
			if (TicketManager.getInstance().checkTicketAble(ticket)) {
				result.setCode(Config.TICKET_UNABLE);
				flag = false;
			}
			/**************** 数据验证********END ****************/
			if (flag) {
				/**************** 返回结果********START ****************/
				// 步骤五：组装返回对象
				Map<String, Object> map = new HashMap<String, Object>();
				// map.put("userID", userID);
				map.put("analyseGroup", analyseGroup);
				map.put("startDate", dateStart);
				map.put("vehicleIdList", vehicleIdList);
				map.put("endDate", dateEnd);
				map.put("pageSize",Integer.parseInt(pageSize));
				map.put("pageIndex", (Integer.parseInt(pageNumber)-1)* Integer.parseInt(pageSize));
				
				List<HashMap<String, String>> recordCount = this.ibatisServices.findIbatisList("findOverspeedByVehicleCount", map);
				List<HashMap<String, String>> resultls = this.ibatisServices.findIbatisList("getOverspeedByVehicleSql", map);
				
				for(HashMap<String, String> item:resultls)
				{
					item.putAll(recordCount.get(0));
				}
				String str = JSONUtil.toJson(resultls);
				result.setData(str);
				/**************** 返回结果********END ****************/

				/**************** 更新票据有效时间********START ****************/
				// 步骤六：更新票据有效时间
				TicketManager.getInstance().putTicket(ticket);

				/**************** 更新票据有效时间********START ****************/
			}
		} catch (Exception e) {
			result.setCode(Config.OTHER_ERROR);
			log.error("[" + Tools.formatDate(new Date()) + "]---->", e);
		}

		this.renderJSON(result);
	}
	
	/**
	 * http://127.0.0.1:8080/enterprise/httpMobile/ETGetOverspeedByGroup.action?jsonParam={"userID":"1","ticket":"1369726523984-8300",analyseGroup:"分析",vehicleIdList:["2","3","4"],"startDate":"2013-04-26 00:00:00","endDate":"2013-04-26 23:59:59"}

	 * 获取超速分组数据统计
	 * 
	 * @author hgq
	 */
	@SuppressWarnings("unused")
	@Action(value = "ETGetOverspeedByGroup")
	public void ETGetOverspeedByGroup() throws Exception {
		// 返回结果
		HttpResult result = new HttpResult();
		SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");

		Date dateStart = null;
		Date dateEnd = null;
		try {
			boolean flag = true;
			result.setCode(Config.SUCCESS);

			/**************** 数据验证*********START ***************/
			// 步骤一：解释参数
			ParamBean paramBean = JSONUtil.fromJson(super.jsonParam,
					ParamBean.class);

			// 步骤二：获取参数
			String ticket = paramBean.getTicket().trim();
			String userID = paramBean.getUserID().trim();
			String analyseGroup=paramBean.getAnalyseGroup().trim();
			analyseGroup=new String(analyseGroup.getBytes("ISO-8859-1"),"UTF-8");
			String startDate = paramBean.getStartDate();
			String endDate = paramBean.getEndDate();
			dateStart = format.parse(startDate);
			dateEnd = format.parse(endDate);

			// 步骤三：判断安全票据是否为空
			if (StringUtils.isEmpty(ticket)) {
				result.setCode(Config.TICKET_ENPTY);
				flag = false;
			}

			// 步骤四：验证用户是否失效
			if (TicketManager.getInstance().checkTicketAble(ticket)) {
				result.setCode(Config.TICKET_UNABLE);
				flag = false;
			}
			/**************** 数据验证********END ****************/
			if (flag) {
				/**************** 返回结果********START ****************/
				// 步骤五：组装返回对象
				Map<String, Object> map = new HashMap<String, Object>();
				// map.put("userID", userID);
				map.put("analyseGroup", analyseGroup);
				map.put("startDate", dateStart);
				map.put("endDate", dateEnd);
				
				List<HashMap<String, String>> resultls = this.ibatisServices.findIbatisList("getOverspeedByGroupSql", map);

				String str = JSONUtil.toJson(resultls);
				result.setData(str);
				/**************** 返回结果********END ****************/

				/**************** 更新票据有效时间********START ****************/
				// 步骤六：更新票据有效时间
				TicketManager.getInstance().putTicket(ticket);

				/**************** 更新票据有效时间********START ****************/
			}
		} catch (Exception e) {
			result.setCode(Config.OTHER_ERROR);
			log.error("[" + Tools.formatDate(new Date()) + "]---->", e);
		}

		this.renderJSON(result);
	}
	//endregion
	
	
	/**
	 * http://127.0.0.1:8080/enterprise/httpMobile/ETGetAnalyseGroups.action?jsonParam={"userID":"1","ticket":"1369726523984-8300"}

	 * 获取所有分析组
	 * 
	 * @author hgq
	 */
	@SuppressWarnings("unused")
	@Action(value = "ETGetAnalyseGroups")
	public void ETGetAnalyseGroups() throws Exception {
		// 返回结果
		HttpResult result = new HttpResult();
		SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");

		Date dateStart = null;
		Date dateEnd = null;
		try {
			boolean flag = true;
			result.setCode(Config.SUCCESS);

			/**************** 数据验证*********START ***************/
			// 步骤一：解释参数
			ParamBean paramBean = JSONUtil.fromJson(super.jsonParam,
					ParamBean.class);

			// 步骤二：获取参数
			String ticket = paramBean.getTicket().trim();
			String userID = paramBean.getUserID().trim();

			// 步骤三：判断安全票据是否为空
			if (StringUtils.isEmpty(ticket)) {
				result.setCode(Config.TICKET_ENPTY);
				flag = false;
			}

			// 步骤四：验证用户是否失效
			if (TicketManager.getInstance().checkTicketAble(ticket)) {
				result.setCode(Config.TICKET_UNABLE);
				flag = false;
			}
			/**************** 数据验证********END ****************/
			if (flag) {
				/**************** 返回结果********START ****************/
				// 步骤五：组装返回对象
				
				List<HashMap<String, String>> resultls = this.ibatisServices.findIbatisList("getAnalyseGroupsSql", null);

				String str = JSONUtil.toJson(resultls);
				result.setData(str);
				/**************** 返回结果********END ****************/

				/**************** 更新票据有效时间********START ****************/
				// 步骤六：更新票据有效时间
				TicketManager.getInstance().putTicket(ticket);

				/**************** 更新票据有效时间********START ****************/
			}
		} catch (Exception e) {
			result.setCode(Config.OTHER_ERROR);
			log.error("[" + Tools.formatDate(new Date()) + "]---->", e);
		}

		this.renderJSON(result);
	}
	
	/**
	 * http://127.0.0.1:8080/enterprise/httpMobile/ETGetVehicleUnit.action?jsonParam={"userID":"1","ticket":"1369726523984-8300"}

	 * 获取所有车属单位
	 * 
	 * @author hgq
	 */
	@SuppressWarnings("unused")
	@Action(value = "ETGetVehicleUnit")
	public void ETGetVehicleUnit() throws Exception {
		// 返回结果
		HttpResult result = new HttpResult();
		SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");

		Date dateStart = null;
		Date dateEnd = null;
		try {
			boolean flag = true;
			result.setCode(Config.SUCCESS);

			/**************** 数据验证*********START ***************/
			// 步骤一：解释参数
			ParamBean paramBean = JSONUtil.fromJson(super.jsonParam,
					ParamBean.class);

			// 步骤二：获取参数
			String ticket = paramBean.getTicket().trim();
			String userID = paramBean.getUserID().trim();

			// 步骤三：判断安全票据是否为空
			if (StringUtils.isEmpty(ticket)) {
				result.setCode(Config.TICKET_ENPTY);
				flag = false;
			}

			// 步骤四：验证用户是否失效
			if (TicketManager.getInstance().checkTicketAble(ticket)) {
				result.setCode(Config.TICKET_UNABLE);
				flag = false;
			}
			/**************** 数据验证********END ****************/
			if (flag) {
				/**************** 返回结果********START ****************/
				// 步骤五：组装返回对象
				
				List<HashMap<String, String>> resultls = this.ibatisServices.findIbatisList("getVehicleUnitSql", null);

				String str = JSONUtil.toJson(resultls);
				result.setData(str);
				/**************** 返回结果********END ****************/

				/**************** 更新票据有效时间********START ****************/
				// 步骤六：更新票据有效时间
				TicketManager.getInstance().putTicket(ticket);

				/**************** 更新票据有效时间********START ****************/
			}
		} catch (Exception e) {
			result.setCode(Config.OTHER_ERROR);
			log.error("[" + Tools.formatDate(new Date()) + "]---->", e);
		}

		this.renderJSON(result);
	}


}
