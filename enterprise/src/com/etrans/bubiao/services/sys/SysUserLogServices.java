package com.etrans.bubiao.services.sys;

import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.etrans.bubiao.services.IbatisServices;

/**
 * 
 * @author yangzhen
 * @version 1.0
 * @brief
 */
@Service
public class SysUserLogServices {
	@Autowired
	private IbatisServices ibatisServices;

	public IbatisServices getIbatisServices() {
		return ibatisServices;
	}

	public void setIbatisServices(IbatisServices ibatisServices) {
		this.ibatisServices = ibatisServices;
	}
	
	public void insertLog(Map<String,Object> params){
		try{
			ibatisServices.insertIbatisObject("insertLogSQL", params);
		}catch(Exception e){
			e.printStackTrace();
		}
	}

}
