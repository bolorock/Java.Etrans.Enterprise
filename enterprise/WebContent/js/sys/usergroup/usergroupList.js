

$(function(){
	
	
	findUserGroups();
	
	/**
	 * 绑定打开或者关闭“添加用户角色面板”
	 */
	$("#btnPanelSet").click(showOrCloseAddUserGroupPanel);
	
});



/**
 * 查询用户角色
 */
function findUserGroups()
{
	
	$("#tbUserGroups").flexigrid( {
		url : 'findUserGroups.action',
		dataType : 'json',
		colModel : [{
			display : '角色名称',//表头
			name : 'name',//序号列为固定值fid
			width : 50,// 得加上，要不IE报错
			sortable:false,// 序号列不能排序
			align : 'center'//对齐方式
		}, 
		{
			display :'创建时间',//表头
			name : 'createTime',//JSON数据中属性名
			width : 50,// 得加上，要不IE报错
			sortable : true,//此列是否能排序
			align : 'center'//对齐方式
		},  
		{
			display : '操作',
			ishref : true,//是否为操作列
			linkname : 'id',//参数列
			//操作列显示内容,其中{linkname_value}为参数列的值
			hrefsrc : "<a href='javascript:void(0)' onclick='editcase({linkname_value})'>编辑</a>&nbsp;&nbsp;<a href='javascript:void(0)' onclick='deletecase({linkname_value})'>删除</a>",
			name : 'Handler',
			width : 100,
			sortable : false,//操作列不能排序
			align : 'center'
		} ],
		
		sortname : "id",//第一次加载数据时排序列
		sortorder : "asc",//第一次加载数据时排序类型
		usepager : true,//是否分页，默认为true。
		showTableToggleBtn : true,//是否显示收起/打开按钮,默认不显示。
		useRp : true,//是否可以动态设置每页显示的结果数，默认为false。
		rp : 10,//每页记录数，默认为10
//		checkbox : true,//是否要多选框,默认为false。
//		rowId : 'id',// 多选框绑定行的id,只有checkbox : true时才有效。
		width : "100%",//表格宽度
		height : 300//表格高度
	});
	
}



/**
 * 打开或者关闭添加角色面板
 */
function showOrCloseAddUserGroupPanel()
{
	
	$("#dvadd").slideToggle(500);
}