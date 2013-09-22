package com.etrans.bubiao.services;

import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.commons.lang.time.DateFormatUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.etrans.bubiao.entities.PageBean;
import com.etrans.bubiao.entities.Result;
import com.etrans.common.util.ParamKey;

/**
 * 司机休息区报警设置Services
 * @author Administrator
 *
 */
@Service
public class AnalyserLiveServices {
	
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
	 * 查询司机休息区报警设置列表
	 * @param params 用户信息
	 * @param in 随机数（控制不调用内存重复数据）
	 * @return PageBean 分页类
	 * @throws Exception sql异常
	 */
	@SuppressWarnings("unchecked")
	public PageBean findAnalyserLiveList(Map params,long in) throws Exception{
		PageBean pageBean = new PageBean();
		
		//查询司机休息区报警设置列表
		List<Map<String,Object>> listInfo  = this.ibatisServices.queryForList(Map.class, "findAnalyserLiveListSQL",params);
		//总条数
		Long total= this.ibatisServices.findIbatisListCount("findAnalyserLiveListCountSQL", params);
		
		pageBean.setPage((Integer)params.get(ParamKey.PAGE));
		pageBean.setRows(listInfo);
		pageBean.setTotal(total);
		
		return pageBean;
		
	}
	
	/**
	 * 检查名称重复
	 * @param map 查询条件
	 * @return 结果对象
	 */
	@SuppressWarnings("unchecked")
	public Result checkName_analyserLive(Map map)throws Exception{
		Result result = new Result();
		
		List<Map<String,Object>> listInfo=this.ibatisServices.queryForList(Map.class, "checkName_analyserLiveSQL", map);
		if(null!=listInfo){
			result.setData(listInfo.size());//数据
			result.setCode(1);//表示查询有数据
		}
		return result;
	}
	
	/**
	 * 检查名称重复
	 * @param map 查询条件
	 * @return 结果对象
	 */
	@SuppressWarnings("unchecked")
	public boolean checkName_analyserLive2(Map map)throws Exception{
		List<Map<String,Object>> listInfo=this.ibatisServices.queryForList(Map.class, "checkName_analyserLiveSQL", map);
		if(listInfo!=null && listInfo.size()>0){
			return true;
		}else{
			return false;
		}
	}
	
	/**
	 * 新增司机休息区报警设置
	 * @param params
	 * @return
	 * @throws Exception
	 */
	public Result addAnalyserLive(Map<String,Object> params) throws Exception {
		
		Result result = new Result();
		
		/**为了统一老架构begin【点下拉框选中是读取新机构的表数据，现在把新架构的数据按老架构的数据库入一条数据】**/
			/**插入ANA_BasePlaceTypes（点类型父表）插入数据**/
			Object insertResult = this.ibatisServices.insertIbatisObject("addBasePlaceTypesSQL_AnalyserLive", params);
			Integer typesID = (Integer)insertResult;
			//类型id
			params.put("typesID", typesID);
			
			/**插入ANA_ParamPlaces（点详细信息表）**/
			/**关键点信息【为了取经纬度】**/
			String longitude="";
			String latitude = "";
			Map<String,Object> whereMap = new HashMap<String,Object>();
			whereMap.put("id", params.get("typeNameId"));
			Map<String,Object> analyesGroupInfo = getAnalyesGroupInfoById(whereMap);
			if(analyesGroupInfo!=null){
				longitude = analyesGroupInfo.get("Longitude").toString();
				latitude = analyesGroupInfo.get("Latitude").toString();
			}
			
			params.put("longitude", longitude);//经度
			params.put("latitude", latitude);//纬度
			//创建时间
			params.put("autoTime", DateFormatUtils.format(new Date(), "yyyy-MM-dd HH:mm:ss"));
			
			/**新增点详细信息表**/
			Object insertResult2 = this.ibatisServices.insertIbatisObject("addParamPlacesSQL_TA", params);
			
			/**新增司机休息区报警设置**/
			this.ibatisServices.insertIbatisObject("addAnalyserLiveSQL_TA", params);
		
		/**为了统一老架构end*/
		
		//成功
		result.setCode(1);
		return result;
		
	}
	
	
	/**
	 * 删除
	 * @param params
	 * @return
	 * @throws Exception
	 */
	public Result delAnalyserLive(Map<String,Object> params) throws Exception {
		
		Result result = new Result();
		String id = (String)params.get("id");
		if(id != null){
			
			//根据id查询信息
//			Map<String,Object> analyserLiveInfo  = getANA_AnalyserLiveByID(params);
			
			//先删除司机休息区报警设置
			this.ibatisServices.deleteIbatisObject("delANA_AnalyserLive_TA", params);
			
			//删除点详细信息
//			this.ibatisServices.deleteIbatisObject("delAnalyesGroup_analyseGroups", params);
			
			//删除点类型父表
			
			//成功
			result.setCode(1);
		}
		return result;
	}
	
	
	/**
	 * 根据id查询关键点信息
	 * @return
	 */
	@SuppressWarnings("unchecked")
	public  Map<String,Object> getAnalyesGroupInfoById(Map params){
		
		List<Map<String,Object>> list = this.ibatisServices.queryForList(Map.class, "getCustomMapPointInfoById_TA",params);
		if(list != null && list.size()>0){
			return list.get(0);
		}
		return null;
		
	}
	
	/**
	 * 根据id查询详细信息
	 * @return
	 */
	@SuppressWarnings("unchecked")
	public  Map<String,Object> getANA_AnalyserLiveByID(Map params){
		
		List<Map<String,Object>> list = this.ibatisServices.queryForList(Map.class, "getANA_AnalyserLiveByID_TA",params);
		if(list != null && list.size()>0){
			return list.get(0);
		}
		return null;
	}
	
	
	
}
