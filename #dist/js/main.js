'use strict';

// -----------------------------slider
const slides = document.querySelector('.slider__slides'),
      slide = document.querySelectorAll('.slider__slide');

let step = 1;

setInterval(()=>{

   if(step > 0){
      slide[step-1].classList.remove('active');
   }else{
      slide[slide.length-1].classList.remove('active');
   }
   slide[step].classList.add('active');
   step++;
   
   if(step == slide.length){
      step = 0;
   }
   
  
   
},10000);

// -----------------------------news-cards
class NewCard {
   constructor(img, altimg, title, subtitle, text, data, perentSelector, ...classes){
       this.img = img;
       this.altimg =altimg;
       this.title = title;
       this.subtitle = subtitle;
       this.text = text;
       this.perentSelector = document.querySelector(perentSelector);
       this.classes = classes;
       this.data = data;
   }

   render(){
       const element = document.createElement('div');
       if(this.classes.length === 0){
           this.classes = 'news__card';
           element.classList.add(this.classes);
       }else{
           this.classes.forEach(elem=>element.classList.add(elem)); 
       }
       
       element.innerHTML = `
         <div class="news__img">
            <img src=${this.img} alt=${this.altimg}>
            <div class="news__card-bg">
               <img src="icons/loupe.svg">
            </div>
         </div>
         <h3 class="news__card-title"> ${this.title}</h3>
         <p>${this.subtitle}</p>
         <span class="news__card-data">${this.data}</span>
       `;

       this.perentSelector.append(element);
   }
}

fetch("db.json")
.then(result => result.json())
.then(data => {
    data.news.forEach(({img, altimg, title, subtitle, text, data})=> {
   new NewCard(img, altimg, title, subtitle, text, data, '.news__cards' ).render();
   });
});
    

