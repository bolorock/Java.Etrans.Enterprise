polygon = Class.create(); 
polygon.prototype = Object.extend(new Abstract.OverLayer(), {
    
    initialize: function(points, color, size,name){
		this.id = Util.createUniqueID('Over_Pon_line_');
		this.name=name;
        this.points = points;
        this.color = color;                
        this.size = size;
        this.bound = this.buildExtent();
    },
    getNameno : function() {
    	return this.nameno;
    },
    setNameno : function(nameno) {
    	this.nameno = nameno;
    },

    
    buildExtent: function(){
        var minX=180e16, maxX=0, minY=90e16, maxY=0;
        for (var i=0; i<this.points.length; i++){
                if(this.points[i].getCoord().x < minX ) minX = this.points[i].getCoord().x;
                if(this.points[i].getCoord().x > maxX ) maxX = this.points[i].getCoord().x;
                if(this.points[i].getCoord().y < minY ) minY = this.points[i].getCoord().y;
                if(this.points[i].getCoord().y > maxY ) maxY = this.points[i].getCoord().y;             
            }
            return new Bound(minX,maxX,minY,maxY);
    },
    
    getExtent: function(){
        return this.bound;
    },
    
    setExtent: function(extent){
        this.bound = extent;
    },
    
    getCenterCoord: function(){
        return this.getExtent().getCenterCoord();
    },
    
    getLength: function(){
        if(this.points.length <=1) return 0;
            var len = 0;            
            for(var i=0;i<this.points.length-1;i++)
            {
                len += this.points[i].calcuDistance(this.points[i+1]);
            }
            return len;
    },
    
    setToMap: function(mapDiv, model, overLayerDiv){
        this.mapDiv = mapDiv;
        this.model = model;
        var curZoom = model.getZoom();
        var pixel = Util.getScreenPixel(new Coordinate(this.getExtent().getMinX(), this.getExtent().getMaxY()), curZoom);//经纬度转屏幕
        var lines = new Array();
        lines.push('<v:PolyLine filled="true" fillcolor="red"  Points="');
        for(var i=0; i<this.points.length; i++){
            var sPoint = Util.getScreenPixel(new Coordinate(this.points[i].getCoord().x, this.points[i].getCoord().y), curZoom);
                    lines.push(Math.floor(sPoint.x)+','+ Math.floor(sPoint.y) +',');
        }
        lines[lines.length-1] = lines[lines.length-1].substring(0, lines[lines.length-1].length-1);
                lines.push('" style="position:relative;left:-3px;top:5px;filter: Alpha(Opacity=30);" strokecolor="'+this.color+'" strokeweight="'+this.size+'"/>');
        if(overLayerDiv){
            overLayerDiv.innerHTML = "";
            overLayerDiv.style.left = pixel.x;
            overLayerDiv.style.top = pixel.y;
            overLayerDiv.innerHTML = lines.join(""); 
        }
        else{            
            this.id = Util.createUniqueID('Over_Polyline_');
            this.div = Util.createDiv(this.id, pixel.x, pixel.y-9.8,null,null,null,'absolute');
            this.div.style.zIndex = 1000;
            this.div.name= this.name;
            this.div.innerHTML = lines.join("");        
            this.insert();
        }
        
    }
    
});