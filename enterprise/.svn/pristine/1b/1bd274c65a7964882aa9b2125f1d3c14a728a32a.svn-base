/**
 * Data.java
 * Create on 2011-4-8下午04:52:45
 * Copyright (c) 2011 by e_trans.
 */
package com.etrans.common.util.chart;

import com.googlecode.jsonplugin.annotations.JSON;

/**
 * @author Ivan
 * @version 1.0
 * @brief
 */
public class Data {
	private String name;
	private String value;
	private String link="";
	
	
	//private String color;
	
	
	
	
	
	/**
	 * 
	 */
	public Data() {
	}
	
	
	public Data(String name,String value) {
		 
		this.name = name;
		this.value = value;
	}
	
	public Data(String name,String value,String link){
		this.name = name;
		this.value = value;
		this.link=link;
	}

	
	
	/**
	 * @param name
	 * @param value
	 * @param color
	 */
	 




	 
	@JSON(serialize=false)
	public String getValue() {
		return value;
	}
	public void setValue(String value) {
		this.value = value;
	}

	@JSON(serialize=false)
	public String getName() {
		return name;
	}


	public void setName(String name) {
		this.name = name;
	}


	public String getLink() {
		return link;
	}


	public void setLink(String link) {
		this.link = link;
	}
 	
}
