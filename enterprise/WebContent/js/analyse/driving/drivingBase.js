$(function() {
});


///////////////////////////////////////////////////////列表初始化begin/////////////////////////////////////////////////////////

/**
* 列表查询方法
*/
function toSearch(){
	
	var params = getParam();
	
	// 重置表格的某些参数
	$("#recordList").flexOptions({
			newp : 1,// 设置起始页
			params : params// 设置查询参数
		}).flexReload();// 重新加载
}

////////////////////////////////////////////////////////列表初始化end/////////////////////////////////////////////////////


/////////////////////////////////////////////////////////辅助/////////////////////////////////////////////////////////////
//校验是否整数
function IsInteger(snum){
	var slen;
	slen=snum.length;
	for (i=0; i<slen; i++){
		cc = snum.charAt(i);
		if (cc <"0" || cc >"9")
		{
			flag=false;
			return false;
		}
	}
	flag = true;
	return true;
}

/**
 * MAP类
 * var params = new QueryParam();
 * params.put("param1","value1");
 * params.put("param2",Object.toJSON());
 */
QueryParam = function(jsonStr){
this.isConvert = jsonStr == null;
this.values = jsonStr != null ? jsonStr : new Array();
/**
 *	设置参数值

 */
this.put = function(paramName,paramValue){
	this.values[paramName] = paramValue;
};

/**
 *	根据参数取值

 */
this.get = function(paramName){
	return typeof(this.values[paramName]) != "undefined" ? this.values[paramName] : "";
};

this.containsKey = function(paramName){
	for (var key in this.values){
		if (key == paramName){
			return true;
		}
	}
	return false;
};

this.clear = function(){
	this.values = new Array();
};

this.toStr = function(){
	if (this.values != null){
		if(this.isConvert){
			var jstr = "";
			for (var key in this.values){
				if(key.indexOf("@")>-1){
					var val = this.values[key];
					
					if(val!=null && val.length>0){
						var strVal = this.values[key];
						if(IsInteger(strVal)){
							strVal = "'"+this.values[key]+"'";
						}
							
						jstr += key.substr(1) + "=" + strVal + ",";
					}else{
						jstr += key.substr(1) + "='',";
					}
				}
			}
			if (jstr != ""){
				jstr = jstr.substr(0,jstr.length - 1);
				return jstr;
			}
		}else{
			
			return this.values;
		}
	}
	return "{}";
};
};