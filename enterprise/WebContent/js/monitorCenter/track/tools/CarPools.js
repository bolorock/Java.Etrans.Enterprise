/**
 * <title>车辆类工具总集</title>
 * <author>Pomelo(柚子.)</author>
 * <p> since:2013-05-14
 *    version:1.0 </p>
 *  <descript>
 *  凡是涉及到地图表面车辆的操作，大数据量的情况下只允许调用此类提供的方法
 *  ,此类是结合性能优化进行了优化后的处理,如或原有方法不满足，请继承此类进行重写
 *  </descript>
 */

/**
 * 存储车辆对象
 */
var poolCarMap = new HashMap();

/**
 * 车辆工厂
 * 
 * 节约创建图片所耗时间，对于相同的图片不再进行重新创建，对相同的车辆不再进行再次创建Icon对象
 * @author Pomelo(柚子.)
 */
var carIconFactory_B = {
		
	/**
	 * 获取车辆
	 * 
	 * @param obCar 车辆
	 * @return Icon Car
	 */
	getCar : function(obCar) {
		if(poolCarMap.get(obCar.sim)==null){
			poolCarMap.put(obCar.sim,createCar(obCar));
		}
		return poolCarMap.get(obCar.sim);
	},
	
	/**
	 * 创建车辆图表
	 * 
	 * @param obCar
	 * @return Icon car
	 */
	createCar : function(obCar) {
		var state = 0;
		var head=carIconFactory_B.getHead(obCar.hd);
		if (obCar.sd > 0)state = 1;
		var IconPath;
		var IconInfo;
		var icon;
		var w;
		var h;
		var src;
		if (state == 0) {
			src = "imgs/car/carYellow" + head + ".gif";
		} else if (state == 1) {
			src = "imgs/car/car" + head + ".gif";
		} else if (state == 2) {
			src = "imgs/car/carBlue" + head + ".gif";
		} else {
			src = "imgs/car/red" + head + ".gif";
		}
		if (head == 1 || head == 2) {
			w = 20;
			h = 20;
			icon=new BMap.Icon(src,new BMap.Size(w,h)); 
		}else if (head == 3 || head == 4) {
			w = 20;
			h = 20;
			icon=new BMap.Icon(src,new BMap.Size(w,h)); 
		} else {
			w = 22;
			h = 22;
			icon=new BMap.Icon(src,new BMap.Size(w,h)); 
		}
		return icon;
	},
	
	/**
	 * 修改当前Icon的图片路径
	 * 
	 * @param icon
	 * @param obCar
	 */
	updateCurrentCar:function(currentCarMarker,obCar){
		var point = new BMap.Point(obCar.sHlon, obCar.sHlat);
		var icon = currentCarMarker.getIcon();
		var oldIconUrl = carIconFactory_B.getCarImage(obCar);
		if(icon.imageUrl!=oldIconUrl){
			icon.setImageUrl(oldIconUrl);
			currentCarMarker.setIcon(icon);
		}
		currentCarMarker.setPosition(point);
	},
	
	/**
	 * 获取车辆图片
	 * 
	 * @param obCar
	 */
	getCarImage:function(obCar){
		var state = 0;
		var src="";
		var head = carIconFactory_B.getHead(obCar.hd);
		if (obCar.sd > 0) {
			state = 1;
		}
		if (state == 0) {
			src = "imgs/car/car" + head + ".gif";
		} else if (state == 1) {
			src = "imgs/car/car" + head + ".gif";
		} else if (state == 2) {
			src = "imgs/car/carYellow" + head + ".gif";
		} else {
			src = "imgs/car/red" + head + ".gif";
		}	
		return src;
	},
	
	/**
	 * 得到方向
	 * 
	 * @param head
	 * @returns {Number}
	 */
	getHead : function(head) {
		head = head * 2;
		if ((head >= 0 && head < 22) || (head >= 336)) {
			return 3;
		} else if (head >= 22 && head < 66) {
			return 8;
		} else if (head >= 66 && head < 112) {
			return 1;
		} else if (head >= 112 && head <= 156) {
			return 8;
		} else if (head >= 156 && head < 202) {
			return 4;
		} else if (head >= 202 && head <= 246) {
			return 5;
		} else if (head >= 246 && head < 292) {
			return 2;
		} else if (head >= 292 && head < 336) {
			return 6;
		}
	}
}
/**
 * 车辆工厂
 * 
 * 节约创建图片所耗时间，对于相同的图片不再进行重新创建，对相同的车辆不再进行再次创建Icon对象
 * @author Pomelo(柚子.)
 */
