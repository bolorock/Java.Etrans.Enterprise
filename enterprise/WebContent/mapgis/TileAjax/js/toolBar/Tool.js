Abstract.Tool = function(){}

	
	Abstract.Tool.prototype = {
    
		initialize: function(id, img1, img2, img3, pos, left, top, width, height){
        this.toolType = "Tool";        
        this.id = id;
        this.img_normal = ImageBaseDir + 'mapTools/' + img1;
		this.img_over = ImageBaseDir + 'mapTools/' + img2;
        this.img_down = ImageBaseDir + 'mapTools/' + img3;
        this.position = pos;
        this.left = parseInt(left);
        this.top = parseInt(top);
        this.width = parseInt(width);
        this.height = parseInt(height) ;    
        this.div = Util.createDiv(this.id, this.left, this.top, this.width, this.height, this.img_normal, this.position, '0px solid #ffffff');
        this.div.style.cursor = "pointer";
    },
    
    
    barClickHandler: function(e){
        var elm = Event.element(e);
        if(elm.childNodes.length>0)  return; 
        this.clearCurrentToolStatus();
        var tool = this.tools[Event.element(e).parentNode.id];     
		tool.div.childNodes[0].src = tool.img_down;
        if(!tool.selected){
            tool.selected = true;            
        } 
        this.currentTool = tool;
        this.mapDiv.style.cursor = this.currentTool.cursorStyle;       
        Event.stop(e);
    },
    
    barMouseOverHandler: function(e){
        var elm = Event.element(e);
        if(elm.childNodes.length>0)  
            return;        
        if(this.tools[elm.parentNode.id].selected == true) 
            return;
		 elm.src = this.tools[elm.parentNode.id].img_over;
        elm.alt = this.tools[elm.parentNode.id].alt;
        elm.style.border = "0px solid " ;
        elm.style.backgroundColor = "rgb(203,220,248)";
        Event.stop(e);
    },
    
    barMouseOutHandler: function(e){
        var elm = Event.element(e);
        if(elm.childNodes.length>0)  
            return;        
        if(this.tools[elm.parentNode.id].selected == true) 
            return;
        elm.style.border = "0px solid " ;
		elm.src = this.tools[elm.parentNode.id].img_normal;
        Event.stop(e);
    },
    
    zoomToExtent: function(model, extent, container, direction){
        if(extent){
            var zoom = model.getZoom();
            
            var w1 = zoom.getViewBound(container).getPixelWidth(zoom);
            var h1 = zoom.getViewBound(container).getPixelHeight(zoom);
            var w2 = extent.getPixelWidth(zoom);
            var h2 = extent.getPixelHeight(zoom);
            var r1 = Math.sqrt(w1*w1 + h1*h1);
            var r2 = Math.sqrt(w2*w2 + h2*h2);
            var deltalLevel = Math.floor(r1/r2);
            if(w2<1 || h2<1)
                return;
            var orgLevel = zoom.getLevel();
            if(deltalLevel > 5) deltalLevel = 5;            
            switch(direction){
                case 'zoomin':
                    orgLevel += deltalLevel;
                    if(orgLevel >MaxZoomLevel) orgLevel = MaxZoomLevel;  
                    break;
                case 'zoomout':
                    orgLevel -= deltalLevel;
                    if(orgLevel < 1) orgLevel = 1;
                    break;
            }            
			model.setZoom(new Zoom(orgLevel));
			model.setViewCenterCoord(extent.getCenter());
			model.controls[container.childNodes[0].id].paint(model, true);
			model.controls[model.ovId].paint(model);            
			$('sliderbar_'+model.getId()).parentNode.style.top=((MaxZoomLevel-orgLevel)*12+6)+"px"
        }
    }
};

//移屏
PanTool = Class.create(); 
PanTool.prototype = Object.extend(new Abstract.Tool(), {
      cursorStyle: 'move',
      selected: false,
      alt: '移屏',      
      mouseDownHandler: function(e, toolbar) {
        this.mapDiv = toolbar.mapDiv;
        if(!this.mapDiv)
            return;
        if(!this.isDrag)
            this.isDrag = true;
        this.orgPixelX = Util.getValueOfNoPX(this.mapDiv.style.left);
	    this.orgPixelY = Util.getValueOfNoPX(this.mapDiv.style.top);
	    this.orgMousePixel = Util.getMousePixel(e);
	    if(this.mapDiv.setCapture)
		    this.mapDiv.setCapture();
	    else if (window.captureEvents) 
		    window.captureEvents(Event.MOUSEMOVE|Event.MOUSEUP);
	    document.onselectstart = function(){return false};  
	    Event.stop(e);
      },
      
      mouseMoveHandler: function(e, toolbar){
        if(this.orgMousePixel == null || this.isDrag == false || !this.mapDiv)
            return;
        this.newMousePixel = Util.getMousePixel(e);	    
	    var deltaX = this.newMousePixel.x - this.orgMousePixel.x;
	    var deltaY = this.newMousePixel.y - this.orgMousePixel.y;
		this.mapDiv.style.left = (this.orgPixelX + deltaX) + "px";
		this.mapDiv.style.top = (this.orgPixelY + deltaY) + "px";	
		Event.stop(e);
      },
      
      mouseUpHandler: function(e, toolbar){        
        if(!this.isDrag) return;
        if(!this.mapDiv)
            return;
        if(this.mapDiv.releaseCapture) 
			this.mapDiv.releaseCapture();
		else if(window.captureEvents) 
			window.captureEvents(Event.MOUSEMOVE|Event.MOUSEUP);
		var lastMousePixel = Util.getMousePixel(e);
		var deltaX = lastMousePixel.x - this.orgMousePixel.x;
		var deltaY = lastMousePixel.y - this.orgMousePixel.y;		
		this.reLoadTiles(toolbar.model, deltaX, deltaY, this.mapDiv);		
		document.onmousemove = null;
		document.onmouseup = null;
		this.isDrag = false;
		Event.stop(e);
      },
      
      reLoadTiles: function(model, deltaX, deltaY, mapDiv){
        var orgCenterCoord = model.getViewCenterCoord();
        var curZoom = model.getZoom();
        var x = orgCenterCoord.x - deltaX*curZoom.realMapBound.getWidth()/(curZoom.getTileCols()*TileSize);
        var y = orgCenterCoord.y + deltaY*curZoom.realMapBound.getHeight()/(curZoom.getTileRows()*TileSize);
        var newCenterCoord = new Coordinate(x, y);
        if(!newCenterCoord.isSame(orgCenterCoord))
            model.setViewCenterCoord(newCenterCoord);
        var control = new Abstract.Control();
        control.loadTiles(model, mapDiv.parentNode, mapDiv, true);
        model.controls[model.ovId].paint(model);//此行有问题IE执行会贴着鼠标
      },
      
      clickHandler: function(e, toolbar){
        Event.stop(e);
      },
      
      dblClickHandler: function(e, toolbar){
	 var point = Util.getCoordinateByPixel(Util.getMousePixel(e),toolbar.model.zoom).getPoint();//鹰眼移动
        //Event.stop(e);
      }
});

