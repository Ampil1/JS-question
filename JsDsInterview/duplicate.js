function uniqueOrNah(someString){
	var newObj = {};
	for(var i = 0; i < someString.length; i++){
		var curStr = someString[i];
		if(newObj[curStr] == null) {
			newObj[curStr] = 1;
		} else {
			console.log('Duplicate found',curStr)
			return;
		}
	}
	console.log('No duplicates')
}

uniqueOrNah('ampilvermakumar')