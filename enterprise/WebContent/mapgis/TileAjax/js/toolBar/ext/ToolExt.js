//矩形选择
EnvelopeTool = Class.create();
EnvelopeTool.prototype = Object.extend(new Abstract.Tool(), {
    cursorStyle:'./images/curs/selectfeatures.cur',
    selected: false,
    alt: '矩形选择',
    mouseDownHandler: function(e, toolbar) {        
        this.mapDiv = toolbar.mapDiv;
        this.mouseDownPixel = Util.getMouseRelativePixel(e, this.mapDiv);
        this.zoomBox = Util.createDiv('zoomBox',this.mouseDownPixel.x,this.mouseDownPixel.y, null,null,null,"absolute","1px solid red");
        this.zoomBox.style.backgroundColor = "white";
        this.zoomBox.style.filter = "alpha(opacity=50)"; 
        this.zoomBox.style.opacity = "0.50";
        this.zoomBox.style.fontSize = "1px";
        this.mapDiv.appendChild(this.zoomBox);        
        Event.stop(e);
    },
    
    mouseMoveHandler: function(e, toolbar){
        this.mapDiv = toolbar.mapDiv;
        this.mouseMovePixel = Util.getMouseRelativePixel(e, this.mapDiv);
        
        if (this.mouseDownPixel) {
            var deltaX = Math.abs(this.mouseDownPixel.x - this.mouseMovePixel.x);
            var deltaY = Math.abs(this.mouseDownPixel.y - this.mouseMovePixel.y);
            this.zoomBox.style.width = Math.max(1, deltaX) + "px";
            this.zoomBox.style.height = Math.max(1, deltaY) + "px";
            if (this.mouseMovePixel.x < this.mouseDownPixel.x)
                this.zoomBox.style.left = this.mouseMovePixel.x+"px";
            if (this.mouseMovePixel.y < this.mouseDownPixel.y)
                this.zoomBox.style.top = this.mouseMovePixel.y+"px";
        }        
        Event.stop(e);
    },
    
    mouseUpHandler: function(e, toolbar){
        if (this.mouseDownPixel && this.mouseMovePixel) {
            //alert(this.mouseDownPixel.x+"  "+this.mouseDownPixel.y+"  "+this.mouseMovePixel.x+"  "+this.mouseMovePixel.y);
            var minPixelX = Math.min(this.mouseDownPixel.x, this.mouseMovePixel.x);
            var maxPixelX = Math.max(this.mouseDownPixel.x, this.mouseMovePixel.x);
            var minPixelY = Math.min(this.mouseDownPixel.y, this.mouseMovePixel.y);
            var maxPixelY = Math.max(this.mouseDownPixel.y, this.mouseMovePixel.y);
            var minCoord = Util.getCoordinateByPixel({x:minPixelX,y:maxPixelY}, toolbar.model.getZoom());
            var maxCoord = Util.getCoordinateByPixel({x:maxPixelX,y:minPixelY}, toolbar.model.getZoom());
            var coords = minCoord.x/1e16 + "," + minCoord.y/1e16 + ";" + maxCoord.x/1e16 + "," + maxCoord.y/1e16;
            this.removeZoomBox(this.zoomBox);
            
            //TODO
            AjaxMonitor.Search("EnvelopeQuery",coords);            
        }
        Event.stop(e);
    },
      
    removeZoomBox: function(zoom){
      if(!zoom) return;
      this.mapDiv.removeChild(zoom);
      zoom = null;
    },
      
    clickHandler: function(e, toolbar){
      Event.stop(e);
    },
      
    dblClickHandler: function(e, toolbar){
      Event.stop(e);
    }
    
});

