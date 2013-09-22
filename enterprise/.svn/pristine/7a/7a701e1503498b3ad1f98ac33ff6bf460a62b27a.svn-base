Marker = Class.create(); 
Marker.prototype = Object.extend(new Abstract.OverLayer(), {
    initialize: function(){
        this.id = Util.createUniqueID("Over_Marker_");
        this.iscenter = false;
    },
    
    getCoord: function(){
        return this.coord;
    },
    setCoord: function(point){
    	//this.coord=point;
        this.coord = point.getCoord();
    },
    
    getIcon: function(){
        return this.icon;
    },
    setIcon: function(icon){
        this.icon = icon;
    },
    getTipinfo: function(){
        return this.info;
    },
    setTipinfo: function(info){
        this.info = info;
    },
    
    getShadowIcon: function(){
        return this.shadowIcon;
    },
    setShadowIcon: function(sIcon){
        this.shadowIcon = sIcon;
    },
    
    isCenter: function(iscenter){
        this.iscenter = iscenter;
    },
        
    setToMap: function(mapDiv, model, overLayDiv){
        this.mapDiv = mapDiv;
        this.model = model;
        
        this.sPoint = Util.getScreenPixel(this.coord, model.getZoom());
        
        var deltaX = this.sPoint.x - this.icon.width/2;
        var deltaY = this.sPoint.y - this.icon.height;
        // alert("deltaX:"+deltaX);
        //alert("deltaY:"+deltaY);
        if(this.iscenter) deltaY = deltaY + this.icon.height/2;       
        
        if(overLayDiv){
            this.div = overLayDiv;
            this.div.style.left = deltaX+'px';
            this.div.style.top = deltaY+'px';
        }
        else{
            this.div = Util.createDiv(this.id, deltaX, deltaY, this.icon.width, this.icon.height,null, 'absolute');
            this.div.style.zIndex = 8000;
            //alert("marker div left:"+this.div.style.left);
            //alert("marker div top:"+this.div.style.top);
            // this.div.style.left="100px";
            // this.div.style.top="100px";
            this.div.style.backgroundImage = 'url(' + this.icon.src + ')';
            //this.div.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(src=" + this.icon.src + ", sizingmethod=scale);";
            this.div.style.cursor = "hand";
            this.insert();        
        }

        Event.observe(this.div, "click", this.markerClickHandler.bindAsEventListener(this));
    },

    // ��ʾ��Ϣ����
    markerClickHandler: function(){
   // 	alert("in markerClickHandler");
        if(this.info){
       // 	alert("in markerClickHandler this.info is not null");
            this.info.setToMap(this.mapDiv, this.model); 
        }
    }
});

Icon = Class.create();
Icon.prototype = {
    initialize: function(w, h, src){
        this.width = w;
        this.height = h;
        this.src = src;
    }
};
TextMarkOverLayer = Class.create(); 
TextMarkOverLayer.prototype = Object.extend(new Abstract.OverLayer(),{
	initialize: function(text_,type_){
    	 this.id = Util.createUniqueID("Over_Marker_");
    	//this.iscenter = false;
    	this.text=text_;
    	this.type=type_;
		this.width_=60;
	},
	createDiv:function(){	
		var div = document.createElement("div");
		div.id=this.id;
		div.style.border = "1px solid #cc3333";
		div.style.position = "absolute";
		div.style.fontSize = '7.5pt';
		div.style.fontColor="#15428b";
		div.style.textAlign="center";
		div.style.zIndex = 1200;
		div.style.backgroundColor="#ffffcc";
		div.style.width = this.width_+"px";		
		var text_=this.text.split("<br/>");
		for (var i=0;i<text_.length;i++){	
			if (i>0)		
				div.appendChild(document.createElement('br'));				
				div.appendChild(document.createTextNode(text_[i]));
			}
		return div;
	},
	 getCoord: function(){
        return this.coord;
    },
    setCoord: function(point){
    	//this.coord=point;
        this.coord = point.getCoord();
    },
    setToMap: function(mapDiv, model, overLayDiv){
        this.mapDiv = mapDiv;
        this.model = model;  
	
        this.sPoint = Util.getScreenPixel(this.coord, model.getZoom());
       
		if (this.div==null){
			
        	this.div=this.createDiv();
        }
	
        this.div.style.width=this.width_+"px";
		
        if (this.type==2){
        	  this.div.style.left=this.sPoint.x+"px";
        	  this.div.style.top=this.sPoint.y+"px";
        }else{
        	  if (this.sPoint.x<10)
        		  this.div.style.left = this.sPoint.x + "px";
        	  else
        		  this.div.style.left = (this.sPoint.x-35) + "px";
        	  this.div.style.top = (this.sPoint.y+5) + "px";
        }	
        this.insert();
    }
});


