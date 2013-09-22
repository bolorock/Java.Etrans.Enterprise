package com.etrans.bubiao.services.sys;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.etrans.bubiao.services.IbatisServices;
import com.etrans.bubiao.sys.UserContext;

/**
 * 
 * @author feltky
 * 
 *
 */
@Service
public class UserVehicleServices {
	
	@Autowired
	private IbatisServices ibatisServices;

	public IbatisServices getIbatisServices() {
		return ibatisServices;
	}

	public void setIbatisServices(IbatisServices ibatisServices) {
		this.ibatisServices = ibatisServices;
	}
	
	public List<Map> getUserVehicle(long userId,long random) throws Exception{
		HashMap<String,Object> map = new HashMap<String,Object>();  
		map.put("userId", userId);
		try {
			return ibatisServices.queryForList(Map.class, "getUserVehicleGroup", map);
		} catch (Exception e) {
			throw new Exception("查询车辆组异常,ibatis sql Statement[getUserVehicleGroup]"+e.getMessage());
		}
		
	}
	/**
	 * 新增用户关联车辆信息
	 * 
	 * @param userId
	 * @param vehicleGroupId
	 */
	public void insertUserVehicle(long userId,List<Map> groupIdMap)throws Exception{
		if(groupIdMap!=null && groupIdMap.size()>0){
			List<Map<String,Object>> listMap = new ArrayList<Map<String,Object>>();
			for(int i=0;i<groupIdMap.size();i++){
				Map valueMap = new HashMap();
				valueMap.put("userId", userId);
				valueMap.put("vehicleId", groupIdMap.get(i).get("VehicleID"));
				listMap.add(valueMap);
			}
			try {
				ibatisServices.batchInsertIbatisObject("addUserVehicle", listMap);
			} catch (Exception e) {
				throw new Exception("批量用户+车辆组异常,ibatis sql Statement[addUserVehicle]"+e.getMessage());
			}
		}		
	}
	
	/**
	 * 删除用户关联车辆信息
	 * 
	 * @param userId
	 */
	public void delUserVehicle(long userId)throws Exception{
		Map<String,Object> paramMap = new HashMap<String,Object>();
		paramMap.put("userId", userId);
		try{
			ibatisServices.deleteIbatisObject("delUserVehicleByUserId", (Map)paramMap);
		} catch (Exception e) {
			throw new Exception("删除用户+车辆组异常,ibatis sql Statement[delUserVehicleByUserId]"+e.getMessage());
		}
	}
	
	/**
	 * 根据登陆的用户来存储内存的车辆
	 * 
	 * @param params
	 * @param random 随机数,为防止用户注销后从新登陆还是取的缓存值
	 * @return List<HashMap<String,String>> 
	 * @throws Exception 
	 */
	public List<HashMap<String,String>> getVehicleByLoginUser(Map params,long random) throws Exception{
		String statement = "";
		List<HashMap<String,String>> list;
		try{
			//超级管理员
			if(UserContext.isBsRootUser()){
				return this.ibatisServices.queryForList(Map.class, "getAllVehilceListBsRoot", new HashMap());
			}
			//企业管理员
			else if(UserContext.getLoginUser().isWorkUnitSuperAdmin()){
				String fullId = String.valueOf((Long)params.get("workUnitId"));
				fullId = "00000000".substring(0,8-fullId.length())+fullId;
				params.put("workUnitId2", fullId);
				return this.ibatisServices.queryForList(Map.class,"getWorkUnitAdminVehicle",params);
			}
			//普通用户
			else{
				params.put("userId", UserContext.getLoginUser().getUserID());
				return this.ibatisServices.queryForList(Map.class,"getUserVehicle",params);
			}
			
		}catch(Exception e){
			throw new Exception("查询登陆用户权限车辆异常 ibatis sql Statement["+statement+"]" +e.getMessage());
		}
	}
}
