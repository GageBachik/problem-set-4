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