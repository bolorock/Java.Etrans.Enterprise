package com.etrans.bubiao.action.http;

import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

import org.apache.commons.lang.StringUtils;
import org.apache.struts2.convention.annotation.Action;
import org.apache.struts2.convention.annotation.Namespace;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;

import com.etrans.bubiao.entities.HttpResult;
import com.etrans.bubiao.entities.ParamBean;
import com.etrans.bubiao.http.HttpClient;
import com.etrans.bubiao.http.Response;
import com.etrans.bubiao.repository.CommandRepository;
import com.etrans.bubiao.services.IbatisServices;
import com.etrans.bubiao.services.monitorCenter.MonitorCenterServices;
import com.etrans.bubiao.sys.Constants;
import com.etrans.common.util.Tools;
import com.etrans.common.util.json.JSONUtil;
import com.etrans.common.util.web.Struts2Utils;


/**
 * 中文地址转换接口程序
 * @author Administrator
 *
 */
@SuppressWarnings("serial")
@Controller("eTGetGpsLocationAction")
@Scope("prototype")
@Namespace("/httpService")
public class ETGetGpsLocationAction extends HttpServiceAction {
	
	@SuppressWarnings("unused")
	@Autowired
	private CommandRepository commandRepository;
	
	@Autowired
	private MonitorCenterServices monitorCenterServices;
	
	@Autowired(required = true)
	private IbatisServices ibatisServices;
//
//	/**
//	 * 经度：111.993104 纬度：27.731332 
//	 *http://localhost:8080/enterprise/httpService/ETGetGpsLocation.action?jsonParam={"name":"bs_root","password":"C33367701511B4F6020EC61DED352059","lon":"111.993104","lat":"27.731332"}
//	 *根据经纬度取其中文地址
//	 */
//	@Autowired(required = true)
//	private IbatisServices ibatisServices;
//	
//	@SuppressWarnings("unchecked")
//	@Action(value = "ETGetGpsLocation")
//	public void ETGetGpsLocation() 
//	{
//		 //返回对象
//		Result result = new Result();
//		System.out.println("===:"+this.jsonParam);
//		ParamBean paramBean = JSONUtil.fromJson(super.jsonParam,ParamBean.class);
//		Map param=new HashMap<String, Object>();
//		List<Map<String, Object>> lists = new ArrayList<Map<String,Object>>();
//		
//		param.put("userName", paramBean.getName().toString().trim());
//		param.put("passWord", paramBean.getPassword().toString().trim());
//		
//		//验证用户
//		lists=ibatisServices.queryForList(Map.class,"getUserNameSQL",param);
//		
////		Map<String, Object> map = new  HashMap<String, Object> ();
////		map =lists.get(0);
////		param.put("userId",map.get("userId"));
//		
//		if(lists.size()==0){
//			// 返回json数据
//			result.setCode(1);//1:帐户有误
//			this.renderJSON(result);
//		}else{
//			
////			System.out.println("lon:"+paramBean.getLon().toString()+"=========lat:"+paramBean.getLat().toString());
////			/*************翻译中文地址******************/
////			try {
////				Map<String, Object> map = new  HashMap<String, Object> ();
////				map.put("lon", paramBean.getLon().toString());
////				map.put("lat", paramBean.getLat().toString());
//				String address = this.commandRepository.getAddress(paramBean.getLon().toString(), paramBean.getLat().toString());
////				//设置中文地址
////				if(address!=null && address.split(",").length==3){
////					address = address.split(",")[2];
////					map.put("address", address);
////				}else{
////					address=" ";
////				}
////				result.setCode(0);
////				result.setData(map);
////				
////			} catch (Exception e) {
////				e.printStackTrace();
////			}
//			
//			 String lng=paramBean.getLon().toString();
//			 String lat=paramBean.getLat().toString();
//			 
//			  try {
//					 StringBuffer urlBuffer=new StringBuffer();
//						urlBuffer.append(Constants.MAP_BASE_URL+"/SE_RGC2")
//						         .append("?")
//						         .append("st=Rgc2&output=json&point=")
//						         .append(lng)
//						         .append(",")
//						         .append(lat)
//						         .append("&uid=")
//						         .append(Constants.MAP_UID);
//						
//					   System.out.println("====:"+urlBuffer.toString());
//					   Response resulResponse=HttpClient.getAddress(urlBuffer.toString());
////					   result.setCode(0);
////					   result.setData(resulResponse.asString());
//					   this.renderJSON(resulResponse.asString());
//					
//					} catch (Exception e) {
//				 e.printStackTrace();
//				 this.renderXML("");
//			}
//
//		}
//		
//		// 返回json数据
//		this.renderJSON(result);
//	}
	
	
	/**
	 *http://localhost:8080/enterprise/httpService/ETGetGpsLocation.action?jsonParam={"userID":"51","ticket":"1359080983189-4519","lon":"23.111","lat":"113.3434"}
	 *1.6.7	根据经纬度取其中文地址
	 */
	@SuppressWarnings({ "static-access", "unused", "unchecked", "rawtypes" })
	@Action(value = "ETGetGpsLocation")
	public void ETGetGpsLocation() throws Exception 
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
//			String vehicleID = paramBean.getVehicleId().trim();
			String lon = paramBean.getLon().trim();
			String lat = paramBean.getLat().trim();
			
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
				
