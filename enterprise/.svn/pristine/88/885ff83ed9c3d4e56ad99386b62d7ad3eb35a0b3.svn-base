package com.etrans.bubiao.services.sys.proveInfoManage;

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
 * 证件信息表管理Services
 * @author lujunyong
 * 2013-08-14
 */
@Service
public class ProveInfoManageServices {

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
	 * 查询证件信息列表
	 * @param params 查询参数信息
	 * @param in 随机数（控制不调用内存重复数据）
	 * @return PageBean 分页类
	 * @throws Exception sql异常
	 */
	@SuppressWarnings("unchecked")
	public PageBean findProveInfoList(Map params,long in) throws Exception{
		PageBean pageBean = new PageBean();
		
		/**查询权限下的车辆id字符串**/
		setVehicleStr(params);
		
		//查询车辆外设表信息列表
		List<Map<String,Object>> listInfo  = this.ibatisServices.queryForList(Map.class, "findProveInfoListSql",params);
		//总条数
		Long total= this.ibatisServices.findIbatisListCount("findProveInfoListSqlCountSQL", params);
		
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
	 * 得到证件名称列表数据
	 * @param params
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings("unchecked")
	public List<Map<String,Object>> getProveNameList() throws Exception { 
		Map params = new HashMap<String,Object>();
		List<Map<String,Object>> list  =this.ibatisServices.queryForList(Map.class, "getProveNameListSQL",params);
		return list;
	}
	
	
	/**
	 * 验证车辆是否已经设置了证件信息
	 * @param map 查询条件
	 * @return 结果对象
	 */
	@SuppressWarnings("unchecked")
	public boolean validateByVhicleID_Prove(Map map)throws Exception{
		List<Map<String,Object>> listInfo=this.ibatisServices.queryForList(Map.class, "validateByVhicleIDSQL_Prove", map);
		if(listInfo!=null && listInfo.size()>0){
			return true;
		}else{
			return false;
		}
	}
	
	/**
	 * 删除【根据车辆id】
	 * @param params
	 * @return
	 * @throws Exception
	 */
	public void delProveInfoByVehicleID(Map<String,Object> params) throws Exception {
		
		this.ibatisServices.deleteIbatisObject("delProveInfoByVehicleSQL", params);
		
	}
	
	/**
	 * 新增
	 * @param params
	 * @return
	 * @throws Exception
	 */
	public Result addProveInfo(Map params) throws Exception {
		Result result =new Result();
		this.ibatisServices.insertIbatisObject("addProveInfoSQL", params);
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
	public Map<String,Object> getProveInfos(Map params) throws Exception {
		//根据id查询详细信息
		Map<String,Object> ProveInfo = getVehicleDeviceSetupInfosById(params);
		
		/**查询车牌号码**/
		params.put("vehicleID", ProveInfo.get("vehicleID"));
		List<Map<String,Object>> list  = this.ibatisServices.queryForList(Map.class, "getVehicleNoByIdSQL_Prove",params);
		Map<String,Object> workInfo = new HashMap<String, Object>();
		if(list != null && list.size()>0){
			workInfo=list.get(0);
		}
		ProveInfo.put("registrationVhicleNo", workInfo.get("RegistrationNO")); //车牌号码
		ProveInfo.put("registrationVehicleId", workInfo.get("ID"));//车辆id
		
		return ProveInfo;
	}
	
	/**
	 * 根据id查询详细信息
	 * @return
	 */
	@SuppressWarnings("unchecked")
	public  Map<String,Object> getVehicleDeviceSetupInfosById(Map params){
		
		List<Map<String,Object>> list = this.ibatisServices.queryForList(Map.class, "getVehicleProveInfosByIdSQL",params);
		if(list != null && list.size()>0){
			return list.get(0);
		}
		return null;
		
	}
	
	/**
	 * 修改
	 * @param params
	 * @return
	 * @throws Exception
	 */
	public Result updProveInfoByID(Map<String,Object> params) throws Exception {
		Result result = new Result();
		this.ibatisServices.deleteIbatisObject("updProveInfoByIDSQL", params);
		/**删除分析结果表**/
		this.ibatisServices.deleteIbatisObject("delBi_hta_expiration_noticeSQL", params);
		//成功
		result.setCode(1);
		return result;
	}
	
	
	
	/**
	 * 删除【根据数据id】
	 * @param params
	 * @return
	 * @throws Exception
	 */
	public Result delProveInfoByID(Map<String,Object> params) throws Exception {
		Result result = new Result();
		this.ibatisServices.deleteIbatisObject("delProveInfoByIDSQL", params);
		//成功
		result.setCode(1);
		return result;
	}
	
	
	
	//////////////////用作修改/////////////////////////
	/**
	 * 验证车辆是否已经设置了证件信息【除修改的此条信息之外还有没有设置了这辆车的证件信息】
	 * @param map 查询条件
	 * @return 结果对象
	 */
	@SuppressWarnings("unchecked")
	public boolean validateByVhicleID_Prove2(Map map)throws Exception{
		List<Map<String,Object>> listInfo=this.ibatisServices.queryForList(Map.class, "validateByVhicleIDSQL_Prove2", map);
		if(listInfo!=null && listInfo.size()>0){
			return true;
		}else{
			return false;
		}
	}
	
	/**
	 * 删除【根据车辆id，并且，id不等正在于修改的这条信息id】
	 * @param params
	 * @return
	 * @throws Exception
	 */
	public void delProveInfoByVehicleID2(Map<String,Object> params) throws Exception {
		
		this.ibatisServices.deleteIbatisObject("delProveInfoByVehicleSQL2", params);
		
	}
	
	
	/////////////////////用作查询是否有证件过期信息////////////////////////////
	/**
	 * 得到证件过期数据列表
	 * @param params
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings("unchecked")
	public List<Map<String,Object>> getProveNameListBack() throws Exception { 
		Map params = new HashMap<String,Object>();
		
		/**查询权限下的车辆id字符串**/
		setVehicleStr(params);
		
		List<Map<String,Object>> list  =this.ibatisServices.queryForList(Map.class, "getProveNameListBackSQL",params);
		return list;
	}
	
	
}
