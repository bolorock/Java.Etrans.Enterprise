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

import com.etrans.bubiao.auth.SessionUser;
import com.etrans.bubiao.entities.PageBean;
import com.etrans.bubiao.entities.Result;
import com.etrans.bubiao.services.IbatisServices;
import com.etrans.bubiao.sys.UserContext;
import com.etrans.common.util.FlexiGridUtil;
import com.etrans.common.util.ParamKey;

/**
 *  路段限速设置Service
 * @author Administrator
 *
 */
@Service
public class LineQuotaConfigServices {

	@Autowired
	private IbatisServices ibatisServices;
	
	public void setIbatisServices(IbatisServices ibatisServices)
	{
		this.ibatisServices = ibatisServices;
	}
	
	/**
	 * 查询路段信息list列表
	 * @param queryJSON flexGrid的查询条件
	 * @param userID 用户所属企业id
	 * @return 分页对象
	 */
	@SuppressWarnings("unchecked")
	public PageBean findList(String queryJSON,Long workUnitID,long in) throws Exception{
		//返回结果对象
		PageBean pageBean = new PageBean();
		//把FlexiGrid传过来的json参数封装成map对象
		Map params = FlexiGridUtil.parseParam(queryJSON);
		
		//不是超级管理员
		if(!UserContext.isBsRootUser()){
			//企业id
			params.put("workUnitID", workUnitID);
		}
		//工作单位信息list
		List<Map<String,Object>> listInfo = this.ibatisServices.queryForList(Map.class, "getLineQuotaConfigSQL",params);
		//工作单位信息总条数
		Long total= this.getLineQuotaConfigCount(params);
		
		pageBean.setPage((Integer)params.get(ParamKey.PAGE));
		pageBean.setRows(listInfo);
		pageBean.setTotal(total);
		
		return pageBean;
		
	}
	
	/**
	 * 查询路段信息数据总条数
	 * @param params 参数
	 * @return 数据总条数
	 * @throws Exception
	 */
	public Long getLineQuotaConfigCount(Map<String,Object> params) throws Exception {
		
		return this.ibatisServices.findIbatisListCount("getLineQuotaConfigCountSQL", params);
		
	}
	
	
	/**
	 * 判断名称重复
	 * @param whereMap 查询条件
	 * @return 结果对象
	 * @throws Exception 数据库操作异常
	 */
	@SuppressWarnings("unchecked")
	public Result checkLineByName(Map whereMap) throws Exception {
		Result result = new Result();
		List<Map<String,Object>> listInfo = this.ibatisServices.queryForList(Map.class, "getLineQuotaByNameSQL",whereMap);
		if(null!=listInfo){
			result.setData(listInfo.size());//数据
			result.setCode(1);//表示查询有数据
		}
		return result;
	}
	
	
	
