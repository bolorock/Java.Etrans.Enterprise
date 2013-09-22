/**
 * <title>覆盖类工具总集</title>
 * <author>Pomelo(柚子.)</author>
 * <p> since:2013-05-14
 *    version:1.0 </p>
 *    
 * <descript>
 * 	尽可能的情况下直接使用已有实现的方法来创建修改覆盖图层
 * </descript>
 */
var markerUtils_B = {
		
		/**
		 * 通过设置参数传值
		 */
	     paramValue : {
	    	 width : 15,
	    	 height : 15,
	    	 src:"",
	    	 isParamValue:false
	     },
	     
	     /**
	      * 设置参数
	      * 
	      * @param width
	      * @param height
	      * @param src
	      * @param isParamValue
	      */
	     setParamValue : function(width,height,src,isParamValue) {
	    	 markerUtils_B.paramValue.width = width;
	    	 markerUtils_B.paramValue.height = height;
	    	 markerUtils_B.paramValue.src=src;
	    	 markerUtils_B.paramValue.isParamValue=isParamValue;
	     },
	     
	     /**
	      * 复位
	      */
	     isParamValueReset:function(){
	    	 markerUtils_B.paramValue.isParamValue = false;
	     },
	     
		/**
		 * 创建图标
		 * 
		 * @param latlng
		 * @param no
		 * @param obCar
		 * @returns
		 */
		createIcon:function(latlng, no,obCar){
			var icon;
			if(markerUtils_B.paramValue.isParamValue){
				icon = new BMap.Icon(
						markerUtils_B.paramValue.src, 
						new BMap.Size(markerUtils_B.paramValue.width,markerUtils_B.paramValue.height), 
						{
							anchor: new BMap.Size(
									markerUtils_B.paramValue.width,
									markerUtils_B.paramValue.height
							)
						}
				);
			}else{
				if (no == 1) {
					src = "imgs/car/point1.gif";
				} else if (no == 2) {
					src = "imgs/car/point2.gif";
				} else {
					src = "imgs/car/point3.gif";
				}
				markerUtils_B.paramValue.width = 15;
				markerUtils_B.paramValue.height = 15;
				icon = new BMap.Icon(src, new BMap.Size(
						markerUtils_B.paramValue.width,markerUtils_B.paramValue.height), 
						{
							anchor: new BMap.Size(
									markerUtils_B.paramValue.width,
									markerUtils_B.paramValue.height
							)
						}
				);
			}			
			return icon;
		},
		
		/**
		 * 创建带图片的覆盖物
		 * 
		 * @param latlng
		 * @param no
		 * @param obCar
		 * @returns {BMap.Marker}
		 */
		crateIconMarker:function(latlng, no,obCar){
			var tMarker=new BMap.Marker(latlng, {icon: markerUtils_B.createIcon(latlng, no, obCar)});
			tMarker.setZIndex(8005);
			return  tMarker;
		}
}
var markerUtils_T = {
		
		/**
		 * 通过设置参数传值
		 */
	     paramValue : {
	    	 width : 15,
	    	 height : 15,
	    	 src:"",
	    	 isParamValue:false
	     },
	     
	     /**
	      * 设置参数
	      * 
	      * @param width
	      * @param height
	      * @param src
	      * @param isParamValue
	      */
	     setParamValue : function(width,height,src,isParamValue) {
	    	 markerUtils_T.paramValue.width = width;
	    	 markerUtils_T.paramValue.height = height;
	    	 markerUtils_T.paramValue.src=src;
	    	 markerUtils_T.paramValue.isParamValue=isParamValue;
	     },
	     
	     /**
	      * 复位
	      */
	     isParamValueReset:function(){
	    	 markerUtils_T.paramValue.isParamValue = false;
	     },
	     
		/**
		 * 创建图标
		 * 
		 * @param latlng
		 * @param no
		 * @param obCar
		 * @returns
		 */
		createIcon:function(latlng, no,obCar){
			var icon;
			if(markerUtils_T.paramValue.isParamValue){
				icon = new SE.Icon(
						markerUtils_T.paramValue.src, 
						new SE.Size(markerUtils_T.paramValue.width,markerUtils_T.paramValue.height), 
						new SE.Point(16,16)
				);
			}else{
				if (no == 1) {
					src = "imgs/car/point1.gif";
				} else if (no == 2) {
					src = "imgs/car/point2.gif";
				} else {
					src = "imgs/car/point3.gif";
				}
				markerUtils_T.paramValue.width = 15;
				markerUtils_T.paramValue.height = 15;
				icon = new SE.Icon(
						src, 
						new SE.Size(markerUtils_T.paramValue.width,markerUtils_T.paramValue.height),
						new SE.Point(16,16)
				);
			}			
			return icon;
		},
		
		/**
		 * 创建带图片的覆盖物
		 * 
		 * @param latlng
		 * @param no
		 * @param obCar
		 * @returns {BMap.Marker}
		 */
		crateIconMarker:function(latlng, no,obCar){
			return  new SE.Marker(latlng,markerUtils_T.createIcon(latlng, no, obCar));
		}
}