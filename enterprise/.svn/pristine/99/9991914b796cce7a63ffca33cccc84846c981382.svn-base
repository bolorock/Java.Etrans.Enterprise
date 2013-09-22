Tipinfo = Class.create(); 
Tipinfo.prototype = Object.extend(new Abstract.OverLayer(), {
    initialize: function(left, top, width, height){        
        this.id = Util.createUniqueID("Over_Tipinfo_");
        this.tipId = Util.createUniqueID("Over_Tipimg_");
        this.left = left;
        this.top = top;
        this.width = width;
        this.height = height;
    },
    
    getCoord: function(){
        return this.coord;
    }, 
    setCoord: function(point){
        this.coord = point.getCoord();
    },
    
    getInfo: function(){
        return this.info;
    },
    setInfo: function(info){
        this.info = info;
    },
        
    setToMap: function(mapDiv, model, overLayerDiv){    
        this.mapDiv = mapDiv;
        this.model = model;
        //alert("in tipinfo settomap");
        if(overLayerDiv){
            overLayerDiv.innerHTML = "";
            overLayerDiv.style.left = this.left;
            overLayerDiv.style.top = this.top;
            overLayerDiv.style.width = this.width;
            overLayerDiv.style.height = this.height;
            overLayerDiv.style.position = "absolute";
		    overLayerDiv.innerHTML = '<div style="background-image:url(' + ImageBaseDir + 'controls\info_bg.gif);background-repeat: repeat-x;fontsize:12px"><table width="100%" height="24" border="0" cellpadding="0" cellspacing="0" background="'+ ImageBaseDir +'controls/info_bg.gif"> <tr><td width="129" align="left"><img src="'+ ImageBaseDir +'controls/info_title.gif" width="129" height="24" border="0" /></td><td width="100%" align="right"><img id="'+this.tipId+'" src="' + ImageBaseDir + 'controls/close.gif" style="cursor:pointer"></td><td width="10" align="right"></td></tr></table></div>';
		    if(this.info) overLayerDiv.innerHTML += this.info;
        }
        else{            
        	this.pixelPoint = Util.getScreenPixel(this.coord, model.getZoom());
            this.left=this.pixelPoint.x-(this.width/2);
            this.top=this.pixelPoint.y-this.height;
            //alert("tipinfo setToMap:left-"+this.left+";top-"+this.top+";width-"+this.width+";height-"+this.height);
            this.div = Util.createDiv(this.id, this.left, this.top,this.width,this.height,null,'absolute');
            this.div.style.zIndex = 9000;
            this.div.style.cursor = "hand";
            this.div.style.background = "#f5f6f8";
		    this.div.style.border = "1px solid #b2c3d7";
		    this.div.style.fontSize = "12px";
		    
		    this.div.innerHTML = '<div style="background-image:url(' + ImageBaseDir + 'controls\info_bg.gif);background-repeat: repeat-x;fontsize:12px"><table width="100%" height="24" border="0" cellpadding="0" cellspacing="0" background="'+ ImageBaseDir +'controls/info_bg.gif"> <tr><td width="129" align="left"><img src="'+ ImageBaseDir +'controls/info_title.gif" width="129" height="24" border="0" /></td><td width="100%" align="right"><img id="'+this.tipId+'" src="' + ImageBaseDir + 'controls/close.gif" style="cursor:pointer"></td><td width="10" align="right"></td></tr></table></div>';
            if(this.info) this.div.innerHTML += this.info;
            //alert("tipinfo setToMap:"+this.div.innerHTML);
            this.insert();      
        }
        Event.observe($(this.tipId), "click", this.hideTip.bindAsEventListener(this));               
    },
    
    hideTip: function() {

       // this.div.style.display = "none";
        if(this.model == null){
            if(this.doc) this.doc.removeChild(this.div);
        }else{
            this.remove();
        }
    },
    
    setToDoc: function(Doc){
        this.doc = Doc;
        
        this.div = Util.createDiv(this.id, this.left, this.top,this.width,this.height,null,'absolute');
        this.div.style.zIndex = 9000;
        this.div.style.cursor = "hand";
        this.div.style.background = "#f5f6f8";
		this.div.style.border = "1px solid #b2c3d7";
		this.div.style.fontSize = "12px";
		    
		this.div.innerHTML = '<div style="background:#e5ecf9;fontsize:12px"><table width="100%" height="24" border="0" cellpadding="0" cellspacing="0" background="'+ ImageBaseDir +'controls/info_bg.gif"> <tr><td width="129" align="left"><img src="'+ ImageBaseDir +'controls/info_title.gif" width="129" height="24" border="0" /></td><td width="100%" align="right"><img id="'+this.tipId+'" src="' + ImageBaseDir + 'controls/close.gif" style="cursor:pointer"></td><td width="10" align="right"></td></tr></table></div>';
        if(this.info) this.div.innerHTML += this.info;
        this.doc.appendChild(this.div);
        
        Event.observe($(this.tipId), "click", this.hideTip.bindAsEventListener(this));               
    }
});
