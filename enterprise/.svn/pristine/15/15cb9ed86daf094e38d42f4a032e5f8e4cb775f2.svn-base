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

import com.etrans.bubiao.auth.SessionUser;
import com.etrans.bubiao.entities.ANABasePlaceTypes;
import com.etrans.bubiao.services.AnalyserInOutPlaceReportServices;
import com.etrans.bubiao.sys.UserContext;
import com.etrans.common.util.CalendarUtil;


@Controller
@Scope("prototype")
@Namespace("/analyse")
public class AnalyserInOutPlaceReportAction extends BaseAction{
	
	private static final long serialVersionUID = 1L;
	
	protected Logger log = LogManager.getLogger(this.getClass().getName());
	
	@Autowired
	private AnalyserInOutPlaceReportServices analyserInOutPlaceReportServices;

	
	public AnalyserInOutPlaceReportServices getAnalyserInOutPlaceReportServices() {
		return analyserInOutPlaceReportServices;
	}

	public void setAnalyserInOutPlaceReportServices(
			AnalyserInOutPlaceReportServices analyserInOutPlaceReportServices) {
		this.analyserInOutPlaceReportServices = analyserInOutPlaceReportServices;
	}

	@Action(value="findInOutPolyList")
	public void findInOutPolyList(){
		try {
			
			this.renderJSON(analyserInOutPlaceReportServices.findInOutPolys(this.getGridParams()));
		} catch (Exception e) {
			e.printStackTrace();
		}
		
	}
	
	/**
	 * 判断名称重复
	 */
	@Action(value = "checkInOutPolyByName")
	public void checkInOutPolyByName() {
		String name = getParameter("name");
		String id = getParameter("id");
		Map<String,Object> whereMap = new HashMap<String,Object>();
		whereMap.put("name", name);
		whereMap.put("id", id);
		try {
			this.renderJSON(analyserInOutPlaceReportServices.checkInOutPolyByName(whereMap));
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	
	
	
	@Action(value = "getInOutPolyById")
	public void getInOutPolyById() {
		String id = getParameter("id");
		Map<String, Object> whereMap = new HashMap<String, Object>();
		whereMap.put("id", id);
		try {
			this.renderJSON(analyserInOutPlaceReportServices.getInOutPolyById(whereMap));
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	@Action(value = "createInOutPoly")
	public void createInOutPoly(){
		try {
			SessionUser users = UserContext.getLoginUser();
			Map<String,Object> map = this.getParameterMap();
			if(map!=null && map.size()>0){
			map.remove("id");//删除id（修改才会用到）
			
			Map<String, Object> areaMap = new HashMap<String, Object>();
			areaMap.put("areaId", map.get("placeTypeID"));
			List<HashMap<String, String>> customMapLayerMap=analyserInOutPlaceReportServices.getPointNames(areaMap);
			
			String planeName=null;
			String Longitude=null;
			String Latitude=null;
			
			if(customMapLayerMap != null && customMapLayerMap.size()>0){
				
				Map<String,String> mapId=customMapLayerMap.get(0);
				planeName = String.valueOf(mapId.get("name"));
				Longitude=String.valueOf(mapId.get("longitude"));
				Latitude=String.valueOf(mapId.get("latitude"));
				
			
				ANABasePlaceTypes  p=new ANABasePlaceTypes();
				p.setId(Long.valueOf("0"));
				p.setGroupID(users.getWorkUnitID());
				p.setName(planeName);
				p.setDescription("");
				Long typeID=analyserInOutPlaceReportServices.createBasePlaceTypes(p);
			
				if(typeID!=null){
					Map<String,Object> whereparams = new HashMap<String,Object>();
					whereparams.put("name", planeName);
					whereparams.put("longitude", Longitude);
					whereparams.put("latitude", Latitude);
					whereparams.put("groupID", users.getWorkUnitID());	
					whereparams.put("typeID", typeID);
					whereparams.put("autoTime", CalendarUtil.Now());
					whereparams.put("description", "");
					analyserInOutPlaceReportServices.createParamPlaces(whereparams);
				}
			
				
				Map<String,Object> osrMap = new HashMap<String,Object>();
				osrMap.put("name", map.get("name"));
				osrMap.put("analyseGroupID",  map.get("analyseGroupID"));
				osrMap.put("isAlert",  map.get("isAlert"));
				osrMap.put("checkTimeTypeID",  map.get("checkTimeTypeID"));
				osrMap.put("checkTimeValue",  map.get("checkTimeValue"));
				osrMap.put("checkTimeBegin",  map.get("checkTimeBegin"));
				osrMap.put("checkTimeEnd",  map.get("checkTimeEnd"));
				osrMap.put("bounceDistance",  map.get("bounceDistance"));
				osrMap.put("bounceTime", map.get("bounceTime"));
				osrMap.put("placeTypeID", typeID);
				analyserInOutPlaceReportServices.createInOutPoly(osrMap);
				
						
				
			
			}
			this.renderJSON("true");
		 }else{
			
		 }
		} catch (Exception e) {
			e.printStackTrace();
		}
	}


	
	@Action(value = "updateInOutPoly")
	public void updateInOutPoly() {
		Map<String, Object> paramsMap = this.getParameterMap();
		paramsMap.remove("placeTypeID");
		try {
			this.renderJSON(analyserInOutPlaceReportServices.updateInOutPoly(paramsMap));
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	
	
	@Action(value = "delInOutPoly")
	public void delInOutPoly() {

		String ids= getParameter("ids");
		Map<String, Object> whereMap = new HashMap<String, Object>();
		whereMap.put("id", ids);
		try {
			this.renderJSON(analyserInOutPlaceReportServices.delInOutPoly(whereMap));
			} catch (Exception e) {
				e.printStackTrace();
		}
	}	

	
	
	
}
