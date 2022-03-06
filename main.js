'use strict';

// const getData = (url) => { // функция получения данных из файла db.json
// 	fetch(url)
// 		.then(response => response.json()) // получаем данные и обрабатываем их json
// 		.then(data => {
// 			console.log(data);
// 			sendData({
// 					url: 'https://jsonplaceholder.typicode.com/posts',
// 					dataBase: JSON.stringify(data),
// 					method: 'POST'
// 				})
// 				.then(data => console.log(data))
// 				.catch(error => console.log(error));
// 		}) // запускаем функцию отправки данных и передаем в нее полученные данные
// 		.catch(error => {
// 			console.log(error);
// 		});
// }

// const sendData = ({
// 	url,
// 	dataBase,
// 	method = 'GET'
// }) => { // функция отправки данных
// 	return fetch(url, { // отправляь будем на данны url
// 		method: method, // метод отправки
// 		body: dataBase, // преобразуем данные
// 		headers: {
// 			'Content-type': 'application/json; charset=UTF-8', // указываем тип данных
// 		},
// 	}).then(response => response.json())
// };

// getData('db.json');

const getData = (url) => {
	const xhr = new XMLHttpRequest();
	xhr.open(
		'GET',
		url,
		true
	)
	xhr.send();

	xhr.onreadystatechange = function () {
		if (xhr.readyState != 4) {
			return;
		}

		if (xhr.status === 200) {
			console.log(JSON.parse(xhr.responseText));
			sendData({
				url: 'https://jsonplaceholder.typicode.com/posts',
				dataBase: JSON.parse(xhr.responseText),
				method: 'POST'
			});
		} else {
			console.log('error', xhr.responseText);
		}
	};

};

const sendData = ({
	url,
	dataBase,
	method = 'GET'
}) => {
	const xhr = new XMLHttpRequest();
	xhr.open(method, url, true); // определяем параметры для запроса
	xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded'); // задаем значение заголовка HTTP запроса (указываем, что передаваемое значение на сервер кодируется в кортежах с ключом, разделенных символоми '&', с '=' между ключом и значением)
	xhr.onreadystatechange = function () { //Call a function when the state changes.
		if (xhr.readyState == 4 && xhr.status == 200) {
			alert(xhr.responseText);
		}
	}
	xhr.send(dataBase); // отправляем запрос на сервер
	console.log(JSON.parse(dataBase))
};

getData('/db.json');