// 添加标注
MarkerTool = Class.create(); 
MarkerTool.prototype = Object.extend(new Abstract.Tool(), {
    cursorStyle:'./images/curs/selectpoint.cur',
    selected: false,
    alt: '标注',      
    mouseDownHandler: function(e, toolbar) {
    //Event.stop(e);
    },

    mouseMoveHandler: function(e, toolbar){
    //Event.stop(e);
    },

    mouseUpHandler: function(e, toolbar){        
    //Event.stop(e);
    },

    reLoadTiles: function(model, deltaX, deltaY, mapDiv){
    },

    clickHandler: function(e, toolbar){      
        var point = Util.getCoordinateByPixel(Util.getMouseRelativePixel(e, toolbar.mapDiv),toolbar.model.zoom).getPoint();
        var marker = new Marker();
        marker.setCoord(point);
        marker.setIcon(new Icon(12, 20, ImageBaseDir + "marker_small.png"));
        
        var infoPixel = Util.getMouseRelativePixel(e, toolbar.mapDiv);
        var left = infoPixel.x + 1;
        var top = infoPixel.y + 1;
        var width = 200;
        var height = 200;

        var infoPixel1 = Util.getMouseRelativePixel(e, toolbar.container);
	    var tempx = Util.getValueOfNoPX(toolbar.container.style.width) - width;
	    var tempy = Util.getValueOfNoPX(toolbar.container.style.height) - height;	    
	    if(infoPixel1.x>0 && infoPixel1.x>=tempx) {
	        left = left - width;
	    }
	    if(infoPixel1.y>0 && infoPixel1.y>=tempy) {
	        top = top - height;
	    }	    
	    var tip = new Tipinfo(left,top,width,height);
	    
	    marker.setTipinfo(tip);        
        marker.setToMap(toolbar.mapDiv, toolbar.model);
        
	    toolbar.currentTool = toolbar.defaultTool;
	    toolbar.mapDiv.style.cursor = toolbar.currentTool.cursorStyle; 
	         
//        toolbar.model.setViewCenterCoord(marker.getCoord());
//        toolbar.model.setZoom(new Zoom(MaxZoomLevel));
//        toolbar.model.controls[toolbar.mapDiv.id].paint(toolbar.model, true);
//        toolbar.model.controls[toolbar.model.ovId].paint(toolbar.model);
      
        Event.stop(e);
    },

    dblClickHandler: function(e, toolbar){
    }
});

// 设置路径点
//RouteJunTool = Class.create(); 
//RouteJunTool.prototype = Object.extend(new Abstract.Tool(), {
//    cursorStyle:'./images/curs/selectpoint.cur',
//    selected: false,
//    alt:'设置路径点',
//    mouseDownHandler: function(e, toolbar) {     
//    },
//
//    mouseMoveHandler: function(e, toolbar){
//    },
//
//    mouseUpHandler: function(e, toolbar){        
//    },
//    
//    clickHandler: function(e, toolbar){ 
//        var point = Util.getCoordinateByPixel(Util.getMouseRelativePixel(e, toolbar.mapDiv),toolbar.model.zoom).getPoint();
//        var marker = new Marker();
//        marker.isCenter(true);
//        marker.setCoord(point);
//        marker.setIcon(new Icon(16, 16, ImageBaseDir + "jun.png"));
//        marker.setToMap(toolbar.mapDiv, toolbar.model); 
//        
//        //状态保存
//        routerPlan.addJunPoint(point);   
//    },
//
//    dblClickHandler: function(e, toolbar){
//    }
//});
//
//// 设置障碍点
//RouteBarrierTool = Class.create(); 
//RouteBarrierTool.prototype = Object.extend(new Abstract.Tool(), {
//    cursorStyle:'./images/curs/selectpoint.cur',
//    selected: false,
//    alt: '设置障碍点',      
//    mouseDownHandler: function(e, toolbar) {
//    },
//
//    mouseMoveHandler: function(e, toolbar){
//    },
//
//    mouseUpHandler: function(e, toolbar){        
//    },
//    
//    clickHandler: function(e, toolbar){ 
//        var point = Util.getCoordinateByPixel(Util.getMouseRelativePixel(e, toolbar.mapDiv),toolbar.model.zoom).getPoint();
//        var marker = new Marker();
//        marker.isCenter(true);
//        marker.setCoord(point);
//        marker.setIcon(new Icon(16, 16, ImageBaseDir + "junb.png"));
//        marker.setToMap(toolbar.mapDiv, toolbar.model); 
//        
//        //状态保存
//        routerPlan.addBarrierPoint(point);   
//    },
//
//    dblClickHandler: function(e, toolbar){
//    }
//});

