package com.etrans.bubiao.action;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.poi.ss.usermodel.Workbook;
import org.apache.struts2.convention.annotation.Namespace;
import org.apache.struts2.convention.annotation.ParentPackage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;

import com.etrans.bubiao.services.sys.UserServices;
import com.etrans.common.util.excel.ExcelUtil;

/** 
 * 导出Excel示范类
 * 
 * @author Pomelo(柚子.)  
 * @version 1.0
 * @since 创建时间：2013-4-12 上午10:13:58 
 */
@Controller
@Scope("prototype")
@Namespace("/excel")
@ParentPackage("sessionPkg")
public class ExceportExcelTestAction extends BaseAction{

	private static final long serialVersionUID = 1L;
	/**
 	 * 用户信息Services
 	 */
 	@Autowired
 	private UserServices userServices; 
 	
 	public ExceportExcelTestAction(){
 		super.excelTplFile="userModel";
 	}
	/**
	 * 导出Excel子类实现方法
	 */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	@Override
    protected void doFillWorkbook(Workbook wb) {
    	try {
    		Map<String,Object> map = new HashMap<String,Object>();
    		map.put("name","admin");
    		HashMap valueMap = userServices.getPubUserByName(map);
    		List valueList = new ArrayList();
    		valueList.add(valueMap);
    		String[] cols = new String[] {"id","UserName"};
    		ExcelUtil.writeHashMapToExcel(wb.getSheetAt(0), valueList, cols, 2, 0);
		} catch (Exception e) {
			log.error("查询数据异常");
		}
    }
}

