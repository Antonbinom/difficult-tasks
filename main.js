'use strict';

const DomElement = function (select, height, width, bg, fontSize, color, content) {
	this.select = select;
	this.height = height;
	this.width = width;
	this.bg = bg;
	this.fontSize = fontSize;
	this.color = color;
	this.content = content;

	this.Element = function () {

		if (this.select.substr(0, 1) == '.') {
			const div = document.createElement('div');
			div.className = this.select.substr(1);
			div.innerHTML = this.content;
			div.style.height = this.height + "px";
			div.style.width = this.width + "px";
			div.style.backgroundColor = this.bg;
			div.style.fontSize = this.fontSize + "px";
			div.style.color = this.color;
			document.body.append(div);


		} else if (this.select.substr(0, 1) == '#') {
			const p = document.createElement('p');
			p.id = this.select.substr(1);
			p.innerHTML = this.content;
			p.style.height = this.height + "px";
			p.style.width = this.width + "px";
			p.style.backgroundColor = this.bg;
			p.style.fontSize = this.fontSize + "px";
			p.style.color = this.color;
			document.body.append(p);
		}
	};
};

const newElement1 = new DomElement('#new', '100', '100', 'green', '16', 'white', 'Привет!');
newElement1.Element();
console.log(newElement1);
const newElement2 = new DomElement('#new', '100', '100', 'yellow', '16', 'black', 'Привет!');
newElement2.Element();