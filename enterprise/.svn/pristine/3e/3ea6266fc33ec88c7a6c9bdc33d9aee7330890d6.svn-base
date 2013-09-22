$(function() {
	// 读取地物点
	pointCheckAll();

	// 线路
	routeCheckAll();

	// 矩形区域
	rectangleCheckAll();

	// 圆形区域
	roundCheckAll();

	// 多边形区域
	polygonCheckAll();


});



// 读取地物点
function pointCheckAll() {
	// 读取区域
	var jsonParams = {
		datetimes : new Date()
	};
	$.post("sys/findCustomMapPoint.action", jsonParams, function(data) {
		var t = "";
		t += "<table class='form'  style='text-align:left;margin-bottom: 10px;' >";
		t += "<tr>";
		t += "<th colspan='2' style='text-align:left;'> <input type='checkbox' point='0' area='point' value='0' id='pointCheckAll'/>地物点 </th>";
		t += "</tr>";
		t += "<tbody>";

		if (data != 'false') {
			var arrlist = data ;
			for ( var a = 0; a < arrlist.length; a++) {
				t += "<tr class='odd'>";
				t += "<td><input type='checkbox' value='" + arrlist[a].id + "' point='" + arrlist[a].longitude + ","
						+ arrlist[a].latitude + "' pointName='" + arrlist[a].name +"' area='point' name='point' />" + arrlist[a].name + "</td>";
				t += "<td width='5'><div align='center'><img src='imgs/remove.gif' area='point' value='"
						+ arrlist[a].id + "' style='cursor: hand;' alt='删除此地物点' width='15' height='16'></div></td>";
				t += "</tr>";
			}
		} else {
			t += "<tr class='odd'>";
			t += "<td colspan='2'  style='text-align:left;'><div align='center'>还未定义地物点!</div></td>";
			t += "</tr>";
		}
		t += " </tbody>";
		t += " </table>";

		$("#pointTable").html(t);

		// 加载点击事件
			$("#pointCheckAll").click(function() {
				var flag = $("#pointCheckAll").attr("checked");
				if (flag == "checked") {
					
					$("input:checkbox[name='point']").each(function() {
						if ($(this).attr("checked") =="checked") {
							var val = $(this).val();
							parent.delPoint(val);
						}
					});
					//parent.map.model.clearOverLayers();  
					$("input:checkbox[name='point']").each(function() {
						$(this).attr("checked", true);
						var val = $(this).val();
						var area = this.area;
						var point = this.point;
						var pointName=this.pointName;
						 
						var lng=this.point.split(",")[0];
						var lat=this.point.split(",")[1];
					     parent.addPoint(val,pointName,lng,lat);
					});
				} else {
					$("input:checkbox[name='point']").each(function() {
						
						$(this).attr("checked", false);
						var val = $(this).val();
						parent.delPoint(val);
					});
				}
			});

			// 复选框沟选事件
			$('input:checkbox').bind('click', function() {
				
				var flag = $(this).attr("checked");
				var val = $(this).val();
				var area = this.area;
				var point = this.point;
				var pointName=this.pointName;
				var lng=this.point.split(",")[0];
				var lat=this.point.split(",")[1];

				// 非全选
					if (val != '0') {
						// 沟选
					if (flag) {
						// 地物点
						if (area == 'point') {
							parent.setCenterZoom(lng,lat);
							parent.addPoint(val,pointName,lng,lat);
						}
					} else if (area == 'point'){ // 去沟
						parent.delPoint(val);
						
					}
				}
			});

			// 删除
			$("img[area='point']").bind('click', function() {
				if (confirm("您确定要删除此条数据吗?")) {
					var val = $(this).val();
					parent.delPoint(val);
					var jsonParams = {
							ids : this.value,
							datetimes : new Date()
					};
					$.post("sys/deleteCustomMapPoint.action", jsonParams, function(data) {
						pointCheckAll();
					});
			 
				}
			});

		});
}

