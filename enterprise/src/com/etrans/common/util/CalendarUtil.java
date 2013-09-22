package com.etrans.common.util;


import java.text.DateFormat;
import java.text.ParseException;
import java.text.ParsePosition;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.GregorianCalendar;
import java.util.TimeZone;

	/**
	 * 常用日历操作辅助类
	 */
	public class CalendarUtil {

		private int weeks = 0;// 用来全局控制 上一周，本周，下一周的周数变化
		private int MaxDate; // 一月最大天数
		private int MaxYear; // 一年最大天数
		
		private static TimeZone timeZoneChina = TimeZone.getTimeZone("Asia/Shanghai");// 获取中国的时区 
		
		public static SimpleDateFormat getSimpleDateFormat(String formatStr){
			SimpleDateFormat sdf = new SimpleDateFormat(formatStr);
			sdf.setTimeZone(timeZoneChina);
			return sdf;
		}
		
		/**
		 * 格式化日期
		 * 
		 * @return
		 */
		public static long getCurrentTimeMillis(java.util.Date date) throws Exception {
			Calendar calendar = Calendar.getInstance();
			calendar.setTime(date);  
			calendar.setTimeZone(timeZoneChina);
			return calendar.getTimeInMillis();
		}

		/**
		 * 测试
		 * 
		 * @param args
		 */
		public static void main(String[] args) {
			try {
			CalendarUtil tt = new CalendarUtil();
			//返回前一天的时间范围
			
			
			System.out.println("取系统当前时间："+CalendarUtil.Now());
			
			System.out.println("------------------返回前一天的时间范围");
			String startDay=CalendarUtil.getBeforeday()+" 00:00:00";
			String endDay=CalendarUtil.getBeforeday()+" 23:59:59";
			Date startTime=CalendarUtil.stringToDate(startDay);
			Date endTime=CalendarUtil.stringToDate(endDay);
			System.out.println("前一天的时间开始时间:" + startDay);
			System.out.println("前一天的时间结束时间:" + endDay);
			System.out.println("前一天的时间范围:" + startTime.toString());
			System.out.println("前一天的时间范围:" + endTime.toString());
			System.out.println();
			
			//判断今天是否星期一
			System.out.println("------------------判断今天是否星期一");
			boolean flag=tt.checkTodayMonday();
			System.out.println("判断今天是否星期一："+flag);
			System.out.println();
			
			//返回上周星期一 到 星期天的时间范围
			System.out.println("------------------返回上周星期一 到 星期天的时间范围");
			String PreviousWeekday=tt.getPreviousWeekday()+" 00:00:00";
			String PreviousWeekSunday=tt.getPreviousWeekSunday()+" 23:59:59";
			String whereTimes=CalendarUtil.getYears()+CalendarUtil.getWeek(new Date());
			
			int whereTime=Integer.parseInt(whereTimes);
			int wherePeriod=CalendarUtil.getWeek(new Date());
			Date startTime1=CalendarUtil.stringToDate(PreviousWeekday);
			Date endTime1=CalendarUtil.stringToDate(PreviousWeekSunday);
			System.out.println("上周星期一:" + PreviousWeekday);
			System.out.println("上周星期天:" + PreviousWeekSunday);
			System.out.println("whereTimes-:" + whereTimes);
			System.out.println("whereTime-:" + whereTime);
			System.out.println("wherePeriod-:" + wherePeriod);
			System.out.println("上周星期一:" + startTime1);
			System.out.println("上周星期天:" + endTime1);
			System.out.println();
			
			//判断今天是否1号
			System.out.println("------------------判断今天是否1号");
			boolean flag1=false;
			String day=CalendarUtil.getDay();
			if("01".equals(day)){
	        	flag1=true;
	        }else{
	        	flag1=false;
	        }
			System.out.println("判断今天多少号:"+day);
			System.out.println("判断今天是否1号:"+flag1);
			System.out.println();
			
			//返回上个月第一天 到 最后一天的时间范围
			System.out.println("------------------返回上个月第一天 到 最后一天的时间范围");
			String PreviousMonthFirst=tt.getPreviousMonthFirst()+" 00:00:00";
			String PreviousMonthEnd=tt.getPreviousMonthEnd()+" 23:59:59";
			Date startTime2=CalendarUtil.stringToDate(PreviousMonthFirst);
			Date endTime2=CalendarUtil.stringToDate(PreviousMonthEnd);
			String times=CalendarUtil.getYear()+"0"+CalendarUtil.getBeforeMonth();
			int wherePeriod1=CalendarUtil.getBeforeMonth();
			int whereTime2=Integer.parseInt(times.trim());
			System.out.println("上个月第一天:" + PreviousMonthFirst);
			System.out.println("上个月 最后一天:" + PreviousMonthEnd);
			System.out.println("startTime2:" + startTime2);
			System.out.println("endTime2:" + endTime2);
			System.out.println("wherePeriod1:" + wherePeriod1);
			System.out.println("whereTime2:" + whereTime2);
			System.out.println();
			
			
			//判断今天是否其中的某一天 4月1号或7月1号或10月1号或1月1号
			System.out.println("------------------判断今天是否其中的某一天 4月1号或7月1号或10月1号或1月1号");
			boolean flag2=false;
			String day2=tt.getNowTime("MM-dd");
			if("01-01".equals(day)){
	        	flag=true;
	        }else if("04-01".equals(day)){
	        	flag=true;
	        }else if("07-01".equals(day)){
	        	flag=true;
	        }else if("10-01".equals(day)){
	        	flag=true;
	        }else{
	        	flag=false;
	        }
			System.out.println("今天多少号:" +day2);
			System.out.println("判断今天是否其中的某一天 4月1号或7月1号或10月1号或1月1号:" + flag2);
			System.out.println();
			
			//返回上季度第一天 到最后一天的时间范围
			System.out.println("------------------返回上季度第一天 到 最后一天的时间范围");
			Date startTime3=CalendarUtil.getCurrentQuarterStartTime();
			Date endTime3=CalendarUtil.getCurrentQuarterEndTime();
			String month=CalendarUtil.getMonths(startTime);
			String year=CalendarUtil.getYears(startTime);
			int wherePeriod3=Integer.parseInt(month);
			int whereTime3=Integer.parseInt(year);
			System.out.println("上季度第一天:" + dateToString(startTime3));
			System.out.println("上季度最后一天:" + dateToString(endTime3));
			
			
			Date startTime6=CalendarUtil.getCurrentQuarterStartTimes();
			Date endTime6=CalendarUtil.getCurrentQuarterEndTimes();
			
			
			System.out.println("本季度第一天:" + dateToString(startTime6));
			System.out.println("本季度最后一天:" + dateToString(endTime6));
			System.out.println("month:" + month);
			System.out.println("year:" + year);
			System.out.println("wherePeriod3:" + wherePeriod3);
			System.out.println("whereTime3:" + whereTime3);
			System.out.println();
			
			//判断今天是否1月1号
			System.out.println("------------------判断今天是否1月1号");
			boolean flag3=false;
			String day3=tt.getNowTime("MM-dd");
			if("01-01".equals(day)){
	        	flag=true;
	        }else{
	        	flag=false;
	        }
			System.out.println("今天多少号："+day3);
			System.out.println("判断今天是否1月1号："+flag3);
			System.out.println();
			
			//返回上一年第一天 到 最后一天的时间范围
			System.out.println("------------------返回上一年第一天 到 最后一天的时间范围");
			String PreviousYearFirst=tt.getPreviousYearFirst()+" 00:00:00";
			String PreviousYearEnd=tt.getPreviousYearEnd()+" 23:59:59";
			Date startTime4=CalendarUtil.stringToDate(PreviousYearFirst);
			Date endTime4=CalendarUtil.stringToDate(PreviousYearEnd);
			int wherePeriod4=(CalendarUtil.getYear())-1;
			int whereTime4=(CalendarUtil.getYear())-1;
			System.out.println("上一年第一天："+PreviousYearFirst);
			System.out.println("上一年最后一天："+PreviousYearEnd);
			System.out.println("startTime4："+startTime4);
			System.out.println("endTime4："+endTime4);
			System.out.println("wherePeriod4："+wherePeriod4);
			System.out.println("whereTime4："+whereTime4);
			System.out.println();
			
			
			//返回今年
			System.out.println("------------------返回今年");
			int whereYear=CalendarUtil.getYear();
			System.out.println("返回今年："+whereYear);
			System.out.println();
			
			
			//返回上一年
			System.out.println("------------------返回上一年");
			int whereYear2=(CalendarUtil.getYear())-1;
			System.out.println("返回上一年:"+whereYear2);
			System.out.println();
	
			
			
			
			System.out.println("获取当天日期:" + tt.getNowTime("yyyy-MM-dd"));
			System.out.println("前一天开始时间:" + CalendarUtil.getBeforeday()+" 00:00:00");
			System.out.println("前一天结束时间:" + CalendarUtil.getBeforeday()+" 23:59:59");
			System.out.println("上周星期一时间:" + tt.getPreviousWeekday()+" 00:00:00");
			System.out.println("上周星期日时间:" + tt.getPreviousWeekSunday()+" 23:59:59");
			System.out.println("whereTime：" + CalendarUtil.getYears()+CalendarUtil.getWeek(new Date()));
			System.out.println("wherePeriod：" + CalendarUtil.getWeek(new Date()));
			
			} catch (Exception e) {
				e.printStackTrace();
			}
		}

		/**
		 * 获得当前年份
		 * 
		 * @return
		 */
		public static int getYear() {
			return Calendar.getInstance().get(Calendar.YEAR);
		}

		/**
		 * 获得当前月份
		 * 
		 * @return
		 */
		public static int getMonth() {
			return Calendar.getInstance().get(Calendar.MONTH) + 1;
		}
		
		/**
		 * 获得前一个月份
		 * 
		 * @return
		 */
		public static int getBeforeMonth() {
			Calendar calendar = Calendar.getInstance();//此时打印它获取的是系统当前时间
			calendar.add(Calendar.MONTH, -1);    //得到前一个月
			int month = calendar.get(Calendar.MONTH)+1; //输出前一月的时候要记得加1
			return month;
			
		}

		/**
		 * 获得今天在本年的第几天
		 * 
		 * @return
		 */
		public static int getDayOfYear() {
			return Calendar.getInstance().get(Calendar.DAY_OF_YEAR);
		}

		/**
		 * 获得今天在本月的第几天(获得当前日)
		 * 
		 * @return
		 */
		public static int getDayOfMonth() {
			return Calendar.getInstance().get(Calendar.DAY_OF_MONTH);
		}

		/**
		 * 获得今天在本周的第几天
		 * 
		 * @return
		 */
		public static int getDayOfWeek() {
			return Calendar.getInstance().get(Calendar.DAY_OF_WEEK);
		}

		/**
		 * 获得今天是这个月的第几周
		 * 
		 * @return
		 */
		public static int getWeekOfMonth() {
			return Calendar.getInstance().get(Calendar.DAY_OF_WEEK_IN_MONTH);
		}

		/**
		 * 获得半年后的日期
		 * 
		 * @return
		 */
		public static Date getTimeYearNext() {
			Calendar.getInstance().add(Calendar.DAY_OF_YEAR, 183);
			return Calendar.getInstance().getTime();
		}

		/**
		 * 将日期转换成字符串
		 * 
		 * @param dateTime
		 * @return
		 */
		public static String convertDateToString(Date dateTime) {
			SimpleDateFormat df =getSimpleDateFormat("yyyy-MM-dd");
			return df.format(dateTime);
		}

		/**
		 * 得到二个日期间的间隔天数
		 * 
		 * @param sj1
		 * @param sj2
		 * @return
		 */
		public static String getTwoDay(String sj1, String sj2) {
			SimpleDateFormat myFormatter =getSimpleDateFormat("yyyy-MM-dd");
			long day = 0;
			try {
				java.util.Date date = myFormatter.parse(sj1);
				java.util.Date mydate = myFormatter.parse(sj2);
				day = (date.getTime() - mydate.getTime()) / (24 * 60 * 60 * 1000);
			} catch (Exception e) {
				return "";
			}
			return day + "";
		}

		/**
		 * 根据一个日期，返回是星期几的字符串
		 * 
		 * @param sdate
		 * @return
		 */
		public static String getWeek(String sdate) {
			// 再转换为时间
			Date date = CalendarUtil.strToDate(sdate);
			Calendar c = Calendar.getInstance();
			c.setTime(date);
			// int hour=c.get(Calendar.DAY_OF_WEEK);
			// hour中存的就是星期几了，其范围 1~7
			// 1=星期日 7=星期六，其他类推
			return new SimpleDateFormat("EEEE").format(c.getTime());
		}

		/**
		 * 将短时间格式字符串转换为时间 yyyy-MM-dd
		 * 
		 * @param strDate
		 * @return
		 */
		public static Date strToDate(String strDate) {
			SimpleDateFormat formatter = getSimpleDateFormat("yyyy-MM-dd");
			ParsePosition pos = new ParsePosition(0);
			Date strtodate = formatter.parse(strDate, pos);
			return strtodate;
		}

		/**
		 * 两个时间之间的天数
		 * 
		 * @param date1
		 * @param date2
		 * @return
		 */
		public static long getDays(String date1, String date2) {
			if (date1 == null || date1.equals(""))
				return 0;
			if (date2 == null || date2.equals(""))
				return 0;
			// 转换为标准时间
			SimpleDateFormat myFormatter = getSimpleDateFormat("yyyy-MM-dd");
			java.util.Date date = null;
			java.util.Date mydate = null;
			try {
				date = myFormatter.parse(date1);
				mydate = myFormatter.parse(date2);
			} catch (Exception e) {
			}
			long day = (date.getTime() - mydate.getTime()) / (24 * 60 * 60 * 1000);
			return day;
		}

		/**
		 * 计算当月最后一天,返回字符串
		 * 
		 * @return
		 */
		public String getDefaultDay() {
			String str = "";
			SimpleDateFormat sdf =getSimpleDateFormat("yyyy-MM-dd");

			Calendar lastDate = Calendar.getInstance();
			lastDate.set(Calendar.DATE, 1);// 设为当前月的1号
			lastDate.add(Calendar.MONTH, 1);// 加一个月，变为下月的1号
			lastDate.add(Calendar.DATE, -1);// 减去一天，变为当月最后一天

			str = sdf.format(lastDate.getTime());
			return str;
		}

		/**
		 * 上月第一天
		 * 
		 * @return
		 */
		public String getPreviousMonthFirst() {
			String str = "";
			SimpleDateFormat sdf = getSimpleDateFormat("yyyy-MM-dd");

			Calendar lastDate = Calendar.getInstance();
			lastDate.set(Calendar.DATE, 1);// 设为当前月的1号
			lastDate.add(Calendar.MONTH, -1);// 减一个月，变为下月的1号
			// lastDate.add(Calendar.DATE,-1);//减去一天，变为当月最后一天

			str = sdf.format(lastDate.getTime());
			return str;
		}

		/**
		 * 获取当月第一天
		 * 
		 * @return
		 */
		public String getFirstDayOfMonth() {
			String str = "";
			SimpleDateFormat sdf = getSimpleDateFormat("yyyy-MM-dd");

			Calendar lastDate = Calendar.getInstance();
			lastDate.set(Calendar.DATE, 1);// 设为当前月的1号
			str = sdf.format(lastDate.getTime());
			return str;
		}

		/**
		 * 获得本周星期日的日期
		 * 
		 * @return
		 */
		public String getCurrentWeekday() {
			weeks = 0;
			int mondayPlus = this.getMondayPlus();
			GregorianCalendar currentDate = new GregorianCalendar();
			currentDate.add(GregorianCalendar.DATE, mondayPlus + 6);
			Date monday = currentDate.getTime();

			DateFormat df = DateFormat.getDateInstance();
			String preMonday = df.format(monday);
			return preMonday;
		}

		/**
		 * 获取当天时间
		 * 
		 * @param dateformat
		 * @return
		 */
		public String getNowTime(String dateformat) {
			Date now = new Date();
			SimpleDateFormat dateFormat =getSimpleDateFormat(dateformat);// 可以方便地修改日期格式
			String hehe = dateFormat.format(now);
			return hehe;
		}

		/**
		 * 获得当前日期与本周日相差的天数
		 * 
		 * @return
		 */
		private int getMondayPlus() {
			Calendar cd = Calendar.getInstance();
			// 获得今天是一周的第几天，星期日是第一天，星期二是第二天......
			int dayOfWeek = cd.get(Calendar.DAY_OF_WEEK) - 1; // 因为按中国礼拜一作为第一天所以这里减1
			if (dayOfWeek == 1) {
				return 0;
			} else {
				return 1 - dayOfWeek;
			}
		}

		/**
		 * 获得本周一的日期
		 * 
		 * @return
		 */
		public String getMondayOFWeek() {
			weeks = 0;
			int mondayPlus = this.getMondayPlus();
			GregorianCalendar currentDate = new GregorianCalendar();
			currentDate.add(GregorianCalendar.DATE, mondayPlus);
			Date monday = currentDate.getTime();

			DateFormat df = DateFormat.getDateInstance();
			String preMonday = df.format(monday);
			return preMonday;
		}

		/**
		 * 获得相应周的周六的日期
		 * 
		 * @return
		 */
		public String getSaturday() {
			int mondayPlus = this.getMondayPlus();
			GregorianCalendar currentDate = new GregorianCalendar();
			currentDate.add(GregorianCalendar.DATE, mondayPlus + 7 * weeks + 6);
			Date monday = currentDate.getTime();
			DateFormat df = DateFormat.getDateInstance();
			String preMonday = df.format(monday);
			return preMonday;
		}

		/**
		 * 获得上周星期日的日期
		 * 
		 * @return
		 */
		public String getPreviousWeekSunday() {
			weeks = 0;
			weeks--;
			SimpleDateFormat sdf = getSimpleDateFormat("yyyy-MM-dd");
			int mondayPlus = this.getMondayPlus();
			GregorianCalendar currentDate = new GregorianCalendar();
			currentDate.add(GregorianCalendar.DATE, mondayPlus + weeks);
			Date monday = currentDate.getTime();
			String preMonday = sdf.format(monday);
			return preMonday;
		}

		/**
		 * 获得上周星期一的日期
		 * 
		 * @return
		 */
		public String getPreviousWeekday() {
			
			  Calendar cal = Calendar.getInstance();
			  //n为推迟的周数，1本周，-1向前推迟一周，2下周，依次类推
			  int n = -1;
			  String monday;
			  cal.add(Calendar.DATE, n*7);
			  //想周几，这里就传几Calendar.MONDAY（TUESDAY...）
			  cal.set(Calendar.DAY_OF_WEEK,Calendar.MONDAY);
			  SimpleDateFormat sdf =getSimpleDateFormat("yyyy-MM-dd");
			  monday = sdf.format(cal.getTime());
			  return monday;
//			weeks--;
//			SimpleDateFormat sdf = getSimpleDateFormat("yyyy-MM-dd");
//			int mondayPlus = this.getMondayPlus();
//			GregorianCalendar currentDate = new GregorianCalendar();
//			currentDate.add(GregorianCalendar.DATE, mondayPlus + 7 * weeks);
//			Date monday = currentDate.getTime();
//			//DateFormat df = DateFormat.getDateInstance();
//			String preMonday = sdf.format(monday);
//			System.out.println(preMonday);
//			return preMonday;
		}

		/**
		 * 获得下周星期一的日期
		 */
		public String getNextMonday() {
			weeks++;
			int mondayPlus = this.getMondayPlus();
			GregorianCalendar currentDate = new GregorianCalendar();
			currentDate.add(GregorianCalendar.DATE, mondayPlus + 7);
			Date monday = currentDate.getTime();
			DateFormat df = DateFormat.getDateInstance();
			String preMonday = df.format(monday);
			return preMonday;
		}

		/**
		 * 获得下周星期日的日期
		 */ 
		public String getNextSunday() {

			int mondayPlus = this.getMondayPlus();
			GregorianCalendar currentDate = new GregorianCalendar();
			currentDate.add(GregorianCalendar.DATE, mondayPlus + 7 + 6);
			Date monday = currentDate.getTime();
			DateFormat df = DateFormat.getDateInstance();
			String preMonday = df.format(monday);
			return preMonday;
		}

		private int getMonthPlus() {
			Calendar cd = Calendar.getInstance();
			int monthOfNumber = cd.get(Calendar.DAY_OF_MONTH);
			cd.set(Calendar.DATE, 1);// 把日期设置为当月第一天
			cd.roll(Calendar.DATE, -1);// 日期回滚一天，也就是最后一天
			MaxDate = cd.get(Calendar.DATE);
			if (monthOfNumber == 1) {
				return -MaxDate;
			} else {
				return 1 - monthOfNumber;
			}
		}

		/**
		 * 获得上月最后一天的日期
		 * 
		 * @return
		 */
		public String getPreviousMonthEnd() {
			String str = "";
			SimpleDateFormat sdf = getSimpleDateFormat("yyyy-MM-dd");

			Calendar lastDate = Calendar.getInstance();
			lastDate.add(Calendar.MONTH, -1);// 减一个月
			lastDate.set(Calendar.DATE, 1);// 把日期设置为当月第一天
			lastDate.roll(Calendar.DATE, -1);// 日期回滚一天，也就是本月最后一天
			str = sdf.format(lastDate.getTime());
			return str;
		}

		/**
		 * 获得下个月第一天的日期
		 * 
		 * @return
		 */
		public String getNextMonthFirst() {
			String str = "";
			SimpleDateFormat sdf =getSimpleDateFormat("yyyy-MM-dd");

			Calendar lastDate = Calendar.getInstance();
			lastDate.add(Calendar.MONTH, 1);// 减一个月
			lastDate.set(Calendar.DATE, 1);// 把日期设置为当月第一天
			str = sdf.format(lastDate.getTime());
			return str;
		}

		/**
		 * 获得下个月最后一天的日期
		 * 
		 * @return
		 */
		public String getNextMonthEnd() {
			String str = "";
			SimpleDateFormat sdf =getSimpleDateFormat("yyyy-MM-dd");

			Calendar lastDate = Calendar.getInstance();
			lastDate.add(Calendar.MONTH, 1);// 加一个月
			lastDate.set(Calendar.DATE, 1);// 把日期设置为当月第一天
			lastDate.roll(Calendar.DATE, -1);// 日期回滚一天，也就是本月最后一天
			str = sdf.format(lastDate.getTime());
			return str;
		}

		/**
		 * 获得明年最后一天的日期
		 * 
		 * @return
		 */
		public String getNextYearEnd() {
			String str = "";
			SimpleDateFormat sdf = getSimpleDateFormat("yyyy-MM-dd");

			Calendar lastDate = Calendar.getInstance();
			lastDate.add(Calendar.YEAR, 1);// 加一个年
			lastDate.set(Calendar.DAY_OF_YEAR, 1);
			lastDate.roll(Calendar.DAY_OF_YEAR, -1);
			str = sdf.format(lastDate.getTime());
			return str;
		}

		/**
		 * 获得明年第一天的日期
		 * 
		 * @return
		 */
		public String getNextYearFirst() {
			String str = "";
			SimpleDateFormat sdf =getSimpleDateFormat("yyyy-MM-dd");

			Calendar lastDate = Calendar.getInstance();
			lastDate.add(Calendar.YEAR, 1);// 加一个年
			lastDate.set(Calendar.DAY_OF_YEAR, 1);
			str = sdf.format(lastDate.getTime());
			return str;

		}

		/**
		 * 获得本年有多少天
		 * 
		 * @return
		 */
		private int getMaxYear() {
			Calendar cd = Calendar.getInstance();
			cd.set(Calendar.DAY_OF_YEAR, 1);// 把日期设为当年第一天
			cd.roll(Calendar.DAY_OF_YEAR, -1);// 把日期回滚一天。
			int MaxYear = cd.get(Calendar.DAY_OF_YEAR);
			return MaxYear;
		}

		private int getYearPlus() {
			Calendar cd = Calendar.getInstance();
			int yearOfNumber = cd.get(Calendar.DAY_OF_YEAR);// 获得当天是一年中的第几天
			cd.set(Calendar.DAY_OF_YEAR, 1);// 把日期设为当年第一天
			cd.roll(Calendar.DAY_OF_YEAR, -1);// 把日期回滚一天。
			int MaxYear = cd.get(Calendar.DAY_OF_YEAR);
			if (yearOfNumber == 1) {
				return -MaxYear;
			} else {
				return 1 - yearOfNumber;
			}
		}

		/**
		 * 获得本年第一天的日期
		 * 
		 * @return
		 */
		public String getCurrentYearFirst() {
			int yearPlus = this.getYearPlus();
			GregorianCalendar currentDate = new GregorianCalendar();
			currentDate.add(GregorianCalendar.DATE, yearPlus);
			Date yearDay = currentDate.getTime();
			DateFormat df = DateFormat.getDateInstance();
			String preYearDay = df.format(yearDay);
			return preYearDay;
		}

		// 获得本年最后一天的日期 *
		public String getCurrentYearEnd() {
			Date date = new Date();
			SimpleDateFormat dateFormat = getSimpleDateFormat("yyyy");// 可以方便地修改日期格式
			String years = dateFormat.format(date);
			return years + "-12-31";
		}

		// 获得上年第一天的日期 *
		public String getPreviousYearFirst() {
			Date date = new Date();
			SimpleDateFormat dateFormat = getSimpleDateFormat("yyyy");// 可以方便地修改日期格式
			String years = dateFormat.format(date);
			int years_value = Integer.parseInt(years);
			years_value--;
			return years_value + "-01-01";
		}

		// 获得上年最后一天的日期
		public String getPreviousYearEnd() {
			weeks--;
			int yearPlus = this.getYearPlus();
			GregorianCalendar currentDate = new GregorianCalendar();
			currentDate.add(GregorianCalendar.DATE, yearPlus + MaxYear * weeks
					+ (MaxYear - 1));
			Date yearDay = currentDate.getTime();
			DateFormat df = DateFormat.getDateInstance();
			String preYearDay = df.format(yearDay);
			return preYearDay;
		}

		/**
		 * 获得本季度第一天
		 * 
		 * @param month
		 * @return
		 */
		public String getThisSeasonFirstTime(int month) {
			int array[][] = { { 1, 2, 3 }, { 4, 5, 6 }, { 7, 8, 9 }, { 10, 11, 12 } };
			int season = 1;
			if (month >= 1 && month <= 3) {
				season = 1;
			}
			if (month >= 4 && month <= 6) {
				season = 2;
			}
			if (month >= 7 && month <= 9) {
				season = 3;
			}
			if (month >= 10 && month <= 12) {
				season = 4;
			}
			int start_month = array[season - 1][0];
			int end_month = array[season - 1][2];

			Date date = new Date();
			SimpleDateFormat dateFormat =getSimpleDateFormat("yyyy");// 可以方便地修改日期格式
			String years = dateFormat.format(date);
			int years_value = Integer.parseInt(years);

			int start_days = 1;// years+"-"+String.valueOf(start_month)+"-1";//getLastDayOfMonth(years_value,start_month);
			int end_days = getLastDayOfMonth(years_value, end_month);
			String seasonDate = years_value + "-" + start_month + "-" + start_days;
			return seasonDate;

		}

		/**
		 * 获得本季度最后一天
		 * 
		 * @param month
		 * @return
		 */
		public String getThisSeasonFinallyTime(int month) {
			int array[][] = { { 1, 2, 3 }, { 4, 5, 6 }, { 7, 8, 9 }, { 10, 11, 12 } };
			int season = 1;
			if (month >= 1 && month <= 3) {
				season = 1;
			}
			if (month >= 4 && month <= 6) {
				season = 2;
			}
			if (month >= 7 && month <= 9) {
				season = 3;
			}
			if (month >= 10 && month <= 12) {
				season = 4;
			}
			int start_month = array[season - 1][0];
			int end_month = array[season - 1][2];

			Date date = new Date();
			SimpleDateFormat dateFormat =getSimpleDateFormat("yyyy");// 可以方便地修改日期格式
			String years = dateFormat.format(date);
			int years_value = Integer.parseInt(years);

			
			int start_days = 1;// years+"-"+String.valueOf(start_month)+"-1";//getLastDayOfMonth(years_value,start_month);
			int end_days = getLastDayOfMonth(years_value, end_month);
			String seasonDate = years_value + "-" + end_month + "-" + end_days;
			return seasonDate;

		}

		/**
		 * 获取某年某月的最后一天
		 * 
		 * @param year
		 *            年
		 * @param month
		 *            月
		 * @return 最后一天
		 */
		private int getLastDayOfMonth(int year, int month) {
			if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8
					|| month == 10 || month == 12) {
				return 31;
			}
			if (month == 4 || month == 6 || month == 9 || month == 11) {
				return 30;
			}
			if (month == 2) {
				if (isLeapYear(year)) {
					return 29;
				} else {
					return 28;
				}
			}
			return 0;
		}

		/**
		 * 是否闰年
		 * 
		 * @param year
		 *            年
		 * @return
		 */
		public boolean isLeapYear(int year) {
			return (year % 4 == 0 && year % 100 != 0) || (year % 400 == 0);
		}

		/**
		 * 是否闰年
		 * 
		 * @param year
		 * @return
		 */
		public boolean isLeapYear2(int year) {
			return new GregorianCalendar().isLeapYear(year);
		}
		
		
		/**
		* 日期转换成字符串
		* @param date 
		* @return str
		*/
		public static String DateToStr(Date date) {
		  
		   SimpleDateFormat format =getSimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		   String str = format.format(date);
		   return str;
		} 

		/**
		* 字符串转换成日期
		* @param str
		* @return date
		*/
		public static Date StrToDate(String str) {
		  
		   SimpleDateFormat format =getSimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		   Date date = null;
		   try {
		    date = format.parse(str);
		   } catch (ParseException e) {
		    e.printStackTrace();
		   }
		   return date;
		}


		/**
		   * 字符串转换为java.util.Date<br>
		   * 支持格式为 yyyy.MM.dd G 'at' hh:mm:ss z 如 '2002-1-1 AD at 22:10:59 PSD'<br>
		   * yy/MM/dd HH:mm:ss 如 '2002/1/1 17:55:00'<br>
		   * yy/MM/dd HH:mm:ss pm 如 '2002/1/1 17:55:00 pm'<br>
		   * yy-MM-dd HH:mm:ss 如 '2002-1-1 17:55:00' <br>
		   * yy-MM-dd HH:mm:ss am 如 '2002-1-1 17:55:00 am' <br>
		   * @param time String 字符串<br>
		   * @return Date 日期<br>
		   */
		public static Date stringToDate(String time){
		    SimpleDateFormat formatter;
		    int tempPos=time.indexOf("AD") ;
		    time=time.trim() ;
		    formatter = getSimpleDateFormat ("yyyy.MM.dd G 'at' hh:mm:ss z");
		    if(tempPos>-1){
		      time=time.substring(0,tempPos)+
		           "公元"+time.substring(tempPos+"AD".length());//china
		      formatter = getSimpleDateFormat ("yyyy.MM.dd G 'at' hh:mm:ss z");
		    }
		    tempPos=time.indexOf("-");
		    if(tempPos>-1&&(time.indexOf(" ")<0)){
		      formatter = getSimpleDateFormat("yyyyMMddHHmmssZ");
		    }
		    else if((time.indexOf("/")>-1) &&(time.indexOf(" ")>-1)){
		      formatter = getSimpleDateFormat ("yyyy/MM/dd HH:mm:ss");
		    }
		    else if((time.indexOf("-")>-1) &&(time.indexOf(" ")>-1)){
		      formatter = getSimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		    }
		    else if((time.indexOf("/")>-1) &&(time.indexOf("am")>-1) ||(time.indexOf("pm")>-1)){
		      formatter =getSimpleDateFormat ("yyyy-MM-dd KK:mm:ss a");
		    }
		    else if((time.indexOf("-")>-1) &&(time.indexOf("am")>-1) ||(time.indexOf("pm")>-1)){
		      formatter = getSimpleDateFormat ("yyyy-MM-dd KK:mm:ss a");
		    }
		    ParsePosition pos = new ParsePosition(0);
		    java.util.Date ctime = formatter.parse(time, pos);

		    return ctime;
		}


		/**
		   * 将java.util.Date 格式转换为字符串格式'yyyy-MM-dd HH:mm:ss'(24小时制)<br>
		   * 如Sat May 11 17:24:21 CST 2002 to '2002-05-11 17:24:21'<br>
		   * @param time Date 日期<br>
		   * @return String   字符串<br>
		   */
		  

		public static String dateToString(Date time){
		    SimpleDateFormat formatter;
		    formatter =getSimpleDateFormat ("yyyy-MM-dd HH:mm:ss");
		    String ctime = formatter.format(time);

		    return ctime;
		}


		/**
		   * 将java.util.Date 格式转换为字符串格式'yyyy-MM-dd HH:mm:ss a'(12小时制)<br>
		   * 如Sat May 11 17:23:22 CST 2002 to '2002-05-11 05:23:22 下午'<br>
		   * @param time Date 日期<br>
		   * @param x int 任意整数如：1<br>
		   * @return String 字符串<br>
		   */
		public static String dateToString(Date time,int x){
		    SimpleDateFormat formatter;
		    formatter = getSimpleDateFormat("yyyy-MM-dd KK:mm:ss a");
		    String ctime = formatter.format(time);

		    return ctime;
		}


		/**
		   *取系统当前时间:返回只值为如下形式
		   *2002-10-30 20:24:39
		   * @return String
		   */
		public static String Now(){
		    return dateToString(new Date());
		}

		/**
		   *取系统当前时间:返回只值为如下形式
		   *2002-10-30 08:28:56 下午
		   *@param hour 为任意整数
		   *@return String
		   */
		public static String Now(int hour){
		    return dateToString(new Date(),hour);
		}


		/**
		   *取系统当前时间:返回值为如下形式
		   *2002-10-30
		   *@return String
		   */
		public static String getYYYY_MM_DD(){
		    return dateToString(new Date()).substring(0,10);

		}


		/**
		   *取系统给定时间:返回值为如下形式
		   *2002-10-30
		   *@return String
		   */
		   public static String getYYYY_MM_DD(String date){
		    return date.substring(0,10);

		}
	     
		/**
		 *取小时
		 * @return 如：10
		 */
		public static String getHour(){
		    SimpleDateFormat formatter;
		    formatter = getSimpleDateFormat ("HH");
		    String ctime = formatter.format(new Date());
		    return ctime;
		    }
		/**
		 *取日
		 * @return 如：29
		 */
		public static String getDay(){
		    SimpleDateFormat formatter;
		    formatter = getSimpleDateFormat ("dd");
		    String ctime = formatter.format(new Date());
		    return ctime;
		    }
	    
		/**
		 *取月
		 * @return 如：03
		 */
		public static String getMonths(){
		    SimpleDateFormat formatter;
		    formatter = getSimpleDateFormat("MM");
		    String ctime = formatter.format(new Date());
		    return ctime;
		    }
		
		/**
		 *取月
		 * @return 如：03
		 */
		public static String getMonths(Date date){
		    SimpleDateFormat formatter;
		    formatter =getSimpleDateFormat("M");
		    String ctime = formatter.format(date);
		    return ctime;
		    }
		/**
		 *取年
		 * @return 如：2012
		 */
		public static String getYears(){
		    SimpleDateFormat formatter;
		    formatter = getSimpleDateFormat ("yyyy");
		    String ctime = formatter.format(new Date());
		    return ctime;
		    }
		
		/**
		 *取年
		 * @return 如：2012
		 */
		public static String getYears(Date date){
		    SimpleDateFormat formatter;
		    formatter = getSimpleDateFormat ("yyyy");
		    String ctime = formatter.format(date);
		    return ctime;
		    }
		    
		/**
		 *取周
		 * @return 如：星期四
		 */
		public static String getWeek(){
		    SimpleDateFormat formatter;
		    formatter = getSimpleDateFormat ("E");
		    String ctime = formatter.format(new Date());
		    return ctime;
		}
		
		/**
		 * 获取当前年的第几周
		 * @param date
		 * @return   如：2012-03-29 是今年的第13周
		 */
		 public static int getWeek(Date date) {
		  GregorianCalendar g = new GregorianCalendar();
		  g.setTime(date);
		  return g.get(Calendar.WEEK_OF_YEAR);//获得周数
		 }
		 
	   /** 
	     * 			 * 获取前一天的日期
		 * @return 如今天是：2012-03-29 结果为：2012-03-28
		 */
		public static String getBeforeday(){
			Calendar calendar = Calendar.getInstance();//此时打印它获取的是系统当前时间
	        calendar.add(Calendar.DATE, -1);    //得到前一天
	        SimpleDateFormat sdf = getSimpleDateFormat("yyyy-MM-dd");
	        String  yestedayDate= sdf.format(calendar.getTime());
            return yestedayDate;
		}
		
		/**
	     * 上季度的开始时间，即2012-01-1 00:00:00
	     * 
	     * @return
	     */
	    public static   Date getCurrentQuarterStartTime() {
	    	 SimpleDateFormat longSdf =getSimpleDateFormat("yyyy-MM-dd HH:mm:ss");
			  SimpleDateFormat shortSdf = getSimpleDateFormat("yyyy-MM-dd");
	        Calendar c = Calendar.getInstance();
	        int currentMonth = c.get(Calendar.MONTH) + 1;
	        Date now = null;
	        try {
	            if (currentMonth >= 1 && currentMonth <= 3)
	                c.set(Calendar.MONTH, 0);
	            else if (currentMonth >= 4 && currentMonth <= 6)
	                c.set(Calendar.MONTH, 3);
	            else if (currentMonth >= 7 && currentMonth <= 9)
	                c.set(Calendar.MONTH, 6);
	            else if (currentMonth >= 10 && currentMonth <= 12)
	                c.set(Calendar.MONTH, 9);
	            c.set(Calendar.DATE, 1);
	            
	            c.add(2, -3);  // 在当前日期上减3个月
	            now = longSdf.parse(shortSdf.format(c.getTime()) + " 00:00:00");
	        } catch (Exception e) {
	            e.printStackTrace();
	        }
	        return now;
	    }

	    /**
	     * 上季度的结束时间，即2012-03-31 23:59:59
	     * 
	     * @return
	     */
	    public static  Date getCurrentQuarterEndTime() {
	    	 SimpleDateFormat longSdf =getSimpleDateFormat("yyyy-MM-dd HH:mm:ss");
			  SimpleDateFormat shortSdf = getSimpleDateFormat("yyyy-MM-dd");
	        Calendar c = Calendar.getInstance();
	        int currentMonth = c.get(Calendar.MONTH) +1;
	        Date now = null;
	        try {
	            if (currentMonth >= 1 && currentMonth <= 3) {
	                c.set(Calendar.MONTH, 2);
	                c.set(Calendar.DATE, 31);
	            } else if (currentMonth >= 4 && currentMonth <= 6) {
	                c.set(Calendar.MONTH, 5);
	                c.set(Calendar.DATE, 30);
	            } else if (currentMonth >= 7 && currentMonth <= 9) {
	                c.set(Calendar.MONTH, 8);
	                c.set(Calendar.DATE, 30);
	            } else if (currentMonth >= 10 && currentMonth <= 12) {
	                c.set(Calendar.MONTH, 11);
	                c.set(Calendar.DATE, 31);
	            }
	            c.add(2, -3);  // 在当前日期上减3个月
	            now = longSdf.parse(shortSdf.format(c.getTime()) + " 23:59:59");
	        } catch (Exception e) {
	            e.printStackTrace();
	        }
	        return now;
	    }
		/**
		  * 本度的开端时候,即2012-01-1 00:00:00
		  *
		  * ＠return
		  */
		  public static Date getCurrentQuarterStartTimes() {
			  SimpleDateFormat longSdf =getSimpleDateFormat("yyyy-MM-dd HH:mm:ss");
			  SimpleDateFormat shortSdf = getSimpleDateFormat("yyyy-MM-dd");
			  Calendar c = Calendar.getInstance();
			  c.add(Calendar.MONTH, -1);    //得到前一个月
			  int currentMonth = c.get(Calendar.MONTH) + 1;
			  Date now = null;
			  try {
			  if (currentMonth >= 1 && currentMonth <= 3)
			  c.set(Calendar.MONTH, 0);
			  else if (currentMonth >= 4 && currentMonth <= 6)
			  c.set(Calendar.MONTH, 3);
			  else if (currentMonth >= 7 && currentMonth <= 9)
			  c.set(Calendar.MONTH, 6);
			  else if (currentMonth >= 10 && currentMonth <= 12)
			  c.set(Calendar.MONTH, 9);
			  c.set(Calendar.DATE, 1);
             now = longSdf.parse(shortSdf.format(c.getTime()) + " 00:00:00");
			  } catch (Exception e) {
			  e.printStackTrace();
			  }
			  return now;
		  }

		  /**
		  * 本季度的停止时候,即2012-03-31 23:59:59
		  *
		  * ＠return
		  */
		  public static Date getCurrentQuarterEndTimes() {
			  SimpleDateFormat longSdf = getSimpleDateFormat("yyyy-MM-dd HH:mm:ss");
			  SimpleDateFormat shortSdf = getSimpleDateFormat("yyyy-MM-dd");
			  Calendar c = Calendar.getInstance();
			  c.add(Calendar.MONTH, -1);    //得到前一个月
			  int currentMonth = c.get(Calendar.MONTH) + 1;
			  Date now = null;
			  try {
			  if (currentMonth >= 1 && currentMonth <= 3) {
			  c.set(Calendar.MONTH, 2);
			  c.set(Calendar.DATE, 31);
			  } else if (currentMonth >= 4 && currentMonth <= 6) {
			  c.set(Calendar.MONTH, 5);
			  c.set(Calendar.DATE, 30);
			  } else if (currentMonth >= 7 && currentMonth <= 9) {
			  c.set(Calendar.MONTH, 8);
			  c.set(Calendar.DATE, 30);
			  } else if (currentMonth >= 10 && currentMonth <= 12) {
			  c.set(Calendar.MONTH, 11);
			  c.set(Calendar.DATE, 31);
			  }
			  now = longSdf.parse(shortSdf.format(c.getTime()) + " 23:59:59");
			  } catch (Exception e) {
			  e.printStackTrace();
			  }

			  return now;
		  }
		  
		  /**
			 * 判断今天是否星期一
			 */
			public  boolean checkTodayMonday() throws Exception{
				 boolean flag=false;
				 try{
					    String weekString = "";
					    final String dayNames[] = {"星期日","星期一","星期二","星期三","星期四","星期五","星期六"}; 
					    Calendar calendar = Calendar.getInstance();
				        Date date = new Date();
				        calendar.setTime(date); 
				        int dayOfWeek = calendar.get(Calendar.DAY_OF_WEEK);
				        weekString = dayNames[dayOfWeek - 1];
				        if("星期一".equals(weekString)){
				        	flag=true;
				        }else{
				        	flag=false;
				        }
				 }catch(Exception e){
					 e.printStackTrace();
				 }
			    return flag;
			}
		  
	

}
