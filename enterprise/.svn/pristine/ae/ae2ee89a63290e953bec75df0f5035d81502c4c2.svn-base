<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
%>
<html>
	<head>
		<base href="<%=basePath%>"></base>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		<title>指令发送</title>
			<link href="<%=basePath%>css/command.css" type="text/css" rel="stylesheet" />
	        <script type="text/javascript" src="<%=basePath%>js/jq/jquery-1.7.1.min.js"></script>
		<script type="text/javascript" src="<%=basePath%>js/jq/jquery.Query.js"></script>
		<script src="<%=basePath%>js/command/special/506.js" type="text/javascript"></script>
	</head>

	<body>
      <br/>
	 <table width="100%" cellpadding="0" cellspacing="0" border="0">
			<tr><td height="20">&nbsp;</td></tr>
			<tr>
			  <td width="100%" align="center">
				   <fieldset style="border-Color:#80CAEA;width: 98%;"><legend>设置终端参数：指令参数</legend>
				  		<table width="100%" cellpadding="0" cellspacing="1">
				            
				            <tr>
				              <td width="3">&nbsp;</td>
				              <td width="920"><table width="100%" border="0" cellspacing="0" cellpadding="0">
								<tr>
				                  <td nowrap="nowrap" align="right"><span>参数列表：</span></td>
				                  <td>
				                  		 <select id="terminalParams" onchange="changeTerminalParams()">

					                    	  <option value="0x0001"   type="0" typeValue="" patrn='^[0-9]*[1-9][0-9]*$' unit="秒" error="请输入数字类型">终端心跳发送间隔</option>
					                    	  <option value="0x0002"   type="0" typeValue="" patrn="^[0-9]*[1-9][0-9]*$" unit="秒" error="请输入数字类型">TCP消息应答超时时间</option>
					                    	  <option value="0x0003"   type="0" typeValue="" patrn="^[0-9]*[1-9][0-9]*$" unit=""   error="请输入数字类型">TCP消息重传次数</option>
					                    	  <option value="0x0004"   type="0" typeValue="" patrn="^[0-9]*[1-9][0-9]*$" unit="秒" error="请输入数字类型">UDP消息应答超时时间</option>
					                    	  <option value="0x0005"   type="0" typeValue="" patrn="^[0-9]*[1-9][0-9]*$" unit=""   error="请输入数字类型">UDP消息重传次数</option>
					                    	  <option value="0x0006"   type="0" typeValue="" patrn="^[0-9]*[1-9][0-9]*$" unit="秒" error="请输入数字类型">SMS消息应答超时时间</option>
					                    	  <option value="0x0007"   type="0" typeValue="" patrn="^[0-9]*[1-9][0-9]*$" unit=""   error="请输入数字类型">SMS消息重传次数</option>
					                    	  
					                    	  <option value="0x0010"  type="0" typeValue="" patrn="" unit="">主服务器APN，无线通信拨号访问点</option>
					                    	  <option value="0x0011"  type="0" typeValue="" patrn="" unit="">主服务器无线通信拨号密码</option>
					                    	  <option value="0x0012"  type="0" typeValue="" patrn="" unit="">主服务器无线通信拨号密码</option>
					                    	  <option value="0x0013"  type="0" typeValue="" patrn="" unit="">主服务器地址,IP或域名</option>
					                    	  <option value="0x0014"  type="0" typeValue="" patrn="" unit="">备份服务器APN，无线通信拨号访问点</option>
					                    	  <option value="0x0015"  type="0" typeValue="" patrn="" unit="">备份服务器无线通信拨号用户名</option> 
					                    	  <option value="0x0016"  type="0" typeValue="" patrn="" unit="">备份服务器无线通信拨号密码</option>
					                    	  <option value="0x0017"  type="0" typeValue="" patrn="" unit="">备份服务器地址,IP或域名</option>
					                    	  <option value="0x0018"  type="0" typeValue="" patrn="^[0-9]*[1-9][0-9]*$" unit="" error="请输入数字类型">服务器TCP端口</option>
					                    	  <option value="0x0019"  type="0" typeValue="" patrn="^[0-9]*[1-9][0-9]*$" unit="" error="请输入数字类型">服务器UDP端口</option>
					                    	  
					                    	  <option value="0x0020"  type="1" typeValue="0,定时汇报;1,定距汇报;2,定时和定距汇报" patrn="" unit="" error="">位置汇报策略</option>
					                    	  <option value="0x0021"  type="1" typeValue="0,根据ACC状态;1,根据登录状态和ACC状态" patrn="" unit="" error="">位置汇报方案</option>
					                    	  <option value="0x0022"  type="0" typeValue="^[0-9]*[1-9][0-9]*$" patrn="^[0-9]*[1-9][0-9]*$" unit="秒" error="请输入数字类型">驾驶员未登录汇报时间间隔</option>
					                    	  <option value="0x0027"  type="0" typeValue="^[0-9]*[1-9][0-9]*$" patrn="^[0-9]*[1-9][0-9]*$" unit="秒" error="请输入数字类型">休眠时汇报时间间隔</option>
					                    	  <option value="0x0028"  type="0" typeValue="^[0-9]*[1-9][0-9]*$" patrn="^[0-9]*[1-9][0-9]*$" unit="秒" error="请输入数字类型">紧急报警时汇报时间间隔</option>
					                    	  <option value="0x0029"  type="0" typeValue="^[0-9]*[1-9][0-9]*$" patrn="^[0-9]*[1-9][0-9]*$" unit="秒" error="请输入数字类型">缺省时间汇报间隔</option>
					                    	  <option value="0x002C"  type="0" typeValue="^[0-9]*[1-9][0-9]*$" patrn="^[0-9]*[1-9][0-9]*$" unit="米" error="请输入数字类型">缺省距离汇报间隔</option> 
					                    	  <option value="0x002D"  type="0" typeValue="^[0-9]*[1-9][0-9]*$" patrn="^[0-9]*[1-9][0-9]*$" unit="米" error="请输入数字类型">驾驶员未登录汇报距离间隔</option>
					                    	  <option value="0x002E"  type="0" typeValue="^[0-9]*[1-9][0-9]*$" patrn="^[0-9]*[1-9][0-9]*$" unit="米" error="请输入数字类型">休眠时汇报距离间隔</option>
					                    	  <option value="0x002F"  type="0" typeValue="^[0-9]*[1-9][0-9]*$" patrn="^[0-9]*[1-9][0-9]*$" unit="米" error="请输入数字类型">紧急报警时汇报距离间隔</option>
					                    	  <option value="0x0030"  type="0" typeValue="^[0-9]*[1-9][0-9]*$" patrn="^[0-9]*[1-9][0-9]*$" unit="度" error="请输入数字类型">拐点补传角度，小于180</option>
					                    	  <option value="0x0040"  type="0" typeValue="" patrn="^[0-9]*[1-9][0-9]*$" unit="" error="请输入数字类型">监控平台电话号码</option>
					                    	  <option value="0x0041"  type="0" typeValue="" patrn="^[0-9]*[1-9][0-9]*$" unit="" error="请输入数字类型">复位电话号码</option>
					                    	  <option value="0x0042"  type="0" typeValue="" patrn="^[0-9]*[1-9][0-9]*$" unit="" error="请输入数字类型"> 恢复出厂设置电话号码</option>
					                    	  <option value="0x0043"  type="0" typeValue="" patrn="^[0-9]*[1-9][0-9]*$" unit="" error="请输入数字类型">监控平台SMS电话号码</option>
					                    	  <option value="0x0044"  type="0" typeValue="" patrn="^[0-9]*[1-9][0-9]*$" unit="" error="请输入数字类型">接收终端SMS文本报警号码</option>
					                    	  <option value="0x0045"  type="1" typeValue="0,自动接听;1,ACC ON时自动接听,OFF时手动接听" patrn="" unit="">终端电话接听策略</option>
					                    	  <option value="0x0046"  type="0" typeValue="" patrn="^[0-9]*[1-9][0-9]*$" unit="秒" error="请输入数字类型">每次最长通话时间</option>
					                    	  <option value="0x0047"  type="0" typeValue="" patrn="^[0-9]*[1-9][0-9]*$" unit="秒" error="请输入数字类型">当月最长通话时间</option>
					                    	  <option value="0x0048"  type="0" typeValue="" patrn="^[0-9]*[1-9][0-9]*$" unit="" error="请输入数字类型">监听电话号码</option>
					                    	  <option value="0x0049"  type="0" typeValue="" patrn="^[0-9]*[1-9][0-9]*$" unit="" error="请输入数字类型">监管平台特权短信号码</option>
					                    	  <option value="0x0050"  type="0" typeValue="" patrn="^[0-9]*[1-9][0-9]*$" unit="" error="请输入数字类型">报警屏蔽字</option>
					                    	  <option value="0x0051"  type="0" typeValue="" patrn="^[0-9]*[1-9][0-9]*$" unit="" error="请输入数字类型">报警发送文本SMS开关</option>
					                    	  <option value="0x0052"  type="0" typeValue="" patrn="^[0-9]*[1-9][0-9]*$" unit="" error="请输入数字类型">报警拍摄开关</option>
					                    	  <option value="0x0053"  type="0" typeValue="" patrn="^[0-9]*[1-9][0-9]*$" unit="" error="请输入数字类型">报警拍摄存储标志</option>
					                    	  <option value="0x0054"  type="0" typeValue="" patrn="^[0-9]*[1-9][0-9]*$" unit="" error="请输入数字类型">关键标志</option>
					                    	  <option value="0x0055"  type="0" typeValue="" patrn="^[0-9]*[1-9][0-9]*$" unit="km/h" error="请输入数字类型">最高速度</option>
					                    	  <option value="0x0056"  type="0" typeValue="" patrn="^[0-9]*[1-9][0-9]*$" unit="秒" error="请输入数字类型">超速持续时间</option>
					                    	  <option value="0x0057"  type="0" typeValue="" patrn="^[0-9]*[1-9][0-9]*$" unit="秒" error="请输入数字类型">连续驾驶时间门限</option>
					                    	  <option value="0x0058"  type="0" typeValue="" patrn="^[0-9]*[1-9][0-9]*$" unit="秒" error="请输入数字类型">当天累计驾驶时间门限</option>
					                    	  <option value="0x0059"  type="0" typeValue="" patrn="^[0-9]*[1-9][0-9]*$" unit="秒" error="请输入数字类型">最小休息时间</option>
					                    	  <option value="0x005A"  type="0" typeValue="" patrn="^[0-9]*[1-9][0-9]*$" unit="秒" error="请输入数字类型">最长停车时间</option>
					                    	  <option value="0x0070" type="0" typeValue="" patrn="^[0-9]*[1-9][0-9]*$" unit="(1～10)" error="请输入数字类型">图像/视频质量</option>
					                    	  <option value="0x0071" type="0" typeValue="" patrn="^[0-9]*[1-9][0-9]*$" unit="(0～255)" error="请输入数字类型">亮度</option>
					                    	  <option value="0x0072" type="0" typeValue="" patrn="^[0-9]*[1-9][0-9]*$" unit="(0～127)" error="请输入数字类型">对比度</option>
					                    	  <option value="0x0073" type="0" typeValue="" patrn="^[0-9]*[1-9][0-9]*$" unit="(0～127)" error="请输入数字类型">饱和度</option>
					                    	  <option value="0x0074" type="0" typeValue="" patrn="^[0-9]*[1-9][0-9]*$" unit="(0～255)" error="请输入数字类型">	色度</option>
					                    	  <option value="0x0080" type="0" typeValue="" patrn="^[0-9]*[1-9][0-9]*$" unit="1/10km" error="请输入数字类型">车辆里程表读数</option>
					                    	  <option value="0x0081" type="0" typeValue="" patrn="^[0-9]*[1-9][0-9]*$" unit="(1～255)" error="请输入数字类型">车辆所在的省域ID</option>
					                    	  <option value="0x0082" type="0" typeValue="" patrn="^[0-9]*[1-9][0-9]*$" unit="(1～255)" error="请输入数字类型">车辆所在的市域ID</option>
					                    	  <option value="0x0083" type="0" typeValue="" patrn="" unit="" error="请输入数字类型">公安交通同管理部门颁发的机动车号牌</option>
					                    	  <option value="0x0084" type="0" typeValue="" patrn="" unit="" error="请输入数字类型">车牌颜色</option>
                    	 				</select>							  
                    	  		</td>
                    	  	</tr>
                    	    <tr>
                   <td width="390px" align="right"><span id="paramsName">终端心跳发送间隔：</span></td>
                   <td nowrap="nowrap" id="elementTd"><input id="paramsValue" size="36"/></td>
                   <td width="80px" align="left" id="unit">秒</td>
                   <td  width="360px"><a href="javascript:void(0)" onClick="addParams();"><img src="imgs/addToList.gif"  border="0"></a><span style="color: red;">*发送前需添加到列表</span></td>
                   <td>&nbsp;</td>
                  </tr>
				              </table></td>
				              <td width="3" rowspan="2" background="imgs/commandbg.gif">.</td>
				              <td width="15">&nbsp;</td>
				              <td width="320"><div id="back" class="hiddiv" style="display: none;"><img alt="正在发送指令" src="imgs/load.gif">正在发送指令......</div></td>
				              <td width="200"></td>
				            </tr>
							  <tr>
				              <td>&nbsp;</td>
				              <td>&nbsp;</td>
				              <td>&nbsp;</td>
				              <td>&nbsp;</td>
				              <td colspan="2">&nbsp;</td>
				            </tr>
		          		</table>
				  </fieldset>
			  </td>
			</tr>
		
		 <tr>
		 <td valign="top"><a href="javascript:void(0)" onClick="sendMessage();"><img src="imgs/command.gif"  border="0"></a><a  href="javascript:void(0)" class="ser_btn" onClick="parent.hideSpecial();"><img src="imgs/cancel.gif"  border="0"></a>
	   </td>
		 </tr>
		 	<tr>
	<td>
	<div id="result"></div>
	</td>
		</tr>
		</table>
		  <table width="100%" border="0" cellspacing="0" cellpadding="0" background="#EBF2FA">
          <tr background="#EBF2FA">
                    <td style="border-top:1px solid #1FFFF;">
                     <table id="vechList"  class="form">
			    <thead>
				<tr>
				    <th>参数id</th>
					<th>参数名称	</th>
					<th>参数值</th>
					<th>操作</th>
				</tr>
			</thead>
			</table>
                    </td>
                  </tr>
         </table>
	</body>
</html>