// 线路
function routeCheckAll() {
	var jsonParams = {
		datetimes : new Date()
	};
	$.post("sys/findCustomMapLine.action", jsonParams, function(data) {
		var t = "";
		t += "<table class='form'  style='text-align:left;'>";
		t += "<tr>";
		t += "<th colspan='2'  style='text-align:left;'> <input type='checkbox' point='0' area='route' value='0' id='routeCheckAll'/>线路 </th>";
		t += "</tr>";
		t += "<tbody>";

		if (data != 'false') {
			var arrlist = data;
			for ( var a = 0; a < arrlist.length; a++) {
				t += "<tr class='odd'>";
				t += "<td><input type='checkbox' value='" + arrlist[a].id + "' point='" + arrlist[a].location
						+ "' lineName='" + arrlist[a].name + "' area='route' name='route' />" + arrlist[a].name + "</td>";
				t += "<td width='5'><div align='center'><img src='imgs/remove.gif' area='route' value='"
						+ arrlist[a].id + "' style='cursor: hand;' alt='删除此线路' width='15' height='16'></div></td>";
				t += "</tr>";
			}
		} else {
			t += "<tr class='odd'>";
			t += "<td colspan='2'><div align='center'>还未定义线路!</div></td>";
			t += "</tr>";
		}
		t += " </tbody>";
		t += " </table>";

		$("#routeTable").html(t);

		// 加载点击事件
			$("#routeCheckAll").click(function() {
				if ($(this).attr("checked") == "checked") {
					
					$("input:checkbox[name='route']").each(function() {
						if ($(this).attr("checked") == "checked") {
							var val = $(this).val();
							parent.delLine(val);
						}
					});
					
					
					$("input:checkbox[name='route']").each(function() {
						$(this).attr("checked", true);
						var val = $(this).val();
						 
						var area = this.area;
						var point = this.point;
						var lineName=this.lineName;
						parent.addLine(val,lineName,point);
				 	});
				} else {
					$("input:checkbox[name='route']").each(function() {
						$(this).attr("checked", false);
						var val = $(this).val();
						parent.delLine(val);
						//parent.Removeline(val);
					});
				}
			});

			// 复选框沟选事件
			$('input:checkbox').bind('click', function() {
				var flag = $(this).attr("checked");
				var val = $(this).val();
				var area = this.area;
				var point = this.point;
				var lineName=this.lineName;
				 

				// 非全选
					if (val != '0') {
						// 沟选
					if (flag) {
						// 地物点
						if (area == 'route') {
							var arr=point.split("*");
							var lnglat=arr[0].split(",");
							var lng=lnglat[0];
							var lat=lnglat[1];
							parent.setCenterZoom(lng,lat);
							parent.addLine(val,lineName,point);
						}
					} else if (area == 'route') { // 去沟
						parent.delLine(val);
					}
				}
			});

			// 删除
			$("img[area='route']").bind('click', function() {
				if (confirm("您确定要删除此条数据吗?")) {
					var jsonParams = {
						ids : this.value,
						datetimes : new Date()
					};
					var val = $(this).val();
					parent.delLine(val);
					$.post("sys/deleteCustomMapLine.action", jsonParams, function(data) {
						routeCheckAll();
					});
				}
			});
		});

}

