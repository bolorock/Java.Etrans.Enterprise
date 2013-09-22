package com.etrans.bubiao.services.sys;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.etrans.bubiao.entities.PageBean;
import com.etrans.bubiao.services.IbatisServices;
import com.etrans.common.util.ParamKey;

@Service
public class HistoryCheckupRecordServices {
	@Autowired
	private IbatisServices ibatisServices;

	public IbatisServices getIbatisServices() {
		return ibatisServices;
	}

	public void setIbatisServices(IbatisServices ibatisServices) {
		this.ibatisServices = ibatisServices;
	}
	
	/**
	 * 分页查询历史查岗记录信息,返回表格数据
	 * @param queryJSON
	 * @return
	 * @throws Exception
	 */
	public PageBean getHistoryCheckupRecords(Map<String,Object> params) throws Exception {
		PageBean pageBean = new PageBean();
		List<Map<String,Object>> historyCheckupRecordList = this.getHistoryCheckupRecordList(params);
		Long total = getHistoryCheckupRecordCount(params);
		
		pageBean.setPage((Integer)params.get(ParamKey.PAGE));
		pageBean.setRows(historyCheckupRecordList);
		pageBean.setTotal(total);
		return pageBean;
		
	}
	
	/**
	 * 分页查询历史查岗记录信息
	 * @param params
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings("rawtypes")
	public List<Map<String,Object>> getHistoryCheckupRecordList(Map params) throws Exception {
		
		List<Map<String,Object>> historyCheckupRecordList = this.ibatisServices.queryForList(Map.class, "getHistoryCheckupRecordsSQL",params);
		return historyCheckupRecordList;
		
	}
	
	/**
	 * 查询历史查岗数量
	 * @param params
	 * @return
	 * @throws Exception
	 */
	public Long getHistoryCheckupRecordCount(Map<String,Object> params) throws Exception {
		
		return this.ibatisServices.findIbatisListCount("historyCheckupRecordCountSQL", params);
		
	}
}
