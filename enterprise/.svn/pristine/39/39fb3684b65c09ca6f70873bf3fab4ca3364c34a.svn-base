package com.etrans.bubiao.action.sys;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.struts2.ServletActionContext;
import org.apache.struts2.convention.annotation.Action;
import org.apache.struts2.convention.annotation.Namespace;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;

import com.etrans.bubiao.action.BaseAction;
import com.etrans.bubiao.action.sys.log.LogActionTypes;
import com.etrans.bubiao.action.sys.log.LogUtil;
import com.etrans.bubiao.auth.SessionUser;
import com.etrans.bubiao.entities.EntCustomMapPoint;
import com.etrans.bubiao.services.sys.CustomMapServices;
import com.etrans.bubiao.services.sys.EntCustomMapPointServices;
import com.etrans.bubiao.sys.UserContext;
import com.etrans.common.util.FlexiGridUtil;
import com.etrans.common.util.Tools;
import com.etrans.common.util.json.JSONUtil;

@Controller
@Scope("prototype")
@Namespace("/customMapPoint")
public class EntCustomMapPointAction extends BaseAction {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
    
	@Autowired
	private EntCustomMapPointServices customMapPointServices;

	
	
	public EntCustomMapPointServices getCustomMapPointServices() {
		return customMapPointServices;
	}



	public void setCustomMapPointServices(
			EntCustomMapPointServices customMapPointServices) {
		this.customMapPointServices = customMapPointServices;
	}
	
	
	@Autowired
	private CustomMapServices customMapServices;

	public CustomMapServices getCustomMapServices() {
		return customMapServices;
	}

	public void setCustomMapServices(CustomMapServices customMapServices) {
		this.customMapServices = customMapServices;
	}

	



	/**
	 * 兴趣点设置信息查询
	 */
	@Action(value = "getEntCustomMapPointList")
	public void getEntCustomMapPointList() {	
		
		try {
			Map<String,Object> params = FlexiGridUtil.parseParam(this.getGridParams());
			params.put("userId", UserContext.getLoginUser().getUserID().toString());
			this.renderJSON(JSONUtil.toJson(customMapPointServices.getEntCustomMapPointList(params)));
			LogUtil.insertLog(LogActionTypes.READ, "成功", "兴趣点设置", "", "查询兴趣点信息");
		} catch (Exception e) {
			LogUtil.insertLog(LogActionTypes.READ, "失败", "兴趣点设置", "", "查询兴趣点信息");
			e.printStackTrace();
		}
	}
	
	
	
	/**
	 **新增兴趣点设置信息
	 */
	@Action(value = "createEntCustomMapPoint")
	public void createEntCustomMapPoint() {
		String jsonString = "false";
		try {
		SessionUser users = UserContext.getLoginUser();
		Map<String,Object> paramMap = new HashMap<String,Object>();
		paramMap.put("userId", users.getUserID());
		List<HashMap<String, String>> customMapLayerMap=customMapServices.getCustomMapLayer(paramMap);
		
		String mapLayerId=null;
		if(customMapLayerMap != null && customMapLayerMap.size()>0){
			Map<String,String> mapId=customMapLayerMap.get(0);
			mapLayerId = String.valueOf(mapId.get("id"));
			
			String name=getParameter("name");
			String nameType=getParameter("nameType");
			String lng=getParameter("lng");
			String lat=getParameter("lat");
			
			Map<String, Object> params = new HashMap<String,Object>();
			params.put("name",name);
			params.put("mapLayerID",mapLayerId);
			params.put("longitude",lng);
			params.put("latitude",lat);
			params.put("mapIconID",nameType);
			
			EntCustomMapPoint cm=new EntCustomMapPoint();
			cm.setName(name);
			cm.setLatitude(Float.parseFloat(lat.trim()));
			cm.setLongitude(Float.parseFloat(lng.trim()));
			cm.setMapIconID(Long.parseLong(nameType.trim()));
			cm.setMapLayerID(Long.parseLong(mapLayerId.trim()));
			
			//查询该兴趣点是否存在
			List<HashMap<String, String>> PointList=customMapPointServices.checkEntCustomMapPointList(params);
			if (PointList != null && PointList.size() > 0) {
				jsonString = "false";
			}else{
				//新增兴趣点
				//Long id=customMapPointServices.createEntCustomMapPoint(cm);
				
				customMapPointServices.createEntCustomMapPoint(params);
				
				List<HashMap<String, String>> PointNmaeList=customMapPointServices.getEntCustomMapPointByName(params);
				String id=null;
				String PointNmae=null;
				if(PointNmaeList != null && PointNmaeList.size()>0){
					Map<String,String> map=PointNmaeList.get(0);
					id = String.valueOf(map.get("id"));
					PointNmae = String.valueOf(map.get("name"));
					jsonString = id.trim().toString()+"@"+PointNmae.trim().toString();
					LogUtil.insertLog(LogActionTypes.INSERT, "成功", "兴趣点设置", "", "新增兴趣点设置信息");
				}
				
//				if (PointNmaeList != null && PointNmaeList.size() > 0) {
//				    jsonString=JSONUtil.toJson(PointNmaeList);
//				}
				
			}
		}
			
		} catch (Exception e) {
			LogUtil.insertLog(LogActionTypes.INSERT, "失败", "兴趣点设置", "", "新增兴趣点设置信息");
			e.printStackTrace();
			jsonString = "false";
			log.debug("新增出错！");
		}
		//this.renderJSON(jsonString);
		Tools.writeToOutputStream(jsonString, "新增兴趣点json字符串写到输出流", ServletActionContext.getResponse());	
	}
	
	
	
	
	
	
	