//拉框放大
ZoominTool = Class.create();
ZoominTool.prototype = Object.extend(new Abstract.Tool(), {
    cursorStyle:'url("style/TileAjax/images/curs/zoomin.cur"),auto',
    selected: false,
    alt: '拉框放大',
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
            var top = Math.min(this.mouseDownPixel.y, this.mouseMovePixel.y);
            var bottom = Math.max(this.mouseDownPixel.y, this.mouseMovePixel.y);
            var left = Math.min(this.mouseDownPixel.x, this.mouseMovePixel.x);
            var right = Math.max(this.mouseDownPixel.x, this.mouseMovePixel.x);
            
            var leftTop = Util.getCoordinateByPixel({x:left,y:top}, toolbar.model.getZoom())
            var rightbottom = Util.getCoordinateByPixel({x:right,y:bottom}, toolbar.model.getZoom())
            var rect = new Rectangle(leftTop.x/1e16, rightbottom.x/1e16, leftTop.y/1e16, rightbottom.y/1e16);  
            this.removeZoomBox(this.zoomBox);
            this.zoomToExtent(toolbar.model, rect, this.mapDiv.parentNode, "zoomin");
        }
		     document.onselectstart = function(){return false};
        this.coord = null;
        this.newCoord = null;
        Event.stop(e);
    },
      
    removeZoomBox: function(zoom){
      if(!zoom) return;
      this.mapDiv.removeChild(zoom);
      zoom = null;
    },
      
    clickHandler: function(e, movel){
      Event.stop(e);
    },
      
    dblClickHandler: function(e, movel){
      Event.stop(e);
    }
    
});

//拉框缩小
ZoomoutTool = Class.create();
ZoomoutTool.prototype = Object.extend(new Abstract.Tool(), {
    cursorStyle:'url("style/TileAjax/images/curs/zoomout.cur"),auto',
    selected: false,
    alt: '拉框缩小',
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
            var top = Math.min(this.mouseDownPixel.y, this.mouseMovePixel.y);
            var bottom = Math.max(this.mouseDownPixel.y, this.mouseMovePixel.y);
            var left = Math.min(this.mouseDownPixel.x, this.mouseMovePixel.x);
            var right = Math.max(this.mouseDownPixel.x, this.mouseMovePixel.x);
            
            var leftTop = Util.getCoordinateByPixel({x:left,y:top}, toolbar.model.getZoom())
            var rightbottom = Util.getCoordinateByPixel({x:right,y:bottom}, toolbar.model.getZoom())
            var rect = new Rectangle(leftTop.x/1e16, rightbottom.x/1e16, leftTop.y/1e16, rightbottom.y/1e16);  
            this.removeZoomBox(this.zoomBox);
            this.zoomToExtent(toolbar.model, rect, this.mapDiv.parentNode, "zoomout");
            
        }
        Event.stop(e);
    },
      
    removeZoomBox: function(zoom){
      if(!zoom) return;
      this.mapDiv.removeChild(zoom);
      zoom = null;
    },
      
    clickHandler: function(e, movel){
      Event.stop(e);
    },
      
    dblClickHandler: function(e, movel){
      Event.stop(e);
    }
});

