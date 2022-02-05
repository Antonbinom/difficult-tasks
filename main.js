'use strict';

const week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const div = document.getElementById('div');

const now = new Date().getDay();

week.forEach(function (item, index) {
	let p = document.createElement('p');
	p.innerHTML = item;
	if (index == 5 || index == 6) {
		p.style.fontStyle = "Italic";
	}
	if (index == new Date().getDay() - 1) {
		p.style.color = "red";
	}
	div.appendChild(p);
});