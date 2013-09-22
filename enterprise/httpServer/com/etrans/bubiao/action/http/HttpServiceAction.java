package com.etrans.bubiao.action.http;

import java.util.Map;

import org.apache.struts2.convention.annotation.Namespace;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;

import com.etrans.bubiao.action.BaseAction;
import com.etrans.bubiao.entities.ParamBean;
import com.etrans.bubiao.util.JSONUtil;

/**
 * http接口访问类
 */
@SuppressWarnings("serial")
@Controller("httpServiceAction")
@Scope("prototype")
@Namespace("/httpService")
public class HttpServiceAction extends BaseAction{
	
	//json参数
	protected String jsonParam;
	
	/**
	 * 得到json参数
	 * @param jsonParam
	 */
	@SuppressWarnings("unchecked")
	public Map<String,Object> getJsonParam()
	{
		return JSONUtil.fromJson(this.jsonParam , Map.class);
	}
	/**
	 * json参数
	 * @param jsonParam
	 */
	public void setJsonParam(String jsonParam)
	{
		this.jsonParam = jsonParam;
	}
	
	/**
	 * get ParamBean
	 * 
	 * @return ParamBean
	 */
	public ParamBean getParamBean(){
		ParamBean paramBean = JSONUtil.fromJson(this.jsonParam,ParamBean.class);
		return paramBean;
	}
	
//	/**
//	 * 测试返回值
//	 *测试路径：http://localhost:8080/enterprise/httpService/test2.action
//	 */
//	@Action(value = "test2")
//	public void test2() {
//		Result result=new Result();
//		
//		System.out.println("---------------------来了");
//		
//		result.setCode(0);
//		
//		this.renderJSON(result);
//	}
//	
//	/**
//	 * 测试传值
//	 *测试路径：http://localhost:8080/enterprise/httpService/test.action?jsonParam={"name":"123","password":"C33367701511B4F6020EC61DED352059","vehicleNoList":["1","2"]}
//	 */
//	@Action(value = "test")
//	public void test() {
//		Result result=new Result();
//		System.out.println("---------------------来了");
//		
//		//map去接收查询条件
////		 Map<String,Object> mapParams=this.getJsonParam();
////		 System.out.println("用户名："+mapParams.get("name"));
////		 System.out.println("密码："+mapParams.get("password"));
//		 
//		//对象去接收查询条件
//		ParamBean paramBean = JSONUtil.fromJson(this.jsonParam,ParamBean.class);
//		System.out.println("用户名："+paramBean.getName());
//		System.out.println("密码："+paramBean.getPassword());
//		for (int i = 0; i < paramBean.getVehicleNoList().size(); i++) {
//			System.out.println(paramBean.getVehicleNoList().get(i));
//		}
//		
////		System.out.println("密码："+paramBean.getPassword());
//		 
//		result.setCode(0);
//		
//		
//		this.renderJSON(result);
//	}
//	
//	
//	
//	
//	
//	
//	
//	
//	
//	
//	
//	
//	
//	
//	
//	
//	
//	
//	
//	
//	
//	
}
