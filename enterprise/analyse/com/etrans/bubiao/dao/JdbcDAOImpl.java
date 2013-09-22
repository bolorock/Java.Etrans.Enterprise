package com.etrans.bubiao.dao;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.datasource.DataSourceTransactionManager;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.TransactionDefinition;
import org.springframework.transaction.TransactionStatus;
import org.springframework.transaction.support.DefaultTransactionDefinition;

/**
 * 描述：    SpringJDBC操作数据库DAO类
 * @author         lihaiyan
 * @since         Create on 2012-2-9
 * @version       Copyright (c) 2012 by e_trans. 
 */

@Repository("jdbcDao")
public class JdbcDAOImpl implements JdbcDAO{
	private DataSourceTransactionManager transactionManager; 
	private DefaultTransactionDefinition def;

	private JdbcTemplate jdbcTemplate;
    
	@Autowired
	public void setDataSource(DataSource dataSource) {
		this.jdbcTemplate = new JdbcTemplate(dataSource);
		this.transactionManager =  new DataSourceTransactionManager(dataSource);
		this.def = new DefaultTransactionDefinition();  
		this.def.setPropagationBehavior(TransactionDefinition.PROPAGATION_REQUIRED);
	}
	
	public JdbcTemplate getJdbcTemplate() {
		return jdbcTemplate;
	}
	
	/**
	 * 批量插入单表
	 */
	public void batchUpdate(String[] sql) throws Exception{
		TransactionStatus status =  transactionManager.getTransaction(def);  
		try{  
			jdbcTemplate.batchUpdate(sql);  
			// 下面的SQL有错误，用以测试事务   
//			jdbcTemplate.update("INSER INTO user (name,age) "  + "VALUES(')");  
		}catch(DataAccessException e) {  
			transactionManager.rollback(status);  
			throw e; 
		}
	    transactionManager.commit(status); 
	}
}
