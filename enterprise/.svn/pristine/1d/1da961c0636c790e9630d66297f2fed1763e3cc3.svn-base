package com.etrans.bubiao.services;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.etrans.bubiao.entities.PageBean;
import com.etrans.bubiao.entities.Result;
import com.etrans.bubiao.sys.UserContext;
import com.etrans.common.util.ParamKey;

/**
 * 轨迹分析组管理service
 * @author Administrator
 *
 */
@Service
public class AddAnalyseGroupService {

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
	 * 查询分析组列表
	 * @param params 用户信息
	 * @param in 随机数（控制不调用内存重复数据）
	 * @return PageBean 分页类
	 * @throws Exception sql异常
	 */
	@SuppressWarnings("unchecked")
	public PageBean findAnalyseGroupList(Map params,long in) throws Exception{
		PageBean pageBean = new PageBean();
		
		//查询分析组列表
		List<Map<String,Object>> listInfo  = this.ibatisServices.queryForList(Map.class, "findAnalyseGroupListSql",params);
		//总条数
		Long total= this.ibatisServices.findIbatisListCount("findAnalyseGroupListCountSQL", params);
		
		pageBean.setPage((Integer)params.get(ParamKey.PAGE));
		pageBean.setRows(listInfo);
		pageBean.setTotal(total);
		
		return pageBean;
		
	}
	///////////////////////////////车辆树begin//////////////////////////////////////
	/**
	 * 根据用户类型获取当前用户下面的车辆【分页查询车辆】【树】
	 * @param params
	 * @return
	 */
	@SuppressWarnings("unchecked")
	public List<Map> findVehilceListByUserType_Tree(Map map,long in){
		List<Map> resultList = new ArrayList<Map>();
		//查询
		resultList=ibatisServices.queryForList(Map.class,"bbb", map);
		
		return resultList;
	}
	
	/**
	 * 查询最高级企业列表
	 * @return
	 */
	@SuppressWarnings("unchecked")
	public List<Map> findWorkUnitRoot_Tree(Map map,long in){
		List<Map> resultList = new ArrayList<Map>();
		
		//查询
		resultList=ibatisServices.queryForList(Map.class,"getAllWorkUnit_anaryseGroup", map);
		
		return resultList;
		
	}
	
////////////////////////////////车辆树end/////////////////////////////////////
	
	
	/**
	 * 根据用户类型获取当前用户下面的车辆【分页查询车辆】
	 * @param params
	 * @return
	 */
	@SuppressWarnings("unchecked")
	public List<HashMap<String, String>> findVehilceListByUserType(Map params,long in){
		List<HashMap<String, String>> resultList = new ArrayList<HashMap<String,String>>();
		//查询
		resultList = this.ibatisServices.queryForList(Map.class, "findVehilceListByUserTypeSql",params);
		return resultList;
	}
	
	/**
	 * 根据用户类型获取当前用户下面的车辆【总条数】
	 * @return
	 */
	@SuppressWarnings("unchecked")
	public Long findVehilceListByUserTypeCount(Map params,long in){
		Long pageListCount = ibatisServices.findIbatisListCount("findVehilceListByUserTypeSqlCount", params);
		return pageListCount;
	}

	
	/**
	 * 新增分析组
	 * @param params
	 * @return
	 * @throws Exception
	 */
	public Result addAnalyesGroup(Map<String,Object> params) throws Exception {
		
		Result result = new Result();
		
		/**新增轨迹分析组**/
		//保存路线限速报警设置
		Object insertResult = this.ibatisServices.insertIbatisObject("addAnalyesGroupSQL", params);
		//插入数据后返回的分析组id
		Integer analyseGroupID = (Integer)insertResult;
		params.put("analyseGroupID", analyseGroupID);
		
		/**保存轨迹分析组和用户关系表【用作权限控制】begin**/
		Map<String,Object> params2 = new HashMap<String, Object>();
		params2.put("analyseGroupID", analyseGroupID); //轨迹分析组id
		params2.put("userId",  UserContext.getLoginUserID()); //用户id
		this.ibatisServices.insertIbatisObject("add_Ent_AnalyseGroupsIDAddUserID", params2);
		/**保存轨迹分析组和用户关系表【用作权限控制】end**/
		
		/**新增分析组和车辆关系begin**/
		//车辆ids
		String vehicleIds = (String)params.get("vehicleIds");
		if(vehicleIds != null && !vehicleIds.equals("")){
			String[] idArr = vehicleIds.split(",");
			Map<String,Object> map = new HashMap<String,Object>();
			map.put("analyseGroupID", params.get("analyseGroupID"));//分析组id
			for(int i=0;i<idArr.length;i++){
				map.put("vehicleId", idArr[i]);//车辆id
				this.ibatisServices.insertIbatisObject("addAnalyseGroupVehiclesSQL", map);
			}
		}
		/**新增分析组和车辆关系end**/
		
		//成功
		result.setCode(1);
		return result;
		
		
	}
	