	/**
	 * 新增路段限速报警设置
	 * @param params
	 * @return
	 * @throws Exception
	 */
	public Result createQuotaConfig(Map<String,Object> params) throws Exception {
		Result result = new Result();
		params.put("mark", 1);//Mark 表示记录状态，0：正常，1:新增，-1：删除
		
		//保存路线限速报警设置
		Object insertResult = this.ibatisServices.insertIbatisObject("insertTRoadListSQL_Quota", params);
		Integer roadID = (Integer)insertResult;//插入数据后返回的路线id
		params.put("roadID", roadID);
		
		//保存路线限速报警设置明细表
		this.ibatisServices.insertIbatisObject("insertTRoadDetailSQL_Quota", params);
		
		//保存分析组表(分析组名称暂为：用户名称 _时间)
		String groupName = (String)params.get("userName");
		SimpleDateFormat format = new SimpleDateFormat("MMddHH:mm:ss");
		Calendar calendar = Calendar.getInstance(TimeZone.getTimeZone("GMT+08:00"));
		Date date = calendar.getTime();
		groupName = groupName + "_" + format.format(date);
		params.put("groupName",groupName.length()>20 ? groupName.substring(0,19) : groupName);//分析组名称
		insertResult = this.ibatisServices.insertIbatisObject("insertTAnalyseGroupSQL_Quota", params);
		Integer quotaGroupId = (Integer)insertResult;//插入数据后返回的的分析组id
		params.put("quotaGroupId", quotaGroupId);
		
		
		//保存分析条件表数据
		params.put("geographyId", roadID);//线路的信息编号
		params.put("analyseTypeId", 2);//地理类型(1表示点，2表示线，3表示面)
		this.ibatisServices.insertIbatisObject("insertTAnalyseConditionSQL_Quota", params);
		
		//保存分析组与车辆关系表
		String vehicleIds = (String)params.get("vehicleIds");
		if(vehicleIds != null && !vehicleIds.equals("")){
			String[] idArr = vehicleIds.split(",");
			Map<String,Object> map = new HashMap<String,Object>();
			map.put("mark", 1);
			map.put("analyseGroupId", quotaGroupId);//分析组id
			for(int i=0;i<idArr.length;i++){
				map.put("vehicleId", idArr[i]);//车辆id
				this.ibatisServices.insertIbatisObject("insertTANAGroupAndVehicleSQL_Quota", map);
			}
		}
		//成功
		result.setCode(0);
		return result; 
	}
	
	
	/**
	 * 删除线路限速报警设置
	 * @param params
	 * @return
	 * @throws Exception
	 */
	public Result deleteQuotaConfig(Map<String,Object> params) throws Exception {
		Result result = new Result();
		String id = (String)params.get("id");
		if(id != null){
			
			//查询线路限速报警设置详细
			Map<String,Object> areaAlarmConfig = getQuotaConfigInfoById(params);
			
			params.put("mark", -1);
			//删除线路限速报警设置（更新标志）
			this.ibatisServices.updateIbatisObject("updateQaoutConfigSQL", params);
			
			//删除线路限速报警设置明细表（更新标志）
			this.ibatisServices.deleteIbatisObject("deleteTRoadDetailSQL_Qaout", params);
			
			//分析组id
			Long analyseGroupId = (Long)areaAlarmConfig.get("AnalyseGroupID");
			params.put("analyseGroupId", analyseGroupId);
			
			//删除分析组与车辆关系表（更新标志）
			this.ibatisServices.updateIbatisObject("updateTANAGroupAndVehicleSQL_Qaout", params);
			
			//删除分析条件表数据（更新标志）
			Integer analyseTypeID = (Integer)areaAlarmConfig.get("AnalyseTypeID");
			params.put("analyseTypeId", analyseTypeID);
			this.ibatisServices.updateIbatisObject("updateTAnalyseConditionSQL_Qaout", params);
			
			
			//删除分析组表（更新标志）
			this.ibatisServices.updateIbatisObject("updateTAnalyseGroupSQL_Qaout", params);	
			
			//成功
			result.setCode(0);
		}
		return result;
		
	}
	
	/**
	 * 查询线路限速报警设置基本信息
	 * @param params
	 * @return
	 */
	@SuppressWarnings("unchecked")
	public Map<String,Object> getQuotaConfigInfoById(Map params) {
		
		List<Map<String,Object>> list = this.ibatisServices.queryForList(Map.class, "getQaoutConfigByIdSQL",params);
		if(list != null && list.size()>0){
			return list.get(0);
		}
		return null;
	}
	
	/**
	 * 查询线路限速报警设置详细
	 * @param params
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings({ "unchecked" })
	public Map<String,Object> getQuotaConfigById(Map params) throws Exception {
		
		Map<String,Object> lineQuotaConfig = getQuotaConfigInfoById(params);
		
		//分析组id
		Long lineQuotGroupId = (Long)lineQuotaConfig.get("AnalyseGroupID");
		params.put("analyseGroupId", lineQuotGroupId == null ? -1 : lineQuotGroupId);
		
		//车辆
		List<Map<String,Object>> vehicles = getVehiclesByGroupId(params);
		if(lineQuotaConfig != null && vehicles != null && vehicles.size() > 0){
			lineQuotaConfig.put("vehicles",vehicles);
		}
		
		//经纬度
		List<Map<String,Object>> lineQuotaPoints = getQuotaPointById(params);
		if(lineQuotaConfig != null && lineQuotaPoints != null && lineQuotaPoints.size() > 0){
			lineQuotaConfig.put("lineQuotaPoints",lineQuotaPoints);
		}
		
		return lineQuotaConfig;
	}
	
	/**
	 * 查询车辆车牌
	 * @param params
	 * @return
	 */
	@SuppressWarnings("unchecked")
	public List<Map<String,Object>> getVehiclesByGroupId(Map params) {
		
		List<Map<String,Object>> list = this.ibatisServices.queryForList(Map.class, "getVehiclesByGroupIdSQL_Qaout",params);
		if(list != null && list.size()>0){
			return list;
		}
		return null;
	}
	
	/**
	 * 查询相关线路限速点
	 * @param params
	 * @return
	 */
	@SuppressWarnings("unchecked")
	public List<Map<String,Object>> getQuotaPointById(Map params) {
		
		List<Map<String,Object>> list = this.ibatisServices.queryForList(Map.class, "getAreaPointByIdSQL_Qaout",params);
		if(list != null && list.size()>0){
			return list;
		}
		return null;
	}
	
}
