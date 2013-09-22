package com.etrans.bubiao.entities;



public class FunctionMenu implements java.io.Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	private int functionId;
	private String functionName;
	private String functionCode;
	private Integer functionLevel;
	private String functionImg;
	private String assemblyName;
	private String functionType;
	private Integer ordering;
	private String state;
	private String remark;
	private Long parentFuncId;
	
	public int getFunctionId() {
		return functionId;
	}
	public void setFunctionId(int functionId) {
		this.functionId = functionId;
	}
	public String getFunctionName() {
		return functionName;
	}
	public void setFunctionName(String functionName) {
		this.functionName = functionName;
	}
	public String getFunctionCode() {
		return functionCode;
	}
	public void setFunctionCode(String functionCode) {
		this.functionCode = functionCode;
	}
	public Integer getFunctionLevel() {
		return functionLevel;
	}
	public void setFunctionLevel(Integer functionLevel) {
		this.functionLevel = functionLevel;
	}
	public String getFunctionImg() {
		return functionImg;
	}
	public void setFunctionImg(String functionImg) {
		this.functionImg = functionImg;
	}
	public String getAssemblyName() {
		return assemblyName;
	}
	public void setAssemblyName(String assemblyName) {
		this.assemblyName = assemblyName;
	}
	public String getFunctionType() {
		return functionType;
	}
	public void setFunctionType(String functionType) {
		this.functionType = functionType;
	}
	public Integer getOrdering() {
		return ordering;
	}
	public void setOrdering(Integer ordering) {
		this.ordering = ordering;
	}
	public String getState() {
		return state;
	}
	public void setState(String state) {
		this.state = state;
	}
	public String getRemark() {
		return remark;
	}
	public void setRemark(String remark) {
		this.remark = remark;
	}
	public Long getParentFuncId() {
		return parentFuncId;
	}
	public void setParentFuncId(Long parentFuncId) {
		this.parentFuncId = parentFuncId;
	}

	
}