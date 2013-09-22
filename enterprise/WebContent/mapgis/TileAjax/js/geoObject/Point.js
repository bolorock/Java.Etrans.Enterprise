Point = Class.create();
Point.prototype = {
    initialize: function(x, y){
        this.x = x;
        this.y = y;
        this.coord = new Coordinate(x*1e16, y*1e16);
    },
    
    getCoord: function(){
        return this.coord;
    },
    
    setCoord: function(coord){
        this.coord = coord;
    },
    
    calcuDistance: function(point){
        return Util.distanceByLnglat(this.x, this.y, point.x, point.y);
    },
    
    toString: function(){
        return this.x+','+this.y;
    }
}