	/**
	 * 根据ID删除兴趣点设置
	 */
	@Action(value = "deleteEntCustomMapPoint")
	public void deleteEntCustomMapPoint() {

		String ids= getParameter("ids");
		Map<String, Object> whereMap = new HashMap<String, Object>();
		whereMap.put("id", ids);
		try {
			this.renderJSON(customMapPointServices.deleteEntCustomMapPoint(whereMap));
			LogUtil.insertLog(LogActionTypes.DELETE, "成功", "兴趣点设置", "", "删除兴趣点设置");
		} catch (Exception e) {
			LogUtil.insertLog(LogActionTypes.DELETE, "失败", "兴趣点设置", "", "删除兴趣点设置");
			e.printStackTrace();
			log.debug("根据ID删除兴趣点设置出错！");
		}
	}
	
	/**
	 * 验证不能有相同的名称
	 */
	@Action(value = "checkEntCustomMapPoint")
	public void checkEntCustomMapPoint() {
		String name = getParameter("name"); 
		String id = getParameter("id"); 
		Map<String, Object> whereMap = new HashMap<String, Object>();
		whereMap.put("name", name);
		whereMap.put("id", id);
		try {
			this.renderJSON(customMapPointServices.checkEntCustomMapPoint(whereMap));
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	

	/**
	 * 初始化类型下拉框数据
	 */
	@Action(value = "getEntCustomMapIcons")
	public void getEntCustomMapIcons() {
		try {
			this.renderJSON(JSONUtil.toJson(customMapPointServices.getEntCustomMapIcon()));
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	
	/**
	 * 根据ID查询兴趣点图标
	 */
	@Action(value = "getEntCustomMapIconById")
	public void getEntCustomMapIconById() {

		String id = getParameter("id");
		Map<String, Object> whereMap = new HashMap<String, Object>();
		whereMap.put("id", id);
		try {
			this.renderJSON(JSONUtil.toJson(customMapPointServices.getEntCustomMapIconById(whereMap)));
			LogUtil.insertLog(LogActionTypes.READ, "成功", "兴趣点设置", "", "根据ID查询兴趣点图标");
		} catch (Exception e) {
			LogUtil.insertLog(LogActionTypes.READ, "失败", "兴趣点设置", "", "根据ID查询兴趣点图标");
			e.printStackTrace();
		}
	}
	
	
	@Action(value = "getEntCustomMapPointByIdList")
	public void getEntCustomMapPointByIdList() {
		String jsonString = "false";
		try {
			
			String ids= getParameter("ids");
			Map<String, Object> whereMap = new HashMap<String, Object>();
			whereMap.put("id", ids);
		
		    List<HashMap<String, String>> list =customMapPointServices.getEntCustomMapPointByIdList(whereMap);
			
		    if (list != null && list.size() > 0) {
			    jsonString=JSONUtil.toJson(list);
			}
		} catch (Exception e) {
			jsonString = "false";
			e.printStackTrace();
		}
		this.renderJSON(jsonString);
	}
	
	/**
	 * 根据用户查询兴趣点
	 */
	@Action(value = "getEntCustomMapPointByUserList")
	public void getEntCustomMapPointByUserList() {
		String jsonString = "false";
		try {
			
			String userId= UserContext.getLoginUser().getUserID().toString();
			Map<String, Object> whereMap = new HashMap<String, Object>();
			whereMap.put("userId", userId);
		
		    List<HashMap<String, String>> list =customMapPointServices.getEntCustomMapPointByUserList(whereMap);
			
		    if (list != null && list.size() > 0) {
			    jsonString=JSONUtil.toJson(list);
			}
		} catch (Exception e) {
			jsonString = "false";
			e.printStackTrace();
		}
		this.renderJSON(jsonString);
	}
	
	
	
	
	
	/**
	 **新增地图自定义设置信息--Ent_CustomMap
	 */
	@Action(value = "addEntCustomMap")
	public void addEntCustomMap() {
		String jsonString = "false";
		try {
		SessionUser users = UserContext.getLoginUser();
		Map<String,Object> paramMap = new HashMap<String,Object>();
		paramMap.put("userId", users.getUserID());
		List<HashMap<String, String>> customMapLayerMap=customMapServices.getCustomMapLayer(paramMap);
		
		String mapLayerId=null;
		if(customMapLayerMap != null && customMapLayerMap.size()>0){
			Map<String,String> mapId=customMapLayerMap.get(0);
			mapLayerId = String.valueOf(mapId.get("id"));
			
			
			
			String name=getParameter("name");
			String mapIconID=getParameter("MapIconID");
			String lngLat=getParameter("LngLat");
			String originLngLat=getParameter("OriginLngLat");
			String customType=getParameter("CustomType");
			String mapType=getParameter("MapType");
			String Radius=getParameter("Radius");
			
			Map<String, Object> params = new HashMap<String,Object>();
			params.put("name",name);
			params.put("mapLayerID",mapLayerId);
			params.put("mapIconID",mapIconID);
			params.put("lngLat",lngLat);
			params.put("originLngLat",originLngLat);
			params.put("customType",customType);
			params.put("mapType",mapType);
			params.put("Radius",Radius);
			
			
			//查询该自定义信息是否存在
			List<HashMap<String, String>> PointList=customMapPointServices.checkCustomMap(params);
			if (PointList != null && PointList.size() > 0) {
				jsonString = "false";
			}else{
				
				customMapPointServices.createEntCustomMap(params);
				if(customType=="1" && customType.equals("1")){
					params.put("flag","0");
				}else{
					params.put("flag","1");
				}
				
				List<HashMap<String, String>> PointNmaeList=customMapPointServices.getEntCustomMapByName(params);
				String id=null;
				String PointNmae=null;
				if(PointNmaeList != null && PointNmaeList.size()>0){
					Map<String,String> map=PointNmaeList.get(0);
					id = String.valueOf(map.get("id"));
					PointNmae = String.valueOf(map.get("name"));
					jsonString = id.trim().toString()+"@"+PointNmae.trim().toString();
					LogUtil.insertLog(LogActionTypes.INSERT, "成功", "地图自定义设置", "", "新增地图自定义信息");
				}
				
		
			}
		}
			
		} catch (Exception e) {
			LogUtil.insertLog(LogActionTypes.INSERT, "失败", "地图自定义设置", "", "新增地图自定义设置信息");
			e.printStackTrace();
			jsonString = "false";
			log.debug("新增出错！");
		}
		
		Tools.writeToOutputStream(jsonString, "新增兴趣点json字符串写到输出流", ServletActionContext.getResponse());	
	}
	
	
	/**
	 * 地图自定义信息查询
	 */
	@Action(value = "getEntCustomMapList")
	public void getEntCustomMapList() {	
		
		try {
			Map<String,Object> params = FlexiGridUtil.parseParam(this.getGridParams());
			params.put("userId", UserContext.getLoginUser().getUserID().toString());
			this.renderJSON(JSONUtil.toJson(customMapPointServices.getEntCustomMapList(params)));
			LogUtil.insertLog(LogActionTypes.READ, "成功", "地图自定义设置", "", "查询地图自定义信息");
		} catch (Exception e) {
			LogUtil.insertLog(LogActionTypes.READ, "失败", "地图自定义设置", "", "查询地图自定义信息");
			e.printStackTrace();
		}
	}
	
	/**
	 * 根据ID删除地图自定义信息
	 */
	@Action(value = "deleteEntCustomMap")
	public void deleteEntCustomMap() {

		String ids= getParameter("ids");
		Map<String, Object> whereMap = new HashMap<String, Object>();
		whereMap.put("id", ids);
		try {
			this.renderJSON(customMapPointServices.deleteEntCustomMap(whereMap));
			LogUtil.insertLog(LogActionTypes.DELETE, "成功", "兴趣点设置", "", "删除兴趣点设置");
		} catch (Exception e) {
			LogUtil.insertLog(LogActionTypes.DELETE, "失败", "兴趣点设置", "", "删除兴趣点设置");
			e.printStackTrace();
			log.debug("根据ID删除兴趣点设置出错！");
		}
	}
	
	/**
	 * 根据用户查询自定义信息
	 */
	@Action(value = "getEntCustomMapByUserList")
	public void getEntCustomMapByUserList() {
		String jsonString = "false";
		try {
			String name=getParameter("name");
			String customType=getParameter("customType");
			
			String userId= UserContext.getLoginUser().getUserID().toString();
			Map<String, Object> whereMap = new HashMap<String, Object>();
			whereMap.put("userId", userId);
			whereMap.put("name", name);
			whereMap.put("customType", customType);
		    List<HashMap<String, String>> list =customMapPointServices.getEntCustomMapByUserList(whereMap);
			
		    if (list != null && list.size() > 0) {
			    jsonString=JSONUtil.toJson(list);
			}
		} catch (Exception e) {
			jsonString = "false";
			e.printStackTrace();
		}
		this.renderJSON(jsonString);
	}
	
	/**
	 * 根据ID查询图层信息
	 */
	@Action(value = "getEntCustomMapById")
	public void getEntCustomMapById() {

		String id = getParameter("id");
		Map<String, Object> whereMap = new HashMap<String, Object>();
		whereMap.put("id", id);
		try {
			this.renderJSON(JSONUtil.toJson(customMapPointServices.getEntCustomMapById(whereMap)));
		} catch (Exception e) {
			e.printStackTrace();
			log.debug("根据ID查询图层信息出错！");
		}
	}
	
	/**
	 * 根据ID修改SIM卡信息
	 */
	@SuppressWarnings("unchecked")
	@Action(value = "editEntCustomMap")
	public void editEntCustomMap() {
		
		String jsonParams = getParameter("params"); 
		Map<String, Object> params = JSONUtil.fromJson(jsonParams, Map.class);
		
		try {
			this.renderJSON(customMapPointServices.updateCustomMap(params));
			LogUtil.insertLog(LogActionTypes.UPDATE, "成功", "图层管理", "", "修改图层信息");
		} catch (Exception e) {
			LogUtil.insertLog(LogActionTypes.UPDATE, "失败", "图层管理", "", "修改图层信息");
			e.printStackTrace();
			log.debug("根据ID修改图层信息出错！");
		}
	}
	
	/**
	 * 验证同名
	 */
	@Action(value = "checkCustomMaps")
	public void checkCustomMaps() {
		String name = getParameter("name"); 
		String id = getParameter("id"); 
		Map<String, Object> whereMap = new HashMap<String, Object>();
		whereMap.put("name", name);
		whereMap.put("id", id);
		try {
			this.renderJSON(customMapPointServices.checkCustomMaps(whereMap));
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	

}
