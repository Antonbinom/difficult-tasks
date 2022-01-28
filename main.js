// способ первый
let num = 266219;
let numArr = String(num).split('');
let count = 1;
numArr.forEach(function (elem) {
	count *= elem;
});
console.log(count);

let countTripled = count * 3;

console.log(countTripled);
console.log(countTripled.toString().slice(0, 2));


// способ второй
// let num = 266219;

// function multiply() {
// 	numArr = String(num).split('');
// 	let count = 1;
// 	for (i = 0; i < numArr.length; i++) {
// 		count *= numArr[i];
// 	}
// 	console.log(count);

// 	let countTripled = count * 3;
// 	console.log(countTripled);

// 	console.log(countTripled.toString().slice(0, 2));
// }

// multiply();