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
import com.etrans.common.util.FlexiGridUtil;
import com.etrans.common.util.ParamKey;

/**
 *  区域报警设置Service
 * @author Administrator
 *
 */
@Service
public class AreaAlarmConfigServices {

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
	 * 查询区域报警设置列表
	 * @param queryJSON flexGrid的查询条件
	 * @return 分页对象
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public PageBean findAreaAlarmConfigList(Map params,long in) throws Exception{
		
		PageBean pageBean = new PageBean();
		
		List<Map<String,Object>> listInfo = this.ibatisServices.queryForList(Map.class, "getAreaAlarmConfigSQL",params);
		Long total= this.ibatisServices.findIbatisListCount("getAreaAlarmConfigCountSQL", params);
		
		pageBean.setPage((Integer)params.get(ParamKey.PAGE));
		pageBean.setRows(listInfo);
		pageBean.setTotal(total);
		
		return pageBean;
		
	}
	
	/**
	 * 区域报警设置名称唯一验证
	 * @param whereMap
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public Result checkAreaConfigName(Map whereMap) throws Exception {
		
		Result result = new Result();
		List<Map<String,Object>> list = this.ibatisServices.queryForList(Map.class, "checkAreaConfigNameSQL",whereMap);
		result.setCode(1);
		result.setData(list.size());
		return result;
	}
	
	/**
	 * 新增区域报警设置
	 * @param params
	 * @return
	 * @throws Exception
	 */
	public void createAreaAlarmConfig(Map<String,Object> params) {

		params.put("mark", 1);
		
		//保存区域报警设置
		Object insertResult = this.ibatisServices.insertIbatisObject("insertAreaAlarmConfigSQL", params);
		Integer polygonId = (Integer)insertResult;
		params.put("polygonId", polygonId);
		
		//保存区域报警设置明细表
		this.ibatisServices.insertIbatisObject("insertTPolygonDetailSQL", params);
		
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
		params.put("geographyId", polygonId);
		params.put("analyseTypeId", 3);
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
	 * 查询区域报警设置详细
	 * @param params
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public Map<String,Object> getAreaAlarmConfigById(Map params) throws Exception {
		
		Map<String,Object> areaAlarmConfig = getAreaAlarmConfigInfoById(params);
		
		Long analyseGroupId = (Long)areaAlarmConfig.get("AnalyseGroupID");
		params.put("analyseGroupId", analyseGroupId == null ? -1 : analyseGroupId);
		
		List<Map<String,Object>> vehicles = getVehiclesByGroupId(params);
		if(areaAlarmConfig != null && vehicles != null && vehicles.size() > 0){
			areaAlarmConfig.put("vehicles",vehicles);
		}
		
		List<Map<String,Object>> areaPoints = getAreaPointById(params);
		if(areaAlarmConfig != null && areaPoints != null && areaPoints.size() > 0){
			areaAlarmConfig.put("areaPoints",areaPoints);
		}
		
		
		return areaAlarmConfig;
	}
	
	/**
	 * 查询区域报警设置基本信息
	 * @param params
	 * @return
	 */
	public Map<String,Object> getAreaAlarmConfigInfoById(Map params) {
		
		List<Map<String,Object>> list = this.ibatisServices.queryForList(Map.class, "getAreaAlarmConfigByIdSQL",params);
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
	public List<Map<String,Object>> getAreaPointById(Map params) {
		
		List<Map<String,Object>> list = this.ibatisServices.queryForList(Map.class, "getAreaPointByIdSQL",params);
		if(list != null && list.size()>0){
			return list;
		}
		return null;
	}
	
	/**
	 * 删除区域报警设置
	 * @param params
	 * @return
	 * @throws Exception
	 */
	public void deleteAreaAlarmConfig(Map<String,Object> params) throws Exception {
		
		String id = (String)params.get("id");

		if(id != null){
			
			//查询区域报警设置详细
			Map<String,Object> areaAlarmConfig = getAreaAlarmConfigInfoById(params);
			
			params.put("mark", -1);
			//删除区域报警设置（更新标志）
			this.ibatisServices.updateIbatisObject("updateAreaAlarmConfigSQL", params);
			
			//删除区域报警设置明细表
			this.ibatisServices.deleteIbatisObject("deleteTPolygonDetailSQL", params);
			
			Long analyseGroupId = (Long)areaAlarmConfig.get("AnalyseGroupID");
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
