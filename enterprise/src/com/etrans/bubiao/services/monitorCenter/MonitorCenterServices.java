package com.etrans.bubiao.services.monitorCenter;

import java.io.StringWriter;
import java.io.UnsupportedEncodingException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.TimeZone;

import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.etrans.bubiao.auth.SessionUser;
import com.etrans.bubiao.entities.PlayBackTrack;
import com.etrans.bubiao.services.BaseServices;
import com.etrans.bubiao.services.IbatisServices;
import com.etrans.bubiao.sys.UserContext;
import com.etrans.common.util.HistoryState;
import com.etrans.common.util.State;
import com.etrans.common.util.Tools;

/**
 * 监控中心Services
 * @author lihaiyan
 * @version 1.0
 */
@Service
public class MonitorCenterServices extends BaseServices
{
	private int ValidLevel=0;

	@Autowired
	private IbatisServices ibatisServices;
	public String getDefaultParent(String parentName,String parentId){
		StringBuilder jsonString = new StringBuilder();
		jsonString.append("[");
		jsonString.append("{");
		jsonString.append("\"id\":\"" + parentId+ "\",");
		jsonString.append("\"text\":\"" + parentName + "\",");
		jsonString.append("\"iconCls\":\"icon-group\",");
		jsonString.append("\"state\":\"closed\"");
		jsonString.append("}");
		jsonString.append("]");
		return jsonString.toString();
	}
 
	public String[] getRealngLatBaidu(String lng,String lat){
	String rtnArr[] =new String[2];
	Map<String, Object> params=new HashMap<String, Object>();
	params.put("lng", lng.substring(0,lng.indexOf('.')+3));
	params.put("lat", lat.substring(0,lat.indexOf('.')+3));
		try{
			List<HashMap<String, String>> rows=  this.ibatisServices.findIbatisList("getRealngLatBaiduSql",params);
			if (rows.size()==0) return null;
			rtnArr[0]=String.valueOf(rows.get(0).get("offsetX"));
			rtnArr[1]=String.valueOf(rows.get(0).get("offsetY"));
		}catch (Exception e) {
		 e.printStackTrace();
		 return null;
		}
		return rtnArr;
	}
	
