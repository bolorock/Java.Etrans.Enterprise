
Util = new Object();

Util.createUniqueID = function(prefix) {
    if (prefix == null) {
        prefix = "id_";
    }
    return prefix + Math.round(Math.random() * 10000000);        
};

Util.getValueOfNoPX = function(valueString){
	if(!valueString)
	    return ;
	if (valueString.indexOf("px")) {
		var i = valueString.indexOf("px");
		return Number(valueString.substring(0, i));
	}
	return Number(valueString);
};

Util.getRealMapWidth = function(fullExtent){
    return Util.distanceByLnglat(fullExtent.getMinX()/1e16,fullExtent.getMaxY()/1e16,fullExtent.getMaxX()/1e16,fullExtent.getMaxY()/1e16);
};

Util.getRealMapHeight = function(fullExtent){
    return Util.distanceByLnglat(fullExtent.getMinX()/1e16,fullExtent.getMinY()/1e16,fullExtent.getMinX()/1e16,fullExtent.getMaxY()/1e16);
};

Util.getRealMapBound = function(fullExtent, level){
    //��ȡ��ǰ�����ͼ�ı����
    var scale  = Util.zoomScale(level);    
		
    var xmin = fullExtent.getMinX()/1e16;
    var xmax = fullExtent.getMaxX()/1e16;
    var ymin = fullExtent.getMinY()/1e16;
    var ymax = fullExtent.getMaxY()/1e16;
    
    //��Ƭ�ĳ���
    var tileWidth = TileSize/96*2.54*scale/100;        
    var cols = Util.getRealMapWidth(fullExtent)/tileWidth; // double
    var rows = (ymax - ymin)/((xmax - xmin)/cols);
    xmax = (xmax-xmin)/cols*Math.ceil(cols)+xmin;
    ymin = ymax -(ymax-ymin)/rows*Math.ceil(rows);
    return new Bound(xmin*1e16, xmax*1e16, ymin*1e16, ymax*1e16);  
};

Util.distanceByLnglat = function(lng1,lat1,lng2,lat2){
    var radLat1 = Util.Rad(lat1);
    var radLat2 = Util.Rad(lat2);
    var a = radLat1 - radLat2;
    var b = Util.Rad(lng1) - Util.Rad(lng2);
    var s = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(a / 2), 2) + Math.cos(radLat1) * Math.cos(radLat2) * Math.pow(Math.sin(b / 2), 2)));
    s = s * 6378137.0;// ȡWGS84��׼�ο������еĵ��򳤰뾶(��λ:m)
    s = Math.round(s * 10000) / 10000;
    return s;
};

Util.Rad = function(d){
    return d * Math.PI / 180.0;
};

Util.zoomScale = function(level){
    var scale;
    switch(level)
    {
        case 1:
            scale = '5000000';
            break;
        case 2:
            scale = '3400000';
            break;
        case 3:
            scale = '2000000';
            break;
        case 4:
            scale = '1000000';
            break;
        case 5:
            scale = '800000';
            break;
        case 6:
            scale = '500000';
            break;
        case 7:
            scale = '250000';
            break;
        case 8:
            scale = '100000';       
            break;	
        case 9:
            scale = '50000';       
            break;
        case 10:
            scale = '25000';       
            break;	        
        default:
            scale = -1;
            break;
    }
    return scale;
};


Util.createDiv = function(id,left,top,width,height,img,position,border,opacity,b){
    if(document.getElementById(id)){
    	return document.getElementById(id);
    }
    var e = document.createElement('div');
    if(id)
        e.id = id ;
    
    if(left)
        e.style.left = parseInt(left) + "px";
    if(top)        
        e.style.top = parseInt(top) + "px";    
    
    if(width && height){
        e.style.width = parseInt(width) + "px";
        e.style.height = parseInt(height) + "px";
    }
    if(img)
        e.appendChild(Util.createImg(id+'_Img',0,0,null,null,img,'relative',0,null,null,b));
        
    if(position)
        e.style.position = position ;
    if (border)
        e.style.border = border;
            
    if (opacity) {
        e.style.opacity = opacity;
        e.style.filter = 'alpha(opacity=' + (opacity * 100) + ')';
    }
        
    return e;
};


Util.createImg = function(id, left, top, width, height, imgurl, position, border, opacity, delayDisplay, style) {

    image = document.createElement("img");

    if(delayDisplay) {
        image.style.display = "none";
        Event.observe(image, "load", Util.onImageLoad.bindAsEventListener(image));
        Event.observe(image, "error",Util.onImageLoadError.bindAsEventListener(image));        
    }
    
    image.style.alt = id;
    image.galleryImg = "no";
    if (imgurl) 
        image.src = imgurl;    
    
    if (!position) 
        position = "relative";
    
    if(id)
        image.id = id;
    
    if(left)
        image.style.left = parseInt(left) + "px";
    if(top)        
        image.style.top = parseInt(top) + "px";
    
    if(width && height){
        image.style.width = parseInt(width) + "px";
        image.style.height = parseInt(height) + "px";
    }
    
    if(position)
        image.style.position = position ;
        
    if (border)
        image.style.border = border;
            
    if (opacity) {
        image.style.opacity = opacity;
        image.style.filter = 'alpha(opacity=' + (opacity * 100) + ')';
    }
    
    if (style){
        image.style.border = "0px solid";
        image.style.margin = "1px";
    }
        
    return image;
};

