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
import com.etrans.bubiao.http.Result;
import com.etrans.bubiao.services.IbatisServices;
import com.etrans.bubiao.sys.UserContext;
import com.etrans.common.util.FlexiGridUtil;
import com.etrans.common.util.json.JSONUtil;
import com.etrans.common.util.web.RowNumUtil;

/**
 * 车辆上线率统计 
 * */
@Service
public class VehicleUpLineStatService {
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
	public PageBean getVehicleUpLineInfo(String queryJSON,SessionUser sessionUser) throws Exception{
		Map setParamsMap=FlexiGridUtil.parseJSONParamForProcedure(queryJSON);
		//判断当前是否为部门统计，--1为部门统计，2--为车辆统计
	//	Integer sataType = (Integer)param.getWhereParam().get("sataType");
		Integer isSection=Integer.parseInt(setParamsMap.get("@isSection").toString());
		setParamsMap.put("@workunitid","");
		//分页
		setParamsMap.put("@IsExport","1");
		//获取当前用户id和企业id
		String userId = String.valueOf(sessionUser.getUserID());
		String fullId=String.valueOf(sessionUser.getWorkUnitID());
		Map paramMap =new HashMap();
		//当前用户下所有的车辆
		List<Map<String,Object>> list=null;
		//统计的数据结果集
		List<Map<String,Object>> rows =null;
		   
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
			//判断当前是否为部门统计
			if(isSection==1){
				rows= this.ibatisServices.queryForList(Map.class, "getVehicleSectionUpLineStatSQL",setParamsMap);
			}else if(isSection==2){
    		    rows= this.ibatisServices.queryForList(Map.class, "getVehicleUpLineStatSQL",setParamsMap);
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
	public  List<Map<String, Object>>  getVehicleUpLineExportExl(String queryJSON,SessionUser sessionUser,String fromPage,String toPage) throws Exception{
		
		Map setParamsMap=FlexiGridUtil.parseJSONParamForProcedure(queryJSON);
		//判断当前是否为部门统计，--1为部门统计，0--为车辆统计
		Integer isSection=Integer.parseInt(setParamsMap.get("@isSection").toString());
		System.out.println("isSection========"+isSection);
		String userId = String.valueOf(sessionUser.getUserID());
		String fullId=String.valueOf(sessionUser.getWorkUnitID());
		Map paramMap =new HashMap();
		List<Map<String,Object>> list=new ArrayList<Map<String,Object>>();
		//当前导出的结果集
		List<Map<String,Object>> rows=null;
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
			rows = this.ibatisServices.queryForList(Map.
					class, "getVehicleSectionUpLineStatSQL",setParamsMap);
		}else if(isSection==2){
		    rows = this.ibatisServices.queryForList(Map.
				class, "getVehicleUpLineStatSQL",setParamsMap);
		}
		return rows;
		
	}
}
