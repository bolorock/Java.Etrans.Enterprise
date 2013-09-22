package com.etrans.bubiao.action;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.io.PrintWriter;
import java.io.UnsupportedEncodingException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.apache.poi.hssf.usermodel.HSSFCellStyle;
import org.apache.poi.hssf.usermodel.HSSFClientAnchor;
import org.apache.poi.hssf.usermodel.HSSFPatriarch;
import org.apache.poi.hssf.usermodel.HSSFRichTextString;
import org.apache.poi.hssf.usermodel.HSSFRow;
import org.apache.poi.hssf.usermodel.HSSFSheet;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.struts2.ServletActionContext;
import org.apache.struts2.convention.annotation.Action;
import org.apache.struts2.convention.annotation.Result;

import com.etrans.common.util.ParamKey;
import com.etrans.common.util.web.RowNumUtil;
import com.etrans.common.util.web.Struts2Utils;
import com.opensymphony.xwork2.ActionSupport;


/**
 * Action 高层类
 * @author ivan
 * 
 */

public class BaseAction extends ActionSupport
{
/**
  * 
  */
 private static final long serialVersionUID = 5562343152003507811L;


	protected Logger log = LogManager.getLogger(this.getClass().getName());

	//==================Excel导出新增=================结束=======add by Pomelo(柚子.)
	/**
     * 导出到Excel文件的输出流
     */
    protected InputStream inputStream;
    
    public InputStream getInputStream() {
		return inputStream;
	}

	/**
     * excel模板文件的路径
     */
    protected String excelTplPath;

	/**
     * excel模板文件名，子类需要设置该值
     */
    protected String excelTplFile = "blank";
	
    public String getExcelTplFile() {
		return excelTplFile;
	}

	/**
     * 默认构造
     * 
     * 初始化Excel文件根目录
     */
    public BaseAction(){
    	this.excelTplPath = this.getHttpServletRequest().getSession().getServletContext().getRealPath("WEB-INF") + File.separator + "excel";
    }
    
    /**
     * 填充excel数据，子类需要重载此方法，实现特定的逻辑
     * 
     * @param wb
     */
    protected void doFillWorkbook(Workbook wb) {
    }
	
    /**
     * 共用的导出excel的action，各子action只需要重载填充的方法即可
     * 
     * @return Action.Success
     */
    @Action(value = "excel", results = @Result(type = "stream", params = { "contentType", "application/vnd.ms-excel",
            "bufferSize", "1024", "contentDisposition", "attachment;filename=${excelTplFile}.xls" }))
    public String excel() {
        Workbook wb = this.getWorkbook();
        this.doFillWorkbook(wb);
        this.setInputStreamFromWorkbook(wb);
        try {
            log.info("导出到Excel，当前模板文件名：" + this.excelTplFile);
            this.excelTplFile = new String(this.excelTplFile.getBytes(), "ISO-8859-1");
        } catch (UnsupportedEncodingException e) {
            log.error("导出到Excel时出现异常,模板文件:"+excelTplFile+".xls", e);
        }
        return SUCCESS;
    }
    
    /**
     * 根据模板文件名获取workbook实例
     * 
     * @return 可以实际操作的workbook实例对象
     */
    protected Workbook getWorkbook() {
        Workbook wb = null;
        try {
            InputStream is = new FileInputStream(this.excelTplPath + File.separator + this.excelTplFile + ".xls");
            wb = new HSSFWorkbook(is);
        } catch (IOException e) {
            e.printStackTrace(); 
        }
        return wb;
    }
    
    /**
     * 生成临时文件
     * 并将文件输入流赋值到inputStream变量
     * 
     * @param wb 已经过填充的workbook对象
     */
    protected void setInputStreamFromWorkbook(Workbook wb) {
        File file = null;
        try {
            file = File.createTempFile("enterprise_", ".xls");
            // 报表写入临时文件中
            FileOutputStream fos = new FileOutputStream(file);
            wb.write(fos);
            fos.close();
            this.inputStream = new FileInputStream(file);
        } catch (IOException e) {
            log.error("生成临时文件异常!");
        }
    }
    /**
     * 设置模板文件路径子类在调用前需要设置此方法
     * 
     * @param excelTplPath
     */
    public void setExcelTplPath(String excelTplPath) {
		this.excelTplPath = excelTplPath;
	}
    //==================Excel导出新增=================结束=======add by Pomelo(柚子.)
	/**
	 * 获得当前HttpServletRequest
	 */
	protected HttpServletRequest getHttpServletRequest()
	{
		return Struts2Utils.getRequest();
	}

