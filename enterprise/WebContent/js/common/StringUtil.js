/**
 * 字符串转ASCII
 */
function stringToAsicc(message) {
	var result = "";

	$.ajax( {
		type : "POST",
		async : false,
		url : "command/getByteHex.action",
		data : "toASICCString=" + encodeURIComponent(message),
		success : function(msg) {
			result = msg;
		}
	});
	return result;
}

function StringLength(str)
{
    // replace将符合此正则的字符串替换成指定字符 然后在计算长度
    return str.replace(/[^\x00-\xff]/g,"xx").length;
}

//删除左右两端的空格   
function lrtrim(str){   
 return str.replace(/(^\s*)|(\s*$)/g, "");   
}  

 function StringToUTC(DateStr) { 
    var date = DateStr.substring(0,10).split('-');   
    var time = DateStr.substring(11,19).split(':');  
    var utcString=Date.UTC(date[0],date[1]-1,date[2],time[0],time[1],time[2]);
    return utcString;
} 