//测量距离
MeasureTool = Class.create();
MeasureTool.prototype = Object.extend(new Abstract.Tool(), {
    cursorStyle:'url("style/TileAjax/images/curs/measure.cur")',
    isDrag: false,
    selected: false,        
    alt: '测量距离',
    measure: new Array(),
    
    mouseDownHandler: function(e, toolbar){
        if(!this.lineDiv)
        this.lineDiv = Util.createDiv('lineDiv');
        this.mapDiv = toolbar.mapDiv;
        this.mapDiv.appendChild(this.lineDiv);                
        this.mouseDownPixel = Util.getMouseRelativePixel(e, this.mapDiv);
        
        if(!this.isDrag)
            this.isDrag = true;
        this.lastX=this.mouseDownPixel.x;   
        this.lastY=this.mouseDownPixel.y;      
        this.line='<v:line from="'+this.lastX+','+this.lastY+'" to="'+this.mouseDownPixel.x+','+this.mouseDownPixel.y+'" strokecolor="green" strokeweight="2pt" style="position:absolute;left:-3px;top:-3px;z-index:111122213;"></v:line>';
        this.vLine = document.createElement(this.line);
        this.lineDiv.appendChild(this.vLine);           
		
        var coord = Util.getCoordinateByPixel(this.mouseDownPixel, toolbar.model.getZoom());
  	    //  alert("Mesure:coordX:"+coord.getPoint().x+";"+coord.getPoint().y);
        this.measure.push(new Point(coord.x/1e16, coord.y/1e16));
        Event.stop(e);
    }, 
    
    mouseMoveHandler: function(e, toolbar){
        if(!this.isDrag)
            return;   
       //alert("mouseMoveHandler:"+this.isDrag);
        this.mouseMovePixel = Util.getMouseRelativePixel(e, this.mapDiv);
        this.vLine.to = this.mouseMovePixel.x + "," + this.mouseMovePixel.y;      
        Event.stop(e);
    },
    
    dblClickHandler: function(e, toolbar){
        if(!this.isDrag || !this.lineDiv)
           return;  
        this.lineDiv.innerHTML = "";
	    this.mapDiv.removeChild(this.lineDiv);
        var pline = new Polyline(this.measure, "red", 2);
        pline.setToMap(toolbar.mapDiv, toolbar.model);
        this.measure = new Array();
        this.isDrag=false;        
        
        var len = pline.getLength();
		var unit = '';        
        if(len != null && len.toString().indexOf(".")){
            var i = len.toString().indexOf(".");
            alert(len);
            if(i<4){
                unit = "米"
                len = Number(len.toString().substring(0, i+3));
            }                
            else{
                len = len/1000;
                i = len.toString().indexOf(".");
                len = Number(len.toString().substring(0, i+4));
                unit = "千米";
            }
        }
        var infoCoord = Util.getMouseRelativePixel(e, this.mapDiv);
        this.CreateMeasureInfo(toolbar.model.getId(), infoCoord, "<br>本次总测量距离：<br>"+len+unit);
        Event.stop(e);
    },
    
   CreateMeasureInfo: function(modelId, infoCoord, result){
        var div = $("measureResultDiv")
        if(!div){
            var mapDiv = $("map_"+modelId)
		    this.measureResult = document.createElement("div");
		    this.measureResult.id = "measureResultDiv";
		    this.measureResult.onselect = null;
		    this.measureResult.style.position = "absolute";
		    this.measureResult.style.background = "#FFFFFF";
		    this.measureResult.style.border = "1px solid #999999";
		    this.measureResult.style.fontSize = "12px";
		    this.measureResult.style.padding = "1px";
		    this.measureResult.innerHTML = '<div style="background:#EEEEEE;"><table style="width:150px;"><tr><td align=left>测量结果</td><td align=right><img onmousedown="hideWindown(event, \'' + this.measureResult.id + '\')" src="' + ImageBaseDir + 'infowindow_close.gif"></td></tr></table></div>';
		    this.measureResult.innerHTML += '<div id="measureResult" align="center" style="padding:2px;height:50px;width:150px;z-index:100000000"></div>';
	        mapDiv.appendChild(this.measureResult);
	    }	    
	    this.measureResult.style.zIndex = 11000;
	    this.measureResult.style.left = infoCoord.x + "px";
	    this.measureResult.style.top = infoCoord.y + "px";	    
	    $("measureResult").innerHTML = result;
	    this.measureResult.style.display = "";
    },
      
    clickHandler: function(e, model) {
        Event.stop(e);
    },
  
    mouseUpHandler: function(e, model){
    	
      
     
        Event.stop(e);
    }
});


//道路设置
LineTool = Class.create();
LineTool.prototype = Object.extend(new Abstract.Tool(), {
    cursorStyle:'url("style/TileAjax/images/curs/measure.cur")',
    isDrag: false,
    selected: false,        
    alt: '道路设置',
    measure: new Array(),
    xypoint: new Array(),
    
    mouseDownHandler: function(e, toolbar){
        if(!this.lineDiv)
        this.lineDiv = Util.createDiv('lineDiv');
        this.mapDiv = toolbar.mapDiv;
        this.mapDiv.appendChild(this.lineDiv);                
        this.mouseDownPixel = Util.getMouseRelativePixel(e, this.mapDiv);
        
        if(!this.isDrag)
            this.isDrag = true;
        this.lastX=this.mouseDownPixel.x;   
        this.lastY=this.mouseDownPixel.y;      
        this.line='<v:line from="'+this.lastX+','+this.lastY+'" to="'+this.mouseDownPixel.x+','+this.mouseDownPixel.y+'" strokecolor="green" strokeweight="2pt" style="position:absolute;left:-3px;top:-3px;z-index:111122213;"></v:line>';
        this.vLine = document.createElement(this.line);
        this.lineDiv.appendChild(this.vLine);           
 	 	  //alert("Mesure: mouseDownX:"+this.mouseDownPixel.x+";"+this.mouseDownPixel.y);
        var coord = Util.getCoordinateByPixel(this.mouseDownPixel, toolbar.model.getZoom());
  	     //alert("Mesure:coordX:"+coord.getPoint().x+";"+coord.getPoint().y);
        this.xypoint.push(coord.x/1e16+','+ coord.y/1e16)
        this.measure.push(new Point(coord.x/1e16, coord.y/1e16));
        Event.stop(e);
    }, 
    
    mouseMoveHandler: function(e, toolbar){
        if(!this.isDrag)
            return;   
       //alert("mouseMoveHandler:"+this.isDrag);        
        this.mouseMovePixel = Util.getMouseRelativePixel(e, this.mapDiv);
        this.vLine.to = this.mouseMovePixel.x + "," + this.mouseMovePixel.y;      
        Event.stop(e);
    },
    
    dblClickHandler: function(e, toolbar){
        if(!this.isDrag || !this.lineDiv)
           return;  
        this.lineDiv.innerHTML = "";
	    this.mapDiv.removeChild(this.lineDiv);
	    //alert(this.xypoint);
	 	pointEnter(this.xypoint);
        var pline = new Polyline(this.measure, "red", 2);
        pline.setToMap(toolbar.mapDiv, toolbar.model);
        
      
        this.xypoint = new Array();
        this.measure = new Array();
        this.isDrag=false;        
     Event.stop(e);
    },
    
  
    clickHandler: function(e, model) {
        Event.stop(e);
    },
  
    mouseUpHandler: function(e, model){
        Event.stop(e);
    }
});



