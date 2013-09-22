// --------------------------------- 定义常量 -------------------------------- //
var CONST = {}; // 常量对象

// 树相关常量
CONST.ROOT_NODE_ID = 0; // 默认根节点ID, 该节点在初始化数据库时导入，不可删除，不显示

// 操作类型
CONST.OPERATE_TYPE = {};
CONST.OPERATE_TYPE.INSERT = "insert"; // 插入
CONST.OPERATE_TYPE.INSERT.TOP = "insertTop"; // 顶级菜单插入
CONST.OPERATE_TYPE.MODIFY = "modify"; // 修改

// 菜单类型
CONST.MENU_TYPE = {};
CONST.MENU_TYPE.MAIN_FUNCTION = "mainFunction"; // 主功能菜单
CONST.MENU_TYPE.CHILD_FUNCTION = "childFunction"; // 其他子菜单
// --------------------------------- 定义变量 -------------------------------- //
var functionTree = null; // 树对象
var elementIds = [ "functionName", "functionCode", "functionImg",
		"functionType", "assemblyName", "ordering", "state", "remark",
		"assemblyBut" ]; // 所有表单元素的ID数组
var showElementIds = [ "functionName", "functionCode", "functionImg",
		"functionType", "ordering", "state", "remark", "parentFuncId" ]; // 显示时需要设置的元素ID数组
var buttonIds1 = [ "insertBut", "modifyBut", "deleteBut", "saveBut",
		"cancelBut" ]; // 所有按钮的ID数组
var buttonIds2 = [ "insertBut", "modifyBut", "deleteBut", "saveBut",
		"cancelBut", "addTopFuncBut" ]; // 所有按钮的ID数组
var functionNode = null; // 当前选中的节点对象
var menuType = null; // 当前选中的菜单类型. 选中主功能菜单时为"mainFunction",
						// 选中其他功能菜单时为"childFunction"
var operateType = null; // 当前操作类型. 插入状态时为"insert", 修改状态时为"modify"
var parentNodeId = CONST.ROOT_NODE_ID; // 父节点(功能)ID
var moduleId = CONST.ROOT_NODE_ID; // 模块ID(顶级功能ID)

/**
 * 页面加载完毕时执行操作
 */
$(function() {
	ajaxSetup();
	initElements();
	initButtons();
	initFirstFunctions();
	initButtonEvents();
	initFunctionsTree();
	$("#formTable").validation();
});

/**
 * ajax设置
 */
function ajaxSetup() {
	$.ajaxSetup( {
		cache : false
	});
}

/**
 * 初始化表单元素
 */
function initElements() {
	setDisabled(elementIds, true);
}

/**
 * 初始化所有按钮
 */
function initButtons() {
	setDisabled(buttonIds1, true);
}

/**
 * 清空表单元素
 */
function clearElements() {
	$("#functionName").val("");
	$("#functionCode").val("");
	$("#functionType").get(0).selectedIndex = 0;
	$("#assemblyNameList").html("");
	$("#assemblyName").val("");
	$("#ordering").val("");
	$("#state").val("ENABLED");
	$("#remark").val("");
}

/**
 * 对顶级功能菜单进行处理
 */
function initFirstFunctions() {
	$("#firstFunctions option").each(function(i) {
		$(this).html($(this).html().replaceAll("\&amp;nbsp;", "&nbsp;"));
	});
}

/**
 * 重置为初始化状态
 */
function resetToInitState() {
	// 设置按钮状态
	setDisabled(buttonIds2, true);
	if (moduleId == CONST.ROOT_NODE_ID)
		setDisabled( [ "addTopFuncBut" ], false);

	parentNodeId = CONST.ROOT_NODE_ID;
	functionNode = null;
	menuType = null;
	operateType = null;
	initElements();
	clearElements();
}

/**
 * 刷新组织树
 */
function refreshTree() {
	initFunctionsTree();
}

/**
 * 设置选中主功能菜单时的样式
 * 
 * @param {}
 *            flag 是否选中标志. 选中为true, 否则为false
 */
function setSelectedMainFunction(flag) {
	if (flag) {
		$("#mainFunction").css("color", "#FFFFFF");
		$("#mainFunction").css("backgroundColor", "#000080");
	} else {
		$("#mainFunction").css("color", "#000000");
		$("#mainFunction").css("backgroundColor", "#FFFFFF");
	}
}

/**
 * 顶级菜单下拉框架改变时设置按钮状态
 * 
 * @param {}
 *            nodeId
 */
function disabledButtonsByNodeId(nodeId) {
	setDisabled(buttonIds1, true);
	// 设置添加顶级功能按钮状态
	if (nodeId == CONST.ROOT_NODE_ID)
		setDisabled( [ "addTopFuncBut" ], false);
	else
		setDisabled( [ "addTopFuncBut" ], true);
}

/**
 * 选中节点时设置按钮状态
 */
