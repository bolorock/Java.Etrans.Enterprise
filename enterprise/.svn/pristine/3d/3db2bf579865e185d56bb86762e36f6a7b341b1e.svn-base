
package com.etrans.common.util.encrypt;


public class CsEncodeUtils {

	private static final int key = 0x12345678;

    /// <summary>
    /// 执行加密的内部函数
    /// </summary>
    /// <param name="_bytes"></param>
    /// <param name="_k0"></param>
    /// <param name="_k1"></param>
    /// <param name="_k2"></param>
    /// <param name="_k3"></param>
    private static void doEncrypt( byte[] _bytes, byte _k0, byte _k1, byte _k2, byte _k3) throws Exception
    {
        int len = _bytes.length;

        _bytes[0] = (byte)( _bytes[0] + _k2 );

        for( int i = 1; i<= len - 1; i++ )
            _bytes[i]  = (byte)( (_bytes[i-1] + _bytes[i]) ^ _k0 );

        _bytes[len - 1]  = (byte)( _bytes[len - 1] + _k3 );

        for(int i = len - 2; i>= 0; i--)
            _bytes[i]  = (byte)(( _bytes[i+1] + _bytes[i]) ^ _k1 );
    }

  //将指定byte数组以16进制的形式返回
    public static String printHexString( byte b) throws Exception {  
         String hex = Integer.toHexString(b & 0xFF); 
         if (hex.length() == 1) { 
           hex = '0' + hex; 
         } 
         return hex.toUpperCase(); 

    }
    
    /// <summary>
    /// 输入待加密的内容和密码，输出加密后的ASCII编码
    /// </summary>
    /// <param name="_src">待加密的内容</param>
    /// <param name="_key">密钥</param>
    /// <returns></returns>
    public static String Encrypt2H(String _src, int _key) throws Exception
    {
        if (0 == _src.length())
            return _src;

        byte k3 = (byte)((_key & 0xFF000000) >> 24);
        byte k2 = (byte)((_key & 0x00FF0000) >> 16);
        byte k1 = (byte)((_key & 0x0000FF00) >> 8);
        byte k0 = (byte)(_key & 0x000000FF);

        byte[] bytes = _src.getBytes();

        doEncrypt(bytes, k0, k1, k2, k3);
        doEncrypt(bytes, k0, k1, k2, k3);

        String dst = "";
        for (int i = 0; i < bytes.length; i++)
            dst += printHexString(bytes[i]);
        	

        return dst;
    }
    
    /// <summary>
    /// 执行解密的方法
    /// </summary>
    /// <param name="_bytes"></param>
    /// <param name="_k0"></param>
    /// <param name="_k1"></param>
    /// <param name="_k2"></param>
    /// <param name="_k3"></param>
    private static void doDecrypt( byte[] _bytes, byte _k0, byte _k1, byte _k2, byte _k3) throws Exception
    {
        int len = _bytes.length;
        
        for(int i = 0; i <= len - 2; i++)
            _bytes[i]  = (byte)( (_bytes[i] ^ _k1) - _bytes[i+1]);

        _bytes[len - 1]  = (byte)( (_bytes[len - 1]) - _k3);

        for(int i = len - 1; i>= 1; i--)
            _bytes[i]  = (byte)( (_bytes[i] ^ _k0) - _bytes[i-1]);

        _bytes[0] = (byte)(_bytes[0] - _k2);
    }

    public static byte getbyte(int intValue) throws Exception{
        byte byteValue=0;   
        int temp = intValue % 256;   
        if ( intValue < 0) {   
          byteValue =  (byte)(temp < -128 ? 256 + temp : temp);   
        }   
        else {   
          byteValue =  (byte)(temp > 127 ? temp - 256 : temp);   
        }  
        return byteValue;
    }

    
    public static String Decrypt2H(String _hex, int _key) throws Exception
    {
        if(0 == _hex.length())
            return _hex;

        byte[] bytes= new byte[_hex.length() / 2];
        for(int i=0; i<bytes.length; i++){
            bytes[i] = Byte.parseByte(String.valueOf(getbyte(Integer.valueOf(_hex.substring(i*2, i*2+2),16))));
        }
        
        byte k3 = (byte)((_key & 0xFF000000) >> 24);
        byte k2 = (byte)((_key & 0x00FF0000) >> 16);
        byte k1 = (byte)((_key & 0x0000FF00) >> 8);
        byte k0 = (byte)( _key & 0x000000FF);

        doDecrypt(bytes, k0, k1, k2, k3);
        doDecrypt(bytes, k0, k1, k2, k3);

        return new String(bytes);
    }

    /**
     * 加密
     * @param _src
     * @return
     * @throws Exception
     */
    public static String Encrypt(String _src) throws Exception
    {
    	return Encrypt2H(_src, key);
    }
    /**
     * 解密
     * @param _hex
     * @return
     * @throws Exception
     */
    public static String Decrypt(String _hex) throws Exception
    {
    	return Decrypt2H(_hex, key);
    }
    
    public static void main(String args[]) throws Exception{
    	  String src = "654321";

          String dst = CsEncodeUtils.Encrypt(src);
          System.out.println(dst);
          src = CsEncodeUtils.Decrypt(dst);
    	  
          System.out.println(src);
    }

}
