package com.etrans.bubiao.entities;

import java.io.Serializable;

public class Vehicle implements Serializable {

	private static final long serialVersionUID = -7831505902529169852L;
	private Long id;// ID
	/**
	 * 车牌号码
	 */
	private String registrationNo;
	/**
	 * 别名
	 */
	private String alais;
	/**
	 * 自编号
	 */
	private String internalNo;
	/**
	 * 单位
	 */
	private Long workUnitId;
	/**
	 * 车牌类型
	 */
	private Long registrationNoKindId;
	
	/**
	 * 车牌颜色
	 */
	private Long registrationNoColorId;
	/**
	 * 车辆颜色
	 */
	private String registrationNoColor;
	/**
	 * 类型
	 */
	private Long kindId;
	/**
	 * 颜色
	 */
	private Long colorId;
	/**
	 * 用途
	 */
	private Long usageId;
	/**
	 * 品牌
	 */
	private Long bandId;
	/**
	 * 厂商
	 */
	private Long manufactoryId;
	/**
	 * 用油类型
	 */
	private Long oilKindId;
	/**
	 * 收费类型
	 */
	private Long tollKindId;
	/**
	 * VIN码
	 */
	private String vin;
	/**
	 * 引擎号 
	 */
	private String engineNo;
	/**
	 * 自重
	 */
	private Float weight;
	/**
	 * 核载重量
	 */
	private Float loadingCapacity;
	/**
	 * 座位数 
	 */
	private int seatCount;
	/**
	 * 是否删除 
	 */
	private int isDeleted;
	/**
	 * 注册地
	 */
	private String regAddress;
	/**
	 * 备注
	 */
	private String memo;
	/**
	 * 修改人 
	 */
	private Long markerId;
	/**
	 * 修改时间 
	 */
	private String markTime;
	/**
	 * 创建时间
	 */
	private String createDatetime;
	/**
	 * 创建人 
	 */
	private Long createUserId;
	/**
	 * 最后修改时间 
	 */
	private String modifyDatetime;
	/**
	 * 最后修改人 
	 */
	private Long modifyUserId;
	/**
	 * 厂牌型号 
	 */
	private Long seriesId;
	/**
	 * 能源类型
	 */
	private Long energyTypeId;
	/**
	 * 所属服务区
	 */
	private Long serverConfigId;
	/**
	 * 所属平台
	 */
	private Long platformId;
	/**
	 * 所属区域
	 */
	private Long areaId;
	/**
	 * 工作状态
	 */
	private int workStatus;
	/**
	 * 道路运输许可证
	 */
	private String transportPermits;
	/**
	 * 所属行业
	 */
	private Long tradeKindId;
	/**
	 * 经营范围
	 */
	private String businessScope;
	/**
	 * 从业资格证号码
	 */
	private String qualificationNo;
	/**
	 * 经营许可证号
	 */
	private String licenseNo;
	/**
	 * 行驶证号
	 */
	private String drivingCertificateNo;
	/**
	 * 终端
	 */
	private Long terminalId;
	/**
	 * 车辆自定义行业类型ID
	 */
	private Long customTradeKindId;
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getRegistrationNo() {
		return registrationNo;
	}
	public void setRegistrationNo(String registrationNo) {
		this.registrationNo = registrationNo;
	}
	public String getAlais() {
		return alais;
	}
	public void setAlais(String alais) {
		this.alais = alais;
	}
	public String getInternalNo() {
		return internalNo;
	}
	public void setInternalNo(String internalNo) {
		this.internalNo = internalNo;
	}
	public Long getWorkUnitId() {
		return workUnitId;
	}
	public void setWorkUnitId(Long workUnitId) {
		this.workUnitId = workUnitId;
	}
	public Long getRegistrationNoKindId() {
		return registrationNoKindId;
	}
	public void setRegistrationNoKindId(Long registrationNoKindId) {
		this.registrationNoKindId = registrationNoKindId;
	}
	public Long getRegistrationNoColorId() {
		return registrationNoColorId;
	}
	public void setRegistrationNoColorId(Long registrationNoColorId) {
		this.registrationNoColorId = registrationNoColorId;
	}
	public String getRegistrationNoColor() {
		return registrationNoColor;
	}
	public void setRegistrationNoColor(String registrationNoColor) {
		this.registrationNoColor = registrationNoColor;
	}
	public Long getKindId() {
		return kindId;
	}
	public void setKindId(Long kindId) {
		this.kindId = kindId;
	}
	public Long getColorId() {
		return colorId;
	}
	public void setColorId(Long colorId) {
		this.colorId = colorId;
	}
	public Long getUsageId() {
		return usageId;
	}
	public void setUsageId(Long usageId) {
		this.usageId = usageId;
	}
	public Long getBandId() {
		return bandId;
	}
	public void setBandId(Long bandId) {
		this.bandId = bandId;
	}
	public Long getManufactoryId() {
		return manufactoryId;
	}
	public void setManufactoryId(Long manufactoryId) {
		this.manufactoryId = manufactoryId;
	}
	public Long getOilKindId() {
		return oilKindId;
	}
	public void setOilKindId(Long oilKindId) {
		this.oilKindId = oilKindId;
	}
	public Long getTollKindId() {
		return tollKindId;
	}
	public void setTollKindId(Long tollKindId) {
		this.tollKindId = tollKindId;
	}
	public String getVin() {
		return vin;
	}
	public void setVin(String vin) {
		this.vin = vin;
	}
	public String getEngineNo() {
		return engineNo;
	}
	public void setEngineNo(String engineNo) {
		this.engineNo = engineNo;
	}
	public Float getWeight() {
		return weight;
	}
	public void setWeight(Float weight) {
		this.weight = weight;
	}
	public Float getLoadingCapacity() {
		return loadingCapacity;
	}
	public void setLoadingCapacity(Float loadingCapacity) {
		this.loadingCapacity = loadingCapacity;
	}
	public int getSeatCount() {
		return seatCount;
	}
	public void setSeatCount(int seatCount) {
		this.seatCount = seatCount;
	}
	public int getIsDeleted() {
		return isDeleted;
	}
	public void setIsDeleted(int isDeleted) {
		this.isDeleted = isDeleted;
	}
	public String getRegAddress() {
		return regAddress;
	}
	public void setRegAddress(String regAddress) {
		this.regAddress = regAddress;
	}
	public String getMemo() {
		return memo;
	}
	public void setMemo(String memo) {
		this.memo = memo;
	}
	public Long getMarkerId() {
		return markerId;
	}
	public void setMarkerId(Long markerId) {
		this.markerId = markerId;
	}
	public String getMarkTime() {
		return markTime;
	}
	public void setMarkTime(String markTime) {
		this.markTime = markTime;
	}
	public String getCreateDatetime() {
		return createDatetime;
	}
	public void setCreateDatetime(String createDatetime) {
		this.createDatetime = createDatetime;
	}
	public Long getCreateUserId() {
		return createUserId;
	}
	public void setCreateUserId(Long createUserId) {
		this.createUserId = createUserId;
	}
	public String getModifyDatetime() {
		return modifyDatetime;
	}
	public void setModifyDatetime(String modifyDatetime) {
		this.modifyDatetime = modifyDatetime;
	}
	public Long getModifyUserId() {
		return modifyUserId;
	}
	public void setModifyUserId(Long modifyUserId) {
		this.modifyUserId = modifyUserId;
	}
	public Long getSeriesId() {
		return seriesId;
	}
	public void setSeriesId(Long seriesId) {
		this.seriesId = seriesId;
	}
	public Long getEnergyTypeId() {
		return energyTypeId;
	}
	public void setEnergyTypeId(Long energyTypeId) {
		this.energyTypeId = energyTypeId;
	}
	public Long getServerConfigId() {
		return serverConfigId;
	}
	public void setServerConfigId(Long serverConfigId) {
		this.serverConfigId = serverConfigId;
	}
	public Long getPlatformId() {
		return platformId;
	}
	public void setPlatformId(Long platformId) {
		this.platformId = platformId;
	}
	public Long getAreaId() {
		return areaId;
	}
	public void setAreaId(Long areaId) {
		this.areaId = areaId;
	}
	public int getWorkStatus() {
		return workStatus;
	}
	public void setWorkStatus(int workStatus) {
		this.workStatus = workStatus;
	}
	public String getTransportPermits() {
		return transportPermits;
	}
	public void setTransportPermits(String transportPermits) {
		this.transportPermits = transportPermits;
	}
	public Long getTradeKindId() {
		return tradeKindId;
	}
	public void setTradeKindId(Long tradeKindId) {
		this.tradeKindId = tradeKindId;
	}
	public String getBusinessScope() {
		return businessScope;
	}
	public void setBusinessScope(String businessScope) {
		this.businessScope = businessScope;
	}
	public String getQualificationNo() {
		return qualificationNo;
	}
	public void setQualificationNo(String qualificationNo) {
		this.qualificationNo = qualificationNo;
	}
	public String getLicenseNo() {
		return licenseNo;
	}
	public void setLicenseNo(String licenseNo) {
		this.licenseNo = licenseNo;
	}
	public String getDrivingCertificateNo() {
		return drivingCertificateNo;
	}
	public void setDrivingCertificateNo(String drivingCertificateNo) {
		this.drivingCertificateNo = drivingCertificateNo;
	}
	public Long getTerminalId() {
		return terminalId;
	}
	public void setTerminalId(Long terminalId) {
		this.terminalId = terminalId;
	}
	public Long getCustomTradeKindId() {
		return customTradeKindId;
	}
	public void setCustomTradeKindId(Long customTradeKindId) {
		this.customTradeKindId = customTradeKindId;
	}
	
	
}
