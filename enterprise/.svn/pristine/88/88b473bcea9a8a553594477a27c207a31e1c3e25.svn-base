package com.etrans.bubiao.action.query.stat;

import java.io.UnsupportedEncodingException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.poi.ss.usermodel.Workbook;
import org.apache.struts2.convention.annotation.Action;
import org.apache.struts2.convention.annotation.Namespace;
import org.apache.struts2.convention.annotation.ParentPackage;
import org.apache.struts2.convention.annotation.Result;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;

import com.etrans.bubiao.action.BaseAction;
import com.etrans.bubiao.auth.SessionUser;
import com.etrans.bubiao.services.query.stat.VehicleSpeedStatService;
import com.etrans.bubiao.sys.UserContext;
import com.etrans.bubiao.util.JSONUtil;
import com.etrans.common.util.DateUtil;
import com.etrans.common.util.ParamKey;
import com.etrans.common.util.excel.ExcelUtil;

@Controller
@Scope("prototype")
@Namespace("/query/stat")
@ParentPackage("sessionPkg")
public class VehicleSpeedSactionAction extends BaseAction{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	private Map<String, Object> params=null;
	@Autowired
	private VehicleSpeedStatService  vehicleSpeedStatService;
	
	private VehicleSpeedSactionAction(){
		
		super.excelTplFile="企业车辆速度统计";
	}
	
	@Action(value = "findVehicleSpeedSactionList")
	public void findVehicleSpeedSactionList(){
		try {
			params=this.listParam();
			String workUnitName = getParameter("workUnitName");
			params.put("@workUnitName", workUnitName);
			params.put("@registrationNo", "");
			SessionUser user = UserContext.getLoginUser();
			log.error(DateUtil.getCurrentTime("yyyy-M-dd HH:mm:ss")+"-----------安全管理--》【速度统计】Action--》【查询数据列表】【开始】----------------");
			this.renderJSON(JSONUtil.toJson(vehicleSpeedStatService.getVehicleSpeedInfo(params,user)));
		} catch (Exception e) {
			log.error("安全管理--》速度统计Action--》查询数据列表报错！报错信息如下："+e.getMessage());
			e.printStackTrace();
		}finally{
			log.error("-----------安全管理--》速度统计Action--》【查询数据列表】【结束】----------------");
		}
		
	}
	
	
	 @Action(value = "VehicleSpeedSactionListExportExl", results = @Result(type = "stream", params = { "contentType", "application/vnd.ms-excel",
	            "bufferSize", "1024", "contentDisposition", "attachment;filename=${excelTplFile}.xls" }))
		public String VehicleSpeedListExportExl() throws UnsupportedEncodingException
		{
			 params=this.listParam();
//			 String registrationNo = new String(this.getParameter("registrationNo").getBytes("ISO-8859-1"),"UTF-8"); 
			 String workUnitName = new String(this.getParameter("workUnitName").getBytes("ISO-8859-1"),"UTF-8"); 
			 params.put("@registrationNo","");
			 params.put("@workUnitName", workUnitName);
//	 		System.out.println("paramsGrid==="+getParameter("paramsGrid"));
			 Workbook wb = this.getWorkbook();
		        this.doFillWorkbook(wb);
		        this.setInputStreamFromWorkbook(wb);
		        try {
					log.error(DateUtil.getCurrentTime("yyyy-M-dd HH:mm:ss")+"-----------安全管理--》【速度统计】Action--》【导出】【开始】----------------");
					this.excelTplFile = new String(this.excelTplFile.getBytes(),
							"ISO-8859-1");
				} catch (UnsupportedEncodingException e) {
					log.error("安全管理--》速度统计Action--》导出数据报错！报错信息如下："+e.getMessage());
				}finally{
					log.error("-----------安全管理--》速度统计Action--》【导出】【结束】----------------");
		        }
		        return SUCCESS;
		}
	 
	 
	 
	 /**
		 * 导出Excel子类实现方法
		 */
	    @SuppressWarnings({ "rawtypes", "unchecked" })
		@Override
	    protected void doFillWorkbook(Workbook wb) {
	    	try {

	    		// 导出数据时的开始页数
	    		String fromPage = getParameter("frompage");
	    		// 导出数据时的结束页数
	    		String toPage = getParameter("topage");
	    		SessionUser user = UserContext.getLoginUser();
	    		List<Map<String, Object>> vehicleModels = vehicleSpeedStatService.getVehicleSpeedExportExl(params, user, fromPage, toPage);
	    		 String [] titleArray={"unitname","WeekAveSpeed","MonthAveSpeed","YearAveSpeed","WeekAveSpeed_oWeek","WeekNumber","DayAveSpeed_oMonth",
	    				 "MonthNumber","DayAveSpeed_oYear","YearNumber"};
	    			List list = new ArrayList();
	    			if (vehicleModels != null)
	    			{
	    				for (Map<String,Object> a : vehicleModels)
	    				{
//	    					List<Object> tempList = new ArrayList<Object>();
	    					HashMap tempList =new HashMap();
	    					tempList.put("unitname",a.get("unitname"));
	    					tempList.put("WeekAveSpeed",a.get("WeekAveSpeed"));
	    					tempList.put("MonthAveSpeed",a.get("MonthAveSpeed"));
	    					tempList.put("YearAveSpeed",a.get("YearAveSpeed"));
	    					tempList.put("WeekAveSpeed_oWeek",a.get("WeekAveSpeed_oWeek"));
	    					tempList.put("WeekNumber",a.get("WeekNumber"));
	    					tempList.put("DayAveSpeed_oMonth",a.get("DayAveSpeed_oMonth"));
	    					tempList.put("MonthNumber",a.get("MonthNumber"));
	    					tempList.put("DayAveSpeed_oYear",a.get("DayAveSpeed_oYear"));
	    					tempList.put("YearNumber",a.get("YearNumber"));
	    					list.add(tempList);
	    				}
	    			}

	    			ExcelUtil.writeHashMapToExcel(wb.getSheetAt(0), list, titleArray, 4, 0);
	    		
			} catch (Exception e) {
				log.error(DateUtil.getDatePattern()+"安全管理--》速度统计Action--》导出数据报错！报错信息如下："+e.getMessage());
				e.printStackTrace();
			}
	    }
	 
	 private Map<String, Object> listParam() throws UnsupportedEncodingException{
			String year =getParameter("year");
			String month = getParameter("month");
			String day = getParameter("day");
			String week = getParameter("week");
			String page=getParameter("page");
			String pageSize=getParameter("rows");
			String isSection= getParameter("isSection");
			Map<String, Object> whereMap =new HashMap<String, Object>();
			whereMap.put("@year", year);
			whereMap.put("@month", month);
			whereMap.put("@day", day);
			whereMap.put("@week", week);
			whereMap.put("@SortName", "id");
			whereMap.put("@SortOrder", "desc");
			whereMap.put("@isSection", isSection);
			whereMap.put(ParamKey.PAGE,page);
			whereMap.put(ParamKey.PAGE_SIZE,pageSize);
			return whereMap;
		}
		
}
