'use strict';

// Анимация
const circle = document.querySelector('.circle');
const circleSmall = document.querySelector('.circle-small');
const circleBig = document.querySelector('.circle-big');
const btnStart = document.querySelector('#start');
const btnReset = document.querySelector('#reset');

let active = false;
let count = 0;
let idInterval;

const animate = () => {
	count++;
	idInterval = requestAnimationFrame(animate);

	// if (count < 200) {
	// 	square.style.left = count * 3 + 'px';
	// 	circle.style.top = count * 3 + 'px';
	// } else if (count < 400) {
	// 	square.style.left = count * 3 + 'px';
	// } else {
	// 	cancelAnimationFrame(idInterval);
	// }
};

btnStart.addEventListener('click', () => {
	circleBig.style.animation = "moving 3s infinite linear";
});
btnReset.addEventListener('click', () => {
	circleBig.style.animation = "moving 3s infinite linear";
});