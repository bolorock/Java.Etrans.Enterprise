package com.etrans.bubiao.services.command;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.MissingFormatArgumentException;
import java.util.Queue;

import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.etrans.bubiao.auth.SessionUser;
import com.etrans.bubiao.repository.CommandRepository;
import com.etrans.bubiao.repository.parent.ParentCommandRepository;
import com.etrans.bubiao.services.IbatisServices;
import com.etrans.bubiao.sys.UserContext;
import com.etrans.common.util.CommandCode;

/**
 * 指令Services
 * @author lihaiyan
 * @version 1.0
 */
@Service
public class CommandServices
{
	@Autowired
	private CommandRepository  commandRepository;
	
	@Autowired
	private ParentCommandRepository parentCommandRepository;
	
	@Autowired
	private IbatisServices ibatisServices;

	
	/**
	 * 描述：插入报警处理记录
	 * 
	 * @author lihaiyan
	 * @since Create on 2012-5-23
	 * @version Copyright (c) 2012 by e_trans.
	 */
	public void addDealAlarmInfo(Map<String,Object> paramsMap)
	{
		try
		{
			this.ibatisServices.insertIbatisObject("insertDealAlarmInfoSQL", paramsMap);
		} catch (Exception e)
		{
			e.printStackTrace();
		}
	}
	
	/**
	 * 描述：新增客户端指令发送日志
	 * 
	 * @author lihaiyan
	 * @since Create on 2012-5-23
	 * @version Copyright (c) 2012 by e_trans.
	 */
	public void addClientCommandSendLog(Map<String,Object> paramsMap)
	{
		try
		{
			this.ibatisServices.insertIbatisObject("insertClientCommandSendLog", paramsMap);
		} catch (Exception e)
		{
			e.printStackTrace();
		}
	}

	/**
	 * 描述：查询终端返回结果
	 * 
	 * @author lihaiyan
	 * @since Create on 2012-3-9
     *@return String 指令结果
	 * @version Copyright (c) 2012 by e_trans.
	 */
	public String findCommandResult(String vehicleId) throws Exception {
		String result="";
		String message = this.commandRepository.getCommandResult(vehicleId);
		if(StringUtils.isNotEmpty(message)) {
					// 判断时间,1分钟内
		if (System.currentTimeMillis() - Long.parseLong(message.split("\\|")[1]) < 60000) {
			result=(message.split("\\|")[0]).split(",")[4];
		   }
		}
		return result;
	}
	
	
	/**
	 * 描述：查询指令返回结果
	 * 
	 * @author lihaiyan
	 * @since Create on 2012-6-28
     *@return String 指令结果
	 * @version Copyright (c) 2012 by e_trans.
	 */
	public String findPlatFormCommandResult(String key) throws Exception {
		String result="";
		String message = this.parentCommandRepository.getCommandResult(key);
		if(StringUtils.isNotEmpty(message)) {
					// 判断时间,1分钟内
		if (System.currentTimeMillis() - Long.parseLong(message.split("\\|")[1]) < 60000) {
			result=(message.split("\\|")[0]);
		   }
		}
		return result;
	}
	
	
	
