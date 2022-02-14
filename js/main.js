'use strict';

const headerInput = document.querySelector('.header-input'),
	todoList = document.querySelector('.todo-list'),
	todoControl = document.querySelector('.todo-control'),
	todoCompleted = document.querySelector('.todo-completed');

const todoData = []; // создаем массив куда будем добавлять новые тудухи

const render = function () {
	todoList.innerHTML = ''; // при добавлении новой toDo
	todoCompleted.innerHTML = '';

	todoData.forEach(function (item, index) { // перебираем массив toDo
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
			console.log(todoData)

		} else {
			todoList.append(li); // иначе в незавершенных
			console.log()

		}

		localStorage.setItem(todoData, JSON.stringify(todoData));

		console.log(typeof todoData); // объект
		console.log(todoData); // [1, 2, 3]





		// localStorage.setItem('text' + index, item.text);

		// при нажатии на иконку с галочкой
		li.querySelector('.todo-complete').addEventListener('click', function () {
			item.completed = !item.completed; // изменяем значение у свойства completed на true/false
			render();
		});

		//при нажатии на корзину ужаляем дело
		li.querySelector('.todo-remove').addEventListener('click', function () {
			li.remove();
			todoData.splice(index, 1);
			localStorage.removeItem(index, item.text);
			console.log(index);
		});
	});
};

// при нажатии на кнопку +
todoControl.addEventListener('submit', function (event) {
	event.preventDefault();

	if (headerInput.value == '') {
		headerInput.placeholder = 'Введите название задачи!';

	} else {
		const newTodo = { // создаем новый объект  со свойствами
			text: headerInput.value, // значение берем из инпута
			completed: false
		};

		todoData.push(newTodo); // и вставляем элемент в массив
		headerInput.value = ''; // очищаем инпут

		render(); // запускаем функцию где создается новый элемент
		headerInput.placeholder = 'Какие планы?';
	}
});

localStorage.removeItem('text0');