	public Integer getGpsVehicleCount(Map<String, Object> whereParam){
		Integer totalCount=0;
		  try
		{
			List<Object> result=(List<Object>)super.queryAsResult("getGpsVehicleCountSQL", whereParam).getData();
			totalCount=(Integer)(result.get(0));
		} catch (Exception e)
		{
			// TODO Auto-generated catch block
			e.printStackTrace();
			
		}
		return totalCount;
	}
	/**
	 * 递推查询到有效的下一级为止
	 * 
	 * @param rows
	 * @param whereParam
	 * @return
	 */
	public int getHasNextLeve(Map<String,Object> whereParam){
		whereParam.put("@LevelNumber", Integer.parseInt(whereParam.get("@LevelNumber").toString())+1);
		List<Map<String,Object>> rowsChildren = (List)this.ibatisServices.queryForList(Map.class, "getGpsVehicleSQLTree",whereParam);
		ValidLevel++;
		int IsVehicle;
		boolean isQuerySkip = true;
		if(ValidLevel>4)return 0;
		if(rowsChildren!=null && rowsChildren.size()>0){
			for(Map<String,Object> map : rowsChildren){
				IsVehicle = Integer.valueOf(map.get("IsVehicle").toString());
				if(IsVehicle==0){
					isQuerySkip = false;
					break;
				}
			}
			if(!isQuerySkip)return ValidLevel;
		} 
		getHasNextLeve(whereParam);
		return ValidLevel;
	}
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public String getGpsVehicleTree(Map<String,Object> whereParam,String TreeId){
		try{
			SessionUser user = UserContext.getLoginUser();
			if(TreeId==null && UserContext.isBsRootUser()){
				return getDefaultParent("超级管理员根节点","0|-1|a|00");
			}else if(TreeId==null){
				int levelWork = user.getWorkUnitFullId().trim().length()%8+1;
				return getDefaultParent(user.getWorkUnitName(),""+levelWork+"|"+user.getWorkUnitID()+"|a|"+user.getWorkUnitFullId().trim());
			}else{
				
				/*************************************************************/
				/***********************存储过程参数构造***********************/
				/*************************************************************/
				int level = Integer.parseInt(TreeId.split("\\|")[0]);// 层级
				String workUnitId = TreeId.split("\\|")[1];// 当前的企业ID		
				String fulId = TreeId.split("\\|")[3];// 当前的企业ID		
				whereParam.put("@WorkUnitId", workUnitId.trim());
				whereParam.put("@LevelNumber", level);
				whereParam.put("@FullID",fulId.trim());
				
				/*************************************************************/
				StringBuilder jsonString = new StringBuilder();
				int IsVehicle = 1;// 1 为车,0为企业
				jsonString.append("[");
				String id = "";
				List<Map<String,Object>> rows = (List)this.ibatisServices.queryForList(Map.class, "getGpsVehicleSQLTree",whereParam);
				if(rows!=null && rows.size()>0){
					for(Map<String,Object> map : rows){
						IsVehicle = Integer.valueOf(map.get("IsVehicle").toString());
						jsonString.append("{"); 
						if(IsVehicle==1){
							id = 	String.valueOf(level+1)+
									"|"+map.get("ID") +
									"|b"+ 
									"|"+map.get("code")+
									"|"+map.get("commandkindid")+
									"|"+map.get("terminalKindID")+
									"|"+map.get("kind")+
									"|"+(String)map.get("Name")+
									"|"+map.get("Video")+
									"|"+map.get("txtCommand");
							jsonString.append("\"id\":\""+id+
							"\",");
							//jsonString.append("\"text\":\"" + "<img src='Images/ico/xl.png' id='"+id+"' onclick='showOperateDiv(this)' title='更多操作' />&nbsp;"+((String)map.get("Name")).trim() + "\",");
							jsonString.append("\"text\":\"" +((String)map.get("Name")).trim() + "\",");
							jsonString.append("\"iconCls\":\"icon-blank\",");
							jsonString.append("\"state\":\"open\"");
						}else{
							jsonString.append("\"id\":\""+String.valueOf(level+1)+"|"+map.get("workunitid") +"|a"+"|"+map.get("workunitfullid")+ "\",");
							jsonString.append("\"text\":\"" + ((String)map.get("Name")).trim() + "\",");
							jsonString.append("\"iconCls\":\"icon-group\",");
							jsonString.append("\"state\":\"closed\"");
						}
						jsonString.append("}");
						jsonString.append(",");
					}
					jsonString.deleteCharAt(jsonString.toString().length() - 1);
				}
				jsonString.append("]");
				return jsonString.toString();
			}
		} catch (Exception e){
			return null;
		}
	}
	
	/**
	 * 取车牌信息
	 * registrationNo 车牌号码
	 * @return
	 * @throws UnsupportedEncodingException 
	 */
	@SuppressWarnings("unchecked")
	public List<Map<String,Object>> getVehicleNoBtrackBackService(String registrationNo) throws UnsupportedEncodingException{
		//结果
		List<Map<String,Object>> listInfo = new ArrayList<Map<String,Object>>();
		SessionUser sessionUser = UserContext.getLoginUser();
		Map whereMap=new HashMap();
		String userId = String.valueOf(sessionUser.getUserID());//用户id
		String fullId=String.valueOf(sessionUser.getWorkUnitID());//企业id
		
		/**车牌号码条件**/
		if(null!=registrationNo&&!registrationNo.equals("")){
			whereMap.put("registrationNo", new String(registrationNo.getBytes("ISO-8859-1"), "gbk"));
		}else{
			whereMap.put("registrationNo", null);
		}
		
		/**查询权限下的车辆begin【车牌信息和车辆id】**/
		if(UserContext.isBsRootUser()){//超级管理员
			whereMap.put("userType", "0");
			listInfo = this.ibatisServices.queryForList(Map.class, "getVehicleNoBtrackBackServiceSql",whereMap);
		}else if(sessionUser.isWorkUnitSuperAdmin()){//企业管理员
			whereMap.put("fullId",fullId);
			whereMap.put("userType", "1");
			listInfo = this.ibatisServices.queryForList(Map.class, "getVehicleNoBtrackBackServiceSql",whereMap);
		}else{//普通用户
			whereMap.put("userId", userId);
			listInfo = this.ibatisServices.queryForList(Map.class, "getVehicleIdstatSQL_BtrackBack",whereMap);
		}
		return listInfo;
	}
	
	
	
	/**
	 * 描述：获取要订阅的车辆
	 * @author lihaiyan
	 * @since Create on 2012-5-16
	 * @return List<HashMap<String, Object>>车辆列表
	 * @version Copyright (c) 2012 by e_trans.
	 */
	public List<Map<String, Object>> getGpsVehicle(Map whereParam){
		try
		{
			List<Map<String,Object>> rows = this.ibatisServices.queryForList(Map.class, "getGpsVehicleSQL",whereParam);
			return rows;
		} catch (Exception e)
		{
			e.printStackTrace();
			return null;
		}
	}
	
