package com.etrans.common.db;

import java.sql.SQLException;
import java.util.ArrayList;

/** 
 * 数据库操作
 * 
 * @author Pomelo(柚子.)  
 * @version 1.0
 * @since 创建时间：2013-7-17 下午4:30:52 
 */
public interface DAO {
	
	/**
	 * 按给定sql查询结果集
	 * 
	 * @param sql
	 * @return 
	 * @throws SQLException 
	 */
	public ArrayList<Object> queryAllData(String sql) throws SQLException;
	
	/**
	 * 更新操作
	 * 
	 * @param sql
	 * @return
	 * @throws SQLException
	 */
	public int execueUpdate(String sql)throws SQLException;
	
	/**
	 * 插入数据
	 * 
	 * @param sql
	 * @return
	 * @throws SQLException 
	 */
	public boolean execute(String sql) throws SQLException;
}

