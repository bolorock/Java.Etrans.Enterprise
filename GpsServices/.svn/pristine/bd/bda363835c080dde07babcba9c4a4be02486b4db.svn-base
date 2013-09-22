package com.etrans.mina.client.imp;

import java.nio.charset.Charset;
import javax.jms.JMSException;

import org.apache.log4j.Logger;
import org.apache.mina.filter.codec.ProtocolCodecFilter;
import org.apache.mina.filter.codec.textline.LineDelimiter;
import org.apache.mina.filter.codec.textline.TextLineCodecFactory;

import com.etrans.common.netbase.mina.MinaClient;
import com.etrans.common.netbase.mq.MQServer;
import com.etrans.mina.MinaConfigEntity;
import com.etrans.mina.client.handler.MinaClientHandler;

/**
 * Mina客户端,向MSC请求轨迹数据
 * 
 * @author Pomelo(柚子.)
 * @since 2012-12-10 10:42
 * @version 1.0
 */
public class MinaClientImp extends MinaClient {
	
	/** 接收端*/
	private MinaClientHandler clientHandler;
	
	/** 日志对象*/
	private static Logger logger = Logger.getLogger(MinaClientImp.class);
	
	/** 解码器*/
	private TextLineCodecFactory lineCodec;
	
	{
		lineCodec=new TextLineCodecFactory(
				Charset.forName("UTF-8"), 
				LineDelimiter.WINDOWS.getValue(),
				LineDelimiter.WINDOWS.getValue()
		);
		lineCodec.setDecoderMaxLineLength(1024*1024); 
		lineCodec.setEncoderMaxLineLength(1024*1024);
	}
	
	/**
	 * 构造函数，完成基础参数的设置
	 *    
	 * @author Pomelo(柚子.)
	 * @throws JMSException 
	 */
	public MinaClientImp(MinaConfigEntity minaConfigEntity,MQServer mq) throws JMSException{
		super(minaConfigEntity);
		super.setClientHandler(clientHandler = new MinaClientHandler(mq));
		super.setClientFilterAdapter(new ProtocolCodecFilter(lineCodec));
		new NoopThread().start();		
	}
	
	/**
	 * getClientHandler
	 *  
	 * @return  clientHandler TrackClientHandler
	 */
	public MinaClientHandler getClientHandler() {
		return clientHandler;
	}

	/**
	 * 往服务器回写数据
	 * 
	 * @param object:Object
	 */
	@Override
	public void write(Object obect) {
		super.session.write(obect);
	}
	
	/**
	 * 心跳线程
	 * 
	 * @author Pomelo(柚子.)
	 * @since 2012-12-14 15:20
	 * @version 1.0
	 */
	class NoopThread extends Thread{

		/**
		 * 心跳监测线程
		 */
		@Override
		public void run() {
			while(true){
				try {
					// 以5秒作为间隔像MSC发送一次数据
					Thread.sleep(30000);
					write("##1,9,12:12:12,NOOP");
				} catch (InterruptedException e) {
					logger.error(e.getMessage());
				}
			}
		}
		
	}
	
}