// 矩形区域
function rectangleCheckAll() {
	// 读取区域
	var jsonParams = {
	    shapeId : 1,
		datetimes : new Date()
	};
	   $.post(
					"sys/findCustomMapPlane.action",
					jsonParams,
					function(data) {
						var t = "";
						t += "<table class='form'  style='text-align:left;'>";
						t += "<tr>";
						t += "<th colspan='2'  style='text-align:left;'> <input type='checkbox' point='0' area='rectangle' value='0' id='rectangleCheckAll'/>矩形区域 </th>";
						t += "</tr>";
						t += "<tbody>";

						if (data != 'false') {
							var arrlist = data ;
							for ( var a = 0; a < arrlist.length; a++) {
								t += "<tr class='odd'>";
								t += "<td><input type='checkbox' value='" + arrlist[a].id + "' point='"
										+ arrlist[a].location + "' regName='"	+ arrlist[a].name 
										+ "' area='rectangle' name='rectangle' />"
										+ arrlist[a].name + "</td>";
								t += "<td width='5'><div align='center'><img src='imgs/remove.gif' area='rectangle' value='"
										+ arrlist[a].id
										+ "' style='cursor: hand;' alt='删除此区域' width='15' height='16'></div></td>";
								t += "</tr>";
							}
						} else {
							t += "<tr class='odd'>";
							t += "<td colspan='2'><div align='center'>还未定义区域!</div></td>";
							t += "</tr>";
						}
						t += " </tbody>";
						t += " </table>";

						$("#rectangleTable").html(t);

						// 加载点击事件
						$("#rectangleCheckAll").click(function() {
							$("input:checkbox[name='rectangle']").each(function() {
								if ($(this).attr("checked") == "checked") {
									var val = $(this).val();
									parent.delRect(val);
								}
							});
							if ($(this).attr("checked") == "checked") {
								$("input:checkbox[name='rectangle']").each(function() {
									$(this).attr("checked", true);
									var val = $(this).val();
									var area = this.area;
									var point = this.point;
									var regName=this.regName;
									
									parent.addRect(val,regName,point);
									//alert('ff'+val+"<>"+point);
									
								});
							} else {
								$("input:checkbox[name='rectangle']").each(function() {
									$(this).attr("checked", false);
									var val = $(this).val();
									
									parent.delRect(val);
									//parent.map.model.clearOverLayers();  
								});
							}
						});

						// 复选框沟选事件
						$('input:checkbox').bind('click', function() {
							var flag = $(this).attr("checked");
							var val = $(this).val();
							var area = this.area;
							var point = this.point;
							var regName=this.regName;

							// 非全选
								if (val != '0') {
									// 沟选
								if (flag) {
									// 地物点
									if (area == 'rectangle') {
										var arr=point.split("*");
										var lnglat=arr[0].split(",");
										var lng=lnglat[0];
										var lat=lnglat[1];
										parent.setCenterZoom(lng,lat);
										parent.addRect(val,regName,point);
									}
								} else  if (area == 'rectangle') { // 去沟
									parent.delRect(val);
									///parent.map.model.clearOverLayers();  
								}
							}
						});

						// 删除
						$("img[area='rectangle']").bind('click', function() {
							var val = $(this).val();
							if (confirm("您确定要删除此条数据吗?")) {
								var jsonParams = {
									ids : this.value,
									datetimes : new Date()
								};
								parent.delRect(val);
								$.post("sys/deleteCustomMapPlane.action", jsonParams, function(data) {
									rectangleCheckAll();
								});
							}
						});
					});

}

// 圆形区域
function roundCheckAll() {
	// 读取区域
	var jsonParams = {
	    shapeId : 2,
		datetimes : new Date()
	};
	$.post("sys/findCustomMapPlane.action", jsonParams, function(data) {
		var t = "";
		t += "<table class='form' style='text-align:left;'>";
		t += "<tr>";
		t += "<th colspan='2'  style='text-align:left;'> <input type='checkbox' point='0' area='round' value='0' id='roundCheckAll'/>圆形区域 </th>";
		t += "</tr>";
		t += "<tbody>";

		if (data != 'false') {
			var arrlist = data ;
			for ( var a = 0; a < arrlist.length; a++) {
				 
				t += "<tr class='odd'>";
				t += "<td><input type='checkbox' radii='" + arrlist[a].radius + "' value='" + arrlist[a].id
						+ "' point='" + arrlist[a].location + "' roundName='" + arrlist[a].name+"' area='round' name='round' />" + arrlist[a].name
						+ "</td>";
				t += "<td width='5'><div align='center'><img src='imgs/remove.gif' area='round' value='"
						+ arrlist[a].id + "' style='cursor: hand;' alt='删除此区域' width='15' height='16'></div></td>";
				t += "</tr>";
			}
		} else {
			t += "<tr class='odd'>";
			t += "<td colspan='2'><div align='center'>还未定义区域!</div></td>";
			t += "</tr>";
		}
		t += " </tbody>";
		t += " </table>";

		$("#roundTable").html(t);

		// 加载点击事件
			$("#roundCheckAll").click(function() {
				if ($(this).attr("checked") == "checked") {
					$("input:checkbox[name='round']").each(function() {
						if ($(this).attr("checked") == "checked") {
							var val = $(this).val();
							parent.delEllipse(val);
						}
					});
					
					$("input:checkbox[name='round']").each(function() {
						$(this).attr("checked", true);
						var val = $(this).val();
						var point = this.point;
						var lng=point.split(",")[0];
						var lat=point.split(",")[1];
						var radii = this.radii;
						var roundName=this.roundName;
						parent.addEllipse(val,roundName,lng,lat,radii);
					});
				} else {
					$("input:checkbox[name='round']").each(function() {
						$(this).attr("checked", false);
						var val = $(this).val();
						parent.delEllipse(val);
					});
				}
			});

			// 复选框沟选事件
			$('input:checkbox').bind('click', function() {
				var flag = $(this).attr("checked");
				var val = $(this).val();
				var area = this.area;
				var point = this.point;
				var lng=point.split(",")[0];
				var lat=point.split(",")[1];
				var radii = this.radii;
				var roundName=this.roundName;

				// 非全选
					if (val != '0') {
						// 沟选
					if (flag) {
						// 地物点
						if (area == 'round') {
							//alert(point);
						//	alert(radii);
							parent.setCenterZoom(lng,lat);
							parent.addEllipse(val,roundName,lng,lat,radii);
							
						}
					} else if (area == 'round') { // 去沟
						parent.delEllipse(val);
						//alert("----"+point);
					}
				}
			});

			// 删除
			$("img[area='round']").bind('click', function() {
				if (confirm("您确定要删除此条数据吗?")) {
					var jsonParams = {
						ids : this.value,
						datetimes : new Date()
					};
					var val = $(this).val();
					parent.delEllipse(val);
					$.post("sys/deleteCustomMapPlane.action", jsonParams, function(data) {
						roundCheckAll();
					});
				}
			});

		});
}

