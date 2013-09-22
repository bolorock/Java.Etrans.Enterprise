<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ include file="/common/validateHead.jsp"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">

<html>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta http-equiv="pragma" content="no-cache">
<meta http-equiv="cache-control" content="no-cache">
<meta http-equiv="expires" content="0">
<head>
<script type="text/javascript"	src="${basePath}js/sys/tree/workUnitParamTree.js"></script>	

<style type="text/css">
	.load{width: 100px; height: 16px; position: absolute; left: 20px; top: 80px  }
</style>
</head>

<body style="background-color: #fff;overflow: hidden">
  <input type="text" id="serchInput"  disabled="true" style="width:100%;height:10%;" >
  <label id="result" style="width:100%;height:10%; background: yellow;margin-bottom: 10px">共有0搜索结果</label>
  <%--<div id="result" style="border:1px gray solid ;width:99%;height:20%;OVERFLOW-Y: auto; OVERFLOW-X: hidden;vertical-align: top;">
      		
  </div>
 --%><div style="text-align: left; width:100%;height:75%;OVERFLOW-Y: auto; OVERFLOW-X: hidden" id="workUnitTree"></div>
</body>
</html>