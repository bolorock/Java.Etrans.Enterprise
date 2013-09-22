<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ include file="/common/validateHead.jsp"%>
<%@taglib prefix="auth" uri="/auth-tags"%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
	<head>
		<title>历史查岗记录报表</title>
		<script type="text/javascript" src="${basePath}js/sys/historyCheckupRecord.js"></script>
	</head>

	<body>
		<div style="width: 100%" id="cont_box">
			<div class="main">
			<div class="mon_cont">
					<div class="E_Tit">
						历史查岗记录
					</div>
					<table border="0" cellspacing="0" cellpadding="0" class="que_tab">
						<tr>
						<!-- 
							<td width="50" align="right">
								流水号:
							</td>
							<td width="150" align="left">
								<input id="CheckingNopram" name="CheckingNopram" type="text"
									class="mon_ser_text" style="width: 130px" maxlength="30" 
									onchange="value=value.replace(/[^0-9a-zA-Z\u4e00-\u9fa5]/g,'')" 
							        onbeforepaste="clipboardData.setData('text',clipboardData.getData('text').replace(/[^0-9a-zA-Z\u4e00-\u9fa5]/g,''))" />
							</td>
							 -->
							<td align="right" width="50">
								标志：
							</td>
							<td align="left">
								<select id="IsResultpram" class="td_sel"  style="width:130px" ></select>
							</td>

							<td width="80">
								<a id="searchBtn" href="javascript:void(0)" class="ser_btn"
									style="color: white;">查询</a>
							</td>
							<td width="60">
								<a href="javascript:void(0)" id="exportBtn" class="ser_btn"
									style="color: white;">导出</a>
							</td>

						</tr>
					</table>

					<div id="editWindow" class="wDiv"
						style="width: 100%; display: block; border: 1px solid #d0d0d0;">
						<table id="historyCheckupRecordList" style="display: none"></table>
					</div>
				</div>
				</div>
			</div>
	</body>
</html>