// 多边形区域
function polygonCheckAll() {
	// 读取区域
	var jsonParams = {
	    shapeId : 3,
		datetimes : new Date()
	};
	$.post(
					"sys/findCustomMapPlane.action",
					jsonParams,
					function(data) {
						var t = "";
						t += "<table class='form' style='text-align:left;'>";
						t += "<tr>";
						t += "<th colspan='2'  style='text-align:left;'> <input type='checkbox' point='0' area='polygon' value='0' id='polygonCheckAll'/>多边形区域 </th>";
						t += "</tr>";
						t += "<tbody>";

						if (data != 'false') {
							var arrlist = data;
							for ( var a = 0; a < arrlist.length; a++) {
								t += "<tr class='odd'>";
								t += "<td><input type='checkbox' value='" + arrlist[a].id + "' point='"
										+ arrlist[a].location + "' polyName='"
										+ arrlist[a].name+"' area='polygon' name='polygon' />" + arrlist[a].name
										+ "</td>";
								t += "<td width='5'><div align='center'><img src='imgs/remove.gif' id='polygonImg' area='polygon' value='"
										+ arrlist[a].id
										+ "' style='cursor: hand;' alt='删除此区域' width='15' height='16'></div></td>";
								t += "</tr>";
							}
						} else {
							t += "<tr class='odd'>";
							t += "<td colspan='2'><div align='center'>还未定义区域!</div></td>";
							t += "</tr>";
						}
						t += " </tbody>";
						t += " </table>";

						$("#polygonTable").html(t);

						// 加载点击事件
						$("#polygonCheckAll").click(function() {
							if ($(this).attr("checked") == "checked") {
								$("input:checkbox[name='polygon']").each(function() {
									if ($(this).attr("checked") == "checked") {
										var val = $(this).val();
										parent.delPolygon(val);
									}
								});
								
								$("input:checkbox[name='polygon']").each(function() {
									$(this).attr("checked", true);
									var val = $(this).val();
									var area = this.area;
									var point = this.point;
									var polyName=this.polyName;
									parent.addPolygon(val,polyName,point);
								});
							} else {
								$("input:checkbox[name='polygon']").each(function() {
									$(this).attr("checked", false);
									var val = $(this).val();
									parent.delPolygon(val); 
								});
							}
						});

						// 复选框沟选事件
						$('input:checkbox').bind('click', function() {
							var flag = $(this).attr("checked");
							var val = $(this).val();
							var area = this.area;
							var point = this.point;
							var polyName=this.polyName;

							// 非全选
								if (val != '0') {
									// 沟选
								if (flag) {
									// 地物点
									if (area == 'polygon') {
										var arr=point.split("*");
										var lnglat=arr[0].split(",");
										var lng=lnglat[0];
										var lat=lnglat[1];
										parent.setCenterZoom(lng,lat);
										parent.addPolygon(val,polyName,point);
										//alert(point);
									}
								} else if (area == 'polygon') { // 去沟
									parent.delPolygon(val);
									//parent.map.model.clearOverLayers();  
								}
							}
						});

						// 删除
						$("img[area='polygon']").bind('click', function() {
							if (confirm("您确定要删除此条数据吗?")) {
								var jsonParams = {
									ids : this.value,
									datetimes : new Date()
								};
								var val = $(this).val();
								parent.delPolygon(val); 
								$.post("sys/deleteCustomMapPlane.action", jsonParams, function(data) {
									polygonCheckAll();
								});
							}
						});

					});
}

