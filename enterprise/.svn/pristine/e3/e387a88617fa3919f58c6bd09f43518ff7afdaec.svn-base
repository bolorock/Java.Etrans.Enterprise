package com.base.webService.Interface;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.TimeZone;

import javax.jws.WebParam;
import javax.jws.WebService;

import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;

import com.base.webService.entity.Header;
import com.base.webService.entity.Params;
import com.base.webService.entity.ResultMessage;
import com.base.webService.entity.WebServiceGpsInfo;
import com.etrans.bubiao.auth.SessionUser;
import com.etrans.bubiao.entities.User;
import com.etrans.bubiao.entities.WorkUnit;
import com.etrans.bubiao.repository.CommandRepository;
import com.etrans.bubiao.services.LoginServices;
import com.etrans.bubiao.services.monitorCenter.MonitorCenterServices;
import com.etrans.common.util.State;
import com.thoughtworks.xstream.XStream;
import com.thoughtworks.xstream.io.xml.DomDriver;

@WebService
public class GpsInfoImpl  implements GpsInfo{
	SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
	TimeZone timeZoneChina = TimeZone.getTimeZone("Asia/Shanghai");// 获取中国的时区
	@Autowired
	private CommandRepository commandRepository;
	@Autowired
	private LoginServices loginServices;
	
	@Autowired
	private MonitorCenterServices monitorCenterServices;
	public GpsInfoImpl(){
		sdf.setTimeZone(timeZoneChina);// 设置系统时区
	}
	
	
	/**
	 * 取用户下所有车辆的最新定位信息
	 * @author lihaiyan
	 * @param paramsXML xml格式参数
	 * @createTime 2012-7-6
	 */
	public String ETGetGpsInfoList(final @WebParam(name="paramsXML")String paramsXML){
		XStream  xstream = new XStream(new DomDriver());
		ResultMessage message=new ResultMessage();
		message.setHead("");
		String resultCode="0";
		List<String> gpsInfoStringList=new ArrayList<String>();
		try{
			if(StringUtils.isEmpty(paramsXML)){
				resultCode="2";//1:帐户有误,2:其他
			}else{
				xstream.alias("ETGetGpsInfoList", Params.class);
				Params params=(Params)xstream.fromXML(paramsXML);
				Header head=params.getHead();
				User user = loginServices.queryUser(head.getName(), head.getPassword());
				if(user==null){
					resultCode="1";//1:帐户有误,2:其他
				}else {
					WorkUnit workUnit = loginServices.queryUserWorkUnit(user.getWorkUnitId());
					SessionUser sessionUser = new SessionUser();
					sessionUser.setUserID(user.getId());
					sessionUser.setUserName(user.getUserName());
					sessionUser.setIsSuperUser(user.getIsSuperUser());
					sessionUser.setWorkUnitID(user.getWorkUnitId());
					sessionUser.setPassword(user.getPassword());
					if(workUnit.getAdminUserId()!=null 
							&& (String.valueOf(user.getId()).equals(workUnit.getAdminUserId()))){
						sessionUser.setWorkUnitSuperAdmin(true);
					}
					String workUnitName="";
					String simNo="";
					String vehicleTeam="";
					String driverName="";//司机
					Map<String, Object> whereMap=new HashMap<String, Object>();
					whereMap.put("@RegistrationNo", "");
					whereMap.put("@WorkUnitName", workUnitName);
					whereMap.put("@SimNo", simNo);
					whereMap.put("@VehicleTeam", vehicleTeam);
					whereMap.put("@DriverName", driverName);
					String userId = String.valueOf(sessionUser.getUserID());
					if(sessionUser.getIsSuperUser()){//超级管理员
						userId="-1";
					}
					else{
						if(sessionUser.isWorkUnitSuperAdmin()){//企业管理员
							userId="0";
							
						}
					}
					whereMap.put("@WorkUnitId", String.valueOf(sessionUser.getWorkUnitID()));
					whereMap.put("@FullID",sessionUser.getWorkUnitFullId());
					whereMap.put("@UserId",userId);
					List<Map<String, Object>> resultList=monitorCenterServices.getWebServiceGpsVehicle(whereMap);
					if(resultList!=null&&resultList.size()>0){
						for(int i=0;i<resultList.size();i++){
							String idString=String.valueOf(resultList.get(i).get("ID"));
							String commno=String.valueOf(resultList.get(i).get("commno"));
							String regNo=String.valueOf(resultList.get(i).get("RegistrationNO"));
							String gpsInfo=this.commandRepository.getGpsInfo(idString);
							WebServiceGpsInfo webServiceGps=this.toGpsInfo(gpsInfo);
							webServiceGps.setRegistrationNo(regNo);
							webServiceGps.setCommon(commno);
							gpsInfoStringList.add(webServiceGps.toString());
						}
							
					}
				}
				
			}
			
			
			
		}catch(Exception e){
			e.printStackTrace();
			resultCode="2";
		}
		message.setResultCode(resultCode);
		message.setBody(gpsInfoStringList);
		xstream.alias("gpsinfo", String.class);
		xstream.alias("ETGetGpsInfoList", ResultMessage.class);
		return xstream.toXML(message);
	}
	
