package com.etrans.bubiao.services.query;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.etrans.bubiao.auth.SessionUser;
import com.etrans.bubiao.entities.PageBean;
import com.etrans.bubiao.services.IbatisServices;
import com.etrans.bubiao.sys.UserContext;
import com.etrans.common.util.FlexiGridUtil;
import com.etrans.common.util.ParamKey;
import com.etrans.common.util.web.RowNumUtil;
import com.etrans.bubiao.entities.Result;

/**
 * 操作日志查询
 * @author Administrator
 *
 */
@Service
public class WorkDateLogServices {
	
	@Autowired
	private IbatisServices ibatisServices;
	
	public void setIbatisServices(IbatisServices ibatisServices)
	{
		this.ibatisServices = ibatisServices;
	}
	
	/**
	 * 查询操作日志列表
	 * @param mapJsonParams 查询条件
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings("unchecked")
	public PageBean getWorkLog(String queryJSON,long in) throws Exception{
		PageBean pageBean = new PageBean();
		//把FlexiGrid传过来的json参数封装成map对象
		Map params = FlexiGridUtil.parseParam(queryJSON);
		//获得用户所属企业完整id并且保存到查询条件集合中
		SessionUser user = UserContext.getLoginUser();
		if(user != null){
			//如果是超级管理员UserContext.isBsRootUser()
			if(UserContext.isBsRootUser()){
				params.remove("fullId");
				params.remove("userId");
			}
			//如果是企业管理员user.isWorkUnitSuperAdmin()
			else if(user.isWorkUnitSuperAdmin()){
				params = user.getParamsOrFullid(params);
			}
			//普通用户(根据用户id去查询)
			else{
				params.put("userId", user.getUserID());
			}
		}
		//得到操作日志list
		List<Map<String,Object>> workLogList = this.ibatisServices.queryForList(Map.class, "getWorkSQL",params);
		//操作日志总条数
		Long total = getWorkCount(params);
		
		pageBean.setPage((Integer)params.get(ParamKey.PAGE));
		pageBean.setRows(workLogList);
		pageBean.setTotal(total);
		
		return pageBean;
	}
	
	/**
	 * 查询日志总条数
	 * @param params
	 * @return
	 * @throws Exception
	 */
	public Long getWorkCount(Map<String,Object> params) throws Exception {
		
		return this.ibatisServices.findIbatisListCount("getWorkCountSQL", params);
		
	}
	
	
	
	/**
	 * 查询操作日志列表打印
	 * @param mapJsonParams 查询条件
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings("unchecked")
	public Result getMimeograph(Map whereMap) throws Exception{
		Result result = new Result();
		//获得用户所属企业完整id并且保存到查询条件集合中
		SessionUser user = UserContext.getLoginUser();
		if(user != null){
			//如果是超级管理员UserContext.isBsRootUser()
			if(UserContext.isBsRootUser()){
				whereMap.remove("fullId");
				whereMap.remove("userId");
			}
			//如果是企业管理员user.isWorkUnitSuperAdmin()
			else if(user.isWorkUnitSuperAdmin()){
				whereMap = user.getParamsOrFullid(whereMap);
			}
			//普通用户(根据用户id去查询)
			else{
				whereMap.put("userId", user.getUserID());
			}
		}
		//得到操作日志list
		List<Map<String,Object>> workLogList = this.ibatisServices.queryForList(Map.class, "getWorkSQL",whereMap);
		
		if(workLogList==null||workLogList.size()==0){
			result.setCode(0);
		}else{
			result.setData(workLogList);
			//成功
			result.setCode(1);
		}	
		return result;
	}
	
	
	
	
	
	
	/**
	 * 查询操作日志数据导出到EXCEL
	 * @param queryJSON 查询参数
	 * @param fromPage 开始页
	 * @param toPage 结束页
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings("unchecked")
	public List<Map<String,Object>> downWorkDataLogExportExl (String queryJSON,String fromPage,String toPage) throws Exception {
		//把FlexiGrid传过来的json参数封装成map对象
		Map params = FlexiGridUtil.parseParam(queryJSON);
		SessionUser user = UserContext.getLoginUser();
		if(user != null){
			//如果是超级管理员UserContext.isBsRootUser()
			if(UserContext.isBsRootUser()){
				params.remove("fullId");
				params.remove("userId");
			}
			//如果是企业管理员user.isWorkUnitSuperAdmin()
			else if(user.isWorkUnitSuperAdmin()){
				params = user.getParamsOrFullid(params);
			}
			//普通用户(根据用户id去查询)
			else{
				params.put("userId", user.getUserID());
			}
		}
		//System.out.println("11111111111111");
		//重新查询数据开始行数和结束行数
		String pageSize =params.get(ParamKey.PAGE_SIZE).toString();
		Integer fromRow = RowNumUtil.getFromRowNum(fromPage, pageSize);
		Integer toRow = RowNumUtil.getToRowNum(toPage, pageSize);
		//System.out.println("fromRow:"+fromRow+"    toRow:"+toRow);
		params.put("fromRow", fromRow);
		params.put("toRow", toRow);
		
		List<Map<String,Object>> loginLogList = this.ibatisServices.queryForList(Map.class, "getWorkSQL",params);
		
		return loginLogList;
	}
	
}
