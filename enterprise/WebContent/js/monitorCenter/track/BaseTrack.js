Object.extend = function(destination, source) {    
	for (property in source) {       
		destination[property] = source[property];    
	}     
	return destination;  
	}  
Object.prototype.extend = function(object) {     
	return Object.extend.apply(this, [this, object]);  
} 
var trackBAck = {}
trackBAck.prototype={        
	baseLineDraw:function(ArrayList,opts){                 
		return this.lineDraw(ArrayList,opts);  
	}
}