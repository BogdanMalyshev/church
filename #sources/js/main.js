"use strict";

const btnConnect = document.querySelectorAll('.connectBtn'),
        closeModal = document.querySelector(".close-modal"),
        modalWrapper = document.querySelector(".modal__wrapper"),
        modalContainer = document.querySelector(".modal__container"),
        modalImg = document.querySelector(".modal__img"),
        modal = document.querySelector(".modal");


btnConnect.forEach(e => {
    e.addEventListener('click', ()=>{
        const form = document.createElement('form');
        form.classList.add('form');
        form.innerHTML = `
            <h2>Оставьте нам свои данные <br> и мы вам перезвоним</h2>
            <h3>Введите ваше имя</h3>
            <input type="text" required name="name">
            <h3>Введите ваш телефон</h3>
            <input type="text" required name="phone">
            <h3>Введите ваше сообщение</h3>
            <textarea name="message" required ></textarea>
            <button class="form__btn" type="submit">Отправить</button>
        `;
        modalWrapper.append(form);
        modal.classList.add('active');
    });
});




window.addEventListener('click', (e)=>{
    if(e.target == closeModal || e.target == modalContainer){   
        modal.classList.remove('active');
        setTimeout(()=>{modalWrapper.children[1].remove();}, 300);
    }
});



