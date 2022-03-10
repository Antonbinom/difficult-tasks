'use strict';

const requestURL = 'https://jsonplaceholder.typicode.com/posts';

const sendData = ((method, url, body = null) => {
	return new Promise((resolve, reject) => {
		const xhr = new XMLHttpRequest();

		xhr.open(method, url);

		xhr.responseType = 'json';
		xhr.setRequestHeader('Content-Type', 'application/json');

		xhr.onload = () => {
			if (xhr.status >= 400) {
				reject(xhr.response)
			} else {
				resolve(xhr.response)
			}
		}
		xhr.onerror = () => {
			reject(xhr.response)
		}
		xhr.send(JSON.stringify(body));
	});
});

const body = {
	"user": "Vlad",
	"age": 33,
	"role": "developer"
};

sendData("GET", '/db.json', true)
	.then(data => {
		console.log(data);
		sendData('POST', requestURL, data)
			.then(data => console.log(data))
			.catch(err => console.log(err))
	})
	.catch(err => console.log(err));