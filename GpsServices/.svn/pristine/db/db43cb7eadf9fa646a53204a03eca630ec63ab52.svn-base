package com.etrans.business.parse;

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.TimeZone;

import org.apache.log4j.Logger;

import com.etrans.business.CommandCode;
import com.etrans.business.queue.ResultMaps;
import com.etrans.business.service.dao.ParentPlatformsDao;
import com.etrans.common.util.CommandTools;
import com.etrans.common.util.DateUtil;

/** 
 * 业务信息处理
 * 
 * @author Pomelo(柚子.)  
 * @version 1.0
 * @since 创建时间：2013-7-16 下午2:31:58 
 */
public class M70_P_Business implements M {

	/** 日志对象*/
	private static Logger logger = Logger.getLogger(M70_P_Business.class);
	private ParentPlatformsDao platFormsDao = new ParentPlatformsDao();
	private SimpleDateFormat sdf = new SimpleDateFormat("yyyy-M-dd HH:mm:ss");
	private Calendar calendar = Calendar.getInstance();
	private TimeZone timeZoneChina = TimeZone.getTimeZone("Asia/Shanghai");
	
	{
		calendar.setTimeZone(timeZoneChina);
		sdf.setTimeZone(timeZoneChina);
	}
	
	 
	/**
	 * 指令代码|描述@回复指令参数1#回复指令参数2#回复指令参数3|接受时间
	 * 
	 * @param message String[] 消息
	 * @param resultMap Map 存放结果
	 */
	@Override
	public void parse(String[] message, Map<String, Object> resultMap) throws Exception {
		try {
			String decoderStr = message[3];// 加密内容
			int commandCode = Integer.parseInt(message[1]);
			switch (commandCode) {
				case CommandCode.COMMAND_7104:// 查岗
					ResultMaps.flatQueue.add(message[1]+ "|"+ CommandTools.convertChaGuan(decoderStr,message[1]) + "|" + sdf.format(new Date()));
					addChaguanLog(decoderStr, sdf, calendar);
					break;
				case CommandCode.COMMAND_7105:// 报文
					ResultMaps.flatQueue.add(message[1] + "|"+ CommandTools.convertPost(decoderStr, message[1])+ "|" + sdf.format(new Date()));
					break;
				case CommandCode.COMMAND_7110:// 启动车辆定位信息交换请求
					ResultMaps.flatQueue.add(message[1]+ "|"+ CommandTools.convertVehicleGpsSwap(decoderStr,message[1]) + "|" + sdf.format(new Date()));
					break;
				case CommandCode.COMMAND_7111:// 结束车辆定位信息交换请求
					ResultMaps.flatQueue.add(message[1]+ "|"+ CommandTools.convertOverVehicleGpsSwap(decoderStr, message[1]) + "|"+ sdf.format(new Date()));
					break;
				default:
					ResultMaps.flatQueue.add(message[1] + "|" + decoderStr+ "|" + sdf.format(new Date()));
					break;
			}
			if (commandCode == CommandCode.COMMAND_7106) {
				addAlarmOverSeeing(decoderStr, sdf, calendar);
			}
		} catch (Exception e) {
			logger.error("业务数据入HashMap出错:" + e);
		}
	}

	/**
	 * 获取当前线程处理对应的业务名称
	 * 
	 * @return  String
	 */
	@Override
	public String getName() {
		return "上级平台业务处理";
	}