	/**
	 * 获得 HttpServletResponse
	 */
	protected HttpServletResponse getHttpServletResponse()
	{
		return Struts2Utils.getResponse();
	}

	/**
	 * 获取输出流
	 * @return
	 */
	protected PrintWriter getPrintWriter()
	{
		return Struts2Utils.getWriter();
	}
	
	
	/**
	 * 根据指定的页面参数名称，获取页面传递来的参数值
	 * 
	 * @param parameter
	 * @return 单个对象
	 */
	protected String getParameter(String name)
	{
		return Struts2Utils.getParameter(name);
	}

	
	/**
	 * 根据指定的页面参数名称，获取页面传递来的参数值
	 * @param parameter
	 * @return 数组对象
	 */
	protected String [] getParameterValues(String name)
	{
		return  Struts2Utils.getParameterValues(name);
	}

	
	/**
	 * 获取页面请求参数，并封装成Map(不适用参数是数组)
	 * @return
	 */
	 @SuppressWarnings("unchecked")
	protected Map<String, Object> getParameterMap()
	{
	 
	
	 Map<String, Object> map = this.getHttpServletRequest().getParameterMap();
		
	 Map<String, Object> paramsMap = new HashMap<String, Object>(map.size());
	 
		for(Entry<String, Object> entry : map.entrySet() )
		{
		 String [] values  = (String[]) entry.getValue();
		 paramsMap.put(entry.getKey(), values[0]);
		}
		
	 return paramsMap;
	}
	
	
	 
	 /**
	  * 获取FlexGrid 控件的请求参数 
	  * @return
	  */
	 protected String getGridParams()
	 {
		return this.getParameter("paramsGrid");
	 }
	
	
	
	/**
	 * 向request对象添加attribute
	 * @param key
	 * @param value
	 */
	protected void setRequestAttribute(String key, Object value)
	{
		Struts2Utils.setRequestAttribute(key, value);
	}

	/**
	 * 从Request 的Attribute值
	 * @param key
	 * @return
	 */
	protected Object getRequestAttribut(String key)
	{
		return Struts2Utils.getRequestAttribute(key);
	}
	/**
	 * 从session中取得相应的值
	 * @param key
	 */
	protected Object getSessionObj(String key)
	{
		return Struts2Utils.getSessionAttribute(key);
	}

	protected void setSessionArrtibute(String key, Object value)
	{
		Struts2Utils.setSessionArrtibute(key, value);
	}

	
	/**
	 * 直接输出文本消息
	 * 
	 * @param msgStr
	 *            文本字符串
	 */
	protected void renderText(String text)
	{
		Struts2Utils.renderText(text);
	}

	/**
	 * 直接输出纯HTML
	 * 
	 * @param msgStr
	 *            html字符串
	 */
	protected void renderHTML(String html)
	{
		Struts2Utils.renderHtml(html);
	}

	/**
	 * 输出Json字符串
	 * @param json
	 */
	protected void renderJSON(String json)
	{
		Struts2Utils.renderJson(json);
	}
	
	/**
	 * 直接输出JSON,使用Jackson转换Java对象.
	 * @param data 可以是List<POJO>, POJO[], POJO, 也可以Map名值对.
	 */
	protected void renderJSON(Object data)
	{
		Struts2Utils.renderJson(data);
	}
	
	
	/**
	 * 直接输出纯XML
	 * @param xml   xml字符串
	 */
	protected void renderXML(String xml)
	{
		Struts2Utils.renderXml(xml);
	}
	
	/**
	 * 获取cookie
	 * @param key
	 * @return
	 */
	public Cookie getCookie(String key)
	{
		Cookie cookie = null;
		Cookie[] cookies = this.getHttpServletRequest().getCookies();
		if(null == cookies) return null;
		for(Cookie c:cookies)
		{
			if((c.getName()).equals(key))
			{
				cookie = c;
				break;
			}
		}
		return cookie;
	}
	
