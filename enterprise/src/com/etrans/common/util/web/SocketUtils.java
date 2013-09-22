package com.etrans.common.util.web;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.io.PrintWriter;
import java.net.Socket;
import java.net.URLDecoder;
import java.net.URLEncoder;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

import com.etrans.common.util.encrypt.EncodeUtils;

/**
 * PGIS socket
 * @author etrans
 *
 */
public class SocketUtils {
	
	private  static final Log logger = LogFactory.getLog(SocketUtils.class.getName());
	
	private static String locationHost = "124.172.221.99"; // 取中文地址的host [ip地址]
//	private static String locationHost = "192.168.2.178"; // 取中文地址的host [ip地址]
	private static int locationPort = 5300; // 取中文地址的port[端口]
//	private static int locationPort = 6789; // 取中文地址的port[端口]
	
	public SocketUtils(String host, int port) {
		this.locationHost = host;
		this.locationPort = port;
	}
	
	public static String strTest(String lonlat){
		String receivedMessage = null;
		Socket socket = null;
		try {
			socket = getLocationSocket();
			BufferedReader bufferedReader = getReader(socket); // 取输入流
			receivedMessage = bufferedReader.readLine();
			
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} // 连接服务端
		return "";
	}
	
	
	/**
	 *经纬度转中文地址
	 *@param lon 经度
	 *@param lat 纬度
	 *@return lon,lat,中文地址
	 * */
	public static Object getAddress(String lonlat) throws Exception {
		String receivedMessage = null;
		Socket socket = null;
		try {
			socket = getLocationSocket(); // 连接服务端
			PrintWriter printWriter = getWriter(socket); // 取输出流
			String lonlatInfo="##1,"+lonlat+"\r\n";
			printWriter.print(lonlatInfo);
			printWriter.flush();
			
			InputStream in = socket.getInputStream();  
			BufferedReader bufferedReader = getReader(socket); // 取输入流
			
			/**取第一遍**/
			Thread.sleep(1000);// 等3秒再取值
//			receivedMessage = bufferedReader.readLine();
			byte[] b = new byte[1024]; 
			int length  = in.read(b);
			receivedMessage = new String(b,0,length,"GBK"); // 收到的字符串
			String[] lngArray=new String[2];
			lngArray=receivedMessage.split("\\|");
			receivedMessage=lngArray[0];
			
			/**取第二遍**/
			if (receivedMessage == null) {// 未取得值时再次取值
				Thread.sleep(3000); // 等3秒再取值
				byte[] b2 = new byte[1024]; 
				int length2  = in.read(b2);
				receivedMessage = new String(b2,0,length2,"GBK"); // 收到的字符串
				String[] lngArray2=new String[2];
				lngArray2=receivedMessage.split("\\|");
				receivedMessage=lngArray2[0];
			}
			
			logger.error("------------(PGIS根据经纬度获取中文地址)成功，------------地址为："+receivedMessage);
			closeSocket(socket); // 不管是否有返回值都关闭
		} catch (Exception e) {
			receivedMessage = null;
			logger.error("------------(PGIS经纬度获取中文地址)异常------------"+e );
			closeSocket(socket);
		}
		System.out.println("返回的结果："+receivedMessage);
		return receivedMessage;
	}
	
	/**
	 * 连接地址转换服务端
	 * */
	public static Socket getLocationSocket() throws Exception {
		Socket socket = null;
		try {
			socket = new Socket(locationHost, locationPort); // 连接服务端
			logger.error("------------(PGIS经纬度获取中文地址socket)连接成功-------------" );
		} catch (Exception e) {
			socket = null;
			logger.error("------------(PGIS经纬度获取中文地址socket)连接失败-------------" );
		}
		return socket;
	}
	
	
	/**
	 * 输出流
	 * */
	public static PrintWriter getWriter(Socket socket) throws IOException {
		PrintWriter printWriter = null;
		try {
			OutputStream socketOut = socket.getOutputStream();
			printWriter = new PrintWriter(socketOut, true);
		} catch (Exception e) {
			printWriter = null;
		}
		return printWriter;
	}
	
	
	/**
	 * 输入流
	 * */
	public static BufferedReader getReader(Socket socket) {
		BufferedReader bufferedReader = null;
		try {
			InputStream socketIn = socket.getInputStream();
			bufferedReader = new BufferedReader(new InputStreamReader(socketIn));
		} catch (Exception e) {
			bufferedReader = null;
		}
		return bufferedReader;
	}

	/**
	 * 关闭连接
	 * */
	public static void closeSocket(Socket socket) {
		if (socket != null) {
			try {
				socket.close();
				socket = null;
				logger.error("------------(PGIS经纬度获取中文地址socket)关闭成功-------------" );
			} catch (Exception s) {
				logger.error("------------(PGIS经纬度获取中文地址socket)关闭异常-------------" );
			}
		}
	}
	
	/**
	 * test
	 * @param args
	 */
	public static void main(String[] args) {
		
		try {
			
			Object bb=SocketUtils.getAddress("113.415383,22.679167");
			System.out.println(bb.toString());
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
	}
	
	
}
