package com.etrans.rmi.imp;

import com.etrans.business.service.message.MinaSendMessageTerminal;
import com.etrans.rmi.CommandServer;

/** 
 * 指令对外接口实现
 * 
 * @author Pomelo(柚子.)  
 * @version 1.0
 * @since 创建时间：2013-7-5 下午2:39:10 
 */
public class CommandServerImp implements CommandServer {

 
	/**
	 * 终端发送指令
	 * 
	 * @param message 消息
	 * @throws Exception 
	 */
	@Override
	public void insertCommandSendQueue(String message) throws Exception {
		MinaSendMessageTerminal.send(message);
	}

}

