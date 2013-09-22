Coordinate = Class.create();
Coordinate.prototype = {
    initialize: function(x, y){
        this.x = x;
        this.y = y;
    },
    
    isSame: function(coord){
        if (this.x == coord.x && this.y == coord.y) 
			return true;
		return false;
    },
    
    getBound: function(width, height){
    	//alert("getBound:width:"+width+";height:"+height+";this.x:"+this.x+";this.y:"+this.y);
        return new Bound(this.x-width/2, this.x+width/2, this.y-height/2, this.y+height/2);
    },
    
    getPoint: function(){
        return new Point(this.x/1e16,this.y/1e16);
    },
    
    toString: function(){
        return 'X:'+this.x+',Y:'+this.y;
    }
}