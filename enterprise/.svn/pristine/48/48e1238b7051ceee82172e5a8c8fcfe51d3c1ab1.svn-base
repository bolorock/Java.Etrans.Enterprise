package com.etrans.bubiao.services;



import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.etrans.bubiao.auth.SessionUser;
import com.etrans.bubiao.entities.ANAParamPolys;
import com.etrans.bubiao.entities.PageBean;
import com.etrans.bubiao.entities.Result;
import com.etrans.bubiao.sys.UserContext;
import com.etrans.common.util.FlexiGridUtil;
import com.etrans.common.util.ParamKey;
import com.etrans.common.util.json.JSONUtil;


@Service
public class AnalyserOverSpeedPolyServices {

	@Autowired
	private IbatisServices ibatisServices;
	
	public void setIbatisServices(IbatisServices ibatisServices)
	{
		this.ibatisServices = ibatisServices;
	}
	
	
	@SuppressWarnings("unchecked")
	public PageBean findOverSpeedPoly(String queryJSON) throws Exception{
		PageBean pageBean = new PageBean();
		Map params = FlexiGridUtil.parseParam(queryJSON);
		
		/**数据权限参数设置**/
		params=UserContext.putUserParams(params);
		
		List<Map<String,Object>> listInfo = this.ibatisServices.queryForList(Map.class, "findOverSpeedPolySQL",params);
		Long total= this.getOverSpeedPolyCount(params);
		pageBean.setPage((Integer)params.get(ParamKey.PAGE));
		pageBean.setRows(listInfo);
		pageBean.setTotal(total);
		return pageBean;
		
	}
	
	
	public Long getOverSpeedPolyCount(Map<String,Object> params) throws Exception {
		return this.ibatisServices.findIbatisListCount("getOverSpeedPolyCountSQL", params);
		
	}
	
	
	
	/**
	 * 判断名称重复
	 * @param whereMap
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings("unchecked")
	public Result checkOverSpeedPolyByName(Map whereMap) throws Exception {
		
		Result result = new Result();
		List<Map<String,Object>> list = this.ibatisServices.queryForList(Map.class, "checkOverSpeedPolyByNameSQL",whereMap);
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
	public String getOverSpeedPolyById1(Map<String,Object> whereMap) throws Exception {
		return	JSONUtil.toJson(this.ibatisServices.findIbatisList("getOverSpeedPolyByIdSQL", whereMap));
		
	}
	
	/**
	 * 由ID查询详细
	 * @param whereMap
	 * @return
	 * @throws Exception
	 */
	public List<Map<String,Object>> getOverSpeedPolyById(Map whereMap)throws Exception{
		List<Map<String,Object>> listInfo=this.ibatisServices.queryForList(Map.class, "getOverSpeedPolyByIdSQL", whereMap);
		return listInfo;
	}
	

	/**
	 * 新增区域弯道超速 
	 * @param paramMap
	 * @throws Exception
	 */
	public void createOverSpeedPoly(Map<String, Object> paramMap)
	throws Exception {
		ibatisServices.insertIbatisObject("insertOverSpeedPolySQL", paramMap);
	 }
	
	/**
	 * 新增区域 
	 * @param paramMap
	 * @throws Exception
	 */
	public Long createParamPolys(ANAParamPolys p)
	throws Exception {
		//ibatisServices.insertIbatisObject("insertParamPolygonSQL", paramMap);
		return this.ibatisServices.insertReturnId("insertParamPolysSQL", p);
		
	 }
	
	/**
	 * 新增区域明细
	 * @param paramMap
	 * @throws Exception
	 */
	public void createParamPolyPoints(Map<String, Object> paramMap)
	throws Exception {
		ibatisServices.insertIbatisObject("insertParamPolyPointsSQL", paramMap);
		//return ((Long)this.ibatisServices.insertReturnId("insertParamPolygonDetailSQL", pd));
	 }

	
	
	
	public Object updateOverSpeedPoly(Map<String,Object> whereMap) throws Exception {
		
		return this.ibatisServices.updateIbatisObject("updateOverSpeedPolySQL", whereMap);
		
	}
	
	public Object delOverSpeedPoly(Map<String,Object> whereMap) throws Exception {
		
		return this.ibatisServices.deleteIbatisObject("delOverSpeedPolySQL", whereMap);
		
	}
	
	

	
	
	
	

	
	
}
