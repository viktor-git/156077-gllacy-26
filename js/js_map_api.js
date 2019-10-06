"use strict";

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

