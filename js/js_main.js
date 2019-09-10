"use strict";

main.addEventListener ('click', function (evt) {
	let text = document.querySelector('.slider__title');
	let target = evt.target;
	console.log(target);

	if (target.className === 'first') {
		main.style.backgroundImage = 'url("./img/Мороженко 1.png"), url("./img/Мороженко 2.png"), url("./img/Подсветка.png")';
		main.style.backgroundColor = '#849D8F';
		main.style.transition = 'background-image, background-color, ease-in, 1s';
		text.textContent = 'Крем-брюле и пломбир с малиновым джемом';
	}

	if (target.className === 'second') {
		main.style.backgroundImage = 'url("./img/Мороженко 3.png"), url("./img/Мороженко 4.png"), url("./img/Подсветка 2.png")';
		main.style.backgroundColor = '#8996A6';
		main.style.transition = 'background-image, background-color, ease-in, 1s';
		text.textContent = 'Шоколадный пломбир и лимонный сорбет';
	}

	if (target.className === 'third') {
		main.style.backgroundImage = 'url("./img/Мороженко 5.png"), url("./img/Мороженко 6.png"), url("./img/Подсветка 3.png")';
		main.style.backgroundColor = '#9D8B84';
		main.style.transition = 'background-image, background-color, ease-in, 1s';
		text.textContent = 'Пломбир с помадкой и клубничный щербет';
	}
});
