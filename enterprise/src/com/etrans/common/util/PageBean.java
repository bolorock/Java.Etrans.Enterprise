package com.etrans.common.util;

import java.util.HashMap;
import java.util.List;

/**
 * 分页实体
 * @author Ivan
 * @version 1.0
 */
public class PageBean
{
   /**
    * 当前页
    */
    private Integer page;
	
    /**
     * 数据集
     */
	  private List<HashMap<String, Object>> rows;
	
	  /**
	   * 总页数
	   */
    private Long total;

    
    
  	public Integer getPage()
  	{
  		return page;
  	}
  
  	public void setPage(Integer page)
  	{
  		this.page = page;
  	}
  
  	public List<HashMap<String, Object>> getRows()
  	{
  		return rows;
  	}
  
  	public void setRows(List<HashMap<String, Object>> rows)
  	{
  		this.rows = rows;
  	}
  
  	public Long getTotal()
  	{
  		return total;
  	}
  
  	public void setTotal(Long total)
  	{
  		this.total = total;
  	}

    
    
}
