package com.etrans.bubiao.action.http;

import java.security.SecureRandom;
import java.util.Map;
import java.util.Random;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.atomic.AtomicLong;

/**
 * 安全票据工具类
 * @author Administrator
 *
 */
public class TicketManager {
	private final Map<String, Long> ticketMap = new ConcurrentHashMap<String, Long>();
	
	/**
	 * 3小时有效时间
	 */
	private final int maxTime = 3 * 3600 * 1000;
	
	private UniqTimer timer = new UniqTimer();
	private Random random = new SecureRandom();
	private static TicketManager ticketManager; 
	
	public void removeTicket(String ticket) throws Exception {
		ticketMap.remove(ticket);
	}
	
	public void putTicket(String ticket){
		Long time = System.currentTimeMillis();
		ticketMap.put(ticket,time);
	}
	
	/**
	 * 验查票据有效性 true:无效 false:有效
	 */
	public boolean checkTicketAble(String ticket)throws Exception {
		Long endTime = System.currentTimeMillis();
		Long startTime = this.ticketMap.get(ticket);
		
		if(startTime == null) return true;
		
		if(endTime - startTime > maxTime){
			this.ticketMap.remove(ticket);
			return true;
		}else{
			return false;
		}
	}
	
	/**
	 * 获取UniqID实例
	 * 
	 * @return UniqId
	 */
	public static TicketManager getInstance() throws Exception {
		if(ticketManager == null){
			ticketManager = new TicketManager();
		}
		return ticketManager;
	} 
	
	/**
	 * 获得不会重复的毫秒数
	 * 
	 * @return
	 */
	public long getUniqTime() throws Exception {
		return timer.getCurrentTime();
	}

	/**
	 * 获得UniqId
	 * 
	 * @return uniqTime-randomNum-threadId
	 */
	public String getUniqID()throws Exception {
		StringBuffer sb = new StringBuffer();
		long t = timer.getCurrentTime();

		sb.append(t);

		sb.append("-");

		sb.append(random.nextInt(8999) + 1000);

		return sb.toString();
	}
	
	/**
	 * 实现不重复的时间
	 * 
	 * @author dogun
	 */
	private static class UniqTimer {
		private AtomicLong lastTime = new AtomicLong(System.currentTimeMillis());

		public long getCurrentTime()throws Exception {
			return this.lastTime.incrementAndGet();
		}
	}
	
	public static void main(String args[])throws Exception {
		//uniqTime-randomNum
		System.out.println(TicketManager.getInstance().getUniqID());
	}
}