	/**
	 * 上级平台查岗入库
	 * 中国首都在哪？ 
	 * （解释：
	 *  2查岗对象类型：下级平台所有业户 
	 *  3查岗对象ID：0x000000000000000000000000 
	 *  4查岗信息ID：12 
	 *  5查岗信息内容：中国首都在哪？
	 * @param decoderStr
	 * @param sdf
	 * @param calendar
	 * @throws Exception 
	 */
	public void addChaguanLog(String decoderStr, SimpleDateFormat sdf,
			Calendar calendar) throws Exception {
		try {
			String msgArr[] = decoderStr.split(",");
			Map<String, Object> setParamMap = new HashMap<String, Object>();
			setParamMap.put("CheckingNo", msgArr[4]);// 查岗消息流水号
			setParamMap.put("CheckContent", msgArr[5]);// 查岗内容
			setParamMap.put("CheckTime", sdf.format(calendar.getTime()));// 查岗时间
			setParamMap.put("IsResult", "false");// false表示查岗，true表示回复
			platFormsDao.addLog(setParamMap, "HighLevelPatrolSql");
		} catch (Exception ee) {
			throw new Exception(ee.getMessage());
		}
	}
	
	/**
	 * 
	 * @param decoderStr
	 * @param sdf
	 * @param calendar
	 */
	public void addAlarmOverSeeing(String decoderStr, SimpleDateFormat sdf,
			Calendar calendar) throws Exception{
		try {
			String msgArr[] = decoderStr.split(",");
			Map<String, Object> setParamMap = new HashMap<String, Object>();
			setParamMap.put("vehicleId", msgArr[1]);// 车辆ID
			setParamMap.put("alarmType", msgArr[3]);// 报警类型
			setParamMap.put("alarmDate", DateUtil.formatStr2Date(msgArr[4]));// 报警时间
			setParamMap.put("overSeeingId", msgArr[5]);// 报警督办ID
			setParamMap.put("overSeeingDate",DateUtil.formatStr2Date(msgArr[6]));// 督办截止时间
			setParamMap.put("termialType", msgArr[0]);// 通讯类型
			setParamMap.put("alarmInfoSource", msgArr[2]);// 报警信息来源
			setParamMap.put("overSeeingLevel", msgArr[7]);// 督办级别
			setParamMap.put("overSeeingUser", msgArr[8]);// 督办人
			setParamMap.put("telphone", msgArr[9]);// 督办联系电话
			setParamMap.put("eMail", msgArr[10]);// 督办联系电子邮件
			platFormsDao.addLog(setParamMap, "AlarmOverSeeingSql");
		} catch (Exception ee) {
			throw new Exception(ee.getMessage());
		}
	}
	
	/** 
	 * 
	 * 报警督办请求 
	 * 800,112,1,3,20120626123030,2123, 20120627123030,0,张三,13912345678,TEST@TEST.COM 
	 * （
	 * 解释： 
	 *   0通讯类型：800   
	 *  1车辆ID：112
	 *  2报警信息来源：车载终端
	 *  3报警类型：紧急报警 
	 *  4报警时间：2012年6月26日 12:30:30 
	 *  5报警督办ID：2123  
	 *  6督办截止时间：2012年6月27日 12:30:30    
	 *  8督办人：张三 
	 *  9督办联系电话：13912345678  
	 *  10督办联系电子邮件：TEST@TEST.COM  
	 *  ）
	 * @param vehicleId
	 * @param commandCode
	 * @param message
	 * @throws Exception
	 */
	public void addClientComSendLog(String vehicleId, String commandCode,
			String message) throws Exception {
		 try{
			SimpleDateFormat sdf = new SimpleDateFormat("yyyy-M-dd HH:mm:ss");
			Calendar calendar=Calendar.getInstance();
			TimeZone timeZoneChina = TimeZone.getTimeZone("Asia/Shanghai");// 获取中国的时区
			calendar.setTimeZone(timeZoneChina);
			sdf.setTimeZone(timeZoneChina);
			Map<String, Object> setParamMap=new HashMap<String, Object>();
			setParamMap.put("VehicleID", vehicleId==null?"0":vehicleId);
			setParamMap.put("UserID", "1");
			setParamMap.put("UserName", "admin");
			setParamMap.put("CommName", commandCode);
			setParamMap.put("CommContent", message);
			setParamMap.put("SendTime", sdf.format(calendar.getTime()));
			platFormsDao.addLog(setParamMap, "clientCommandSql");
		   }catch(Exception ee){
			   throw new Exception(ee.getMessage());
		   }
	}
}

