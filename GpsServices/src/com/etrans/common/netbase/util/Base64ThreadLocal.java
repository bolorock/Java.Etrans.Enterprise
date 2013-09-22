package com.etrans.common.netbase.util;

import java.io.UnsupportedEncodingException;
import java.util.Arrays;

import org.apache.commons.codec.binary.Base64;

import sun.misc.BASE64Decoder;
/**
 * Base64加密
 * 
 * @author Pomelo(柚子.)
 * @since 2012-12-10 18:57
 * @version 1.0
 */
public class Base64ThreadLocal {
    private static final char[] CA="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".toCharArray();
    private static final int[] IA=new int[256];
    static{
    	Arrays.fill(IA,-1);
    	for(int i=0,iS=CA.length;i<iS;i++){
    		IA[CA[i]]=i;
    	}
    	IA['=']=0;
    }
    
    public  char[] encodeToChar(byte[] sArr,boolean lineSep){
    	int sLen=sArr!=null?sArr.length:0;
    	if(sLen==0){
    		return new char[0];
    	}
    	int eLen=(sLen/3)*3;
    	int cCnt=((sLen-1)/3+1)<<2;
    	int dLen=cCnt+(lineSep?(cCnt-1)/76<<1:0);
    	char[] dArr=new char[dLen];
    	for(int s=0,d=0,cc=0;s<eLen;){
    		int i=(sArr[s++]&0xff)<<16|(sArr[s++]&0xff)<<8|(sArr[s++]&0xff);
    		dArr[d++]=CA[(i>>>18)&0x3f];
    		dArr[d++]=CA[(i>>>12)&0x3f];
    		dArr[d++]=CA[(i>>>6)&0x3f];
    		dArr[d++]=CA[i&0x3f];
    		if(lineSep && ++cc==19&&d<dLen-1){
    			dArr[d++]='\r';
    			dArr[d++]='\n';
    			cc=0;
    		}
    	}
    	
    	int left=sLen-eLen;
    	if(left>0){
    		int i=((sArr[eLen]&0xff)<<10)|(left==2?((sArr[sLen-1]&0xff)<<2):0);
    		dArr[dLen-4]=CA[i>>12];
    		dArr[dLen-3]=CA[(i>>>16)&0x3f];
    		dArr[dLen-2]=left==2?CA[i&0x3f]:'=';
    		dArr[dLen-1]='=';
    	}
    	
    	return dArr;
    	
    }
    
    private byte[] decodeFast(String s){
    	int sLen=s.length();
    	if(sLen==0){
    		return new byte[0];
    	}
    	int slx=0,elx=sLen-1;
    	while(slx<elx&&IA[s.charAt(slx)&0xff]<0){
    		slx++;
    	}
    	while(elx>0&&IA[s.charAt(elx)&0xff]<0){
    		elx--;
    	}
    	int pad=s.charAt(elx)=='='?(s.charAt(elx-1)=='='?2:1):0;
    	int cCnt=elx-slx+1;
    	int sepCnt=sLen>76?(s.charAt(76)=='\r'?cCnt/78:0)<<1:0;
    	int len=((cCnt-sepCnt)*6>>3)-pad;
    	byte[] dArr=new byte[len];
    	int d=0;
    	for(int cc=0,eLen=(len/3)*3;d<eLen;){
    		int i=IA[s.charAt(slx++)]<<18|IA[s.charAt(slx++)]<<12|IA[s.charAt(slx++)]<<6|IA[s.charAt(slx++)];
            dArr[d++]=(byte)(i>>16);
            dArr[d++]=(byte)(i>>8);
            dArr[d++]=(byte)i;
            if(sepCnt>0&&++cc==19){
            	slx+=2;
            	cc=0;
            }
    	}
    	if(d<len){
    		int i=0;
    		for(int j =0;slx<=elx-pad;j++){
    			i|=IA[s.charAt(slx++)]<<(18-j*6);
    		}
    		for(int r=16;d<len;r-=8){
    			dArr[d++]=(byte)(i>>r);
    		}
    	}
    	return dArr;
    	
    }
    public  String decoderMessageFast(String s)throws UnsupportedEncodingException{
    	return new String(decodeFast(s),"GBK");
    }
    
    
	private  BASE64Decoder decoder;
	public Base64ThreadLocal() {
		this.decoder=new BASE64Decoder();
	}
	/**
	 * Base64 解密(在多线程情况下，数据大的时候解码时出现乱码)
	 * */
	public  String decoderMessage(String message) throws Exception {
		return new String(decoder.decodeBuffer(message),"GBK");
	}
	
	
	public String decoderMessageApache(String message) throws UnsupportedEncodingException{
		return new String(Base64.decodeBase64(message),"GBK");
	}
	
	
	public static void main(String[] args) throws Exception{
		Base64ThreadLocal base64ThreadLocal=new Base64ThreadLocal();
		System.out.println(base64ThreadLocal.decoderMessageFast("测试"));
	}
}
