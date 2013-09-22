package com.etrans.bubiao.services.videoManage;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.etrans.bubiao.auth.SessionUser;
import com.etrans.bubiao.entities.PageBean;
import com.etrans.bubiao.entities.Result;
import com.etrans.bubiao.services.IbatisServices;
import com.etrans.bubiao.sys.UserContext;
import com.etrans.common.util.ParamKey;

/**
 * 车辆外设表管理Services
 * @author lujunyong
 *
 */
@Service
public class VehicleDeviceSetupServices {
	
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
	 * 查询车辆外设表信息列表
	 * @param params 用户信息
	 * @param in 随机数（控制不调用内存重复数据）
	 * @return PageBean 分页类
	 * @throws Exception sql异常
	 */
	@SuppressWarnings("unchecked")
	public PageBean findVehicleDeviceSetupList(Map params,long in) throws Exception{
		
		PageBean pageBean = new PageBean();
		
		/**查询权限下的车辆id字符串**/
		//setVehicleStr(params);
		
		//查询车辆外设表信息列表
		List<Map<String,Object>> listInfo  = this.ibatisServices.queryForList(Map.class, "DeviceSetup.findVehicleDeviceSetupListSql",params);
		//总条数
		Long total= this.ibatisServices.findIbatisListCount("DeviceSetup.findVehicleDeviceSetupListCountSQL", params);
		
		pageBean.setPage((Integer)params.get(ParamKey.PAGE));
		pageBean.setRows(listInfo);
		pageBean.setTotal(total);
		
		return pageBean;
		
	}
	
	
	
	/**
	 * 根据不用的用户【超级管理员，企业管理员，普通用户】设置查询条件【车辆id字符串】【以“，”隔开】
	 * @param setParamsMap
	 */
	@SuppressWarnings("unchecked")
	public  void setVehicleStr(Map setParamsMap){
		SessionUser sessionUser = UserContext.getLoginUser();
		Map paramMap =new HashMap();
		List<Map<String,Object>> list=null;
		String userId = String.valueOf(sessionUser.getUserID());//用户id
		String fullId=String.valueOf(sessionUser.getWorkUnitID());//企业id
		/**查询权限下的车辆begin**/
		if(UserContext.isBsRootUser()){//超级管理员
        	setParamsMap.put("vehicleIDStr",null);
		  }
		else{
			if(sessionUser.isWorkUnitSuperAdmin()){//企业管理员
				paramMap.put("fullId",fullId);
				list = this.ibatisServices.queryForList(Map.class, "DeviceSetup.getAdminVehicleIdSQL_DGo",paramMap);
				
			}else{//普通用户
				paramMap.put("userId", userId);
				list=this.ibatisServices.queryForList(Map.class, "DeviceSetup.getVehicleIdstatSQL_D", paramMap);
			}
			 if(list!=null || "".equals(list)){
				 if(list.size()!=0){
					String vehiclestr="";
					String vehicleID=null;
					for(int i=0; i<list.size(); i++){
						vehiclestr +=list.get(i).get("ID").toString()+",";
					}
					vehicleID=vehiclestr.substring(0, vehiclestr.length()-1);
					setParamsMap.put("vehicleIDStr",String.valueOf(vehicleID));
				 }
			 }
			 if(null==setParamsMap.get("vehicleIDStr")||setParamsMap.get("vehicleIDStr").equals("")){
					setParamsMap.put("vehicleIDStr",0);
				}
		}
		/**查询权限下的车辆end**/
	}
	
	
	/**
	 * 得到外设类型列表数据
	 * @param params
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings("unchecked")
	public List<Map<String,Object>> getVehicledeViceTypeList() throws Exception { 
		Map params = new HashMap<String,Object>();
		List<Map<String,Object>> list  =this.ibatisServices.queryForList(Map.class, "DeviceSetup.getVehicledeViceTypeListSQL",params);
		return list;
	}
	/**
	 * 得到安装位置列表数据
	 * @param params
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings("unchecked")
	public List<Map<String,Object>> getVehicleSetupPositionList() throws Exception { 
		Map params = new HashMap<String,Object>();
		List<Map<String,Object>> list  =this.ibatisServices.queryForList(Map.class, "DeviceSetup.getVehicleSetupPositionListSQL",params);
		return list;
	}
	/**
	 * 得到外设型号列表数据
	 * @param params
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings("unchecked")
	public List<Map<String,Object>> getVehicleDeviceModelList() throws Exception { 
		Map params = new HashMap<String,Object>();
		List<Map<String,Object>> list  =this.ibatisServices.queryForList(Map.class, "DeviceSetup.getVehicleDeviceModelListSQL",params);
		return list;
	}
	
	
	/**
	 * 验证车辆是否已经设置了外设参数
	 * @param map 查询条件
	 * @return 结果对象
	 */
	@SuppressWarnings("unchecked")
	public boolean validateByVhicleID(Map map)throws Exception{
		List<Map<String,Object>> listInfo=this.ibatisServices.queryForList(Map.class, "DeviceSetup.validateByVhicleIDSQL", map);
		if(listInfo!=null && listInfo.size()>0){
			return true;
		}else{
			return false;
		}
	}
	