	/**
	 * 描述：获取要订阅的车辆
	 * @author lihaiyan
	 * @since Create on 2012-5-16
	 * @return List<HashMap<String, Object>>车辆列表
	 * @version Copyright (c) 2012 by e_trans.
	 */
	public List<Map<String, Object>> getWebServiceGpsVehicle(Map whereParam){
		try
		{
			List<Map<String,Object>> rows = this.ibatisServices.queryForList(Map.class, "getWebServiceGpsVehicleSQL",whereParam);
			return rows;
		} catch (Exception e)
		{
			e.printStackTrace();
			return null;
		}
	}
	
	
	
	/**
	 * 描述：获取车辆详细信息
	 * 
	 * @author lihaiyan
	 * @since Create on 2012-5-17
	 * @version Copyright (c) 2012 by e_trans.
	 */
	public List<Map<String, Object>> getGpsVehicleInfo(Map params)
	{
		try{
			List<Map<String,Object>> rows=  this.ibatisServices.queryForList(Map.class,"getGpsVehicleInfoSql", params);
			return rows;
		}catch (Exception e) {
		 e.printStackTrace();
		 return null;
		}
		
	}
	
	
	public void updateVehicle(Map<String,Object> vParams,Map<String,Object> TParams,Map<String,Object> SParams) {
		//修改车辆表信息                                  
		int cnt=this.ibatisServices.updateIbatisObject("updateVehicle2SQL", vParams);
		System.out.println("=============cnt==============="+cnt);
		this.ibatisServices.updateIbatisObject("updateTerminal2SQL", TParams);
		this.ibatisServices.updateIbatisObject("updateSIMCard2SQL", SParams);
	}		
		
