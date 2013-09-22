package com.etrans.common.util;


import org.springframework.context.i18n.LocaleContextHolder;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.*;

public class DateUtil {
	
	 	private static final String TIME_PATTERN = "HH:mm";
	 	
	 	public static final String BUNDLE_KEY = "messages";
	    /**
	     * 文件分隔符
	     */
	    public static final String FILE_SEP = System.getProperty("file.separator");

	    /**
	     * 用户主目录
	     */
	    public static final String USER_HOME = System.getProperty("user.home") + FILE_SEP;
	    
	    private DateUtil() {
	    }

	    /**
	     * 返回日期模式，默认为 (MM/dd/yyyy)
	     *
	     * @return 用字符串来表示的日期模式
	     */
	    public static String getDatePattern() {
	        Locale locale = LocaleContextHolder.getLocale();
	        String defaultDatePattern;
	        try {
	            defaultDatePattern = ResourceBundle.getBundle(BUNDLE_KEY, locale).getString("date.format");
	        } catch (MissingResourceException mse) {
	            defaultDatePattern = "MM/dd/yyyy";
	        }
	        return defaultDatePattern;
	    }

	    /**
	     * 
	     * @return
	     */
	    public static String getDateTimePattern() {
	        return DateUtil.getDatePattern() + " HH:mm:ss.S";
	    }

	    /**
	     * 此方法试图转换一个 Oracle格式化后的日期，从 dd-MMM-yyyy 到 mm/dd/yyyy。
	     *
	     * @param aDate 从数据库中获取的日期
	     * @return 勇于用户界面的格式化后的日期串
	     */
	    public static String getDate(Date aDate) {
	        SimpleDateFormat df;
	        String returnValue = "";
	        if (aDate != null) {
	            df = new SimpleDateFormat(getDatePattern());
	            returnValue = df.format(aDate);
	        }
	        return (returnValue);
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
	     * 根据格式 MM/dd/yyyy HH:MM 返回当前时间
	     *
	     * @param theTime 当前时间
	     * @return 当前时间
	     * @throws Exception 
	     */
	    public static String getTimeNow(Date theTime) throws Exception {
	        return getDateTime(TIME_PATTERN, theTime);
	    }

	    /**
	     * 根据格式 MM/dd/yyyy HH:MM 返回当前日期
	     *
	     * @return 当前日期
	     * @throws java.text.ParseException 当字符串不符合指定的格式时
	     */
	    public static Calendar getToday() throws ParseException {
	        Date today = new Date();
	        SimpleDateFormat df = new SimpleDateFormat(getDatePattern());
	        String todayAsString = df.format(today);
	        Calendar cal = new GregorianCalendar();
	        cal.setTime(convertStringToDate(todayAsString));
	        return cal;
	    }

	    /**
	     * 此方法根据输入时的指定的格式解析字符串，返回一个日期/时间的字符串表示。
	     *
	     * @param aMask 日期模式
	     * @param aDate 日期对象
	     * @return 表示此日期的格式化的字符串
	     * @throws Exception 
	     * @see java.text.SimpleDateFormat
	     */
	    public static String getDateTime(String aMask, Date aDate) throws Exception {
	        SimpleDateFormat df = null;
	        String returnValue = "";
	        if (aDate == null) {
	            throw new Exception("aDate is null!");
	        } else {
	            df = new SimpleDateFormat(aMask);
	            returnValue = df.format(aDate);
	        }
	        return (returnValue);
	    }

	    /**
	     * 此方法根据系统属性中的 'dateFormat'，返回一个日期/时间的字符串表示。
	     *
	     * @param aDate 日期对象
	     * @return 表示此日期的格式化的字符串
	     * @throws Exception 
	     */
	    public static String convertDateToString(Date aDate) throws Exception {
	        return getDateTime(getDatePattern(), aDate);
	    }

	    /**
	     * 使用日期模式转换一个字符串到一个日期对象
	     *
	     * @param strDate 将要转换的日期 (MM/dd/yyyy)
	     * @return 日期对象
	     * @throws java.text.ParseException 当字符串不符合指定的格式时
	     */
	    public static Date convertStringToDate(String strDate)
	            throws ParseException {
	        Date aDate = null;
	        try {
	            aDate = convertStringToDate(getDatePattern(), strDate);
	        } catch (ParseException pe) {
	            pe.printStackTrace();
	            throw new ParseException(pe.getMessage(), pe.getErrorOffset());
	        }
	        return aDate;
	    }

		/**
		 * 获取当前时间,精确到秒
		 * 格式:获取指定格式时间
		 * yyyyMMdd
		 * @return _format:String
		 */
		public static String getCurrentTime(String format){
			SimpleDateFormat _format = new SimpleDateFormat(format);
			Date currentDate = new Date(System.currentTimeMillis());
			return _format.format(currentDate);
		}
		
		/**
		 * 日期比较，true:当天日期大于比较日期
		 *          false:当天日期小雨比较日期
		 * @param date
		 * @param format
		 * @return
		 * @throws ParseException
		 */
		public static boolean compareNowDate(String date,String format) throws ParseException{
			java.util.Date nowdate=new java.util.Date(); 
			Date d = convertStringToDate(format,date);
			boolean flag = d.before(nowdate);
			return flag;
		}
		
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
		
		public static void main(String[] args){
//			try {
				String flag="";
				try {
					flag = DateUtil.getCurrentTime("yyyyMMddhhmmss");
				} catch (Exception e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
				System.out.println(flag);
//			} catch (ParseException e) {
//				// TODO Auto-generated catch block
//				e.printStackTrace();
//			}
		}
}
