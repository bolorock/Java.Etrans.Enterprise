MapModel = Class.create();
MapModel.prototype = {
    OvContainer:null,
    controls: new Object(),
    ovId: null,
    defaultCenterPoint: null,
    defaultLevel: null,
    overlays: null,
    traceIndex: 0,
    traces: new Object(),
    curIndex:-1,
    mapTypeIds: new Array(),
    
    initialize: function(id){
        this.modelId = id;
        this.mapTypes = new Object();
    },
    
    getZoom: function(){
        return this.zoom;
    },
    
    setZoom: function(zoom){
        this.zoom = zoom;
    },
    
    setViewCenterCoord: function(centerCoord){
        this.viewCenterCoord = centerCoord;
    },
    
    getViewCenterCoord: function(){
        return this.viewCenterCoord;
    },
    
    getViewBound: function(){
        return this.viewBound;
    },
    
    setViewBound: function(bound){
        this.viewBound = bound;
    },
    
    setCurrentMapType: function(type){
        this.currentMapType = type;
    },
    
    getCurrentMapType: function(){
        return this.currentMapType;
    },
    
    getId: function(){
        return this.modelId;
    }, 
    
    getOvContainer: function(){
        return this.OvContainer;
    },
    
    getOvMapDiv: function(){
        return this.OvContainer.childNodes[0];
    },
    
    setOvContainer: function(ovContainer, id){
        this.OvContainer = ovContainer;
        this.ovId = id;
    },    
    
    getOvModel: function(){        
        var newModel = new MapModel(Util.createUniqueID());
        newModel.setViewCenterCoord(this.getViewCenterCoord());
        if(this.getZoom().getLevel()-2<=1)
            ovLevel = 1;
        else
            ovLevel = this.getZoom().getLevel()-2;
        var zoom = new Zoom(ovLevel);       
        newModel.setZoom(zoom);
        newModel.setCurrentMapType(this.getCurrentMapType());
        newModel.setViewBound(zoom.getViewBound(this.OvContainer));
        return newModel;
    },
    
    reset: function(mapDiv, elm){
        this.setViewCenterCoord(this.defaultCenterPoint.getCoord());
	    this.setZoom(new Zoom(this.defaultLevel));
	    this.controls[mapDiv.id].paint(this, true);
		this.controls[this.ovId].paint(this);
		elm.style.top = ((MaxZoomLevel - this.defaultLevel) * 12 + 6) + "px"
		//alert(elm.style.top );
    },
    
    clearOverLayers: function(mapDiv){//清除
    	
        if(this.overlays){
        	var keys = new Array();
            keys = this.overlays.keys();
            for(var i=0; i<keys.length; i++){
            	//alert('clear'+i)
            	this.overlays.get(keys[i]).remove();
            }         
            this.overlays.clear();
        }
        
     
    }  
    
};


