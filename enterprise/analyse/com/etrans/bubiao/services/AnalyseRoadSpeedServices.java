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

@Service
public class AnalyseRoadSpeedServices {
	@Autowired
	private IbatisServices ibatisServices;

	/**
	 ** 新增路段速度报警
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public Object insertAnalyseRoadSpeed(Map<String, Object> params) {

		// 取用户信息;
		SessionUser users = UserContext.getLoginUser();

		
		List<Map<String, Object>> lists = new ArrayList<Map<String, Object>>();

		Map param = new HashMap<String, Object>();// 主表(ANA_AnalyserRoadSpeed)
													// param
		param.put("id", params.get("roadSegmentID"));

		Map param1 = new HashMap<String, Object>();// 附表(ANA_ParamRoadSegments)
													// param1 道路

		Map param2 = new HashMap<String, Object>();// 附表(ANA_ParamRoadSegmentDetail)
													// param2 道路明细

		/******************************* begin *****************************************/
		param1.put("GroupID", users.getUserID());
		// 分析组ID
		param1.put("AnalyseGroupID", params.get("analyseGroupID").toString());

		// 经度
		param1.put("Longitude", 0);
		// 纬度
		param1.put("Latitude", 0);
		param1.put("Description", 0);

		/******************************* end *****************************************/

		// 验证用户
		lists = ibatisServices.queryForList(Map.class, "getRoadSegmentSQL",
				param);
		// 路段名称
		param1.put("Name", lists.get(0).get("name").toString());

		if (lists.size() == 0) {
			LogUtil.insertLog(LogActionTypes.INSERT, "失败", "路段速度报警", "","路段速度报警");
		} else {
			// 插入 ANA_ParamRoadSegments
			Object insertResult = this.ibatisServices.insertIbatisObject("insertParamRoadSegmentsSQL", param1);
			// 插入数据后主键id
			Integer id = (Integer) insertResult;
			if (insertResult != null) {
				Map<String, Object> map = new HashMap<String, Object>();
				for (int i = 0; i < lists.size(); i++) {
					map = lists.get(i);
					param2.put("RoadID", id);
					param2.put("Longitude", map.get("Longitude"));
					param2.put("Latitude", map.get("Latitude"));
					param2.put("IndexNO", map.get("Sequence"));
					this.ibatisServices.insertIbatisObject("insertParamRoadSegmentDetailSQL", param2);
				}

				// 路段ID
				params.put("roadSegmentID", id);
				this.ibatisServices.insertIbatisObject("insertAnalyseRoadSpeedSQL", params);

			} else {
				LogUtil.insertLog(LogActionTypes.INSERT, "失败", "路段速度报警", "","路段速度报警");
			}

		}

		return null;

	}
}
