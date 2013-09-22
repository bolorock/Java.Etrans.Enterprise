//Scale Control
ScaleControl = Class.create();
ScaleControl.prototype = {
    initialize: function(container){
        this.id = Util.createUniqueID('Scale_');
        this.scaleDiv = this.create(container);
        container.appendChild(this.scaleDiv);
    },
    
    create: function(container){
        var left = Util.getValueOfNoPX(container.style.left)+10;
        //var top = Util.getValueOfNoPX(container.style.top)+510;
        var top = Util.getValueOfNoPX(container.style.top)+Util.getValueOfNoPX(container.style.height)-24;
		//alert(top);
        var div = Util.createDiv(this.scaleId, left, top, null, null,null,'absolute');
        var scaleInfo = Util.createDiv(null, 10, 370, 450, null,ImageBaseDir+'scale.gif','absolute');
        container.appendChild(scaleInfo);
        div.style.fontSize = "12px";
       // div.style.zIndex=10001;
       // div.innerHTML = '<div id="scaleInfo" style="padding:5px;z-index:10001;vertical-align:bottom;">&fghfgh</div>';
		 div.innerHTML = '<div id="scaleInfo" style="padding-left:12px;padding-top:360px;z-index:10;vertical-align:bottom;">&nbsp;</div>';
        return div;
    }   
};