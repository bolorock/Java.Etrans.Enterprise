package com.etrans.bubiao.services.sys;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.etrans.bubiao.entities.PageBean;
import com.etrans.bubiao.services.IbatisServices;
import com.etrans.common.util.ParamKey;

@Service
public class HistoryImageSelectServices {
	@Autowired
	private IbatisServices ibatisServices;

	public IbatisServices getIbatisServices() {
		return ibatisServices;
	}

	public void setIbatisServices(IbatisServices ibatisServices) {
		this.ibatisServices = ibatisServices;
	}
	/**
	 * 分页查询历史图片查询信息,返回表格数据
	 * @param queryJSON
	 * @return
	 * @throws Exception
	 */
	public PageBean getHistoryImageSelects(Map<String,Object> params) throws Exception {
		PageBean pageBean = new PageBean();
		List<Map<String,Object>> historyImageSelectList = this.getHistoryImageSelectList(params);
		Long total = getHistoryImageSelectCount(params);
		
		pageBean.setPage((Integer)params.get(ParamKey.PAGE));
		pageBean.setRows(historyImageSelectList);
		pageBean.setTotal(total);
		return pageBean;
		
	}
	
	/**
	 * 分页查询历史图片查询信息
	 * @param params
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public List<Map<String,Object>> getHistoryImageSelectList(Map params) throws Exception {
		
		List<Map<String,Object>> historyImageSelectList = new ArrayList<Map<String,Object>>();
		Boolean isSuper=(Boolean)params.get("isSuper");
		Boolean isWorkUnitSuperAdmin = (Boolean)params.get("isWorkUnitSuperAdmin");
		
		if(isSuper != null && isSuper == true){
			historyImageSelectList = this.ibatisServices.queryForList(Map.class, "getHistoryImageSelectsSQL",params);
		}else if(isWorkUnitSuperAdmin != null && isWorkUnitSuperAdmin == true){
			historyImageSelectList = this.ibatisServices.queryForList(Map.class, "getHistoryImageSelectsSQL",params);
		}else{
			historyImageSelectList = this.ibatisServices.queryForList(Map.class, "getUserHistoryImageSelectsSQL",params);
		}
		return historyImageSelectList;
		
	}
	
	/**
	 * 查询历史图片查询数量
	 * @param params
	 * @return
	 * @throws Exception
	 */
	public Long getHistoryImageSelectCount(Map<String,Object> params) throws Exception {
		Boolean isWorkUnitSuperAdmin = (Boolean)params.get("isWorkUnitSuperAdmin");
		Boolean isSuper=(Boolean)params.get("isSuper");
		
		if(isSuper != null && isSuper == true){
			return this.ibatisServices.findIbatisListCount("historyImageSelectCountSQL", params);
		}else if(isWorkUnitSuperAdmin != null && isWorkUnitSuperAdmin == true){
			return this.ibatisServices.findIbatisListCount("historyImageSelectCountSQL", params);
		}else{
			return this.ibatisServices.findIbatisListCount("UserhistoryImageSelectCountSQL", params);
		}
		
	}
	
	/**
	 * 显示图片
	 * @param whereMap
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings("unchecked")
	public byte[] findImageStream(Map params) throws Exception {
		
		List<Map<String, Object>> mapHashMaps = this.ibatisServices.queryForList(Map.class,"getImageStreamByIdSQL",params);
		return (byte[])mapHashMaps.get(0).get("ImageStream");
		
	}
	
	/**
	 * 根据车辆ID查询历史图片
	 * 
	 * @param vehicleId
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public List<Map<String,Object>> getHistoryImageListByVehicleIdTop9(String vehicleId)throws Exception{
		Map<String,Object> params = new HashMap<String,Object>();
		params.put("vehicleId", vehicleId);
		return (List)this.ibatisServices.queryForList(Map.class,"getImageListByVehicleIdTop9",params);
	}
	
}

