"use strict";main.addEventListener("click",function(e){var a=e.target;console.log(a);var r=document.querySelector(".slider__title p");"slider__scroll__first"===a.id&&(main.classList.remove("second__theme"),main.classList.remove("third__theme"),main.classList.add("first__theme"),r.textContent="Крем-брюле и пломбир с малиновым джемом"),"slider__scroll__second"===a.id&&(main.classList.remove("third__theme"),main.classList.add("second__theme"),r.textContent="Шоколадный пломбир и лимонный сорбет"),"slider__scroll__third"===a.id&&(main.classList.remove("second__theme"),main.classList.add("third__theme"),r.textContent="Пломбир с помадкой и клубничный щербет")});var feedBack=document.querySelector(".modal__container");if(feedBack)var modalFeedForm=feedBack.querySelector(".modal__feedback__form"),feedEmail=modalFeedForm.querySelector("input[name=email]"),feedMessage=modalFeedForm.querySelector("textarea[name=message]");main.addEventListener("click",function(e){var a=e.target;if(a.classList.contains("feedback")){e.preventDefault();var r=document.createElement("div");r.classList.add("overlay"),r.style.height=document.documentElement.scrollHeight+"px",r.style.width=document.documentElement.clientWidth+"px",feedBack.classList.add("modal__show"),main.prepend(r),feedback__user__name.focus()}"close__btn"!==a.className&&"overlay"!==a.className||(feedBack.querySelector(".modal__feedback__form").classList.remove("err__trigger"),feedBack.querySelector("input[name=email]").classList.remove("form__err"),feedBack.querySelector("textarea[name=message]").classList.remove("form__err"),feedBack.classList.remove("modal__show"),document.querySelector(".overlay").remove())}),window.addEventListener("keydown",function(e){27===e.keyCode&&(e.preventDefault(),feedBack.classList.contains("modal__show")&&(feedBack.querySelector(".modal__feedback__form").classList.remove("err__trigger"),feedBack.querySelector("input[name=email]").classList.remove("form__err"),feedBack.querySelector("textarea[name=message]").classList.remove("form__err"),feedBack.classList.remove("modal__show"),document.querySelector(".overlay").remove()))}),modalFeedForm&&modalFeedForm.addEventListener("submit",function(e){feedEmail.value&&feedMessage.value||(e.preventDefault(),feedBack.classList.remove("err__trigger"),feedBack.offsetWidth,feedBack.classList.add("err__trigger"),feedEmail.value?feedEmail.classList.remove("form__err"):feedEmail.classList.add("form__err"),feedMessage.value?feedMessage.classList.remove("form__err"):feedMessage.classList.add("form__err"))});var login=document.querySelector(".login__form");login.addEventListener("submit",function(e){login__email.value&&login__password.value||(e.preventDefault(),login__email.value?login__email.classList.remove("form__err"):login__email.classList.add("form__err"),login__password.value?login__password.classList.remove("form__err"):login__password.classList.add("form__err"))});