	/**
	 * 导出列表数据到EXCEL表格
	 * @param fileName 导出的EXCEL表格文件名
	 * @param titleArray 表头标题数组
	 * @param columnArray 列表数据每条记录Map的Key,columnArray与titleArray的顺序要对应
	 * @param rows 列表数据
	 */
	@SuppressWarnings("deprecation")
	public void exportExl(String fileName, String[] titleArray, String[] columnArray,List<Map<String,Object>> rows,int...args) {
		
		HttpServletResponse response = ServletActionContext.getResponse();
		OutputStream outputStream = null;
		int picWidth=0;
		int picHeight=0;
		
		try {
			if (args.length>0)
			{
				picWidth=args[0];
				picHeight=args[1];
			}
			
			outputStream = response.getOutputStream();// 取得输出流
			response.reset();// 清空输出流
			response.setHeader("Content-disposition", "attachment; filename=" + fileName + ".xls");// 设定输出文件头
			response.setContentType("application/msexcel");// 定义输出类型
			response.setCharacterEncoding("utf-8");
			
			HSSFWorkbook wb = new HSSFWorkbook();
			int curRowCnt=0;
			
			HSSFSheet sheet = wb.createSheet(fileName);//生成工作表
			HSSFCellStyle cellStyle = wb.createCellStyle();//生成单元格样式
			cellStyle.setAlignment(HSSFCellStyle.ALIGN_CENTER);//设置单元格居中
			

			for(int u=0;u<=titleArray.length;u++){
				
//				sheet.setDefaultColumnWidth((short) 200);
				sheet.setDefaultColumnStyle((short)u, cellStyle);
				sheet.autoSizeColumn((short)0); //调整宽度
			}
			
			HSSFRow row = null;
			
			//生成表头
			row = sheet.createRow((short) curRowCnt);
			for (int q = 0; q < titleArray.length; q++) {
				row.createCell((short) q).setCellValue(new HSSFRichTextString(titleArray[q]));
				if (titleArray[q]=="图片")
				{
					sheet.setColumnWidth((short)q,  (short) (35.7*picWidth));//设置宽度
				}
			}
			curRowCnt++;
			
			 HSSFPatriarch patriarch = sheet.createDrawingPatriarch();

			
			//生成数据行
			if(rows != null && rows.size()>0){
				for(int i = 0 ; i < rows.size(); i++){
					Map<String,Object> map = rows.get(i);
					row = sheet.createRow((short) curRowCnt);
						
					for(int j = 0 ; j<columnArray.length; j++){
						//判断是否插入图片
						if (columnArray[j]=="picture")
						{
							if (map.get(columnArray[j]) == null) continue;
							row.setHeight((short) (15.625*picHeight)); //设置高度
							HSSFClientAnchor anchor = new HSSFClientAnchor(0,0,1023,255,(short) j,curRowCnt,(short)j,curRowCnt);
							anchor.setAnchorType(2);
							patriarch.createPicture(anchor , wb.addPicture((byte[])map.get(columnArray[j]),HSSFWorkbook.PICTURE_TYPE_JPEG));
							continue;
						}
						String text = map.get(columnArray[j]) == null ? "" : String.valueOf(map.get(columnArray[j]));
						row.createCell((short) j).setCellValue(text);
					}
					curRowCnt++;
				}
			}
			
			wb.write(outputStream);
			
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			if (outputStream != null) {
				try {
					outputStream.close();
				} catch (IOException e) {
					e.printStackTrace();
				}
			}
		}
		
	}
	
	/**
	 * 导出数据时的参数组装
	 * @param params
	 * @return
	 */
	public Map<String,Object> getExportParams (Map<String,Object> params){
		// 导出数据时的开始页数
		String fromPage = getParameter("frompage");
		fromPage = fromPage == null ? "1" : fromPage;
		// 导出数据时的结束页数
		String toPage = getParameter("topage");
		toPage = toPage == null ? "1" : toPage;
		
		String picWidth=getParameter("picWidth");
		picWidth=picWidth==null ? "0":picWidth;
		
		String picHeight=getParameter("picHeight");
		picHeight=picHeight==null ? "0":picHeight;
		
		//查询数据开始行数和结束行数
		String pageSize = String.valueOf((Integer)params.get(ParamKey.PAGE_SIZE));
		pageSize = pageSize == null ? "10" : pageSize;
		
		Integer fromRow = RowNumUtil.getFromRowNum(fromPage, pageSize);
		Integer toRow = RowNumUtil.getToRowNum(toPage, pageSize);
		params.put("fromRow", fromRow);
		params.put("toRow", toRow);
		params.put("picWidth", Integer.parseInt(picWidth));
		params.put("picHeight", Integer.parseInt(picHeight));
		
		return params;
	}
	
	/**
	 * 得到完整id
	 * @param id
	 * @return
	 */
	public String getFullId(String id){
		String fullIdStr = id;
		if(fullIdStr.equals("")||fullIdStr==""){return fullIdStr;}
		if(fullIdStr.length()!=8){
			for (int i =fullIdStr.length(); i < 8; i++) {
				fullIdStr="0"+fullIdStr;
			}
		}
		return fullIdStr;
	}
	
	
	
}
