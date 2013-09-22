$(function(){
	initData();
	
});

function initData() {
	$.ajax({
		url:"systemNotice/findSystemNotice.action",
		type:"POST",
		dataType:"json",
		success:function(data){
		$(data).each(function(i,n){
			try{
				var title=n.title;
				var contents=n.contents;
				var id=n.id;
				$("#notip").val(id);
				var  cons=contents.split("\n");
			    document.getElementById("notileTitle").innerText =title;
			    document.getElementById("notileContents").innerText =contents;

			}catch(e){
				alert(e);
			}
		});	
		
	   }
		
	});
}

function noShow(){
	var id=$("#notip").val();
	if(document.getElementById("notip").checked){
		doisDefault();
	}
	
}


/**设置系统*/
function doisDefault(){
	    var isShowNotice=1;
		$.ajax({
		    type : "POST",
		    url : "systemNotice/SetSystemNotice.action",
		    data : {isShowNotice:isShowNotice},
		    dataType : "TEXT",
		    success : function(data) {
		    	if(data=="SUCCESS"){
		    		 window.parent.closeDialog();
		    	}else{
		    	}
		    },
		    error : function(data) {
		    	showError();
		    }
	    });
}
