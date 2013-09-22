package com.etrans.bubiao.action;


import java.util.HashMap;
import java.util.List;
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
import com.etrans.bubiao.auth.SessionUser;
import com.etrans.bubiao.entities.ANAParamPolygon;
import com.etrans.bubiao.services.AnalyserOverSpeedRoadCYServices;
import com.etrans.bubiao.sys.UserContext;
import com.etrans.common.util.json.JSONUtil;


@Controller
@Scope("prototype")
@Namespace("/analyse")
public class AnalyserOverSpeedRoadCYAction extends BaseAction{
	
	private static final long serialVersionUID = 1L;
	
	protected Logger log = LogManager.getLogger(this.getClass().getName());
	
	@Autowired
	private AnalyserOverSpeedRoadCYServices analyserOverSpeedRoadCYServices;

	
	public AnalyserOverSpeedRoadCYServices getAnalyserOverSpeedRoadCYServices() {
		return analyserOverSpeedRoadCYServices;
	}

	public void setAnalyserOverSpeedRoadCYServices(
			AnalyserOverSpeedRoadCYServices analyserOverSpeedRoadCYServices) {
		this.analyserOverSpeedRoadCYServices = analyserOverSpeedRoadCYServices;
	}

	
	@Action(value="findAnalyserOverSpeedRoadCYList")
	public void findAnalyserOverSpeedRoadCYList(){
		try {
			this.renderJSON(analyserOverSpeedRoadCYServices.findAnalyserOverSpeedRoadCY(this.getGridParams()));
		} catch (Exception e) {
			e.printStackTrace();
		}
		
	}
	
