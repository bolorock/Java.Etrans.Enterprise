package com.etrans.common.util;

import java.io.File;

public class SysUtil {

	public static String getExceptionStackTrace(Throwable e, int line) {
		StackTraceElement[] ste = e.getStackTrace();
		if (line >= ste.length)
			return "{{ line[" + line + "] > e'size[" + (ste.length - 1)
					+ "] }}";
		String mess = ste[line].toString();
		return mess;
	}

	public static String exceptionStackTrace2String(Throwable e) {
		String mess = e.getMessage() + "\r\n";
		StackTraceElement[] ste = e.getStackTrace();
		for (int i = 0; i < ste.length; ++i) {
			mess = mess + ste[i].toString() + "\r\n";
		}
		return mess;
	}
	
    /**
     * 取应用程序主目录
     *
     * @return 主目录
     */
    public static String getAppHome() {
        String home = System.getProperty("user.dir");
        if (!home.endsWith(File.separator)) home = home + File.separator;
        return home;
    }
    
    /**
     * 判断是否为空
     * 
     * @param str
     * @return
     */
    public static boolean isEmpty(String str){
    	if(null==str)return true;
    	if("".equalsIgnoreCase(str))return true;
    	return false;
    }
    
    /**
     * 首字母大写
     *
     * @param fileName
     * @return
     */
    public static String firstWUpperCase(String fileName) {
        String newString = "";
        if (fileName != null && fileName.length() >=1) {
            newString = fileName.substring(0, 1);
            newString = newString.toUpperCase() + fileName.substring(1);
        }
        return newString;
    }
    
    /**
     * 首字母大写
     *
     * @param fileName
     * @return
     */
    public static String firstWLowerCase(String fileName) {
        String newString = "";
        if (fileName != null && fileName.length() >=1) {
            newString = fileName.substring(0, 1);
            newString = newString.toLowerCase() + fileName.substring(1);
        }
        return newString;
    }
    
    /**
     * 获取一个新数组，如果数组不满足给定条件的话
     * 
     * @param ary
     * @param length
     * @param defaultValue
     * @return
     */
    public static String[] getNewAry(String[] ary,int length,String defaultValue){
    	if(ary.length==length)return ary;
    	if(ary.length<length && ary.length>0 && (ary[0]!=null && !("".equals(ary[0])))){
    		String[] nAry = new String[length];
    		for(int i=1;i<nAry.length;i++){
    			nAry[i]=nAry[0];
    		}
    	}else{
    		String[] nAry = new String[length];
    		for(int i=0;i<nAry.length;i++){
    			nAry[i]=defaultValue;
    		}
    	}
    	return null;
    }
}