var carIconFactory_T = {
		
	/**
	 * 获取车辆
	 * 
	 * @param obCar 车辆
	 * @return Icon Car
	 */
	getCar : function(obCar) {
		if(poolCarMap.get(obCar.sim)==null){
			poolCarMap.put(obCar.sim,createCar(obCar));
		}
		return poolCarMap.get(obCar.sim);
	},
	
	/**
	 * 创建车辆图表
	 * 
	 * @param obCar
	 * @return Icon car
	 */
	createCar : function(obCar) {
		var state = 0;
		var head=carIconFactory_T.getHead(obCar.hd);
		if (obCar.sd > 0)state = 1;
		var IconPath;
		var IconInfo;
		var icon;
		var w;
		var h;
		var src;
		if (state == 0) {
			src = "imgs/car/carYellow" + head + ".gif";
		} else if (state == 1) {
			src = "imgs/car/car" + head + ".gif";
		} else if (state == 2) {
			src = "imgs/car/carBlue" + head + ".gif";
		} else {
			src = "imgs/car/red" + head + ".gif";
		}
		if (head == 1 || head == 2) {
			w = 20;
			h = 20;
			icon=new SE.Icon(src,new SE.Size(w,h),new SE.Point(16,16)); 
			icon.removeShadow();
		}else if (head == 3 || head == 4) {
			w = 20;
			h = 20;
			icon=new SE.Icon(src,new SE.Size(w,h),new SE.Point(16,16)); 
			icon.removeShadow();
		} else {
			w = 22;
			h = 22;
			icon=new SE.Icon(src,new SE.Size(w,h),new SE.Point(16,16)); 
			icon.removeShadow();
		}
		return icon;
	},
	
	/**
	 * 修改当前Icon的图片路径
	 * 
	 * @param icon
	 * @param obCar
	 */
	updateCurrentCar:function(currentCarMarker,obCar){
		var point = new SE.Point(16,16);
		var icon = currentCarMarker.getIcon();
		var oldIconUrl = carIconFactory_T.getCarImage(obCar);
		if(icon.getSrc()!=oldIconUrl){
			currentCarMarker.setIconImage(oldIconUrl,icon.getSize(),point);
		}else{
			currentCarMarker.setIconImage(icon.getSrc(),icon.getSize(),point);
		}
		currentCarMarker.setOptions({lnglat:new SE.LngLat(obCar.sHlon, obCar.sHlat)});
	},

	/**
	 * 获取车辆图片
	 * 
	 * @param obCar
	 */
	getCarImage:function(obCar){
		var state = 0;
		var src="";
		var head = carIconFactory_T.getHead(obCar.hd);
		if (obCar.sd > 0) {
			state = 1;
		}
		if (state == 0) {
			src = "imgs/car/car" + head + ".gif";
		} else if (state == 1) {
			src = "imgs/car/car" + head + ".gif";
		} else if (state == 2) {
			src = "imgs/car/carYellow" + head + ".gif";
		} else {
			src = "imgs/car/red" + head + ".gif";
		}	
		return src;
	},
	
	/**
	 * 得到方向
	 * 
	 * @param head
	 * @returns {Number}
	 */
	getHead : function(head) {
		head = head * 2;
		if ((head >= 0 && head < 22) || (head >= 336)) {
			return 3;
		} else if (head >= 22 && head < 66) {
			return 8;
		} else if (head >= 66 && head < 112) {
			return 1;
		} else if (head >= 112 && head <= 156) {
			return 8;
		} else if (head >= 156 && head < 202) {
			return 4;
		} else if (head >= 202 && head <= 246) {
			return 5;
		} else if (head >= 246 && head < 292) {
			return 2;
		} else if (head >= 292 && head < 336) {
			return 6;
		}
	}
}