	/**
	 * 取某辆车的最新定位信息
	 * @author lihaiyan
	 * @param paramsXML xml格式参数
	 * @createTime 2012-7-6
	 */
	public String ETGetGpsInfo(final @WebParam(name="paramsXML")String paramsXML){
		XStream  xstream = new XStream(new DomDriver());
		ResultMessage message=new ResultMessage();
		message.setHead("");
		String resultCode="0";
		List<String> gpsInfoStringList=new ArrayList<String>();
		try{
			if(StringUtils.isEmpty(paramsXML)){
			   resultCode="2";;//1:帐户有误,2:其他
			}else {

				xstream.alias("ETGetGpsInfo", Params.class);
				xstream.alias("vehicle", String.class);
				Params params=(Params)xstream.fromXML(paramsXML);
				Header head=params.getHead();
				User user = loginServices.queryUser(head.getName(), head.getPassword());
				if(user==null){
					resultCode="1";//1:帐户有误,2:其他
				}else {
					List<String> bodyList=params.getBody();
					if(bodyList==null||bodyList.size()<=0){
						resultCode="2";//1:帐户有误,2:其他
					}else{
						WorkUnit workUnit = loginServices.queryUserWorkUnit(user.getWorkUnitId());
						SessionUser sessionUser = new SessionUser();
						sessionUser.setUserID(user.getId());
						sessionUser.setUserName(user.getUserName());
						sessionUser.setIsSuperUser(user.getIsSuperUser());
						sessionUser.setWorkUnitID(user.getWorkUnitId());
						sessionUser.setPassword(user.getPassword());
						if(workUnit.getAdminUserId()!=null 
								&& (String.valueOf(user.getId()).equals(workUnit.getAdminUserId()))){
							sessionUser.setWorkUnitSuperAdmin(true);
						}
						String registrationNo=bodyList.get(0);//车牌号
						String workUnitName="";
						String simNo="";
						String vehicleTeam="";
						String driverName="";//司机
						Map<String, Object> whereMap=new HashMap<String, Object>();
						whereMap.put("@RegistrationNo", registrationNo);
						whereMap.put("@WorkUnitName", workUnitName);
						whereMap.put("@SimNo", simNo);
						whereMap.put("@VehicleTeam", vehicleTeam);
						whereMap.put("@DriverName", driverName);
						String userId = String.valueOf(sessionUser.getUserID());
						if(sessionUser.getIsSuperUser()){//超级管理员
							userId="-1";
						}
						else{
							if(sessionUser.isWorkUnitSuperAdmin()){//企业管理员
								userId="0";
								
							}
						}
						whereMap.put("@WorkUnitId", String.valueOf(sessionUser.getWorkUnitID()));
						whereMap.put("@FullID",sessionUser.getWorkUnitFullId());
						whereMap.put("@UserId",userId);
						List<Map<String, Object>> resultList=monitorCenterServices.getWebServiceGpsVehicle(whereMap);
						if(resultList!=null&&resultList.size()>0){
							String idString=String.valueOf(resultList.get(0).get("ID"));
							String commno=String.valueOf(resultList.get(0).get("commno"));
							String regNo=String.valueOf(resultList.get(0).get("RegistrationNO"));
							String gpsInfo=this.commandRepository.getGpsInfo(idString);
							WebServiceGpsInfo webServiceGps=this.toGpsInfo(gpsInfo);
							webServiceGps.setRegistrationNo(regNo);
							webServiceGps.setCommon(commno);
							gpsInfoStringList.add(webServiceGps.toString());
					}
					}
					
				}
				
			}
		 	
		
			
		}catch(Exception e){
			e.printStackTrace();
			resultCode="2";
		}
		message.setResultCode(resultCode);
		message.setBody(gpsInfoStringList);
		xstream.alias("gpsinfo", String.class);
		xstream.alias("ETGetGpsInfo", ResultMessage.class);
		return xstream.toXML(message);
	}
	
	

	
	/**
	 * 获取车辆方向
	 * @param head
	 * @author lihaiyan
	 * @createTime 2011-08-09
	 * @return
	 */
	private String getHead(int head){
		     if(head==0){
		    	 return "正东向";
		     }else if((head >= 0 && head <= 10) || (head >= 350)){
		    	 return "东向";
		     }else if(head > 10 && head <= 80){
		    	 return "东北向";
		     }else if(head == 90){
		    	 return "正北向";
		     }else if(head > 80 && head <= 100){
		    	 return "北向";
		     }else if(head > 100 && head <= 170){
		    	 return "西北向";
		     }else if(head == 180){
		    	 return "正西向";
		     }else if(head > 170 && head <= 190){
		    	 return "西向";
		     }else if((head > 190 && head <= 260)){
		    	 return "西南向";
		     }else if(head == 270){
		    	 return "正南向";
		     }else if(head > 260 && head <= 280){
		    	 return "南向";
		     }else if(head > 280 && head < 350){
		    	 return "东南向";
		     }else{
		    	 return  "未知方向";
		     }
		  
		}

