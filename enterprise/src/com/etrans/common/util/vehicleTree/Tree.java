/**
 * Tree.java
 * Create on 2011-3-24下午04:50:03
 * Copyright (c) 2011 by e_trans.
 */
package com.etrans.common.util.vehicleTree;

import java.util.ArrayList;
import java.util.List;


/**
 * @author Ivan
 * @version 1.0
 * @brief 用来构造树形菜单
 */


public class Tree {

	
	private String id;
	private String text;
	private boolean checked;
	private String state;
	private String iconCls;
	private List<Tree> children= new ArrayList<Tree>();
	
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getText() {
		return text;
	}
	public void setText(String text) {
		this.text = text;
	}

	
	public boolean getChecked()
	{
		return checked;
	}
	public void setChecked(boolean checked)
	{
		this.checked = checked;
	}
	public String getState()
	{
		return state;
	}
	
	public void setState(String state)
	{
		this.state = state;
	}


	/**
	 * @return the iconCls
	 */
	public String getIconCls()
	{
		return iconCls;
	}
	
	/**
	 * @param iconCls the iconCls to set
	 */
	public void setIconCls(String iconCls)
	{
		this.iconCls = iconCls;
	}
	
	public List<Tree> getChildren()
	{
		return children;
	}
	
	
	public void setChildren(List<Tree> children)
	{
		this.children = children;
	}
	
}
