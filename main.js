'use strict';

const input = document.querySelector('#input');
const text = document.querySelector('p');

// передаем текст из инпута в параграф
const textOutput = () => {
	text.textContent = input.value;
};

// не даем запустить функцию пока не перестанем вводить текст
const debounce = (callback) => {
	let timeout; // создаем счетчик
	return (argument) => { //Возвращаем функцию вместе с ее аргументом
		clearTimeout(timeout); // Сбрасываем запуск функции
		timeout = setTimeout(callback, 300, argument); // Помещаем в функцию timeout функцию переданную в качестве аргумента в debounce
	};
}

const debouncedOnInput = debounce(textOutput); // запускаем функцию с аргументом в виде текста
input.addEventListener('input', debouncedOnInput); // запускаем функцию при вводе текста