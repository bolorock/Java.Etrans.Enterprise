package com.etrans.bubiao.action.http;

import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.commons.lang.StringUtils;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.apache.struts2.convention.annotation.Action;
import org.apache.struts2.convention.annotation.Namespace;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;

import com.etrans.bubiao.entities.HttpResult;
import com.etrans.bubiao.entities.ParamBean;
import com.etrans.bubiao.repository.CommandRepository;
import com.etrans.bubiao.services.IbatisServices;
import com.etrans.common.util.Tools;
import com.etrans.common.util.json.JSONUtil;

/**
 * 用户车辆相关接口程序
 * @author Administrator
 *
 */
@SuppressWarnings("serial")
@Controller("eTGetUserVehicelAction")
@Scope("prototype")
@Namespace("/httpService")
public class ETGetUserVehicelAction extends HttpServiceAction
{
	private Logger log = LogManager.getLogger(this.getClass().getName());
	
	@Autowired(required = true)
	private IbatisServices ibatisServices;
	
	@Autowired
	private CommandRepository commandRepository;
	
	/**
	 *http://localhost:80/enterprise/httpService/ETGetUserAllVehicelID.action?jsonParam={"userID":"51","ticket":"1358835197986-5021"} 
	 *{"code":0,"data":["13","389","853","863","866"]}
	 *1.6.2	获取用户下所有车辆ID接口
	 */
	@Action(value = "ETGetUserAllVehicelID")
	public void ETGetUserAllVehicelID() throws Exception 
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
			String ticket = paramBean.getTicket().trim();
			String userID = paramBean.getUserID().trim();
			
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
				map.put("workUnitID", UserInfoManager.getInstance().getUserInfo(userID));
				
				List<HashMap<String,String>> ls = this.ibatisServices.findIbatisList("getUserVehicleIDByWorkUnitIDSQL",map);
				
				List<String> resultls = new ArrayList<String>();
				Tools.buildVehicleId(ls,resultls);
				
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
	 *http://localhost:80/enterprise/httpService/ETGetVehicleInfoAndStatus.action?jsonParam={"userID":"51","ticket":"1358906337262-2611" ,vehicleIdList:["389","853","863","866"]} 
	 *{"code":0,"data":[{"teamName":"","enterpiseName":"金盾创安","vehicleID":"389","owerPhone":"","terminalType":"203","simNO":"13602274125","pecAlarmInfo":0,"driverPhone":"","paramValue":"","registrationNO":"粤A58837（查数据）","registrationNOColor":"黄","areaName":"常德市","tradeKindName":"班车客运","commNO":"13961216048","driverName":""}]}
	 *1.6.3	获取部分车辆信息带状态接口
	 */
	@Action(value = "ETGetVehicleInfoAndStatus")
	public void ETGetVehicleInfoAndStatus() throws Exception 
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
			String ticket = paramBean.getTicket().trim();
			
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
				map.put("queryTime", Tools.formatDate(new Date()));
				map.put("vehicleIdList", paramBean.getVehicleIdList());
				
				List<HashMap<String,String>> ls = this.ibatisServices.findIbatisList("queryVehicleInfoAndStatusSQL",map);
				
				Tools.buildResult(commandRepository,ls,"0");
				
				String str = JSONUtil.toJson(ls);
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
	 *http://localhost:8080/enterprise/httpService/ETGetVehicleSearchAndStatus.action?jsonParam={"userID":"51","ticket":"1358906337262-2611" ,regNo:'湘KY6629'} 
	 *1.6.13	车辆检索接口
	 */
	@Action(value = "ETGetVehicleSearchAndStatus")
	public void ETGetVehicleSearchAndStatus() throws Exception 
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
			String ticket = paramBean.getTicket().trim();
			String userID = paramBean.getUserID().trim();
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
				map.put("queryTime", Tools.formatDate(new Date()));
				map.put("workUnitID", UserInfoManager.getInstance().getUserInfo(userID));
				
				String str2 = new String(new String(paramBean.getRegNo().getBytes("ISO-8859-1"),"gbk").replace("?", ""));
				
				//System.out.println("车牌："+str2);
				
				map.put("regNo", str2);
				
				List<HashMap<String,String>> ls = this.ibatisServices.findIbatisList("queryVehicleSearchAndStatusSQL",map);
				Tools.buildResult(commandRepository,ls,"0");
				
