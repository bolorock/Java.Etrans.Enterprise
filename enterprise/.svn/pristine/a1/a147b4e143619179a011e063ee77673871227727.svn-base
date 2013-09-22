/**
 * 初始化周（带开始时间和结束时间）
 */
function initWeek2Date(elementId)
{
	var unit = $("#" + elementId).get(0);
	unit.statType = 1;
	
	var currdate =new Date(); 
	historytime.init(new Date(currdate.getFullYear()-2,00,1));
	
	var weeks = historytime.getWeeks2Date();
	for(var j=0 ; j<weeks.length; j++)
	{	
		if(j<12){
			unit.options.add(new Option(weeks[j].text,weeks[j].value));
		}else{
			break;
		}
	}
	historytime.init(new Date(currdate.getFullYear(),00,1));
}