	/**
	 * 描述： 回放轨迹查询
	 * @author lihaiyan
	 * @since Create on 2012-3-9
	 * @return List<String> 轨迹数据
	 * @version Copyright (c) 2012 by e_trans.
	 */
	public List<String> findPlayBackTrack(String vehicleId, long beginTime, long endTime,Map<String,String> vehicleMap,String mapType,boolean showStatus, Short isMergeStop,Short isMergeSpeed) throws Exception {
		// lat,lon ,sd,gs,gd,gt,st,m,o,sim
		// 经度,纬度,速度,状态,司机信息,时间,停车时长|停车时长毫秒,里程,油位,通信号
		List<String> trackList = new ArrayList<String>(); // 分析好后的轨迹数据
		PlayBackTrack newPlayBackTrack = new PlayBackTrack(); // 新回放轨迹对象
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		TimeZone timeZoneChina = TimeZone.getTimeZone("Asia/Shanghai");// 获取中国的时区
		sdf.setTimeZone(timeZoneChina);// 设置系统时区
		String oldLnglat="";//上一个经纬度
		String newLnglat="";//最新经纬度
			Map<String, Object> param = new HashMap<String, Object>();
			param.put("carId", vehicleId); // 终端编号
			param.put("startTime", sdf.format(new Date(beginTime))); // 开始时间
			param.put("endTime",  sdf.format(new Date(endTime)));//结束时间
			param.put("isMergeStop", isMergeStop);	//合并停车
			param.put("isMergeSpeed", isMergeSpeed);	//合并速度
			List<HashMap<String, Object>> trackListTemp =(List<HashMap<String, Object>>)super.callProcedureAsResult("getCarGpsInfo", param).getData(); // 调用存储过程
//			String[][] nLatLonAry = new String[trackListTemp.size()][2];
//			for(int i=0;i<trackListTemp.size();i++){
//				nLatLonAry[i][0] = String.valueOf(((Double)trackListTemp.get(i).get("longitude"))/1000000);
//				nLatLonAry[i][1] = String.valueOf(((Double)trackListTemp.get(i).get("latitude"))/1000000);
//			}
//			nLatLonAry = Tools.getRealLngLatBath(nLatLonAry);
			String vehicleInfoString=vehicleMap.get(vehicleId);
			//vehicleInfoString="粤AF1539|白|出租车|广州亿程";
			String[] vehicleValue=vehicleInfoString.split("\\|");//车牌号|车牌颜色|所属行业|所属业户
			String registrationNO=vehicleValue[0];
			String kindName=vehicleValue[2];
			String workunitName=vehicleValue[3];
			StringBuffer trackBuffer=null;
			// 分析轨迹数据
//			int countSum = 0;
			for (Map<String, Object> trackMap : trackListTemp) {
				try {
					if ((String.valueOf(trackMap.get("latitude"))).length() > 3) {
						newPlayBackTrack.setHead(String.valueOf(new Float(trackMap.get("head").toString()).intValue()));
						newPlayBackTrack.setGpsSpeed(Double.parseDouble(String.valueOf(trackMap.get("speed2"))));
						newPlayBackTrack.setGpsTime(sdf.parse(String.valueOf(trackMap.get("gpsTime"))).getTime());
						double lonDouble=(Double)trackMap.get("longitude");
						double latDouble=(Double)trackMap.get("latitude");
						newPlayBackTrack.setLat(String.valueOf(latDouble/1000000));
						newPlayBackTrack.setLon(String.valueOf(lonDouble/1000000));
						newPlayBackTrack.setMileage(Double.parseDouble(String.valueOf(trackMap.get("mileage2") == null ? "0" :String.valueOf(trackMap.get("mileage2"))))/10);
						newPlayBackTrack.setOil(Double.parseDouble(String.valueOf(trackMap.get("oil") == null ? "0" : String.valueOf(trackMap.get("oil")))));
						newPlayBackTrack.setStatus(String.valueOf(trackMap.get("status")).trim());
						newLnglat=newPlayBackTrack.getLon()+","+newPlayBackTrack.getLat();
						if(StringUtils.isEmpty(oldLnglat)||!(newLnglat.equals(oldLnglat))){
							//String strLocation=Tools.getLocationBaidu(newPlayBackTrack.getLat(), newPlayBackTrack.getLon());
							trackBuffer=new StringBuffer();
							trackBuffer.append("lat:'")
							           .append(newPlayBackTrack.getLat())
							           .append("',lon:'")
							           .append(newPlayBackTrack.getLon())
							           .append("',sHlat:'")//偏移后纬度
							           .append(newPlayBackTrack.getLat())
							           .append("',sHlon:'")//偏移后经度
							           .append(newPlayBackTrack.getLon())
							           .append( "',sd:'")
							           .append(newPlayBackTrack.getGpsSpeed())
							           .append( "',gd:'',gt:'" )
							           .append(sdf.format(new Date(newPlayBackTrack.getGpsTime())))
							           .append("',st:'0|0',m:'',o:'',sim:'")
							           .append(vehicleId)
							           .append("',no:'")
							           .append(registrationNO)
							           .append("',kindName:'")
							           .append(kindName)
							           .append("',hd:'")
							           .append(newPlayBackTrack.getHead())
							           .append("',workunitName:'")				
							           .append(workunitName)
							           .append("',oil:'")
							           .append(newPlayBackTrack.getOil())
							           .append("',mileage:'")
							           .append(newPlayBackTrack.getMileage())
//							           .append("',addr:'")
//							           .append(strLocation)
							           .append("'");
							
							if(showStatus){
								String stateStr = HistoryState.getTermianlState( newPlayBackTrack.getStatus());
								stateStr+=",车牌颜色:"+vehicleValue[1]+"|"+State.getTermianlState( newPlayBackTrack.getStatus()).split("\\|")[1];
								//String lnglat=newPlayBackTrack.getLon()+","+newPlayBackTrack.getLat();//经度,纬度
								//String[] lngArray = Tools.getRealLngLat(lnglat,mapType);
								String[] stateStrArray=stateStr.split("\\|");
								String alarmsStateString=stateStrArray[1];
								trackBuffer.append( ",gs:'")
						           		   .append(Tools.builStr(stateStr))
						           		   .append("',alarm:'")
						           		   .append(alarmsStateString)
						           		   .append("'");					           
							}
							           
							//String trackStr = "lat:'" + newPlayBackTrack.getLat() + "',lon:'" + newPlayBackTrack.getLon() + "',sd:'" + newPlayBackTrack.getGpsSpeed()
								//	+ "',gs:'" +Tools.builStr(stateStr) + "',gd:'',gt:'" + sdf.format(new Date(newPlayBackTrack.getGpsTime())) + "',st:'0|0'" + ",m:'',o:'',sim:'" +vehicleId
								//	+ "',no:'"+registrationNO+"',kindName:'"+kindName+ "',workunitName:'"+workunitName+"'";

							trackList.add(trackBuffer.toString());
							oldLnglat=newLnglat;
//							countSum++;
						}else{
							continue;
						}
						
					}
				} catch (Exception e) {
					e.printStackTrace();
//					countSum++;
				}
				
			}
		return trackList;
	}

