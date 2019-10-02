"use strict";

//Стилизация главной
main.addEventListener ('click', function (evt) {
	let text = document.querySelector('.slider__title p');
	let feedBack = document.querySelector('.modal__container');
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
		main.prepend(overlay);

	}

	if (target.className === 'close__btn') {
		feedBack.style.display = 'none';
		document.querySelector('.overlay').remove();
	}

});

//Интерактивная карта
ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            //center: [59.939148, 30.322700],
            center: [59.938631, 30.323055],
            zoom: 19
        }, {
            searchControlProvider: 'yandex#search'
        }),

        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'Глэйси',
            balloonContent: 'Глэйси'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: '../img/svg/pin.svg',
            // Размеры метки.
            iconImageSize: [80, 140],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            //iconImageOffset: [-5, -38]
        });

    myMap.geoObjects
        .add(myPlacemark)
});