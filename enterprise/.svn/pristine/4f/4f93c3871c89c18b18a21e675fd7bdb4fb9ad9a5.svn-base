package com.etrans.bubiao.action.query.stat.securityManager;

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
import com.etrans.bubiao.action.sys.log.LogActionTypes;
import com.etrans.bubiao.action.sys.log.LogUtil;
import com.etrans.bubiao.services.query.stat.securityManager.WorkUnitOSTimesStatService;
import com.etrans.bubiao.util.JSONUtil;
import com.etrans.common.util.DateUtil;
import com.etrans.common.util.ParamKey;
import com.etrans.common.util.excel.ExcelUtil;


/**
 * 安全管理--》超速行驶Action(按部门)
 * @author lujunyong
 *
 */
@Controller
@Scope("prototype")
@Namespace("/query/stat")
@ParentPackage("sessionPkg")
public class WorkUnitOSTimesStatAction extends BaseAction {  
	
	
	
	public WorkUnitOSTimesStatAction() {
//		super();
		super.excelTplFile="超速行驶管理（按部门）";//导出文件名称
	}

	private Map<String, Object>paramMap=null;


	private static final long serialVersionUID = 1L;
	
	@Autowired
	private WorkUnitOSTimesStatService  workUnitOSTimesStatStatService;
	
	/**
	 * 查询数据列表
	 */
	@Action(value = "findWorkUnitOSTimesStatList")
	public void findWorkUnitOSTimesStatList(){
		try {
			paramMap=this.MapParam();
			String workUnitName = getParameter("workUnitName");//企业名称
			paramMap.put("@workUnitName", workUnitName);
			log.error(DateUtil.getCurrentTime("yyyy-M-dd HH:mm:ss")+"-----------安全管理--》【超速行驶】(按部门)Action--》【查询数据列表】【开始】----------------");
			this.renderJSON(JSONUtil.toJson(workUnitOSTimesStatStatService.getWorkUnitOSTimesStatList(paramMap)));
			LogUtil.insertLog(LogActionTypes.READ, "成功", "超速行驶管理", "", "查询超速行驶管理");
		} catch (Exception e) {
			LogUtil.insertLog(LogActionTypes.READ, "失败", "超速行驶管理", "", "查询超速行驶管理");
			log.error("安全管理--》超速行驶Action(按部门)--》查询数据列表报错！报错信息如下：");
			e.printStackTrace();
		}finally{
			log.error("-----------安全管理--》超速行驶Action(按部门)--》【查询数据列表】【结束】----------------");
        }
		
	}
	
	
	/**
	 * 查询所需参数
	 * @return
	 */
	public  Map<String, Object> MapParam(){
		Map<String, Object> whereMap =new HashMap<String, Object>();
		String year =getParameter("year"); //年
		String month = getParameter("month");//月
		String day = getParameter("day");//天
		String week = getParameter("week");//周
		String workUnitName = getParameter("workUnitName");//企业名称
		String page=getParameter("page");//当前页数
		String pageSize=getParameter("rows");//每页显示多少条数据
		whereMap.put("@year", year);
		whereMap.put("@month", month);
		whereMap.put("@day", day);
		whereMap.put("@week", week);
		whereMap.put("@workUnitName", workUnitName);
		whereMap.put("@SortName", "unitname");
		whereMap.put("@SortOrder", "asc");
		whereMap.put(ParamKey.PAGE,page);
		whereMap.put(ParamKey.PAGE_SIZE,pageSize);
		
		return whereMap;
	}
	
	
	
	/**
	 * 导出Excel子类实现方法
	 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	@Override
    protected void doFillWorkbook(Workbook wb) {
    	
    	try {
        paramMap=this.MapParam();
        String workUnitName = new String(this.getParameter("workUnitName").getBytes("ISO-8859-1"),"UTF-8"); //车牌号码
        paramMap.put("@workUnitName", workUnitName);
		// 导出数据时的开始页数
		String fromPage = getParameter("frompage");
		// 导出数据时的结束页数
		String toPage = getParameter("topage");
		
		//查询导出数据列表
		List<Map<String, Object>> vehicleModels = workUnitOSTimesStatStatService.getWorkUnitOSTimesStatListExportExl(paramMap, fromPage, toPage);
		
		//列名数组，对应对象的字段
		String [] titleArray={"unitname","WeekOSTimes","MonthOSTimes","YearOSTimes","WeekOSTimes_oWeek","WeekNumber","DayOSTimes_oMonth",
				 "MonthNumber","DayOSTimes_oYear","YearNumber"};
		//写入的数据list	
		List<Object> list = new ArrayList<Object>();
			if (vehicleModels != null)
			{
				for (Map<String,Object> a : vehicleModels)
				{
					HashMap tempList =new HashMap();
					tempList.put("unitname",a.get("unitname")); //车牌
					tempList.put("WeekOSTimes",a.get("WeekOSTimes"));//本周
					tempList.put("MonthOSTimes",a.get("MonthOSTimes"));//本月止累计
					tempList.put("YearOSTimes",a.get("YearOSTimes"));//本年止累计
					tempList.put("WeekOSTimes_oWeek",a.get("WeekOSTimes_oWeek"));//上周-数量
					tempList.put("WeekNumber",a.get("WeekNumber"));//上周-本周比上周%
					tempList.put("DayOSTimes_oMonth",a.get("DayOSTimes_oMonth"));//上月-数量
					tempList.put("MonthNumber",a.get("MonthNumber"));//上月-本月比上月%
					tempList.put("DayOSTimes_oYear",a.get("DayOSTimes_oYear"));//上年-数量
					tempList.put("YearNumber",a.get("YearNumber"));//上年-本能比上年
					list.add(tempList);
				}
			}

			ExcelUtil.writeHashMapToExcel(wb.getSheetAt(0), list, titleArray, 4, 0);
			LogUtil.insertLog(LogActionTypes.READ, "成功", "超速行驶管理", "", "导出超速行驶管理");
		
    	} catch (Exception e) {
    		LogUtil.insertLog(LogActionTypes.READ, "失败", "超速行驶管理", "", "导出超速行驶管理");
			e.printStackTrace();
		}
    }
	
    
    
    /**
     * 导出Excel
     * @return
     */
    @Action(value = "doWorkUnitOSTimesStatListExportExl", results = @Result(type = "stream", params = { "contentType", "application/vnd.ms-excel",
            "bufferSize", "1024", "contentDisposition", "attachment;filename=${excelTplFile}.xls" }))
	public String doWorkUnitOSTimesStatListExportExl(){
    	try {
				Workbook wb = this.getWorkbook();
				this.doFillWorkbook(wb);
				this.setInputStreamFromWorkbook(wb);
	        	this.excelTplFile = new String(this.excelTplFile.getBytes(), "ISO-8859-1");
	        } catch (UnsupportedEncodingException e) {
	        } finally{
	        }
	        return SUCCESS;
    }
    
    
	
	
}
