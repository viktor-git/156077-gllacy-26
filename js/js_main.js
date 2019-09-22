"use strict";

main.addEventListener ('click', function (evt) {
	let text = document.querySelector('.slider__title p');
	let target = evt.target;
	console.log(target);

	if (target.id === 'slider__scroll__first') {
			main.classList.remove('second__theme');
			main.classList.remove('third__theme');
			main.classList.add('first__theme');
			text.textContent = 'Крем-брюле и пломбир с малиновым джемом';
	}

	if (target.id === 'slider__scroll__second') {
			main.classList.remove('third__theme');
			main.classList.add('second__theme');
			text.textContent = 'Шоколадный пломбир и лимонный сорбет';
	}

	if (target.id === 'slider__scroll__third') {
			main.classList.remove('second__theme');
			main.classList.add('third__theme');
			text.textContent = 'Пломбир с помадкой и клубничный щербет';
	}

});

