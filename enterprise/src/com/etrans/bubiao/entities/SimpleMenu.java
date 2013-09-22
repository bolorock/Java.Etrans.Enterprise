/**
 * SimpleMenu.java
 * Create on 2012-3-7下午03:15:58
 * Copyright (c) 2012 by e_trans.
 */
package com.etrans.bubiao.entities;

import java.util.List;

/**菜单实体
 * @author Ivan
 * @version 1.0
 */
public class SimpleMenu
{

 
 private String id;
 
 private String menuName;
 
 private boolean checked;
 
 private List<SimpleMenu> childs;

 public String getId()
 {
  return id;
 }

 public void setId(String id)
 {
  this.id = id;
 }

 public String getMenuName()
 {
  return menuName;
 }

 public void setMenuName(String menuName)
 {
  this.menuName = menuName;
 }

 public List<SimpleMenu> getChilds()
 {
  return childs;
 }

 public void setChilds(List<SimpleMenu> childs)
 {
  this.childs = childs;
 }

 
 public boolean isChecked()
 {
  return checked;
 }

 public void setChecked(boolean checked)
 {
  this.checked = checked;
 }
 


 
 
}
