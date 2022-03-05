'use strict';

const getData = (url) => { // функция получения данных из файла db.json
	fetch(url)
		.then(response => response.json()) // получаем данные и обрабатываем их json
		.then(data => {
			console.log(data);
			sendData({
					url: 'https://jsonplaceholder.typicode.com/posts',
					dataBase: JSON.stringify(data),
					method: 'POST'
				})
				.then(data => console.log(data))
				.catch(error => console.log(error));
		}) // запускаем функцию отправки данных и передаем в нее полученные данные
		.catch(error => {
			console.log(error);
		});
}

const sendData = ({
	url,
	dataBase,
	method = 'GET'
}) => { // функция отправки данных
	return fetch(url, { // отправляь будем на данны url
		method: method, // метод отправки
		body: dataBase, // преобразуем данные
		headers: {
			'Content-type': 'application/json; charset=UTF-8', // указываем тип данных
		},
	}).then(response => response.json())
};

getData('db.json');