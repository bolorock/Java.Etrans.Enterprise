$(function() {
	
	$("#terminalId").empty();
	initAjaxSelect("terminalId","sys/initTerminals.action");
	
	$('#cancelBtn').bind('click', closeDialog);
	
	$.ajax({
	    type : "POST",
	    url : "sys/getVehicleById.action",
	    data : {id:vehicleId},
	    dataType : "JSON",
	    success : function(data) {
	    	if(data.code == '1'){
	    		var vInfo = data.data;
	    		if(vInfo){
	    			
	    			$("#vehicleId").val(vInfo.ID);
	    			$("#registrationNo").val(vInfo.RegistrationNO);
	    			
	    			var selectedEls = $("#terminalId option[value='" + vInfo.TerminalID + "']").length;
	    			if(selectedEls == 0){
	    				$("#terminalId").get(0).options.add(new Option(vInfo.commNo,vInfo.TerminalID));
	    			}
	    			$("#terminalId").val(vInfo.TerminalID);
	    			
	    			$('#submitBtn').bind('click',{terminalId:vInfo.TerminalID}, doChange);
	    		}
	    	}else{
	    		showError();
	    	}
	    },
	    error : function(data) {
	    	showError();
	    }
    });
	
});

/**
 * 关闭弹出窗
 */
function closeDialog(){
	parent.closeDialog();
}

/**
 * 重新加载表格数据
 */
function gridReload(){
	parent.gridReload();
}

/**
 * 更换终端
 * @param event
 */
function doChange(event){
	var oldTerminalId = event.data.terminalId;
	var newTerminalId = $("#terminalId").val();
	if(oldTerminalId && newTerminalId && newTerminalId==oldTerminalId){
		closeDialog();
	}else{
		$.ajax({
		    type : "POST",
			url : "sys/changeTerminal.action",
			data : {
				vehicleId : vehicleId,
				oldTerminalId : oldTerminalId,
				newTerminalId : newTerminalId
			},
		    dataType : "JSON",
		    success : function(data) {
		    	if(data.code == '1'){
		    		closeDialog();
		    		gridReload();
		    	}else{
		    		showError();
		    	}
		    },
		    error : function(data) {
		    	showError();
		    }
	    });
	}
}
