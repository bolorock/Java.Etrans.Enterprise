var noimg=basePath+"imgs/menu/noimg.png";
var setLen=8;	//最大设置个数
var hasSet;		//已经设置个数
$(function() {
	getMenuImage();
	
	initCarousel();
	
	//关闭窗口
	$("#btnCancle").click(function() {
		window.parent.closeWin();
	});

	// 保存
	$("#saveBtn").click(
			function() {
				var selected = $('#fnctionAuthTree').tree('getSelected');
				if (selected == null) {
					alert("请先选择菜单！");
					return;
				}
				var children=$('#fnctionAuthTree').tree('getChildren',selected.target);
				if (children.length){
					alert("请选择具体菜单！");
					return;
				}
				var menuId = selected.id;
				var menuName = $("#menuName").val();
				var menuIocId = $("#imgChoose").attr("iocId");
				
				if (menuIocId==null) {
					alert("请选择图标！");
					return
				}
				
				if ($.trim(menuName)==""){
					alert("请输入菜单简称！");
					return;
				}

				$.ajax({
					type : "POST",
					url : basePath+"sys/userMenu/addUserMenu.action",
					data : {
						functionMenuId : menuId,
						name : menuName,
						menuIocId : menuIocId
					},
					dataType : "JSON",
					success : function(data) {
						if (data) {
							if (data == true){
								$('#fnctionAuthTree').tree('check',selected.target); 
								window.parent.getUserMenu(); //刷新
								
//								var index=$("#img_"+menuIocId).parent().attr("jcarouselindex");
//								var carousel = $("#mycarousel").data("jcarousel");
//								carousel.removeAndAnimate(Number(index)); //删除一个图标
								reSetImage();
								
								hasSet+=1;
								if (hasSet==setLen){
									$("#saveBtn").hide();
								}
							}
						}
					}
				});
			});
	
	$("#btnDel").click(function(){
		var $img=$("#imgChoose");
		var node = $('#fnctionAuthTree').tree('getSelected');
		var menuId = node.id;
		
		$.ajax({
			type : "POST",
			url : basePath+"sys/userMenu/delUserMenu.action",
			data : {
				functionMenuId : menuId
			},
			dataType : "JSON",
			success : function(data) {
				if (data) {
					if (data == true){
						$('#fnctionAuthTree').tree('uncheck',node.target); 
						$("#menuName").val("");
						$img.removeAttr("iocId");
						$img.attr("src",noimg);
						$("#btnDel").hide();
						window.parent.getUserMenu(); //刷新

						//重设图标列表
						reSetImage();
						
						hasSet-=1;
						$("#saveBtn").show();
					}			
				}
				else{
					alert("删除失败！");
				}
			}
		});
	});

	initTree();
	
});

/**
 * 初始化jcarousel控件
 */
function initCarousel(){
	if ($("#mycarousel").find("li").length==0){
		$('#mycarousel').jcarousel({size:0});
	}
	else{
		$('#mycarousel').jcarousel();
	}	
	
	$("#mycarousel li").live("click",
			function() {
				var $img = $(this).find("img");
				$("#imgChoose").attr("src", $img.attr("src"))
							   .attr("iocId",$img.attr("id").substr(4));
			});
}


/**
 * 获取还没有使用的图标
 */
function getMenuImage(){
	$.ajax({
		type : "POST",
		async: false,
		url : basePath+"sys/userMenu/getMenuImage.action",
		success : function(data) {
			if (data) {
				var htmlStr="";
				for(var i=0;i<data.length;i++){
					htmlStr+="<li><img id='img_"+data[i].ID+"' src='"+basePath+data[i].imageURL+"' alt='请选择' /></li>";
				}

				$("#mycarousel").append(htmlStr);
			}
			else{
				alert("Fail:"+data);
			}
		}
	});
}

/**
 * 重设图标列表
 * @param carousel
 */
function reSetImage(){
	var carousel = $("#mycarousel").data("jcarousel");
	carousel.stopAuto();
	carousel.reset();
	
	$.ajax({
		type : "POST",
		async: false,
		url : basePath+"sys/userMenu/getMenuImage.action",
		success : function(data) {
			if (data) {
				var len=data.length;
				for(var i=0;i<len;i++){
					carousel.add(i+1,"<LI><img id='img_"+data[i].ID+"' src='"+basePath+data[i].imageURL+"' alt='请选择' ></LI>");
				}

				carousel.size(len);//设置其显示个数
			}
			else{
				alert("Fail:"+data);
			}
		}
	});
}

/**
 * 初始化菜单树形结构
 */
function initTree() {
	try {
		$("#fnctionAuthTree").html('<img src="'+basePath+'imgs/load.gif" />');
		$.ajax({
			type : "POST",
			url : basePath+"sys/role/getMenusForIndex.action",
			data : {
				userId : userId
			},
			dataType : "JSON",
			success : function(data) {
				$('#fnctionAuthTree').tree({
					data : data,
					checkbox : true,
					onlyLeafCheck:true,
					animate : true,
					onCheck:function(node, checked){
						if (checked){//选中的同时也选择节点
							$('#fnctionAuthTree').tree('select',node.target); 
						}
					},
					onSelect : function(node) {
						//有子节点
						var children=$('#fnctionAuthTree').tree('getChildren',node.target);
						if (children.length>0){
							$("#menuName").val("");
							$("#imgChoose").attr("src",noimg);
						}
						else{
							getMenuInfoById(node.id,node.text.substr(0, 6));
						}
					},
					onLoadSuccess:function(node, data){
						if (data.length){
							setNodeCheck();
						}
					}
				});
			}
		});
	} catch (e) {
	}
}

/**
 * 选中已设置菜单
 */
function setNodeCheck(){
	$.ajax({
		type : "POST",
		url : basePath+"sys/userMenu/getUserMenuId.action",
		success : function(data) {
			if (data) {
				var len=data.length;
				hasSet=len;
				if (len==setLen){
					$("#saveBtn").hide();
				}
				for(var i=0;i<len;i++){
					var node = $('#fnctionAuthTree').tree('find', data[i].FunctionMenuId);
					$('#fnctionAuthTree').tree('check', node.target);
				}
			}
			else{
				alert("Fail:"+data);
			}
		}
	});
}

/**
 * 获取菜单的图标和简称
 * @param menuId
 */
function getMenuInfoById(menuId,name) {
	var $img=$("#imgChoose");
	$.ajax({
		type : "POST",
		url : basePath+"sys/userMenu/getMenuInfoByMenuId.action",
		data : {
			functionMenuId : menuId
		},
		dataType : "JSON",
		success : function(data) {
			if (data) {
				$("#menuName").val(data.name);
				$img.attr("iocId",data.ID);
				$img.attr("src",data.imageURL);
				$img.attr("imgsrc",data.imageURL);
				$("#btnDel").show();
				$("#saveBtn").show();
			}
			else{
				$("#menuName").val(name);
				$img.removeAttr("iocId");
				$img.attr("src",noimg);
				$("#btnDel").hide();
				if (hasSet==setLen){ //到了最大设置个数
					$("#saveBtn").hide();
				}
				else{
					$("#saveBtn").show();
				}
			}
		}
	});
}