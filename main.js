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

var longestWord = function(str){
	var words = str.split(' ');
	var sorted = words.sort(function(a, b){
		if (a.length > b.length) {return -1};
		if (a.length < b.length) {return 1};
		return -0;
	});
	return sorted.shift();
};

var averageStringNumbers = function(str){
	var chars = str.toUpperCase().split('');
	var numStr = '';
	var charString = '';
	var addEmUp = [];
	chars.map(function(aChar, index){
		if (aChar.charCodeAt(0) > 47 && aChar.charCodeAt(0) < 58) {
			if (index === chars.length-1) {
				numStr += aChar;
				addEmUp.push(numStr);
			}else{
				numStr += aChar;	
			}
		}else if(aChar.charCodeAt(0) > 57 && aChar.charCodeAt(0) < 90){
			charString += aChar;
			addEmUp.push(numStr);
			numStr = '';
		}else{
			addEmUp.push(numStr);
			numStr = '';
		}
	});

	var finalValue = 0;
	addEmUp.map(function(value){
		if (value) {
			finalValue += parseInt(value);
		}
	});
	return Math.round(finalValue / charString.length);
};