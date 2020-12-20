"use strict";

const btns = document.querySelectorAll('.tabs__btn'),
      video = document.querySelector('.tabs__videos'),
      photos = document.querySelector('.tabs__photos');

let photoImg;



btns.forEach((e, i) => {
    
    e.addEventListener('click', e => {
        if(i == 0){
            video.classList.remove('active');
            photos.classList.add('active');
        }else{
            video.classList.add('active');
            photos.classList.remove('active');
        }
    });
});

class NewPhoto{
    constructor(src, alt, perent){
        this.src = src;
        this.alt = alt;
        this.perent = document.querySelector(perent);
    }

    render(){
        const element = document.createElement('div');
        element.classList.add('tabs__photo');
        element.innerHTML = `
            <img class ="tabs__photo-img" src=${this.src} alt=${this.alt}>
        `;

        this.perent.append(element);
    }
}

fetch('db.json')
.then(res => res.json())
.then(res => {
    res.photo[0].forEach(e => {
        console.log(e);
        new NewPhoto(e , 'title', '.tabs__photos').render();
    });
    photoImg = document.querySelectorAll('.tabs__photo-img');
    showPhotoModal();
    closeModalPhoto();
});

//modal

function showPhotoModal() {
    photoImg.forEach( e =>{
        e.addEventListener('click', ()=>{
            const modalImg = document.createElement('img');
            modalImg.classList.add('modal__img');
            modalWrapper.append(modalImg);
            modal.classList.add('active');
            modalImg.src =e.src;
        });
    });
}

function closeModalPhoto(){
    window.addEventListener('click', (e)=>{
        if(e.target == closeModal || e.target == modalContainer){   
            modal.classList.remove('active');
            setTimeout(()=>{modalWrapper.children[1].remove();}, 300);
        }
    });
}





