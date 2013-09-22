var baiDuTrack = {
		createImagePointIcon:function(maplet,latlng, no,obCar){
			var newMarker = crateIconMarker(latlng, no,obCar);
			maplet.addOverlay(newMarker);
			newMarker.addEventListener("click", function(){
				var infoWindow = new BMap.InfoWindow(baiDuTrack.createInfoWindow(obCar));
				infoWindow.setTitle(obCar.no);
				this.openInfoWindow(infoWindow); 
				 
			});
			return newMarker;
		},
		createInfoWindow:function(obCar) {
			
		}
}
 