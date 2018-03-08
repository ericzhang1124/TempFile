// 该方法用来将数字按照保留两位小数处理，若小数点后第三位数字不为0则向上进1
// number Number类型
function cal2(number){			
	var strNum = number.toString();
	
	// 若没有小数点则直接返回入参的值
	if(strNum.indexOf(".") == -1){
		return number;
	}
	
	var numArray = strNum.split(".");
	// 若小数点后第三位没有值则直接返回入参的值
	if(numArray[1][2] === undefined){
		return number;
	}
	
	// 若第三位有值则判断是不是0， 若是0则直接将整数部分和小数后两位拼接转数字即可
	if(numArray[1][2] === "0"){
		return parseFloat(numArray[0] + "." + numArray[1][0] + numArray[1][1]);
	}
	
	// 若第三位不是0 则加 0.01 返回
	if(numArray[1][2] != "0"){	
		var resNumber = (Math.round(parseFloat(numArray[0] + "." + numArray[1][0] + numArray[1][1]) * 100) + 1) / 100;
	
		// 因为JS中+0.01可能会导致小数点后边出现多位数，需要做下特殊的截取处理
		var strResNumber = resNumber.toString();
		
		if(strResNumber.indexOf(".") == -1){
			return parseFloat(strResNumber);
		}
		
		var resNumArray = strResNumber.split(".");
		if(resNumArray[1][2] === undefined){
			return parseFloat(strResNumber);
		}		
		return parseFloat(resNumArray[0] + "." + resNumArray[1][0] + resNumArray[1][1]);
	}		
}	
