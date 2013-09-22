Map = Class.create();
Map.prototype = {
    
    mapTypes: new Object(),
    currentMapType:null,
    
    initialize: function(container){
        this.container = container;
        this.container.style.backgroundImage = 'url(' + ImageBaseDir + 'iaspec_bottom.png)';
        this.mapId = Util.createUniqueID();
        this.containerWidth=Util.getValueOfNoPX(this.container.style.width);
        this.containerHeight=Util.getValueOfNoPX(this.container.style.height);
        this.model = new MapModel(this.mapId);
        this.mapControl = new MapControl("map_" + this.mapId, this.container);        
        this.model.controls[this.mapControl.id] = this.mapControl;
        var scale = new ScaleControl(container);
        this.model.controls[scale.id] = scale;
    },
    
    getContainer: function(){
        return this.container;
    },
    
    setCenter: function(centerPoint, level){
        this.model.defaultCenterPoint = centerPoint;
        this.model.defaultLevel = level;
        this.model.setViewCenterCoord(centerPoint.getCoord());
        this.model.setZoom(new Zoom(level));
        this.mapControl.paint(this.model, true);
        this.level = level;
        Event.observe(this.mapControl.mapDiv, "mousewheel", this.map_mousewheel.bindAsEventListener(this));
    },
    
    map_mousewheel: function(e){
        
        var level = this.model.getZoom().getLevel();
        if(window.event.wheelDelta == 120 && level < MaxZoomLevel)
        {
            level += 1;
	        this.model.setZoom(new Zoom(level));
	        this.mapControl.paint(this.model, true);
        }
        else if(window.event.wheelDelta==-120 && level>1)
        {
            level -= 1;
	        this.model.setZoom(new Zoom(level));
	        this.mapControl.paint(this.model, true);
        }
        $('sliderbar_'+this.model.getId()).parentNode.style.top = ((MaxZoomLevel-level)*12+6)+"px";
    },    
    
    addMapType: function(type, isCurrent){
        if(isCurrent){
            this.model.setCurrentMapType(type);
        }
       // alert("addMaptype typeId:"+type.typeId);
        this.model.mapTypeIds.push(type.typeId);
        this.model.mapTypes[type.typeId] = type;
        type.paint(this.model, $('map'));
    },
    
    addOverlay: function(layer){		
        layer.setToMap(this.mapControl.mapDiv, this.model,null);
    },
    
    addControl: function(control){
        control.paint(this.model);
        this.model.controls[control.id] = control;
    },
    
    addToolBar: function(toolbar){
        toolbar.setMapModel(this.model);
        toolbar.registerEventToMap(this.mapControl.mapDiv);
    },    
    removeOverlay:function(layer){
    	try{
    		layer.remove();
    	}catch(e){}
    },
    clearOverlays:function(){
    	if (this.model.overlays) {
            try{
            	var keys = new Array();
                keys = this.model.overlays.keys();
                for(var i=0; i<keys.length; i++){
                    this.mapDiv.removeChild(this.model.overlays.get(keys[i]).div);
                    
                }
//            	for (var i=0;i<this.model.overlays.length;i++){
//            		//this.model.overlays.without(this);
//            		this.mapDiv.removeChild(this.model.overlays[i].div);
//            	}
            	this.model.overlays.clear();
			}catch(ex){
			}
		}
    },
    isInBound:function(coord){
    	if (this.model.getZoom().getViewBound(this.container).isWithin(coord))
    		return true;
    	else
    		return false;
    },
    panTo:function(coord){
    	//alert("in panTo");
    	var centerCoord=this.model.getViewCenterCoord();
    	//alert("panto,centerCoord:"+centerCoord.x/1e16+";"+centerCoord.y/1e16+";");
    	var viewBound=this.model.getZoom().getViewBound(this.container).clone(centerCoord);
    	//������ʾ���ڣ����ƶ�
    	//alert("panto,viewBound:"+viewBound.getMinX()/1e16+";"+viewBound.getMaxX()/1e16+";"+viewBound.getMinY()/1e16+";"+viewBound.getMaxY()/1e16);
    	//alert("panto:coord:"+coord.x/1e16+";"+coord.y/1e16);
    	if (viewBound.isWithin(coord)){ 
    		return;
    	}
    	var deltaX=0;
    	if (viewBound.getMaxX()<coord.x)
    		deltaX=coord.x-viewBound.getMaxX();
    	else if (viewBound.getMinX()>coord.x)
    		deltaX=coord.x-viewBound.getMinX();
    	var deltaY=0;
    	if (viewBound.getMaxY()<coord.y)
    		deltaY=coord.y-viewBound.getMaxY();
    	else if (viewBound.getMinY()>coord.y)
    		deltaY=coord.y-viewBound.getMinY();
    	//alert("panTo,deltaX:"+deltaX+";centercoord.x:"+centerCoord.x);
    	
    	var newcenterCoord=new Coordinate(centerCoord.x-deltaX,centerCoord.y+deltaY);
    	//alert("panto,newcenterCoord:"+newcenterCoord.x/1e16+";"+newcenterCoord.y/1e16+";");
    	this.model.setViewCenterCoord(newcenterCoord);
    	
    	this.mapControl.paint(this.model,true);
    }
};

