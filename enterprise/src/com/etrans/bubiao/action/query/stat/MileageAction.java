package com.etrans.bubiao.action.query.stat;

import java.io.UnsupportedEncodingException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.poi.ss.usermodel.Workbook;
import org.apache.struts2.convention.annotation.Action;
import org.apache.struts2.convention.annotation.Namespace;
import org.apache.struts2.convention.annotation.Result;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;

import com.etrans.bubiao.action.BaseAction;
import com.etrans.bubiao.action.sys.log.LogActionTypes;
import com.etrans.bubiao.action.sys.log.LogUtil;
import com.etrans.bubiao.auth.SessionUser;
import com.etrans.bubiao.services.query.stat.MileageServices;
import com.etrans.bubiao.sys.UserContext;
import com.etrans.common.util.DateUtil;
import com.etrans.common.util.ParamKey;
import com.etrans.common.util.excel.ExcelUtil;
import com.etrans.common.util.json.JSONUtil;

@Controller
@Scope("prototype")
@Namespace("/query/stat")
public class MileageAction extends BaseAction{
	private static final long serialVersionUID = 1L;

	@Autowired
	private MileageServices mileageServices;
	
	@SuppressWarnings("unused")
	private Map<String, Object> params=null;
	
	public MileageAction(){
		super.excelTplFile="MileageInfoModel";
	}
	/**
	 *车辆里程统计
	 */
	@Action(value = "findMileageInfo")
	public void findMileageInfo() {
		try {
			log.error(DateUtil.getCurrentTime("yyyy-M-dd HH:mm:ss")+"-----------安全管理--》【里程统计】Action--》【查询数据列表】【开始】----------------");
			SessionUser user = UserContext.getLoginUser();
			this.renderJSON(JSONUtil.toJson(mileageServices.getMileageInfo(this.listParam(),user)));
			LogUtil.insertLog(LogActionTypes.READ, "成功", "查询车辆里程统计", "", "查询车辆里程统计");
		} catch (Exception e) {
			LogUtil.insertLog(LogActionTypes.READ, "失败", "查询车辆里程统计", "", "查询车辆里程统计");
			log.error("安全管理--》里程统计Action--》查询数据列表报错！报错信息如下："+e.getMessage());
			e.printStackTrace();
		}finally{
			log.error("-----------安全管理--》里程统计Action--》【查询数据列表】【结束】----------------");
		}

	}
	/**
	 * 导出Excel子类实现方法
	 */
    @SuppressWarnings({"unchecked" })
	@Override
    protected void doFillWorkbook(Workbook wb) {
    	try {
    		// 导出数据时的开始页数
    		String fromPage = getParameter("frompage");
    		// 导出数据时的结束页数
    		String toPage = getParameter("topage");
    		SessionUser user = UserContext.getLoginUser();
    		List<Map<String, Object>> vehicleModels = mileageServices.getMileageInfoExl(this.listParam(), user, fromPage, toPage);
    		 String [] titleArray={"registrationNo","WeekMileage","MonthMileage","YearMileage","WeekMileage_oWeek","WeekNumber","DayMileage_oMonth",
    				 "MonthNumber","DayMileage_oYear","YearNumber"};
    			List<Object> list = new ArrayList<Object>();
    			if (vehicleModels != null)
    			{
    				for (Map<String,Object> a : vehicleModels)
    				{
    					HashMap tempList =new HashMap();
    					tempList.put("registrationNo",a.get("registrationNo"));
    					tempList.put("WeekMileage",a.get("WeekMileage"));
    					tempList.put("MonthMileage",a.get("MonthMileage"));
    					tempList.put("YearMileage",a.get("YearMileage"));
    					tempList.put("WeekMileage_oWeek",a.get("WeekMileage_oWeek"));
    					tempList.put("WeekNumber",a.get("WeekNumber"));
    					tempList.put("DayMileage_oMonth",a.get("DayMileage_oMonth"));
    					tempList.put("MonthNumber",a.get("MonthNumber"));
    					tempList.put("DayMileage_oYear",a.get("DayMileage_oYear"));
    					tempList.put("YearNumber",a.get("YearNumber"));
    					list.add(tempList);
    				}
    			}

    			ExcelUtil.writeHashMapToExcel(wb.getSheetAt(0), list, titleArray, 4, 0);
    			LogUtil.insertLog(LogActionTypes.READ, "成功", "导出车辆里程统计", "", "导出车辆里程统计");
		} catch (Exception e) {
			LogUtil.insertLog(LogActionTypes.READ, "失败", "导出车辆里程统计", "", "导出车辆里程统计");
			log.error(DateUtil.getDatePattern()+"安全管理--》里程统计Action--》导出数据报错！报错信息如下："+e.getMessage());
			e.printStackTrace();
		}
    }
	
	

	 @Action(value = "MileageExportExl", results = @Result(type = "stream", params = { "contentType", "application/vnd.ms-excel",
           "bufferSize", "1024", "contentDisposition", "attachment;filename=${excelTplFile}.xls" }))
	public String OilExportExl() throws UnsupportedEncodingException
	{
		 params=this.listParam();
		 Workbook wb = this.getWorkbook();
	        this.doFillWorkbook(wb);
	        this.setInputStreamFromWorkbook(wb);
	        try {
	        	log.error(DateUtil.getCurrentTime("yyyy-M-dd HH:mm:ss")+"-----------安全管理--》【里程统计】Action--》【导出】【开始】----------------");
	            this.excelTplFile = new String(this.excelTplFile.getBytes(), "ISO-8859-1");
	        } catch (UnsupportedEncodingException e) {
	        	log.error("安全管理--》里程统计Action--》导出数据报错！报错信息如下："+e.getMessage());
	        }finally{
				log.error("-----------安全管理--》里程统计Action--》【导出】【结束】----------------");
	        }
	        return SUCCESS;
	}
	
	
	private Map<String, Object> listParam() throws UnsupportedEncodingException{
		String year =getParameter("year");
		String month = getParameter("month");
		String day = getParameter("day");
		String week = getParameter("week");
		String workUnitName = null;
		String registrationNo = null;
		String vehicleIds = null;
		if(getParameter("vehicleIds").equals("")){
			vehicleIds=null;
		}else{
			vehicleIds = getParameter("vehicleIds").toString();
		}
		if(getParameter("flag").toString().equals("0")){
		    registrationNo = getParameter("registrationNo").toString();
		    workUnitName = getParameter("workUnitName");
		}
		if(getParameter("flag").toString().equals("1")){
			registrationNo = new String(getParameter("registrationNo").toString().getBytes("ISO-8859-1"),"UTF-8");
			workUnitName = new String(getParameter("workUnitName").toString().getBytes("ISO-8859-1"),"UTF-8");
		}
		String page=getParameter("page");
		String pageSize=getParameter("rows");
		Map<String, Object> whereMap =new HashMap<String, Object>();
		whereMap.put("@year", year);
		whereMap.put("@month", month);
		whereMap.put("@day", day);
		whereMap.put("@week", week);
		whereMap.put("@workUnitName", workUnitName);
		whereMap.put("@registrationNo", registrationNo);
		whereMap.put("@SortName", "id");
		whereMap.put("@SortOrder", "desc");
		whereMap.put("@VehicleIds", vehicleIds);
		whereMap.put(ParamKey.PAGE,page);
		whereMap.put(ParamKey.PAGE_SIZE,pageSize);
		return whereMap;
	}
	
}
