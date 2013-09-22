package com.etrans.bubiao.action.sys;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.InputStream;
import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;
import java.util.HashMap;

import org.apache.struts2.convention.annotation.Action;
import org.apache.struts2.convention.annotation.Namespace;
import org.apache.struts2.convention.annotation.Result;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;

import com.etrans.bubiao.action.BaseAction;
import com.etrans.bubiao.services.IbatisServices;
import com.etrans.common.util.DateUtil;

/** 
 * 下载图片
 * 
 * @author Pomelo(柚子.)  
 * @version 1.0
 * @since 创建时间：2013-4-26 下午2:02:20 
 */
@Controller
@Scope("prototype")
@Namespace("/sys/photo")
public class PhotoAction extends BaseAction {
	
	private static final long serialVersionUID = 1L;
	private String downFile;
	private String downFilePath;
	private InputStream inputStream;
	private String downFileName;
	public String getDownFileName() {
		try {
			return new String(downFileName.getBytes(), "ISO8859-1");
		} catch (UnsupportedEncodingException e) {
			e.printStackTrace();
		}
		return "picture_";
	}
	public void setDownFileName(String downFileName) {
		this.downFileName = downFileName;
	}

	@Autowired
	private IbatisServices ibatisServices;
	
	public String getDownFilePath() {
		return downFilePath;
	}
	public void setDownFilePath(String downFilePath) {
		this.downFilePath = downFilePath;
	}
	public String getDownFile() {
		return downFile;
	}
	public void setDownFile(String downFile) {
		this.downFile = downFile;
	}
	
	public InputStream getInputStream() {
		try {
			inputStream = new FileInputStream(this.getHttpServletRequest()
					.getSession().getServletContext().getRealPath("/")
					+ downFilePath + downFile);
		} catch (FileNotFoundException e) {
			log.error("下载图片异常：" + e.getMessage());
		}
		return inputStream;
	}

	/**
	 * 获取车辆组树形结构
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	@Action(value = "downPhoto", results = @Result(
			type = "stream", 
			params = {
						"contentType", "application/octet-stream;charset=UTF-8", 
						"inputName", "inputStream", 
						"bufferSize", "1024", 
						"contentDisposition", "attachment;filename=${downFileName}.jpg" 
					}
			)
	)
	public String downPhoto(){
		String pathFlag = getParameter("path");
		if(pathFlag.equals("0")){
			setDownFilePath("/command/upload/");
		}else{
			setDownFilePath("/command/upload/history/"+getParameter("vehicleId")+"/");
		}
		HashMap<String,String> map = new HashMap<String,String>();
		map.put("id", getParameter("vehicleId"));
		map = (HashMap)ibatisServices.queryForObject(HashMap.class, "getVehicleById_forImage", map);
		setDownFile(getParameter("imageName"));
		if(map!=null){
			setDownFileName(map.get("registrationNO").toString()+"_"+DateUtil.getCurrentTime("yyyyMMddhhmmss"));
		}else{
			setDownFileName(getParameter("imageName"));
		}
		return SUCCESS;
	}
}

