package com.etrans.common.util.excel;

import org.apache.poi.ss.usermodel.CellStyle;
import org.apache.poi.ss.usermodel.DataFormat;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;

import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.math.BigDecimal;
import java.util.HashMap;
import java.util.List;

/** 
 * 导出Excel工具类
 * <p>
 * 支持List<HashMap>,以及List<Bean>的数据导出
 * </>
 * 
 * @author Pomelo(柚子.)  
 * @version 1.0
 * @since 创建时间：2013-4-12 上午10:13:58 
 */
public class ExcelUtil {
	
    /**
     * 将数据写入excel工作簿
     *
     * @param sheet     写入的工作簿的对象
     * @param list      写入的数据
     * @param cols      列名数组，对应对象的字段
     * @param startRow  起始行数，不同于Excel文件，基数为0
     * @param startCell 起始列数，不同于Excel文件，基数为0
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
	public static void writeListToExcel(Sheet sheet, List list, String[] cols, int startRow, int startCell) {
        if (list != null && list.size() > 0) {
            Class myclass = list.get(0).getClass();
            for (Object obj : list) {
                Row row = sheet.createRow(startRow++);
                String value;
                for (int i = 0; i < cols.length; i++) {
                    try {
                        if (cols[i].equalsIgnoreCase("sn")) {
                            row.createCell(startCell + i).setCellValue(i + 1);
                        } else {
                            Method getMethod = myclass.getMethod("get" + cols[i]);
                            Object valueObj = getMethod.invoke(obj, new Object[0]);
                            if (valueObj == null) {
                                continue;
                            }

                            value = String.valueOf(valueObj);// 执行GＥＴ方法，进行取值
                            if (getMethod.getReturnType() == BigDecimal.class) {
                                DataFormat format = sheet.getWorkbook().createDataFormat();
                                CellStyle style = sheet.getWorkbook().createCellStyle();
                                style.setDataFormat(format.getFormat("#,##0.00"));
                                row.createCell(startCell + i).setCellStyle(style);
                                row.getCell(startCell + i).setCellValue((new BigDecimal(value)).doubleValue());
                            } else {
                                row.createCell(startCell + i).setCellValue(value);
                            }
                        }
                    } catch (IllegalAccessException e) {
                        e.printStackTrace();
                    } catch (InvocationTargetException e) {
                        e.printStackTrace();
                    } catch (NoSuchMethodException e) {
                        e.printStackTrace();
                    }
                }
            }
        }
    }

    /**
     * list中存放的为HashMap
     *
     * @param sheet     写入的工作簿的对象
     * @param list      写入的数据
     * @param cols      列名数组，对应对象的字段
     * @param startRow  起始行数，不同于Excel文件，基数为0
     * @param startCell 起始列数，不同于Excel文件，基数为0
     */
    @SuppressWarnings("rawtypes")
	public static void writeHashMapToExcel(Sheet sheet, List list, String[] cols, int startRow, int startCell) {
        if (list != null && list.size() > 0) {
            for (int i = 0; i < list.size(); i++) {
                HashMap map = (HashMap) list.get(i);
                Row row = sheet.createRow(startRow++);
                String value;
                for (int j = 0; j < cols.length; j++) {
                    Object valueObj = map.get(cols[j]);
                    value = String.valueOf(valueObj);         // 执行GＥＴ方法，进行取值
                    if (valueObj == null) {
                        continue;
                    }
                    row.createCell(startCell + j).setCellValue(value);
                }
            }
        }
    }
}
