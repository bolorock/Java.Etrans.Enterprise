/**
 * 百分比相关计算工具类
 */
package com.etrans.common.util;

import java.text.NumberFormat;

/**
 * @author wlz
 * 2012-03-05
 */
public class RateUtil {

	/**
	 * 计算百分比
	 * @param divisor 被除数
	 * @param dividend 除数,为0时返回"0"
	 * @param wCnt 保留小数点后的位数
	 * @return
	 */
	public static String getRate(Integer divisor,Integer dividend,Integer wCnt){
		if(divisor == null || dividend == null || dividend == 0)
			return "0%";
		else{
			NumberFormat format = NumberFormat.getPercentInstance();
			format.setMinimumFractionDigits(2);//设置两位小数位
			double alramHandleRate = (double)divisor/dividend;
			return format.format(alramHandleRate);
		}
	}
	
}