	/**
	 * 删除【根据车辆id,和外设类型】
	 * @param params
	 * @return
	 * @throws Exception
	 */
	public void delVehicleDeviceSetupInfo(Map<String,Object> params) throws Exception {
		
		this.ibatisServices.deleteIbatisObject("DeviceSetup.delVehicleDeviceSetupInfoSQL", params);
		
	}
	
	/**
	 * 删除【根据数据id】
	 * @param params
	 * @return
	 * @throws Exception
	 */
	public Result delVehicleDeviceSetupInfoByID(Map<String,Object> params) throws Exception {
		Result result = new Result();
		this.ibatisServices.deleteIbatisObject("DeviceSetup.delVehicleDeviceSetupInfoByIDSQL", params);
		//成功
		result.setCode(1);
		return result;
	}
	
	/**
	 * 修改
	 * @param params
	 * @return
	 * @throws Exception
	 */
	public Result updVehicleDeviceSetupInfoByID(Map<String,Object> params) throws Exception {
		Result result = new Result();
		this.ibatisServices.deleteIbatisObject("DeviceSetup.updVehicleDeviceSetupInfoByIDSQL", params);
		//成功
		result.setCode(1);
		return result;
	}
	
	
	/**
	 * 新增
	 * @param params
	 * @return
	 * @throws Exception
	 */
	public Result addVehicleDeviceSetupInfo(Map params) throws Exception {
		Result result =new Result();
		this.ibatisServices.insertIbatisObject("DeviceSetup.addAnalyseGroupVehiclesSQL", params);
		//成功
		result.setCode(1);
		return result;
	}
	
	
	/**
	 * 【查询详细信息】
	 * @param params
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings({ "unchecked" })
	public Map<String,Object> getVehicleDeviceSetupInfos(Map params) throws Exception {
		//根据id查询详细信息
		Map<String,Object> vehicleDeviceSetupInfo = getVehicleDeviceSetupInfosById(params);
		
		/**查询车牌号码**/
		//查询企业名称
		params.put("vehicleID", vehicleDeviceSetupInfo.get("vehicleID"));
		List<Map<String,Object>> list  = this.ibatisServices.queryForList(Map.class, "DeviceSetup.getVehicleNoByIdSQL",params);
		Map<String,Object> workInfo = new HashMap<String, Object>();
		if(list != null && list.size()>0){
			workInfo=list.get(0);
		}
		vehicleDeviceSetupInfo.put("vehicleName", workInfo.get("RegistrationNO"));
		
		return vehicleDeviceSetupInfo;
	}
	
	/**
	 * 根据id查询详细信息
	 * @return
	 */
	@SuppressWarnings("unchecked")
	public  Map<String,Object> getVehicleDeviceSetupInfosById(Map params){
		
		List<Map<String,Object>> list = this.ibatisServices.queryForList(Map.class, "DeviceSetup.getVehicleDeviceSetupInfosByIdSQL",params);
		if(list != null && list.size()>0){
			return list.get(0);
		}
		return null;
		
	}
	
	
	
}
