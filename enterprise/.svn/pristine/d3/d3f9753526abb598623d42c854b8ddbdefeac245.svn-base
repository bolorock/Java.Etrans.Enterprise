package com.etrans.bubiao.action;

import org.apache.struts2.convention.annotation.Action;
import org.apache.struts2.convention.annotation.Namespace;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;

import com.etrans.bubiao.auth.AuthManager;
import com.etrans.bubiao.sys.UserContext;

/**
 * @author llq
 * @version 1.0
 * @brief
 */

@Controller
@Scope("prototype")
@Namespace("/auth")
public class AuthAction extends BaseAction {
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	private String operation;
	
	 /**
	  * 权限验证
	  * @param user 当前登录用户
	  * @param operation 访问操作码
	  * @return
	  */
	@Action(value="auth")
	 public void security() throws Exception
	 {
		StringBuffer result = new StringBuffer("");
		
		String[] operationArr = null; 
		if(operation!=null){
			operationArr = operation.split(",");
			for(int i=0;i<operationArr.length ; i++){
				if(AuthManager.auth(UserContext.getLoginUser(), operationArr[i])){
					result.append("|").append(operationArr[i]).append("|");
				}
			}
		}
		
		this.renderJSON(result);
	 }

	public String getOperation() {
		return operation;
	}

	public void setOperation(String operation) {
		this.operation = operation;
	}
	
}