	/**
	 * 检查名称重复
	 * @param map 查询条件
	 * @return 结果对象
	 */
	@SuppressWarnings("unchecked")
	public Result checkName(Map map)throws Exception{
		Result result = new Result();
		
		List<Map<String,Object>> listInfo=this.ibatisServices.queryForList(Map.class, "checkNameSQL", map);
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
	public boolean checkName2(Map map)throws Exception{
		List<Map<String,Object>> listInfo=this.ibatisServices.queryForList(Map.class, "checkNameSQL", map);
		if(listInfo!=null && listInfo.size()>0){
			return true;
		}else{
			return false;
		}
	}
	
	/**
	 * 删除分析组
	 * @param params
	 * @return
	 * @throws Exception
	 */
	public Result delAnalyesGroup(Map<String,Object> params) throws Exception {
		Result result = new Result();
		String id = (String)params.get("id");
		if(id != null){
			
			//先删除分析组和车辆关系表数据
			this.ibatisServices.deleteIbatisObject("delAnalyesGroup_analyseGroupVehicles", params);
			
			//删除轨迹分析组和用户关系表数据
			this.ibatisServices.deleteIbatisObject("del_Ent_AnalyseGroupsIDAddUserIDByID", params);
			
			//删除分析组
			this.ibatisServices.deleteIbatisObject("delAnalyesGroup_analyseGroups", params);
			
			//成功
			result.setCode(1);
			
		}
		
		return result;
	}
	
	/**
	 * 查询轨迹分析详细信息
	 * @param params
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings({ "unchecked" })
	public Map<String,Object> getAnalyesGroupById(Map params) throws Exception {
		
		//根据id查询详细信息
		Map<String,Object> analyesGroupInfo = getanalyesGroupInfoById(params);
		
		//查询企业名称
		params.put("workUnitId", analyesGroupInfo.get("GroupID"));
		List<Map<String,Object>> list  = this.ibatisServices.queryForList(Map.class, "getworkUnitNameByIdSQL",params);
		Map<String,Object> workInfo = new HashMap<String, Object>();
		if(list != null && list.size()>0){
			workInfo=list.get(0);
			
		}
		analyesGroupInfo.put("workUnitName", workInfo.get("workUnitName"));
		
		//分析组id
		params.put("analyseGroupid", analyesGroupInfo.get("ID"));
		
		//根据分析组id查询车辆
		List<Map<String,Object>> vehicles = this.ibatisServices.queryForList(Map.class, "getAnalyesGroupByIdS_vehiclesQL",params);
		if(analyesGroupInfo != null && vehicles != null && vehicles.size() > 0){
			analyesGroupInfo.put("vehicles",vehicles);
		}
		return analyesGroupInfo;
	}
	
	/**
	 * 查询轨迹分析详细信息【Tree】
	 * @param params
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings({ "unchecked" })
	public Map<String,Object> getAnalyesGroupByIdTree(Map params) throws Exception {
		
		//根据id查询详细信息
		Map<String,Object> analyesGroupInfo = getanalyesGroupInfoById(params);
		
		//查询企业名称
		params.put("workUnitId", analyesGroupInfo.get("GroupID"));
		List<Map<String,Object>> list  = this.ibatisServices.queryForList(Map.class, "getworkUnitNameByIdSQL",params);
		Map<String,Object> workInfo = new HashMap<String, Object>();
		if(list != null && list.size()>0){
			workInfo=list.get(0);
			
		}
		analyesGroupInfo.put("workUnitName", workInfo.get("workUnitName"));
		
		//分析组id
		params.put("analyseGroupid", analyesGroupInfo.get("ID"));
		
//		//根据分析组id查询车辆
//		List<Map<String,Object>> vehicles = this.ibatisServices.queryForList(Map.class, "getAnalyesGroupByIdS_vehiclesQL",params);
//		if(analyesGroupInfo != null && vehicles != null && vehicles.size() > 0){
//			analyesGroupInfo.put("vehicles",vehicles);
//		}
		return analyesGroupInfo;
	}
	
	
	/**
	 * 根据id查询详细信息
	 * @return
	 */
	@SuppressWarnings("unchecked")
	public  Map<String,Object> getanalyesGroupInfoById(Map params){
		
		List<Map<String,Object>> list = this.ibatisServices.queryForList(Map.class, "getanalyesGroupInfoByIdSQL",params);
		if(list != null && list.size()>0){
			return list.get(0);
		}
		return null;
		
	}
	
	
	
}
