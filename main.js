'use strict';

const DomElement = function (select, position, height, width, bg, left, top) {
	this.select = select;
	this.position = position;
	this.height = height;
	this.width = width;
	this.bg = bg;
	this.left = 0;
	this.top = 0;
};

DomElement.prototype.Element = function () {
	const div = document.createElement('div');
	div.className = this.select;
	div.style.position = this.position;
	div.style.height = this.height + "px";
	div.style.width = this.width + "px";
	div.style.backgroundColor = this.bg;
	div.style.left = this.left;
	div.style.opacity = this.opacity;
	document.body.append(div);
	console.log(this.left);
	window.addEventListener('keydown', (event) => {
		if (event.key == "ArrowRight") {
			this.left += 10;
			div.style.left = this.left + "px";
		} else if (event.key == "ArrowLeft") {
			this.left -= 10;
			div.style.left = this.left + "px";
		} else if (event.key == "ArrowDown") {
			this.top += 10;
			div.style.top = this.top + "px";
		} else if (event.key == "ArrowUp") {
			this.top -= 10;
			div.style.top = this.top + "px";
		}
	});
};
const newElement = new DomElement('div', 'absolute', '100', '100', 'green');

newElement.Element();