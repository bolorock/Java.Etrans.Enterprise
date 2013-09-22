//Map Overview
OvMap = Class.create();
OvMap.prototype = Object.extend(new Abstract.Control(), {
    initialize: function(container){
         this.container = container;
         this.drawOvContainer(container);
    },
    
    paint: function(model){
        this.model = model;
        this.model.setOvContainer(this.ovMapDiv, this.id);
        this.ovModel = this.model.getOvModel();
        var curZoom = this.ovModel.getZoom();
        var viewBound = curZoom.getViewBound(this.ovMapDiv).clone(model.getViewCenterCoord());
        var mapBound = curZoom.realMapBound;
        var deltaX = (mapBound.getMinX() - viewBound.getMinX()) * (curZoom.getTileCols() * TileSize / mapBound.getWidth());
        var deltaY = (viewBound.getMaxY() - mapBound.getMaxY()) * (curZoom.getTileRows() * TileSize / mapBound.getHeight());
        this.ovDiv.style.left = deltaX + "px";
        this.ovDiv.style.top = deltaY + "px";
        this.ovDiv.style.width = (curZoom.getTileCols() * TileSize) + "px"
        this.ovDiv.style.height = (curZoom.getTileRows() * TileSize) + "px"     
        
        this.loadTiles(this.ovModel, this.ovMapDiv, this.ovDiv, false);
        this.container.appendChild(this.ovMapDiv);
    },
    
    drawOvContainer: function(container){
        var containerWidth = Util.getValueOfNoPX(container.style.width);
        var containerHeight = Util.getValueOfNoPX(container.style.height);
        
        var width = Util.getValueOfNoPX(container.style.width)/5;
        var height = Util.getValueOfNoPX(container.style.height)/5;
        var x = width/2-width/4/2;
        var y = height/2-height/4/2;
        
        var left = containerWidth-width+1;
        var top = containerHeight-height+1;
        
        this.id = Util.createUniqueID('Ov_');
        this.ovMapDiv = Util.createDiv(this.id,left,top,width,height,null,'absolute','3px ridge blue');//缩略图容器
        this.ovMapDiv.style.overflow = 'hidden'
        this.ovMapDiv.style.backgroundImage = 'url(' + ImageBaseDir + 'iaspec_bottom.png)';
        
        this.ovDiv = Util.createDiv(Util.createUniqueID('Ov_Map_'));
        this.ovDiv.style.position = "relative";
        this.ovDiv.style.zIndex = 0; 
        this.ovMapDiv.appendChild(this.ovDiv);
        this.registerEvent(this.ovDiv, 'ov_', 'mousedown,mousemove,mouseup,click');
        
        
        this.rectDiv = Util.createDiv(Util.createUniqueID('rect_'),x,y,width/4,height/4,null,"absolute","2px solid blue");
        this.rectDiv.style.backgroundColor = "white";
        this.rectDiv.style.filter = "alpha(opacity=40)"; 
        this.rectDiv.style.opacity = "0.40";
        this.rectDiv.style.fontSize = "1px"
        this.rectDiv.style.zIndex = 10000; 
        this.rectDiv.style.cursor = "move";       
        this.ovMapDiv.appendChild(this.rectDiv);
        this.registerEvent(this.rectDiv, 'rect_', 'mousedown,mousemove,mouseup');
        
        
        this.panDiv = Util.createDiv(Util.createUniqueID('Ov_Pan_'), null,null,null,null,ImageBaseDir + '1.GIF','absolute');
        this.panDiv.style.zIndex = 100000; 
        this.panDiv.style.left = containerWidth - 21;
        this.panDiv.style.top = containerHeight - 21;
        this.panDiv.style.cursor = "hand";
        this.container.appendChild(this.panDiv);
        this.registerEvent(this.panDiv, 'pan_', 'click');
    },
    
    registerEvent: function(source, prefix, param){
        var params = param.split(',');
        if(params){
            for(var i=0; i<params.length; i++){
                Event.observe(source, params[i], eval('this.'+prefix+params[i]).bindAsEventListener(this));
            }
        }
    },
    
    //事件执行体
    pan_click: function(e){
        setCurPos(Util.getValueOfNoPX(this.ovMapDiv.style.left), Util.getValueOfNoPX(this.ovMapDiv.style.top))
        slide(this.ovMapDiv.id, Util.getValueOfNoPX(this.ovMapDiv.style.width), Util.getValueOfNoPX(this.ovMapDiv.style.height), this.panDiv.childNodes[0])
        Event.stop(e);
    },
    
    rect_mousedown: function(e){        
        if(!this.isDragging)
            this.isDragging = true;
        this.elm = Event.element(e);
        this.orgLeft = Util.getValueOfNoPX(this.elm.style.left);
	    this.orgTop = Util.getValueOfNoPX(this.elm.style.top);
	    this.orgMousePixel = Util.getMousePixel(e);
	    if(this.elm.setCapture){
		    this.elm.setCapture();
	    } 
	    else if(window.captureEvents) {
		    window.captureEvents(Event.MOUSEMOVE|Event.MOUSEUP);
	    }	    
        Event.stop(e);
    },
    rect_mousemove: function(e){
        if(!this.isDragging || !this.orgMousePixel)
            return;
        this.newMousePixel = Util.getMousePixel(e);	
        var deltaX = this.newMousePixel.x - this.orgMousePixel.x;
	    var deltaY = this.newMousePixel.y - this.orgMousePixel.y;
	    this.elm.style.left = (this.orgLeft + deltaX) + "px";
		this.elm.style.top = (this.orgTop + deltaY) + "px";
            
        Event.stop(e);
    },
    rect_mouseup: function(e){
        if(!this.isDragging) return;
        if(this.elm.releaseCapture) 
			this.elm.releaseCapture();
		else if(window.captureEvents) 
			window.captureEvents(Event.MOUSEMOVE|Event.MOUSEUP);
        
		var lastMousePixel = Util.getMousePixel(e);
		var deltaX = lastMousePixel.x - this.orgMousePixel.x;
		var deltaY = lastMousePixel.y - this.orgMousePixel.y;
		this.ovDiv.style.left = (Util.getValueOfNoPX(this.ovDiv.style.left) - deltaX) + "px";
		this.ovDiv.style.top = (Util.getValueOfNoPX(this.ovDiv.style.top) - deltaY) + "px";
		this.elm.style.left = (this.orgLeft) + "px";
		this.elm.style.top = (this.orgTop) + "px";
        this.reLoadTiles(this.model, deltaX, deltaY, false);        
        document.onmousemove = null;
		document.onmouseup = null;
        this.isDragging = false;
        Event.stop(e);
    },
    ov_mousedown: function(e){
        if(!this.isDragging)
            this.isDragging = true;            
        this.orgLeft = Util.getValueOfNoPX(this.ovDiv.style.left);
	    this.orgTop = Util.getValueOfNoPX(this.ovDiv.style.top);
	    this.orgMousePixel = Util.getMousePixel(e);
	    if(this.ovDiv.setCapture)
		    this.ovDiv.setCapture();
	    else if (window.captureEvents) 
		    window.captureEvents(Event.MOUSEMOVE|Event.MOUSEUP);
        document.onselectstart = function(){return false}; 
        Event.stop(e);
    },
    ov_mousemove: function(e){
        if(!this.isDragging || !this.orgMousePixel)
            return;
        this.newMousePixel = Util.getMousePixel(e);	    
	    var deltaX = this.newMousePixel.x - this.orgMousePixel.x;
	    var deltaY = this.newMousePixel.y - this.orgMousePixel.y;
		this.ovDiv.style.left = (this.orgLeft + deltaX) + "px";
		this.ovDiv.style.top = (this.orgTop + deltaY) + "px";
		
        Event.stop(e);
    },
    ov_mouseup: function(e){
        if(!this.isDragging) return;        
        if(this.ovDiv.releaseCapture) 
			this.ovDiv.releaseCapture();
		else if(window.captureEvents) 
			window.captureEvents(Event.MOUSEMOVE|Event.MOUSEUP);
		
		var lastMousePixel = Util.getMousePixel(e);
		var deltaX = lastMousePixel.x - this.orgMousePixel.x;
		var deltaY = lastMousePixel.y - this.orgMousePixel.y;		
		this.reLoadTiles(this.model, deltaX, deltaY, true);
        
        document.onmousemove = null
		document.onmouseup = null
        this.isDragging = false;
        Event.stop(e);
    },
    
    ov_click: function(e){
        this.curMousePixel = Util.getMouseRelativePixel(e, this.ovDiv);
        this.curCenterPixel = Util.getScreenPixel(this.model.getOvModel().getViewCenterCoord(), this.model.getOvModel().getZoom());
        var deltaX = this.curCenterPixel.x - this.curMousePixel.x;
        var deltaY = this.curCenterPixel.y - this.curMousePixel.y;        
        this.ovDiv.style.left = (Util.getValueOfNoPX(this.ovDiv.style.left) + deltaX) + "px";
		this.ovDiv.style.top = (Util.getValueOfNoPX(this.ovDiv.style.top) + deltaY) + "px";
        this.reLoadTiles(this.model, deltaX, deltaY, true);

        Event.stop(e);
    },
    
    
    reLoadTiles: function(model, deltaX, deltaY, isPlus){
        var scale = Util.zoomScale(model.getOvModel().getZoom().getLevel())/Util.zoomScale(model.getZoom().getLevel());
        var orgCenterCoord = model.getViewCenterCoord();
        var curZoom = model.getZoom();
        var realDeltaX = deltaX*scale*curZoom.realMapBound.getWidth()/(curZoom.getTileCols()*TileSize);
        var realDeltaY = deltaY*scale*curZoom.realMapBound.getHeight()/(curZoom.getTileRows()*TileSize);
        if(isPlus){
            x = orgCenterCoord.x - realDeltaX
            y = orgCenterCoord.y + realDeltaY
        }
        else{
            x = orgCenterCoord.x + realDeltaX
            y = orgCenterCoord.y - realDeltaY
        }
        var newCenterCoord = new Coordinate(x, y)
        if(!newCenterCoord.isSame(orgCenterCoord)){
            model.setViewCenterCoord(newCenterCoord);            
            this.loadTiles(model.getOvModel(), this.ovMapDiv, this.ovDiv, false)
            model.controls[this.container.childNodes[0].id].paint(model);
        }
    }
    
});