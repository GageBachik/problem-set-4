var addNumber = function(str){
	var chars = str.split('');
	var numStr = '';
	var addEmUp = [];
	chars.map(function(aChar, index){
		if (aChar.charCodeAt(0) > 47 && aChar.charCodeAt(0) < 58) {
			if (index === chars.length-1) {
				numStr += aChar;
				addEmUp.push(numStr);
			}else{
				numStr += aChar;	
			}
		}else{
			addEmUp.push(numStr);
			numStr = '';
		}
	});

	var finalValue = 0;
	console.log(addEmUp);
	addEmUp.map(function(value){
		if (value) {
			finalValue += parseInt(value);
		}
	});
	return finalValue;
};