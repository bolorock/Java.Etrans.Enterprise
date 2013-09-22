/**
 * Chart.java
 * Create on 2011-4-8下午04:49:37
 * Copyright (c) 2011 by e_trans.
 */
package com.etrans.common.util.chart;

import org.apache.struts2.json.annotations.JSON;


/**
 * @author Ivan
 * @version 1.0
 * @brief
 */
public class Chart {

	
	
	private String caption;
	private String subcaption;
	private String xaxisname;
	private String yaxisname;
	private String numberprefix;
	
	
	
	
	
	
	
	
	/**
	 * 
	 */
	public Chart() {
		
	}
	
	
	/**
	 * @param caption
	 * @param subcaption
	 * @param xaxisname
	 * @param yaxisname
	 * @param numberprefix
	 */
	public Chart(String caption, String subcaption, String xaxisname,
			String yaxisname, String numberprefix) {
		this.caption = caption;
		this.subcaption = subcaption;
		this.xaxisname = xaxisname;
		this.yaxisname = yaxisname;
		this.numberprefix = numberprefix;
	}
	public String getCaption() {
		return caption;
	}
	public void setCaption(String caption) {
		this.caption = caption;
	}
	@JSON(serialize=false)
	public String getSubcaption() {
		return subcaption;
	}
	public void setSubcaption(String subcaption) {
		this.subcaption = subcaption;
	}
	public String getXaxisname() {
		return xaxisname;
	}
	public void setXaxisname(String xaxisname) {
		this.xaxisname = xaxisname;
	}
	public String getYaxisname() {
		return yaxisname;
	}
	public void setYaxisname(String yaxisname) {
		this.yaxisname = yaxisname;
	}
	@JSON(serialize=false)
	public String getNumberprefix() {
		return numberprefix;
	}
	
	public void setNumberprefix(String numberprefix) {
		this.numberprefix = numberprefix;
	}
	
	
	
	
	
}
