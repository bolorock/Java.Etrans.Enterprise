Abstract.Command = function(){}
Abstract.Command.prototype = {
    initialize: function(id,img1,img2,img3,pos,left,top,width,height){
        this.toolType = "Command";        
        this.id = id;
        this.img_normal = ImageBaseDir + 'mapTools/' + img1;		
        this.img_over = ImageBaseDir + 'mapTools/' + img2;
        this.img_down = ImageBaseDir + 'mapTools/' + img3;
        this.position = pos;
        this.left = parseInt(left);
        this.top = parseInt(top);
        this.width = parseInt(width);
        this.height = parseInt(height);        
        this.div = Util.createDiv(this.id, this.left, this.top, this.width, this.height, this.img_normal, this.position, '0px solid #ccc');
        this.div.style.cursor = "pointer";
    },
    
    cmdClickHandler: function(e){       
        if(Event.element(e).childNodes.length>0) return;
        this.clearCurrentToolStatus();
        var cmd = this.tools[Event.element(e).parentNode.id]; 
		cmd.div.childNodes[0].src = cmd.img_down;
        if(!cmd.selected)
            cmd.selected = true;
        
       this.currentTool = this.defaultTool;
        this.currentTool.div.childNodes[0].src = this.currentTool.img_normal;
        this.mapDiv.style.cursor = this.currentTool.cursorStyle;        
        
        cmd.cmd_clickHandler(cmd, this.model, this.mapDiv);
        Event.stop(e);
    },
    
    cmdMouseOverHandler: function(e){
        var elm = Event.element(e)
        if(elm.childNodes.length>0)  return;
        var cmd = this.tools[elm.parentNode.id];
        if(cmd.selected == true)
            return;        
        elm.alt = cmd.alt;
         elm.src = cmd.img_over;
        Event.stop(e);        
    },
    
    cmdMouseOutHandler: function(e){
        var elm = Event.element(e)
        if(elm.childNodes.length>0)  return; 
        var cmd = this.tools[elm.parentNode.id];
        if(cmd.selected == true)
            return;
        elm.src = cmd.img_normal;
        elm.style.border = "0px solid ";
        Event.stop(e);
    } ,
    
    clearOrgDiv: function(container, index){
        var nodes = container.childNodes;
        for(var i=0; i<nodes.length; i++){
            if(nodes[i].id.indexOf('search'+index+'_')>-1){
                container.removeChild(nodes[i]);
            }
        }
    },
    
    registerEvent: function(source, param){
        Event.observe(source, param.split(',')[0], eval('this.'+param.split(',')[0]).bindAsEventListener(this));
        Event.observe(source, param.split(',')[1], eval('this.'+param.split(',')[1]).bindAsEventListener(this));
        Event.observe(source, param.split(',')[2], eval('this.'+param.split(',')[2]).bindAsEventListener(this));
    },
    
    mousedown: function(e){
        if(Event.element(e).childNodes.length==0)
            return;
        if(!this.dragged)
            this.dragged = true;
            
        this.elm = Event.element(e);
        this.orgPixelX = Util.getValueOfNoPX(this.elm.parentNode.style.left);
	    this.orgPixelY = Util.getValueOfNoPX(this.elm.parentNode.style.top);
	    this.elm.style.cursor = 'move';
        this.orgMousePixel = Util.getMousePixel(e);
        
	    if(this.elm.setCapture){
		    this.elm.setCapture();
	    }
	    else if (window.captureEvents){
		    window.captureEvents(Event.MOUSEMOVE|Event.MOUSEUP);
		}
    },
    
    mousemove: function(e){
        if(!this.dragged) return;
        if(!Event.element(e))
            return;
        this.newMousePixel = Util.getMousePixel(e);	
            
	    var deltaX = this.newMousePixel.x - this.orgMousePixel.x;
	    var deltaY = this.newMousePixel.y - this.orgMousePixel.y;
		this.elm.parentNode.style.left = (this.orgPixelX + deltaX) + "px";
		this.elm.parentNode.style.top = (this.orgPixelY + deltaY) + "px";
    },
    
    mouseup: function(e){
        if(!this.elm)
            return;
        if(this.elm.releaseCapture) 
			this.elm.releaseCapture();
		else if(window.captureEvents) 
			window.captureEvents(Event.MOUSEMOVE|Event.MOUSEUP);
		document.onmousemove = null;
		document.onmouseup = null;
        this.dragged = false;
        this.elm.style.cursor = '';
    }          
};


//全图
FullCmd = Class.create(); 
FullCmd.prototype = Object.extend(new Abstract.Command(), {
    alt: '全图显示',
    selected: false,  
    cmd_clickHandler: function(cmd, model, mapDiv){
        model.reset(mapDiv, $('sliderbar_'+model.getId()).parentNode);
    }
});

//清除
ClearCmd = Class.create(); 
ClearCmd.prototype = Object.extend(new Abstract.Command(), {
    alt: '清除操作痕迹',
    selected: false,  
    cmd_clickHandler: function(cmd, model, mapDiv){
        model.clearOverLayers(mapDiv); 
        if(routerPlan) routerPlan.resetRouter();       
    }
});

//前一屏   
PrevCmd = Class.create(); 
PrevCmd.prototype = Object.extend(new Abstract.Command(), {      
    alt: '移到上一屏',
    selected: false,  
    cmd_clickHandler: function(cmd, model, mapDiv){
        if(model.curIndex == -1)
            model.curIndex = model.traceIndex - 1;
        if(model.curIndex >0 && model.curIndex <= model.traceIndex - 1){
            var obj = model.traces[--model.curIndex];
            model.setViewCenterCoord(obj.coord);
            model.setZoom(new Zoom(obj.level));
            model.controls[mapDiv.id].paint(model, false);
            model.controls[model.ovId].paint(model);
            $('sliderbar_'+model.getId()).parentNode.style.top = ((MaxZoomLevel - obj.level) * 12 + 6) + "px"
        }
    }
});

//后一屏   
NextCmd = Class.create(); 
NextCmd.prototype = Object.extend(new Abstract.Command(), {
    alt: '移到下一屏',
    selected: false,  
    cmd_clickHandler: function(cmd, model, mapDiv){    
        
        if(model.curIndex == -1)
            model.curIndex = model.traceIndex - 1;
        if(model.curIndex >=0 && model.curIndex < model.traceIndex - 1){
            var obj = model.traces[++model.curIndex];
            model.setViewCenterCoord(obj.coord);
            model.setZoom(new Zoom(obj.level));
            model.controls[mapDiv.id].paint(model, false);
            model.controls[model.ovId].paint(model);
            $('sliderbar_'+model.getId()).parentNode.style.top = ((MaxZoomLevel - obj.level) * 12 + 6) + "px"
        }
    }
});      

//地图打印
PrintCmd = Class.create(); 
PrintCmd.prototype = Object.extend(new Abstract.Command(), {
    alt: '地图打印',
    selected: false,  
    cmd_clickHandler: function(cmd, model, mapDiv){
		
		bdhtml=window.document.body.innerHTML; 
		sprnstr="<!--startprint-->"; 
		eprnstr="<!--endprint-->"; 
		prnhtml=bdhtml.substr(bdhtml.indexOf(sprnstr)+17); 
		prnhtml=prnhtml.substring(0,prnhtml.indexOf(eprnstr)); 
		tempbody=window.document.body.innerHTML;
		//alert(window.document.body.innerHTML);
		window.document.body.innerHTML=prnhtml; 
        window.print();
		//window.document.body.innerHTML=tempbody;
    }
});
