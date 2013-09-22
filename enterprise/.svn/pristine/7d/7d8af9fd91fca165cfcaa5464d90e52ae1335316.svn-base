package com.etrans.bubiao.services;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.etrans.bubiao.action.sys.log.LogActionTypes;
import com.etrans.bubiao.action.sys.log.LogUtil;
import com.etrans.bubiao.auth.SessionUser;
import com.etrans.bubiao.sys.UserContext;
import com.etrans.bubiao.util.ResultListManager;

@Service
public class AnalyseInOutPolyServices {
	@Autowired
	private IbatisServices ibatisServices;

	/**
	 ** 新增进出区域报警
	 */
	@SuppressWarnings({ "unchecked", "rawtypes", "static-access" })
	public Object insertAnalyseInOutPoly(Map<String, Object> params) {

		// 取用户信息;
		SessionUser users = UserContext.getLoginUser();

		List<Map<String, Object>> lists = new ArrayList<Map<String, Object>>();

		Map param = new HashMap<String, Object>();// 主表(ANA_AnalyserInOutPoly)
													// param

		param.put("id", params.get("placeTypeId"));

		Map param1 = new HashMap<String, Object>();// 附表(ANA_ParamPolygon)
													// param1 区域

		

		/******************************* begin *****************************************/
		// GroupID

		param1.put("GroupID", users.getUserID());

		/******************************* end *****************************************/

		// 验证用户
		lists = ibatisServices.queryForList(Map.class,"getParamPolygonNamesSQL", param);
		// 地点名称
		param1.put("Name", lists.get(0).get("name").toString());
		param1.put("Longitude", 0);
		param1.put("Latitude", 0);

		if (lists.size() == 0) {
			LogUtil.insertLog(LogActionTypes.INSERT, "失败", "进出区域报警", "","进出区域报警");
		} else {
			// 插入
			Object insertResult = this.ibatisServices.insertIbatisObject("insertParamPolygonsSQL", param1);
			// 插入数据后主键id
			Integer id = (Integer) insertResult;
			if (insertResult != null) {
				ResultListManager resultListManager = new ResultListManager();
				try {
					List<Map<String, Object>> resultList=resultListManager.getInstance().checkList(lists,id);
					Map<String, Object> map = new HashMap<String, Object>();
					Map param2 = new HashMap<String, Object>();// 附表(ANA_ParamRoadSegmentDetail)
					for (int i = 0; i < resultList.size(); i++) {
						map =  resultList.get(i);
						param2.put("RoadID", map.get("RoadID"));
						param2.put("Longitude", map.get("Longitude"));
						param2.put("Latitude", map.get("Latitude"));
						param2.put("IndexNO", map.get("IndexNO"));
						this.ibatisServices.insertIbatisObject("insertParamPolygonDetailsSQL", param2);
					}
					
					params.put("placeTypeId", id);
					this.ibatisServices.insertIbatisObject("insertAnalyserInOutPolysSQL", params);
				} catch (Exception e) {
					e.printStackTrace();
				}
			} else {
				LogUtil.insertLog(LogActionTypes.INSERT, "失败", "进出区域报警", "","进出区域报警");
			}

		}
		return null;
	}

}
