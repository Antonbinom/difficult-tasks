'use strict';

let number;

const isNumber = function (num) {
	return !isNaN(parseFloat(num) && isFinite(num));
};

const request = function () {
	do {
		number = prompt('Введите число', '123');
	} while (!isNumber(number));
	return number;
};

isNumber();
request();

console.log(number.trim().split(' ')[0].replace(/[^+\d]/g, ''));