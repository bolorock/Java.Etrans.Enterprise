package com.etrans.bubiao.services.query.stat;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.etrans.bubiao.entities.PageBean;
import com.etrans.bubiao.http.ParamKey;
import com.etrans.bubiao.http.Result;
import com.etrans.bubiao.services.BaseServices;
import com.etrans.bubiao.services.IbatisServices;
import com.etrans.bubiao.sys.Constants;
import com.etrans.common.util.web.Struts2Utils;

@Service
public class VehicleMileageService extends BaseServices{
	@Autowired
	private IbatisServices ibatisServices;

	public IbatisServices getIbatisServices() {
		return ibatisServices;
	}

	public void setIbatisServices(IbatisServices ibatisServices) {
		this.ibatisServices = ibatisServices;
	}
	
	/**
	 * 取车辆
	 * @param paramMap
	 * @return
	 */
	@SuppressWarnings("unchecked")
	public String getVehilces(Map paramMap) throws Exception {
		
		try 
		{
			List<Map<String,Object>> ls = this.ibatisServices.queryForList(Map.class,"getVehilceListTreeSQL",paramMap);
			
			String str = "";
			StringBuffer result = new StringBuffer("");
			
			if(ls!=null && ls.size()>0){
				for(Map<String,Object> m:ls){
					result.append(",")
						  .append(m.get("id"))
					;
					
				}
				str = result.substring(1, result.length());
			}
			return str;
		} 
		catch (Exception e)
		{
			e.printStackTrace();
		}
		return null;
	}
	
