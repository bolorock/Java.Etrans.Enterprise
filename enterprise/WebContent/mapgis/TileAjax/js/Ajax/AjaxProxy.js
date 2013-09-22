AjaxProxy = Class.create();
AjaxProxy.prototype = {  
    initialize: function(sUrl, sPars, hOnSuccess, hOnFailure, times){
        this.url = sUrl;
        this.pars = sPars;
        this.onSuccessHandler = hOnSuccess;
        this.onFailureHandler = hOnFailure;
        this.timeOut = times;    
    
        var ajaxReq = new Ajax.Request(
             this.url,
             {method: 'get', parameters: this.pars, onSuccess: this.success.bind(this), onFailure: this.failure.bind(this)} 
        );
    },
  
    success: function(result){  
        this.onSuccessHandler(result);      
    },
  
    failure: function(result){  
        if(this.timeOut > 1)
        {
            var ajaxReq = new Ajax.Request(
                this.url,       
                {method: 'get', parameters: this.pars, onSuccess: this.success.bind(this), onFailure: this.failure.bind(this)} 
            );
            this.timeOut -= 1;
        }
        else
        {    
            this.onFailureHandler();    
        }
    }
};