	/**
	 * 描述：查询链路状态
	 * 
	 * @author lihaiyan
	 * @since Create on 2012-6-28
     *@return String 指令结果
	 * @version Copyright (c) 2012 by e_trans.
	 */
	public String getLinkStatus() throws Exception {
		return this.parentCommandRepository.getCommandResult(CommandCode.COMMAND_7101+"");
	}
	
	
	
	
	/**
	 * 描述：查询终端拍照返回结果
	 * 
	 * @author lihaiyan
	 * @since Create on 2012-5-23
	 * @version Copyright (c) 2012 by e_trans.
	 */
	public String findPictureResult(String vehicleId) throws Exception {
		String result = "";
		String message = this.commandRepository.findPictureResult(vehicleId);
		if(StringUtils.isNotEmpty(message)) {
		if (System.currentTimeMillis() - Long.parseLong(message.split("\\|")[2]) < 300000) {
			result=message.split("\\|")[1];
		   }
		}
		return result;
	}
		
	
	

	
	
	
	
	

	
	/**
	 * 描述:获取直连终端指令参数
	 * 
	 * @author lihaiyan
	 * @since Create on 2012-5-22
	 *@return List<HashMap<String, String>> ,结果列表
	 * @version Copyright (c) 2012 by e_trans.
	 */
	public List<Map<String,Object>> getCommandSendParam(Map whereParam){
		
		
		List<Map<String,Object>> rows=null;
		try
		{
			rows=this.ibatisServices.queryForList(Map.class,"getPubCommandSendParamSQL", whereParam);
		} catch (Exception e)
		{
			e.printStackTrace();
		}
		return rows;
	}
	
	
	/**
	 * 描述：查询用户自定义圆形，多边形，矩形数据  
	 *  2:圆形，3:多边形，1:矩形坐标 
	 * 
	 * @author lihaiyan
	 * @since Create on 2012-3-30
     *@return List<HashMap<String, String>> ,结果列表
	 * @version Copyright (c) 2012 by e_trans.
	 */
	public List<Map<String, Object>> getCommandAreaSel(Map whereParam){
		
		
		List<Map<String,Object>> rows=null;
		try
		{
			rows=this.ibatisServices.queryForList(Map.class,"getCommandAreaSelSQL", whereParam);
		} catch (Exception e)
		{
			e.printStackTrace();
		}
		return rows;
	}
	
	/**
	 * 描述：查询用户自定义线数据
	 * 
	 * @author lihaiyan
	 * @since Create on 2012-3-30
     *@return List<HashMap<String, String>> ,结果列表
	 * @version Copyright (c) 2012 by e_trans.
	 */
	public List<Map<String, Object>> getCommandLineSel(Map whereParam){
		List<Map<String,Object>> rows=null;
		try
		{
			rows=this.ibatisServices.queryForList(Map.class,"getCommandLineSelSQL", whereParam);
		} catch (Exception e)
		{
			e.printStackTrace();
		}
		return rows;
	}
	
	/**
	 * 取指令系列号
	 * */
	public int getSendSequence() {
		return this.commandRepository.getSendSequence();
	}

	/**
	 * 将发送指令插入发送队列
	 * */
	public void insertCommandSendQueue(String message) throws Exception {
		this.commandRepository.insertCommandSendQueue(message);
	}
	
	/**
	 * 将发送指令插入发送队列
	 * */
	public void insertPlatFormCommandSendQueue(String message) throws Exception {
		this.parentCommandRepository.insertCommandSendQueue(message);
	}
	
	
	

	
	//中心纬度、经度、半径(设置圆形区域)
	public List<Map<String,Object>> castCommandCircular(List<Map<String,Object>> ls){
		
		try{
			if(ls==null || ls.size()==0)
				return null;
			
			for(Map<String,Object> map:ls){
			
				String longitude =String.valueOf(map.get("longitude"));
				String latitude = String.valueOf(map.get("latitude"));
				String radius = String.valueOf(map.get("Radius"));
					
				String textStr = latitude+","+longitude+","+radius;
				map.put("val", textStr);
			}
		}catch(Exception e)
		{
			e.printStackTrace();
			ls = null;
		}
		return ls;
	}
	
	
	//左上点纬度,左上点经度;右下点纬度,右下点经度(设置矩形区域)
	public List<Map<String,Object>> castCommandRectangular(List<Map<String,Object>> ls){
		
		List<Map<String,Object>> rows = new ArrayList<Map<String,Object>>();
		try{
			if(ls==null || ls.size()==0)
				return null;
			
			
			for(Map<String,Object> map:ls){
			
				String id = String.valueOf(map.get("id"));
				String name = (String)map.get("name");
				String longitude =String.valueOf(map.get("longitude")); 
				String latitude = String.valueOf(map.get("latitude"));
					
				Map<String,Object> m = getItemById(rows,id);
				
				if(m!=null){
					String textStr = m.get("val")+","+latitude+","+longitude;
					m.put("val", textStr);
				}else{
					String textStr = latitude+","+longitude;
					m = new HashMap<String,Object>();
					m.put("val", textStr);
					m.put("name", name);
					m.put("id", id);
					rows.add(m);
				}
			}
		}catch(Exception e)
		{
			e.printStackTrace();
			ls = null;
		}
		return rows;
	}
	

