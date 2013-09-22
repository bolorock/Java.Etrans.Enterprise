package com.etrans.bubiao.util;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;



public class ResultListManager {

	
	private static ResultListManager resultListManager = new ResultListManager();

	/**
	 * 获取实例
	 * 
	 * @return UniqId
	 */
	public static ResultListManager getInstance() throws Exception {
		if(resultListManager == null){
			resultListManager = new ResultListManager();
		}
		return resultListManager;
	} 
	
	/**
	 * 判断是否为矩形
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public List<Map<String, Object>> checkList(List<Map<String, Object>> lists,Integer id)throws Exception {
		
		List<Map<String, Object>> resultlist = new ArrayList<Map<String, Object>>();

		String longitude1="";
		String latitude1="";
		
		String longitude2="";
		String latitude2="";
		for (int i = 0; i < lists.size(); i++) {
			if(i==0){
				longitude1=lists.get(0).get("longitude").toString();
				latitude1=lists.get(0).get("latitude").toString();
			}else{
				longitude2=lists.get(i).get("longitude").toString();
				latitude2=lists.get(i).get("latitude").toString();
			}
				
		}
		if(lists.size()==2){
			Map param1 = new HashMap<String, Object>();// 附表(ANA_ParamPolygonDetail)
			param1.put("RoadID", id);
			param1.put("IndexNO", 1);
			param1.put("Longitude",longitude1);
			param1.put("Latitude", latitude1);
			
			Map param2 = new HashMap<String, Object>();// 附表(ANA_ParamPolygonDetail)
			param2.put("RoadID", id);
			param2.put("IndexNO", 2);
			param2.put("Longitude", longitude2);
			param2.put("Latitude", latitude1);
			
			Map param3 = new HashMap<String, Object>();// 附表(ANA_ParamPolygonDetail)
			param3.put("RoadID", id);
			param3.put("IndexNO", 3);
			param3.put("Longitude", longitude2);
			param3.put("Latitude", latitude2);
			
			Map param4 = new HashMap<String, Object>();// 附表(ANA_ParamPolygonDetail)
			param4.put("RoadID", id);
			param4.put("IndexNO", 4);
			param4.put("Longitude", longitude1);
			param4.put("Latitude", latitude2);
			
			resultlist.add(param1);
			resultlist.add(param2);
			resultlist.add(param3);
			resultlist.add(param4);
		}else{
			Map param1 = new HashMap<String, Object>();// 附表(ANA_ParamPolygonDetail)
			param1.put("RoadID", id);
			param1.put("IndexNO", 1);
			param1.put("Longitude",longitude1);
			param1.put("Latitude", latitude1);
			
			Map param3 = new HashMap<String, Object>();// 附表(ANA_ParamPolygonDetail)
			param3.put("RoadID", id);
			param3.put("IndexNO", 3);
			param3.put("Longitude", longitude2);
			param3.put("Latitude", latitude2);
			
			resultlist.add(param1);
			resultlist.add(param3);
		}
		return resultlist;
		
	}
}
