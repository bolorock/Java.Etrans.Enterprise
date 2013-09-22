package com.etrans.common;

import java.util.concurrent.ArrayBlockingQueue;
import java.util.concurrent.ThreadPoolExecutor;
import java.util.concurrent.TimeUnit;

public class ThreadPool
{
	private static ThreadPoolExecutor  pool;
	
	static{
		pool=new ThreadPoolExecutor(2, 4, 3, TimeUnit.SECONDS, new ArrayBlockingQueue<Runnable>(3), new ThreadPoolExecutor.DiscardOldestPolicy());
	}
	
	
	/**
	 * Æô¶¯Ïß³Ì
	 * @param thread
	 */
	public static void execute(Runnable  thread){
		pool.execute(thread);
	}
}