function setButtonSelectState1() {
	setDisabled( [ "insertBut" ], false);
	setDisabled( [ "saveBut", "modifyBut", "deleteBut", "cancelBut" ], true);
}

/**
 * 选中节点时设置按钮状态
 */
function setButtonSelectState2() {
	setDisabled( [ "insertBut", "modifyBut", "deleteBut" ], false);
	setDisabled( [ "saveBut", "cancelBut" ], true);
}

/**
 * 选中节点时设置按钮状态
 */
function setButtonSelectState() {
	// 如果选中主功能菜单
	if (menuType == CONST.MENU_TYPE.MAIN_FUNCTION) {
		setButtonSelectState1();
	} else {
		setButtonSelectState2();
	}
}

/**
 * 点击插入按钮时设置按钮状态
 */
function setButtonInsertState() {
	setDisabled( [ "insertBut", "modifyBut", "deleteBut", "addTopFuncBut" ],
			true);
	setDisabled( [ "saveBut", "cancelBut" ], false);
}

/**
 * 设置表单元素可不可用
 */
function setDisabled(eleIds, flag) {
	$.each(eleIds, function(i, n) {
		// $("#" + n).get(0).setAttribute("disabled", flag);
			$("#" + n).attr("disabled", flag);
		});
}

/**
 * 初始化按钮事件
 */
function initButtonEvents() {
	// 添加顶级功能
	$("#addTopFuncBut").click(function() {
		// 重置为初始化状态
			resetToInitState();

			// 保存操作类型
			operateType = CONST.OPERATE_TYPE.INSERT.TOP;

			// 设置表单元素和按钮状态
			setDisabled(elementIds, false);
			setButtonInsertState();
		});

	// 取消按钮事件
	$("#cancelBut").click(function() {
		setDisabled(elementIds, true);
		$(".errorMsg").closeMessage();
		// 选中节点时的取消
			if (functionNode) {
				setButtonSelectState();
				showFunctionInfo(functionNode);
			}
			// 没选中节点时的取消, 此处针对"添加顶级功能"的取消
			else {
				setDisabled(buttonIds1, true);
				setDisabled( [ "addTopFuncBut" ], false);
			}

			// 如果是"---顶级功能---"
			if (moduleId == CONST.ROOT_NODE_ID)
				setDisabled( [ "addTopFuncBut" ], false);
		});

	// 程序集添加按钮
	$("#assemblyBut").click(function() {
		var assemblyName = $.trim($("#assemblyName").val());
		if (assemblyName) {
			$("#assemblyNameList").append(getAssemblyLine(assemblyName));
			$("#assemblyName").val("");
		}
		
		// 检查程序集是否为空
		var assemblySpanList = $("#assemblyNameList div span");
		if (!assemblySpanList || assemblySpanList.length <= 0) {
			$("#assemblyNameListspan").showMessage({type:"error",closeable:true,text:"程序集不能为空!"});
		}else{
			$("#assemblyNameListspan").closeMessage();
		}
	});

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

/**
 * 根据功能链接名称构建程序集行
 * 
 * @param {}
 *            assemblyName 程序集功能链接
 * @return {} 程序集行div
 */
function getAssemblyLine(assemblyName) {
	var del = "<a href='javascript:void(0)'onclick='$(this).parent(\"div\").remove()' >删除</a>";
	var assemblyLine = "<div style='padding-bottom:3px' align='left'><span>"
			+ assemblyName + "</span>&nbsp;&nbsp;" + del + "</div>";
	return assemblyLine;
}

/**
 * 初如化功能菜单树
 */
function initFunctionsTree() {
	$('#functionTree').tree( {
		url : "sys/menuTree.action",
		animate : true,
		onClick : function(node) {
		
		$(".errorMsg").closeMessage();
		// 保存节点类型、和父节点ID
		functionNode = {
			id : node.id
		};
		parentNodeId = node.id;

		showFunctionInfo(node);
		// 设置选中主功能菜单时的样式
		setSelectedMainFunction(true);

		// 选中节点时设置按钮状态
		setButtonSelectState();
	}
	});
}

/**
 * 显示功能相关信息
 */
function showFunctionInfo(node) {
	if (node) 
	{
		var deptUrl = "sys/getMenuById.action";
		var jsonParams = {
			"functionId" : node.id
		};
		
		
		$.getJSON(deptUrl, jsonParams, function(dept) {
			
			$.each(showElementIds, function(i, n) {
				$("#" + n).val(dept[n]);
			});

			$("#parentFuncId").val(node.id);

			$("#assemblyNameList").html("");
			var assemblyNames = dept["assemblyNames"];
			if (assemblyNames && assemblyNames.length > 0) {
				for ( var i = 0; i < assemblyNames.length; i++) {
					$("#assemblyNameList").append(
							getAssemblyLine($.trim(assemblyNames[i])));
				}
			}
			$("#assemblyName").val("");

		});
	}
}

/**
 * 显示提示信息
 */
function showWarning(str){
	$.messager.alert('提示信息',str,'info');
}