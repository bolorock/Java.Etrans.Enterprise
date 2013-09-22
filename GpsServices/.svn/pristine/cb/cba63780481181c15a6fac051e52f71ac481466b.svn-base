package com.etrans.common.util;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

/** 
 * 日期工具类
 * 
 * @author Pomelo(柚子.)  
 * @version 1.0
 * @since 创建时间：2013-7-3 下午3:40:14 
 */
public class DateUtil {
	
	/**
	 * 比较第一个日期是否大于第二个日期
	 * @param firstDateString
	 * @param secondDateString
	 * @param format
	 * @return
	 * @throws ParseException
	 */
	public static boolean compareTwoDate(String firstDateString,String secondDateString,String format) throws ParseException{
		Date firstDate = convertStringToDate(format,firstDateString);
		Date secondDate=convertStringToDate(format,secondDateString);
		boolean flag=firstDate.after(secondDate);
		return flag;
	}
	
    /**
     * 此方法根据输入时的指定的格式解析字符串，返回一个日期对象。
     *
     * @param aMask   日期格式
     * @param strDate 日期的字符串表示
     * @return 一个转换后的日期对象
     * @throws java.text.ParseException 当字符串不符合指定的格式时
     * @see java.text.SimpleDateFormat
     */
    public static Date convertStringToDate(String aMask, String strDate)
            throws ParseException {
        SimpleDateFormat df;
        Date date;
        df = new SimpleDateFormat(aMask);
        try {
            date = df.parse(strDate);
        } catch (ParseException pe) {
            throw new ParseException(pe.getMessage(), pe.getErrorOffset());
        }
        return (date);
    }

    /**
     * 
     * 
     * @param str
     * @return
     * @throws Exception
     */
	public static String formatStr2Date(String str) throws Exception{
		StringBuffer date = new StringBuffer("");
		date.append(str.substring(0,4)+"-")
			.append(str.substring(4,6)+"-")
			.append(str.substring(6,8)+" ")
			.append(str.substring(8,10)+":")
			.append(str.substring(10,12)+":")
			.append(str.substring(12,14));
		return date.toString();
	}
}

