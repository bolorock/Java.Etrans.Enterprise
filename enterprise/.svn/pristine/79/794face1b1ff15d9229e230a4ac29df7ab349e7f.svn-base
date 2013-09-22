package com.etrans.bubiao.services;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.etrans.bubiao.auth.SessionUser;
import com.etrans.bubiao.entities.ANABasePlaceTypes;
import com.etrans.bubiao.entities.PageBean;
import com.etrans.bubiao.entities.Result;
import com.etrans.bubiao.sys.UserContext;
import com.etrans.common.util.FlexiGridUtil;
import com.etrans.common.util.ParamKey;
import com.etrans.common.util.json.JSONUtil;


@Service
public class AnalyserInOutPlaceReportServices {

	@Autowired
	private IbatisServices ibatisServices;
	
	public void setIbatisServices(IbatisServices ibatisServices)
	{
		this.ibatisServices = ibatisServices;
	}
	
	/**
	 * 查询
	 * @param queryJSON
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings("unchecked")
	public PageBean findInOutPolys(String queryJSON) throws Exception{
		PageBean pageBean = new PageBean();
		Map params = FlexiGridUtil.parseParam(queryJSON);
		
		/**数据权限参数设置**/
		params=UserContext.putUserParams(params);
		
		List<Map<String,Object>> listInfo = this.ibatisServices.queryForList(Map.class, "findInOutPolySQL",params);
		Long total= this.getInOutPolyCount(params);
		pageBean.setPage((Integer)params.get(ParamKey.PAGE));
		pageBean.setRows(listInfo);
		pageBean.setTotal(total);
		return pageBean;
		
	}
	
	
	public Long getInOutPolyCount(Map<String,Object> params) throws Exception {
		return this.ibatisServices.findIbatisListCount("getInOutPolyCountSQL", params);
		
	}
	
	
	
	/**
	 * 判断名称重复
	 * @param whereMap
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings("unchecked")
	public Result checkInOutPolyByName(Map whereMap) throws Exception {
		
		Result result = new Result();
		List<Map<String,Object>> list = this.ibatisServices.queryForList(Map.class, "checkInOutPolyByNameSQL",whereMap);
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
	public String getInOutPolyById1(Map<String,Object> whereMap) throws Exception {
		return	JSONUtil.toJson(this.ibatisServices.findIbatisList("getInOutPolyByIdSQL", whereMap));
		
	}
	
	/**
	 * 由ID查询详细
	 * @param whereMap
	 * @return
	 * @throws Exception
	 */
	public List<Map<String,Object>> getInOutPolyById(Map whereMap)throws Exception{
		List<Map<String,Object>> listInfo=this.ibatisServices.queryForList(Map.class, "getInOutPolyByIdSQL", whereMap);
		return listInfo;
	}
	

	/**
	 * 新增--进出站点报警设置 
	 * @param paramMap
	 * @throws Exception
	 */
	public void createInOutPoly(Map<String, Object> paramMap)
	throws Exception {
		ibatisServices.insertIbatisObject("insertInOutPolySQL", paramMap);
	 }
	
	
	
	/**
	 * 新增区（地物点类型）
	 * @param paramMap
	 * @throws Exception
	 */
	

	public Long createBasePlaceTypes(ANABasePlaceTypes pt)
	throws Exception {
		//ibatisServices.insertIbatisObject("insertParamPolygonSQL", paramMap);
		return this.ibatisServices.insertReturnId("insertBasePlaceTypesSQL", pt);
		
	 }
	
	
	/**
	 * 新增区（地物点坐标）
	 * @param paramMap
	 * @throws Exception
	 */
	public void createParamPlaces(Map<String, Object> paramMap)
	throws Exception {
		ibatisServices.insertIbatisObject("insertParamPlacesSQL", paramMap);
	 }
	
	/**
	 * 区域面查询（地物点）
	 * 
	 * @param paramMap
	 * @return
	 */
	public List<HashMap<String, String>> getPointNames(
			Map<String, Object> paramMap) {
		try {
			List<HashMap<String, String>> resultstr = ibatisServices.findIbatisList("getPointNamesSQL",paramMap);
			return resultstr;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}
	
	
	
	
	
	
	
	
	
	
	
	/**
	 * 编辑
	 * @param whereMap
	 * @return
	 * @throws Exception
	 */
	public Object updateInOutPoly(Map<String,Object> whereMap) throws Exception {
		
		return this.ibatisServices.updateIbatisObject("updateInOutPolySQL", whereMap);
		
	}
	
	/**
	 * 删除
	 * @param whereMap
	 * @return
	 * @throws Exception
	 */
	public Object delInOutPoly(Map<String,Object> whereMap) throws Exception {
		
		return this.ibatisServices.deleteIbatisObject("delInOutPolySQL", whereMap);
		
	}
	
	

	
	
	
	

	
	
}
