package com.etrans.bubiao.services.query.stat.securityManager;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.etrans.bubiao.auth.SessionUser;
import com.etrans.bubiao.entities.PageBean;
import com.etrans.bubiao.http.ParamKey;
import com.etrans.bubiao.services.IbatisServices;
import com.etrans.bubiao.sys.UserContext;
import com.etrans.common.util.web.RowNumUtil;

/**
 * 安全管理--》疲劳驾驶Service
 * @author lujunyong
 *
 */
@Service
public class VehicleDOTTimesStatService {
	
	protected Logger log = LogManager.getLogger(this.getClass().getName());
	
	/**ibatis对象**/
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
	
	/****
	 * 查询数据列表
	 * @param setParamsMap 条件
	 * @return 
	 * @throws Exception
	 */
	@SuppressWarnings("unchecked")
	public PageBean getVehicleDOTTimesStatList(Map setParamsMap) throws Exception{
		setParamsMap.put("@workunitid",String.valueOf(""));
		setParamsMap.put("@IsExport","1"); //1表示分页，2表示导出
		List<Map<String,Object>> rows =null;
		
		/**设置权限下的车辆字符串条件**/
		setVehicleStr(setParamsMap);
		
		/**分页条件begin**/
        String page = (String)setParamsMap.get(ParamKey.PAGE);//当前页数
		String pageSize = (String)setParamsMap.get(ParamKey.PAGE_SIZE);//每页记录数
		Integer fromRow = RowNumUtil.getFromRowNum(page, pageSize);
		Integer toRow = RowNumUtil.getToRowNum(page, pageSize);
		setParamsMap.put("@fromRow",String.valueOf(fromRow)); //分页开始行
		setParamsMap.put("@toRow",String.valueOf(toRow));//分页结束行
		/**分页条件end**/
		
		try {
			/**文件日志【传到存储过程的参数】**/
			doLoginFile(setParamsMap,"【列表】");
			
			/**执行查询**/
			if(setParamsMap.get("functionType").equals("2")){//按车辆统计
	    		rows= this.ibatisServices.queryForList(Map.class, "getVehicleDOTTimesStatSQL",setParamsMap);
			}else if(setParamsMap.get("functionType").equals("1")){//按企业统计
				rows= this.ibatisServices.queryForList(Map.class, "getVehicleDOTTimesStatSQL_W",setParamsMap);
			}
    		
		} catch (Exception e) {
			e.printStackTrace();
			log.error("报错："+e.getMessage());
		}
		
		/**设置返回对象**/
        PageBean pageBean=new PageBean();
		pageBean.setPage(Integer.valueOf(page)); //当前页
		if(rows!=null&&rows.size()>0){
			 pageBean.setRows(rows);//数据列表
			 Long totalLong=Long.valueOf(String.valueOf((rows.get(0).get("total"))));//总共数据行
			 pageBean.setTotal(totalLong);
		}
		
		return pageBean;
	}
	
	
	/**
	 * 根据不用的用户【超级管理员，企业管理员，普通用户】设置查询条件【车辆id字符串】【以“，”隔开】
	 * @param setParamsMap
	 */
	@SuppressWarnings("unchecked")
	public void setVehicleStr(Map setParamsMap){
		SessionUser sessionUser = UserContext.getLoginUser();
		Map paramMap =new HashMap();
		List<Map<String,Object>> list=null;
		String userId = String.valueOf(sessionUser.getUserID());//用户id
		String fullId=String.valueOf(sessionUser.getWorkUnitID());//企业id
		/**查询权限下的车辆begin**/
		if(UserContext.isBsRootUser()){//超级管理员
        	setParamsMap.put("@vehicle_list",null);
		  }
		else{
			if(sessionUser.isWorkUnitSuperAdmin()){//企业管理员
				paramMap.put("fullId",fullId);
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
		/**查询权限下的车辆end**/
	}
	
	
	/**
	 * 导出
	 * @param setParamsMap
	 * @param sessionUser
	 * @param fromPage
	 * @param toPage
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public  List<Map<String, Object>>  getVehicleDOTTimesStatListExportExl(Map setParamsMap,String fromPage,String toPage) throws Exception{
		
		/**设置权限下的车辆字符串条件**/
		setVehicleStr(setParamsMap);
		//1表示分页，2表示导出
	 	setParamsMap.put("@IsExport","2");
//	    setParamsMap.put("@workunitid",String.valueOf(sessionUser.getWorkUnitID()));
	 	setParamsMap.put("@workunitid","");
	 	
	 	/**分页条件begin**/
		String pageSize = (String)setParamsMap.get(ParamKey.PAGE_SIZE);
		Integer fromRow = RowNumUtil.getFromRowNum(fromPage, pageSize);
		Integer toRow = RowNumUtil.getToRowNum(toPage, pageSize);
		setParamsMap.put("@fromRow",String.valueOf(fromRow));
		setParamsMap.put("@toRow",String.valueOf(toRow));
		/**分页条件end**/
		
		/**文件日志【传到存储过程的参数】**/
		doLoginFile(setParamsMap,"【导出】");
		
		
		/**查询结果**/
		List<Map<String,Object>> rows = new ArrayList<Map<String,Object>>();
		if(setParamsMap.get("functionType").equals("2")){//按车辆统计
			 rows = this.ibatisServices.queryForList(Map.
					class, "getVehicleDOTTimesStatSQL",setParamsMap);
		}else if(setParamsMap.get("functionType").equals("1")){//按企业统计
			 rows = this.ibatisServices.queryForList(Map.
					class, "getVehicleDOTTimesStatSQL_W",setParamsMap);
			
		}
		return rows;
	}
	
	
	/***
	 * 记录文件日志【用作实际应用时日志查看】
	 * @param setParamsMap 查询条件map
	 * @param type 类型字符串
	 */
	@SuppressWarnings("unchecked")
	public void doLoginFile(Map setParamsMap,String type){
		
		log.error("-----------安全管理--》疲劳驾驶Service--》查询数据列表【传到存储过程所需参数Begin】"+type+"【统计类型："+setParamsMap.get("functionType")+"】【1表示按企业统计，2表示按车辆统计】----------------");
		log.error("年份:"+setParamsMap.get("@year"));
		log.error("月份:"+setParamsMap.get("@month"));
		log.error("天数:"+setParamsMap.get("@day"));
		log.error("周数:"+setParamsMap.get("@week"));
		log.error("车辆编号列表。“,”分隔:"+setParamsMap.get("@vehicle_list"));
		log.error("结束行:"+setParamsMap.get("@toRow"));
		log.error("开始行:"+setParamsMap.get("@fromRow"));
		log.error("车牌号:"+setParamsMap.get("@registrationNo"));
		log.error("当前企业id:"+setParamsMap.get("@workunitid"));
		log.error("所属企业:"+setParamsMap.get("@workUnitName"));
		log.error("排序列 :"+setParamsMap.get("@SortName"));
		log.error("asc or desc :"+setParamsMap.get("@SortOrder"));
		log.error("是否分页,1表示翻页，2表示导出数据 :"+setParamsMap.get("@IsExport"));
		log.error("-----------安全管理--》疲劳驾驶Service--》查询数据列表【传到存储过程所需参数End】"+type+"【统计类型："+setParamsMap.get("functionType")+"】【1表示按企业统计，2表示按车辆统计】----------------");
		
	}
	
	
}
