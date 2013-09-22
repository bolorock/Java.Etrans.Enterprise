package com.etrans.common.util.jiangkong;


import org.xvolks.jnative.JNative;
import org.xvolks.jnative.Type;
import org.xvolks.jnative.exceptions.NativeException;

/**
 * SDClientReg.dll调用类
 * @author lujunyong
 *时间：2013-5-2
 */
public class SDClientRegConnect {

	public SDClientRegConnect(){
		
	}
	
	
  /**  
   * 3G 视频  【连接方法】
   *  TestConnect   
   * @param ip 应用服务器IP
   * @param port 端口  
   * @return int 1 :成功 0:失败 
   * @throws NativeException
   * @throws IllegalAccessException
   */
	private static final String TestConnect(String ip, int port)throws NativeException, IllegalAccessException { 
		
		JNative n = null;
		try {
			n = new JNative("SDClientReg.dll", "DllUnregisterServer");
			n.setRetVal(Type.STRING);
			int i = 0;
			n.setParameter(i++, Type.STRING, ip);
			n.setParameter(i++, Type.INT, "" + port);
			n.invoke();
			String resultInfo = n.getRetVal();
			return resultInfo;
//			return Integer.parseInt(n.getRetVal());
		}finally {
			if (n != null)
			n.dispose();
		}
		
	}
	
	
	/**
	 * 调用系统的user32.dll文件的MessageBoxA方法
	 * @param parentHandle
	 * @param message
	 * @param caption
	 * @param buttons
	 * @return
	 * @throws NativeException
	 * @throws IllegalAccessException
	 */
	public   static   final   int  messageBox( int  parentHandle, String message,    
	        String caption,  int  buttons)  throws  NativeException,    
	        IllegalAccessException {    
	    JNative n =  null ;    
	     try  {
	        n =  new  JNative("user32.dll",  "MessageBoxA" );  // 常量DLL_NAME的值为User32.dll    
	         // 构造JNative时完成装载User32.dll,并且定位MessageBoxA方法    
	        n.setRetVal(Type.INT);  // 指定返回参数的类型    
	         int  i =  0 ;    
	        n.setParameter(i++, Type.INT,  ""  + parentHandle);    
	        n.setParameter(i++, Type.STRING, message);    
	        n.setParameter(i++, Type.STRING, caption);    
	        n.setParameter(i++, Type.INT,  ""  + buttons);  // 指定位置上的参数类型和值    
	        n.invoke();  // 调用方法    
	        return  Integer.parseInt(n.getRetVal());    
	    }  finally  {    
	         if  (n !=  null )    
	            n.dispose();  // 记得释放    
	    }    
	}   

	
	
	
	/***
	 * 指定Dll文件路径,动态加载本地链接库
	 * @param path  Dll文件的路径,不包含DLL名称 例如：windows - d:\test\test\ unix - root/test/test/
	 * @param ip 应用服务器IP  
	 * @param port 端口
	 * @return 
	 * @throws NativeException
	 * @throws IllegalAccessException
	 */
	 public static final String TestConnectFromDllPath(String path,String ip, int port) throws NativeException, IllegalAccessException{   
         path += "SDClientReg.dll";
         System.load(path);
         return TestConnect(ip,port);   
	 }  

	
	 /**
	  *  Dll文件放在JRE\bin目录下面，ClassLoader就能通过System.loadLibrary()动态加载本地链接库
	  * @param ip 应用服务器IP  
	  * @param port  端口
	  * @param intrcpt 是否采用数据压缩方式 1 :true 0:false  
	  * @return 
	  * @throws NativeException
	  * @throws IllegalAccessException
	  */
	public static final String TestConnectFromDllPath(String ip, int port) throws NativeException, IllegalAccessException{   
	     System.loadLibrary("SDClientReg");
	     return TestConnect(ip,port);
	}
	
	
	
	/*****************测试****************/
	
	public static void main(String[] args) {
		try {
			
			//TransmitIP=121.33.255.142,TransmitPort=6213,ID=14000373665,Kind=815,Channel=1&2&3&4,RegistrationNO=桂A97501
			String info;
			
			/**DLL文件的路径   */
			String path="C:/Program Files/插件安装 1.1/";
			String path2="C:/Windows/System32/";
			String ip = "121.33.255.142"; //服务器IP
			int port = 6213;            //端口
			
			System.out.println("path2:"+path2);   //得到DLL文件的路径
			System.out.println("path:"+path);   //得到DLL文件的路径
			
			/**系统.dll文件**/
//			int resultInt = SDClientRegConnect.messageBox(0, "This is the message body", "message_caption",0);
//			System.out.println("返回结果一："+resultInt);
			
			/****/
			info=SDClientRegConnect.TestConnectFromDllPath(path, ip, port);
			System.out.println("返回结果2："+info);
			
			} catch (NativeException e) {
				e.printStackTrace();
				System.out.println("报错！");
			} catch (IllegalAccessException e) {
				e.printStackTrace();
				System.out.println("报错！");
			}   
	}
	 
	
}
