'use strict';


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