	//格式：经度1;纬度1;...;经度N;纬度N（顶点数1~16个）(设置多边形区域,设置路线)
	public List<Map<String,Object>> castCommandPolygon(List<Map<String,Object>> ls){
		List<Map<String,Object>> rows = new ArrayList<Map<String,Object>>();
		
		try{
			if(ls==null || ls.size()==0)
				return null;
			
			for(Map<String,Object> map:ls){
			
				String id = (String)map.get("id");
				String name = (String)map.get("name");
				String longitude =String.valueOf(map.get("longitude"));
				String latitude = String.valueOf(map.get("latitude"));
					
				Map<String,Object> m = getItemById(rows,id);
				
				if(m!=null){
					String textStr = m.get("val")+";"+latitude+","+longitude;
					m.put("val", textStr);
				}else{
					String textStr = latitude+","+longitude;
					m = new HashMap<String,Object>();
					m.put("val", textStr);
					m.put("name", name);
					m.put("id", id);
					rows.add(m);
				}
			}
		}catch(Exception e)
		{
			e.printStackTrace();
			ls = null;
		}
		return rows;
	}
	
	
	
	/**
	 * 描述：获取指令类型名称
	* @author lihaiyan
	 * @since Create on 2012-5-22
     *@return List<Map<String, Object>> ,结果列表
	 * @version Copyright (c) 2012 by e_trans.
	 */
	public List<Map<String, Object>> findPubCommandSendOne(Map params,SessionUser user){
		List<Map<String,Object>> rows=null;
		try
		{
			if(user.isWorkUnitSuperAdmin()||UserContext.isBsRootUser()){//企业管理员或者超级管理员
				rows=this.ibatisServices.queryForList(Map.class,"getAdminPubCommandSendOneSQL", params);
			}else{//普通管理员
				params.put("userId", user.getUserID());
				rows=this.ibatisServices.queryForList(Map.class,"getPubCommandSendOneSQL", params);
			}
			
		} catch (Exception e)
		{
			e.printStackTrace();
		}
		return rows;
	}
	
	

	/**
	 * 描述：获取第二级指令
	 * 
	 * @author lihaiyan
	 * @since Create on 2012-5-22
     *@return List<HashMap<String, String>> ,结果列表
	 * @version Copyright (c) 2012 by e_trans.
	 */
	public List<Map<String, Object>> findPubCommandSendTwo(Map params,SessionUser user){
  		
		List<Map<String,Object>> rows=null;
		try
		{  
			if(user.isWorkUnitSuperAdmin()||UserContext.isBsRootUser()){//企业管理员或者超级管理员
				 rows=this.ibatisServices.queryForList(Map.class,"getAdminPubCommandSendTwoSQL", params);
			}else{//普通管理员
				 params.put("userId", user.getUserID());
				  rows=this.ibatisServices.queryForList(Map.class,"getPubCommandSendTwoSQL", params);
			}
		
		} catch (Exception e)
		{
			e.printStackTrace();
		}
  		return rows;
	}
	
	/**
	 * 查询平台指令或者其他指令
	 * @param user
	 * @return
	 */
	public List<Map<String,Object>> findPlatCommandAndOther(SessionUser user){
		List<Map<String,Object>> rows=null;
		try{  
			Map params = new HashMap();
			params.put("userId", user.getUserID());
			rows=this.ibatisServices.queryForList(Map.class,"getPlatAndOtherCommandSql", params);		
		} catch (Exception e){
			e.printStackTrace();
		}
  		return rows;
	}
	/**
	 * 格式化直接指令
	 * @param paramFormat
	 * @param msg
	 * @return
	 * @throws Exception
	 */
	public String formatModel(String paramFormat,String msg) throws Exception{
		
		String[] obj = msg.split("=\\|=");
		Object[] val = new Object[obj.length];
		  
	   for(int i=0 ; i<obj.length;i++){
		   val[i] = toType(obj[i]);
	   }
      try{
			return String.format(paramFormat, val);
      }catch(MissingFormatArgumentException ex){
    	   throw new Exception("输入参数类型与指令模版格式不对！");
      }
	}
	