	/**
	 * 描述： 导出轨迹
	 * @author lihaiyan
	 * @since Create on 2012-3-9
	 * @return List<String> 轨迹数据
	 * @version Copyright (c) 2012 by e_trans.
	 */
	public List<String> exportTrack(String vehicleId, long beginTime, long endTime,Map<String,String> vehicleMap) throws Exception {
		// lat,lon ,sd,gs,gd,gt,st,m,o,sim
		// 经度,纬度,速度,状态,司机信息,时间,停车时长|停车时长毫秒,里程,油位,通信号
		List<String> trackList = new ArrayList<String>(); // 分析好后的轨迹数据
		PlayBackTrack newPlayBackTrack = new PlayBackTrack(); // 新回放轨迹对象

		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		TimeZone timeZoneChina = TimeZone.getTimeZone("Asia/Shanghai");// 获取中国的时区
		sdf.setTimeZone(timeZoneChina);// 设置系统时区
		String oldLnglat="";//上一个经纬度
		String newLnglat="";//最新经纬度
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("carId", vehicleId); // 终端编号
		param.put("startTime", sdf.format(new Date(beginTime))); // 开始时间
		param.put("endTime",  sdf.format(new Date(endTime)));//结束时间
		List<HashMap<String, Object>> trackListTemp =(List<HashMap<String, Object>>)super.callProcedureAsResult("getCarGpsInfo", param).getData(); // 调用存储过程
		StringBuffer trackBuffer=null;
		String vehicleInfoString=vehicleMap.get(vehicleId);
		//vehicleInfoString="粤AF1539|白|出租车|广州亿程";
		String[] vehicleValue=vehicleInfoString.split("\\|");//车牌号|车牌颜色|所属行业|所属业户
		String registrationNO=vehicleValue[0];
			// 分析轨迹数据
		for (Map<String, Object> trackMap : trackListTemp) {
				try {
					if ((String.valueOf(trackMap.get("latitude"))).length() > 3) {
						
						
						newPlayBackTrack.setGpsSpeed(Double.parseDouble(String.valueOf(trackMap.get("speed2"))));
						newPlayBackTrack.setGpsTime(sdf.parse(String.valueOf(trackMap.get("gpsTime"))).getTime());
						double lonDouble=(Double)trackMap.get("longitude");
						double latDouble=(Double)trackMap.get("latitude");
						newPlayBackTrack.setLat(String.valueOf(latDouble/1000000));
						newPlayBackTrack.setLon(String.valueOf(lonDouble/1000000));
						newPlayBackTrack.setMileage(Double.parseDouble(String.valueOf(trackMap.get("mileage2") == null ? "0" :String.valueOf(trackMap.get("mileage2")))));
						newPlayBackTrack.setOil(Double.parseDouble(String.valueOf(trackMap.get("oil") == null ? "0" : String.valueOf(trackMap.get("oil")))));
						newPlayBackTrack.setStatus(String.valueOf(trackMap.get("status")));
							String stateStr = "";// 状态
							stateStr = HistoryState.getTermianlState( newPlayBackTrack.getStatus());
						    trackBuffer=new StringBuffer();
							trackBuffer.append("lat=")
							           .append(newPlayBackTrack.getLat())
							           .append("|lon=")
							           .append(newPlayBackTrack.getLon())
							           .append("|sd=")
							           .append(newPlayBackTrack.getGpsSpeed())
							           .append("|gt=")
							           .append(sdf.format(new Date(newPlayBackTrack.getGpsTime())))
							           .append("|no=")
							           .append(registrationNO)
							           .append("|gs=")
							           .append(Tools.builStr(stateStr));
							trackList.add(trackBuffer.toString());
						
					}
				} catch (Exception e) {
					e.printStackTrace();
				}
			}
		//}
		return trackList;
	}
	
	/**
	 * 描述：获取轨迹点的司机信息
	 * 
	 * @author lihaiyan
	 * @since Create on 2012-5-31
	 * @version Copyright (c) 2012 by e_trans.
	 */
	public  Map<String,Object> getDriverMessage(Map params)
	{
		try{
			return this.ibatisServices.queryForObject(Map.class, "getDriverMessageSql", params);
		}catch (Exception e) {
		 e.printStackTrace();
		 return null;
		}
		
	}

