<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ include file="/common/validateHead.jsp"%>
<%@taglib prefix="auth"  uri="/auth-tags"  %>
<!--[if IE 8]>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<![endif]--> 
<html>
	<head>
		<base href="<%=basePath%>"></base>

		<title>自动查岗配置</title>
		<script type="text/javascript" src="<%=basePath%>js/datepicker/WdatePicker.js"></script>
		<script type="text/javascript" src="<%=basePath%>js/common/StringUtil.js"></script>
		<script type="text/javascript" src="<%=basePath%>js/sys/platFormCheckConfig/platFormCheckConfigList.js"></script>
		<script type="text/javascript" src="<%=basePath%>js/common/jsjava-2.0.js"></script>
		
	</head>

	<body>
	
		<div style="width: 100%" id="cont_box">
			 <div class="main">
	  	<div class="mon_cont">
			<div class="E_Tit">自动查岗配置</div>
		<div id="editWindow" class="wDiv" style="width:978px;display: none;border: 1px solid #d0d0d0;" >
			<div class="td_title">自动查岗配置信息编辑</div>
		<form id="addForm" method="post" action="">
   <div  style="width: 100%;height:400px;overflow-y:auto;">
    	<table cellpadding="0" cellspacing="0" class="form" id="flatformList" style="margin: 10px;width: 98%;margin-top: 5px">
      		<tr>
       		 <th>
       		 </th>
       		 <th></th>
      		</tr>
		       		
   		 </table>
  
    
   <div class="load">
	 <img alt="" src="imgs/load.gif">
	  正在加载...
	</div>
	<div style="padding: 10px;width: 100%">
	
		<fieldset style="border-Color:#80CAEA;width: 100%;"><legend>平台日查岗参数</legend>
			<table width="50%" cellpadding="0" cellspacing="1">
				<tr >
					<td width="20%">
					  <table width="100%" cellpadding="0" cellspacing="10" align="left">
					  
					  <tr>
					  	<td>
					  		查岗对象
					  		
					  		<select
					  		name="param1" 
							id="param1"		style="width: 100%">
					  		</select>
					  		
					  		
					  		<input type="hidden"
					  		name="param2" 
							id="param2"
							value="000000000000000000000000">
					  		
					  	</td>
					  
					  </tr>
					  
					  <tr>
					  	<td>
					  		<div id="divTree" style="display:none;overflow-y:auto;margin: 5px; ">
					  		  <iframe src="" id="treeframe" name="treeframe"></iframe>
					  		</div>
					  	</td>
					  </tr>
					  
					  
			             <tr>
			              <td>
			              查岗内容
			              	<textarea  rows="" cols="" style="width: 100%;height: 40px"
			              						name="param3"  id="param3" 
			              						formCheck="true" 
								                required="true"  requiredError="查岗内容不能为空！"></textarea>
								      <span id="param3span" class="errorMsg" style="display: none"></span>           
			              </td>
			            </tr>
			           <tr> <td >
				                                             查岗答案：
				                  	 <input name="param7" 
											   id="param7"
											   value=""
											   formCheck="true" 
								         required="true"  requiredError="查岗答案不能为空！"
											 />
											   <span id="param7span" class="errorMsg" style="display: none"></span>    
							</td>
							</tr>	  
			         <tr> <td>查岗时间：
				   <input type="text" name="param8"
	        					       id="param8" class="input"  onFocus="this.blur()" readonly="readonly"  size="20" style="height: 23px;font-size: 12px;"
	        					        formCheck="true" 
								         required="true"  requiredError="查岗时间不能为空！"
	        					       />
	        					       <img onClick="WdatePicker({isShowWeek:true,el:document.getElementById('param8'),dateFmt:'HH:mm:ss'})"
										src="Images/time.jpg" width="20" height="23" style="margin-left:2px;">
										(时:分:秒)
										  <span id="param8span" class="errorMsg" style="display: none"></span>    
				  </td>
							</tr>	
			          </table>
					</td>
					
					
			
				</tr>
				<tr>
					<td colspan="2" align="center">
							<a id="submitBtn" href="javascript:void(0)" class="ser_btn">提交</a>
							<a id="cancelBtn" href="javascript:void(0)" class="ser_btn">取消</a>
							<br/>	<span id="msgDiv"></span>
						</td>
				</tr>
			</table>
			<br/>
			<br/>
			<br/>
	   </fieldset>
	
	</div>
	  </div>
	  </form>
			</div>
				
			<div class="sys_ctr" style="margin-right: 1px;">
            	<ul>
            	<auth:authorize operation="addPlatFormCheckConfig">
                	<li><a id="createBtn" href="javascript:void(0)">新增</a></li>
               </auth:authorize>
               <auth:authorize operation="delPlatFormCheckConfig">
                  <li><a id="deleteBtn" href="javascript:void(0)">删除</a></li>
               </auth:authorize>
                </ul>
            </div>
			
			<table id="platFormCheckConfigList" style="display: none"></table>
		</div>
  </div>
  </div>
	</body>
</html>
