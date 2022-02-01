(function () {
	'use strict';
	// this function is strict...
}());

let str = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla, soluta saepe.';

function isString(str) {
	if (typeof str === 'string') {
		str = str.trim();
		return str.length > 30 ? str.slice(0, 30) + '...' :
			str;
	} else {
		alert('Это не строка');
	}
}

console.log(isString(str));