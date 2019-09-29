"use strict";

main.addEventListener ('click', function (evt) {
	let text = document.querySelector('.slider__title p');
	let feedBack = document.querySelector('.feedback__form__container');
	let overlay = document.createElement('div');
	overlay.classList.add('overlay');
	
	overlay.style.height = document.documentElement.scrollHeight + 'px';
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

	if (target.classList.contains('feedback')) {
		feedBack.style.display = 'block';
		let rect = feedBack.getBoundingClientRect();
		feedBack.style.left = main.clientWidth / 3 + 'px';
		feedBack.style.top =  rect.height - rect.y - 200 + 'px';
		main.prepend(overlay);

	}

	if (target.className === 'close__btn') {
		feedBack.style.display = 'none';
		feedBack.style.top	= '0px';
		document.querySelector('.overlay').remove();
	}

});



