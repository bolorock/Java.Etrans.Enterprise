MapControl = Class.create();
MapControl.prototype = Object.extend(new Abstract.Control(), {
    initialize: function(id, container){
        this.id = id;        
        this.mapDiv = Util.createDiv(id);
        this.mapDiv.style.position = "absolute";
        this.mapDiv.style.zIndex = 0;
        this.mapDiv.style.cursor = "move";
        this.container = container;
        this.container.style.border = "1px solid #979797";
        this.container.style.borderTop = "0px solid #979797";
		this.container.style.overflow = "hidden";
		this.container.style.position = "relative";
		// 屏蔽右键
		this.container.oncontextmenu = function(event) {
			self.event.returnValue = false;
			return false;
		};
		// 屏蔽全选
		this.container.onselectstart = function() {
			return false;
		};
        this.container.appendChild(this.mapDiv);
    },
    
    paint: function(model, isTracing){
        var curZoom = model.getZoom();
        var viewBound = curZoom.getViewBound(this.container).clone(model.getViewCenterCoord());
        var mapBound = curZoom.realMapBound;
        
       // alert("viewBound:x:"+viewBound.getMinX()+";y:"+viewBound.getMaxY());
       // alert("mapBound:x:"+mapBound.getMinX()+";y:"+mapBound.getMaxY());
        var deltaX = (mapBound.getMinX() - viewBound.getMinX()) * (curZoom.getTileCols() * TileSize / mapBound.getWidth());
        var deltaY = (viewBound.getMaxY() - mapBound.getMaxY()) * (curZoom.getTileRows() * TileSize / mapBound.getHeight());
       // alert("x:"+deltaX+";y:"+deltaY);
        this.mapDiv.style.left = deltaX + "px";
        this.mapDiv.style.top = deltaY + "px";
        this.mapDiv.style.width = (curZoom.getTileCols() * TileSize) + "px"
        this.mapDiv.style.height = (curZoom.getTileRows() * TileSize) + "px"
        
        this.loadTiles(model, this.container, this.mapDiv, isTracing);
        
    }
});