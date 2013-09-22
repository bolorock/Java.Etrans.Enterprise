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
 * 设备厂商查询Services
 * @author tjb
 * @version 1.0
 */
@Service
public class VehicleDeviceVendorServices {
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
	 * 分页查询设备厂商信息,返回表格数据
	 * @param queryJSON
	 * @return
	 * @throws Exception
	 */
	public PageBean vehicleDeviceVendorList(Map<String,Object> params) throws Exception {
		
		PageBean pageBean = new PageBean();
		
		List<Map<String,Object>> list = this.getVehicleDeviceVendorList(params);
		Long total = getVehicleDeviceVendorCount(params);
		
		pageBean.setPage((Integer)params.get(ParamKey.PAGE));
		pageBean.setRows(list);
		pageBean.setTotal(total);
		
		return pageBean;
		
	}
	
	
	
	/**
	 * 分页查询设备厂商信息list
	 * @param params
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings({"unchecked" })
	public List<Map<String,Object>> getVehicleDeviceVendorList(Map params) throws Exception {
		
		List<Map<String,Object>> list = this.ibatisServices.queryForList(Map.class, "getVehicleDeviceVendorListSQL",params);
		return list;
		
	}
	
	/**
	 * 查询设备厂商数量count
	 * @param params
	 * @return
	 * @throws Exception
	 */
	public Long getVehicleDeviceVendorCount(Map<String,Object> params) throws Exception {
		
		return this.ibatisServices.findIbatisListCount("getVehicleDeviceVendorCountSQL", params);
		
	}
	
	/**
	 **新增设备厂商信息详细
	 * @param whereMap
	 * @return
	 * @throws Exception
	 */
	public Object createVehicleDeviceVendor(Map<String,Object> params) {
		return this.ibatisServices.insertIbatisObject("insertVehicleDeviceVendorSQL", params);
	
	}
	
	 
	/**
	 * 由ID查询设备厂商详细
	 * @param whereMap
	 * @return
	 * @throws Exception
	 */
	public String getVehicleDeviceVendorById(Map<String,Object> whereMap) throws Exception {
		return	JSONUtil.toJson(this.ibatisServices.findIbatisList("getVehicleDeviceVendorByIdSQL", whereMap));
		
	}
	
	/**
	 * 由ID修改终端信息详细
	 * @param whereMap
	 * @return 
	 * @return
	 * @throws Exception
	 */
	public Object updateVehicleDeviceVendor(Map<String,Object> whereMap) throws Exception {
		return this.ibatisServices.updateIbatisObject("updateVehicleDeviceVendorSQL", whereMap);
		
	}
	
	/**
	 * 由ID删除设备厂商信息
	 * @param whereMap
	 * @return 
	 * @return
	 * @throws Exception
	 */
	public Object deleteVehicleDeviceVendor(Map<String,Object> whereMap) throws Exception {
		return this.ibatisServices.deleteIbatisObject("deleteVehicleDeviceVendorSQL", whereMap);
		
	}
	
	/**
	 * 验证不能有相同的设备厂商名称
	 * @param whereMap
	 * @return 
	 * @return
	 * @throws Exception
	 */
		@SuppressWarnings("unchecked")
		public Result checkVehicleDeviceVendorName(Map whereMap) throws Exception {
		Result result = new Result();
		List<Map<String,Object>> listInfo = ibatisServices.queryForList(Map.class, "checkVehicleDeviceVendorNameSQL",whereMap);
		if(null!=listInfo){
			result.setData(listInfo.size());//数据
			result.setCode(1);//表示查询有数据
		}
		return result;
	}
	
}


