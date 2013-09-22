package com.etrans.common.netbase.mina;

import java.net.InetSocketAddress;
import java.util.Timer;
import java.util.TimerTask;
import java.util.concurrent.ExecutorService;

import org.apache.log4j.Logger;
import org.apache.mina.core.filterchain.IoFilterAdapter;
import org.apache.mina.core.future.ConnectFuture;
import org.apache.mina.core.service.IoConnector;
import org.apache.mina.core.session.IdleStatus;
import org.apache.mina.core.session.IoSession;
import org.apache.mina.filter.executor.ExecutorFilter;
import org.apache.mina.filter.executor.OrderedThreadPoolExecutor;
import org.apache.mina.transport.socket.nio.NioSocketConnector;

import com.etrans.common.MQDCConfigUtil;
import com.etrans.mina.MinaConfigEntity;
import com.etrans.system.control.MQDCCheckMonitor;
import com.etrans.system.control.mqdcswitch.MqdcSwitch;

/**
 * Mina客户端
 * 
 * @author Pomelo(柚子.)
 * @since 2012-12-10 10:42
 * @version 1.0
 */
public abstract class MinaClient {
		
	/** 阻塞对象 */
	protected IoConnector connector = null;
	
	/** 日志对象*/
	private static Logger logger = Logger.getLogger(MinaClient.class);
	
	/** IO会话 */
	protected IoSession session = null;
	
	/** 客户端业务逻辑处理器 */
	private MinaBaseClientHandler clientHandler;
	
	/** Mina配置信息*/
	protected MinaConfigEntity minaConfigEntity;

	/** 过滤编码工厂 */
	private IoFilterAdapter clientFilterAdapter;
	
	/** 统计重连MSC次数*/
	private long countMinaReConnect = 0l;
	
	/** 统一重连异常次数*/
	private long countMinaReConnectException = 0l;
	
	/**
	 * 构造函数
	 * 
	 * @param minaConfigEntity MinaConfigEntity
	 */
	public MinaClient(MinaConfigEntity minaConfigEntity){
		this.setMinaConfigEntity(minaConfigEntity);
		minaClientInit();
	}
	
	/**
	 * <title>
	 * Mina客户端初始化
	 * <title> 
	 * minaClientInit
	 * <p>
	 * 创建非阻塞队列、设置超时、设置业务处理对象、设置编码器
	 * </p>
	 */
	@SuppressWarnings("deprecation")
	public void minaClientInit(){
		/* 创建一个非阻塞的客户端程序 */
		connector = new NioSocketConnector();
		/** 默认超时时间 */
		connector.setConnectTimeout(MQDCConfigUtil.MINA_CONNECT_TIMEOUT);		
	}
	
	/**
	 * 添加业务逻辑处理器类
	 * 
	 * @param hander IoHandlerAdapter
	 */
	public void setClientHandler(MinaBaseClientHandler clientHandler) {
		this.clientHandler = clientHandler;
	}
	
	/**
	 * 获取业务逻辑处理器类
	 * 
	 * @return hander IoHandlerAdapter
	 */
	public MinaBaseClientHandler getClientHandler() {
		return clientHandler;
	}

	/**
	 * 过滤编码工厂
	 *  
	 * @param clientFilterAdapter  IoFilterAdapter
	 */
	public void setClientFilterAdapter(IoFilterAdapter clientFilterAdapter) {
		this.clientFilterAdapter = clientFilterAdapter;
	}
	
	/**
	 * 获取Mina配置
	 * 
	 * @return minaConfigEntity MinaConfigEntity
	 */
	public MinaConfigEntity getMinaConfigEntity() {
		return minaConfigEntity;
	}

	/**
	 * 设置Mina
	 * <code>setMinaConfigEntity</code>
	 *  
	 * @param minaConfigEntity MinaConfigEntity
	 */
	public void setMinaConfigEntity(MinaConfigEntity minaConfigEntity) {
		this.minaConfigEntity = minaConfigEntity;
	}
	
