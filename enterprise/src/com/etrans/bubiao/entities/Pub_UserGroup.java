package com.etrans.bubiao.entities;

import java.io.Serializable;

public class Pub_UserGroup implements Serializable {
	 
	private static final long serialVersionUID = -7831505902529169852L;
	private long id;
	private String name;
	private String abbre;
	private String status;
	private long innerPurviewGroupId;
	private long userId;
	private String createDate;
	private long isUseDataPurview;
	private int privilegeLevelId;
	private long workUnitId;
	private String workunitName;
	
	public String getWorkunitName() {
		return workunitName;
	}
	public void setWorkunitName(String workunitName) {
		this.workunitName = workunitName;
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getAbbre() {
		return abbre;
	}
	public void setAbbre(String abbre) {
		this.abbre = abbre;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public long getInnerPurviewGroupId() {
		return innerPurviewGroupId;
	}
	public void setInnerPurviewGroupId(long innerPurviewGroupId) {
		this.innerPurviewGroupId = innerPurviewGroupId;
	}
	public long getUserId() {
		return userId;
	}
	public void setUserId(long userId) {
		this.userId = userId;
	}
	public String getCreateDate() {
		return createDate;
	}
	public void setCreateDate(String createDate) {
		this.createDate = createDate;
	}
	public long getIsUseDataPurview() {
		return isUseDataPurview;
	}
	public void setIsUseDataPurview(long isUseDataPurview) {
		this.isUseDataPurview = isUseDataPurview;
	}
	public int getPrivilegeLevelId() {
		return privilegeLevelId;
	}
	public void setPrivilegeLevelId(int privilegeLevelId) {
		this.privilegeLevelId = privilegeLevelId;
	}
	public long getWorkUnitId() {
		return workUnitId;
	}
	public void setWorkUnitId(long workUnitId) {
		this.workUnitId = workUnitId;
	}

}
