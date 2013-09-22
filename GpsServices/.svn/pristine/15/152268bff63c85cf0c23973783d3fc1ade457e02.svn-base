package com.etrans.common.db;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.Map;

import com.etrans.common.db.c3p0.DefaultJdbcPooling;

/** 
 * jdbc数据操作基类
 * 
 * @author Pomelo(柚子.)  
 * @version 1.0
 * @since 创建时间：2013-7-17 下午4:30:52 
 */
public class DaoSuper implements DAO {

	/**
	 * 连接是否自动管理
	 */
	private boolean conIsAuto = true;
	
	/**
	 * 数据库连接
	 */
	private Connection con = null;
	
	/**
	 * 会话
	 */
	private Statement statement = null;
	
	/**
	 * 预编译会话
	 */
	private PreparedStatement preparedStatement;
	
	/**
	 * 获取连接是否自动
	 * 
	 * @return conIsAuto boolean
	 */
	public boolean isConIsAuto() {
		return conIsAuto;
	}
	
	/**
	 * 设置连接是否自动
	 * 
	 * @return conIsAuto boolean
	 */
	public void setConIsAuto(boolean conIsAuto) {
		this.conIsAuto = conIsAuto;
	}

	@Override
	public ArrayList<Object> queryAllData(String sql) {
		return null;
	}

	/**
	 * 执行sql
	 * 
	 * @param sql String
	 * @throws SQLException
	 */
	@Override
	public boolean execute(String sql) throws SQLException {
		if(con.isClosed())con = DefaultJdbcPooling.getConnection();
		statement = con.createStatement();
		boolean flag = statement.execute(sql);
		if(conIsAuto)closeCon();
		return flag;
	}
	
	/**
	 * 预编译更新
	 * @param sql
	 * @param valueKey
	 * @param value
	 * @return
	 * @throws SQLException
	 */
	public int executePreUpdate(String sql,String[] valueKey,Map<String,Object> value) throws SQLException{
		int affectRow=-1;
		try {
			con = DefaultJdbcPooling.getConnection();
			preparedStatement = con.prepareStatement(sql);
			for(int i=0;i<valueKey.length;i++){
				preparedStatement.setObject(i+1, value.get(valueKey[i]));
			}
			affectRow = preparedStatement.executeUpdate();
		} catch (Exception e) {
			throw new SQLException("异常"+e.getMessage());
		}finally{
			con.close();
			preparedStatement.close();
		}
		return affectRow;
	}
	
	/**
	 * 执行数据库更新操作
	 * 
	 * @param sql String
	 * @throws SQLException
	 */
	@Override
	public int execueUpdate(String sql) throws SQLException {
		con = DefaultJdbcPooling.getConnection();
		statement = con.createStatement();
		int effectRow = statement.executeUpdate(sql);
		closeCon();
		return effectRow;
	}
	
	/**
	 * 关闭当前连接
	 * 
	 * @throws SQLException
	 */
	public void closeCon() throws SQLException{
		if(con!=null && !con.isClosed()){
			DefaultJdbcPooling.closeConnection(con);
			statement.close();
		}
	}

}

