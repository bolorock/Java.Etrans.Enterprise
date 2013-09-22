AjaxMonitor = new Object();
AjaxMonitor.Search = function(id,property){
    var pars = "id="+id+"&keyword="+encodeURI(property);
    var url = "./req/post.aspx";
    new AjaxProxy(
        url,
        pars,
        AjaxResult.cbSearchSuccess,
        AjaxResult.cbFail,
        2
    );
};

AjaxMonitor.RoutePlan = function(id,juns,barriers){
    var pars = "id="+id+"&juns="+encodeURI(juns)+"&barriers="+encodeURI(barriers);
    var url = "./req/post.aspx";
    new AjaxProxy(
        url,
        pars,
        AjaxResult.cbRouteSuccess,
        AjaxResult.cbFail,
        2
    );
};

AjaxMonitor.getTile = function(id,url){
    var pars = "id="+id+"&"+url;
    var url = "./req/post.aspx";
    new AjaxProxy(
        url,
        pars,
        AjaxResult.cbTileSuccess,
        AjaxResult.cbFail,
        2
    );
};

//路径规划条件
Router = Class.create();
Router.prototype = {
    initialize: function(){
	    this.juns = new Array();
	    this.barriers = new Array();
    },
    
    addJunPoint: function(point){
        this.juns.push(point);
    },
    
    addBarrierPoint: function(point){
        this.barriers.push(point);
    },
    
    resetRouter: function(){
        this.juns.clear();
        this.barriers.clear();
    },
    
    checkJun: function(){
        if(this.juns.length>=2) return true;
        return false;
    },
    
    getJuns: function(){
        var pts = "";
        for(var i=0;i<this.juns.length;i++){
            if(i!=this.juns.length-1) pts += this.juns[i].x + "," + this.juns[i].y + ";";
            else pts += this.juns[i].x + "," + this.juns[i].y;
        }
        return pts;
    },
    
    getBarriers: function(){
        var pts = "";
        for(var i=0;i<this.barriers.length;i++){
            if(i!=this.barriers.length-1) pts += this.barriers[i].x + "," + this.barriers[i].y + ";";
            else pts += this.barriers[i].x + "," + this.barriers[i].y;
        }
        return pts;
    }
};
var routerPlan = new Router();

