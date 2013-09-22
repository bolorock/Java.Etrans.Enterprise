package com.etrans.business;
/**
 * 指令代码
 * @author lihaiyan
 * @version 1.0
 * @brief
 */
public class CommandCode {
	/*********************交换程序下发至客户端类指令**************************/
	/**
	 * 交换链路连接状态
	 */
	public final static int COMMAND_7101=7101;
	/**
	 * 平台查岗请求
	 */
	public final static int COMMAND_7104=7104;
	/**
	 * 下发平台报文请求
	 */
	public final static int COMMAND_7105=7105;
	/**
	 * 报警督办请求
	 */
	public final static int COMMAND_7106=7106;
	/**
	 * 报警预警
	 */
	public final static int COMMAND_7107=7107;
	/**
	 * 实时交换报警
	 */
	public final static int COMMAND_7108=7108;
	/**
	 * 交换车辆静态信息
	 */
	public final static int COMMAND_7109=7109;
	/**
	 * 启动车辆定位信息交换请求
	 */
	public final static int COMMAND_7110=7110;
	/**
	 * 结束车辆定位信息交换请求
	 */
	public final static int COMMAND_7111=7111;
	/**
	 * 交换车辆实时定位信息
	 */
	public final static int COMMAND_7112=7112;
	/**
	 * 车辆定位信息交换补发
	 */
	public final static int COMMAND_7113=7113;
	/**
	 * 上级下发应答信息通用描述
	 */
	public final static int COMMAND_7900=7900;
	
	/*********************交换程序下发至客户端类指令*********END*****************/
	
	/*********************客户端上报至交换程序类指令**************************/
	/**
	 * 获取交换链路连接状态请求
	 */
	public final static int COMMAND_7001=7001;
	/**
	 * 查岗应答
	 */
	public final static int COMMAND_7004=7004;
	/**
	 * 报警督办应答
	 */
	public final static int COMMAND_7006=7006;
	/**
	 * 补发车辆定位信息请求
	 */
	public final static int COMMAND_7010=7010;
	/**
	 * 主链路注销请求
	 */
	public final static int COMMAND_7011=7011;
	/**
	 * 申请交换指定车辆定位信息请求
	 */
	public final static int COMMAND_7012=7012;
	/**
	 * 取消交换指定车辆定位信息请求
	 */
	public final static int COMMAND_7013=7013;
	/**
	 * 主动上传报警处理结果信息
	 */
	public final static int COMMAND_7014=7014;
	/**
	 * 主链路登录请求（过检需要）
	 */
	public final static int COMMAND_7015=7015;
	/**
	 * 主链路断开通知（过检需要）
	 */
	public final static int COMMAND_7016=7016;
	/**
	 * 主动关闭主从链路通知（过检需要）
	 */
	public final static int COMMAND_7017=7017;
	/**
	 * 车辆定位信息自动补报（过检需要，模拟事件触发后台执行）：
	 */
	public final static int COMMAND_7020=7020;
	/*********************客户端上报至交换程序类指令*******END*******************/

}

