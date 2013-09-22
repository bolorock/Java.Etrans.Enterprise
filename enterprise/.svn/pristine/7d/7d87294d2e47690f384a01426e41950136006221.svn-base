package com.etrans.bubiao.action.http.mobile;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.commons.lang.StringUtils;
import org.apache.struts2.convention.annotation.Action;
import org.apache.struts2.convention.annotation.Namespace;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;

import com.etrans.bubiao.action.http.Config;
import com.etrans.bubiao.action.http.HttpServiceAction;
import com.etrans.bubiao.action.http.TicketManager;
import com.etrans.bubiao.entities.HttpResult;
import com.etrans.bubiao.entities.ParamBean;
import com.etrans.common.util.PropertyReader;
import com.etrans.common.util.Tools;
import com.etrans.common.util.json.JSONUtil;

@SuppressWarnings("serial")
@Controller("eTGetVersionAction")
@Scope("prototype")
@Namespace("/httpMobile")
public class ETGetVersionAction extends HttpServiceAction {

	/**
	 * http://localhost:8080/enterprise/httpMobile/ETGetVersion.action 
	 * 获取版本信息
	 * 
	 * @author hgq
	 */
	@Action(value = "ETGetVersion")
	public void ETGetVersion() throws Exception {
		// 返回结果
		HttpResult result = new HttpResult();
		try {
			result.setCode(Config.SUCCESS);
			// 步骤五：组装返回对象
			String config="/mobileAppVersion.properties";
			String version = PropertyReader.getValue(config, "version");
			String url = PropertyReader.getValue(config, "url");
			Map<String, Object> map = new HashMap<String, Object>();
			map.put("version", version);
			map.put("url", url);

			String str = JSONUtil.toJson(map);
			result.setData(str);
		} catch (Exception e) {
			result.setCode(Config.OTHER_ERROR);
			log.error("[" + Tools.formatDate(new Date()) + "]---->", e);
		}

		this.renderJSON(result);
	}

}
