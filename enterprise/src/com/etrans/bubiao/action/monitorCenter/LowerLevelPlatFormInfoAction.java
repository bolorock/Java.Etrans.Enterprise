package com.etrans.bubiao.action.monitorCenter;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Queue;

import org.apache.commons.lang.StringUtils;
import org.apache.struts2.convention.annotation.Action;
import org.apache.struts2.convention.annotation.Namespace;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;

import com.etrans.bubiao.action.BaseAction;
import com.etrans.bubiao.repository.CommandRepository;
import com.etrans.bubiao.sys.Constants;
import com.etrans.common.util.web.Struts2Utils;

/**
 * @author lihaiyan
 * @version 1.0
 * @brief
 */

@Controller
@Scope("prototype")
@Namespace("/monitorCenter")
public class LowerLevelPlatFormInfoAction extends BaseAction
{

	@Autowired
	private CommandRepository commandRepository;

	/**
	 * 描述：判断是否有下级平台信息
	 * 
	 * @author lihaiyan
	 * @since Create on 2012-6-5
	 * @version Copyright (c) 2012 by e_trans.
	 */
	@Action(value = "isLowerPlatFormInfo")
	public void isLowerPlatFormInfo()
	{
		Queue<String> queue = commandRepository.getLowerFlatQueue();
		if (queue == null || queue.size() <= 0)
		{
			this.renderText("false");
		} else
		{
			this.renderText("true");
		}
	}

	/**
	 * 描述：获取下级平台信息
	 * 
	 * @author lihaiyan
	 * @since Create on 2012-6-5
	 * @version Copyright (c) 2012 by e_trans.
	 */
	@Action(value = "getLowerPlatFormInfo")
	public void getLowerPlatFormInfo()
	{
		Queue<String> queue = commandRepository.getLowerFlatQueue();
		if (queue == null)
		{
			this.renderJSON("");
		} else
		{
			String[] strings = queue.toArray(new String[]
			{});
			List<String> lst = null;
			Map<String, String> vehicleMap=(HashMap<String, String>)Struts2Utils.getSessionAttribute(Constants.USER_VEHICLE);
			if (null != strings)
			{
				lst = new ArrayList<String>();

				for (String str : strings)
				{
					String[] strArray=str.split("\\,");
					String vehicleString=vehicleMap.get(strArray[0].trim());
					if(StringUtils.isNotEmpty(vehicleString)){
						String[] vehicleValue=vehicleString.split("\\|");//车牌号|车牌颜色|所属行业|所属业户
						String regNoString=vehicleValue[0];
					    str=str.replaceFirst(strArray[0], regNoString);
					}
					lst.add(str);
				}
			}
			this.renderJSON(lst);
		}
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
