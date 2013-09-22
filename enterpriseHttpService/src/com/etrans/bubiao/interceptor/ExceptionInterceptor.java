package com.etrans.bubiao.interceptor;

import java.io.IOException;
import java.sql.SQLException;
import ognl.OgnlException;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionInvocation;
import com.opensymphony.xwork2.ActionSupport;
import com.opensymphony.xwork2.interceptor.AbstractInterceptor;


/**
 * 异常处理拦截器
 * @author Ivan
 *
 */
public class ExceptionInterceptor extends AbstractInterceptor
{

	/**
	 * 
	 */
	private static final long serialVersionUID = -6080096036741334356L;
	protected Logger log = LogManager.getLogger(this.getClass().getName());

	@Override
	public String intercept(ActionInvocation invocation) throws Exception
	{

		String result = "";
		try
		{
			result = invocation.invoke();
		}
		catch (Exception ex)
		{
			ActionContext ctx = ActionContext.getContext();
		    ActionSupport action = (ActionSupport) invocation.getAction();
		    exception(ex,action,ctx);
		    return "error";
		}
		return result;
	}

	private void exception(Exception e, ActionSupport actionSupport, ActionContext ctx) throws Exception
	{
		e.printStackTrace();
			String msg = "";

		/*if (e instanceof DataAccessException)
		{
			msg = "数据库操作失败！";
		}*/
		 if (e instanceof NullPointerException)
		{
			msg = "调用了未经初始化的对象或者是不存在的对象！";
		}
		else if (e instanceof IOException)
		{
			msg = "IO异常！";
		}
		else if (e instanceof ClassNotFoundException)
		{
			msg = "指定的类不存在！";
		}
		else if (e instanceof ArithmeticException)
		{
			msg = "数学运算异常！";
		}
		else if (e instanceof ArrayIndexOutOfBoundsException)
		{
			msg = "数组下标越界！";
		}
		else if (e instanceof IllegalArgumentException)
		{
			msg = "方法的参数错误！";
		}
		else if (e instanceof ClassCastException)
		{
			msg = "类型强制转换错误！";
		}
		else if (e instanceof SecurityException)
		{
			msg = "违背安全原则异常！";
		}
		else if (e instanceof SQLException)
		{
			msg = "操作数据库异常！";
		}
		else if(e instanceof OgnlException)
		{
			msg="参数错误";
		}
		else if (e instanceof Exception)
		{
			msg = "程序内部错误，";
		}
		else if (e instanceof Throwable)
		{
			msg = "Java虚拟机发生了内部错误！";
		}
		else
		{
			msg = "未知错误！";
		}
		String actionname = ctx.getName();
		StringBuffer sb = new StringBuffer();
		sb.append("抱歉!");
		sb.append(msg);
		sb.append("请稍后再试或与管理员联系！");
		actionSupport.addActionError(sb.toString());
		log.error(actionname + ".action : " + e.toString());
	}

}
