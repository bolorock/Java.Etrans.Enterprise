package com.etrans.bubiao.services.sys;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.etrans.bubiao.http.HttpException;
import com.etrans.bubiao.services.BaseServices;
import com.etrans.bubiao.services.IbatisServices;

@Service
public class CustomMapServices extends BaseServices{
	
	@Autowired
	private IbatisServices ibatisServices;

	public IbatisServices getIbatisServices() {
		return ibatisServices;
	}

	public void setIbatisServices(IbatisServices ibatisServices) {
		this.ibatisServices = ibatisServices;
	}

	/**
	 * 查询图层
	 * 
	 * @param paramMap
	 * @return
	 */
	public List<HashMap<String, String>> getCustomMapLayer(
			Map<String, Object> paramMap) {
		try {
			List<HashMap<String, String>> resultstr = ibatisServices.findIbatisList("getCustomMapLayerSQL", paramMap);
			return resultstr;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}

	/**
	 * 查询区域面
	 * 
	 * @param paramMap
	 * @return
	 */
	public List<HashMap<String, String>> getPlane(Map<String, Object> paramMap) {

		try {
			List<HashMap<String, String>> resultstr = ibatisServices.findIbatisList("getPlaneByNameSQL", paramMap);
			return resultstr;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}

	/**
	 * 查询线面
	 * 
	 * @param paramMap
	 * @return
	 */
	public List<HashMap<String, String>> getLine(Map<String, Object> paramMap) {

		try {
			List<HashMap<String, String>> resultstr = ibatisServices.findIbatisList("getLineByNameSQL", paramMap);
			return resultstr;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}

	/**
	 * 查询地物点
	 * 
	 * @param paramMap
	 * @return
	 */
	public List<HashMap<String, String>> getPoint(Map<String, Object> paramMap) {

		try {
			List<HashMap<String, String>> resultstr = ibatisServices.findIbatisList("getPointByNameSQL", paramMap);
			return resultstr;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}

	/**
	 * 新增区域面
	 * 
	 * @param paramMap
	 * @return
	 * @throws Exception
	 */
	public void createCustomMapPlane(Map<String, Object> paramMap)
			throws Exception {
		ibatisServices.insertIbatisObject("createCustomMapPlaneSQL", paramMap);
	}

	/**
	 * 新增区域面坐标点
	 * 
	 * @param paramMap
	 * @return
	 * @throws Exception
	 */
	public void createCustomMapPlanePoint(Map<String, Object> paramMap)
			throws Exception {
		ibatisServices.insertIbatisObject("createCustomMapPlanePointSQL", paramMap);
	}

	/**
	 * 新增线面
	 * 
	 * @param paramMap
	 * @return
	 * @throws Exception
	 */
	public void createCustomMapLine(Map<String, Object> paramMap)
			throws Exception {
		ibatisServices.insertIbatisObject("createCustomMapLineSQL", paramMap);
	}

	/**
	 * 新增线面坐标点
	 * 
	 * @param paramMap
	 * @return
	 * @throws Exception
	 */
	public void createCustomMapLinePoint(Map<String, Object> paramMap)
			throws Exception {
		ibatisServices.insertIbatisObject("createCustomMapLinePointSQL", paramMap);

	}

	/**
	 * 新增地物点
	 * 
	 * @param paramMap
	 * @return
	 * @throws Exception
	 */
	public void createCustomMapPoint(Map<String, Object> paramMap)
			throws Exception {
		ibatisServices.insertIbatisObject("createCustomMapPointSQL", paramMap);
	}

	/**
	 * 区域面查询
	 * 
	 * @param paramMap
	 * @return
	 */
	public List<HashMap<String, String>> getCustomMapPlane(
			Map<String, Object> paramMap) {
		try {
			List<HashMap<String, String>> resultstr = ibatisServices.findIbatisList("getCustomMapPlaneNameSQL",paramMap);
			return resultstr;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}

	/**
	 * 线面查询
	 * 
	 * @param paramMap
	 * @return
	 */
	public List<HashMap<String, String>> getCustomMapLine(
			Map<String, Object> paramMap) {

		try {
			List<HashMap<String, String>> resultstr = ibatisServices.findIbatisList("getCustomMapLineNameSQL",paramMap);
			return resultstr;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}

	/**
	 * 地物点查询
	 * 
	 * @param paramMap
	 * @return
	 */
	public List<HashMap<String, String>> getCustomMapPoint(
			Map<String, Object> paramMap) {

		try {
			List<HashMap<String, String>> resultstr = ibatisServices.findIbatisList("getCustomMapPointNameSQL",paramMap);
			return resultstr;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}

	/**
	 * 区域面坐标
	 * 
	 * @param paramMap
	 * @return
	 */
	public List<HashMap<String, String>> getPlanePoint(
			Map<String, Object> paramMap) {

		try {
			List<HashMap<String, String>> resultstr = ibatisServices.findIbatisList("getPlanePointSQL", paramMap);
			return resultstr;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}

	/**
	 * 线面坐标
	 * 
	 * @param paramMap
	 * @return
	 */
	public List<HashMap<String, String>> getLinePoint(
			Map<String, Object> paramMap) {
		try {
			List<HashMap<String, String>> resultstr = ibatisServices.findIbatisList("getLinePointSQL", paramMap);
			return resultstr;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}

	/**
	 * 删除区域面
	 * 
	 * @param paramMap
	 * @return
	 * @throws Exception
	 */
	public void delCustomMapPlane(Map<String, Object> paramMap)
			throws Exception {
		 ibatisServices.deleteIbatisObject("delCustomMapPlaneProSQL", paramMap);
	}

	/**
	 * 删除线面
	 * 
	 * @param paramMap
	 * @return
	 * @throws Exception
	 */
	public void delCustomMapLine(Map<String, Object> paramMap)
			throws Exception {
		ibatisServices.deleteIbatisObject("delCustomMapLineProSQL", paramMap);
	}

	/**
	 * 删除地物点
	 * 
	 * @param paramMap
	 * @return
	 * @throws Exception
	 */
	public void delCustomMapPoint(Map<String, Object> paramMap)throws Exception {
		ibatisServices.deleteIbatisObject("delCustomMapPointProSQL", paramMap);
	}


	/**
	 * 定时定区域查车
	 * @param paramMap
	 * @return
	 */
	@SuppressWarnings("unchecked")
	public List<HashMap<String, String>> getTimeAreaVehicle(Map<String, Object> paramMap)
	{
		try 
		{
			List<HashMap<String, String>> areaVehicleList =(List<HashMap<String, String>>)super.callProcedureAsResult("getTimeAreaVehicleSQL", paramMap).getData(); // 调用存储过程
			return areaVehicleList;
		} 
		catch (Exception e)
		{
			e.printStackTrace();
		}
		return null;
	}

	/**
	 * 新增自定义图层
	 * 
	 * @param name
	 * @param kind
	 * @param userId
	 * @return
	 */
	public void addPub_CustomMapLayer(String name,int kind,long userId){
		Map<String,Object> paramMap = new HashMap<String,Object>();
		paramMap.put("Name", name);
		paramMap.put("Kind", kind);
		paramMap.put("UserID", userId);
		ibatisServices.insertIbatisObject("addPub_CustomMapLayer", paramMap);
	}
	
	/**
	 * 删除图层
	 * 
	 * @param userId
	 * @throws HttpException
	 */
	public void delPubCustomMapLayer(String userId){
		Map<String,Object> paramMap = new HashMap<String,Object>();
		paramMap.put("@_ids", userId);
		ibatisServices.delete("delUserCustomMapSQL", paramMap);
	}
}
