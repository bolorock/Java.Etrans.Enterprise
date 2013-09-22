AjaxResult = new Object();
AjaxResult.cbSearchSuccess = function(Result){
    alert(Result.responseText);
    if(MapContainer){
        var xmlDoc = Result.responseXML;
        var err = xmlDoc.getElementsByTagName('Error');  
        if(err.length==0){  
            var tip = new ResultTipinfo(Util.getValueOfNoPX(MapContainer.style.width)-210,10,200,200);
            tip.setPageNum(15);
            tip.setToDoc(MapContainer, xmlDoc);
        }else{
            alert(err[0].firstChild.nodeValue);
        }            
    }
};

AjaxResult.cbRouteSuccess = function(Result){
    alert(Result.responseText);
    if(map){
        var xmlDoc = Result.responseXML; 
        var err = xmlDoc.getElementsByTagName('Error');  
        if(err.length==0){   
            var xmlItems = xmlDoc.getElementsByTagName('LPts/Pts');
            for(var i=0; i<xmlItems.length; i++){
                var pts = new Array();
                var ptItems = xmlItems[i].getElementsByTagName('Pt');
                for(var j=0; j<ptItems.length; j++){
                    var x = ptItems[j].getElementsByTagName('X')[0].firstChild.nodeValue;
                    var y = ptItems[j].getElementsByTagName('Y')[0].firstChild.nodeValue;
                    pts.push(new Point(x,y));
                }
                var pline = new Polyline(pts, "red", 3);
                pline.setToMap(map.mapControl.mapDiv, map.model);
            }
        }else{
            alert(err[0].firstChild.nodeValue);
        }
    }
};

AjaxResult.cbTileSuccess = function(Result){
    if(map){
        var xmlDoc = Result.responseXML; 
        var err = xmlDoc.getElementsByTagName('Error');  
        if(err.length==0){   
            return xmlDoc.getElementsByTagName('Tile'); 
        }else{
            return "./images/map/back.gif";
        }
    }
};

AjaxResult.cbFail = function(){
    //TODO
};


ResultTipinfo = Class.create(); 
ResultTipinfo.prototype = {
    initialize: function(left, top, width, height){        
        this.id = Util.createUniqueID("Over_RTipinfo_");
        this.tipId = Util.createUniqueID("Over_RTipimg_");
        this.left = left;
        this.top = top;
        this.width = width;
        this.height = height;
        
        this.bPageId = Util.createUniqueID("bPage_");
        this.nPageId = Util.createUniqueID("nPage_");
        this.pageId = Util.createUniqueID("page_");
        this.pageNum = 10;
        this.pageIndex = 1;
        this.pageCount = 1;        
    },
    
    setInfo: function(info){
        this.info = info;
    },
    
    setPageNum: function(num){
        this.pageNum = num;
    },
    
    hideTip: function() {
        this.doc.removeChild(this.div);
    },
    
    bPage: function() {
        this.pageIndex -= 1;
        if(this.pageIndex<1) this.pageIndex = 1; 
        this.ShowInfo();       
    },
    
    nPage: function() {
        this.pageIndex += 1;
        if(this.pageIndex>this.pageCount) this.pageIndex = this.pageCount;
        this.ShowInfo();  
    },
    
    setToDiv: function(Doc){
        this.doc = Doc;
        
        this.div = Util.createDiv(this.id, this.left, this.top,this.width,this.height,null,'absolute');
        this.div.style.zIndex = 9000;
        this.div.style.cursor = "hand";
        this.div.style.background = "#FFFFFF";
		this.div.style.border = "1px solid #999999";
		this.div.style.fontSize = "12px";
		    
		this.div.innerHTML = '<div style="background:#e5ecf9;fontsize:12px"><table width="100%"><tr><td align="right"><img id="'+this.tipId+'" src="' + ImageBaseDir + 'controls/infowindow_close.gif" style="cursor:pointer"></td></tr></table></div>';
        if(this.info) this.div.innerHTML += this.info;
        this.doc.appendChild(this.div);
        
        Event.observe($(this.tipId), "click", this.hideTip.bindAsEventListener(this));               
    },
    
    setToDoc: function(docDiv, docXml){
        this.doc = docDiv;
        this.xmlDoc = docXml;
        
        this.div = Util.createDiv(this.id, this.left, this.top,this.width,this.height,null,'absolute');
        this.div.style.zIndex = 9000;
        this.div.style.cursor = "hand";
        this.div.style.background = "#FFFFFF";
		this.div.style.border = "1px solid #999999";
		this.div.style.fontSize = "12px";
		
        this.topHtml = '<div style="background:#e5ecf9;fontsize:12px"><table width="100%"><tr><td align="right"><img id="'+this.tipId+'" src="' + ImageBaseDir + 'controls/infowindow_close.gif" style="cursor:pointer"></td></tr></table></div>';
        this.bottomHtml = '<div style="background:#e5ecf9;fontsize:12px"><table width="100%"><tr><td align="right"><a id="'+this.bPageId+'" href="javascript:void(0);" style="font-size:12px">上一页</a>&nbsp<a id="'+this.nPageId+'" href="javascript:void(0);" style="font-size:12px;">下一页</a>&nbsp<a id="'+this.pageId+'" style="font-size:12px"></a></td></tr></table></div>'; 
		
		this.xmlItems = this.xmlDoc.getElementsByTagName('NewDataSet/ResultData');
		this.DefaultField = this.xmlDoc.getElementsByTagName('DefaultField')[0].firstChild.nodeValue;
		var count = this.xmlItems.length/this.pageNum;
		this.pageCount = parseInt(count);
		if(this.pageCount < count) this.pageCount += 1;
		
		this.doc.appendChild(this.div);	
		this.ShowInfo();	
    },
    
    ShowInfo: function(){
        var info = '';
        var atemp = (this.pageIndex-1)*this.pageNum;
        var btemp = this.pageIndex*this.pageNum;
        if(btemp > this.xmlItems.length) btemp = this.xmlItems.length;
        for(var i=atemp; i<btemp; i++){
            var name = Util.Trim(this.xmlItems[i].getElementsByTagName(this.DefaultField)[0].firstChild.nodeValue);
            info += '<div style="height:18px"><a>'+i+'</a>&nbsp<a href="javascript:alert('+i+');">'+name+'</a></div>';
        }
		    
		this.div.innerHTML = this.topHtml;
		this.div.innerHTML += info;
        this.div.innerHTML += this.bottomHtml;
        
        $(this.pageId).innerHTML = this.pageIndex + "/" + this.pageCount;        
        Event.observe($(this.tipId), "click", this.hideTip.bindAsEventListener(this)); 
        Event.observe($(this.bPageId), "click", this.bPage.bindAsEventListener(this));               
        Event.observe($(this.nPageId), "click", this.nPage.bindAsEventListener(this));               
    }
};
