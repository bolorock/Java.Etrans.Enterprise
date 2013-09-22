package com.etrans.bubiao.entities;

import java.util.HashMap;
import java.util.List;

public class PageBean
{
    private Integer page;
	
	private List<HashMap<String, String>> rows;
	
    private Long total;

	public Integer getPage()
	{
		return page;
	}

	public void setPage(Integer page)
	{
		this.page = page;
	}

	public List<HashMap<String, String>> getRows()
	{
		return rows;
	}

	public void setRows(List<HashMap<String, String>> rows)
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
