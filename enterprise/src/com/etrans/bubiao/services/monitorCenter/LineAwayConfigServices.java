package com.etrans.bubiao.services.monitorCenter;

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.TimeZone;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.etrans.bubiao.entities.PageBean;
import com.etrans.bubiao.entities.Result;
import com.etrans.bubiao.services.IbatisServices;
import com.etrans.common.util.ParamKey;

/**
 *  区域报警设置Service
 * @author Administrator
 *
 */
@Service
public class LineAwayConfigServices {

	@Autowired
	private IbatisServices ibatisServices;
	
	public void setIbatisServices(IbatisServices ibatisServices)
	{
		this.ibatisServices = ibatisServices;
	}
	
	public IbatisServices getIbatisServices() {
		return ibatisServices;
	}

	/**
	 * 查询路线偏移设置列表
	 * @param queryJSON flexGrid的查询条件
	 * @return 分页对象
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public PageBean findLineAwayConfigList(Map params,long in) throws Exception{
		
		PageBean pageBean = new PageBean();
		
		List<Map<String,Object>> listInfo = this.ibatisServices.queryForList(Map.class, "getLineAwayConfigSQL",params);
		Long total= this.ibatisServices.findIbatisListCount("getLineAwayConfigCountSQL", params);
		
		pageBean.setPage((Integer)params.get(ParamKey.PAGE));
		pageBean.setRows(listInfo);
		pageBean.setTotal(total);
		
		return pageBean;
		
	}
	
	/**
	 * 路线偏移设置名称唯一验证
	 * @param whereMap
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public Result checkLineAwayName(Map whereMap) throws Exception {
		
		Result result = new Result();
		List<Map<String,Object>> list = this.ibatisServices.queryForList(Map.class, "checkLineAwayNameSQL",whereMap);
		result.setCode(1);
		result.setData(list.size());
		return result;
	}
	
	/**
	 * 新增路线偏移设置
	 * @param params
	 * @return
	 * @throws Exception
	 */
	public void createLineAwayConfig(Map<String,Object> params) {

		params.put("mark", 1);
		
		//保存区域报警设置
		Object insertResult = this.ibatisServices.insertIbatisObject("insertLineAwayConfigSQL", params);
		Integer lineAwayId = (Integer)insertResult;
		
		//保存区域报警设置明细表
		params.put("lineAwayId", lineAwayId);
		this.ibatisServices.insertIbatisObject("insertTRoadDetailSQL", params);
		
		//保存分析组表(分析组名称暂为：用户名称 _时间)
		String groupName = (String)params.get("userName");
		SimpleDateFormat format = new SimpleDateFormat("MMddHH:mm:ss");
		Calendar calendar = Calendar.getInstance(TimeZone.getTimeZone("GMT+08:00"));
		Date date = calendar.getTime();
		groupName = groupName + "_" + format.format(date);
		params.put("groupName",groupName.length()>20 ? groupName.substring(0, 19) : groupName);
		insertResult = this.ibatisServices.insertIbatisObject("insertTAnalyseGroupSQL", params);
		Integer analyseGroupId = (Integer)insertResult;
		params.put("analyseGroupId", analyseGroupId);
		
		//保存分析条件表数据
		params.put("geographyId", lineAwayId);
		params.put("analyseTypeId", 2);
		this.ibatisServices.insertIbatisObject("insertTAnalyseConditionSQL", params);
		
		//保存分析组与车辆关系表
		String vehicleIds = (String)params.get("vehicleIds");
		if(vehicleIds != null && !vehicleIds.equals("")){
			String[] idArr = vehicleIds.split(",");
			Map<String,Object> map = new HashMap<String,Object>();
			map.put("analyseGroupId", analyseGroupId);
			map.put("mark", 1);
			for(int i=0;i<idArr.length;i++){
				map.put("vehicleId", idArr[i]);
				this.ibatisServices.insertIbatisObject("insertTANAGroupAndVehicleSQL", map);
			}
		}
	}
	
	/**
	 * 查询路线偏移设置详细
	 * @param params
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public Map<String,Object> getLineAwayConfigById(Map params) throws Exception {
		
		Map<String,Object> config = getLineAwayConfigInfoById(params);
		
		Long analyseGroupId = (Long)config.get("AnalyseGroupID");
		params.put("analyseGroupId", analyseGroupId == null ? -1 : analyseGroupId);
		
		List<Map<String,Object>> vehicles = getVehiclesByGroupId(params);
		if(config != null && vehicles != null && vehicles.size() > 0){
			config.put("vehicles",vehicles);
		}
		
		List<Map<String,Object>> points = getLinePointById(params);
		if(config != null && points != null && points.size() > 0){
			config.put("points",points);
		}
		
		return config;
	}
	
	/**
	 * 查询基本信息
	 * @param params
	 * @return
	 */
	public Map<String,Object> getLineAwayConfigInfoById(Map params) {
		
		List<Map<String,Object>> list = this.ibatisServices.queryForList(Map.class, "getLineAwayConfigByIdSQL",params);
		if(list != null && list.size()>0){
			return list.get(0);
		}
		return null;
	}
	
	/**
	 * 查询车辆车牌
	 * @param params
	 * @return
	 */
	public List<Map<String,Object>> getVehiclesByGroupId(Map params) {
		
		List<Map<String,Object>> list = this.ibatisServices.queryForList(Map.class, "getVehiclesByGroupIdSQL",params);
		if(list != null && list.size()>0){
			return list;
		}
		return null;
	}
	
	/**
	 * 查询相关区域点
	 * @param params
	 * @return
	 */
	public List<Map<String,Object>> getLinePointById(Map params) {
		
		List<Map<String,Object>> list = this.ibatisServices.queryForList(Map.class, "getLinePointByIdSQL",params);
		if(list != null && list.size()>0){
			return list;
		}
		return null;
	}
	
	/**
	 * 删除路线偏移设置
	 * @param params
	 * @return
	 * @throws Exception
	 */
	public void deleteLineAwayConfig(Map<String,Object> params) throws Exception {
		
		String id = (String)params.get("id");

		if(id != null){
			
			//查询详细
			Map<String,Object> config = getLineAwayConfigInfoById(params);
			
			params.put("mark", -1);
			//删除路线偏移设置（更新标志）
			this.ibatisServices.updateIbatisObject("updateLineAwayConfigSQL", params);
			
			//删除路线偏移设置明细表
			this.ibatisServices.deleteIbatisObject("deleteTRoadDetailSQL", params);
			
			Long analyseGroupId = (Long)config.get("AnalyseGroupID");
			params.put("analyseGroupId", analyseGroupId);
			
			//删除分析组与车辆关系表（更新标志）
			this.ibatisServices.updateIbatisObject("updateTANAGroupAndVehicleSQL", params);
			
			//删除分析组表（更新标志）
			this.ibatisServices.updateIbatisObject("updateTAnalyseGroupSQL", params);
			
			//删除分析条件表数据（更新标志）
			params.put("analyseTypeId", 3);
			this.ibatisServices.updateIbatisObject("updateTAnalyseConditionSQL", params);
			
		}
	}
	
}
