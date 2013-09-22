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
	  getWeeks2Date: function() {
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
	    
	    //遗留问题 ，2012多了一周，现做以下处理
	    lastWeekIndexes[2]=104; 
	                    
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
	        	weeks[weekCount++] = {"text": "第" + j + "周,"+startStr + "至" + endStr ,"value" :startDate.getFullYear() + "@" + j+"@" +startStr+"@"+endStr};
	        }else{
	        	weeks[weekCount++] = {"text": "第" + j + "周 ,"+startStr + "至" + endStr ,"value" :startDate.getFullYear() + "@" + j+"@" +startStr+"@"+endStr};
	        }
	        startDate.setDate(startDate.getDate() - 7); // 往前一周
	        endDate.setDate(endDate.getDate() - 7);
	      }
	    }
	    return weeks;
	  } 
	  
	
	  
};

//historytime.init("gz"); // 默认城市为广州