				StringBuffer urlBuffer=new StringBuffer();
				urlBuffer.append(Constants.MAP_BASE_URL+"/SE_RGC2")
				         .append("?")
				         .append("st=Rgc2&output=json&point=")
				         .append(lon)
				         .append(",")
				         .append(lat)
				         .append("&uid=")
				         .append(Constants.MAP_UID);
				
			   Response resulResponse=HttpClient.getAddress(urlBuffer.toString());
			   result.setData(resulResponse.asString());
			  
//			   System.out.println("======:"+result.getData().toString());
			   
			   Map dataMap = this.parseJSON2Map(result.getData().toString());
			   
			   Map resultMap = this.parseJSON2Map(dataMap.get("result").toString());//取中文地址
			   
//			   System.out.println("地址:"+resultMap.get("district_text")+">"+resultMap.get("address"));
			   
			   Map pointMap = this.parseJSON2Map(resultMap.get("point").toString());//取经纬度
			   
//			   System.out.println("lng:"+pointMap.get("lng")+"lat:"+pointMap.get("lat"));
			   
			   Map productMap=new HashMap();
			   
			   productMap.put("lon", pointMap.get("lng").toString().trim());
			   productMap.put("lat", pointMap.get("lat").toString().trim());
			   productMap.put("address", resultMap.get("district_text").toString().trim()+">"+resultMap.get("address").toString().trim());
			
			   
			   String str = JSONUtil.toJson(productMap);
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
	 *http://localhost:80/enterprise/httpService/ETGetTrackBack.action?jsonParam={"userID":"51","ticket":"1358835197986-5021","lon":"23.111","lat":"113.3434"}
	 *1.6.10	获取单车辆轨迹回放数据接口
	 */
	@SuppressWarnings("unused")
	@Action(value = "ETGetTrackBack")
	public void ETGetTrackBack() throws Exception 
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
			String vehicleID = paramBean.getVehicleId().trim();
			String startDate=paramBean.getStartDate().trim();
			String endTime=paramBean.getEndDate().trim();
			
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
//				Map<String,Object> map = new HashMap<String,Object>();
//				map.put("workUnitID", UserInfoManager.getInstance().getUserInfo(userID));
//				
//				List<HashMap<String,String>> ls = this.ibatisServices.findIbatisList("getUserVehicleIDByWorkUnitIDSQL",map);
//				
//				//Map<String, String> vehicleMap=(HashMap<String, String>)Struts2Utils.getSessionAttribute(Constants.USER_VEHICLE);
//					List<String> backList = this.monitorCenterServices.findPlayBackTrack(vehicleID, Long.valueOf(startDate), Long.valueOf(endTime),vehicleMap,mapType);
//					if (backList != null && backList.size() > 0) {
//						if (backList.size() == 1) {
//							backList.add(backList.get(0));
//						}
//						result.setData(JSONUtil.toJson(backList));
//					}
				
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
	
//	 public static Map parserToMap(String s){
//			Map map=new HashMap();
//			JSONObject json=JSONObject.fromObject(s);
//			Iterator keys=json.keys();
//			while(keys.hasNext()){
//				String key=(String) keys.next();
//				String value=json.get(key).toString();
//				if(value.startsWith("{")&&value.endsWith("}")){
//					map.put(key, parserToMap(value));
//				}else{
//					map.put(key, value);
//				}
//
//			}
//			return map;
//		}
	
	
	@SuppressWarnings("unchecked")
	public static Map<String, Object> parseJSON2Map(String jsonStr){
        Map<String, Object> map = new HashMap<String, Object>();
        //最外层解析
        JSONObject json = JSONObject.fromObject(jsonStr);
        for(Object k : json.keySet()){
            Object v = json.get(k); 
            //如果内层还是数组的话，继续解析
            if(v instanceof JSONArray){
                List<Map<String, Object>> list = new ArrayList<Map<String,Object>>();
                Iterator<JSONObject> it = ((JSONArray)v).iterator();
                while(it.hasNext()){
                    JSONObject json2 = it.next();
                    list.add(parseJSON2Map(json2.toString()));
                }
                map.put(k.toString(), list);
            } else {
                map.put(k.toString(), v);
            }
        }
        return map;
    }

}
