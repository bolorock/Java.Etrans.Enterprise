$(function() {
	initGrid();
});
//当前页
var currentPage = 1;
var totalCountAll=0;
var totalCount=0;
function initGrid(){
	
	$.ajax({
		url:"systemNotice/getSystemNoticeHistory.action",
		type:"POST",
		dataType:"json",
		async :false,
		data: {"currentPage":currentPage},
		success:function(data){
			if(currentPage==1)$("#historyPage").html('');
			var stringStr="";
		$(data).each(function(i,n){
			try{
				totalCount++;
				var title=n.title;
				var contents=n.contents;
				var releaseDate=n.releaseDate;
				var id=n.id;
				totalCountAll = n.totalcount;
				var  cons=contents.split("\n");
				for(var j=0; j<cons.length; j++){
					contents=contents.replace('\n','</br>');
				}
				var count=cons.length;
				if(count>5){
					var timeHeight=count*30+20;
					var imgHeight=30*count;
					var contentHeight=30*count-40;
					
				}else if(count==1){
					var timeHeight=80;
					var imgHeight=60;
					var contentHeight=20;
				}else{
					var timeHeight=count*40+20;
					var imgHeight=40*count;
					var contentHeight=40*count-40;
				}
				 stringStr+="<div style='width: 80px; height:"+timeHeight+"px; float:left; color: navy; text-align: center; color:#46a4d7;' >"+
				releaseDate
      	   +"</div><div style='width: 40px; height:"+timeHeight+"px; float:left; background-color: #acdbf6; text-align: center;'><img  src='Images/systemnotileHistory.jpg'></div>"
      	   +"<div style='width:370px; float:right; height: "+imgHeight+"px; background-color: #3394c9;  margin-right: 20px; margin-bottom: 20px;'>"+
      	     "<div style='text-align: center; width: 370px; height: 25px;' class='divlable'>"+
                "<label id='notileTitle' style='text-align: center; width:360px; overflow:visible height: 25px;' class='titilefont'>"+title+"</label>"+
            "</div>"+
			    "<div style='text-align: left; width: 370px; height:"+contentHeight+"px; overflow-x:hidden;overflow-y:hidden;'>"+
			        "<div id='notileContents' class='box01' style='width: 370px; height: "+contentHeight+"px;"+
			        "overflow-y:hidden; overflow-x:hidden; padding-left: 20px;'>"+contents+"</div>"+
			   " </div></div>"
				
			         
			}catch(e){
				alert(e);
			}
		});	
		  
		  if(totalCountAll>5*currentPage){
				$("#moreNotice").html('<a href="javascript:getMoreMessage()">查看更多(还剩'+(totalCountAll-totalCount)+')...</a>');
			}else{
				$("#moreNotice").html('');
			}
		  $("#historyPage").append(stringStr); 
	   }
		
	});
    
};

/***查询更多信息**/
function getMoreMessage(){
	currentPage++;
	initGrid();
}
/**
 * 查询方法
 */
function toSearch(){
	
		var title = $("#sname").val();
		//查询参数
		var params = [{
			name : 'title',
			value : title
		}];
		// 重置表格的某些参数
		$("#systemNoticeList").flexOptions({
				newp : 1,// 设置起始页
				params : params// 设置查询参数
			}).flexReload();// 重新加载
	
	
}
