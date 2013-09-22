package com.etrans.bubiao.action;

import java.util.List;

import org.apache.struts2.convention.annotation.Action;
import org.apache.struts2.convention.annotation.Namespace;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;

import com.etrans.bubiao.sys.Constants;
import com.etrans.common.util.AutoCompleteUtils;
import com.etrans.common.util.web.Struts2Utils;

/************************************************************
 * name：文本框自动补全Action
 * 创建者：lujunyong
 *日期：2013-4-26
 ************************************************************/
@SuppressWarnings("serial")
@Controller
@Scope("prototype")
@Namespace("/autoComplete")
public class AutoCompleteAction extends BaseAction{

	
	
	/**
	 * 文本框自动补全
	 */
	@SuppressWarnings("unchecked")
	@Action(value = "initAutoComplete")
	public void initAutoComplete() {
		try {
			/**获取输入内容和匹配数据源list*/
			String prefix = getParameter("names");
			List<String> vehicleRegistrationNOList = (List<String>)Struts2Utils.getSessionAttribute(Constants.VEHICLEREGISTRATIONNO);
			
			/**是否匹配**/
			if(null!=vehicleRegistrationNOList){
				AutoCompleteUtils autoCompleteUtils = AutoCompleteUtils.getInstance(vehicleRegistrationNOList);
				List<String> matching = autoCompleteUtils.findNames(prefix);
				
				/**返回匹配结果**/
				this.renderJSON(matching);
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	
}
