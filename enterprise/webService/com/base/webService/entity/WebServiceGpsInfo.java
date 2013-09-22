package com.base.webService.entity;

public class WebServiceGpsInfo {

	private Integer id;
	
	private String registrationNo;//车牌号
	
	private String longitude;//经度
	
	private String latitude;//纬度
	
	private String speed;//GPS速度
	
	private String sd2;//记录仪速度
	
	private String head;//方向
	
	private boolean gpsValid;//是否有效定位 盲区或者准确
	
	private String gpsState;//状态信息
	
	private String gpsMileage;//里程
	
	private String gpsOil;//油位
	
	private String gpsTime;//定位时间
	
	private String common;

	public Integer getId() {
		return id;
	}
	public WebServiceGpsInfo(){
		this.registrationNo=" ";
		this.longitude=" ";
		this.latitude=" ";
		this.speed=" ";
		this.head=" ";
		this.gpsValid=false;
		this.gpsState=" ";
		this.gpsMileage=" ";
		this.gpsOil=" ";
		this.gpsTime=" ";
		
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getRegistrationNo() {
		return registrationNo;
	}

	public void setRegistrationNo(String registrationNo) {
		this.registrationNo = registrationNo;
	}

	public String getLongitude() {
		return longitude;
	}

	public void setLongitude(String longitude) {
		this.longitude = longitude;
	}

	public String getLatitude() {
		return latitude;
	}

	public void setLatitude(String latitude) {
		this.latitude = latitude;
	}

	public String getSpeed() {
		return speed;
	}

	public void setSpeed(String speed) {
		this.speed = speed;
	}

	public String getHead() {
		return head;
	}

	public void setHead(String head) {
		this.head = head;
	}

	public boolean isGpsValid() {
		return gpsValid;
	}

	public void setGpsValid(boolean gpsValid) {
		this.gpsValid = gpsValid;
	}

	public String getGpsState() {
		return gpsState;
	}

	public void setGpsState(String gpsState) {
		this.gpsState = gpsState;
	}

	public String getGpsMileage() {
		return gpsMileage;
	}

	public void setGpsMileage(String gpsMileage) {
		this.gpsMileage = gpsMileage;
	}

	public String getGpsOil() {
		return gpsOil;
	}

	public void setGpsOil(String gpsOil) {
		this.gpsOil = gpsOil;
	}

	public String getGpsTime() {
		return gpsTime;
	}

	public void setGpsTime(String gpsTime) {
		this.gpsTime = gpsTime;
	}
	
	
	
	
	public String getCommon()
	{
		return common;
	}
	public void setCommon(String common)
	{
		this.common = common;
	}
	public String toString(){
		StringBuffer message=new StringBuffer();
		message.append(this.registrationNo)
		       .append(",")
		       .append(this.common)
		       .append(",")
		       .append(this.gpsValid)
		       .append(",")
		       .append(this.latitude)
		       .append(",")
		       .append(this.longitude)
		       .append(",")
		       .append(this.speed)
		       .append(",")
		        .append(this.sd2)
		       .append(",")
		       .append(this.head)
		       .append(",")
		       .append(this.gpsState)
		       .append(",")
		       .append(this.gpsMileage)
		       .append(",")
		       .append(this.gpsOil)
		       .append(",")
		       .append(this.gpsTime);
		       
		return message.toString();
	}
	public String getSd2()
	{
		return sd2;
	}
	public void setSd2(String sd2)
	{
		this.sd2 = sd2;
	}
	
	
}
