/**
 * 
 */
package com.etrans.common.util.quartz;


/**
 * @author lihaian
 * @since Create on 2012-3-6
 * 定时 任务类
 */
public class CustomJob {
	public static final int JS_ENABLED = 0; // 任务启用状态
	public static final int JS_DISABLED = 1; // 任务禁用状态
	public static final int JS_DELETE = 2; // 任务已删除状态

	private String jobId; // 任务的Id，一般为所定义Bean的ID
	private String jobName; // 任务的描述
	private String jobGroup; // 任务所属组的名称
	private int jobStatus; // 任务的状态，0：启用；1：禁用；2：已删除
	private String cronExpression; // 定时任务运行时间表达式
	private String memos; // 任务描述
	private Class<?> stateFulljobExecuteClass;//同步的执行类，需要从StatefulMethodInvokingJob继承
	private Class<?> jobExecuteClass;//异步的执行类，需要从MethodInvokingJob继承

	/**
	 * @return the jobId
	 */
	public String getJobId() {
		return jobId;
	}

	/**
	 * @param jobId
	 *            the jobId to set
	 */
	public void setJobId(String jobId) {
		this.jobId = jobId;
	}

	/**
	 * @return the jobName
	 */
	public String getJobName() {
		return jobName;
	}

	/**
	 * @param jobName
	 *            the jobName to set
	 */
	public void setJobName(String jobName) {
		this.jobName = jobName;
	}

	/**
	 * @return the jobGroup
	 */
	public String getJobGroup() {
		return jobGroup;
	}

	/**
	 * @param jobGroup
	 *            the jobGroup to set
	 */
	public void setJobGroup(String jobGroup) {
		this.jobGroup = jobGroup;
	}

	/**
	 * @return the jobStatus
	 */
	public int getJobStatus() {
		return jobStatus;
	}

	/**
	 * @param jobStatus
	 *            the jobStatus to set
	 */
	public void setJobStatus(int jobStatus) {
		this.jobStatus = jobStatus;
	}

	/**
	 * @return the cronExpression
	 */
	public String getCronExpression() {
		return cronExpression;
	}

	/**
	 * @param cronExpression
	 *            the cronExpression to set
	 */
	public void setCronExpression(String cronExpression) {
		this.cronExpression = cronExpression;
	}

	/**
	 * @return the memos
	 */
	public String getMemos() {
		return memos;
	}

	/**
	 * @param memos
	 *            the memos to set
	 */
	public void setMemos(String memos) {
		this.memos = memos;
	}

	
	
	

	/**
	 * @return the stateFulljobExecuteClass
	 */
	public Class<?> getStateFulljobExecuteClass() {
		return stateFulljobExecuteClass;
	}

	/**
	 * @param stateFulljobExecuteClass the stateFulljobExecuteClass to set
	 */
	public void setStateFulljobExecuteClass(Class<?> stateFulljobExecuteClass) {
		this.stateFulljobExecuteClass = stateFulljobExecuteClass;
	}

	/**
	 * @return the jobExecuteClass
	 */
	public Class<?> getJobExecuteClass() {
		return jobExecuteClass;
	}

	/**
	 * @param jobExecuteClass the jobExecuteClass to set
	 */
	public void setJobExecuteClass(Class<?> jobExecuteClass) {
		this.jobExecuteClass = jobExecuteClass;
	}

	/**
	 * 得到该job的Trigger名字
	 * @return
	 */
	public String getTriggerName() {
		return this.getJobId() + "Trigger";
	}
}