	/**
	 * 判断发送的指令类型为直连指令
	 * @param msg
	 * @param commandType
	 * @param commandKindId
	 * @return
	 * @throws Exception
	 */
	public String encoderMsg(String msg,String commandKindId) throws Exception{
		
		
			Map map = new HashMap<String,Object>();
			map.put("commandKindId", commandKindId);
			
			String paramFormat = "";  
			
			List<Map<String,Object>> rows =this.ibatisServices.queryForList(Map.class,"getPubCommandSendSQL", map);
			if(rows!=null && rows.size()>0){
				paramFormat =(String)rows.get(0).get("ParamFormat");
				
			}else{
				throw new Exception("找不到相关指令！");
			}
			String result= specialHandle(commandKindId,formatModel(paramFormat,msg));
			return result;
	}
	
	/**
	 *  可以不输入
	 *  256	设备管理	删除几个特定事件
	    267	区域线路	删除圆形区域
		270	区域线路	删除矩形区域
		273	区域线路	删除多边形区域
		276	区域线路	删除路线
	 */
	public  String specialHandle(String commandKindId, String msg) throws Exception{
		
		if(commandKindId.equals("256") ||
				commandKindId.equals("267") ||
				commandKindId.equals("270") ||
				commandKindId.equals("273") ||
				commandKindId.equals("276")){
			msg=msg.replaceAll("-9999", "");
		}
		return msg;
	}
	
	/**
	 * 通过菜单ID获取菜单元素
	 * @param list
	 * @param id
	 * @return
	 */
	public static Map<String,Object> getItemById(List<Map<String,Object>> list,String id) throws Exception{
		
		if(list != null && list.size()>0 && id != null){
			for(Map<String,Object> item : list){
				String itemId = (String)item.get("id");
				if(itemId != null && itemId.equals(id)){
					return item;
				}
			}
		}
		
		return null;
	}
	
	/**
	 * （直连指令）转换指令参数类型
	 */
	public Object toType(String  param) throws Exception{
		
		  if(param.indexOf("STRING@")>-1){
			  String[] paramsArrayStrings=param.split("STRING@");
			  if(paramsArrayStrings.length==2){
				  return paramsArrayStrings[1];
			  }else {
				  return"";
			}
			  
		  }else if(param.indexOf("INT@")>-1){
			  String[] paramsArrayStrings=param.split("INT@");
			  if(paramsArrayStrings.length==2){
				  return Integer.valueOf(paramsArrayStrings[1]);
			  }else {
				  return 0;
			}
			  
		  }else if(param.indexOf("FLOAT@")>-1){
			  String[] paramsArrayStrings=param.split("FLOAT@");
			  if(paramsArrayStrings.length==2){
				  return Float.valueOf(paramsArrayStrings[1]);
			  }else {
				  return 0f;
			}
		   
		  }else{
			  throw new Exception("未知参数类型！");
		  }
		  
	}
	
	
	/**
	 * 描述：增加终端参数
	 * @author lihaiyan
	 * @since Create on 2012-7-12
	 * @version Copyright (c) 2012 by e_trans.
	 */
	public void addTerminalParamSetting(Map params){
		try
		{  this.ibatisServices.queryForList(Map.class, "addTerminalParamSetting",params);
		} catch (Exception e)
		{
			e.printStackTrace();
		}
	}
	
	
	/**
	 * 描述：获取拍照指令
	* @author lihaiyan
	 * @since Create on 2012-10-15
     *@return List<Map<String, Object>> ,结果列表
	 * @version Copyright (c) 2012 by e_trans.
	 */
	public List<Map<String, Object>> findPhotoCommand(Map params){
		List<Map<String,Object>> rows=null;
		try
		{
			rows=this.ibatisServices.queryForList(Map.class,"getPhotoCommand", params);
		} catch (Exception e)
		{
			e.printStackTrace();
		}
		return rows;
	}
	
	
	public CommandRepository getCommandRepository()
	{
		return commandRepository;
	}

	public void setCommandRepository(CommandRepository commandRepository)
	{
		this.commandRepository = commandRepository;
	}
	
	
	
	
	
	
}
