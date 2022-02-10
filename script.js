'use strict';

const btn = document.getElementById('btn');
const btn2 = document.getElementById('e_btn');
const input = document.getElementById('text');
const range = document.getElementById('range');
const span = document.getElementById('range-span');
const square = document.getElementById('square');
const circle = document.getElementById('circle');

// Поменять цвет цвадрата
btn.addEventListener('click', function () {
	square.style.backgroundColor = input.value;
});

//Изменить размер круга
range.addEventListener('input', function (event) {
	circle.style.height = event.target.value + "%";
	circle.style.width = event.target.value + "%";
	span.textContent = event.target.value + "%";
});

// Скрыть кнопку
btn2.addEventListener('click', function (event) {
	event.target.style.display = "none";
});