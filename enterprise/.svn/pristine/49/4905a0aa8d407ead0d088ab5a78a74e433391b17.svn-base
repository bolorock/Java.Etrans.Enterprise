package com.etrans.common.util;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;


public class PageContorlUtil{
	private final static Log log = LogFactory.getLog(PageContorlUtil.class.getName());

	// 每页显示的数据条数
	private int pageSize = 10;

	// 当前页面
	private int currentPage = 1;

	// 总页数
	private int totalPage = 1;

	// 总数据条数
	private int totalData = 0;


	public PageContorlUtil(int pageSize,int currentPage,int totalData,int totalPage){
		this.pageSize = pageSize;
		this.currentPage = currentPage;
		this.totalData = totalData;
		this.totalPage = totalPage;
	}

	/**
	 * 分页的控制方法(无自定一页记录数)
	 *
	 * @param request
	 * @param response
	 */
	public String getPageControl() {
		StringBuffer out = new StringBuffer();
		
		if(totalData==0){
			out.append("<div class='pages_list'>");
			out.append("<div class='pages' >");
			out.append("<span class='disabled'> &lt;上一页 </span>");
			out.append("<span class='current'>1</span>");
			out.append("<span class='disabled'> 下一页&gt; </span>");
			out.append("&nbsp;&nbsp;&nbsp;&nbsp;转到第");
			out.append("<select  class=\"ser_selpage\" id=\"selectPage\" name=\"selectPage\" onChange=\"gotoPage($('#selectPage').val())\">");
			out.append("<option>1</option>");
			out.append("</select>页");
			out.append("<span>&nbsp;&nbsp;每页" + pageSize + "个，共&nbsp;1&nbsp;页</span>");
			out.append("</div>");
			out.append("</div>");
		}else{
			out.append("<div class='pages_list'>");
			out.append("<div class='pages'>");
			if (currentPage == 1 || totalPage ==1){
				out.append("<span class='disabled'> &lt;上一页 </span>");
			}else{
				out.append("<a href=\"javascript:(gotoPage(" + (currentPage - 1) + "))\">&lt;上一页</a>");
			}
			
			for(int i=1;i<=totalPage;i++){
				if(i==currentPage){
					out.append("<span class='current'>" +i+ "</span>");
				}else{
					out.append("<a href=\"javascript:(gotoPage(" + i + "))\">"+ i +"</a>");
				}
			}
			
			if (currentPage==totalPage || totalPage==1){
				out.append("<span class='disabled'>下一页&gt; </span>");
			}else{
				out.append("<a href=\"javascript:(gotoPage(" + (currentPage + 1) + "))\">下一页&gt;</a>");
			}
			if (totalPage > 1) {
				out.append("&nbsp;&nbsp;&nbsp;&nbsp;转到第");
				out.append("<select  class=\"ser_selpage\" id=\"selectPage\" name=\"selectPage\" onChange=\"gotoPage($('#selectPage').val())\">");
				for (int i = 1; i <= totalPage; i++) {
					out.append("<option value=" + i);
					if (i == currentPage)
						out.append(" selected");
					out.append(">" + i + "</option>");
				}
				out.append("</select>");
				out.append("页");
			}
			out.append("&nbsp;&nbsp;每页" + pageSize + "个，共" + totalPage + "页");
			out.append("</div>");
			out.append("</div>");
			
		}

		return out.toString();
	}


	/**
	 * @return the currentPage
	 */
	public int getCurrentPage() {
		return currentPage;
	}


	/**
	 * @param currentPage the currentPage to set
	 */
	public void setCurrentPage(int currentPage) {
		this.currentPage = currentPage;
	}


	/**
	 * @return the totalPage
	 */
	public int getTotalPage() {
		return totalPage;
	}


	/**
	 * @param totalPage the totalPage to set
	 */
	public void setTotalPage(int totalPage) {
		this.totalPage = totalPage;
	}


	/**
	 * @return the totalData
	 */
	public int getTotalData() {
		return totalData;
	}


	/**
	 * @param totalData the totalData to set
	 */
	public void setTotalData(int totalData) {
		this.totalData = totalData;
	}

	public int getPageSize() {
		return pageSize;
	}

	public void setPageSize(int pageSize) {
		this.pageSize = pageSize;
	}



}