	/**
	 * 判断名称重复
	 */
	@Action(value = "checkPointName")
	public void checkPointName() {
		String name = getParameter("name");
		String id = getParameter("id");
		Map<String,Object> whereMap = new HashMap<String,Object>();
		whereMap.put("name", name);
		whereMap.put("id", id);
		try {
			this.renderJSON(analyserOverSpeedRoadCYServices.checkAnalyserOverSpeedRoadCYByName(whereMap));
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	
	
	
	@Action(value = "getAnalyserOverSpeedRoadCYById")
	public void getAnalyserOverSpeedRoadCYById() {
		String id = getParameter("id");
		Map<String, Object> whereMap = new HashMap<String, Object>();
		whereMap.put("id", id);
		try {
			this.renderJSON(analyserOverSpeedRoadCYServices.getAnalyserOverSpeedRoadCYById(whereMap));
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	@Action(value = "createOverSpeedRoadCY")
	public void createOverSpeedRoadCY(){
		try {
			SessionUser users = UserContext.getLoginUser();
			Map<String,Object> map = this.getParameterMap();
			if(map!=null && map.size()>0){
			map.remove("id");//删除id（修改才会用到）
			
			Map<String, Object> areaMap = new HashMap<String, Object>();
			areaMap.put("areaId", map.get("placeTypeID"));
			List<HashMap<String, String>> customMapLayerMap=analyserOverSpeedRoadCYServices.getCustomMapPlaneNameById(areaMap);
			
			String planeName=null;
			
			if(customMapLayerMap != null && customMapLayerMap.size()>0){
				
				Map<String,String> mapId=customMapLayerMap.get(0);
				planeName = String.valueOf(mapId.get("name"));
				Map<String,Object> whereparams = new HashMap<String,Object>();
				whereparams.put("name", planeName);
				
				ANAParamPolygon  p=new ANAParamPolygon();
				p.setId(Long.valueOf("0"));
				p.setGroupID(users.getWorkUnitID());
				p.setName(planeName);
				p.setLatitude(Float.parseFloat("0"));
				p.setLongitude(Float.parseFloat("0"));
				Long roadID=analyserOverSpeedRoadCYServices.createParamPolygon(p);
				
				List<HashMap<String, String>> pointList=analyserOverSpeedRoadCYServices.getCustomMapPlaneLonLatById(areaMap);
				
				if(pointList!=null && pointList.size()>0){
					String Longitude=null;
					String Latitude=null;
					int i=0;
					for (Map<String, String> point : pointList) {
						i++;
						Longitude=String.valueOf(point.get("longitude"));
						Latitude=String.valueOf(point.get("latitude"));
						Map<String,Object> paramMap = new HashMap<String,Object>();
						paramMap.put("roadID", roadID);
						paramMap.put("indexNO", i);
						paramMap.put("longitude", Longitude);
						paramMap.put("latitude", Latitude);
						analyserOverSpeedRoadCYServices.createParamPolygonDetail(paramMap);
				    } 
				}
				
				Map<String,Object> osrMap = new HashMap<String,Object>();
				osrMap.put("name", map.get("name"));
				osrMap.put("analyseGroupID",  map.get("analyseGroupID"));
				osrMap.put("isAlert",  map.get("isAlert"));
				osrMap.put("checkTimeTypeID",  map.get("checkTimeTypeID"));
				osrMap.put("checkTimeValue",  map.get("checkTimeValue"));
				osrMap.put("checkTimeBegin",  map.get("checkTimeBegin"));
				osrMap.put("checkTimeEnd",  map.get("checkTimeEnd"));
				osrMap.put("isWarn",  map.get("isWarn"));
				osrMap.put("soundContent",  map.get("soundContent"));
				osrMap.put("alertInterval", map.get("alertInterval"));
				osrMap.put("placeTypeID", roadID);
				analyserOverSpeedRoadCYServices.createOverSpeedRoadCY(osrMap);
				
						
				
			
			}
			this.renderJSON("true");
		 }else{
			
		 }
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

//	@Action(value = "createOverSpeedRoadCY")
//	public void createOverSpeedRoadCY(){
//		try {
//			SessionUser users = UserContext.getLoginUser();
//			Map<String,Object> map = this.getParameterMap();
//			if(map!=null && map.size()>0){
//			map.remove("id");//删除id（修改才会用到）
//			
//			Map<String, Object> areaMap = new HashMap<String, Object>();
//			areaMap.put("areaId", map.get("placeTypeID"));
//			List<HashMap<String, String>> customMapLayerMap=analyserOverSpeedRoadCYServices.getCustomMapPlaneNameById(areaMap);
//			
//			String planeName=null;
//			String roadID=null;
//			if(customMapLayerMap != null && customMapLayerMap.size()>0){
//				
//				Map<String,String> mapId=customMapLayerMap.get(0);
//				planeName = String.valueOf(mapId.get("name"));
//				Map<String,Object> whereparams = new HashMap<String,Object>();
//				whereparams.put("name", planeName);
//				List<HashMap<String, String>> PolygonMap=analyserOverSpeedRoadCYServices.getParamPolygonByName(whereparams);
//				
//				if(PolygonMap.size()==0){
//					
//					Map<String,Object> params = new HashMap<String,Object>();
//					params.put("groupID", users.getWorkUnitID());
//					params.put("name", planeName);
//					params.put("longitude",0);
//					params.put("latitude",0);
//					analyserOverSpeedRoadCYServices.createParamPolygon(params);
//					
//					List<HashMap<String, String>> PolygonMap2=analyserOverSpeedRoadCYServices.getParamPolygonByName(whereparams);
//					if(PolygonMap2.size()==1){
//						Map<String,String> mapRoadID2=PolygonMap2.get(0);
//						roadID=String.valueOf(mapRoadID2.get("ID"));
//						
//						List<HashMap<String, String>> pointList=analyserOverSpeedRoadCYServices.getCustomMapPlaneLonLatById(areaMap);
//						if(pointList!=null && pointList.size()>0){
//							String Longitude=null;
//							String Latitude=null;
//							int i=0;
//							for (Map<String, String> point : pointList) {
//								i++;
//								Longitude=String.valueOf(point.get("longitude"));
//								Latitude=String.valueOf(point.get("latitude"));
//								
//								Map<String,Object> paramMap = new HashMap<String,Object>();
//								paramMap.put("roadID", roadID);
//								paramMap.put("indexNO", i);
//								paramMap.put("longitude", Longitude);
//								paramMap.put("latitude", Latitude);
//								analyserOverSpeedRoadCYServices.createParamPolygonDetail(paramMap);
//						    } 
//							Map<String,Object> osrMap = new HashMap<String,Object>();
//							osrMap.put("name", map.get("name"));
//							osrMap.put("analyseGroupID",  map.get("analyseGroupID"));
//							osrMap.put("isAlert",  map.get("isAlert"));
//							osrMap.put("checkTimeTypeID",  map.get("checkTimeTypeId"));
//							osrMap.put("checkTimeValue",  map.get("checkTimeValue"));
//							osrMap.put("checkTimeBegin",  map.get("checkTimeBegin"));
//							osrMap.put("checkTimeEnd",  map.get("checkTimeEnd"));
//							osrMap.put("isWarn",  map.get("isWarn"));
//							osrMap.put("soundContent",  map.get("soundContent"));
//							osrMap.put("alertInterval", map.get("alertInterval"));
//							osrMap.put("placeTypeID", roadID);
//							analyserOverSpeedRoadCYServices.createOverSpeedRoadCY(osrMap);
//					   }	
//					}
//					
//				}else{
//					List<HashMap<String, String>> PolygonMap3=analyserOverSpeedRoadCYServices.getParamPolygonByName(whereparams);
//					if(PolygonMap3.size()==1){
//						Map<String,String> mapRoadID2=PolygonMap3.get(0);
//						roadID=String.valueOf(mapRoadID2.get("ID"));
//						Map<String,Object> osrMap = new HashMap<String,Object>();
//						osrMap.put("name", map.get("name"));
//						osrMap.put("analyseGroupID",  map.get("analyseGroupID"));
//						osrMap.put("isAlert",  map.get("isAlert"));
//						osrMap.put("checkTimeTypeID",  map.get("checkTimeTypeId"));
//						osrMap.put("checkTimeValue",  map.get("checkTimeValue"));
//						osrMap.put("checkTimeBegin",  map.get("checkTimeBegin"));
//						osrMap.put("checkTimeEnd",  map.get("checkTimeEnd"));
//						osrMap.put("isWarn",  map.get("isWarn"));
//						osrMap.put("soundContent",  map.get("soundContent"));
//						osrMap.put("alertInterval", map.get("alertInterval"));
//						osrMap.put("placeTypeID", roadID);
//						analyserOverSpeedRoadCYServices.createOverSpeedRoadCY(osrMap);
//					}else{
//						 this.renderJSON("false");
//					}
//				}
//			}
//			this.renderJSON("true");
//		 }else{
//			
//		 }
//		} catch (Exception e) {
//			e.printStackTrace();
//		}
//	}
	
	
	
	
	
	@Action(value = "updateOverSpeedRoadCY")
	public void updateOverSpeedRoadCY() {
		Map<String, Object> paramsMap = this.getParameterMap();
		paramsMap.remove("placeTypeID");
		try {
			this.renderJSON(analyserOverSpeedRoadCYServices.updateOverSpeedRoadCY(paramsMap));
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	
	
	@Action(value = "deleteOverSpeedRoadCY")
	public void deleteOverSpeedRoadCY() {

		String ids= getParameter("ids");
		Map<String, Object> whereMap = new HashMap<String, Object>();
		whereMap.put("id", ids);
		try {
			this.renderJSON(analyserOverSpeedRoadCYServices.delOverSpeedRoadCY(whereMap));
			} catch (Exception e) {
				e.printStackTrace();
		}
	}	

	
	
	
}