	/**
     * 行驶里程统计
     * @param queryJSON
     * @return
     * @throws Exception
     */
	@SuppressWarnings("unchecked")
	public PageBean getVehicleMileages (Map<String,Object> params) throws Exception {
		
		Map<String,String> vehileMap =(Map<String,String>) Struts2Utils.getSessionAttribute(Constants.USER_VEHICLE);
		
		if(params.get("vehicleStr").equals("") || vehileMap==null || vehileMap.size()==0){
			return addSpacePageBean();
		}
		
		PageBean pageBean = new PageBean();
		List<Map<String,Object>> ls = this.getVehicleMileageList(params);
		List<Map<String, Object>> result = new ArrayList<Map<String,Object>>();
		
		String[] vehicleArr = params.get("vehicleStr").toString().split(",");
		Long total = Long.valueOf(vehicleArr.length);
		
		
		if(ls!=null && ls.size()>0){
			for(String vehicleId:vehicleArr){
				Map<String,Object> item = getItemById(ls,vehicleId);
				String vehicleInfo = vehileMap.get(vehicleId);
				
				if(item!=null && vehicleInfo!=null){
					String[] vehicleInfoArr = vehicleInfo.split("\\|");
					//里程换算
					Double mileageStr=(Double) item.get("mileage")/10;
					//保留两位小数
					BigDecimal   b   =   new   BigDecimal(mileageStr);  
					Double   newMileage   =   b.setScale(2,   BigDecimal.ROUND_HALF_UP).doubleValue();  
					item.put("newMileage", newMileage);
					item.put("registrationNO", vehicleInfoArr[0]);
					item.put("color", vehicleInfoArr[1]);
					item.put("workUnitName", vehicleInfoArr[3]);
					item.put("gpsTime",item.get("startDate") + "  至  " + item.get("endDate"));
					result.add(item);
				}else{
					result.add(addRecord(params,vehicleId,vehileMap.get(vehicleId)));
				}
			}
		}else{
			for(String vehicleId:vehicleArr){
				result.add(addRecord(params,vehicleId,vehileMap.get(vehicleId)));
			}
		}
		
		pageBean.setPage((Integer)params.get(ParamKey.PAGE));
		pageBean.setRows(result);
		pageBean.setTotal(total);
		return pageBean;
		
	}
	
	
	/**
	 * 导出到EXCEL
	 * @param queryJSON
	 * @param fromPage
	 * @param toPage
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings("unchecked")
	public  List<Map<String, Object>>  vehicleMileagesExportExl(Map params) throws Exception{
		
		Map<String,String> vehileMap =(Map<String,String>) Struts2Utils.getSessionAttribute(Constants.USER_VEHICLE);
		
		if(params.get("vehicleStr").equals("") || vehileMap==null || vehileMap.size()==0){
			return null;
		}
		
		List<Map<String,Object>> ls = this.getVehicleMileageList(params);
		List<Map<String, Object>> result = new ArrayList<Map<String,Object>>();
		
		String[] vehicleArr = params.get("vehicleStr").toString().split(",");
		
		if(ls!=null && ls.size()>0){
			for(String vehicleId:vehicleArr){
				Map<String,Object> item = getItemById(ls,vehicleId);
				String vehicleInfo = vehileMap.get(vehicleId);
				
				if(item!=null && vehicleInfo!=null){
					String[] vehicleInfoArr = vehicleInfo.split("\\|");
					//里程换算
					Double mileageStr=(Double) item.get("mileage")/10;
					//保留两位小数
					BigDecimal   b   =   new   BigDecimal(mileageStr);  
					Double   newMileage   =   b.setScale(2,   BigDecimal.ROUND_HALF_UP).doubleValue();  
					item.put("newMileage", newMileage);
					item.put("registrationNO", vehicleInfoArr[0]);
					item.put("color", vehicleInfoArr[1]);
					item.put("workUnitName", vehicleInfoArr[3]);
					item.put("gpsTime",item.get("startDate") + "  至  " + item.get("endDate"));
					result.add(item);
				}else{
					result.add(addRecord(params,vehicleId,vehileMap.get(vehicleId)));
				}
			}
		}else{
			for(String vehicleId:vehicleArr){
				result.add(addRecord(params,vehicleId,vehileMap.get(vehicleId)));
			}
		}
		
		return result;
		
	}
	
	public PageBean addSpacePageBean(){
		List<Map<String,Object>> ls = new ArrayList<Map<String,Object>>();
		PageBean pageBean = new PageBean();
		pageBean.setPage(1);
		pageBean.setRows(ls);
		pageBean.setTotal(0L);
		return pageBean;
	}
	
	public Map<String,Object> addRecord(Map<String,Object> params,String vehicleId,String vehicleInfo ){
		Map<String,Object> val = new HashMap<String,Object>();
		if(vehicleInfo!=null){
			String[] vehicleInfoArr = vehicleInfo.split("\\|");
			val.put("vehicleId", vehicleId);
			val.put("registrationNO", vehicleInfoArr[0]);
			val.put("color", vehicleInfoArr[1]);
			val.put("workUnitName", vehicleInfoArr[3]);
			val.put("gpsTime",params.get("startTime") + "  至  " + params.get("endTime"));
			val.put("newMileage", 0);
		}else{
			val.put("vehicleId", vehicleId);
			val.put("registrationNO", "");
			val.put("color", "");
			val.put("workUnitName", "");
			val.put("gpsTime",params.get("startTime") + "  至  " + params.get("endTime"));
			val.put("newMileage", 0);
		}
		
		return val;
	}
	
	/**
	 * 通过vehicleID获取车辆里程统计信息
	 * @param list
	 * @param id
	 * @return
	 */
	public static Map<String,Object> getItemById(List<Map<String,Object>> list,String id) throws Exception{
		
		if(list != null && list.size()>0 && id != null){
			for(Map<String,Object> item : list){
				String itemId = (String)item.get("vehicleId");
				if(itemId != null && itemId.equals(id)){
					return item;
				}
			}
		}
		
		return null;
	}
	
	
	@SuppressWarnings("unchecked")
	public List<Map<String,Object>> getVehicleMileageList(Map<String,Object> param) throws Exception {
		
		Result result = this.callProcedureAsResult("P_GetVehicleMileageStat", param);
		
		List<Map<String,Object>> ls=(List<Map<String,Object>>)result.getData();
		
		return ls;
		 
	}
	
}
