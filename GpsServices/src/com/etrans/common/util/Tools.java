package com.etrans.common.util;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Random;
import java.util.TimeZone;
import org.apache.commons.lang.StringUtils;

public class Tools {

	private static int num=0;
	
	/**
	 * 每台车报警保留最近10条
	 */
	public static final int maxMessageNum = 5;
	
	/**
	 * 实时报警页面显示最大记录数
	 */
	public static final int realAlarmMaxCount = 50;

//查岗对象类型附件2
	public static Map<String,String> flatMap = new HashMap<String,String>(3);
//下发报文对象类型 附件3
	public static Map<String,String> flatPlatMap = new HashMap<String,String>(10);
//报警来源	
	public static Map<String,String> alarmSourceStrMap = new HashMap<String,String>(3);
///报警类型 附件1
	public static Map<String,String> alarmTypeMap = new HashMap<String,String>(14);
//督办级别	
	public static Map<String,String> overseeingMap = new HashMap<String,String>(2);
//链路状态
	public static Map<String,String> linkStatusMap = new HashMap<String,String>(3);
//上级下发应答信息类型附件4	
	public static Map<String,String> upAnswerMap = new HashMap<String,String>(3);
	
	static{
		//查岗对象类型附件2
		flatMap.put("1","当前连接的下级平台");
		flatMap.put("2","下级平台所属单一业户");
		flatMap.put("3","下级平台所属所有业户");
		
		//下发报文对象类型 附件3
		flatPlatMap.put("0","下级平台所属单一平台");
		flatPlatMap.put("1","当前连接的下级平台");
		flatPlatMap.put("2","下级平台所属单一业户");
		flatPlatMap.put("3","下级平台所属所有业户");
		flatPlatMap.put("4","下级平台所属所有平台");
		flatPlatMap.put("5","下级平台所属所有平台和业户");
		flatPlatMap.put("6","下级平台所属所有政府监管平台（含监控端）");
		flatPlatMap.put("7","下级平台所属所有企业监控平台");
		flatPlatMap.put("8","下级平台所属所有经营性企业监控平台");
		flatPlatMap.put("9","下级平台所属所有非经营性企业监控平台");

		alarmSourceStrMap.put("1","车载终端");
		alarmSourceStrMap.put("2","企业监控平台");
		alarmSourceStrMap.put("3","政府监管平台");
		alarmSourceStrMap.put("9","其它");
		
		//报警类型 附件1
		alarmTypeMap.put("1","超速报警");
		alarmTypeMap.put("2","疲劳驾驶报警");
		alarmTypeMap.put("3","紧急报警");
		alarmTypeMap.put("4","进入指定区域报警");
		alarmTypeMap.put("5","离开指定区域报警");
		alarmTypeMap.put("6","路段堵塞报警");
		alarmTypeMap.put("7","危险路段报警");
		alarmTypeMap.put("8","越界报警");
		alarmTypeMap.put("9","盗警");
		alarmTypeMap.put("10","劫警");
		alarmTypeMap.put("11","偏离路线报警");
		alarmTypeMap.put("12","车辆移动报警");
		alarmTypeMap.put("13","超时驾驶报警");
		alarmTypeMap.put("255","其他报警");
		
		//督办紧急级别
		overseeingMap.put("0","紧急");
		overseeingMap.put("1","一般");
		
		//链路状态
		linkStatusMap.put("0","连接断开");
		linkStatusMap.put("1","登录成功");
		linkStatusMap.put("2","链路连接未登录");
		
		//上级下发应答信息类型附件4
		upAnswerMap.put("37385","补发车辆定位信息应答");
		upAnswerMap.put("37383","申请交换指定车辆定位信息应答");
		upAnswerMap.put("37384","取消交换指定车辆定位信息应答");
	}
	