Util.createInputElement = function(id,type,size,value){
    if(document.getElementById(id)){
    	return document.getElementById(id);
    }
    var e = document.createElement('input');
    if(id)
        e.id = id;
    if(value)
        e.value = value;
    if(type)
        e.type = type;
    if(size)
        e.size = size;
    return e;        
};


Util.setElementStyle = function(element, id, left, top, width, height, position, border, overflow, opacity) {

    if (id) {
        element.id = id;
    }
    
    if(left)
        element.style.left = parseInt(left) + "px";
    if(top)        
        element.style.top = parseInt(top) + "px";
        
    if(width && height){
        element.style.width = parseInt(width) + "px";
        element.style.height = parseInt(height) + "px";
    }
    if (position) {
        element.style.position = position;
    }
    if (border) {
        element.style.border = border;
    }
    if (overflow) {
        element.style.overflow = overflow;
    }
    if (opacity) {
        element.style.opacity = opacity;
        element.style.filter = 'alpha(opacity=' + (opacity * 100) + ')';
    }
};



Util.onImageLoad = function() {
    this.style.backgroundColor = null;
    this.style.display = "";  
};

Util.onImageLoadError = function() {
    this.style.backgroundColor = "pink";
    this.style.display = "";
};


Util.getMousePixel = function(e){
    if(!e) 
		e = window.event;	
	if(!e.pageX) 
		e.pageX = e.clientX;
	if(!e.pageY) 
		e.pageY = e.clientY;
	return {x:e.pageX, y:e.pageY};
};


Util.getMouseRelativePixel = function(e, mapDiv){
    var pixel = Util.getMousePixel(e);
    var relDeltaX = pixel.x - Util.getLeft(mapDiv.parentNode) - Util.getValueOfNoPX(mapDiv.style.left);
	var relDeltaY = pixel.y - Util.getTop(mapDiv.parentNode) - Util.getValueOfNoPX(mapDiv.style.top);
	return {x:relDeltaX, y:relDeltaY}
};

Util.getTop = function(obj){
    var t = obj.offsetTop;
	while(obj = obj.offsetParent){
		t += obj.offsetTop;
	}
	return t;
};

Util.getLeft = function(obj){
    var t = obj.offsetLeft;
	while(obj = obj.offsetParent){
		t += obj.offsetLeft;
	}
	return t;
};

Util.getScreenPixel = function(coord, zoom){
	//alert("coord.x:"+coord.x);
	//alert("mapMinx:"+zoom.realMapBound.getMinX());
	//alert("tilecols:"+zoom.getTileCols());
	//alert("tiletotalwidth:"+(zoom.getTileCols() * TileSize));
    var sx = (coord.x-zoom.realMapBound.getMinX()) * ((zoom.getTileCols() * TileSize)/zoom.realMapBound.getWidth());
    var sy = (zoom.realMapBound.getMaxY()-coord.y) * ((zoom.getTileRows() * TileSize)/zoom.realMapBound.getHeight());
    //alert("getScreenPixel:coord:"+coord.getPoint().x+";"+coord.getPoint().y);
    //alert("getScreenPixel:"+sx+";"+sy);
    return {x:sx, y:sy};
};

Util.getCoordinateByPixel = function(pixel, zoom){
	//alert("getMinX:"+zoom.getTileCols()+","+zoom.realMapBound.getWidth());
	var x = zoom.realMapBound.getMinX() + pixel.x * (zoom.realMapBound.getWidth()/(zoom.getTileCols() * TileSize));
	//alert(x);
	var y = zoom.realMapBound.getMaxY() - pixel.y * (zoom.realMapBound.getHeight()/(zoom.getTileRows() * TileSize));
	return new Coordinate(x, y);
};

Util.getCoordinateByPixel2 = function(xx,yy, zoom){
	//alert("getMinX:"+zoom.getTileCols()+","+zoom.realMapBound.getWidth());
	var x = zoom.realMapBound.getMinX() + xx * (zoom.realMapBound.getWidth()/(zoom.getTileCols() * TileSize));
	//alert(x);
	var y = zoom.realMapBound.getMaxY() - yy * (zoom.realMapBound.getHeight()/(zoom.getTileRows() * TileSize));
	return new Coordinate(x, y);
};
/*
Util.getCoordinateByLnglat3 = function(xx,yy, zoom){
	//alert("getMinX:"+zoom.getTileCols()+","+zoom.realMapBound.getWidth());
	var x = zoom.realMapBound.getMinX() - xx / (zoom.realMapBound.getWidth()/(zoom.getTileCols() * TileSize));
	//alert(x);
	var y = zoom.realMapBound.getMaxY() + yy /(zoom.realMapBound.getHeight()/(zoom.getTileRows() * TileSize));
	return new Coordinate(x, y);
};*/


Util.LTrim = function(str){ 
    var i;
    for(i=0;i<str.length;i++){ 
        if(str.charAt(i)!=" ")break; 
    } 
    str=str.substring(i,str.length); 
    return str; 
};

Util.RTrim = function(str){ 
    var i;
    for(i=str.length-1;i>=0;i--){ 
        if(str.charAt(i)!=" ")break; 
    } 
    str=str.substring(0,i+1); 
    return str; 
};

Util.Trim = function(str){ 
    return Util.LTrim(Util.RTrim(str)); 
};
