/**    
 * name  ChartData.java 
 * Create on 2011-4-11
 * Copyright (c) 2011 by e_trans. 
 */
package com.etrans.common.util.chart;

import java.util.List;

import org.apache.struts2.json.JSONException;
import org.apache.struts2.json.JSONUtil;

/**
 *@author: GuoHailin
 *version: 1.0
 *@brief :
 */
public class ChartData {
private 	ChartBean chartBean;
//图标 表头 ，X， Y 
public static Chart chartSet(String title,String X,String Y){
	Chart chart = new Chart();
	chart.setCaption(title);
	chart.setXaxisname(X);
	chart.setYaxisname(Y);
	return chart;
}
//json字符串
public String jsonData(Chart chart,List<Data> dataList){
	String jsonString = "";
	ChartBean chartBean = new ChartBean();
	chartBean.setChart(chart);
	chartBean.setData(dataList);
try {
	  jsonString=JSONUtil.serialize(chartBean);
} catch (JSONException e) {
	// TODO Auto-generated catch block
	e.printStackTrace();
}
       return jsonString;
}
}




 
 
