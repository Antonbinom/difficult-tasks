'use strict';

const isNumber = function (num) {
	return !isNaN(parseFloat(num) && isFinite(num));
};

while (!isNumber(num)) {
	var num = prompt('Введите число', '');
	if (num == null) break;
	num = num.trim().split(' ')[0].replace(/[^+\d]/g, '');
}

isNumber();

console.log(num);