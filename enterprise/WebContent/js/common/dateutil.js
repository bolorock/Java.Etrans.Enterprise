// JavaScript Document


var dateutil = {
FORMAT_DATE_LONG: "yyyy-MM-dd",
FORMAT_DATE_LONG_CN: "yyyy年MM月dd日",
FORMAT_MONTH_CN: "yyyy年MM月",
FORMAT_MONTH_SHORT: "yyyy-MM",
/**
* 返回n天前的日期。
* @param n 如果n为0，表示当天；如果n为负数，表示未来。
* @return 返回Date对象。如果n不是数字，返回当天。
*/
getDate: function(n) {
n = (n && !isNaN(parseInt(n, 10))) ? parseInt(n, 10) : 0;
var d = new Date();
d.setDate(d.getDate() - n);
return d;
},
/**
* 将日期回退n天
* @param date 如果不是Date对象，默认为当天
* @param n 如果n为0，表示当天；如果n为负数，表示未来。如果n不是数字，默认为0
*/
setDateBefore: function(date, n) {
n = (n && !isNaN(parseInt(n, 10))) ? parseInt(n, 10) : 0;
var d = date instanceof Date ? date : new Date();
return d.setDate(d.getDate() - n);
},
/**
* 格式化日期。
* @param format - 结果格式。可选值为
* dateutil.FORMAT_DATE_LONG: "yyyy-MM-dd"（默认值）
* dateutil.FORMAT_DATE_LONG_CN: "yyyy年MM月dd日"
* @return 如果date不是Date对象，返回undefined
*/
formatDate: function(date, format) {
if (date instanceof Date) {
if (format != this.FORMAT_DATE_LONG && format != this.FORMAT_DATE_LONG_CN && format != this.FORMAT_MONTH_CN && format != this.FORMAT_MONTH_SHORT) {
format = this.FORMAT_DATE_LONG;
}
var year = date.getFullYear();
var month = date.getMonth() + 1;
var date = date.getDate();
month = month < 10 ? "0" + month : month; // 补0
date = date < 10 ? "0" + date : date;
switch (format) {
case this.FORMAT_DATE_LONG:
return year + "-" + month + "-" + date;
break;
case this.FORMAT_DATE_LONG_CN:
return year + "年" + month + "月" + date + "日";
break;
case this.FORMAT_MONTH_CN:
return year + "年" + month + "月";
break;
case this.FORMAT_MONTH_SHORT:
return year + "-" + month;
break;	
}
}
return undefined;
},
/**
* 将"yyyy-MM-dd"的日期转换为"yyyy年MM月dd日"的格式
* @param dateStr 格式为"yyyy-MM-dd"的日期
* @return 出错时返回undefined
*/
convertDateCn: function(dateStr) {
var strs = dateStr ? dateStr.split("-") : [];
if (strs.length == 3) {
var year = parseInt(strs[0], 10);
var month = parseInt(strs[1], 10);
var date = parseInt(strs[2], 10);
if (!isNaN(year) && !isNaN(month) && !isNaN(date)) {
month = month < 10 ? "0" + month : month; // 补0
date = date < 10 ? "0" + date : date;
return year + "年" + month + "月" + date + "日";
}
}
return undefined;
},
/**
* 返回星期几
* @return 出错时返回undefined
*/
getDayOfWeekCn: function(date) {
var days = ["星期天", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
return date instanceof Date ? days[date.getDay()] : undefined;
},

/**
 * 计算时间相隔多少个月
 */

calcMonths:function(startDate,endDate)
{
	 number = 0;
     yearToMonth = (endDate.getFullYear() - startDate.getFullYear()) * 12;
     
     number += yearToMonth;
     
    // endDate.setMonth(endDate.getMonth()+1);
     
    // monthToMonth = endDate.getMonth() - startDate.getMonth();
     
     monthToMonth = (endDate.getFullYear()*12+endDate.getMonth()) - (startDate.getFullYear()*12+startDate.getMonth());
     
     number += monthToMonth;
     
     endDay = endDate.getDate();
     startDay = startDate.getDate();
     
     dayStep = endDay - startDay;
    
     if (monthToMonth >= 0) 
     {
         if (dayStep >= 1)
         {
             number += 1;
         }
     }
     else 
     {
         if (dayStep <= -1) 
         {
             number -= 1;
         }
     }
     
     return number;
},

/**
 * 两个时间相隔多少天
 * @param startDate
 * @param endDate
 */
calcDays:function(startDate,endDate)
{
	if(startDate instanceof Date && endDate instanceof Date)
	 return Math.ceil((endDate.getTime() - startDate.getTime() ) / (1000 * 60 * 60 * 24));
	else
		alert("参数不是时间类型");

},

/**
 * 将格式为yyyy-MM-dd 格式的字符串转换成时间
 * @param str
 */
strToDate:function(str)
{   
	 var re = /^(\d{4})\S(\d{1,2})\S(\d{1,2})$/; 
	 var date;
	  if (re.test(str))   
	  {   
		  date = new Date(RegExp.$1,RegExp.$2   -   1,RegExp.$3);   
	  } 
 return date;
}


};

