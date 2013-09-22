var vehicleList = {
    
    moveDataBetweenList:function (src, dest) {
        var srcList = document.getElementsByName(src)[0];
        var destList = document.getElementsByName(dest)[0];
        var array = new Array();
        if (srcList.options != null) {
            for (i = 0; i < srcList.options.length; i++) {
                if (srcList.options[i].selected) {
                    destList.options.add(new Option(srcList.options[i].text, srcList.options[i].value));
                    array.push(i);
                }
            }
        }
        for (j=array.length-1; j>=0; j--) {
            srcList.options[array[j]]=null;
        }
    },
    selectAll:function(src,dest){
        var srcList = document.getElementsByName(src)[0];
        var destList = document.getElementsByName(dest)[0];
        var array = new Array();
        if (srcList.options != null) {
            for (i = 0; i < srcList.options.length; i++) {
                destList.options.add(new Option(srcList.options[i].text, srcList.options[i].value));
                array.push(i);
            }
        }
        for (j=array.length-1; j>=0; j--) {
            srcList.options[array[j]]=null;
        }
    }
}