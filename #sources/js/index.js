'use strict';

document.addEventListener("DOMContentLoaded", () => {


   // -----------------------------slider
   const slides = document.querySelector('.slider__slides'),
      slide = document.querySelectorAll('.slider__slide'),
      newsModal = document.querySelector('.news__modal'),
      newsModalClose = document.querySelector('.news__modal-close'),
      newsModalTitle = document.querySelector('#news__modal-title'),
      newsModalSubtitle = document.querySelector('#news__modal-subtitle'),
      newsModalSrc = document.querySelector('#news__modal-img'),
      newsModalText = document.querySelector('#news__modal-text'),
      newsModalData = document.querySelector('#news__modal-data');

   let newsCard,
       cardsDb = [];
       


   let step = 1;

   setInterval(() => {
      if (step > 0) {
         slide[step - 1].classList.remove('active');
      } else {
         slide[slide.length - 1].classList.remove('active');
      }
      slide[step].classList.add('active');
      step++;

      if (step == slide.length) {
         step = 0;
      }
   }, 10000);

   // -----------------------------news-cards
   class NewCard {
      constructor(img, altimg, title, subtitle, text, data, perentSelector, ...classes) {
         this.img = img;
         this.altimg = altimg;
         this.title = title;
         this.subtitle = subtitle;
         this.text = text;
         this.perentSelector = document.querySelector(perentSelector);
         this.classes = classes;
         this.data = data;
      }

      render() {
         const element = document.createElement('div');
         if (this.classes.length === 0) {
            this.classes = 'news__card';
            element.classList.add(this.classes);
         } else {
            this.classes.forEach(elem => element.classList.add(elem));
         }

         element.innerHTML = `
            <div class="news__img">
               <img src=${this.img} alt=${this.altimg}>
               <div class="news__card-bg">
                  <img src="icons/loupe.svg">
               </div>
            </div>
            <h3 class="news__card-title"> ${this.title}</h3>
            <p>${this.text.substring(0,100)}...</p>
            <span class="news__card-data">${this.data}</span>
         `;

         this.perentSelector.append(element);
      }
   }

   fetch("db.json")
      .then((result) => {
         return result.json();
      })
      .then(data => {
         data.news.forEach(({ img, altimg, title, subtitle, text, data }, i) => {
            new NewCard(img, altimg, title, subtitle, text, data, '.news__cards').render();
            cardsDb[i] = { img, altimg, title, subtitle, text, data };
         });
         showNewsModal();
         hideNewsModal();
      });

  
  
   function showNewsModal() {
      newsCard = document.querySelectorAll('.news__card');
      newsCard.forEach((elem, i) => {
         elem.addEventListener("click", (e) => {

            newsModalSrc.src = cardsDb[i].img;
            newsModalSrc.alt = cardsDb[i].altimg;
            newsModalTitle.innerText = cardsDb[i].title;
            newsModalSubtitle.innerText = cardsDb[i].subtitle;
            newsModalText.innerText = cardsDb[i].text;
            newsModalData.innerText = cardsDb[i].data;
            
            document.querySelector('body').style.overflow = "hidden";

            newsModal.classList.add('active');
         });
      });
   }

   function hideNewsModal() {
      window.addEventListener("click", (e) => {

         if (e.target == newsModalClose || e.target == newsModal || e.target == newsModalClose.children[0] || e.target == newsModalClose.children[1]) {
            newsModal.classList.remove('active');
            document.querySelector('body').style.overflow = "auto";
         }

      });
   }
});


