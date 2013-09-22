package com.etrans.bubiao.entities;

/**
 * 用户车辆
 * @author feltky
 *
 */
public class UserVehicle implements java.io.Serializable {
	private static final long serialVersionUID = 1L;
	private long id;
	private long userId;
	private long vehicleId;
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public long getUserId() {
		return userId;
	}
	public void setUserId(long userId) {
		this.userId = userId;
	}
	public long getVehicleId() {
		return vehicleId;
	}
	public void setVehicleId(long vehicleId) {
		this.vehicleId = vehicleId;
	}
}