				String str = JSONUtil.toJson(ls);
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
	 *http://localhost:8080/enterprise/httpService/ETGetVehicleInfoAndStatus_Page.action?jsonParam={"userID":"51","ticket":"1359949372173-2290" ,"pageSize":"10","pageNumber":"1"}
	 *1.6.13获取部分分页车辆信息带状态接口
	 */
	@SuppressWarnings("unused")
	@Action(value = "ETGetVehicleInfoAndStatus_Page")
	public void ETGetVehicleInfoAndStatus_Page() throws Exception 
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
			String ticket = paramBean.getTicket().trim();
			String userID = paramBean.getUserID().trim();
			String pageSize = paramBean.getPageSize().trim();
			String pageNumber = paramBean.getPageNumber().trim();
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
				map.put("@workUnitID", UserInfoManager.getInstance().getUserInfo(userID));
				map.put("@pageSize", pageSize);
				map.put("@pageNumber", pageNumber);
				
				List<HashMap<String,String>> ls = this.ibatisServices.findIbatisList("P_VehiclePage_QuerySQL",map);
				Tools.buildResult(commandRepository,ls,"0");
				
				String str = JSONUtil.toJson(ls);
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
	 *http://localhost:80/enterprise/httpService/ETGetVehicleInfo.action?jsonParam={"userID":"51","ticket":"1358835197986-5021" ,vehicleIdList:["301","302"]} 
	 *{"code":0,"data":[{"teamName":"","status":"0","enterpiseName":"金盾创安","vehicleID":"389","owerPhone":"","terminalType":"203","simNO":"13602274125","driverPhone":"","paramValue":"","registrationNO":"粤A58837（查数据）","positionStatus":"","registrationNOColor":"黄","areaName":"常德市","tradeKindName":"班车客运","commNO":"13961216048","driverName":""},{"teamName":"","status":"0","enterpiseName":"金盾创安","vehicleID":"853","owerPhone":"","terminalType":"部标578J","simNO":"15197824354","driverPhone":"","paramValue":"","registrationNO":"湘KY6629","positionStatus":"","registrationNOColor":"黄","areaName":"常德市","tradeKindName":"班车客运","commNO":"13180013713","driverName":""},{"teamName":"","status":"0","enterpiseName":"金盾创安","vehicleID":"863","owerPhone":"","terminalType":"部标578J","simNO":"13873824147","driverPhone":"","paramValue":"","registrationNO":"湘KY3110","positionStatus":"","registrationNOColor":"黄","areaName":"常德市","tradeKindName":"班车客运","commNO":"13180013758","driverName":""},{"teamName":"","status":"0","enterpiseName":"金盾创安","vehicleID":"866","owerPhone":"","terminalType":"部标578J","simNO":"13762841447","driverPhone":"","paramValue":"","registrationNO":"湘KY3182","positionStatus":"","registrationNOColor":"黄","areaName":"常德市","tradeKindName":"班车客运","commNO":"13180013761","driverName":""}]}
	 *1.6.4	获取部分车辆信息不带状态接口
	 */
	@Action(value = "ETGetVehicleInfo")
	public void ETGetVehicleInfo() throws Exception 
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
			String ticket = paramBean.getTicket().trim();
			
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
				map.put("queryTime", Tools.formatDate(new Date()));
				map.put("vehicleIdList", paramBean.getVehicleIdList());
				
				List<HashMap<String,String>> ls = this.ibatisServices.findIbatisList("queryVehicleInfoSQL",map);
				
