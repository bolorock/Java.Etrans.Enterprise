/**
 * 获取分页查询时开始rowNumber和结束rowNumber 工具类
 */
package com.etrans.common.util.web;

/**
 * @author wlz
 * 2012-2-24
 */
public class RowNumUtil {

	/**
	 * 获取分页查询时开始rowNumber
	 * @param fromPage
	 * @param pageSize
	 * @return
	 */
	public static Integer getFromRowNum(String fromPage,String pageSize){
		
		Integer fromRow = 0;
		
		int fromPageNum = Integer.parseInt(fromPage);
		int pageSizeNum = Integer.parseInt(pageSize);
		if(fromPageNum > 0 && pageSizeNum > 0){
			fromRow = (fromPageNum - 1) * pageSizeNum + 1;
		}
		
		return fromRow;
	}
	
	/**
	 * 获取分页查询时结束rowNumber
	 * @param toPage
	 * @param pageSize
	 * @return
	 */
	public static Integer getToRowNum(String toPage,String pageSize){
		Integer toRow = 0;
		
		int toPageNum = Integer.parseInt(toPage);
		int pageSizeNum = Integer.parseInt(pageSize);
		
		if(toPageNum > 0 && pageSizeNum > 0){
			toRow = toPageNum * pageSizeNum;
		}
		
		return toRow;
	}
	
}
