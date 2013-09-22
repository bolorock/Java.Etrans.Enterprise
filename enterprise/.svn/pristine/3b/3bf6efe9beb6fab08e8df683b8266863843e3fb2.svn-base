package com.etrans.common.util;

import java.util.ArrayList;
import java.util.List;

import com.etrans.bubiao.entities.Tree;

/** 
 * 非数据库查询或者其他固定追加的树形列表
 * 
 * @author Pomelo(柚子.)  
 * @version 1.0
 * @since 创建时间：2013-6-5 上午11:54:48 
 */
public class TreeAppend {
	public static String[] firstTree = {"平台指令","其他指令"};
	public static String[] treeTreeByFirst_1={"7010|补发车辆定位信息请求","7012|申请交换指定车辆定位信息请求","7013|取消交换指定车辆定位信息请求","7020|车辆定位信息自动补报"};
	public static String[] treeTreeByFirst_2={"506|设置终端参数","507|事件设置","373|设置圆形区域","376|设置矩形区域","379|设置多边形区域","508|设置路线","509|信息点播菜单设置","510|设置电话本"};
	
	/**
	 * 构建追加树
	 * 
	 * @param tree_P
	 * @param treeList
	 * @return List<Tree>
	 */
	public static List<Tree> buildAppendTree(String[] tree_P,List<String[]> treeList,String selectStr){
		List<Tree> list = new ArrayList<Tree>();
		for(int i=0;i<tree_P.length;i++){
			Tree tree = new Tree();
			tree.setChecked(false);
			tree.setId(tree_P[i]);
			tree.setState("closed");
			tree.setText(tree_P[i]);
			List<Tree> childrenList = new ArrayList<Tree>();
			if(treeList.get(i)!=null){
				String[] children = treeList.get(i);
				for(int j=0;j<children.length;j++){
					Tree treeChildren = new Tree();
					treeChildren.setChecked(selectStr.indexOf(children[j].split("\\|")[0])>-1?true:false);
					treeChildren.setId("c|"+children[j].split("\\|")[0]);
					treeChildren.setState("open");
					treeChildren.setText(children[j].split("\\|")[1]);
					treeChildren.setChildren(null);
					childrenList.add(treeChildren);
				}
				tree.setChildren(childrenList);
			}else{
				tree.setChildren(null);
			}
			list.add(tree);
		}
		return list;
	}
}

