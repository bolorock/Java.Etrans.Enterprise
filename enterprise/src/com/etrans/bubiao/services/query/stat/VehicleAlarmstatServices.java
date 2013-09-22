package com.etrans.bubiao.services.query.stat;


import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.etrans.bubiao.entities.PageBean;
import com.etrans.bubiao.services.IbatisServices;
import com.etrans.common.util.AlarmTypeUtil;
import com.etrans.common.util.ParamKey;
/**
 * 车辆报警统计Services
 * @author yangzhen
 * @version 1.0
 */
@Service
public class VehicleAlarmstatServices
{
    
	@Autowired
	private IbatisServices ibatisServices;
	
	/**
	 * 描述：分页获取报警统计信息
	 * 
	 * @author yangzhen
	 * @since Create on 2012-5-16
	 * @return List<HashMap<String, String>> 报警信息
	 * @version Copyright (c) 2012 by e_trans.
	 */
	public PageBean getVehicleAlarms(Map<String,Object> params) throws Exception{
        PageBean pageBean = new PageBean();
		List<Map<String,Object>> VehicleAlarmList = this.getVehicleAlarmList(params);
		Long total = getVehicleAlarmCount(params);
		
		pageBean.setPage((Integer)params.get(ParamKey.PAGE));
		pageBean.setRows(VehicleAlarmList);
		pageBean.setTotal(total);
		return pageBean;
	}
	
	
    @SuppressWarnings("unchecked")
	public List<Map<String,Object>> getVehicleAlarmList(Map params) throws Exception {
    	String startDate = (String)params.get("startDate");
		String endDate = (String)params.get("endDate");
		String alarmTypeNo = (String)params.get("AlarmOperationID");
    	if(alarmTypeNo != null && !alarmTypeNo.equals("-1")){
			params.put("alarmTypeIds", alarmTypeNo);
		}else{
			String alarmTypeIds = AlarmTypeUtil.getAlarmTypeIds();
			params.put("alarmTypeIds", alarmTypeIds);
		}
		List<Map<String,Object>> VehicleAlarmList = this.ibatisServices.queryForList(Map.class, "getVehicleAlarmSQL",params);
		
		
		List<String> alarmTypeArr = null;
		if(VehicleAlarmList != null && VehicleAlarmList.size()>0){
			for(Map<String,Object> AlarmMap : VehicleAlarmList){
				Integer VehicleID=(Integer)AlarmMap.get("id");
				Integer AlarmTotal=(Integer)AlarmMap.get("AlarmSum");
				Integer AlarmHandleTotal=(Integer)AlarmMap.get("AlarmHandleSum");
				alarmTypeArr = new ArrayList<String>();
				params.put("startDate", startDate);
				params.put("endDate", endDate);
				params.put("VehicleID", VehicleID);
				List<Map<String,Object>> VehicleAlarms=this.ibatisServices.queryForList(Map.class, "getVehicleAlarmSumSQL",params);
				Integer allAlarmTotal = 0;
				Integer allAlarmHandleTotal = 0;
				if(VehicleAlarms != null && VehicleAlarms.size()>0){
					for(Map<String,Object> alarm : VehicleAlarms){
						Integer AlarmOperationID = (Integer)alarm.get("AlarmOperationID");
						if(AlarmOperationID!=null){
							alarmTypeArr.add(String.valueOf(AlarmOperationID));
							Integer AlarmSum = (Integer)alarm.get("AlarmSum");
							allAlarmTotal += AlarmSum;
							Integer AlarmHandleSum = (Integer)alarm.get("AlarmHandleSum");
							allAlarmHandleTotal+=AlarmHandleSum;
							StringBuffer buffer = new StringBuffer();
							buffer.append("报警数:[").append(AlarmSum).append("]；已处理:[").append(AlarmHandleSum).append("]");
							AlarmMap.put("AlarmName" + AlarmOperationID, buffer.toString());
						}
						
					}
				}
				
				List<String> allAlarmType = AlarmTypeUtil.getAlarmTypeIdList();
				for(String at : allAlarmType){
					if(!alarmTypeArr.contains(at.toString())){
						AlarmMap.put("AlarmName" + at, "报警数:[0]；已处理:[0]");
					}
				}
				
				if(alarmTypeNo != null && alarmTypeNo.equals("-1")){
					StringBuffer buffer1 = new StringBuffer();
					buffer1.append("报警数:[").append(AlarmTotal-allAlarmTotal).append("]；已处理:[").append(AlarmHandleTotal-allAlarmHandleTotal).append("]");
					AlarmMap.put("AlarmNameQT", buffer1.toString());
				}
			}
			
			
		}
		return VehicleAlarmList;
		
	}
    
    
    /**
     * 车辆报警统计图
     * @param queryJSON
     * @return
     * @throws Exception
     */
	@SuppressWarnings("unchecked")
	public List<Map<String,Object>> getVehicleAlarmCharts (Map params) throws Exception {
		String startDate = (String)params.get("startDate");
		String endDate = (String)params.get("endDate");
		String registrationNO = (String)params.get("registrationNO");
		String workUnitName = (String)params.get("workUnitName");
		String alarmTypeNo = (String)params.get("AlarmOperationID");
    	if(alarmTypeNo != null && !alarmTypeNo.equals("-1")){
			params.put("alarmTypeIds", alarmTypeNo);
		}else{
			String alarmTypeIds = AlarmTypeUtil.getAlarmTypeIds();
			params.put("alarmTypeIds", alarmTypeIds);
		}
    	params.put("startDate", startDate);
		params.put("endDate", endDate);
		params.put("registrationNO", registrationNO);
		params.put("workUnitName", workUnitName);
		List<Map<String,Object>> VehicleAlarmList = this.ibatisServices.queryForList(Map.class, "getVehicleAlarmChartSQL",params);
		return VehicleAlarmList;
		
	}
    
    
    
