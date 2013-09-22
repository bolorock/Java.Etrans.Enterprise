package com.etrans.bubiao.services.query.stat;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.etrans.bubiao.auth.SessionUser;
import com.etrans.bubiao.entities.PageBean;
import com.etrans.bubiao.http.ParamKey;
import com.etrans.bubiao.services.IbatisServices;
import com.etrans.bubiao.sys.UserContext;
import com.etrans.common.util.FlexiGridUtil;
import com.etrans.common.util.web.RowNumUtil;

@Service
public class WorkUnitEffectiveUploadServices {
	@Autowired
	private IbatisServices ibatisServices;

	public IbatisServices getIbatisServices() {
		return ibatisServices;
	}

	public void setIbatisServices(IbatisServices ibatisServices) {
		this.ibatisServices = ibatisServices;
	}

	/**
	 * 车辆上传有效统计(按部门)
	 * @param queryJSON,sessionUser
	 * @return PageBean
	 * @throws Exception
	 */
	@SuppressWarnings( { "unchecked" })
	public PageBean getWorkUnitEffectiveUpload(String queryJSON,
			SessionUser sessionUser) throws Exception {
		Map setParamsMap = FlexiGridUtil.parseJSONParamForProcedure(queryJSON);
//		Integer year = Integer.parseInt(setParamsMap.get("@year").toString());
//		Integer month = Integer.parseInt(setParamsMap.get("@month").toString());
//		Integer day = Integer.parseInt(setParamsMap.get("@day").toString());
//		Integer week = Integer.parseInt(setParamsMap.get("@week").toString());
//		setParamsMap.put("@year", String.valueOf(year));
//		setParamsMap.put("@month", String.valueOf(month));
//		setParamsMap.put("@day", String.valueOf(day));
//		setParamsMap.put("@week", String.valueOf(week));
//		setParamsMap.put("@workunitid", String.valueOf(sessionUser.getWorkUnitID()));
		setParamsMap.put("@workunitid", "");
		setParamsMap.put("@IsExport", "1");
		String userId = String.valueOf(sessionUser.getUserID());
		String fullId=String.valueOf(sessionUser.getWorkUnitID());
		Map paramMap = new HashMap();
		List<Map<String, Object>> list = new ArrayList<Map<String, Object>>();
		List<Map<String, Object>> rows = new ArrayList<Map<String, Object>>();

		if (UserContext.isBsRootUser()) {// 超级管理员
			setParamsMap.put("@vehicle_list", null);
		} else {
			if (sessionUser.isWorkUnitSuperAdmin()) {// 企业管理员
				paramMap.put("fullId", fullId);
				list = this.ibatisServices.queryForList(Map.class,
						"getAdminVehicleIdSQL", paramMap);

			} else {// 普通用户
				paramMap.put("userId", userId);
				list = this.ibatisServices.queryForList(Map.class,
						"getVehicleIdstatSQL", paramMap);
			}

			if (list.size() > 0) {
				String vehiclestr = "";
				String vehicleID = null;
				for (int i = 0; i < list.size(); i++) {
					vehiclestr += list.get(i).get("id").toString() + "-";
				}
				vehicleID = vehiclestr.substring(0, vehiclestr.length() - 1);
				setParamsMap.put("@vehicle_list", vehicleID);
			}

		}
		String page = (String) setParamsMap.get(ParamKey.PAGE);
		String pageSize = (String) setParamsMap.get(ParamKey.PAGE_SIZE);
		Integer fromRow = RowNumUtil.getFromRowNum(page, pageSize);
		Integer toRow = RowNumUtil.getToRowNum(page, pageSize);
		setParamsMap.put("@fromRow", String.valueOf(fromRow));
		setParamsMap.put("@toRow", String.valueOf(toRow));
		try {
			rows = this.ibatisServices.queryForList(Map.class,
					"getWorkUnitEffectiveUploadSQL", setParamsMap);
		} catch (Exception e) {
			e.printStackTrace();
		}

		PageBean pageBean = new PageBean();
		pageBean.setPage(Integer.valueOf(page));
		if (rows != null && rows.size() > 0) {
			pageBean.setRows(rows);
			Long totalLong = Long.valueOf(String.valueOf((rows.get(0)
					.get("total"))));
			pageBean.setTotal(totalLong);
		}
		return pageBean;
	}

	/**
	 * 车辆上传有效导出(按部门)
	 * @param queryJSON,sessionUser,fromPage,toPage
	 * @return rows
	 * @throws Exception
	 */
	@SuppressWarnings( { "unchecked" })
	public List<Map<String, Object>> getWorkUnitEffectiveUploadExportExl(
			String queryJSON, SessionUser sessionUser, String fromPage,
			String toPage) throws Exception {

		Map setParamsMap = FlexiGridUtil.parseJSONParamForProcedure(queryJSON);
		String userId = String.valueOf(sessionUser.getUserID());
		String fullId=String.valueOf(sessionUser.getWorkUnitID());
		Map paramMap = new HashMap();
		List<Map<String, Object>> list = new ArrayList<Map<String, Object>>();
		if (UserContext.isBsRootUser()) {// 超级管理员
			setParamsMap.put("@vehicle_list", null);
		} else {
			if (sessionUser.isWorkUnitSuperAdmin()) {// 企业管理员
				paramMap.put("fullId", fullId);
				list = this.ibatisServices.queryForList(Map.class,
						"getAdminVehicleIdSQL", paramMap);

			} else {// 普通用户
				paramMap.put("userId", userId);
				list = this.ibatisServices.queryForList(Map.class,
						"getVehicleIdstatSQL", paramMap);
			}

			if (list.size() > 0) {
				String vehiclestr = "";
				String vehicleID = null;
				for (int i = 0; i < list.size(); i++) {
					vehiclestr += list.get(i).get("id").toString() + "-";
				}
				vehicleID = vehiclestr.substring(0, vehiclestr.length() - 1);
				setParamsMap.put("@vehicle_list", vehicleID);
			}
		}
		setParamsMap.put("@IsExport", "2");
		setParamsMap.put("@workunitid","");
		String pageSize = (String) setParamsMap.get(ParamKey.PAGE_SIZE);
		Integer fromRow = RowNumUtil.getFromRowNum(fromPage, pageSize);
		Integer toRow = RowNumUtil.getToRowNum(toPage, pageSize);
		setParamsMap.put("@fromRow", String.valueOf(fromRow));
		setParamsMap.put("@toRow", String.valueOf(toRow));
		List<Map<String, Object>> rows = this.ibatisServices.queryForList(
				Map.class, "getWorkUnitEffectiveUploadSQL", setParamsMap);
		return rows;

	}
}
