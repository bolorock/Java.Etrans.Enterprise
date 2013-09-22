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
import com.etrans.bubiao.entities.ANAParamPolys;
import com.etrans.bubiao.services.AnalyserOverSpeedPolyServices;
import com.etrans.bubiao.services.AnalyserOverSpeedRoadCYServices;
import com.etrans.bubiao.sys.UserContext;


@Controller
@Scope("prototype")
@Namespace("/analyse")
public class AnalyserOverSpeedPolyAction extends BaseAction{
	
	private static final long serialVersionUID = 1L;
	
	protected Logger log = LogManager.getLogger(this.getClass().getName());
	
	@Autowired
	private AnalyserOverSpeedPolyServices analyserOverSpeedPolyServices;
	
	
	public AnalyserOverSpeedPolyServices getAnalyserOverSpeedPolyServices() {
		return analyserOverSpeedPolyServices;
	}

	public void setAnalyserOverSpeedPolyServices(
			AnalyserOverSpeedPolyServices analyserOverSpeedPolyServices) {
		this.analyserOverSpeedPolyServices = analyserOverSpeedPolyServices;
	}



	@Autowired
	private AnalyserOverSpeedRoadCYServices analyserOverSpeedRoadCYServices;

	
	public AnalyserOverSpeedRoadCYServices getAnalyserOverSpeedRoadCYServices() {
		return analyserOverSpeedRoadCYServices;
	}

	public void setAnalyserOverSpeedRoadCYServices(
			AnalyserOverSpeedRoadCYServices analyserOverSpeedRoadCYServices) {
		this.analyserOverSpeedRoadCYServices = analyserOverSpeedRoadCYServices;
	}

	
	@Action(value="findOverSpeedPolyList")
	public void findOverSpeedPolyList(){
		try {
			this.renderJSON(analyserOverSpeedPolyServices.findOverSpeedPoly(this.getGridParams()));
		} catch (Exception e) {
			e.printStackTrace();
		}
		
	}
	
	/**
	 * 判断名称重复
	 */
	@Action(value = "checkOverSpeedPolyByName")
	public void checkOverSpeedPolyByName() {
		String name = getParameter("name");
		String id = getParameter("id");
		Map<String,Object> whereMap = new HashMap<String,Object>();
		whereMap.put("name", name);
		whereMap.put("id", id);
		try {
			this.renderJSON(analyserOverSpeedPolyServices.checkOverSpeedPolyByName(whereMap));
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	
	
	
	@Action(value = "getOverSpeedPolyById")
	public void getOverSpeedPolyById() {
		String id = getParameter("id");
		Map<String, Object> whereMap = new HashMap<String, Object>();
		whereMap.put("id", id);
		try {
			this.renderJSON(analyserOverSpeedPolyServices.getOverSpeedPolyById(whereMap));
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	@Action(value = "createOverSpeedPoly")
	public void createOverSpeedPoly(){
		try {
			SessionUser users = UserContext.getLoginUser();
			Map<String,Object> map = this.getParameterMap();
			if(map!=null && map.size()>0){
			map.remove("id");//删除id（修改才会用到）
			
			Map<String, Object> areaMap = new HashMap<String, Object>();
			areaMap.put("areaId", map.get("polyID"));
			List<HashMap<String, String>> customMapLayerMap=analyserOverSpeedRoadCYServices.getCustomMapPlaneNameById(areaMap);
			
			String PolyName=null;
			
			if(customMapLayerMap != null && customMapLayerMap.size()>0){
				
				Map<String,String> mapId=customMapLayerMap.get(0);
				PolyName = String.valueOf(mapId.get("name"));
				Map<String,Object> whereparams = new HashMap<String,Object>();
				whereparams.put("name", PolyName);
				
				ANAParamPolys  p=new ANAParamPolys();
				p.setId(Long.valueOf("0"));
				p.setGroupID(users.getWorkUnitID());
				p.setName(PolyName);
				p.setLatitude(Float.parseFloat("0"));
				p.setLongitude(Float.parseFloat("0"));
				Long polyID=analyserOverSpeedPolyServices.createParamPolys(p);
				
				List<HashMap<String, String>> pointList=analyserOverSpeedRoadCYServices.getCustomMapPlaneLonLatById(areaMap);
				
				if(pointList!=null && pointList.size()>0){
					String Longitude=null;
					String Latitude=null;
					for (Map<String, String> point : pointList) {
						Longitude=String.valueOf(point.get("longitude"));
						Latitude=String.valueOf(point.get("latitude"));
						Map<String,Object> paramMap = new HashMap<String,Object>();
						paramMap.put("polyID", polyID);
						paramMap.put("longitude", Longitude);
						paramMap.put("latitude", Latitude);
						analyserOverSpeedPolyServices.createParamPolyPoints(paramMap);
				    } 
				}
				
				Map<String,Object> osrMap = new HashMap<String,Object>();
				osrMap.put("name", map.get("name"));
				osrMap.put("analyseGroupID",  map.get("analyseGroupID"));
				osrMap.put("polyID", polyID);
				osrMap.put("roundSpeedMax",  map.get("roundSpeedMax"));
				osrMap.put("warningDistance",  map.get("warningDistance"));
				osrMap.put("continuousPoints",  map.get("continuousPoints"));
				osrMap.put("waringTimeOut",  map.get("waringTimeOut"));
				
				analyserOverSpeedPolyServices.createOverSpeedPoly(osrMap);	
			
			}
			this.renderJSON("true");
		 }else{
			
		 }
		} catch (Exception e) {
			e.printStackTrace();
		}
	}


	
	
	
	
	@Action(value = "updateOverSpeedPoly")
	public void updateOverSpeedPoly() {
		Map<String, Object> paramsMap = this.getParameterMap();
		paramsMap.remove("polyID");
		try {
			this.renderJSON(analyserOverSpeedPolyServices.updateOverSpeedPoly(paramsMap));
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	
	
	@Action(value = "delOverSpeedPoly")
	public void delOverSpeedPoly() {

		String ids= getParameter("ids");
		Map<String, Object> whereMap = new HashMap<String, Object>();
		whereMap.put("id", ids);
		try {
			this.renderJSON(analyserOverSpeedPolyServices.delOverSpeedPoly(whereMap));
			} catch (Exception e) {
				e.printStackTrace();
		}
	}	

	
	
	
}
