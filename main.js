'use strict';

let arr = ['10', '23', '41', '2', '4', '14', '420', '200', '344', '142', '42', '24'];
let newArr = arr.filter(num => num[0] == '2' || num[0] == '4');

console.log(newArr);

let n = 100;

nextPrime:
	for (let i = 0; i <= n; i++) {

		for (let n = 2; n < i; n++) {
			if (i % n == 0) continue nextPrime;
		}

		console.log(i + ' делитится на ' + 1 + ' и на ' + i);
	}