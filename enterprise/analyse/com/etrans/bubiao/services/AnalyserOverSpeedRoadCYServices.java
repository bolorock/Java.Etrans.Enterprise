package com.etrans.bubiao.services;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.etrans.bubiao.auth.SessionUser;
import com.etrans.bubiao.entities.ANAParamPolygon;
import com.etrans.bubiao.entities.PageBean;
import com.etrans.bubiao.entities.Result;
import com.etrans.bubiao.sys.UserContext;
import com.etrans.common.util.FlexiGridUtil;
import com.etrans.common.util.ParamKey;
import com.etrans.common.util.json.JSONUtil;


@Service
public class AnalyserOverSpeedRoadCYServices {

	@Autowired
	private IbatisServices ibatisServices;
	
	public void setIbatisServices(IbatisServices ibatisServices)
	{
		this.ibatisServices = ibatisServices;
	}
	
	
	@SuppressWarnings("unchecked")
	public PageBean findAnalyserOverSpeedRoadCY(String queryJSON) throws Exception{
		PageBean pageBean = new PageBean();
		Map params = FlexiGridUtil.parseParam(queryJSON);
		
		/**数据权限参数设置**/
		params=UserContext.putUserParams(params);
		
		List<Map<String,Object>> listInfo = this.ibatisServices.queryForList(Map.class, "findAnalyserOverSpeedRoadCYSQL",params);
		Long total= this.getAnalyserOverSpeedRoadCYCount(params);
		pageBean.setPage((Integer)params.get(ParamKey.PAGE));
		pageBean.setRows(listInfo);
		pageBean.setTotal(total);
		return pageBean;
		
	}
	
	
	public Long getAnalyserOverSpeedRoadCYCount(Map<String,Object> params) throws Exception {
		return this.ibatisServices.findIbatisListCount("getAnalyserOverSpeedRoadCYCountSQL", params);
		
	}
	
	
	
	/**
	 * 判断名称重复
	 * @param whereMap
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings("unchecked")
	public Result checkAnalyserOverSpeedRoadCYByName(Map whereMap) throws Exception {
		
		Result result = new Result();
		List<Map<String,Object>> list = this.ibatisServices.queryForList(Map.class, "checkAnalyserOverSpeedRoadCYByNameSQL",whereMap);
		result.setCode(1);
		result.setData(list.size());
		return result;
	}
	
	
	/**
	 * 由ID查询详细
	 * @param whereMap
	 * @return
	 * @throws Exception
	 */
	public String getAnalyserOverSpeedRoadCYById1(Map<String,Object> whereMap) throws Exception {
		return	JSONUtil.toJson(this.ibatisServices.findIbatisList("getAnalyserOverSpeedRoadCYByIdSQL", whereMap));
		
	}
	
	/**
	 * 由ID查询详细
	 * @param whereMap
	 * @return
	 * @throws Exception
	 */
	public List<Map<String,Object>> getAnalyserOverSpeedRoadCYById(Map whereMap)throws Exception{
		List<Map<String,Object>> listInfo=this.ibatisServices.queryForList(Map.class, "getAnalyserOverSpeedRoadCYByIdSQL", whereMap);
		return listInfo;
	}
	

	/**
	 * 新增道路超速报警(长运) 
	 * @param paramMap
	 * @throws Exception
	 */
	public void createOverSpeedRoadCY(Map<String, Object> paramMap)
	throws Exception {
		ibatisServices.insertIbatisObject("insertAnalyserOverSpeedRoadCYSQL", paramMap);
	 }
	
	/**
	 * 新增区域区域 
	 * @param paramMap
	 * @throws Exception
	 */
	public Long createParamPolygon(ANAParamPolygon p)
	throws Exception {
		//ibatisServices.insertIbatisObject("insertParamPolygonSQL", paramMap);
		return this.ibatisServices.insertReturnId("insertParamPolygonSQL", p);
		
	 }
	
	/**
	 * 新增区域明细
	 * @param paramMap
	 * @throws Exception
	 */
	public void createParamPolygonDetail(Map<String, Object> paramMap)
	throws Exception {
		ibatisServices.insertIbatisObject("insertParamPolygonDetailSQL", paramMap);
		//return ((Long)this.ibatisServices.insertReturnId("insertParamPolygonDetailSQL", pd));
	 }

	
	
	/**
	 * 区域面查询
	 * 
	 * @param paramMap
	 * @return
	 */
	public List<HashMap<String, String>> getCustomMapPlaneNameById(
			Map<String, Object> paramMap) {
		try {
			List<HashMap<String, String>> resultstr = ibatisServices.findIbatisList("getCustomMapPlaneNameByIdSQL",paramMap);
			return resultstr;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}
	
	
	/**
	 * 取分析器区域
	 * @param paramMap
	 * @return
	 */
	public List<HashMap<String, String>> getParamPolygonByName(
			Map<String, Object> paramMap) {
		try {
			List<HashMap<String, String>> resultstr = ibatisServices.findIbatisList("getParamPolygonByNameSQL",paramMap);
			return resultstr;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}
	
	
	
	
	
	/**
	 * 区域面坐标
	 * 
	 * @param paramMap
	 * @return
	 */
	public List<HashMap<String, String>> getCustomMapPlaneLonLatById(
			Map<String, Object> paramMap) {

		try {
			List<HashMap<String, String>> resultstr = ibatisServices.findIbatisList("getCustomMapPlaneLonLatByIdSQL", paramMap);
			return resultstr;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}
	
	
	/**
	 * 取道路超速报警名称
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings("unchecked")
	public List<Map<String,Object>> getAnalyserOverSpeedRoadCYByName() throws Exception {
		List<Map<String,Object>> list = this.ibatisServices.queryForList(Map.class, "getAnalyserOverSpeedRoadCYByNameSQL",new HashMap());
		return list;
	}
	
	public Object updateOverSpeedRoadCY(Map<String,Object> whereMap) throws Exception {
		
		return this.ibatisServices.updateIbatisObject("updateOverSpeedRoadCYSQL", whereMap);
		
	}
	
	public Object delOverSpeedRoadCY(Map<String,Object> whereMap) throws Exception {
		
		return this.ibatisServices.deleteIbatisObject("delOverSpeedRoadCYSQL", whereMap);
		
	}
	
	

	
	
	
	

	
	
}