/**
 * 新增地物点
 */
function insertClinetPoint(name, lonlat) {
	lonlat=getRSHLngLat(lonlat);//取反偏移经纬度
	var jsonParams = {
		name : name,
		lonlat : lonlat,
		datetimes : new Date()
	};
	$.post("sys/createCustomMapPoint.action", jsonParams, function(data) {
		
		if(data=="true"){
			pointCheckAll();
		}else{
			alert('添加失败,请确认是否有同名！！');
		}
		
	});
}



/**
 * 新增区域
 */
function insertAreaOrRoadInfo(name, shapeId, radius, lonlat) {
	var lnglatStr="";
	if(shapeId==2){//圆形
		var temp=lonlat.split(",");
		 var lnglat=getRSHLngLat(temp[0]+","+temp[1]);
		 lnglatStr=lnglat;
	}else{
	 var temp=lonlat.split("*");
	 for(i=0;i<temp.length;i++){
		 var lnglat=getRSHLngLat(temp[i]);//temp[i]=经度,纬度
		 if(lnglatStr==""){
		 	lnglatStr=lnglat;
		 }else{
		 	lnglatStr=lnglatStr+"*"+lnglat;
		 }
	  }
	}
	var jsonParams = {
		name : name,
		shapeId : shapeId,
		radius : radius,
		lonlat : lnglatStr,
		datetimes : new Date()
	};
	$.post("sys/createCustomMapPlane.action", jsonParams, function(data) {
		if (data != 'false') {
			// 区域类型:1:矩形,2:圆形,3:多边形
			if (shapeId == '1') {
				rectangleCheckAll();
			} else if (shapeId == '2') {
				roundCheckAll();
			} else if (shapeId == '3') {
				polygonCheckAll();
			} 
		}else{
			alert('添加失败,请确认是否有同名！！');
		}
	});
}

/**
 * 新增线面
 */
function insertLine(name,lonlat) {
	var lnglatStr="";
	var temp=lonlat.split("*");
	 for(i=0;i<temp.length;i++){
		 var lnglat=getRSHLngLat(temp[i]);//temp[i]=经度,纬度
		 if(lnglatStr==""){
		 	lnglatStr=lnglat;
		 }else{
		 	lnglatStr=lnglatStr+"*"+lnglat;
		 }
	  }
	var jsonParams = {
		name : name,
		lonlat : lnglatStr,
		datetimes : new Date()
	};
	$.post("sys/createCustomMapLine.action", jsonParams, function(data) {
		if(data=="true"){
	       routeCheckAll();
		}else{
			alert('添加失败,请确认是否有同名！！');
		}
	});
}



/**
 * 取反偏移经纬度(入库时调用)
 * @param {} lng
 * @param {} lat
 * @return {}
 */
function getRSHLngLat(lnglat)
{
		 var param={
    		 date:new Date(),
             lnglat:lnglat	 
             };
	var url="monitorCenter/getRSHLngLat.action";
	var lnglagStr='';
	$.ajax({
		url : url,
		type : "POST",
		dataType : "xml",
		data : param,
		async:false,
		success : function(req){
		  var result=req;
		  var lngElement = result.getElementsByTagName("lng")[0].childNodes[0];
		  var lng = lngElement.nodeValue;
		  var latElement = result.getElementsByTagName("lat")[0].childNodes[0];
		  var lat = latElement.nodeValue;
	      lnglagStr=lng+","+lat;
	      
		}
	});
	//alert(lnglagStr);
	return lnglagStr;

}