	/**
	 * 把gps信息组装成gps对象
	 * @author lihaiyan
	 * @param gpsInfo
	 * @return WebServiceGpsInfo
	 * @createTime 2011-12-21
	 */
	private WebServiceGpsInfo toGpsInfo(String gpsInfo){
		WebServiceGpsInfo gps=new WebServiceGpsInfo();
		if(gpsInfo!=null){
			String[] gpsInfoMessageArray =gpsInfo.split(",");
			 int st=Integer.parseInt(gpsInfoMessageArray[12]);//是否有效定位
			 gps.setGpsValid(st==1?true:false);
		     gps.setLatitude(gpsInfoMessageArray[4]);//纬度
		     gps.setLongitude(gpsInfoMessageArray[3]);//经度
		     gps.setSpeed(gpsInfoMessageArray[7]);//速度
		     String sd2 =gpsInfoMessageArray[6]; //记录仪速度
		     gps.setSd2(sd2);
		     gps.setHead(this.getHead(Integer.parseInt((gpsInfoMessageArray[8]))));//方向
		 	String stateStr = "";// 状态
			stateStr = State.getTermianlState(gpsInfoMessageArray[17]);//gps状态|报警状态 
			 String[] stateStrArray=stateStr.split("\\|");
		     gps.setGpsState(stateStrArray[0]);//状态
			 gps.setGpsTime(gpsInfoMessageArray[1]);
			 gps.setGpsOil(gpsInfoMessageArray[16]);//油位
			 gps.setGpsMileage(gpsInfoMessageArray[15]);//里程
		}
         return gps;
	}
	
	
	
}
