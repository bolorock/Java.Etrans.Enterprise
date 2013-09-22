package com.etrans.bubiao.services;

import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.etrans.bubiao.action.sys.log.LogActionTypes;
import com.etrans.bubiao.action.sys.log.LogUtil;
import com.etrans.bubiao.auth.SessionUser;
import com.etrans.bubiao.sys.UserContext;

@Service
public class AnalyseOverTimeParkServices {
	@Autowired
	private IbatisServices ibatisServices;

	/**
	 ** 新增路段速度报警
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public Object insertAnalyseOverTimePark(Map<String, Object> params) {

		// 取用户信息;
		SessionUser users = UserContext.getLoginUser();

		List<Map<String, Object>> lists = new ArrayList<Map<String, Object>>();

		Map param = new HashMap<String, Object>();// 主表(ANA_AnalyserOverTimePark)
													// param
		param.put("id", params.get("placeTypeId"));

		Map param1 = new HashMap<String, Object>();// 附表(ANA_BasePlaceTypes)
													// param1 道路

		Map param2 = new HashMap<String, Object>();// 附表(ANA_ParamPlaces) param2
													// 道路明细

		/******************************* begin *****************************************/
		// GroupID
		param1.put("GroupID", users.getUserID());

		// Description
		param1.put("Description", 0);

		/******************************* end *****************************************/

		// 验证用户
		lists = ibatisServices.queryForList(Map.class, "getPlaceTypeNamesSQL",param);
		// 地点名称
		param1.put("Name", lists.get(0).get("name").toString());

		if (lists.size() == 0) {
			LogUtil.insertLog(LogActionTypes.INSERT, "失败", "超时停车报警", "","超时停车报警");
		} else {
			// 插入 ANA_BasePlaceTypes
			Object insertResult = this.ibatisServices.insertIbatisObject("insertBasePlaceTypeSQL", param1);
			// 插入数据后主键id
			Integer id = (Integer) insertResult;
			if (insertResult != null) {
				Map<String, Object> map = new HashMap<String, Object>();
				for (int i = 0; i < lists.size(); i++) {
					map = lists.get(i);
					param2.put("GroupID", users.getUserID());
					param2.put("typeId", id);
					param2.put("name", map.get("name"));
					param2.put("Longitude", map.get("Longitude"));
					param2.put("Latitude", map.get("Latitude"));
					param2.put("AutoTime", new Date());
					this.ibatisServices.insertIbatisObject("insertParamPlaceSQL", param2);
				}

				// 路段ID
				params.put("placeTypeId", id);
				this.ibatisServices.insertIbatisObject("insertAnalyseOverTimeParkSQL", params);

			} else {
				LogUtil.insertLog(LogActionTypes.INSERT, "失败", "超时停车报警", "","超时停车报警");
			}

		}

		return null;

	}
}
