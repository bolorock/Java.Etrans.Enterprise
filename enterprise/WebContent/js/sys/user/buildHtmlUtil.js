var htmlUtil = {
	htmlStr:"",
	buildTable:function(){
		htmlStr+="";
	},
	buildTr:function(){
		
	},
	buildTd:function(){
		
	},
	buildCheckBox:function(){
		
	},
	buildTdText:function(){
		
	},
	buildHtml:function(data){
		$('body').append("<div id='test' style='display:none'><div id='roleDlg'></div></div>");
		$('#roleDlg').empty();
	    var str = "<table id='roleList'>";	
		var appendStr;
		for(i=0;i<data.length;i++){
			appendStr="";
			if(data[i].roleHas!=null){
				appendStr="checked='true'";
			}
			 str += "<tr>";
			 str += "<td align=center style='font:13px'><input type='checkbox' value='"+data[i].ID+"' name='roleId'id='roleId' "+appendStr+"/></td>";
			 str += "<td align=center style='font:13px' align='left'>" + data[i].Name + "</td>";
			 str += "</tr>";
		}
		return str += "</table>";
	}
};