	/**
	 * 描述： 获取车辆最新驾驶员信息
	 * 
	 * @author lihaiyan
	 * @since Create on 2012-5-31
	 * @version Copyright (c) 2012 by e_trans.
	 */
	public Map<String,Object> getNewestDriverMessage(Map params){
		 return this.ibatisServices.queryForObject(Map.class, "getNewestDriverMessageSql", params);
	}
	
	
	/**
	 * 得到视频监控参数信息
	 * @return
	 */
	@SuppressWarnings("unchecked")
	public Map<String,Object> getVideoInfo(Map params){
		return this.ibatisServices.queryForObject(Map.class, "getVideoInfoSql", params);
	}
	
	
	

	public IbatisServices getIbatisServices()
	{
		return ibatisServices;
	}


	public void setIbatisServices(IbatisServices ibatisServices)
	{
		this.ibatisServices = ibatisServices;
	}

	/**
	 * 描述：更新上级查岗应答内容
	 * 
	 * @author lihaiyan
	 * @since Create on 2012-3-12
	 * @version Copyright (c) 2012 by e_trans.
	 */
	public void updateHighLevelPatrolLog(Map<String, Object> paramMap)
	{
		try
		{
			this.ibatisServices.update("updateHighLevelPatrolLogSQL", paramMap);
		} catch (Exception e)
		{
			// TODO: handle exception
			e.printStackTrace();
		}
	}
	
	/**
	 * 描述：报警督办入库
	 * 
	 * @author lihaiyan
	 * @since Create on 2012-3-5
	 * @version Copyright (c) 2012 by e_trans.
	 */
	public void AddAlarmOverseeingLog(Map<String, Object> setParamMap){
		try
		{
			 this.ibatisServices.insertIbatisObject("insertAlarmOverSeeingSQL", setParamMap);
		} catch (Exception e)
		{
			// TODO: handle exception
			e.printStackTrace();
		}
	}
	
	/**
	 * 描述：更新督办报警状态
	 * 
	 * @author lihaiyan
	 * @since Create on 2012-3-12
	 * @version Copyright (c) 2012 by e_trans.
	 */
	public void updateAlarmOverseeing(Map<String, Object> paramMap)
	{
		try
		{
			this.ibatisServices.update("updateAlarmOverSeeingSQL", paramMap);
		} catch (Exception e)
		{
			// TODO: handle exception
			e.printStackTrace();
		}
	}
	
	/**
	 * 描述：上级平台查岗入库
	 * 
	 * @author lihaiyan
	 * @since Create on 2012-3-5
	 * @version Copyright (c) 2012 by e_trans.
	 */
	public void AddHighLevelPatrolLog(Map<String, Object> setParamMap){
		try
		{
			 this.ibatisServices.insertIbatisObject("HighLevelPatrolLogSQL", setParamMap);
		} catch (Exception e)
		{
			// TODO: handle exception
			e.printStackTrace();
		}
	}

	
//	/**
//	 * 描述：更新查岗应答内容
//	 * 
//	 * @author lihaiyan
//	 * @since Create on 2012-3-5
//	 * @version Copyright (c) 2012 by e_trans.
//	 */
//	public void updateLowLevelPatrolLog(Map<String, Object> paramMap)
//	{
//		try
//		{
//			this.callProcedure("updateLowLevelPatrolLog", paramMap);
//		} catch (Exception e)
//		{
//			// TODO: handle exception
//			e.printStackTrace();
//		}
//	}
	
	/**
	 * 描述：获取当前报警的车辆信息
	 * 
	 * @author lihaiyan
	 * @since Create on 2012-3-23
	 * @version Copyright (c) 2012 by e_trans.
	 */
	public List<HashMap<String, String>> getAlarmVehicleInfo(Map<String, Object> params)
	{
		try{
			return this.ibatisServices.findIbatisList("getAlarmVehicleInfoSql", params);
		}catch (Exception e) {
			 e.printStackTrace();
			 return null;
		}
	}
	
	/**
	 * 描述：新增客户端指令发送日志
	 * 
	 * @author lihaiyan
	 * @since Create on 2012-5-23
	 * @version Copyright (c) 2012 by e_trans.
	 */
	public void addClientComSendLog(Map<String,Object> paramsMap)
	{
		try
		{
			this.ibatisServices.insertIbatisObject("insertClientCommandSendLog", paramsMap);
		} catch (Exception e)
		{
			e.printStackTrace();
		}
	}
	
}
