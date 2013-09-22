package com.etrans.system;

import com.etrans.common.util.SysUtil;

public class MQDCException extends Exception{
	
	private static final long serialVersionUID = 1L;

    private Throwable e = null;

    private int exceptionCode = 0;

    private int completeCode = 0;

    /**
     * MQDC系统异常构造方法
     */
    public MQDCException(){
        super();
    }

    /**
     * MQDC系统异常构造方法
     *
     * @param message 错误消息
     */
    public MQDCException(String message){
        super(message);
    }

    /**
     * MQDC系统异常构造方法
     *
     * @param e 异常对象
     */
    public MQDCException(Throwable e){
        this.e = e;
    }

    /**
     * MQDC系统异常构造方法
     *
     * @param exceptionCode 异常代码
     * @param completeCode 异常完成代码
     */
    public MQDCException(int exceptionCode,int completeCode){
        super();
        this.exceptionCode = exceptionCode;
        this.completeCode = completeCode;
    }

    /**
     * MQDC系统异常构造方法
     *
     * @param message 错误消息
     * @param exceptionCode 异常代码
     * @param completeCode 异常完成代码
     */
    public MQDCException(String message,int exceptionCode,int completeCode){
        super(message);
        this.exceptionCode = exceptionCode;
        this.completeCode = completeCode;
    }

    /**
     * MQDC系统异常构造方法
     *
     * @param e 异常对象
     * @param exceptionCode 异常代码
     * @param completeCode 异常完成代码
     */
    public MQDCException(Throwable e,int exceptionCode,int completeCode){
        this.e = e;
        this.exceptionCode = exceptionCode;
        this.completeCode = completeCode;
    }

    /**
     * 取异常消息内容
     * 如抛入的异常对象不为空
     * 则返回抛入异常对象中的异常消息
     * 否则返回默认异常消息
     *
     * @return 异常消息内容
     */
    public String getMessage(){
        if(e == null) return super.getMessage();
        return e.getMessage();
    }

    /**
     * 打印异常堆栈内容
     * 如抛入的异常不为空
     * 则打印抛入异常堆栈
     * 否则抛入默认异常堆栈
     */
    public void printStackTrace(){
        if(e == null) super.printStackTrace();
        else e.printStackTrace();
    }

    /**
     * 获取异常代码
     *
     * @return 异常代码
     */
    public int getExceptionCode(){
        return this.exceptionCode;
    }

    /**
     * 获取异常完成代码
     *
     * @return 异常完成代码
     */
    public int getCompleteCode(){
        return this.completeCode;
    }

    /**
     * 获取异常来源
     * 即异常名
     *
     * @return 异常来源
     */
    public String getExceptionName(){
        return "MQDC";
    }

    public String toString(){
        if(e == null) return SysUtil.exceptionStackTrace2String(this);
        return SysUtil.exceptionStackTrace2String(e);
    }

}