//新建标注
SiteTool = Class.create();
SiteTool.prototype = Object.extend(new Abstract.Tool(), {
    cursorStyle:'default',
    selected: false,        
    alt: '标注',
    
    mouseDownHandler: function(e, toolbar){
		$("name").value="";
		var _event = e ? e : window.event;
		var _target = e ? e.target : window.event.srcElement;
		var xy=new Coordinate( _event.clientY + document.body.scrollTop-100,
				( _event.clientX + document.body.scrollLeft < 160 ? _event.clientX + document.body.scrollLeft + 10  : _event.clientX  + document.body.scrollLeft-30));
	     $("downloadPanel").style.top = xy.x;	 
	     $("downloadPanel").style.left = xy.y;	
	     this.mapDiv = toolbar.mapDiv;               
	     this.mouseDownPixel = Util.getMouseRelativePixel(e, this.mapDiv);
	     var coord = Util.getCoordinateByPixel(this.mouseDownPixel, toolbar.model.getZoom());
	  	 // alert(coord.getPoint().x+";"+coord.getPoint().y);
        $("downloadPanel").style.display = '';
	    $("name").focus();
	    $("longitude").value=coord.getPoint().x;
		$("latitude").value=coord.getPoint().y;
    },
    mouseMoveHandler: function(e, toolbar){},
    mouseUpHandler: function(e, toolbar){}

});


//画矩形
RectangleTool = Class.create();
RectangleTool.prototype = Object.extend(new Abstract.Tool(), {
    cursorStyle:'url("style/TileAjax/images/curs/measure.cur")',
    selected: false,        
    alt: '矩形',
	rectlg: new Array(),
	temppoint:new Array(),
	savePoint:new Array(),
	
	
	    mouseDownHandler: function(e, toolbar) {  
		
		if(!this.lineDiv)
        this.lineDiv = Util.createDiv('RectangleDiv');
        this.mapDiv = toolbar.mapDiv;
        this.mapDiv.appendChild(this.lineDiv);                
        this.mouseDownPixel = Util.getMouseRelativePixel(e, this.mapDiv);
	
		this.rectlg.push(this.mouseDownPixel.x+"=1="+this.mouseDownPixel.y);
        this.zoomBox = Util.createDiv('zoomBox',this.mouseDownPixel.x,this.mouseDownPixel.y, null,null,null,"absolute","2px solid green");
		var coord = Util.getCoordinateByPixel(this.mouseDownPixel, toolbar.model.getZoom());
		this.temppoint.push(new Point(coord.x/1e16, coord.y/1e16));
		this.tempb1=coord.y/1e16;
		this.tempa1=coord.x/1e16;
	  	//alert(coord.getPoint().x+";"+coord.getPoint().y);
        this.zoomBox.style.backgroundColor = "white";
        this.zoomBox.style.filter = "alpha(opacity=50)"; 
        this.zoomBox.style.opacity = "0.50";
        this.zoomBox.style.fontSize = "2px";
        this.mapDiv.appendChild(this.zoomBox);        
        Event.stop(e);
		
    },
    
    mouseMoveHandler: function(e, toolbar){
        this.mapDiv = toolbar.mapDiv;
        this.mouseMovePixel = Util.getMouseRelativePixel(e, this.mapDiv);
        
        if (this.mouseDownPixel) {
            var deltaX = Math.abs(this.mouseDownPixel.x - this.mouseMovePixel.x);
            var deltaY = Math.abs(this.mouseDownPixel.y - this.mouseMovePixel.y);
            this.zoomBox.style.width = Math.max(2, deltaX) + "px";
            this.zoomBox.style.height = Math.max(2, deltaY) + "px";
            if (this.mouseMovePixel.x < this.mouseDownPixel.x)
                this.zoomBox.style.left = this.mouseMovePixel.x+"px";
            if (this.mouseMovePixel.y < this.mouseDownPixel.y)
                this.zoomBox.style.top = this.mouseMovePixel.y+"px";
        }        
        Event.stop(e);
    },
    
    mouseUpHandler: function(e, toolbar){
		this.mouseUpPixel = Util.getMouseRelativePixel(e, this.mapDiv);
        if (this.mouseDownPixel && this.mouseMovePixel) {              
            var top = Math.min(this.mouseDownPixel.y, this.mouseMovePixel.y);
            var bottom = Math.max(this.mouseDownPixel.y, this.mouseMovePixel.y);
            var left = Math.min(this.mouseDownPixel.x, this.mouseMovePixel.x);
            var right = Math.max(this.mouseDownPixel.x, this.mouseMovePixel.x);
            		this.rectlg.push(this.mouseDownPixel.x+"=2="+this.mouseDownPixel.y);
			 // var coord = Util.getCoordinateByPixel(left, toolbar.model.getZoom());
            var leftTop = Util.getCoordinateByPixel({x:left,y:top}, toolbar.model.getZoom())
            var rightbottom = Util.getCoordinateByPixel({x:right,y:bottom}, toolbar.model.getZoom())
            var rect = new Rectangle(leftTop.x/1e16, rightbottom.x/1e16, leftTop.y/1e16, rightbottom.y/1e16);  
            this.removeZoomBox(this.zoomBox);
        }
		     document.onselectstart = function(){return false};
		
        this.coord = null;
        this.newCoord = null;
		var coord = Util.getCoordinateByPixel(this.mouseUpPixel, toolbar.model.getZoom());
		this.tempba2=coord.x/1e16;
		this.temppoint.push(new Point(this.tempba2,this.tempb1));
		this.temppoint.push(new Point(coord.x/1e16, coord.y/1e16));
		this.temppoint.push(new Point(this.tempa1,coord.y/1e16));
		this.savePoint=this.tempba2+","+this.tempb1+","+this.tempa1+","+coord.y/1e16;
		//alert(this.savePoint);//保存点
		//指令
		try{
			parent.getAreaRectangle(this.savePoint);
		}catch(e){}
		
		//定时定区域查车
		try{
			window.frames["timeAreaFrame"].findTimeArea(this.savePoint);
		}catch(e){}
		
		var pline = new polygon(this.temppoint, "red", 2);
        pline.setToMap(toolbar.mapDiv, toolbar.model);
		this.rectlg=new Array();
		this.temppoint=new Array();
        Event.stop(e);

    },
      
    removeZoomBox: function(zoom){
      if(!zoom) return;
      this.mapDiv.removeChild(zoom);
      zoom = null;
    },
      
    clickHandler: function(e, movel){
      Event.stop(e);
    },
      
    dblClickHandler: function(e, movel){
      Event.stop(e);
    }
   
});

