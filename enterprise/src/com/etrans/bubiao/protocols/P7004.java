package com.etrans.bubiao.protocols;

public class P7004 extends P_Platform{

	private String commandCode="7004";
	private String inspectionType;
	private String inspectionObjectId;
	private String inspectionId;
	private String inspectionContent;
	
	public String getInspectionType() {
		return inspectionType;
	}

	public void setInspectionType(String inspectionType) {
		this.inspectionType = inspectionType;
	}

	public String getInspectionObjectId() {
		return inspectionObjectId;
	}

	public void setInspectionObjectId(String inspectionObjectId) {
		this.inspectionObjectId = inspectionObjectId;
	}

	public String getInspectionId() {
		return inspectionId;
	}

	public void setInspectionId(String inspectionId) {
		this.inspectionId = inspectionId;
	}

	public String getInspectionContent() {
		return inspectionContent;
	}

	public void setInspectionContent(String inspectionContent) {
		this.inspectionContent = inspectionContent;
	}
	
	public String getCommandCode() {
		return commandCode;
	}

	public void setCommandCode(String commandCode) {
		this.commandCode = commandCode;
	}
}
