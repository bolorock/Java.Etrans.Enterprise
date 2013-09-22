package com.etrans.bubiao.services.driving;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.etrans.bubiao.entities.PageBean;
import com.etrans.bubiao.entities.driving.DrivingEntity;
import com.etrans.bubiao.services.IbatisServices;
import com.etrans.bubiao.sys.UserContext;
import com.etrans.common.util.FlexiGridUtil;
import com.etrans.common.util.ParamKey;
import com.etrans.common.util.web.RowNumUtil;



@Service
public class DrivingServices{
	@Autowired
	private IbatisServices ibatisServices;


	public IbatisServices getIbatisServices() {
		return ibatisServices;
	}

	public void setIbatisServices(IbatisServices ibatisServices) {
		this.ibatisServices = ibatisServices;
	}
	
	/**
	 * 分页查询,返回表格数据
	 * @param queryJSON
	 * @return
	 * @throws Exception
	 */
	public PageBean findDrivingRecordList(Map<String,Object> params) throws Exception {
		
		PageBean pageBean = new PageBean();
		
		
		params=UserContext.putUserParams(params);
		
		
		List<Map<String,Object>> data = this.getDataList(params);
		Long total = getDatasCount(params);
		
		pageBean.setPage((Integer)params.get(ParamKey.PAGE));
		pageBean.setRows(data);
		pageBean.setTotal(total);
		
		return pageBean;
		
	}
	
	
	/**	
	 * 分页查询信息
	 * @param params
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings("rawtypes")
	public List<Map<String,Object>> getDataList(Map params) throws Exception {
		String tableName=(String)params.get(ParamKey.TABLE_NAME);
		List<Map<String,Object>> simCardList = this.ibatisServices.queryForList(Map.class, "find"+tableName+"SQL",params);
		return simCardList;
		
	}
	
	/**
	 * 查询数量
	 * @param params
	 * @return
	 * @throws Exception
	 */
	public Long getDatasCount(Map<String,Object> params) throws Exception {
		String tableName=(String)params.get(ParamKey.TABLE_NAME);
		return this.ibatisServices.findIbatisListCount("find"+tableName+"CountSQL", params);
		
	}
	
	public DrivingEntity getDrivingParam(Map<String,Object> paramMap) throws Exception{
		DrivingEntity obj = new DrivingEntity();
		
		if(paramMap!=null){
			String[] titleArray = new String[paramMap.size()];
			String[] columnArray = new String[paramMap.size()];
			int i = 0; 
			
			for(Map.Entry<String,Object> entity:paramMap.entrySet()){
				titleArray[i] = String.valueOf(entity.getKey()).trim();
				columnArray[i] = String.valueOf(entity.getValue()).trim();
				i++;
			}
			obj.setColumnArray(columnArray);
			obj.setTitleArray(titleArray);
		}
		return obj;
	}
	
	public DrivingEntity getDrivingParamStr(String str) throws Exception{
		DrivingEntity obj = new DrivingEntity();
		
		if(str!=null){
			String[] splitStr = str.split(",");
			
			if(splitStr.length>0){
				String[] titleArray = new String[splitStr.length];
				String[] columnArray = new String[splitStr.length];
				int i = 0; 
				
				for(String s :splitStr){
					titleArray[i] = s.split("=")[0].trim();
					columnArray[i] = s.split("=")[1].trim();
					i++;
				}
				obj.setColumnArray(columnArray);
				obj.setTitleArray(titleArray);
			}
		}
		return obj;
	}
	
	/**
	 * 查询数据导出到EXCEL
	 * @param queryJSON 查询参数
	 * @param fromPage 开始页
	 * @param toPage 结束页
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings("unchecked")
	public List<Map<String,Object>> exportExl (String queryJSON,String fromPage,String toPage) throws Exception {
		List<Map<String,Object>> ls = new ArrayList<Map<String,Object>>();
		//把FlexiGrid传过来的json参数封装成map对象
		Map params = FlexiGridUtil.parseParam(queryJSON);
		//重新查询数据开始行数和结束行数
		String pageSize =params.get(ParamKey.PAGE_SIZE).toString();
		Integer fromRow = RowNumUtil.getFromRowNum(fromPage, pageSize);
		Integer toRow = RowNumUtil.getToRowNum(toPage, pageSize);
		params.put("fromRow", fromRow);
		params.put("toRow", toRow);
		
		String tableName = params.get(ParamKey.TABLE_NAME).toString();
		
		putUserParams(params);
		
		/**
		 * 超级管理员
		 * 【超级管理员能看到所有企业的数据】【企业管理员和普通员工都能查询这个企业下的所有数据】
		 */
		if(UserContext.isBsRootUser()){
			params.remove("workUnitId");
		}
		ls = this.ibatisServices.queryForList(Map.class,"find"+tableName+"SQL",params);
		return ls;
	}
	
	/**
	 * 获取用户信息
	 * @param params
	 * @return
	 */
	public Map<String,Object> putUserParams(Map<String,Object> params) {
		
//		Long userId = UserContext.isSuperUser() ? 0 : UserContext.getLoginUserID();
		Long userId = UserContext.getLoginUserID();
		Long workUnitId = UserContext.getLoginUser() == null ? -1 : UserContext.getLoginUser().getWorkUnitID();
		String userName = UserContext.getLoginUser() == null ? "" : UserContext.getLoginUser().getUserName();
		
		params.put("userId", userId);//用户id
		params.put("workUnitId", workUnitId); //用户所属企业id
		params.put("userName", userName);//用户名称
		
		return params;
	}
	
	
}
