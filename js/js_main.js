'use strict';

//Стилизация главной
	
main.addEventListener ('click', function (evt) {
	var target = evt.target;
	console.log(target);
	var text = document.querySelector('.slider__title p');

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


var feedBack = document.querySelector('.modal__container');
	if (feedBack) {
			var modalFeedForm = feedBack.querySelector('.modal__feedback__form');
			var feedEmail = modalFeedForm.querySelector('input[name=email]');
			var feedMessage = modalFeedForm.querySelector('textarea[name=message]');
	}

main.addEventListener('click', function (evt) {
	var target = evt.target;
		if (target.classList.contains('feedback')) {
				evt.preventDefault();
				var overlay = document.createElement('div');
				overlay.classList.add('overlay');
				overlay.style.height = document.documentElement.scrollHeight + 'px';
				overlay.style.width = document.documentElement.clientWidth + 'px';
				feedBack.classList.add('modal__show');
				main.prepend(overlay);
				feedback__user__name.focus();
		}

		if (target.className === 'close__btn' || target.className === 'overlay') {
				feedBack.querySelector('.modal__feedback__form').classList.remove('err__trigger');
				feedBack.querySelector('input[name=email]').classList.remove('form__err');
				feedBack.querySelector('textarea[name=message]').classList.remove('form__err');
				feedBack.classList.remove('modal__show');
				document.querySelector('.overlay').remove();
			
		}
});

window.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
	    	evt.preventDefault();

		    if (feedBack.classList.contains('modal__show')) {
						feedBack.querySelector('.modal__feedback__form').classList.remove('err__trigger');
						feedBack.querySelector('input[name=email]').classList.remove('form__err');
						feedBack.querySelector('textarea[name=message]').classList.remove('form__err');
						feedBack.classList.remove('modal__show');
						document.querySelector('.overlay').remove();
      		}
    }  
});

if (modalFeedForm) {
	modalFeedForm.addEventListener('submit', function (evt) {

		if (!feedEmail.value || !feedMessage.value) {
				evt.preventDefault();
				feedBack.classList.remove('err__trigger');
				void feedBack.offsetWidth;
				feedBack.classList.add('err__trigger');
				(!feedEmail.value) ? feedEmail.classList.add('form__err') : feedEmail.classList.remove('form__err');
				(!feedMessage.value) ? feedMessage.classList.add('form__err') :  feedMessage.classList.remove('form__err');
		}
	});
}

var login = document.querySelector('.login__form');

login.addEventListener('submit', function (evt) {

	if (!login__email.value || !login__password.value) {
			evt.preventDefault();
			(!login__email.value) ? login__email.classList.add('form__err') : login__email.classList.remove('form__err');
			(!login__password.value) ? login__password.classList.add('form__err') :  login__password.classList.remove('form__err');
	}
});

//jQuery UI для фильтра цены
$( function() {
    $( "#slider-range" ).slider({
      range: true,
      min: 0,
      max: 500,
      values: [ 75, 300 ],
      slide: function( event, ui ) {
        $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
      }
    });
    $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
      " - $" + $( "#slider-range" ).slider( "values", 1 ) );
  } );

//Фильтр по цене
var handle = document.querySelectorAll('.ui-slider-handle');
var itemsPrices = document.querySelectorAll('.item__price');

var minPrice = Array.from(itemsPrices).sort( (a, b) => {
	return parseInt(a.textContent) - parseInt(b.textContent);
});

var maxPrice = Array.from(itemsPrices).sort( (a, b) => {
	return  parseInt(b.textContent) - parseInt(a.textContent);
});

var rangeMinVal = document.querySelector('.output__min');
var rangeMaxVal = document.querySelector('.output__max');

rangeMinVal.placeholder = parseInt( minPrice[0].textContent );
rangeMaxVal.placeholder = parseInt( maxPrice[0].textContent );

handle[0].addEventListener('mouseup', () => {
	rangeMinVal.value = 500 * parseInt(handle[0].style.left) / 100;
	if ( rangeMinVal.value < 100)  {
		rangeMinVal.value = 100;
	}
});

handle[1].addEventListener('mouseup', () => {
	rangeMaxVal.value = 500 * parseInt(handle[1].style.left) / 100;
	if ( rangeMaxVal.value < 100)  {
		rangeMaxVal.value = 100;
	}
});

                   
	
