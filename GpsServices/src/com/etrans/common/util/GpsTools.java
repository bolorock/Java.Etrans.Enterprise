package com.etrans.common.util;
/** 
 * <一句话简述本类作用>
 * @author Pomelo(柚子.)  
 * @version 1.0
 * @since 创建时间：2013-7-3 下午4:55:06 
 */
public class GpsTools {
	/**
	 * 获取车辆方向
	 * @param head
	 * @author lihaiyan
	 * @createTime 2011-08-09
	 * @return
	 */
	public static String getHead(Integer head){
		     if(head==0){
		    	 return "正东向";
		     }else if((head >= 0 && head <= 10) || (head >= 350)){
		    	 return "东向";
		     }else if(head > 10 && head <= 80){
		    	 return "东北向";
		     }else if(head == 90){
		    	 return "正北向";
		     }else if(head > 80 && head <= 100){
		    	 return "北向";
		     }else if(head > 100 && head <= 170){
		    	 return "西北向";
		     }else if(head == 180){
		    	 return "正西向";
		     }else if(head > 170 && head <= 190){
		    	 return "西向";
		     }else if((head > 190 && head <= 260)){
		    	 return "西南向";
		     }else if(head == 270){
		    	 return "正南向";
		     }else if(head > 260 && head <= 280){
		    	 return "南向";
		     }else if(head > 280 && head < 350){
		    	 return "东南向";
		     }else{
		    	 return  "未知方向";
		     }
		  
		}
}

