'use strict';

while (isNaN(parseFloat(num) && isFinite(num))) {
	var num = prompt('Введите число', '');
	if (num == null) break;
	num = num.trim().split(' ')[0].replace(/[^+\d]/g, '');
}

console.log(num);