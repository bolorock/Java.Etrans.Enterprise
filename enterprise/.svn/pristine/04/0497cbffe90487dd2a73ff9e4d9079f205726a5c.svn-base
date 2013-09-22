//地图搜索
QueryCmd = Class.create(); 
QueryCmd.prototype = Object.extend(new Abstract.Command(), {
    alt: '地图搜索',
    selected: false ,
    cmd_clickHandler: function(cmd, model, mapDiv){
        if(MapContainer){
            this.tip = new ResultTipinfo(Util.getValueOfNoPX(MapContainer.style.width)-210,10,200,100);
	        this.txtInputId = Util.createUniqueID('txt_');
            this.btnInputId = Util.createUniqueID('btn_');
    
	        var html = '<div align="center"><input id="'+this.txtInputId+'" size="20" type="text" value="玉阁"></input><input id="'+this.btnInputId+'" type="button" value="搜索"></input></div>';
	        this.tip.setInfo(html);
	        this.tip.setToDiv(MapContainer);
	        Event.observe($(this.btnInputId), "click", this.cmd_clickAction.bindAsEventListener(this));	    
        }
    },
    
    cmd_clickAction:function(){
        AjaxMonitor.Search("Query",$(this.txtInputId).value);
        //this.tip.hideTip();
    }    
});

//路径规划
RouteCmd = Class.create(); 
RouteCmd.prototype = Object.extend(new Abstract.Command(), {
    alt: '路径规划',
    selected: false ,
    cmd_clickHandler: function(cmd, model, mapDiv){
        if(routerPlan.checkJun()){
            AjaxMonitor.RoutePlan('Router',routerPlan.getJuns(),routerPlan.getBarriers());
            routerPlan.resetRouter();
        }else{
            alert("请设置路径规划条件!");
        }
    }   
});
