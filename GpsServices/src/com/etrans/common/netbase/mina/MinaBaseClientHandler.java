package com.etrans.common.netbase.mina;

import org.apache.mina.core.service.IoHandlerAdapter;

import com.etrans.mina.MinaConfigEntity;

/**
 * 轨迹请求客户端业务逻辑处理过滤器
 * 
 * @author Pomelo(柚子.)
 * @since 2012-12-27 14:00
 * @version 1.0
 */
public class MinaBaseClientHandler  extends IoHandlerAdapter {
	
	/** 连接至MSC成功标志 */
	protected boolean LinkMscFlag = false;
	
	/** Mina配置*/
	private MinaConfigEntity minaConfigEntity;
	
	/**
	 * 获取Mina配置
	 * 
	 * @return minaConfigEntity MinaConfigEntity
	 */
	public MinaConfigEntity getMinaConfigEntity() {
		return minaConfigEntity;
	}

	/**
	 * 设置Mina配置
	 * 
	 * @param minaConfigEntity
	 */
	public void setMinaConfigEntity(MinaConfigEntity minaConfigEntity) {
		this.minaConfigEntity = minaConfigEntity;
	}

	/**
	 * 设置登陆状态
	 * 
	 * @param  LinkMscFlag  boolean
	 */ 
	public void setLinkMscFlag(boolean linkMscFlag) {
		LinkMscFlag = linkMscFlag;
	}
	
	/**
	 * 获取是否成功登陆
	 * 
	 * @return  LinkMscFlag  boolean
	 */ 
	public boolean isLinkMscFlag() {
		return LinkMscFlag;
	}
}
