package com.etrans.bubiao.action.query.stat;

import java.util.List;
import java.util.Map;

import org.apache.struts2.convention.annotation.Action;
import org.apache.struts2.convention.annotation.Namespace;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;

import com.etrans.bubiao.action.BaseAction;
import com.etrans.bubiao.http.HttpException;
import com.etrans.bubiao.services.IbatisServices;
import com.etrans.bubiao.services.query.stat.VehicleOnlinePercertMysqlServices;

@Controller
@Scope("prototype")
@Namespace("/query/stat")
public class VehicleOnlinePercertMysqlAction extends BaseAction {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	@Autowired
	private VehicleOnlinePercertMysqlServices vehicleOnlinePercertMysqlServices;

	@Autowired
	private IbatisServices ibatisServices;
	public IbatisServices getIbatisServices() {
		return ibatisServices;
	}

	public void setIbatisServices(IbatisServices ibatisServices) {
		this.ibatisServices = ibatisServices;
	}
	
	
	/**
	 *车辆在线统计	
	 */
	@Action(value = "findVehicleOnlinePercertList_mysql")
	public void findVehicleOnlinePercertList_mysql() {
		try {
			this.renderJSON(vehicleOnlinePercertMysqlServices.findVehicleOnlineMysqlList(this.getGridParams()));
		
		} catch (Exception e) {
			e.printStackTrace();
		}
		
	}
	
	/**
	 * 车辆在线率统计导出EXECL表格
	 */
	@Action(value = "vehicleOnlinePercertExportMysqlExl")
	public void vehicleOnlinePercertExportMysqlExl() {
		
		// 导出数据时的开始页数
		String fromPage = getParameter("frompage");
		// 导出数据时的结束页数
		String toPage = getParameter("topage");
		
		
		
		try {
			
			String[] titleArray = {};
			titleArray = new String[7];
			titleArray[0]="车牌";
			titleArray[1]="所属单位";
			titleArray[2]="车辆在线总数";
			titleArray[3]="车辆在线率";
			titleArray[4]="车辆离线率";
			
			String[] columnArray = {};
			columnArray = new String[7];
			columnArray[0]="registrationNo";
			columnArray[1]="workUnitName";
			columnArray[2]="vehiclecount";
			columnArray[3]="onLineRate";
			columnArray[4]="offLineRate";
			
			List<Map<String,Object>> rows = vehicleOnlinePercertMysqlServices.vehicleOnlinePercertExportMysqlExl(this.getGridParams(),fromPage,toPage);
			exportExl("vehicleOnlinePercertMysqlList", titleArray, columnArray, rows);
			
		} catch (HttpException e) {
			System.out.println("ErrorCode : " + e.getStatusCode());
			System.out.println("ErrorCode : " + e.getMessage());
		} catch (Exception e) {
			e.printStackTrace();
		}
	}



}
