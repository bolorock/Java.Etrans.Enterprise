package com.etrans.business.parse;

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.HashMap;
import java.util.Map;
import java.util.TimeZone;
import com.etrans.business.CommandCode;
import com.etrans.business.service.dao.ParentPlatformsDao;
import com.etrans.common.util.CommandTools;

/** 
 * 指令回复处理[809]
 *
 * @author Pomelo(柚子.)  
 * @version 1.0
 * @since 创建时间：2013-7-16 下午2:30:21 
 */
public class M70_P_Result implements M{
	private ParentPlatformsDao platFormsDao = new ParentPlatformsDao();
	/**
	 * 指令回复处理[809]
	 * 
	 * @param message
	 * @param resultMap
	 * @throws Exception
	 */
	@Override
	public void parse(String[] message, Map<String, Object> resultMap)
			throws Exception {
		int commandCode = Integer.parseInt(message[1]);
		//指令代码|描述@回复指令参数1#回复指令参数2#回复指令参数3|接受时间 
		switch(commandCode){		
			case CommandCode.COMMAND_7900:
				//上级下发应答信息通用描述：（增加指令）
				resultMap.put(CommandCode.COMMAND_7900+"Command",
						CommandTools.convertUpCustomAnswer(
								message[3],
								message[1])+"|"+System.currentTimeMillis()
						);
				break;		
			default:	
				//,,1,0
				//（解释：主链路连接状态：登录成功、从链路连接状态：连接断开）
				String value=message[3] + "|" + System.currentTimeMillis();
				resultMap.put(message[1], value+"|"+System.currentTimeMillis());
				break;
		}
		this.addClientComSendLog("0", message[1], message[3]);
	}

	/**
	 * 指令处理名称
	 * 
	 * @return String 
	 */
	@Override
	public String getName() {
		return "上级平台指令回复处理线程";
	}

	/**
	 * 新增日志
	 * 
	 * @param vehicleId
	 * @param commandCode
	 * @param decoderStr
	 */
	public void addClientComSendLog(String vehicleId, String commandCode,
			String decoderStr) {
		try {
			SimpleDateFormat sdf = new SimpleDateFormat("yyyy-M-dd HH:mm:ss");
			Calendar calendar = Calendar.getInstance();
			TimeZone timeZoneChina = TimeZone.getTimeZone("Asia/Shanghai");// 获取中国的时区
			calendar.setTimeZone(timeZoneChina);
			sdf.setTimeZone(timeZoneChina);
			Map<String, Object> setParamMap = new HashMap<String, Object>();
			setParamMap.put("VehicleID", vehicleId == null ? "0" : vehicleId);
			setParamMap.put("UserID", "1");
			setParamMap.put("UserName", "admin");
			setParamMap.put("CommName", commandCode);
			setParamMap.put("CommContent", decoderStr);
			setParamMap.put("SendTime", sdf.format(calendar.getTime()));
			platFormsDao.addLog(setParamMap, "clientCommandSql");
		} catch (Exception ee) {
			ee.printStackTrace();
		}
	}
}

