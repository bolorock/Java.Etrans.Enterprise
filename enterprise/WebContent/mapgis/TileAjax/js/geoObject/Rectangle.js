Rectangle = Class.create();
Rectangle.prototype = {
    initialize: function(minX, maxX, minY, maxY){
        this.minX = minX;
        this.maxX = maxX;
        this.minY = minY;
        this.maxY = maxY;
        this.bound = new Bound(minX*1e16, maxX*1e16, minY*1e16, maxY*1e16);
    },
    
	getPixelWidth: function(zoom) {
	    //return Math.abs(this.maxX - this.minX);
	    
	    var topleft = Util.getScreenPixel((new Point(this.minX,this.maxY)).getCoord(), zoom).x;
	    var bottomright = Util.getScreenPixel((new Point(this.maxX,this.minY)).getCoord(), zoom).x;
	    return Math.floor(Math.abs(bottomright - topleft));
	},
	
	getPixelHeight: function(zoom) {
	    //return Math.abs(this.maxY - this.minY);
	    
	    var topleft = Util.getScreenPixel((new Point(this.minX,this.maxY)).getCoord(), zoom).y;
	    var bottomright = Util.getScreenPixel((new Point(this.maxX,this.minY)).getCoord(), zoom).y;
	    return Math.floor(Math.abs(topleft - bottomright));
	},
	
	getBound: function() {	  
	    return this.bound;
	},	
	
	getCenter: function() {
	    return this.bound.getCenterCoord();
	}     
}

