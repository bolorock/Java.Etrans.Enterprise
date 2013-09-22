package com.etrans.system.control;

import org.apache.commons.codec.binary.Base64;

import com.etrans.common.netbase.mina.MinaClient;
import com.etrans.system.control.mqdcswitch.MqdcSwitch;

/**
 * 登陆MSC
 * 
 * @author Pomelo(柚子.)
 * @since 2012-12-27 14:14
 * @version 1.0
 */
public class LoginMsc {
	
	/**
	 * Mina客户端
	 */
	private MinaClient client;
	
	/**
	 * 统计登陆时间
	 */
	private long countLoginState = 0l;
	
	/**
	 * 统计连接MSC时间
	 */	
	private long countConnectMscState = 0l;
	
	/**
	 * 构造函数
	 * 
	 * @param client
	 */
	public LoginMsc(MinaClient client){
		this.client = client;
	}
	
	/**
	 * 连接MSC
	 * 
	 * @return false 连接失败，true连接成功
	 * @throws Exception
	 */
	public boolean connectMsc() throws Exception{
		client.connectionServer();
		client.write("##1,16,-1,"+ Base64.encodeBase64String("-1:5,6,8,10,12,13^".getBytes()));
		while(true){
			if(MqdcSwitch.mscIsLink){
				return true;
			}else{
				Thread.sleep(10);
				countConnectMscState++;
			}
			// 2秒钟检测还未返回true就直接告知登陆失败
			if(countConnectMscState>=1000)return false;
		}
	}
	/**
	 * 开始登陆
	 * 
	 * @param loginStr
	 * @return
	 * @throws InterruptedException
	 */
	public boolean login(String loginStr) throws InterruptedException{
		client.write(loginStr);
		while(true){
			if(client.getClientHandler().isLinkMscFlag()){
				return true;
			}else{
				Thread.sleep(10);
				countLoginState++;
			}
			// 2秒钟检测还未返回true就直接告知登陆失败
			if(countLoginState>=2000)return false;
		}
	}
}
