/************************************************************************************
 * 
 * 名称：文本框自动补全js文件
 * 创建者：lujunyong
 * 日期：2013-4-26
 * 
 ***********************************************************************************/

/**加载**/
$(function() {
	
	//定时器
//	setTimeout(divHideOrShow,5000)//单位毫秒
	
});


/**组件**/
var completeDiv;//整体【div】 组件
var inputField; //输入的类容【文本框】 组件
var nameTable;//显示返回内容的【表格】 组件
var nameTableBody;//显示返回内容的【表格内容】 组件

/**找组件【实例化组件】**/
function initVars(names,name_table,popup,name_table_body) {
    inputField = document.getElementById(names);            
    nameTable = document.getElementById(name_table);
    completeDiv = document.getElementById(popup);
    nameTableBody = document.getElementById(name_table_body);
}

/**
 * 输入框补全
 * names 输入的类容【文本框】 组件ID
 * name_table 显示返回内容的【表格】 组件ID
 * popup 整体【div】 组件ID
 * name_table_body 显示返回内容的【表格内容】 组件ID
 */
function doAutoComplete(names,name_table,popup,name_table_body){
	initVars(names,name_table,popup,name_table_body);
	
	/**输入框有值**/  
    if (inputField.value.length > 0) { 
    	/**访问后台**/
    	$.ajax({
    			    type : "POST",
    			    url : "autoComplete/initAutoComplete.action",
    			    data : {names:inputField.value},
    			    dataType : "JSON",
    			    async:false,
    			    success : function(data) {
//    			    	alert("返回数据："+data);
    			    	//有数据返回
    			    	if(null!=data&&data.length>0){
    			    		setNames(data);
    			    	}else{
    			    		clearNames();
    			    	}
    			    },
    			    error : function(data) {
    			    	showError();
    			    }
    		    });
    } else {
        clearNames();
    }
    
}

/**赋值给table**/
function setNames(data) { 
	 clearNames();
	 //设置样式
     setOffsets();
     /**循环添加数据**/
     var row, cell, txtNode;
     for(var i = 0; i<data.length;i++){
 		var nextNode = data[i];  
        row = document.createElement("tr");
        cell = document.createElement("td");
        
        cell.onmouseout = function() {this.className='mouseOverA';};
        cell.onmouseover = function() {this.className='mouseOutA';};
        cell.setAttribute("bgcolor", "#FFFAFA");
//        cell.setAttribute("bgcolor", "#508AC5");
        cell.setAttribute("border", "0");
        cell.setAttribute("fontSize", "10");
        cell.onclick = function() { populateName(this); } ;                                   
        
        txtNode = document.createTextNode(nextNode);
        cell.appendChild(txtNode);
        row.appendChild(cell);
        nameTableBody.appendChild(row);
 	}
     
}

/**框赋值给文本框**/
function populateName(cell) {
//	alert("给文本框赋值"+cell);
	inputField.value = cell.firstChild.nodeValue;
	clearNames();
}

/**清空**/
function clearNames() {
	if(nameTableBody==null){return;}
    var ind = nameTableBody.childNodes.length;
    for (var i = ind - 1; i >= 0 ; i--) {
         nameTableBody.removeChild(nameTableBody.childNodes[i]);
    }
    completeDiv.style.border = "none";
    nameTable.style.border = "none";
}

/**隐藏div**/
function hideDivs(divID) {
	$('#'+divID).hide();
	
}
/**显示div**/
function showDivs(divID) {
	$('#'+divID).show();
}

/************设置样式begin*********/
function setOffsets() {
    var end = inputField.offsetWidth; //对象的可见宽度
    var left = calculateOffsetLeft(inputField);
    var top = calculateOffsetTop(inputField) + inputField.offsetHeight;

//    completeDiv.style.border = "1px solid #DFDFDF";
    nameTable.style.border= "1px solid #DFDFDF";
//    completeDiv.style.border = "1px solid blue"; 
    completeDiv.style.left = (left+1) + "px";
    completeDiv.style.top = top + "px";
    completeDiv.style.zIndex = 9999;
    nameTable.style.width = (end-2) + "px";
}

function calculateOffsetLeft(field) {
  return calculateOffset(field, "offsetLeft");
}

function calculateOffsetTop(field) {
  return calculateOffset(field, "offsetTop");
}

function calculateOffset(field, attr) {
  var offset = 0;
  while(field) {
    offset += field[attr]; 
    field = field.offsetParent;
  }
  return offset;
}
/************设置样式end*********/

/************定时器*********/
var resultInfo = "5";
function divHideOrShow()
{	
	resultInfo -= 1;
	setTimeout(divHideOrShow,5000)  //单位毫秒
}

/**docement点击事件，清除自动补全div**/
function onclickAll(){
	clearNames();
}





