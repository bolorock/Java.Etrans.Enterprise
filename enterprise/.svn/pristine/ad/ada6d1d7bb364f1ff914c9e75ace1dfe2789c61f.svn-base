Abstract.OverLayer = function(){};
Abstract.OverLayer.prototype = {

    initialize: function(mapDiv){
    },    
    insert: function(){
        if(this.model == null)
            return ;
        if (this.model.overlays == null)
			this.model.overlays = new HashMap();
        try{
        	if(typeof(this.div.name)=='undefined')
        	{
        		var divObject = new MyObject(this.div.id);
        		}
        	else{
        		var divObject = new MyObject(this.div.name);
        	}
    		this.model.overlays.put(divObject,this);
    		this.mapDiv.appendChild(this.div);
		}catch(e){}
        
		divObject = null;
    },    
    remove: function(){
        if(this.model == null)
            return ;
        if (this.model.overlays) {
            try{
            	var divObject = new MyObject(this.div.name);
			    this.model.overlays.removeMap(divObject);
			    this.mapDiv.removeChild(this.div);
			    this.div.onclick = null;
			    this.div = null;
			    this = null;
			    divObject = null;
			}catch(ex){
			}
		}
    }  
    
};