	/**
	 * 跟服务器端建立连接
	 * <p>
	 *  多线程接收处理
	 *  读取配置信息作为连接对象
	 *  多MSD间互不干扰，不会影响到其他MSD的接收数据
	 * </p>
	 * 
	 * @throws Exception  connectionServerException
	 */
	public void connectionServer() throws Exception{		
		try {
			ExecutorService filterExecutor = new OrderedThreadPoolExecutor(
					MQDCConfigUtil.MINA_RECEIVE_THREAD_MIN, 
					MQDCConfigUtil.MINA_RECEIVE_THREAD_MAX
			);// 多线程
			{
				connector.getFilterChain().addLast("codec", clientFilterAdapter);
				connector.getFilterChain().addLast("threadPool", new ExecutorFilter(filterExecutor));
				connector.setHandler(clientHandler);
				connector.getSessionConfig().setIdleTime(IdleStatus.BOTH_IDLE, MQDCConfigUtil.MINA_IDLETIME);  
				connector.setDefaultRemoteAddress(
						new InetSocketAddress(
								minaConfigEntity.getTunnelIp(), 
								Integer.parseInt(minaConfigEntity.getTunnelPort())
						)
				);
			}
			{
				ConnectFuture future = connector.connect(
						new InetSocketAddress(
								minaConfigEntity.getTunnelIp(), 
								Integer.parseInt(minaConfigEntity.getTunnelPort())
						)
				);// 创建连接
				future.awaitUninterruptibly();// 等待连接创建完成
				session = future.getSession();// 获得session
			}
			MqdcSwitch.setMscIslink(true);
			scheduleMonitor();
		} catch (Exception e) {
			MqdcSwitch.setMscIslink(false);
			throw new Exception("连接到主机地址为【"+minaConfigEntity.getTunnelIp()+"】" +
					"端口为【"+ minaConfigEntity.getTunnelPort()+"】的服务器是失败，请核对参数！"+e.getMessage());
		}	 
	}
	
	/**
	 * 固定时间执行一次连接监控 
	 * 
	 * 该方法会自动重连
	 */
	private void scheduleMonitor() {
		new Timer().schedule(new TimerTask() {
			@Override
			public void run() {
				if (null != connector && !connector.isActive()) {
					interruptConnect();
					restarConnect();
				}
			}
		}, 10000, MQDCConfigUtil.MINA_RECON_MSC_TIME * 1000);
	}
	
	/**
	 * 重连MSC
	 * <P>
	 * 自动检测，自动重连
	 * <p>
	 */
	public void restarConnect(){
		try {
			MQDCCheckMonitor.ISRESUBSCRI = true;
			countMinaReConnect++;
			logger.info("正在重连MSC【"+minaConfigEntity.getTunnelIp()+":"+minaConfigEntity.getTunnelPort()+"】请稍后！");					
			ConnectFuture connFuture = connector.connect();
			connFuture.awaitUninterruptibly();
			session = connFuture.getSession();
			logger.info("重连成功！【"+minaConfigEntity.getTunnelIp()+":"+minaConfigEntity.getTunnelPort()+"】");
			MqdcSwitch.setMscIslink(true);
			logger.error("当前总共尝试重连MSC【"+countMinaReConnect+"】次");
		} catch (Exception e) {
			MqdcSwitch.setMscIslink(false);
			countMinaReConnectException++;
			logger.error("重连异常【"+minaConfigEntity.getTunnelIp()+":" +
					""+minaConfigEntity.getTunnelPort()+"】"+e.getMessage());
			logger.error("重连MSC【"+minaConfigEntity.getTunnelIp()+":"+minaConfigEntity.getTunnelPort()+
					"】异常次数【"+countMinaReConnectException+"】次");
		}		
	}
	
	/**
	 * 断开连接
	 */
	public void interruptConnect(){
		try {
			/* 等待连接断开 */
			if(session!=null){
				session.getCloseFuture().awaitUninterruptibly();
				session.close(true);
			}
		} catch (Exception e) {
			logger.error("关闭连接【"+minaConfigEntity.getTunnelIp()+":"
					+minaConfigEntity.getTunnelPort()+"】异常:"+e.getMessage());
		}
	}

	/**
	 * 回写数据
	 * 
	 * @param obect
	 */
	public abstract void write(Object obect);
}
