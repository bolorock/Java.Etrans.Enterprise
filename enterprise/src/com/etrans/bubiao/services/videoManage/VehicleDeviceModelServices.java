package com.etrans.bubiao.services.videoManage;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.etrans.bubiao.entities.PageBean;
import com.etrans.bubiao.entities.Result;
import com.etrans.bubiao.services.IbatisServices;
import com.etrans.common.util.ParamKey;
import com.etrans.common.util.json.JSONUtil;

/**
 * 外设型号查询Services
 * @author tjb
 * @version 1.0
 */
@Service
public class VehicleDeviceModelServices {

	@SuppressWarnings("unused")
	private static final String RAWTYPES = "rawtypes";
	
	@Autowired
	private IbatisServices ibatisServices;

	public IbatisServices getIbatisServices() {
		return ibatisServices;
	}

	public void setIbatisServices(IbatisServices ibatisServices) {
		this.ibatisServices = ibatisServices;
	}
	/**
	 * 分页查询外设型号信息,返回表格数据
	 * @param queryJSON
	 * @return
	 * @throws Exception
	 */
	public PageBean vehicleDeviceModelList(Map<String,Object> params) throws Exception {
		
		PageBean pageBean = new PageBean();
		
		List<Map<String,Object>> vehicleDeviceModelList = this.getVehicleDeviceModelList(params);
		Long total = getVehicleDeviceModelCount(params);
		
		pageBean.setPage((Integer)params.get(ParamKey.PAGE));
		pageBean.setRows(vehicleDeviceModelList);
		pageBean.setTotal(total);
		
		return pageBean;
		
	}
	
	
	
	/**
	 * 分页查询外设型号信息list
	 * @param params
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings({"unchecked" })
	public List<Map<String,Object>> getVehicleDeviceModelList(Map params) throws Exception {
		
		List<Map<String,Object>> TerminalList = this.ibatisServices.queryForList(Map.class, "getVehicleDeviceModelListSQL",params);
		return TerminalList;
		
	}
	
	/**
	 * 查询外设型号数量count
	 * @param params
	 * @return
	 * @throws Exception
	 */
	public Long getVehicleDeviceModelCount(Map<String,Object> params) throws Exception {
		
		return this.ibatisServices.findIbatisListCount("getVehicleDeviceModelCountSQL", params);
		
	}
	
	/**
	 **新增外设型号信息详细
	 * @param whereMap
	 * @return
	 * @throws Exception
	 */
	public Object createVehicleDeviceModel(Map<String,Object> params) {
		return this.ibatisServices.insertIbatisObject("insertVehicleDeviceModelSQL", params);
	
	}
	
	 
	/**
	 * 由ID查询外设型号详细
	 * @param whereMap
	 * @return
	 * @throws Exception
	 */
	public String getVehicleDeviceModelById(Map<String,Object> whereMap) throws Exception {
		return	JSONUtil.toJson(this.ibatisServices.findIbatisList("getVehicleDeviceModelByIdSQL", whereMap));
		
	}
	
	/**
	 * 由ID修改终端信息详细
	 * @param whereMap
	 * @return 
	 * @return
	 * @throws Exception
	 */
	public Object updateVehicleDeviceModel(Map<String,Object> whereMap) throws Exception {
		return this.ibatisServices.updateIbatisObject("updateVehicleDeviceModelSQL", whereMap);
		
	}
	
	/**
	 * 由ID删除外设型号信息
	 * @param whereMap
	 * @return 
	 * @return
	 * @throws Exception
	 */
	public Object deleteVehicleDeviceModel(Map<String,Object> whereMap) throws Exception {
		return this.ibatisServices.deleteIbatisObject("deleteVehicleDeviceModelSQL", whereMap);
		
	}
	
	/**
	 * 验证不能有相同的外设型号名称
	 * @param whereMap
	 * @return 
	 * @return
	 * @throws Exception
	 */
		@SuppressWarnings("unchecked")
		public Result checkVehicleDeviceModelName(Map whereMap) throws Exception {
		Result result = new Result();
		List<Map<String,Object>> listInfo = ibatisServices.queryForList(Map.class, "checkVehicleDeviceModelNameSQL",whereMap);
		if(null!=listInfo){
			result.setData(listInfo.size());//数据
			result.setCode(1);//表示查询有数据
		}
		return result;
	}
	
}