    /**
	 * 由选择的报警类型组装EXL文件表头
	 * @param param
	 * @return
	 */
	public String[] getExlTitls(Map<String,Object> param){
		
		List<String> titleList = new ArrayList<String>();
		titleList.add("车牌号");
		titleList.add("所属单位");
		String alarmTypeNo = (String)param.get("AlarmOperationID");
		if(alarmTypeNo != null && !alarmTypeNo.equals("-1")){
			titleList.add(AlarmTypeUtil.getAlarmTypeNameById(alarmTypeNo));
		}else{
			titleList.addAll(AlarmTypeUtil.getAlarmTypeNameList());
		}
		if(alarmTypeNo != null && alarmTypeNo.equals("-1")){
			titleList.add("其他报警");
		}
		titleList.add("报警总数(次数)");
		titleList.add("报警处理数(次数)");
		String[] titleArray = new String[titleList.size()];
		for(int i = 0;i<titleList.size();i++){
			titleArray[i] = titleList.get(i);
		}
		return titleArray;
	}
	
	/**
	 * 由选择的报警类型组装EXL文件列值
	 * @param param
	 * @return
	 */
	public String[] getExlColumns(Map<String,Object> param){
		
		List<String> columnList = new ArrayList<String>();
		columnList.add("registrationNO");
		columnList.add("workUnitName");
		String alarmTypeNo = (String)param.get("AlarmOperationID");
		if(alarmTypeNo != null && !alarmTypeNo.equals("-1")){
			columnList.add("AlarmName" + alarmTypeNo);
		}else{
			List<String> idList = AlarmTypeUtil.getAlarmTypeIdList();
			if(idList != null && idList.size() > 0){
				for(String id : idList){
					columnList.add("AlarmName" + id);
				}
			}
		}
		if(alarmTypeNo != null && alarmTypeNo.equals("-1")){
			columnList.add("AlarmNameQT");
		}
		columnList.add("AlarmSum");
		columnList.add("AlarmHandleSum");
		
		String[] columnArray = new String[columnList.size()];
		for(int i = 0;i<columnList.size();i++){
			columnArray[i] = columnList.get(i);
		}
		return columnArray;
	}
	
    public Long getVehicleAlarmCount(Map<String,Object> params) throws Exception {
		return this.ibatisServices.findIbatisListCount("getVehicleAlarmCountSQL", params);
	}

	public IbatisServices getIbatisServices()
	{
		return ibatisServices;
	}


	public void setIbatisServices(IbatisServices ibatisServices)
	{
		this.ibatisServices = ibatisServices;
	}
	
	

}