//画多边形
PolygonTool = Class.create();
PolygonTool.prototype = Object.extend(new Abstract.Tool(), {
    cursorStyle:'url("style/TileAjax/images/curs/measure.cur")',
    isDrag: false,
    selected: false,        
    alt: '多边形',
    measure: new Array(),
    savePoint:new Array(),
    polHashMap:new HashMap(),
    
    mouseDownHandler: function(e, toolbar){
        if(!this.lineDiv)
        this.lineDiv = Util.createDiv('lineDiv');
        this.mapDiv = toolbar.mapDiv;
        this.mapDiv.appendChild(this.lineDiv);                
        this.mouseDownPixel = Util.getMouseRelativePixel(e, this.mapDiv);
        
        if(!this.isDrag)
            this.isDrag = true;
        this.lastX=this.mouseDownPixel.x;   
        this.lastY=this.mouseDownPixel.y;      
        this.line='<v:line from="'+this.lastX+','+this.lastY+'" to="'+this.mouseDownPixel.x+','+this.mouseDownPixel.y+'" strokecolor="green" strokeweight="2pt" style="position:absolute;left:-3px;top:-3px;z-index:111122213;"></v:line>';
        this.vLine = document.createElement(this.line);
        this.lineDiv.appendChild(this.vLine);           
        var coord = Util.getCoordinateByPixel(this.mouseDownPixel, toolbar.model.getZoom());
              //  alert("Mesure:coordX:"+coord.getPoint().x+";"+coord.getPoint().y);
        this.measure.push(new Point(coord.x/1e16,coord.y/1e16));
        //this.savePoint.push(coord.x/1e16,coord.y/1e16);
       // this.savePoint.push(Math.round((coord.x/1e16)*1000)/1000 +','+ (Math.round((coord.y/1e16)*1000)/1000)+'*');
        this.savePoint.push(coord.x/1e16+','+ coord.y/1e16+'#');
        Event.stop(e);
    }, 
    
    mouseMoveHandler: function(e, toolbar){
        if(!this.isDrag)
            return;   
       //alert("mouseMoveHandler:"+this.isDrag);
        this.mouseMovePixel = Util.getMouseRelativePixel(e, this.mapDiv);
        this.vLine.to = this.mouseMovePixel.x + "," + this.mouseMovePixel.y;      
        Event.stop(e);
    },
    
    dblClickHandler: function(e, toolbar){
        if(!this.isDrag || !this.lineDiv)
           return;  
        this.lineDiv.innerHTML = "";
            this.mapDiv.removeChild(this.lineDiv);
        var pline = new polygon(this.measure, "red", 2);
        pline.setToMap(toolbar.mapDiv, toolbar.model);
        
        
        
        
        var temppoint=this.savePoint.toString().replace(/#,/g,'*');
        temppoint=temppoint.substring(0,(temppoint.length-1));
        //alert("=="+temppoint);//面需要的点
        polySave(temppoint);
       /* try{
        	parent.getAreaPolygon(this.savePoint);
        }catch(e){}*/
        this.measure = new Array();
        this.savePoint=new Array();
        this.isDrag=false;        
        
        Event.stop(e);
    },
    
  
      
    clickHandler: function(e, model) {
        Event.stop(e);
    },
  
    mouseUpHandler: function(e, model){
        Event.stop(e);
    }
});


function hideWindown(e, id) {
    var obj = $(id);
    obj.style.display = "none";
    Event.stop(e);
}

LineSet = Class.create();
LineSet.prototype = Object.extend(new Abstract.Tool(), {
    cursorStyle:'url("style/TileAjax/images/curs/measure.cur")',
    isDrag: false,
    selected: false,        
    alt: '道路设置',
    measure: new Array(),
    savePoint: new Array(),
    
    mouseDownHandler: function(e, toolbar){
		
        if(!this.lineDiv)
        this.lineDiv = Util.createDiv('lineDiv');
        this.mapDiv = toolbar.mapDiv;
        this.mapDiv.appendChild(this.lineDiv);                
        this.mouseDownPixel = Util.getMouseRelativePixel(e, this.mapDiv);
        
        if(!this.isDrag)
            this.isDrag = true;
        this.lastX=this.mouseDownPixel.x;   
        this.lastY=this.mouseDownPixel.y;      
        this.line='<v:line from="'+this.lastX+','+this.lastY+'" to="'+this.mouseDownPixel.x+','+this.mouseDownPixel.y+'" strokecolor="green" strokeweight="2pt" style="position:absolute;left:-3px;top:-3px;z-index:111122213;"></v:line>';
        this.vLine = document.createElement(this.line);
        this.lineDiv.appendChild(this.vLine);           
        var coord = Util.getCoordinateByPixel(this.mouseDownPixel, toolbar.model.getZoom());
        this.savePoint.push(coord.x/1e16+','+ coord.y/1e16+'#');
        this.measure.push(new Point(coord.x/1e16, coord.y/1e16));
        Event.stop(e);
    }, 
    
    mouseMoveHandler: function(e, toolbar){
        if(!this.isDrag)
            return;   
        this.mouseMovePixel = Util.getMouseRelativePixel(e, this.mapDiv);
        this.vLine.to = this.mouseMovePixel.x + "," + this.mouseMovePixel.y;      
        Event.stop(e);
    },
    
    dblClickHandler: function(e, toolbar){
        if(!this.isDrag || !this.lineDiv)
           return;  
        this.lineDiv.innerHTML = "";
	    this.mapDiv.removeChild(this.lineDiv);
        var pline = new Polyline(this.measure, "red", 2);
        pline.setToMap(toolbar.mapDiv, toolbar.model);
        var temppoint=this.savePoint.toString().replace(/#,/g,'*');
        temppoint=temppoint.substring(0,(temppoint.length-1));
        //alert(temppoint);//保存当前点
        linesave(temppoint);
       /* try{
        	parent.getRoute(this.savePoint);
        }catch(e){}
        */
        this.savePoint = new Array();
        this.measure = new Array();
        this.isDrag=false;        
     Event.stop(e);
    },
    
  
    clickHandler: function(e, model) {
        Event.stop(e);
    },
  
    mouseUpHandler: function(e, model){
        Event.stop(e);
    }
});

//圆形
PonTool = Class.create();
PonTool.prototype = Object.extend(new Abstract.Tool(), {
    cursorStyle:'url("style/TileAjax/images/curs/measure.cur")',
    selected: false,        
    alt: '圆形',
    measure: new Array(),
	temppoint:new Array(),
	savePoint:new Array(),
	pi:Math.PI,
	cyclex:'',
	cycley:'',
	radio:'',
	xx:'',
	yy:'',
	mm:'',
	
	
     mouseDownHandler: function(e, toolbar) {  
		
	if(!this.lineDiv)
        this.lineDiv = Util.createDiv('lineDiv');
        this.mapDiv = toolbar.mapDiv;
        this.mapDiv.appendChild(this.lineDiv);                
        this.mouseDownPixel = Util.getMouseRelativePixel(e, this.mapDiv);
        
        if(!this.isDrag)
            this.isDrag = true;
        this.lastX=this.mouseDownPixel.x;   
        this.lastY=this.mouseDownPixel.y;    
        //alert(this.lastX+'<>'+this.lastY)
        this.line='<v:line from="'+this.lastX+','+this.lastY+'" to="'+this.mouseDownPixel.x+','+this.mouseDownPixel.y+'" strokecolor="green" strokeweight="2pt" style="position:absolute;left:-3px;top:-3px;z-index:111122213;"></v:line>';
        this.vLine = document.createElement(this.line);
        this.lineDiv.appendChild(this.vLine);           

        var coord = Util.getCoordinateByPixel(this.mouseDownPixel, toolbar.model.getZoom());
        this.measure.push(new Point(coord.x/1e16, coord.y/1e16));
        
        Event.stop(e);
		
    },
    
    mouseMoveHandler: function(e, toolbar){
    	if(!this.isDrag)
            return;   
        this.mouseMovePixel = Util.getMouseRelativePixel(e, this.mapDiv);
        this.vLine.to = this.mouseMovePixel.x + "," + this.mouseMovePixel.y;      
        Event.stop(e);
    },
    
    mouseUpHandler: function(e, toolbar){
    	if(!this.isDrag || !this.lineDiv)
           return;  
    	this.mouseUpPixel = Util.getMouseRelativePixel(e, this.mapDiv);
        this.lineDiv.innerHTML = "";
        this.xx=this.mouseUpPixel.x;   
        this.yy=this.mouseDownPixel.y;   
        
        var xcoord = Util.getCoordinateByPixel(this.mouseUpPixel, toolbar.model.getZoom());
        this.measure.push(new Point(xcoord.x/1e16, xcoord.y/1e16));
       	 
        var pline = new Polyline(this.measure, "red", 2);
        
        this.mm = pline.getLength();
       	 
       this.xx=Math.abs(this.xx-this.lastX);
       this.yy=Math.abs(this.yy-this.lastY);
       //alert(this.mouseUpPixel.x/1e16);
      // alert(this.xx+"<>"+this.lastX)
       var coord = Util.getCoordinateByPixel2(this.xx,this.yy, toolbar.model.getZoom());
		for(var i=0;i<360;i+=0.5){ 
			   this.radio=i*this.pi/180; 
			   this.cyclex=this.xx*Math.cos(this.radio)+this.lastX; 
			   this.cycley=this.xx*Math.sin(this.radio)+this.lastY; 
			   var coord = Util.getCoordinateByPixel2(this.cyclex,this.cycley, toolbar.model.getZoom());
		  	   this.savePoint.push(new Point(coord.x/1e16, coord.y/1e16));
		}
		//alert(this.lastX+'<>'+this.lastY+'='+this.xx);//保存点
		//alert(this.cyclex+'==='+this.cycley)
		this.temppoint.push(coord.x/1e16, coord.y/1e16,this.mm)
		//alert(this.savePoint);
		//alert(this.measure);
		roundSave(this.temppoint);
		var pline = new polygon(this.savePoint, "red", 2);
		pline.setToMap(toolbar.mapDiv, toolbar.model);
        //alert(this.measure.toString()+'===='+pline.getLength());
        
        this.savePoint = new Array();
        this.measure = new Array();
        this.isDrag=false;        
        Event.stop(e);

    },
      
    removeZoomBox: function(zoom){
      if(!zoom) return;
      this.mapDiv.removeChild(zoom);
      zoom = null;
    },
      
    clickHandler: function(e, movel){
      Event.stop(e);
    },
      
    dblClickHandler: function(e, movel){
      Event.stop(e);
    }
   
});

//区域查询
RegSerachTool = Class.create();
RegSerachTool.prototype = Object.extend(new Abstract.Tool(), {
    cursorStyle:'url("style/TileAjax/images/curs/measure.cur")',
    selected: false,        
    alt: '区域查询',
	rectlg: new Array(),
	temppoint:new Array(),
	savePoint:new Array(),
	
	
	    mouseDownHandler: function(e, toolbar) {  
		
		if(!this.lineDiv)
        this.lineDiv = Util.createDiv('RectangleDiv');
        this.mapDiv = toolbar.mapDiv;
        this.mapDiv.appendChild(this.lineDiv);                
        this.mouseDownPixel = Util.getMouseRelativePixel(e, this.mapDiv);
	
		this.rectlg.push(this.mouseDownPixel.x+"=1="+this.mouseDownPixel.y);
        this.zoomBox = Util.createDiv('zoomBox',this.mouseDownPixel.x,this.mouseDownPixel.y, null,null,null,"absolute","2px solid green");
		var coord = Util.getCoordinateByPixel(this.mouseDownPixel, toolbar.model.getZoom());
		this.temppoint.push(new Point(coord.x/1e16, coord.y/1e16));
		this.tempb1=coord.y/1e16;
		this.tempa1=coord.x/1e16;
	  	//alert(coord.getPoint().x+";"+coord.getPoint().y);
        this.zoomBox.style.backgroundColor = "white";
        this.zoomBox.style.filter = "alpha(opacity=50)"; 
        this.zoomBox.style.opacity = "0.50";
        this.zoomBox.style.fontSize = "2px";
        this.mapDiv.appendChild(this.zoomBox);        
        Event.stop(e);
		
    },
    
    mouseMoveHandler: function(e, toolbar){
        this.mapDiv = toolbar.mapDiv;
        this.mouseMovePixel = Util.getMouseRelativePixel(e, this.mapDiv);
        
        if (this.mouseDownPixel) {
            var deltaX = Math.abs(this.mouseDownPixel.x - this.mouseMovePixel.x);
            var deltaY = Math.abs(this.mouseDownPixel.y - this.mouseMovePixel.y);
            this.zoomBox.style.width = Math.max(2, deltaX) + "px";
            this.zoomBox.style.height = Math.max(2, deltaY) + "px";
            if (this.mouseMovePixel.x < this.mouseDownPixel.x)
                this.zoomBox.style.left = this.mouseMovePixel.x+"px";
            if (this.mouseMovePixel.y < this.mouseDownPixel.y)
                this.zoomBox.style.top = this.mouseMovePixel.y+"px";
        }        
        Event.stop(e);
    },
    
    mouseUpHandler: function(e, toolbar){
		this.mouseUpPixel = Util.getMouseRelativePixel(e, this.mapDiv);
        if (this.mouseDownPixel && this.mouseMovePixel) {              
            var top = Math.min(this.mouseDownPixel.y, this.mouseMovePixel.y);
            var bottom = Math.max(this.mouseDownPixel.y, this.mouseMovePixel.y);
            var left = Math.min(this.mouseDownPixel.x, this.mouseMovePixel.x);
            var right = Math.max(this.mouseDownPixel.x, this.mouseMovePixel.x);
            		this.rectlg.push(this.mouseDownPixel.x+"=2="+this.mouseDownPixel.y);
			 // var coord = Util.getCoordinateByPixel(left, toolbar.model.getZoom());
            var leftTop = Util.getCoordinateByPixel({x:left,y:top}, toolbar.model.getZoom())
            var rightbottom = Util.getCoordinateByPixel({x:right,y:bottom}, toolbar.model.getZoom())
            var rect = new Rectangle(leftTop.x/1e16, rightbottom.x/1e16, leftTop.y/1e16, rightbottom.y/1e16);  
            this.removeZoomBox(this.zoomBox);
        }
		     document.onselectstart = function(){return false};
		
        this.coord = null;
        this.newCoord = null;
		var coord = Util.getCoordinateByPixel(this.mouseUpPixel, toolbar.model.getZoom());
		this.tempba2=coord.x/1e16;
		this.temppoint.push(new Point(this.tempba2,this.tempb1));
		this.temppoint.push(new Point(coord.x/1e16, coord.y/1e16));
		this.temppoint.push(new Point(this.tempa1,coord.y/1e16));
		this.savePoint=this.tempba2+","+this.tempb1+","+this.tempa1+","+coord.y/1e16;
		//var polline = new polygon(this.savePoint, "red", 2,'name');
		//map.addOverlay(polline);
		//alert(this.savePoint);//保存点
		try{
			likeSerach(this.savePoint);
		}catch(e){}
		//var pline = new polygon(this.temppoint, "red", 2);
        // pline.setToMap(toolbar.mapDiv, toolbar.model);
		this.rectlg=new Array();
		this.savePoint=new Array();
		this.temppoint=new Array();
        Event.stop(e);

    },
      
    removeZoomBox: function(zoom){
      if(!zoom) return;
      this.mapDiv.removeChild(zoom);
      zoom = null;
    },
      
    clickHandler: function(e, movel){
      Event.stop(e);
    },
      
    dblClickHandler: function(e, movel){
      Event.stop(e);
    }
   
});

//兴趣点
PointTool = Class.create();
PointTool.prototype = Object.extend(new Abstract.Tool(), {
    cursorStyle:'default',
    selected: false,        
    alt: '兴趣点',
    
    mouseDownHandler: function(e, toolbar){
		$("name").value="";
		var _event = e ? e : window.event;
		var _target = e ? e.target : window.event.srcElement;
		var xy=new Coordinate( _event.clientY + document.body.scrollTop-100,
				( _event.clientX + document.body.scrollLeft < 160 ? _event.clientX + document.body.scrollLeft + 10  : _event.clientX  + document.body.scrollLeft-30));
	     $("pointPanel").style.top = xy.x;	 
	     $("pointPanel").style.left = xy.y;	
	     this.mapDiv = toolbar.mapDiv;               
	     this.mouseDownPixel = Util.getMouseRelativePixel(e, this.mapDiv);
	     var coord = Util.getCoordinateByPixel(this.mouseDownPixel, toolbar.model.getZoom());
        $("pointPanel").style.display = '';
	    $("name").focus();
	    $("longitude").value=coord.getPoint().x;
		$("latitude").value=coord.getPoint().y;
    },
    mouseMoveHandler: function(e, toolbar){},
    mouseUpHandler: function(e, toolbar){}

});

//区域设置
RegTool = Class.create();
RegTool.prototype = Object.extend(new Abstract.Tool(), {
    cursorStyle:'url("style/TileAjax/images/curs/measure.cur")',
    selected: false,        
    alt: '区域设置',
	rectlg: new Array(),
	temppoint:new Array(),
	savePoint:new Array(),
	
	
	    mouseDownHandler: function(e, toolbar) {  
		
		if(!this.lineDiv)
        this.lineDiv = Util.createDiv('RectangleDiv');
        this.mapDiv = toolbar.mapDiv;
        this.mapDiv.appendChild(this.lineDiv);                
        this.mouseDownPixel = Util.getMouseRelativePixel(e, this.mapDiv);
	
		this.rectlg.push(this.mouseDownPixel.x+"=1="+this.mouseDownPixel.y);
        this.zoomBox = Util.createDiv('zoomBox',this.mouseDownPixel.x,this.mouseDownPixel.y, null,null,null,"absolute","2px solid green");
		var coord = Util.getCoordinateByPixel(this.mouseDownPixel, toolbar.model.getZoom());
		this.temppoint.push(new Point(coord.x/1e16, coord.y/1e16));
		this.tempb1=coord.y/1e16;
		this.tempa1=coord.x/1e16;
	  	//alert(coord.getPoint().x+";"+coord.getPoint().y);
        this.zoomBox.style.backgroundColor = "white";
        this.zoomBox.style.filter = "alpha(opacity=50)"; 
        this.zoomBox.style.opacity = "0.50";
        this.zoomBox.style.fontSize = "2px";
        this.mapDiv.appendChild(this.zoomBox);        
        Event.stop(e);
		
    },
    
    mouseMoveHandler: function(e, toolbar){
        this.mapDiv = toolbar.mapDiv;
        this.mouseMovePixel = Util.getMouseRelativePixel(e, this.mapDiv);
        
        if (this.mouseDownPixel) {
            var deltaX = Math.abs(this.mouseDownPixel.x - this.mouseMovePixel.x);
            var deltaY = Math.abs(this.mouseDownPixel.y - this.mouseMovePixel.y);
            this.zoomBox.style.width = Math.max(2, deltaX) + "px";
            this.zoomBox.style.height = Math.max(2, deltaY) + "px";
            if (this.mouseMovePixel.x < this.mouseDownPixel.x)
                this.zoomBox.style.left = this.mouseMovePixel.x+"px";
            if (this.mouseMovePixel.y < this.mouseDownPixel.y)
                this.zoomBox.style.top = this.mouseMovePixel.y+"px";
        }        
        Event.stop(e);
    },
    
    mouseUpHandler: function(e, toolbar){
		this.mouseUpPixel = Util.getMouseRelativePixel(e, this.mapDiv);
        if (this.mouseDownPixel && this.mouseMovePixel) {              
            var top = Math.min(this.mouseDownPixel.y, this.mouseMovePixel.y);
            var bottom = Math.max(this.mouseDownPixel.y, this.mouseMovePixel.y);
            var left = Math.min(this.mouseDownPixel.x, this.mouseMovePixel.x);
            var right = Math.max(this.mouseDownPixel.x, this.mouseMovePixel.x);
            		this.rectlg.push(this.mouseDownPixel.x+"=2="+this.mouseDownPixel.y);
			 // var coord = Util.getCoordinateByPixel(left, toolbar.model.getZoom());
            var leftTop = Util.getCoordinateByPixel({x:left,y:top}, toolbar.model.getZoom())
            var rightbottom = Util.getCoordinateByPixel({x:right,y:bottom}, toolbar.model.getZoom())
            var rect = new Rectangle(leftTop.x/1e16, rightbottom.x/1e16, leftTop.y/1e16, rightbottom.y/1e16);  
            this.removeZoomBox(this.zoomBox);
        }
		     document.onselectstart = function(){return false};
		
        this.coord = null;
        this.newCoord = null;
		var coord = Util.getCoordinateByPixel(this.mouseUpPixel, toolbar.model.getZoom());
		this.tempba2=coord.x/1e16;
		this.temppoint.push(new Point(this.tempba2,this.tempb1));
		this.temppoint.push(new Point(coord.x/1e16, coord.y/1e16));
		this.temppoint.push(new Point(this.tempa1,coord.y/1e16));
		this.savePoint=this.tempba2+","+this.tempb1+"*"+this.tempa1+","+coord.y/1e16;
		var polline = new polygon(this.temppoint, "red", 2,'name');
		map.addOverlay(polline);
		//alert(this.savePoint);//保存点
		regSave(this.savePoint);
		/*try{
			likeSerach(this.savePoint);
		}catch(e){}*/
		//var pline = new polygon(this.temppoint, "red", 2);
        // pline.setToMap(toolbar.mapDiv, toolbar.model);
		this.rectlg=new Array();
		this.temppoint=new Array();
        Event.stop(e);

    },
      
    removeZoomBox: function(zoom){
      if(!zoom) return;
      this.mapDiv.removeChild(zoom);
      zoom = null;
    },
      
    clickHandler: function(e, movel){
      Event.stop(e);
    },
      
    dblClickHandler: function(e, movel){
      Event.stop(e);
    }
   
});

