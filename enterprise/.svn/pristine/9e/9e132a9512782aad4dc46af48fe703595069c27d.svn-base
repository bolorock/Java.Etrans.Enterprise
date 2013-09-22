var vehicleGroupBtnEvent = {
	/**
	 * 
	 */	
	createVehicleGroup:function(){
		
	}
}
var vehicleGroupBtnInit = {
		initBtnEvent :function(){

		// 修改按钮事件
		$("#modifyBut").click(function() {
			operateType = CONST.OPERATE_TYPE.MODIFY;
			setDisabled(elementIds, false);
			setDisabled(buttonIds1, false);
		});

		// 插入按钮事件
		$("#insertBut").click(function() {
			operateType = CONST.OPERATE_TYPE.INSERT;
			clearElements();
			setDisabled(elementIds, false);
			setButtonInsertState();
		});

		// 删除按钮事件
		$("#deleteBut")
				.click(
						function() {
							if (confirm("请在删除之前 [确认] 节点 [没被引用], 否则可能导致删除失败!\n确定删除将 [不可恢复], 是否确定?")) {
								var deleteUrl = "sys/deleteFunctionsMenu.action";
								var deleteParams = {
									"functionId" : functionNode.id
								};
								$.post(deleteUrl, deleteParams, function(data) {
									if (data == "true") {
										refreshTree();
										resetToInitState();
									} else if (data == "false") {
										showWarning("删除失败!");
									} else {
										showWarning(data);
									}
								});
							}
							return false;
						});

		// 保存按钮事件
		$("#saveBut").click(function() {
				
				var flag = $("#formTable").beforeSubmit();
				if(flag == false)
					return false;
			
				var functionName = $.trim($("#functionName").val()); // 功能名称
				var functionCode = $.trim($("#functionCode").val()); // 功能代码
				var functionImg = $.trim($("#functionImg").val());// 功能图标
				var functionType = $("#functionType").val(); // 功能类型
				var ordering = $.trim($("#ordering").val()); // 显示序号
				var state = $("#state").val(); // 状态. 是否有效
				var remark = $("#remark").val(); // 描述
				var parentFuncId = $.trim($("#parentFuncId").val()); // 父类ID
				var assemblySpanList = $("#assemblyNameList div span"); // 程序集对应的span列表
				var assemblyName = null; // 程序集字符串. 以'|'隔开

				// 检查程序集是否为空
				if (!assemblySpanList || assemblySpanList.length <= 0) {
					$("#assemblyNameListspan").showMessage({type:"error",closeable:true,text:"程序集不能为空!"});
					return false;
				}
				// 组装程序集, 以'|'隔开
				else {
					var tmpArray = [];
					$.each(assemblySpanList, function(i, n) {
						tmpArray[i] = $.trim($(this).html());
					});
					assemblyName = tmpArray.join("|");
				}

				if (!confirm("确定将保存指定记录, 是否确定?")) {
					return false;
				}

				// 设置保存相关参数
				var saveParams = {
					"functionName" : functionName,
					"functionCode" : functionCode,
					"functionImg" : functionImg,
					"functionType" : functionType,
					"assemblyName" : assemblyName,
					"ordering" : ordering,
					"state" : state,
					"remark" : remark
				// "menu.parentFuncId" : parentFuncId
				};

				// 修改后保存
				if (operateType == CONST.OPERATE_TYPE.MODIFY) {
					var modifyUrl = "sys/updateFunctionsMenu.action";
					saveParams["functionId"] = functionNode.id;
					$.post(modifyUrl, saveParams, function(data) {
						if (data == "true") {
							initElements();
							setButtonSelectState();
							refreshTree();
							resetToInitState();
						} else {
							showWarning("保存失败!");
						}
					});
				}
				// 插入后保存
				else {
					var saveUrl = "sys/insertFunctionsMenu.action";
					
					if (operateType == CONST.OPERATE_TYPE.INSERT.TOP) { // 插入顶级功能菜单
						saveParams["functionId"] = 0;
						saveParams["parentFuncId"] = 0;
					} else {
						saveParams["functionId"] = functionNode.id; // 插入子功能菜单
						saveParams["parentFuncId"] = functionNode.id;
					}

					$.post(saveUrl, saveParams, function(data) {
						if (data == "true") {
							clearElements();
							initElements();

							setDisabled(buttonIds2, true);
							if (moduleId == CONST.ROOT_NODE_ID)
								setDisabled( [ "addTopFuncBut" ], false);

							refreshTree();
							resetToInitState();
						} else {
							showWarning("保存失败!");
						}
					});
				}

			});
		}
}