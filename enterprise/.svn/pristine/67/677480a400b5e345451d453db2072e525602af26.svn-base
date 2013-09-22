package com.etrans.bubiao.services.sys;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.etrans.bubiao.entities.PageBean;
import com.etrans.bubiao.entities.Result;
import com.etrans.bubiao.services.IbatisServices;
import com.etrans.common.util.ParamKey;
import com.etrans.common.util.json.JSONUtil;

/**
 * 终端类型查询Services
 * @author tjb
 * @version 1.0
 */
@Service
public class TerminalKindServices {

	@SuppressWarnings("unused")
	private static final String RAWTYPES = "rawtypes";
	
	@Autowired
	private IbatisServices ibatisServices;

	public IbatisServices getIbatisServices() {
		return ibatisServices;
	}

	public void setIbatisServices(IbatisServices ibatisServices) {
		this.ibatisServices = ibatisServices;
	}
	/**
	 * 分页查询终端类型信息,返回表格数据
	 * @param queryJSON
	 * @return
	 * @throws Exception
	 */
	public PageBean TerminalKindList(Map<String,Object> params) throws Exception {
		
		PageBean pageBean = new PageBean();
		
		List<Map<String,Object>> list = this.getTerminalKindList(params);
		Long total = getTerminalKindCount(params);
		
		pageBean.setPage((Integer)params.get(ParamKey.PAGE));
		pageBean.setRows(list);
		pageBean.setTotal(total);
		
		return pageBean;
		
	}
	
	
	
	/**
	 * 分页查询终端类型信息list
	 * @param params
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings({"unchecked" })
	public List<Map<String,Object>> getTerminalKindList(Map params) throws Exception {
		
		List<Map<String,Object>> list = this.ibatisServices.queryForList(Map.class, "getTerminalKindListSQL",params);
		return list;
		
	}
	
	/**
	 * 查询终端类型数量count
	 * @param params
	 * @return
	 * @throws Exception
	 */
	public Long getTerminalKindCount(Map<String,Object> params) throws Exception {
		
		return this.ibatisServices.findIbatisListCount("getTerminalKindCountSQL", params);
		
	}
	
	/**
	 **新增终端类型信息详细
	 * @param whereMap
	 * @return
	 * @throws Exception
	 */
	public Object createTerminalKind(Map<String,Object> params) {
		return this.ibatisServices.insertIbatisObject("insertTerminalKindSQL", params);
	
	}
	
	 
	/**
	 * 由ID查询终端类型详细
	 * @param whereMap
	 * @return
	 * @throws Exception
	 */
	public String getTerminalKindById(Map<String,Object> whereMap) throws Exception {
		return	JSONUtil.toJson(this.ibatisServices.findIbatisList("getTerminalKindByIdSQL", whereMap));
		
	}
	
	/**
	 * 由ID修改终端类型信息详细
	 * @param whereMap
	 * @return 
	 * @return
	 * @throws Exception
	 */
	public Object updateTerminalKind(Map<String,Object> whereMap) throws Exception {
		return this.ibatisServices.updateIbatisObject("updateTerminalKindSQL", whereMap);
		
	}
	
	/**
	 * 由ID删除终端类型信息
	 * @param whereMap
	 * @return 
	 * @return
	 * @throws Exception
	 */
	public Object deleteTerminalKind(Map<String,Object> whereMap) throws Exception {
		return this.ibatisServices.deleteIbatisObject("deleteTerminalKindSQL", whereMap);
		
	}
	
	/**
	 * 验证不能有相同的终端类型名称
	 * @param whereMap
	 * @return 
	 * @return
	 * @throws Exception
	 */
		@SuppressWarnings("unchecked")
		public Result checkName(Map whereMap) throws Exception {
		Result result = new Result();
		List<Map<String,Object>> listInfo = ibatisServices.queryForList(Map.class, "checkTeminalKindNameSQL",whereMap);
			if(null!=listInfo){
				result.setData(listInfo.size());//数据
				result.setCode(1);//表示查询有数据
			}
			return result;
     	}
		
		/**
		 * 验证不能有相同的终端类型编号
		 * @param whereMap
		 * @return 
		 * @return
		 * @throws Exception
		 */
			@SuppressWarnings("unchecked")
			public Result checkKind(Map whereMap) throws Exception {
			Result result = new Result();
			List<Map<String,Object>> listInfo = ibatisServices.queryForList(Map.class, "checkKindSQL",whereMap);
				if(null!=listInfo){
					result.setData(listInfo.size());//数据
					result.setCode(1);//表示查询有数据
				}
				return result;
	     	}
			
			
	
}



