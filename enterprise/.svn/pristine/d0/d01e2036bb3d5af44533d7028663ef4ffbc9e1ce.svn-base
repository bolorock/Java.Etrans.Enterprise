package com.etrans.bubiao.services.query.stat;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.etrans.bubiao.auth.SessionUser;
import com.etrans.bubiao.entities.PageBean;
import com.etrans.bubiao.http.ParamKey;
import com.etrans.bubiao.http.ParamMap;
import com.etrans.bubiao.http.Result;
import com.etrans.bubiao.services.BaseServices;
import com.etrans.bubiao.services.IbatisServices;
import com.etrans.bubiao.sys.UserContext;
import com.etrans.common.util.FlexiGridUtil;
import com.etrans.common.util.json.JSONUtil;
import com.etrans.common.util.web.RowNumUtil;

@Service
public class UplinePercentService extends BaseServices{
	@Autowired
	private IbatisServices ibatisServices;

	public IbatisServices getIbatisServices() {
		return ibatisServices;
	}

	public void setIbatisServices(IbatisServices ibatisServices) {
		this.ibatisServices = ibatisServices;
	}
	
	/**
     * 车辆上线统计
     * @param queryJSON
     * @return
     * @throws Exception
     */
	public PageBean getUplinePercents (Map<String,Object> params) throws Exception {
		
		PageBean pageBean = new PageBean();
		List<Map<String,Object>> ls = this.getUplinePercentList(params);
		Long total = this.getUplinePercentCount(params);
		pageBean.setPage((Integer)params.get(ParamKey.PAGE));
		pageBean.setRows(ls);
		pageBean.setTotal(total);
		return pageBean;
		
	}
	
	
	/**
     * 车辆上线统计图
     * @param queryJSON
     * @return
     * @throws Exception
     */
	@SuppressWarnings("unchecked")
	public List<Map<String,Object>> getUplinePercentCharts (Map params) throws Exception {
		
		List<Map<String,Object>> ls = this.ibatisServices.queryForList(Map.class, "uplinePercentChartSQL",params);
		return ls;
		
	}
	
	/**
	 * 导出到EXCEL
	 * @param queryJSON
	 * @param fromPage
	 * @param toPage
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings("unchecked")
	public  List<Map<String, Object>>  uplinePercentExportExl(Map param) throws Exception{
		List<Map<String,Object>> rows = this.ibatisServices.queryForList(Map.class, "uplinePercentSQL",param);
		return rows;
		
	}
	
	@SuppressWarnings("unchecked")
	public List<Map<String,Object>> getUplinePercentList(Map params) throws Exception {
		List<Map<String,Object>> ls = this.ibatisServices.queryForList(Map.class, "uplinePercentSQL",params);
		return ls;
		
	}
	
	
	public Long getUplinePercentCount(Map<String,Object> params) throws Exception {
		return this.ibatisServices.findIbatisListCount("uplinePercentCountSQL", params);
		
	}
	



}
