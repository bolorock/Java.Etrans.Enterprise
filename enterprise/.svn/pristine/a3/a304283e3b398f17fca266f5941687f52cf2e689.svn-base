package com.etrans.common.util;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

/************************************************************
 * name：文本框自动补全帮助类
 * 创建者：lujunyong
 *日期：2013-4-26
 ************************************************************/
public class AutoCompleteUtils {

	
	/**权限下的车牌列表**/
	private List<String> names;
    
    /** 构造方法 */
    private AutoCompleteUtils(List<String> list_of_names) {
        this.names = list_of_names;
    }
    
    public static AutoCompleteUtils getInstance(List<String> list_of_names) {
        return new AutoCompleteUtils(list_of_names);
    }
    
    /**
     * 匹配方法
     * @param prefix 输入参数
     * @return 匹配结果list
     */
    @SuppressWarnings("unchecked")
	public List<String> findNames(String prefix) {
        String prefix_upper = prefix.toUpperCase();
        List<String> matches = new ArrayList<String>();
        Iterator iter = names.iterator();
        while(iter.hasNext()) {
            String name = (String) iter.next();
            if(null==name){
            	return matches;
            }
            String name_upper_case = name.toUpperCase();
            if(name_upper_case.startsWith(prefix_upper)){        
				boolean result = matches.add(name);
            }
        }
        return matches;
    }
	
	
	
	
	
}