				String str = JSONUtil.toJson(ls);
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
	 *http://localhost:80/enterprise/httpService/ETGetVehicleInfo.action?jsonParam={"userID":"51","ticket":"1358992677798-6465" ,vehicleIdList:["389","853","863","866"]}
	 *{"code":0,"data":[{"teamName":"","enterpiseName":"金盾创安","vehicleID":"389","owerPhone":"","terminalType":"203","simNO":"13602274125","driverPhone":"","paramValue":"","registrationNO":"粤A58837（查数据）","registrationNOColor":"黄","areaName":"常德市","tradeKindName":"班车客运","commNO":"13961216048","driverName":""},{"teamName":"","enterpiseName":"金盾创安","vehicleID":"853","owerPhone":"","terminalType":"部标578J","simNO":"15197824354","driverPhone":"","paramValue":"","registrationNO":"湘KY6629","registrationNOColor":"黄","areaName":"常德市","tradeKindName":"班车客运","commNO":"13180013713","driverName":""},{"teamName":"","enterpiseName":"金盾创安","vehicleID":"863","owerPhone":"","terminalType":"部标578J","simNO":"13873824147","driverPhone":"","paramValue":"","registrationNO":"湘KY3110","registrationNOColor":"黄","areaName":"常德市","tradeKindName":"班车客运","commNO":"13180013758","driverName":""},{"teamName":"","enterpiseName":"金盾创安","vehicleID":"866","owerPhone":"","terminalType":"部标578J","simNO":"13762841447","driverPhone":"","paramValue":"","registrationNO":"湘KY3182","registrationNOColor":"黄","areaName":"常德市","tradeKindName":"班车客运","commNO":"13180013761","driverName":""}]}
	 *1.6.5	获取某车辆详细信息接口
	 */
	@Action(value = "ETGetVehicleDetailInfo")
	public void ETGetVehicleDetailInfo() throws Exception 
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
			String ticket = paramBean.getTicket().trim();
			
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
				map.put("vehicleId", paramBean.getVehicleId());
				
				List<HashMap<String,String>> ls = this.ibatisServices.findIbatisList("queryVehicleDetailInfoByIdSQL",map);
				
				String str = JSONUtil.toJson(ls);
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
	 * http://localhost:8080/enterprise/httpService/ETGetVehicleSearch.action?jsonParam={"userID":"51","ticket":"1358992677798-6465" ,"regNo":"粤AC"}
	 * 1.6.14	车辆信息检索接口
	 * @throws Exception
	 */
	@Action(value = "ETGetVehicleSearch")
	public void ETGetVehicleSearch() throws Exception 
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
			String ticket = paramBean.getTicket().trim();
			String userID = paramBean.getUserID().trim();
			
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
				//String registrationNO = paramBean.getRegNo();
				
				
			//	String registrationNO = new String(new String(paramBean.getRegNo().getBytes("ISO-8859-1"),"gbk"));
				String registrationNO = new String(new String(paramBean.getRegNo().getBytes("UTF-8"),"utf-8"));
				
				
				//registrationNO = new String(registrationNO.getBytes("ISO-8859-1"), "GBK"); 
//				System.out.println("--------ISO-8859-1-----1-------gb2312---------"+new String(paramBean.getRegNo().getBytes("ISO-8859-1"),"gb2312"));
//				System.out.println("--------UTF-8----------1-------gb2312----"+new String(paramBean.getRegNo().getBytes("UTF-8"),"gb2312"));
//				System.out.println("--------GB2312---------1-------gb2312-----"+new String(paramBean.getRegNo().getBytes("GB2312"),"gb2312"));
//				System.out.println("--------GBK------------1-------gb2312--"+new String(paramBean.getRegNo().getBytes("GBK"),"gb2312"));
//
//				System.out.println("--------ISO-8859-1-----2-------gbk---------"+new String(paramBean.getRegNo().getBytes("ISO-8859-1"),"gbk"));
//				System.out.println("--------UTF-8----------2-------gbk----"+new String(paramBean.getRegNo().getBytes("UTF-8"),"gbk"));
//				System.out.println("--------GB2312---------2-------gbk-----"+new String(paramBean.getRegNo().getBytes("GB2312"),"gbk"));
//				System.out.println("--------GBK------------2-------gbk--"+new String(paramBean.getRegNo().getBytes("GBK"),"gbk"));
//
//				System.out.println("--------ISO-8859-1-----3-------utf-8---------"+new String(paramBean.getRegNo().getBytes("ISO-8859-1"),"utf-8"));
//				System.out.println("--------UTF-8----------3-------utf-8----"+new String(paramBean.getRegNo().getBytes("UTF-8"),"utf-8"));
//				System.out.println("--------GB2312---------3-------utf-8-----"+new String(paramBean.getRegNo().getBytes("GB2312"),"utf-8"));
//				System.out.println("--------GBK------------3-------utf-8--"+new String(paramBean.getRegNo().getBytes("GBK"),"utf-8"));
				
				map.put("registrationNO", registrationNO);
				map.put("workUnitID", UserInfoManager.getInstance().getUserInfo(userID));
				
				List<HashMap<String,String>> ls = this.ibatisServices.findIbatisList("getVehicleSearchSQL",map);
				Tools.buildResult(commandRepository,ls,"0");
				String str = JSONUtil.toJson(ls);
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
}