	public static String getTermianlState(String gpsInfoMessageState, String userTerminalState) {
		Map<Integer, String> terminalStateMap = new HashMap<Integer, String>();
		// 初始化终端状态
		terminalStateMap.put(0, "GPS定位|GPS未定位");
		terminalStateMap.put(1, "北纬|南纬");
		terminalStateMap.put(2, "东经|西经");
		terminalStateMap.put(3, "运营状态|停运状态");
		terminalStateMap.put(4, "未预约|预约");
		terminalStateMap.put(8, "ACC关|ACC开");
		terminalStateMap.put(9, "空车|重车");
		terminalStateMap.put(10, "油路正常|油路断开");
		terminalStateMap.put(11, "电路正常|电路断开");
		terminalStateMap.put(12, "车门解锁|车门加锁");

		String stateStr = "";
		// 解释终端状态
		String termainlStateStr = Long.toBinaryString(Long.parseLong(Long.valueOf(gpsInfoMessageState, 16).toString()));
		char[] terminalStateArray = ("00000000000000000000000000000000".substring(0, (32 - termainlStateStr.length())) + termainlStateStr).substring(19, 32).toCharArray();

		for (int s = 0; s < terminalStateArray.length; s++) {
			if (null != terminalStateMap.get(12 - s)) {
				if (userTerminalState.contains("|" + (12 - s) + "=" + String.valueOf(terminalStateArray[s]) + "|")) { // 判断用户是否有此终端状态
					stateStr += (String.valueOf(terminalStateMap.get(12 - s)).split("\\|")[Integer.parseInt(String.valueOf(terminalStateArray[s]))]) + (s == 12 ? "" : ",");
				}
			}
		}
		return stateStr;
	}

 
	
	/**
	 * 生成随即密码
	 * 
	 * @param pwd_len 生成的密码的总长度
	 * @return 密码的字符串
	 */
	public static String genRandomNum(int pwd_len) {
		// 35是因为数组是从0开始的，26个字母+10个数字
		final int maxNum = 10;
		int i; // 生成的随机数
		int count = 0; // 生成的密码的长度
		/*
		 * char[] str = { 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y',
		 * 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9' };
		 */

		char[] str = { '0', '1', '2', '3', '4', '5', '6', '7', '8', '9' };

		StringBuffer pwd = new StringBuffer("");
		Random r = new Random();
		while (count < pwd_len) {
			// 生成随机数，取绝对值，防止生成负数，

			i = Math.abs(r.nextInt(maxNum)); // 生成的数最大为36-1

			if (i >= 0 && i < str.length) {
				pwd.append(str[i]);
				count++;
			}
		}

		return pwd.toString();
	}

	
	public static long genRandomLongNum()
	{
	 Random r = new Random(999999);
	 
	 return r.nextLong();
	}
	
	 
	 
	/**
	 * 取得文件后缀
	 * 
	 * @param fileName
	 * @return
	 */
	public static String getSuffix(String fileName) {
		int pos = fileName.lastIndexOf(".");
		return fileName.substring(pos + 1, fileName.length());
	}

	/**
	 * 取得文件前缀
	 * 
	 * @param fileName
	 * @return
	 */
	public static String getPrefix(String fileName) {
		int pos = fileName.lastIndexOf(".");
		return fileName.substring(0, pos == -1 ? fileName.length() : pos);
	}

	/**
	 * 获取文件内容
	 * 
	 * @param filePath
	 * @return
	 * @throws IOException
	 */
	public static String getFileContext(String filePath) throws IOException {
		StringBuffer stringBuffer = new StringBuffer();
		File file = null;
		InputStreamReader inputStreamReader = null;
		BufferedReader reader = null;
		try {
			String line;// 用来保存每行读取的内容
			file = new File(filePath);
			if (!file.exists()) {
				return null;
			}
			inputStreamReader = new InputStreamReader(new FileInputStream(file), "UTF-8");
			reader = new BufferedReader(inputStreamReader);
			line = reader.readLine();// 读取第一行
			while (line != null) {// 如果 line 为空说明读完了
				stringBuffer.append(line);// 将读到的内容添加到 buffer中
				stringBuffer.append("<br>");// 添加换行符
				line = reader.readLine();// 读取下一行
			}
		} catch (IOException e) {
			e.printStackTrace();
		} finally {
			if (reader != null) {
				reader.close();
			}
			if (inputStreamReader != null) {
				inputStreamReader.close();
			}
		}
		return stringBuffer.toString();
	}

