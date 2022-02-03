'use strict';
let num;
while (isNaN(parseFloat(num) && isFinite(num))) {
	num = prompt('Введите число', '');
	if (num == null) break;
	num = num.trim().split(' ')[0].replace(/[^+\d]/g, '');
}

console.log(num);