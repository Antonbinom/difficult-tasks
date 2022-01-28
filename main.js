let num = 266219;
let numArr;

function multiply() {
	numArr = String(num).split('');
	let n = 1;
	for (i = 0; i < numArr.length; i++) {
		n *= numArr[i];
	}
	console.log(n);
}

multiply();