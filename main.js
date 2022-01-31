(function () {
	'use strict';
	// this function is strict...
}());

let lang = 'ru';
let daysRu = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
let daysEN = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

// Первый способ
if (lang === 'ru') {
	console.log(daysRu);
} else {
	console.log(daysEN);
}

// Второй способ
switch (lang) {
	case 'ru':
		console.log(daysRu);
		break;
	case 'en':
		console.log(daysEN);
		break;
}

// Третий способ
let daysArr = {
	'ru': ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
	'en': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
};
console.log(daysArr[lang]);

// ==============================================================
// Задание 2

let namePerson = 'Артем';

namePerson === 'Артем' ? console.log('Директор') :
	namePerson === 'Александр' ? console.log('преподаватель') :
	console.log('студент');