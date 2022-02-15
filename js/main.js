'use strict';

const headerInput = document.querySelector('.header-input');
const todoList = document.querySelector('.todo-list');
const todoControl = document.querySelector('.todo-control');
const todoCompleted = document.querySelector('.todo-completed');
let toDoData = []; // создаем массив куда будем добавлять новые тудухи

// преобразуем данные в массив
const todoStorage = function () {
	if (localStorage.getItem('toDoData')) { // если в localStorage хранятся данные
		toDoData = JSON.parse(localStorage.getItem('toDoData')); // преобразуем их в массив
	}
};
todoStorage();

// Отрисовываем верстку
const render = function () {
	todoList.innerHTML = ''; // очищаем верстку в списке дел
	todoCompleted.innerHTML = ''; // очищаем верстку в списке выполненных дел

	// перебираем массив toDo
	toDoData.forEach(function (item, index) {
		const li = document.createElement('li'); // создаем элемент li

		// с классом
		li.classList.add('todo-item');
		// и версткой внутри
		li.innerHTML = '<span class="text-todo">' + item.text + '</span>' + //
			'<div class="todo-buttons">' +
			'<button class="todo-remove"></button>' +
			'<button class="todo-complete"></button>' +
			'</div>';

		// если у объекта свойство complited == true
		if (item.completed) {
			todoCompleted.append(li); // добавляем в завершенные
		} else {
			todoList.append(li); // иначе в незавершенных
		}

		localStorage.setItem('toDoData', JSON.stringify(toDoData)); // добавляем данные в localStorage и преобразуем в строку

		// при нажатии на иконку с галочкой
		li.querySelector('.todo-complete').addEventListener('click', function () {
			item.completed = !item.completed; // изменяем значение у свойства completed на true/false
			render();
		});

		//при нажатии на корзину удаляем дело
		li.querySelector('.todo-remove').addEventListener('click', function () {
			li.remove(); // удаляем верстку
			toDoData.splice(index, 1); // удаляем объект в массиве
			localStorage.setItem('toDoData', JSON.stringify(toDoData)); // вносим изменение в localStorage и переводим в строку
		});
	});
};

// при нажатии на кнопку +
todoControl.addEventListener('submit', function (event) {
	event.preventDefault();

	if (headerInput.value == '') { // если инпут пустой
		headerInput.placeholder = 'Введите название задачи!'; // выводим сообщение в placeholder
	} else {
		const newTodo = { // создаем новый объект  со свойствами
			text: headerInput.value, // значение берем из инпута
			completed: false
		};

		toDoData.push(newTodo); // и вставляем элемент в массив
		headerInput.value = ''; // очищаем инпут

		render(); // запускаем функцию где отрисовываем верстку
		headerInput.placeholder = 'Какие планы?';
	}
});

render(); // отрисовываем страницу при перезагрузки исходя из данных localStorage