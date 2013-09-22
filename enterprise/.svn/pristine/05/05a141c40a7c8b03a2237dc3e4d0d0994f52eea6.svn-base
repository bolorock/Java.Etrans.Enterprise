package com.etrans.common.util.jiangkong;

import java.io.File;

import org.xvolks.jnative.exceptions.NativeException;

/**
 * 测试Domo
 * @author etrans
 *
 */
public class Demo {
	
	/**
	 * 连接SDClientReg.dll
	 * @return
	 * @throws NativeException
	 * @throws IllegalAccessException
	 */
	public String getInfo() throws NativeException, IllegalAccessException{
		
		String path=getClass().getResource(File.separator).getPath();
		path = path.substring(1,path.length());   
		System.out.println(path);   //得到DLL文件的路径   
		
		/**DLL文件的路径   */
//		String path="C://Program Files//插件安装 1.1//";
		String ip = "121.33.255.142"; //服务器IP   
		int port = 6213;             //端口   
		//方法1 传入Dll文件的路径   
		//String info = SDClientRegConnect.TestConnectFromDllPath(path, ip, port);   
		    
		//方法2 Dll文件已经放在JRE\bin目录下面   
		String info = SDClientRegConnect.TestConnectFromDllPath(ip, port);   
		    
		//1为成功，0为失败   
//		if (info)   
//		   System.out.println("应用服务器可用。");   
//		else  
//		   System.out.println("应用服务器不可用，请检查IP地址和端口是否正确。");   
		    
		return info;

	}
	
	public String getPa(){
		String path=getClass().getResource(File.separator).getPath();
		
		return path;
	}
	

}