	/**
	 * 文件重命名
	 * 
	 * @param srcPath
	 * @param diskPath
	 * @throws IOException
	 */
	public static void rename(String srcPath, String diskPath) throws IOException {
		File file = new File(srcPath);
		if (file.exists()) {
			file.renameTo(new File(diskPath));// 改名
		}
	}

	/**
	 * 删除文件
	 * 
	 * @param filePath
	 * @throws IOException
	 */
	public static void deleteFile(String filePath) throws IOException {
		File file = new File(filePath);
		if (file.exists()) {
			file.delete();// 删除文件
		}
	}

	/**
	 * 创建文件
	 * 
	 * @param filePath
	 * @param fileName
	 * @throws IOException
	 */
	public static void createFile(String filePath, String fileName) throws IOException {
		File file = new File(filePath + "/" + fileName);
		if (!file.exists()) {
			file.createNewFile();
		} 
	}

	/**
	 * 设置文件内容
	 * 
	 * @param filePath
	 * @param fileName
	 * @param list
	 * @param flag ---true 代表initKey要生成,false代表initKey不用生成
	 * @throws IOException
	 */
	public static void setBossFileContext(String filePath, String fileName, String context) throws IOException {
		File file = new File(filePath + "/" + fileName);
		// 判断文件是否存在
		if (!file.exists()) {
			throw new IOException("file is not exists!");
		} else {
			// 声明一个缓冲输出流
			BufferedWriter bufferedWriter = null;
			try {
				// 构造文件输出字符流,第二参数为true是向文件追加信息的意思
				bufferedWriter = new BufferedWriter(new OutputStreamWriter(new FileOutputStream(file, true)));
				bufferedWriter.write(context);
				// 新行
				bufferedWriter.newLine();
				bufferedWriter.flush();
			} catch (IOException e) {
				throw e;
			} finally {
				try {
					if (bufferedWriter != null) {
						bufferedWriter.close();
					}
				} catch (IOException e) {
					throw e;
				}
			}
		}
	}

	/**
	 * 获取文件内容
	 * 
	 * @param filePath
	 * @return
	 * @throws IOException
	 */
	public static List<String> getBossFileContext(String filePath) throws IOException {
		List<String> list = new ArrayList<String>();
		File file = null;
		InputStreamReader inputStreamReader = null;
		BufferedReader reader = null;
		try {
			String line;// 用来保存每行读取的内容
			file = new File(filePath);
			if (!file.exists()) {
				return null;
			}
			inputStreamReader = new InputStreamReader(new FileInputStream(file));
			reader = new BufferedReader(inputStreamReader);
			line = reader.readLine();// 读取第一行
			while (line != null) {// 如果 line 为空说明读完了
				list.add(line);// 将读到的内容添加到 buffer中
				line = reader.readLine();// 读取下一行
			}
		} catch (IOException e) {
			e.printStackTrace();
		} finally {
			if (reader != null) {
				reader.close();
			}
			if (inputStreamReader != null) {
				inputStreamReader.close();
			}
		}
		return list;
	}
	
	/**
	 * 描述： 取字符的字节的16进制ASICC
	 * 
	 * @author lihaiyan
	 * @since Create on 2012-05-02
	 * @version Copyright (c) 2012 by e_trans.
	 */
  public  static String getByteHex(String str) {
		
		String result = "";
		String toASICCString=str;
		try {
			byte[] array = toASICCString.getBytes("GBK");

			for (byte y : array) {
				 String hex = Integer.toHexString(y & 0xFF);
				  if (hex.length() == 1) {
				        hex = '0' + hex;
				      }
				  result+=hex;
			}
		} catch (Exception e) {
		}

		return result;

	}

