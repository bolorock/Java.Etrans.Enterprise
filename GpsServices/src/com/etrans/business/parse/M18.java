package com.etrans.business.parse;

import java.util.Map;

import com.etrans.entity.AffixationBean;

/** 
 * 附加信息
 * @author Pomelo(柚子.)  
 * @version 1.0
 * @since 创建时间：2013-7-3 下午6:23:17 
 */
public class M18 implements M {
	
	private AffixationBean affixationBean = new AffixationBean();
	private String[] business;
	private String decoderStr;
 
	/**
	 * 解析消息
	 * 
	 * @param message    String    base64解密后的报文信息
	 * @param producQue  EQueue    生产队列
	 * @param resultMap  HashMap<String,String>  结果保存对象
	 */
	@Override
	public void parse(String[] message,Map<String, Object> resultMap) throws Exception {
		business = message;
		decoderStr =business[3].toString();
		affixationBean=getaffixationHashMap(business[2],decoderStr,resultMap);
		resultMap.put(business[2].toString(), affixationBean);
	}
	
	/***
	 * 保存数据到
	 * 
	 * vehicleId 车辆id
	 * decoderStr 解密数据
	 * @return
	 */
	public AffixationBean getaffixationHashMap(String vehicleId,String decoderStr,Map<String, Object> resultMap){
		AffixationBean affixationBean = (AffixationBean)resultMap.get(vehicleId);
		if(affixationBean==null){
			affixationBean = new AffixationBean();
			addAffixationBeanInfoByTypeId(decoderStr,affixationBean);
		}else{
			addAffixationBeanInfoByTypeId(decoderStr,affixationBean);
		}
		return affixationBean;
	}	
	
	/**
	 * 根据附加数据类型id完善affixationBean实体
	 * 
	 * decoderStr 解码数据
	 * affixationBean 附加数据实体
	 */
	public void addAffixationBeanInfoByTypeId(String decoderStr,AffixationBean affixationBean){		
		String[] val = decoderStr.split(",");
		String typeId = val[2];//数据类型
		String value="";//附加内容
		if(val.length==4){
			value = val[3];
		}
		affixationBean.setVehicleID(val[0]);//车辆id
		affixationBean.setDate(val[1]);//上传时间
		if(typeId.equals("9")){ //司机IC卡号
			affixationBean.setDriverIC(value);
		}else if(typeId.equals("10")){//司机驾驶证号
			affixationBean.setDrivingLicence(value);
		}else if(typeId.equals("11")){//司机姓名
			affixationBean.setDrivinName(value);
		}else if(typeId.equals("12")){//人工确认报警事件的ID
			affixationBean.setAlarmAffairID(value);
		}else if(typeId.equals("13")){//超速报警
			affixationBean.setOverspeedAlarm(value);
		}else if(typeId.equals("14")){//进出区域
			affixationBean.setTurnoverArea(value);
		}else if(typeId.equals("18")){//终端司机编号
			affixationBean.setZdDriverCode(value);
		}else if(typeId.equals("19")){// 终端是否插入IC卡
			affixationBean.setZdWhetherIC(value);
		}else if(typeId.equals("20")){ //附加信息整体字符串
			affixationBean.setFjInfo(value);
		}
	}
	/**
	 * 获取指令或者协议名称
	 * 
	 * @return
	 */
	public String getName(){
		return "【指令数据类型】——【附加信息】";
	}
}

