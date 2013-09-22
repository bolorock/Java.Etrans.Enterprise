package com.etrans.bubiao.services.videoManage;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.etrans.bubiao.entities.PageBean;
import com.etrans.bubiao.entities.Result;
import com.etrans.bubiao.services.IbatisServices;
import com.etrans.common.util.ParamKey;
import com.etrans.common.util.json.JSONUtil;
@Service
public class PeripheralTypeListServices {
	@Autowired
	private IbatisServices ibatisServices;

	public IbatisServices getIbatisServices() {
		return ibatisServices;
	}

	public void setIbatisServices(IbatisServices ibatisServices) {
		this.ibatisServices = ibatisServices;
	}
	
	/**
	 * 分页查询外设类型信息,返回表格数据
	 * @param queryJSON
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings("unchecked")
	public PageBean getPeripheralTypeList(Map<String,Object> params) throws Exception {
		
		PageBean pageBean = new PageBean();
		
		List<Map<String,Object>> perpheralTypeList = this.getPeripheralType(params);
		Long total = getPeripheralTypeCount(params);
		
		pageBean.setPage((Integer)params.get(ParamKey.PAGE));
		pageBean.setRows(perpheralTypeList);
		pageBean.setTotal(total);
		
		return pageBean;
		
	}
	
	
	/**
	 * 分页查询外设类型信息
	 * @param params
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings("rawtypes")
	public List<Map<String,Object>> getPeripheralType(Map params) throws Exception {
		List<Map<String,Object>>  peripheralTypeList = this.ibatisServices.queryForList(Map.class, "getPeripheralTypeSQL",params);
		return peripheralTypeList;
	}
	
	/**
	 * 查询外设类型数量
	 * @param params
	 * @return
	 * @throws Exception
	 */
	public Long getPeripheralTypeCount(Map<String,Object> params) throws Exception {
		return this.ibatisServices.findIbatisListCount("getPeripheralTypeCountSQL", params);
		
	}
	
	/**
	 **新增外设类型信息
	 */

	public Object createPeripheralType(Map<String,Object> params) {
		
		return this.ibatisServices.insertIbatisObject("insertPeripheralTypeSQL", params);
	
	}
	
	/**
	 * 由ID查询外设类型
	 * @param whereMap
	 * @return
	 * @throws Exception
	 */
	public String getPeripheralTypeById(Map<String,Object> whereMap) throws Exception {
		return	JSONUtil.toJson(this.ibatisServices.findIbatisList("getPeripheralTypeByIdSQL", whereMap));
		
	}
	
	/**
	 *  由ID修改外设类型信息
	 * @param whereMap
	 * @return
	 * @throws Exception
	 */
	public Object updatePeripheralType(Map<String,Object> whereMap) throws Exception {
		return this.ibatisServices.updateIbatisObject("updatePeripheralTypeSQL", whereMap);
	}
	
	/**
	 * 由ID删除外设类型信息
	 * @param whereMap
	 * @return 
	 * @return
	 * @throws Exception
	 */
	public Object deletePeripheralType(Map<String,Object> whereMap) throws Exception {
		
		return this.ibatisServices.deleteIbatisObject("deletePeripheralTypeSQL", whereMap);
	}
	
	/**
	 * 验证不能有相同的名称
	 * @param whereMap
	 * @return 
	 * @return
	 * @throws Exception
	 */
		@SuppressWarnings("unchecked")
		public Result checkName(Map whereMap) throws Exception {
		Result result = new Result();
		List<Map<String,Object>> listInfo = ibatisServices.queryForList(Map.class, "checkIsSoleNameSQL",whereMap);
		if(null!=listInfo){
			result.setData(listInfo.size());//数据
			result.setCode(1);//表示查询有数据
		}
		return result;
	}
		
		
	
}