	/**
	 * 字符串转换成十六进制字符串
	 */
	public static String String2hex(String str) {
		byte[] b = null;
		if (str != null && !str.equals(""))
			b = str.getBytes();
		else
			return null;
		String hs = "";
		String stmp = "";
		for (int n = 0; n < b.length; n++) {
			stmp = (java.lang.Integer.toHexString(b[n] & 0XFF));
			if (stmp.length() == 1)
				hs = hs + "0" + stmp;
			else
				hs = hs + stmp;
			if (n < b.length - 1)
				hs = hs + ":";
		}
		return hs.toUpperCase();
	}

	/**
	 * 将字符串转换成二进制字符串，以空格相隔
	 * 
	 * @param str 待转换的字符
	 * @return String 以空格隔开的二进制串
	 * */
	public static String stringToBinary(String str) {
		char[] strChar = str.toCharArray();
		String result = "";
		for (int i = 0; i < strChar.length; i++) {

			result += Integer.toBinaryString(strChar[i]) + (i == strChar.length - 1 ? "" : " ");
		}
		return result;
	}

	/**
	 * 将二进制转换为字符串
	 * 
	 * @param binary 待转换的二进制串
	 * @return String
	 * */
	public static String binaryToString(String binary) {
		StringBuffer suf = new StringBuffer();
		for (int b = 0; b < binary.split(" ").length; b++) {
			int[] temp = binaryToIntArray(binary.split(" ")[b]);
			int sum = 0;
			for (int i = 0; i < temp.length; i++) {
				sum += temp[temp.length - 1 - i] << i;
			}
			suf.append((char) sum);
		}
		return suf.toString();
	}

	/**
	 * 将二进制字符串转换为char
	 * @param binary 待转换的二进制字符
	 * @return char
	 * */
	public static char binaryToChar(String binary) {
		int[] temp = binaryToIntArray(binary);
		int sum = 0;
		for (int i = 0; i < temp.length; i++) {
			sum += temp[temp.length - 1 - i] << i;
		}
		return (char) sum;
	}

	/**
	 * 将二进制字符串转换成int数组
	 * 
	 * @param binary 待转换的二进制字符
	 * @return int[]
	 * */
	public static int[] binaryToIntArray(String binary) {
		char[] temp = binary.toCharArray();
		int[] result = new int[temp.length];
		for (int i = 0; i < temp.length; i++) {
			result[i] = temp[i] - 48;
		}
		return result;
	}

	/**
	 * 字节数组转换成图片并输出
	 * @param bytes 待转换的字节数组
	 * @param fileName 图片输出时的图片名称
	 * @param imageType 图片后缀名
	 * @param filePath 图片输出路径
	 * @throws IOException 
	 * */
	public static void byteArrayToImage(byte[] bytes, String fileName, String imageType, String filePath) throws IOException {
		String file = filePath + fileName + "." + imageType;
		File f = new File(file);
		if(f.exists())f.delete();
		byte[] buf = bytes;
		FileOutputStream out=null;
		try {
			out = new FileOutputStream(f);
		} catch (FileNotFoundException e) {
			throw new FileNotFoundException("文件没找到"+e.getMessage());
		}
		try {
			out.write(buf);
			out.close();
		} catch (IOException e) {
			throw new IOException("IO异常"+e.getMessage());
		}
		
	}

	/**
	 * 十六进字符串转换成字节数组
	 * @param hexString 待转换的十六进字符串
	 * @return byte数组
	 * */
	public static byte[] hexStringToBytes(String hexString) {
		if (hexString == null || hexString.equals("")) {
			return null;
		}
		hexString = hexString.toUpperCase();
		int length = hexString.length() / 2;
		char[] hexChars = hexString.toCharArray();
		byte[] d = new byte[length];
		for (int i = 0; i < length; i++) {
			int pos = i * 2;
			d[i] = (byte) (charToByte(hexChars[pos]) << 4 | charToByte(hexChars[pos + 1]));
		}
		return d;
	}

