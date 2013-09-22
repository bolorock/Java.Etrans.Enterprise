package com.etrans.bubiao.services.query.stat;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.etrans.bubiao.auth.SessionUser;
import com.etrans.bubiao.entities.PageBean;
import com.etrans.bubiao.http.ParamKey;
import com.etrans.bubiao.services.IbatisServices;
import com.etrans.bubiao.sys.UserContext;
import com.etrans.common.util.FlexiGridUtil;
import com.etrans.common.util.web.RowNumUtil;

@Service
public class VehicleSpeedStatService {
	@Autowired
	private IbatisServices ibatisServices;
	
	public IbatisServices getIbatisServices()
	{
		return ibatisServices;
	}


	public void setIbatisServices(IbatisServices ibatisServices)
	{
		this.ibatisServices = ibatisServices;
	}
	
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public PageBean getVehicleSpeedInfo(Map setParamsMap,SessionUser sessionUser) throws Exception{
		setParamsMap.put("@workunitid","");
		setParamsMap.put("@IsExport","1");
		String userId = String.valueOf(sessionUser.getUserID());
		String fullId=String.valueOf(sessionUser.getWorkUnitID());
		Map paramMap =new HashMap();
		List<Map<String,Object>> list=null;
		List<Map<String,Object>> rows =null;
		  //判断是否是按部门统计，1为部门统计，2为车辆统计
		Integer isSection=Integer.parseInt(setParamsMap.get("@isSection").toString());
        if(UserContext.isBsRootUser()){//超级管理员
        	setParamsMap.put("@vehicle_list",null);
		  }
		else{
			if(sessionUser.isWorkUnitSuperAdmin()){//企业管理员
				paramMap.put("fullId", fullId);
				list = this.ibatisServices.queryForList(Map.class, "getAdminVehicleIdSQL",paramMap);
				
			}else{//普通用户
				paramMap.put("userId", userId);
				list=this.ibatisServices.queryForList(Map.class, "getVehicleIdstatSQL", paramMap);
			}
			 if(list!=null || "".equals(list)){
					String vehiclestr="";
					String vehicleID=null;
					for(int i=0; i<list.size(); i++){
						vehiclestr +=list.get(i).get("id").toString()+"-";
					}
					vehicleID=vehiclestr.substring(0, vehiclestr.length()-1);
					setParamsMap.put("@vehicle_list",String.valueOf(vehicleID));
			 }
		}
        String page = (String)setParamsMap.get(ParamKey.PAGE);
		String pageSize = (String)setParamsMap.get(ParamKey.PAGE_SIZE);
		Integer fromRow = RowNumUtil.getFromRowNum(page, pageSize);
		Integer toRow = RowNumUtil.getToRowNum(page, pageSize);
		setParamsMap.put("@fromRow",String.valueOf(fromRow));
		setParamsMap.put("@toRow",String.valueOf(toRow));
		try {
			if(isSection==1){
				rows= this.ibatisServices.queryForList(Map.class, "getVehicleSpeedSactionStatSQL",setParamsMap);
			}else if(isSection==2){
    		    rows= this.ibatisServices.queryForList(Map.class, "getVehicleSpeedStatSQL",setParamsMap);
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		  
        PageBean pageBean=new PageBean();
		pageBean.setPage(Integer.valueOf(page));
		if(rows!=null&&rows.size()>0){
			 pageBean.setRows(rows);
			 Long totalLong=Long.valueOf(String.valueOf((rows.get(0).get("total"))));
			 pageBean.setTotal(totalLong);
		}
		return pageBean;
	}
	
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public  List<Map<String, Object>>  getVehicleSpeedExportExl(Map setParamsMap,SessionUser sessionUser,String fromPage,String toPage) throws Exception{
		
//		Map setParamsMap=FlexiGridUtil.parseJSONParamForProcedure(queryJSON);
		String userId = String.valueOf(sessionUser.getUserID());
		String fullId=String.valueOf(sessionUser.getWorkUnitID());
		  //判断是否是按部门统计，1为部门统计，2为车辆统计
		Integer isSection=Integer.parseInt(setParamsMap.get("@isSection").toString());
		Map paramMap =new HashMap();
		List<Map<String,Object>> rows =null;
		List<Map<String,Object>> list=new ArrayList<Map<String,Object>>();
		 if(UserContext.isBsRootUser()){//超级管理员
	        	setParamsMap.put("@vehicle_list",null);
			  }
			else{
				if(sessionUser.isWorkUnitSuperAdmin()){//企业管理员
					paramMap.put("fullId", fullId);
					list = this.ibatisServices.queryForList(Map.class, "getAdminVehicleIdSQL",paramMap);
					
				}else{//普通用户
					paramMap.put("userId", userId);
					list=this.ibatisServices.queryForList(Map.class, "getVehicleIdstatSQL", paramMap);
				}
				
				if(list!=null || "".equals(list)){
					String vehiclestr="";
					String vehicleID=null;
					for(int i=0; i<list.size(); i++){
						vehiclestr +=list.get(i).get("id").toString()+"-";
					}
					vehicleID=vehiclestr.substring(0, vehiclestr.length()-1);
					setParamsMap.put("@vehicle_list",vehicleID);
				}
			}
		   
		    setParamsMap.put("@IsExport","2");
		    setParamsMap.put("@workunitid","");
			
		    String pageSize = (String)setParamsMap.get(ParamKey.PAGE_SIZE);
			Integer fromRow = RowNumUtil.getFromRowNum(fromPage, pageSize);
			Integer toRow = RowNumUtil.getToRowNum(toPage, pageSize);
			setParamsMap.put("@fromRow",String.valueOf(fromRow));
			setParamsMap.put("@toRow",String.valueOf(toRow));
			if(isSection==1){
				rows= this.ibatisServices.queryForList(Map.
						class, "getVehicleSpeedSactionStatSQL",setParamsMap);
			}else if(isSection==2){
		      rows= this.ibatisServices.queryForList(Map.
				class, "getVehicleSpeedStatSQL",setParamsMap);
			}
		return rows;
		
	}
}
