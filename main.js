'use strict';

const select = document.querySelector('select');
const options = select.querySelectorAll('option');

const getData = () => {
	fetch('/cars.json')
		.then(response => response.json())
		.then(data => console.log(data));
};

const sendData = (data) => {
	fetch('https://jsonplaceholder.typicode.com/posts', {
		method: 'POST',
		body: JSON.stringify(data),
		headers: {
			'Content-Type': 'application/json'
		}
	}).then(res => res.json());


};

getData();





// const getData = () => {
// 	fetch('cars.json')
// 		.then(response => response.json())
// 		.then(data => {
// 			console.log(data);
// 			data.forEach((element, i) => {
// 				console.log(element[i].brand);
// 			});
// 			sendData({
// 					url: 'https://jsonplaceholder.typicode.com/posts',
// 					dataBase: JSON.stringify(data),
// 					method: 'POST'
// 				})
// 				.then(data => {
// 					console.log(data);
// 				})
// 				.catch(error => console.log(error));
// 		})
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

// getData();