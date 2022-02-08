'use strict';

function format(value) {
	if (value < 10) {
		value = '0' + value;
	}
	return value;
}

function suffixHour(value) {
	if (value % 10 > 1 && value % 10 < 5) {
		value = ' часа ';
	} else if (value % 10 == 1 && value != 11) {
		value = ' час ';
	} else {
		value = ' часов ';
	}
	return value;
}

function suffixMinute(value) {
	if (value % 10 > 1 && value % 10 < 5) {
		value = ' минуты ';
	} else if (value % 10 == 1 && value != 11) {
		value = ' минута ';
	} else {
		value = ' минут ';
	}
	return value;
}

function suffixSecond(value) {
	if (value % 10 > 1 && value % 10 < 5) {
		value = ' секунды ';
	} else if (value % 10 == 1 && value != 11) {
		value = ' секунда ';
	} else {
		value = ' секунд ';
	}
	return value;
}

function dateSecond() {
	let now = new Date();
	let optionsFirst = {
		weekday: 'long',
		month: 'long',
		day: 'numeric',
	};
	let year = now.getFullYear();
	let hours = format(now.getHours());
	let minutes = format(now.getMinutes());
	let seconds = format(now.getSeconds());

	return 'Сегодня ' + now.toLocaleDateString('eu-US', optionsFirst) + ', ' + year + ' года, ' + hours + suffixHour(hours) + minutes + suffixMinute(minutes) + seconds + suffixSecond(seconds);
}

function dateB() {
	let now = new Date();
	let day = format(now.getDate());
	let month = format(now.getMonth() + 1);
	let year = now.getFullYear();
	let hours = format(now.getHours());
	let minutes = format(now.getMinutes());
	let seconds = format(now.getSeconds());

	return day + "." + month + "." + year + " - " + hours + ":" + minutes + ":" + seconds;
}

setInterval(function () {
	document.getElementById('timeA').innerHTML = dateSecond();
}, 1000);

setInterval(function () {
	document.getElementById('timeB').innerHTML = dateB();
}, 1000);