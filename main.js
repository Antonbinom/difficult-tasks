'use strict';

const frame = document.querySelector('.frame');
const cube = document.querySelector('.cube');
const btnStart = document.querySelector('#start');
const btnReset = document.querySelector('#reset');

let active = false;
let count = 0;
let idInterval;

const animate = () => {

	idInterval = requestAnimationFrame(animate);

	if (cube.offsetTop < frame.clientHeight - 100) {
		count++;
		cube.style.left = count * 7 + 'px';
		cube.style.top = count * 2 + 'px';
	} else {
		cancelAnimationFrame(idInterval);
	}
	console.log(count);
};

btnStart.addEventListener('click', () => {
	if (active) {
		cancelAnimationFrame(idInterval);
		active = false;
	} else {
		idInterval = requestAnimationFrame(animate);
		active = true;
	}

	btnReset.addEventListener('click', () => {
		count = 0;
		cube.style.left = 0;
		cube.style.top = 0;
		cancelAnimationFrame(idInterval);
		active = false;
	});
});