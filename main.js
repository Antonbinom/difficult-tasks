'use strict';

const DomElement = function (select, position, height, width, bg, left, top) {
	this.select = select;
	this.position = position;
	this.height = height;
	this.width = width;
	this.bg = bg;
	this.left = left + "px";
	this.top = top + "px";

	this.Element = function () {
		const div = document.createElement('div');
		div.className = this.select;
		div.style.position = this.position;
		div.style.height = this.height + "px";
		div.style.width = this.width + "px";
		div.style.backgroundColor = this.bg;
		div.style.left = left;
		document.body.append(div);
		console.log(this.left);
	};

	this.move = () => {
		window.addEventListener('keydown', function (event) {
			console.log(this);
			if (event.key == "ArrowRight") {
				left = +left + 10;
				console.log(left);
			} else if (event.key == "ArrowLeft") {
				left = +left - 10;
				console.log(left);
			} else if (event.key == "ArrowUp") {
				top = +top + 10;
				console.log(top);
			} else if (event.key == "ArrowDown") {
				top = +top - 10;
				console.log(top);
			}
		});
	};
};

const newElement = new DomElement('div', 'absolute', '100', '100', 'green', '0', '0');
newElement.move();
newElement.Element();
console.log(newElement);




// window.onkeydown = function moveIt(event) {
// 	if (event.keyCode == 37) {
// 		let left = 0;
// 		newElement.style.left = left - 10 + 'px';
// 	} else if (event.keyCode == 39) {
// 		let left = 0;
// 		newElement.style.left = left + 10 + 'px';
// 	}

// };




// DomElement.prototype.Element = function () {
// 	if (this.select.substr(0, 1) == '.') {
// 		const div = document.createElement('div');
// 		div.className = this.select.substr(1);
// 		div.innerHTML = this.content;
// 		div.style.height = this.height + "px";
// 		div.style.width = this.width + "px";
// 		div.style.backgroundColor = this.bg;
// 		div.style.fontSize = this.fontSize + "px";
// 		div.style.color = this.color;
// 		document.body.append(div);


// 	} else if (this.select.substr(0, 1) == '#') {
// 		const p = document.createElement('p');
// 		p.id = this.select.substr(1);
// 		p.innerHTML = this.content;
// 		p.style.height = this.height + "px";
// 		p.style.width = this.width + "px";
// 		p.style.backgroundColor = this.bg;
// 		p.style.fontSize = this.fontSize + "px";
// 		p.style.color = this.color;
// 		document.body.append(p);
// 	}
// };



// const Person = function (name) { // создаем конструктор
// 	this.name = name;
// 	console.log(this);
// }

// метод добавленый вне объекта принадлежит прототипу объекта

// Person.prototype.sayHello = function () {
// 	console.log('Привет, меня зовут ' + this.name);
// }

// метод добавленый внутри объекта принадлежит самому  объекта
// Плюс - Дает доступ к скрытым переменным
// Минус - у разных объектов методы будут разными, они не будут равны. Т.е метод создается каждый раз вместе с объектом.
// Так же при создании большого количества объектов, сильно нагружается память. Если же метод лежит в прототипе, то память не тратится на создание новых методов.

// const Person = function (name) { // создаем конструктор
// 	this.name = name;
// 	this.sayHello = function () {
// 		console.log('Привет, меня зовут ' + this.name);

// 	}
// }

// const person1 = new Person('Anton');

// person1.sayHello();
// console.log(person1);

// Наследование

// Создаем конструктор Person
// const Person = function (name) {
// 	this.name = name; // со свойством name
// };

// // Добавляем метод sayHello в конструктор Person
// Person.prototype.sayHello = function () {
// 	console.log('Привет, меня зовут ' + this.name);
// };

// // создаем конструктор Studen
// const Student = function (name, role) {
// 	Person.call(this, name); // получаем свойства конструктора Person, перенаправляем контекст вызова свойства name из конструктора Person с помощью this
// 	this.role = role; // со свойствои role
// };

// Student.prototype = Object.create(Person.prototype); // связываем прототип Student с прототипом Person
// Student.prototype.constructor = Student; // создаем внутри конструктора Studen его собственный прототип

// const newStudent = new Student('Anton', 'student');
// console.log(newStudent);