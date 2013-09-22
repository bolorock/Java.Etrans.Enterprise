package com.etrans.common.db.c3p0;

import java.sql.Connection;
import java.sql.SQLException;
import javax.sql.DataSource;
import com.mchange.v2.c3p0.ComboPooledDataSource;

/** 
 * 默认的单数据库连接池提供类
 * 
 * @author Pomelo(柚子.)  
 * @version 1.0
 * @since 创建时间：2013-7-17 下午4:30:52 
 */
public class DefaultJdbcPooling{
	
	/**
	 * 数据源
	 */
	public final static DataSource datasource;
	
	/**
	 * 初始化数据源
	 */
	static{
		datasource = new ComboPooledDataSource();
	}
	
	
	/**
	 * 从连接池获取数据库连接
	 * 
	 * @return Connection 数据库连接
	 */
	public static Connection getConnection() throws SQLException{
		return datasource.getConnection();
	}
	
	/**
	 * 释放当前连接
	 * 
	 * @param con Connection
	 * @throws SQLException
	 */
	public static void closeConnection(Connection con) throws SQLException {
		con.close();
	}
}

