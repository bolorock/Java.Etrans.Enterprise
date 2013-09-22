package com.etrans.bubiao.action.driving;

import java.util.List;
import java.util.Map;

import org.apache.struts2.convention.annotation.Action;
import org.apache.struts2.convention.annotation.Namespace;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;

import com.etrans.bubiao.action.BaseAction;
import com.etrans.bubiao.entities.driving.DrivingEntity;
import com.etrans.bubiao.http.HttpException;
import com.etrans.bubiao.services.driving.DrivingServices;
import com.etrans.bubiao.sys.UserContext;
import com.etrans.bubiao.util.DaoUtil;
import com.etrans.common.util.FlexiGridUtil;
import com.etrans.common.util.ParamKey;

@Controller
@Scope("prototype")
@Namespace("/driving")
public class DrivingAction extends BaseAction {

	/**
	  * 
	  */
	private static final long serialVersionUID = -3451201678430405143L;

	private String[] columnArr;
	
	@Action(value="findDrivingRecordList")
	public void findDrivingRecordList(){
		try {
			Map<String,Object> params = FlexiGridUtil.parseParam(this.getGridParams());
			//企业id
			Long workUnitId = UserContext.getLoginUser() == null ? -1 : UserContext.getLoginUser().getWorkUnitID();
			
			/**
			 * 不是超级管理员
			 * 【超级管理员能看到所有企业的数据】【企业管理员和普通员工都能查询这个企业下的所有数据】
			 */
			if(!UserContext.isBsRootUser()){
				params.put("workUnitId", workUnitId); //用户所属企业id
			}
			
			this.renderJSON(drivingServices.findDrivingRecordList(params));
		} catch (HttpException e) {
			System.out.println("ErrorCode : " + e.getStatusCode());
			System.out.println("ErrorCode : " + e.getMessage());
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	@Action(value = "findDrivingExportExl")
	public void findDrivingExportExl() {
		String setParam = getParameter(ParamKey.SET_PARAM);
		String exportFileName = getParameter(ParamKey.EXPORT_FILENAME) ;
		
		// 导出数据时的开始页数
		String fromPage = getParameter("frompage");
		// 导出数据时的结束页数
		String toPage = getParameter("topage");
		
		try {
			
			if(setParam!=null){
				DrivingEntity obj = drivingServices.getDrivingParamStr(setParam);
				
				String[] titleArray = obj.getTitleArray();
				String[] columnArray = obj.getColumnArray();
			
				List<Map<String,Object>> rows = drivingServices.exportExl(this.getGridParams(),fromPage,toPage);
				exportExl(exportFileName, titleArray, columnArray, rows);
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	
	@Autowired
	private DrivingServices  drivingServices;

	public DrivingServices getDrivingServices() {
		return drivingServices;
	}

	public void setDrivingServices(
			DrivingServices drivingServices) {
		this.drivingServices = drivingServices;
	}

	public String[] getColumnArr() {
		return columnArr;
	}

	public void setColumnArr(String[] columnArr) {
		this.columnArr = columnArr;
	}

}
