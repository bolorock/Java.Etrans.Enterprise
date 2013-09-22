ToolBar = Class.create();
ToolBar.prototype = {
    
    EVENT_TYPES: ["mouseover", "mouseout", "mousemove", "mousedown", "mouseup", "dblclick", "click"],
    
    initialize: function(container){
        this.container = container;
        this.bar = Util.createDiv(Util.createUniqueID('Tool_'));
        this.container.appendChild(this.bar);
        this.tools = new Object();
        this.currentTool = null;
    },
    
    addTool: function(tool, isDefault){
        if(!tool)
            return ;
        this.tools[tool.id] = tool;
        this.bar.appendChild(tool.div);
        if(isDefault){
            this.currentTool = tool;
            this.defaultTool = tool;
        }        
                
        //注册工具栏按钮事件；
        Event.observe(tool.div, "mouseout", tool.barMouseOutHandler.bindAsEventListener(this));
        Event.observe(tool.div, "mouseover", tool.barMouseOverHandler.bindAsEventListener(this));
        Event.observe(tool.div, "click", tool.barClickHandler.bindAsEventListener(this));
    },
    
    addCommand: function(cmd){
        if(!cmd)
            return ;
        this.tools[cmd.id] = cmd;
        this.bar.appendChild(cmd.div);
        
        //注册工具栏按钮事件；
        Event.observe(cmd.div, "mouseout", cmd.cmdMouseOutHandler.bindAsEventListener(this));
        Event.observe(cmd.div, "mouseover", cmd.cmdMouseOverHandler.bindAsEventListener(this));
        Event.observe(cmd.div, "click", cmd.cmdClickHandler.bindAsEventListener(this));
    },
    
    setMapModel: function(model){
        this.model = model;
    },
    
    clearCurrentToolStatus: function(){
        var toolDivs = this.bar.childNodes;
        for(var i=0; i<toolDivs.length; i++){
            var tool = this.tools[toolDivs[i].id]
            if(tool.selected==true){
                tool.selected = false;
                toolDivs[i].childNodes[0].src = tool.img_normal;
            }                
        }
        if(this.currentTool){
            this.currentTool.div.childNodes[0].src = this.currentTool.img_normal;
            this.currentTool.selected = false;
        }
    },    
    
    registerEventToMap: function(mapDiv){
        this.mapDiv = mapDiv;
        if(this.defaultTool) this.mapDiv.style.cursor = this.defaultTool.cursorStyle;
        Event.observe(mapDiv, "mousedown", this.mapMouseDownHandler.bindAsEventListener(this));
        Event.observe(mapDiv, "mousemove", this.mapMouseMoveHandler.bindAsEventListener(this));
        Event.observe(mapDiv, "mouseup", this.mapMouseUpHandler.bindAsEventListener(this));
        Event.observe(mapDiv, "dblclick", this.mapDblclickHandler.bindAsEventListener(this));
        Event.observe(mapDiv, "click", this.mapClickHandler.bindAsEventListener(this));
    },
    
    mapMouseDownHandler: function(e){
         if(this.currentTool == null || this.tools[this.currentTool.id].toolType=="Command")
            return;
         this.tools[this.currentTool.id].mouseDownHandler(e, this);
    },    
    mapMouseMoveHandler: function(e){
         if(this.currentTool == null || this.tools[this.currentTool.id].toolType=="Command")
            return;
         this.tools[this.currentTool.id].mouseMoveHandler(e, this);
    },    
    mapMouseUpHandler: function(e){
         if(this.currentTool == null || this.tools[this.currentTool.id].toolType=="Command")
            return;
         this.tools[this.currentTool.id].mouseUpHandler(e, this);
    },
    
    mapClickHandler: function(e){
        if(this.currentTool == null || this.tools[this.currentTool.id].toolType=="Command")
            return;
         this.tools[this.currentTool.id].clickHandler(e, this);
    },
    
    mapDblclickHandler: function(e){
        if(this.currentTool == null || this.tools[this.currentTool.id].toolType=="Command")
            return;
         this.tools[this.currentTool.id].dblClickHandler(e, this);
    }
    
}