	/**
	 * 字符转字节byte
	 * @param c 待转换的字符
	 * @return byte
	 * */
	public static byte charToByte(char c) {
		return (byte) "0123456789ABCDEF".indexOf(c);
	}

 
	
	/**
	 * 字符串转ASICC
	 * @param str
	 * @return
	 */
	public static String getASCII(String str)
	{
	 
	 if(StringUtils.isEmpty(str))
		 new RuntimeException("字符串不能为空");
	 
	  String result = "";
		try 
		{
			byte[] array = str.getBytes("GBK");

			for (byte y : array) 
			{
				result += Integer.toHexString(y & 0xFF);
			}
		} 
		catch (Exception e) 
		{
		}
	 
	 return result;
	}
	
	/**
	 * 获取递增整数。到Integer最大值重新初始化为0
	 * @return
	 */
	public static Integer getNum()
	{
	 
	 if(num >= Integer.MAX_VALUE) num=0;
	
	 return num++;
	}
	
	
	
	public static Integer getRandomNum(int max)
	{
	 
	 Random random = new Random();
	 
	 return random.nextInt(max);
	 
	}
	
	/**
	 * 
	 * @param dateStr
	 * @return 是否是最新时间
	 * @throws Exception
	 */
	public static  boolean isNew(String dateStr) throws Exception
	{
		
		Long d=Long.parseLong(dateStr);
		Long now =System.currentTimeMillis();
		if((now - d) <=(30*60*1000)) //30分钟            	//if((now - d) <=(60*5 *1000))
		{
			return true;
		}
		
		return false;
	}
 
	 
 
	public static SimpleDateFormat getSimpleDateFormat(String formatStr){
		SimpleDateFormat sdf = new SimpleDateFormat(formatStr);
		sdf.setTimeZone(timeZoneChina);
		return sdf;
	}
	private static TimeZone timeZoneChina = TimeZone.getTimeZone("Asia/Shanghai");// 获取中国的时区 
	
	/**
	 * 将短时间格式字符串转换为时间 yyyy-MM-dd
	 * 
	 * @param strDate
	 * @return
	 * @throws ParseException 
	 */
	public static Date strToDate(String strDate) throws ParseException {
		SimpleDateFormat formatter = getSimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		Date strtodate = formatter.parse(strDate);
		return strtodate;
	}
	
	/**
	 * 将日期转换成字符串
	 * 
	 * @param dateTime
	 * @return
	 */
	public static String convertDateToString(Date dateTime) {
		SimpleDateFormat df =getSimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		return df.format(dateTime);
	}
	
	/**
	 * 返回格式化日期字符串[yyyy-M-dd HH:mm:ss]
	 * @return
	 */
	public static String formatDate(Date date) throws Exception{
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-M-dd HH:mm:ss");
		TimeZone timeZoneChina = TimeZone.getTimeZone("Asia/Shanghai");// 获取中国的时区
		sdf.setTimeZone(timeZoneChina);
		
		return sdf.format(date);
	}
	
 
 
	public static boolean deleteDir(File dir) {
        if (dir.isDirectory()) {
            String[] children = dir.list();
            for (int i=0; i<children.length; i++) {
                boolean success = deleteDir(new File(dir, children[i]));
                if (!success) {
                    return false;
                }
            }
        }
        // 目录此时为空，可以删除
        return dir.delete();
    }
 
	public static String getNewArray(String[] oldAryStr,int star,int end,String replaceStrSplit){
		StringBuffer nStr = new StringBuffer("");
		for(int i=0;i<oldAryStr.length;i++){
			if(i>=star && i<end)nStr.append(oldAryStr[i]).append(replaceStrSplit);
		}
		String nStr$ = nStr.toString();
		return nStr$.substring(0,nStr$.length()-1);
	}
}
