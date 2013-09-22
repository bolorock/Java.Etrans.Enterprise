// JavaScript Document


var historytime = {
  
  msOfWeek: 1000*60*60*24*7, // 一周的毫秒数
  
  firstDate: null, // 有效数据起始日期
  
  firstMonday: null, // 起始日期当年的第一个周一
  
  firstStartWeek: null, // firstDate 与 firstMonday 间的周数
  
  // 初始化，根据城市设置有效数据起始日期
  init: function(date) {
   /* if ("sh" == city) { // 上海
      this.firstDate = new Date(2010, 4, 22);
    } else { // 默认值，广州
      this.firstDate = new Date(2011, 1, 01);
    }*/
	  this.firstDate = date;
    
    // 根据 firstDate 设置当年第一个周一的日期
    this.firstMonday = new Date(this.firstDate.getFullYear(), 0, 1);
    var day = this.firstMonday.getDay();
    if (day != 1) { // 1月1日不是周一时，设置为下周一
      this.firstMonday.setDate(this.firstMonday.getDate() + 8 - (day==0 ? 7 : day));
    }
    
    this.firstStartWeek = Math.ceil((this.firstDate.getTime() - this.firstMonday.getTime()) / this.msOfWeek);
  }, 

  // 获取日历史数据的下拉框选项内容
  // 最近一天不显示
  // start - 如果是历史页面，start表示开始日期。否则start为undefined
  getDayOptions: function(start) {
    var ops = [];
    var date = new Date();
    date.setDate(date.getDate() - 1);
    var d;
    var strs = [];
    strs[0] = "<option value='";
    strs[2] = "'>";
    strs[4] = "</option>";
    for (var i=0; i<30; i++) {
      date.setDate(date.getDate() - 1);
      d = dateutil.formatDate(date, dateutil.FORMAT_DATE_LONG);
      strs[1] = start == d ? d + "' selected='selected" : d;
      strs[3] = d + ", " + dateutil.getDayOfWeekCn(date);
      ops[i] = strs.join("");
    }
    return ops.join("");
  }, 
  
  // 获取日历史数据选项内容
  // 格式为：[{text:"2010-03-06, 星期六", startDate:"2010-03-06", endDate:"2010-03-06"}, ...]
  getDays: function() {
    var date = new Date();
    date.setDate(date.getDate() - 1);
    var text;
    var value;
    var days = [];
    for (var i=0; i<31; i++) {
      date.setDate(date.getDate() - 1);
      value = dateutil.formatDate(date, dateutil.FORMAT_DATE_LONG);
      text = value + ", " + dateutil.getDayOfWeekCn(date);
      days[i] = {"text": text, "startDate": value, "endDate": value};
    }
    return days;
  }, 

// 不是自然周，从每年1月1日开始算周数的方法，暂未使用
//  // 获取周历史数据的下拉框选项内容
//  // start - 如果是历史页面，start表示开始日期。否则start为undefined
//  getWeekOptionsOld: function(start) {
//    var ops = [];
//    var startDate = new Date();
//    startDate.setMonth(0);
//    startDate.setDate(1);
//    var startTime = startDate.getTime();
//    var endDate = new Date();
//    var endTime =endDate.getTime();
//    var d;
//    var strs = [];
//    strs[0] = "<option value='";
//    strs[2] = "'>";
//    strs[4] = "</option>";
//    
//    // 当年
//    var days = (endTime - startTime) / (1000*60*60*24);
//    var count = parseInt(days / 7);
//    endDate.setDate(endDate.getDate() - days % 7 - 1);
//    startDate.setTime(endDate.getTime());
//    startDate.setDate(startDate.getDate() - 6);
//    for (var i=0; i<count; i++) {
//      var startStr = dateutil.formatDate(startDate, dateutil.FORMAT_DATE_LONG);
//      var endStr = dateutil.formatDate(endDate, dateutil.FORMAT_DATE_LONG);
//      strs[1] = start == startStr ? startStr + "_" + endStr + "' selected='selected" : startStr + "_" + endStr;
//      strs[3] = startStr + "~" + endStr + ", 第" + (count-i) + "周";
//      ops[i] = strs.join("");
//      startDate.setDate(startDate.getDate() - 7);
//      endDate.setDate(endDate.getDate() - 7);
//    }
//    
//    return ops.join("");
//  }, 

  // 获取周历史数据的下拉框选项内容
  // 每年的第一个周一所在的周为第一周，最后一个周一所在的周为最后一周
  // start - 如果是历史页面，start表示开始日期。否则start为undefined
  getWeekOptions: function(start) {
    var ops = [];
    var startDate = new Date();
    var endDate = new Date();
    var endTime =endDate.getTime();
    var startStr;
    var endStr;
    var strs = [];
    strs[0] = "<option value='";
    strs[2] = "'>";
    strs[4] = "</option>";
    
    var count = parseInt((endTime - this.firstMonday.getTime()) / this.msOfWeek); // 计算当前日至 起始周一 的完整周数
    var years = endDate.getFullYear() - this.firstDate.getFullYear();
    
    var lastWeekIndexes = [0]; // 起始周一 至每年最后一周的周数
    var startWeeks = [this.firstStartWeek]; // 每年的起始周数，第一年需进行计算，其它均为 0，不显示这一周。
    for (var i=1; i<years+1; i++) {
      var d = new Date(this.firstDate.getFullYear()+i-1, 11, 31);
      lastWeekIndexes[i] = parseInt((d.getTime() - this.firstMonday.getTime()) / this.msOfWeek); // 计算这一年最后一周至 起始周一 的周数
      lastWeekIndexes[i] += (d.getDay() == 0 ? 0 : 1);
      startWeeks[i] = 0;
    }
    if (endDate.getMonth() == 0 && 
        endDate.getDate() < (endDate.getDay() == 0 ? 7 : endDate.getDay())) { // 当天属于前一年最后一周的情况
      years--;
    } else {
      lastWeekIndexes[lastWeekIndexes.length] = count; // 正常情况下当年的结束周数只计算至当天
    }
    
    endDate.setDate(endDate.getDate() - (endDate.getDay() == 0 ? 7 : endDate.getDay())); // 获取前一个周日
    startDate.setTime(endDate.getTime());
    startDate.setDate(startDate.getDate() - 6); // 获取前一周的周一
    
    var opsCount = 0; // ops的索引
    for (var i=years; i>=0; i--) { // 遍历每一年
      for (var j=lastWeekIndexes[i+1]-lastWeekIndexes[i]; j>startWeeks[i]; j--) { // 遍历当年的每一周
        startStr = dateutil.formatDate(startDate, dateutil.FORMAT_DATE_LONG);
        endStr = dateutil.formatDate(endDate, dateutil.FORMAT_DATE_LONG);
        strs[1] = start == startStr ? startStr + "_" + endStr + "' selected='selected" : startStr + "_" + endStr;
        strs[3] = startStr + "~" + endStr + ", 第" + j + "周";
        ops[opsCount++] = strs.join("");
        startDate.setDate(startDate.getDate() - 7); // 往前一周
        endDate.setDate(endDate.getDate() - 7);
      }
    }
    
    return ops.join("");
  }, 
  
  // 获取周历史数据选项内容
  // 格式为：[{text:"2010-02-01~2010-02-07, 第5周", startDate:"2010-02-01", endDate:"2010-02-07"}, ...]
  getWeeks: function() {
    var startDate = new Date();
    var endDate = new Date();
    var endTime =endDate.getTime();
    var startStr;
    var endStr;
    var text;
    var value;
    var weeks = [];
    
    var count = parseInt((endTime - this.firstMonday.getTime()) / this.msOfWeek); // 计算当前日至 起始周一 的完整周数
    var years = endDate.getFullYear() - this.firstDate.getFullYear();
    
    var lastWeekIndexes = [0]; // 起始周一 至每年最后一周的周数
    var startWeeks = [this.firstStartWeek]; // 每年的起始周数，第一年需进行计算，其它均为 0，不显示这一周。
    for (var i=1; i<years+1; i++) {
      var d = new Date(this.firstDate.getFullYear()+i-1, 11, 31);
      lastWeekIndexes[i] = parseInt((d.getTime() - this.firstMonday.getTime()) / this.msOfWeek); // 计算这一年最后一周至 起始周一 的周数
      lastWeekIndexes[i] += (d.getDay() == 0 ? 0 : 1);
      startWeeks[i] = 0;
    }
    if (endDate.getMonth() == 0 && 
        endDate.getDate() < (endDate.getDay() == 0 ? 7 : endDate.getDay())) { // 当天属于前一年最后一周的情况
      years--;
    } else {
      lastWeekIndexes[lastWeekIndexes.length] = count; // 正常情况下当年的结束周数只计算至当天
    }
    
    endDate.setDate(endDate.getDate() - (endDate.getDay() == 0 ? 7 : endDate.getDay())); // 获取前一个周日
    startDate.setTime(endDate.getTime());
    startDate.setDate(startDate.getDate() - 6); // 获取前一周的周一
    
    var weekCount = 0; // 周数的索引
    var size = 32; // 最多只获取最近32周
    for (var i=years; i>=0 && weekCount < size; i--) { // 遍历每一年
      for (var j=lastWeekIndexes[i+1]-lastWeekIndexes[i]; j>startWeeks[i] && weekCount < size; j--) { // 遍历当年的每一周
        startStr = dateutil.formatDate(startDate, dateutil.FORMAT_DATE_LONG);
        endStr = dateutil.formatDate(endDate, dateutil.FORMAT_DATE_LONG);
        if(j>=10){
        	weeks[weekCount++] = {"text": "第" + j + "周 ,"+startStr + "至" + endStr ,"value" :startDate.getFullYear() + "-" + j, "startDate": startStr, "endDate": endStr};
        }else{
        	weeks[weekCount++] = {"text": "第0" + j + "周 ,"+startStr + "至" + endStr ,"value" :startDate.getFullYear() + "-" + j, "startDate": startStr, "endDate": endStr};
        }
        startDate.setDate(startDate.getDate() - 7); // 往前一周
        endDate.setDate(endDate.getDate() - 7);
      }
    }
    return weeks;
  }, 

  // 获取月历史数据的下拉框选项内容
  // start - 如果是历史页面，start表示开始日期。否则start为undefined
  getMonthOptions: function(start) {
    var ops = [];
    var date = new Date();
    var startStr;
    var endStr;
    var strs = [];
    strs[0] = "<option value='";
    strs[2] = "'>";
    strs[4] = "</option>";
    var count = (date.getFullYear() - this.firstDate.getFullYear() - 1) * 12 + date.getMonth() 
        + (11 - this.firstDate.getMonth() + (this.firstDate.getDate()==1 ? 1 : 0));
    var size = Math.min(count, 12); // 最多只显示12个月
    for (var i=0; i<size; i++) {
      date.setDate(0); // 上个月最后一天
      endStr = dateutil.formatDate(date, dateutil.FORMAT_DATE_LONG);
      date.setDate(1); // 上个月第一天
      startStr = dateutil.formatDate(date, dateutil.FORMAT_DATE_LONG);
      strs[1] = start == startStr ? startStr + "_" + endStr + "' selected='selected" : startStr + "_" + endStr;
      strs[3] = dateutil.formatDate(date, dateutil.FORMAT_MONTH_CN);
      ops[i] = strs.join("");
    }
    return ops.join("");
  }, 
  
  // 获取月历史数据选项内容
  // 格式为：[{text:"2010年02月", startDate:"2010-02-01", endDate:"2010-02-28"}, ...]
  getMonths: function() {
    var date = new Date();
    var text;
    var startStr;
    var endStr;
    var months = [];

    
    var count = dateutil.calcMonths(this.firstDate,date);
    var size = Math.min(count, 12); // 最多只显示12个月
    
    date.setMonth(date.getMonth()+1);
    for (var i=0; i<size; i++)
    {
      date.setDate(0); // 上个月最后一天
      endStr = dateutil.formatDate(date, dateutil.FORMAT_DATE_LONG);
      date.setDate(1); // 上个月第一天
      
      startStr = dateutil.formatDate(date, dateutil.FORMAT_DATE_LONG);
      text = dateutil.formatDate(date, dateutil.FORMAT_MONTH_CN);
      
      
      months[i] = {"text": text, "startDate": startStr, "endDate": endStr};
    }
    return months;
  },
  /**
   * 获取季度
   */
  getQuarters:function()
  {
	  
	  var quarters = [];
	  //当前时间
	  var nowDate = new Date();
	  
	  // 求总季度数
	  var count =((nowDate.getFullYear() - this.firstDate.getFullYear() +1) * 4);
		  
	// 当前月
	  var currMonth = nowDate.getMonth()+1;
	  
	  if(currMonth<=3)   //1-3,当现在是第一季度的时候，后面还有三个季度没过，所以从总季度数 - 3
		  	count = count-3;
       else if(currMonth>3 && currMonth<=6)  // 4-6
    	   count = count-2; 
       else if(currMonth>6 && currMonth<=9)   //7-9
    	   count = count-1;
      // else if(currMonth>9)   //10-12
    	   //count = count-0;
	  
	  
	 var year = this.firstDate.getFullYear();
	  
	 var q=1;
	 for(var i=1; i<=count; i++)
	 {
		 var dateObj = this.getQuarterFirstAndLastDay(year,q);
		  quarters[i-1] = {"text":year + "年,第 " + q+" 季度","startDate": dateObj.startDate, "endDate": dateObj.endDate};
		  q++;
		  if(i %4 ==0)
		  {
			  year++;
			  q=1;
		  }
	 }
	 
	 return quarters;
  },
  
  //根据时间获取季度的第一天
  getQuarterFirstDay:function(Nowdate)
  {
	  if(Nowdate.getMonth()<3)   
          return new Date(Nowdate.getYear(),0,1);  

       else if(Nowdate.getMonth()>2 && Nowdate.getMonth()<6)   
          return new Date(Nowdate.getYear(),3,1);   

       else if(Nowdate.getMonth()>5 && Nowdate.getMonth()<9)   
          return new Date(Nowdate.getYear(),6,1);  

       else if(Nowdate.getMonth()>8)   
          return new Date(Nowdate.getYear(),9,1); 
  },
  
//根据时间获取季度的最后一天
  getQuarterLastDay: function (Nowdate)  
  {  

      if(Nowdate.getMonth()<3)   
         return new Date(Nowdate.getYear(),2,31);  

      else if(Nowdate.getMonth()>2 && Nowdate.getMonth()<6)   
         return new Date(Nowdate.getYear(),5,30);  

      else if(Nowdate.getMonth()>5 && Nowdate.getMonth()<9)   
         return new Date(Nowdate.getYear(),8,30);  

      else if(Nowdate.getMonth()>8)   
         return new Date(Nowdate.getYear(),11,31);  

  },
  
  //根据年份和季度数获取该季度的第一天和最好一天
  getQuarterFirstAndLastDay:function(year,quarter)
  {
	  var dateObj=null;
	  
	  var startDateStr;
	  var endDateStr;
	  
	  switch(quarter)
	  {
		  case 1: //第一季度
		  {
			  startDateStr=dateutil.formatDate(new Date(year,0,1), dateutil.FORMAT_DATE_LONG);
			  endDateStr=dateutil.formatDate(new Date(year,2,31), dateutil.FORMAT_DATE_LONG);
			  break;
		  }
		  case 2: //第二季度
		  {
			  startDateStr=dateutil.formatDate(new Date(year,3,1), dateutil.FORMAT_DATE_LONG);
			  endDateStr=dateutil.formatDate(new Date(year,5,30), dateutil.FORMAT_DATE_LONG);
			  break;
		  }
		  
		  case 3: //第三季度
		  {
			  startDateStr=dateutil.formatDate(new Date(year,6,1), dateutil.FORMAT_DATE_LONG);
			  endDateStr=dateutil.formatDate(new Date(year,8,30), dateutil.FORMAT_DATE_LONG);
			  break;
		  }
		  
		  case 4: //第四季度
		  {
			  startDateStr=dateutil.formatDate(new Date(year,9,1), dateutil.FORMAT_DATE_LONG);
			  endDateStr=dateutil.formatDate(new Date(year,11,31), dateutil.FORMAT_DATE_LONG);
			  break;
		  }
	  }
	  
	  dateObj ={"startDate": startDateStr, "endDate": endDateStr};
	  
	  return dateObj;
  },
  
  /**
   * 获取前10年
   */
  getYears:function()
  {
	  
	  var years = [];
	  var endYear = this.firstDate.getFullYear();
	  
	  var j=0;
	  for(var i=10; i>=0; i--)
	  {
		  var startDate =dateutil.formatDate(new Date(endYear,0,01), dateutil.FORMAT_DATE_LONG);
		  var endDate =dateutil.formatDate(new Date(endYear,11,31), dateutil.FORMAT_DATE_LONG);
		  years[j++] = {"text":endYear+"年","startDate":startDate, "endDate": endDate};
		  
		  endYear--;
	  }
	  return years;
	  
  },
  

	/**
	 * 获取月份,格式为：[{text:"2010年02月", value:"2010-02"} ...]
	 */
	getMonthsVal : function() {
		var date = new Date();
		var text;
		var value;
		var months = [];
		
		var count = dateutil.calcMonths(this.firstDate, date);
		var size = Math.min(count, 12); // 最多只显示12个月

		date.setMonth(date.getMonth() + 1);
		for ( var i = 0; i < size; i++) {
			date.setDate(0); // 上个月最后一天
			date.setDate(1); // 上个月第一天
			
			text = dateutil.formatDate(date, dateutil.FORMAT_MONTH_CN);
			value = dateutil.formatDate(date, dateutil.FORMAT_MONTH_SHORT);
			months[i] = {
				"text" : text,
				"value" : value
			};
		}
		return months;
	},
  
	/**
	 * 获取季度,格式为：[{text:"2010年第1季度", value:"2010|02"} ...]
	 */
	getQuartersVal : function() {
		var quarters = [];
		// 当前时间
		var nowDate = new Date();
		// 求总季度数
		var count = ((nowDate.getFullYear() - this.firstDate.getFullYear() + 1) * 4);
		// 当前月
		var currMonth = nowDate.getMonth() + 1;

		if (currMonth <= 3) // 1-3,当现在是第一季度的时候，后面还有三个季度没过，所以从总季度数 - 3
			count = count - 3;
		else if (currMonth > 3 && currMonth <= 6) // 4-6
			count = count - 2;
		else if (currMonth > 6 && currMonth <= 9) // 7-9
			count = count - 1;

		var year = this.firstDate.getFullYear();
		var q = 1;
		for ( var i = 1; i <= count; i++) {
			quarters[i - 1] = {
				"text" : year + "年,第 " + q + " 季度",
				"value" : year + "|" + q
			};
			q++;
			if (i % 4 == 0) {
				year++;
				q = 1;
			}
		}

		return quarters;
	},
	  
	/**
	 * 获取前十年,,格式为：[{text:"2010年", value:"2010"} ...]
	 */
	getYearsVal : function() {
		var years = [];
		var endYear = this.firstDate.getFullYear();
		var j = 0;
		for ( var i = 10; i >= 0; i--) {
			years[j++] = {
				"text" : endYear + "年",
				"value" : endYear
			};
			endYear--;
		}
		return years;
	}
  
  
};

//historytime.init("gz"); // 默认城市为广州